import { RoadmapData, Month, Week, Day, LearningItem, RoadmapProgress, PendingItem } from './roadmapTypes';
import { roadmapData } from './roadmapData';

const STORAGE_KEY = 'backend-roadmap-progress';
const START_DATE_KEY = 'roadmap-start-date';
const PENDING_STORAGE_KEY = 'roadmap-pending-items';
const ROADMAP_START_DATE = '2026-01-01'; // Fixed start date

// Calculate which day of the roadmap we're on (0-indexed)
function getCurrentRoadmapDay(): number {
  const startDate = new Date(ROADMAP_START_DATE);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  startDate.setHours(0, 0, 0, 0);
  
  const diffTime = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return Math.max(0, diffDays); // Don't go negative
}

// Calculate current month, week, day based on actual date
function calculateCurrentPosition(): { month: number; week: number; day: number } {
  const roadmapDay = getCurrentRoadmapDay();
  let dayCount = 0;
  
  for (let monthIdx = 0; monthIdx < roadmapData.length; monthIdx++) {
    const month = roadmapData[monthIdx];
    for (let weekIdx = 0; weekIdx < month.weeks.length; weekIdx++) {
      const week = month.weeks[weekIdx];
      for (let dayIdx = 0; dayIdx < week.days.length; dayIdx++) {
        if (dayCount === roadmapDay) {
          return {
            month: monthIdx + 1,
            week: weekIdx + 1,
            day: dayIdx + 1,
          };
        }
        dayCount++;
      }
    }
  }
  
  // If we've passed all days, return the last day
  const lastMonth = roadmapData[roadmapData.length - 1];
  const lastWeek = lastMonth.weeks[lastMonth.weeks.length - 1];
  return {
    month: roadmapData.length,
    week: lastMonth.weeks.length,
    day: lastWeek.days.length,
  };
}

// Get date string for a specific roadmap day
function getDateForRoadmapDay(dayNumber: number): string {
  const startDate = new Date(ROADMAP_START_DATE);
  startDate.setDate(startDate.getDate() + dayNumber);
  return startDate.toISOString().split('T')[0];
}

// Initialize roadmap with progress tracking
export function initializeRoadmap(): RoadmapData {
  if (typeof window === 'undefined') {
    return getDefaultRoadmap();
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Merge stored progress with fresh roadmap data
      return mergeProgressWithRoadmap(parsed.months, parsed.progress, parsed.startDate);
    }
  } catch (error) {
    console.error('Failed to load roadmap:', error);
  }

  return getDefaultRoadmap();
}

function getDefaultRoadmap(): RoadmapData {
  const startDate = ROADMAP_START_DATE;

  if (typeof window !== 'undefined') {
    localStorage.setItem(START_DATE_KEY, startDate);
  }

  const progress = calculateProgress(roadmapData);
  
  return {
    months: roadmapData,
    progress,
    startDate,
  };
}

function mergeProgressWithRoadmap(
  storedMonths: Month[],
  storedProgress: RoadmapProgress,
  startDate: string
): RoadmapData {
  // Create a map of stored items by ID for quick lookup
  const storedItemsMap = new Map<string, LearningItem>();
  storedMonths.forEach(month => {
    month.weeks.forEach(week => {
      week.days.forEach(day => {
        day.items.forEach(item => {
          storedItemsMap.set(item.id, item);
        });
      });
    });
  });

  // Merge stored progress into fresh roadmap data
  const mergedMonths = roadmapData.map(month => {
    const storedMonth = storedMonths.find(m => m.id === month.id);
    return {
      ...month,
      completed: storedMonth?.completed || false,
      completedAt: storedMonth?.completedAt,
      weeks: month.weeks.map(week => {
        const storedWeek = storedMonth?.weeks.find(w => w.id === week.id);
        return {
          ...week,
          completed: storedWeek?.completed || false,
          completedAt: storedWeek?.completedAt,
          days: week.days.map(day => {
            const storedDay = storedWeek?.days.find(d => d.id === day.id);
            return {
              ...day,
              completed: storedDay?.completed || false,
              completedAt: storedDay?.completedAt,
              items: day.items.map(item => {
                const storedItem = storedItemsMap.get(item.id);
                return storedItem ? { ...item, ...storedItem } : item;
              }),
            };
          }),
        };
      }),
    };
  });

  const progress = calculateProgress(mergedMonths);
  
  return {
    months: mergedMonths,
    progress: { ...progress, ...storedProgress },
    startDate: startDate || ROADMAP_START_DATE,
  };
}

function calculateProgress(months: Month[]): RoadmapProgress {
  let totalItems = 0;
  let completedItems = 0;
  let completedMonths = 0;
  
  const currentPos = calculateCurrentPosition();
  const currentMonth = currentPos.month;
  const currentWeek = currentPos.week;
  const currentDay = currentPos.day;

  months.forEach((month) => {
    if (month.completed) {
      completedMonths++;
    }

    month.weeks.forEach((week) => {
      week.days.forEach((day) => {
        day.items.forEach(item => {
          totalItems++;
          if (item.completed) {
            completedItems++;
          }
        });
      });
    });
  });

  const overallProgress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
  const pendingCount = getPendingItems(months).length;

  return {
    currentMonth,
    currentWeek,
    currentDay,
    totalItems,
    completedItems,
    totalMonths: months.length,
    completedMonths,
    overallProgress: Math.round(overallProgress * 100) / 100,
    pendingCount,
    dailyProgress: typeof window !== 'undefined' ? getDailyProgress() : [],
  };
}

function getDailyProgress(): { date: string; itemsCompleted: number }[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem('daily-progress');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Get pending items (items from past days that aren't completed)
export function getPendingItems(months: Month[]): PendingItem[] {
  const pendingItems: PendingItem[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentRoadmapDay = getCurrentRoadmapDay();
  
  let dayCount = 0;
  
  months.forEach((month) => {
    month.weeks.forEach((week) => {
      week.days.forEach((day) => {
        // Only check days that have passed
        if (dayCount < currentRoadmapDay) {
          const assignedDate = getDateForRoadmapDay(dayCount);
          const assignedDateObj = new Date(assignedDate);
          const daysMissed = Math.floor((today.getTime() - assignedDateObj.getTime()) / (1000 * 60 * 60 * 24));
          
          day.items.forEach((item) => {
            if (!item.completed) {
              pendingItems.push({
                id: `pending-${item.id}-${dayCount}`,
                itemId: item.id,
                title: item.title,
                type: item.type,
                assignedDate,
                daysMissed,
                monthId: month.id,
                weekId: week.id,
                dayId: day.id,
                searchKeyword: item.searchKeyword,
              });
            }
          });
        }
        dayCount++;
      });
    });
  });
  
  return pendingItems;
}

// Load pending items from storage
export function loadPendingItems(): PendingItem[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(PENDING_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Save pending items to storage
export function savePendingItems(items: PendingItem[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(PENDING_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save pending items:', error);
  }
}

// Save roadmap progress
export function saveRoadmap(roadmap: RoadmapData): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(roadmap));
    localStorage.setItem(START_DATE_KEY, roadmap.startDate);
    // Update pending items
    const pendingItems = getPendingItems(roadmap.months);
    savePendingItems(pendingItems);
  } catch (error) {
    console.error('Failed to save roadmap:', error);
  }
}

// Toggle item completion
export function toggleItemCompletion(
  roadmap: RoadmapData,
  monthId: string,
  weekId: string,
  dayId: string,
  itemId: string
): RoadmapData {
  const updatedMonths = roadmap.months.map(month => {
    if (month.id !== monthId) return month;

    const updatedWeeks = month.weeks.map(week => {
      if (week.id !== weekId) return week;

      const updatedDays = week.days.map(day => {
        if (day.id !== dayId) return day;

        const updatedItems = day.items.map(item => {
          if (item.id !== itemId) return item;

          const wasCompleted = item.completed;
          const nowCompleted = !wasCompleted;

          return {
            ...item,
            completed: nowCompleted,
            completedAt: nowCompleted ? new Date().toISOString() : undefined,
          };
        });

        // Check if all items in day are completed
        const allItemsCompleted = updatedItems.every(item => item.completed);
        const dayCompleted = allItemsCompleted && updatedItems.length > 0;

        return {
          ...day,
          items: updatedItems,
          completed: dayCompleted,
          completedAt: dayCompleted ? new Date().toISOString() : undefined,
        };
      });

      // Check if all days in week are completed
      const allDaysCompleted = updatedDays.every(day => day.completed);
      const weekCompleted = allDaysCompleted && updatedDays.length > 0;

      return {
        ...week,
        days: updatedDays,
        completed: weekCompleted,
        completedAt: weekCompleted ? new Date().toISOString() : undefined,
      };
    });

    // Check if all weeks in month are completed
    const allWeeksCompleted = updatedWeeks.every(week => week.completed);
    const monthCompleted = allWeeksCompleted && updatedWeeks.length > 0;

    return {
      ...month,
      weeks: updatedWeeks,
      completed: monthCompleted,
      completedAt: monthCompleted ? new Date().toISOString() : undefined,
    };
  });

  // Update daily progress
  let dailyProgress = roadmap.progress.dailyProgress;
  if (typeof window !== 'undefined') {
    const today = new Date().toISOString().split('T')[0];
    dailyProgress = getDailyProgress();
    const todayProgress = dailyProgress.find(p => p.date === today);
    
    if (todayProgress) {
      todayProgress.itemsCompleted += 1;
    } else {
      dailyProgress.push({ date: today, itemsCompleted: 1 });
    }
    
    localStorage.setItem('daily-progress', JSON.stringify(dailyProgress));
  }

  const progress = calculateProgress(updatedMonths);
  progress.dailyProgress = dailyProgress;

  const updatedRoadmap: RoadmapData = {
    ...roadmap,
    months: updatedMonths,
    progress,
  };

  saveRoadmap(updatedRoadmap);
  return updatedRoadmap;
}

// Update practice problem count
export function updatePracticeCount(
  roadmap: RoadmapData,
  monthId: string,
  weekId: string,
  dayId: string,
  itemId: string,
  increment: boolean = true
): RoadmapData {
  const updatedMonths = roadmap.months.map(month => {
    if (month.id !== monthId) return month;

    const updatedWeeks = month.weeks.map(week => {
      if (week.id !== weekId) return week;

      const updatedDays = week.days.map(day => {
        if (day.id !== dayId) return day;

        const updatedItems = day.items.map(item => {
          if (item.id !== itemId) {
            return item;
          }

          const currentCount = item.currentCount || 0;
          const targetCount = item.count || 0;
          const newCount = increment 
            ? Math.min(currentCount + 1, targetCount)
            : Math.max(currentCount - 1, 0);

          return {
            ...item,
            currentCount: newCount,
            completed: newCount >= targetCount,
            completedAt: newCount >= targetCount ? new Date().toISOString() : undefined,
          };
        });

        const allItemsCompleted = updatedItems.every(item => item.completed);
        const dayCompleted = allItemsCompleted && updatedItems.length > 0;

        return {
          ...day,
          items: updatedItems,
          completed: dayCompleted,
          completedAt: dayCompleted ? new Date().toISOString() : undefined,
        };
      });

      const allDaysCompleted = updatedDays.every(day => day.completed);
      const weekCompleted = allDaysCompleted && updatedDays.length > 0;

      return {
        ...week,
        days: updatedDays,
        completed: weekCompleted,
        completedAt: weekCompleted ? new Date().toISOString() : undefined,
      };
    });

    const allWeeksCompleted = updatedWeeks.every(week => week.completed);
    const monthCompleted = allWeeksCompleted && updatedWeeks.length > 0;

    return {
      ...month,
      weeks: updatedWeeks,
      completed: monthCompleted,
      completedAt: monthCompleted ? new Date().toISOString() : undefined,
    };
  });

  const progress = calculateProgress(updatedMonths);
  
  const updatedRoadmap: RoadmapData = {
    ...roadmap,
    months: updatedMonths,
    progress,
  };

  saveRoadmap(updatedRoadmap);
  return updatedRoadmap;
}

// Get current day's items
export function getCurrentDayItems(roadmap: RoadmapData): LearningItem[] {
  const currentMonth = roadmap.months.find(m => m.monthNumber === roadmap.progress.currentMonth);
  if (!currentMonth) return [];

  const currentWeek = currentMonth.weeks.find(w => w.weekNumber === roadmap.progress.currentWeek);
  if (!currentWeek) return [];

  const currentDay = currentWeek.days.find(d => d.dayNumber === roadmap.progress.currentDay);
  return currentDay?.items || [];
}

// Get statistics by type
export function getStatsByType(roadmap: RoadmapData) {
  const stats = {
    topics: { total: 0, completed: 0 },
    search: { total: 0, completed: 0 },
    practice: { total: 0, completed: 0 },
    projects: { total: 0, completed: 0 },
    assignments: { total: 0, completed: 0 },
  };

  roadmap.months.forEach(month => {
    month.weeks.forEach(week => {
      week.days.forEach(day => {
        day.items.forEach(item => {
          const type = item.type === 'project' ? 'projects' : 
                      item.type === 'search' ? 'search' :
                      item.type === 'practice' ? 'practice' :
                      item.type === 'assignment' ? 'assignments' : 'topics';
          
          stats[type].total++;
          if (item.completed) {
            stats[type].completed++;
          }
        });
      });
    });
  });

  return stats;
}
