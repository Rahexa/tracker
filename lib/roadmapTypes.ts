export interface LearningItem {
  id: string;
  title: string;
  type: 'topic' | 'youtube' | 'practice' | 'project' | 'assignment';
  completed: boolean;
  completedAt?: string;
  notes?: string;
  url?: string; // For YouTube videos
  count?: number; // For practice problems (e.g., "Solve 10 problems")
  currentCount?: number; // Current progress on count-based items
}

export interface Week {
  id: string;
  weekNumber: number;
  title: string;
  items: LearningItem[];
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

export interface RoadmapProgress {
  currentMonth: number;
  currentWeek: number;
  totalItems: number;
  completedItems: number;
  totalMonths: number;
  completedMonths: number;
  overallProgress: number;
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

