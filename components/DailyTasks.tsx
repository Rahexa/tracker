'use client';

import { useState, useEffect } from 'react';
import { getDailyTasks, moveIncompleteTasksToPending } from '@/lib/taskUtils';
import { Task } from '@/lib/types';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import TaskStats from './TaskStats';
import { getTaskStats } from '@/lib/taskUtils';
import { Calendar } from 'lucide-react';

export default function DailyTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [stats, setStats] = useState(getTaskStats());

  const loadTasks = () => {
    // Move incomplete tasks from previous days to pending
    moveIncompleteTasksToPending();
    setTasks(getDailyTasks());
    setStats(getTaskStats());
  };

  useEffect(() => {
    loadTasks();
    
    // Check for tasks to move to pending every minute
    const interval = setInterval(() => {
      moveIncompleteTasksToPending();
      loadTasks();
    }, 60000); // Check every minute

    // Also check at midnight
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const msUntilMidnight = midnight.getTime() - now.getTime();
    
    const midnightTimeout = setTimeout(() => {
      moveIncompleteTasksToPending();
      loadTasks();
      // Then set up daily interval
      const dailyInterval = setInterval(() => {
        moveIncompleteTasksToPending();
        loadTasks();
      }, 24 * 60 * 60 * 1000);
      
      return () => clearInterval(dailyInterval);
    }, msUntilMidnight);

    return () => {
      clearInterval(interval);
      clearTimeout(midnightTimeout);
    };
  }, []);

  const getCurrentDateFormatted = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="w-8 h-8" />
            Daily Tasks
          </h1>
          <p className="text-gray-600 mt-1">{getCurrentDateFormatted()}</p>
        </div>
      </div>

      <TaskStats stats={stats} />

      <TaskForm onTaskAdded={loadTasks} />

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-500">No tasks for today. Add one above!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} onUpdate={loadTasks} />
          ))
        )}
      </div>
    </div>
  );
}

