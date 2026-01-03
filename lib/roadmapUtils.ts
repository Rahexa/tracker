import { RoadmapData, Month, Week, LearningItem, RoadmapProgress } from './roadmapTypes';
import { roadmapData } from './roadmapData';

const STORAGE_KEY = 'backend-roadmap-progress';
const START_DATE_KEY = 'roadmap-start-date';

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
  const startDate = typeof window !== 'undefined' 
    ? (localStorage.getItem(START_DATE_KEY) || new Date().toISOString().split('T')[0])
    : new Date().toISOString().split('T')[0];

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
      week.items.forEach(item => {
        storedItemsMap.set(item.id, item);
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
          items: week.items.map(item => {
            const storedItem = storedItemsMap.get(item.id);
            return storedItem ? { ...item, ...storedItem } : item;
          }),
        };
      }),
    };
  });

  const progress = calculateProgress(mergedMonths);
  
  return {
    months: mergedMonths,
    progress: { ...progress, ...storedProgress },
    startDate: startDate || new Date().toISOString().split('T')[0],
  };
}

function calculateProgress(months: Month[]): RoadmapProgress {
  let totalItems = 0;
  let completedItems = 0;
  let completedMonths = 0;
  let currentMonth = 1;
  let currentWeek = 1;

  months.forEach((month, monthIdx) => {
    if (month.completed) {
      completedMonths++;
    }

    let monthHasIncomplete = false;
    month.weeks.forEach((week, weekIdx) => {
      week.items.forEach(item => {
        totalItems++;
        if (item.completed) {
          completedItems++;
        } else if (!monthHasIncomplete) {
          monthHasIncomplete = true;
          if (currentMonth === monthIdx + 1) {
            currentWeek = weekIdx + 1;
          } else if (currentMonth < monthIdx + 1) {
            currentMonth = monthIdx + 1;
            currentWeek = weekIdx + 1;
          }
        }
      });
    });
  });

  const overallProgress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  return {
    currentMonth,
    currentWeek,
    totalItems,
    completedItems,
    totalMonths: months.length,
    completedMonths,
    overallProgress: Math.round(overallProgress * 100) / 100,
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

// Save roadmap progress
export function saveRoadmap(roadmap: RoadmapData): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(roadmap));
    localStorage.setItem(START_DATE_KEY, roadmap.startDate);
  } catch (error) {
    console.error('Failed to save roadmap:', error);
  }
}

// Toggle item completion
export function toggleItemCompletion(
  roadmap: RoadmapData,
  monthId: string,
  weekId: string,
  itemId: string
): RoadmapData {
  const updatedMonths = roadmap.months.map(month => {
    if (month.id !== monthId) return month;

    const updatedWeeks = month.weeks.map(week => {
      if (week.id !== weekId) return week;

      const updatedItems = week.items.map(item => {
        if (item.id !== itemId) return item;

        const wasCompleted = item.completed;
        const nowCompleted = !wasCompleted;

        return {
          ...item,
          completed: nowCompleted,
          completedAt: nowCompleted ? new Date().toISOString() : undefined,
        };
      });

      // Check if all items in week are completed
      const allItemsCompleted = updatedItems.every(item => item.completed);
      const weekCompleted = allItemsCompleted && updatedItems.length > 0;

      return {
        ...week,
        items: updatedItems,
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
  itemId: string,
  increment: boolean = true
): RoadmapData {
  const updatedMonths = roadmap.months.map(month => {
    if (month.id !== monthId) return month;

    const updatedWeeks = month.weeks.map(week => {
      if (week.id !== weekId) return week;

      const updatedItems = week.items.map(item => {
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
      const weekCompleted = allItemsCompleted && updatedItems.length > 0;

      return {
        ...week,
        items: updatedItems,
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

// Get current week's items
export function getCurrentWeekItems(roadmap: RoadmapData): LearningItem[] {
  const currentMonth = roadmap.months.find(m => m.monthNumber === roadmap.progress.currentMonth);
  if (!currentMonth) return [];

  const currentWeek = currentMonth.weeks.find(w => w.weekNumber === roadmap.progress.currentWeek);
  return currentWeek?.items || [];
}

// Get statistics by type
export function getStatsByType(roadmap: RoadmapData) {
  const stats = {
    topics: { total: 0, completed: 0 },
    youtube: { total: 0, completed: 0 },
    practice: { total: 0, completed: 0 },
    projects: { total: 0, completed: 0 },
    assignments: { total: 0, completed: 0 },
  };

  roadmap.months.forEach(month => {
    month.weeks.forEach(week => {
      week.items.forEach(item => {
        const type = item.type === 'project' ? 'projects' : 
                    item.type === 'youtube' ? 'youtube' :
                    item.type === 'practice' ? 'practice' :
                    item.type === 'assignment' ? 'assignments' : 'topics';
        
        stats[type].total++;
        if (item.completed) {
          stats[type].completed++;
        }
      });
    });
  });

  return stats;
}

