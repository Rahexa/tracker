export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  completedAt?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  isPending: boolean;
  originalDate?: string; // Date when task was originally created/assigned
  movedToPendingAt?: string; // Date when task was moved to pending
}

export interface TaskStats {
  totalDaily: number;
  completedDaily: number;
  pendingCount: number;
  completionRate: number;
}

