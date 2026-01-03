export interface LearningItem {
  id: string;
  title: string;
  type: 'topic' | 'search' | 'practice' | 'project' | 'assignment';
  completed: boolean;
  completedAt?: string;
  notes?: string;
  searchKeyword?: string; // Search keyword instead of URL
  count?: number; // For practice problems (e.g., "Solve 10 problems")
  currentCount?: number; // Current progress on count-based items
}

export interface Day {
  id: string;
  dayNumber: number;
  title: string;
  items: LearningItem[];
  completed: boolean;
  completedAt?: string;
}

export interface Week {
  id: string;
  weekNumber: number;
  title: string;
  days: Day[];
  completed: boolean;
  completedAt?: string;
}

export interface Month {
  id: string;
  monthNumber: number;
  title: string;
  goal: string;
  weeks: Week[];
  completed: boolean;
  completedAt?: string;
}

export interface PendingItem {
  id: string;
  itemId: string;
  title: string;
  type: LearningItem['type'];
  assignedDate: string; // The date this item was supposed to be completed
  daysMissed: number;
  monthId: string;
  weekId: string;
  dayId: string;
  searchKeyword?: string;
}

export interface RoadmapProgress {
  currentMonth: number;
  currentWeek: number;
  currentDay: number;
  totalItems: number;
  completedItems: number;
  totalMonths: number;
  completedMonths: number;
  overallProgress: number;
  pendingCount: number;
  dailyProgress: {
    date: string;
    itemsCompleted: number;
  }[];
}

export interface RoadmapData {
  months: Month[];
  progress: RoadmapProgress;
  startDate: string; // When they started the roadmap
}
