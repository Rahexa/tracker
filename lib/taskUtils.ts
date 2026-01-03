import { Task } from './types';

const STORAGE_KEY = 'daily-tasks';
const PENDING_STORAGE_KEY = 'pending-tasks';

// Get current date in YYYY-MM-DD format
export function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}

// Get end of day timestamp (23:59:59)
export function getEndOfDay(): Date {
  const date = new Date();
  date.setHours(23, 59, 59, 999);
  return date;
}

// Load tasks from localStorage
export function loadTasks(): Task[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Save tasks to localStorage
export function saveTasks(tasks: Task[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks:', error);
  }
}

// Load pending tasks
export function loadPendingTasks(): Task[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(PENDING_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Save pending tasks
export function savePendingTasks(tasks: Task[]): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(PENDING_STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save pending tasks:', error);
  }
}

// Get daily tasks for a specific date
export function getDailyTasks(date: string = getCurrentDate()): Task[] {
  const tasks = loadTasks();
  return tasks.filter(task => 
    !task.isPending && 
    task.originalDate === date
  );
}

// Get all pending tasks
export function getPendingTasks(): Task[] {
  return loadPendingTasks();
}

// Create a new task
export function createTask(
  title: string,
  description?: string,
  priority: Task['priority'] = 'medium',
  dueDate?: string
): Task {
  const task: Task = {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    title,
    description,
    completed: false,
    createdAt: new Date().toISOString(),
    priority,
    isPending: false,
    originalDate: getCurrentDate(),
    dueDate,
  };
  
  const tasks = loadTasks();
  tasks.push(task);
  saveTasks(tasks);
  
  return task;
}

// Toggle task completion
export function toggleTaskCompletion(taskId: string): void {
  const tasks = loadTasks();
  const pendingTasks = loadPendingTasks();
  
  // Check in daily tasks
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  if (taskIndex !== -1) {
    const task = tasks[taskIndex];
    task.completed = !task.completed;
    task.completedAt = task.completed ? new Date().toISOString() : undefined;
    
    // If completed and was pending, remove from pending
    if (task.completed && task.isPending) {
      task.isPending = false;
      const pendingIndex = pendingTasks.findIndex(t => t.id === taskId);
      if (pendingIndex !== -1) {
        pendingTasks.splice(pendingIndex, 1);
        savePendingTasks(pendingTasks);
      }
    }
    
    saveTasks(tasks);
    return;
  }
  
  // Check in pending tasks
  const pendingIndex = pendingTasks.findIndex(t => t.id === taskId);
  if (pendingIndex !== -1) {
    const task = pendingTasks[pendingIndex];
    task.completed = !task.completed;
    task.completedAt = task.completed ? new Date().toISOString() : undefined;
    
    // If completed, remove from pending
    if (task.completed) {
      pendingTasks.splice(pendingIndex, 1);
      savePendingTasks(pendingTasks);
    } else {
      savePendingTasks(pendingTasks);
    }
  }
}

// Move incomplete daily tasks to pending at end of day
export function moveIncompleteTasksToPending(): void {
  const currentDate = getCurrentDate();
  const tasks = loadTasks();
  const pendingTasks = loadPendingTasks();
  
  // Find incomplete tasks from previous days (not today)
  const incompleteTasks = tasks.filter(task => 
    !task.completed && 
    !task.isPending &&
    task.originalDate && 
    task.originalDate < currentDate
  );
  
  if (incompleteTasks.length > 0) {
    incompleteTasks.forEach(task => {
      task.isPending = true;
      task.movedToPendingAt = new Date().toISOString();
      
      // Remove from daily tasks
      const index = tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
      
      // Add to pending
      pendingTasks.push(task);
    });
    
    saveTasks(tasks);
    savePendingTasks(pendingTasks);
  }
}

// Delete a task
export function deleteTask(taskId: string): void {
  const tasks = loadTasks();
  const pendingTasks = loadPendingTasks();
  
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    saveTasks(tasks);
    return;
  }
  
  const pendingIndex = pendingTasks.findIndex(t => t.id === taskId);
  if (pendingIndex !== -1) {
    pendingTasks.splice(pendingIndex, 1);
    savePendingTasks(pendingTasks);
  }
}

// Get task statistics
export function getTaskStats(): import('./types').TaskStats {
  const dailyTasks = getDailyTasks();
  const pendingTasks = getPendingTasks();
  
  const totalDaily = dailyTasks.length;
  const completedDaily = dailyTasks.filter(t => t.completed).length;
  const pendingCount = pendingTasks.filter(t => !t.completed).length;
  const completionRate = totalDaily > 0 ? (completedDaily / totalDaily) * 100 : 0;
  
  return {
    totalDaily,
    completedDaily,
    pendingCount,
    completionRate: Math.round(completionRate),
  };
}

// Manually move a task to pending
export function moveTaskToPending(taskId: string): void {
  const tasks = loadTasks();
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex !== -1 && !tasks[taskIndex].completed) {
    const task = tasks[taskIndex];
    task.isPending = true;
    task.movedToPendingAt = new Date().toISOString();
    
    tasks.splice(taskIndex, 1);
    saveTasks(tasks);
    
    const pendingTasks = loadPendingTasks();
    pendingTasks.push(task);
    savePendingTasks(pendingTasks);
  }
}

// Restore a task from pending to daily
export function restoreTaskFromPending(taskId: string): void {
  const pendingTasks = loadPendingTasks();
  const taskIndex = pendingTasks.findIndex(t => t.id === taskId);
  
  if (taskIndex !== -1) {
    const task = pendingTasks[taskIndex];
    task.isPending = false;
    task.originalDate = getCurrentDate();
    task.movedToPendingAt = undefined;
    
    pendingTasks.splice(taskIndex, 1);
    savePendingTasks(pendingTasks);
    
    const tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
  }
}

// Clear completed pending tasks
export function clearCompletedPendingTasks(): void {
  const pendingTasks = loadPendingTasks();
  const activePending = pendingTasks.filter(t => !t.completed);
  savePendingTasks(activePending);
}






