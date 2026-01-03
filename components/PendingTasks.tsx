'use client';

import { useState, useEffect } from 'react';
import { getPendingTasks, clearCompletedPendingTasks } from '@/lib/taskUtils';
import { Task } from '@/lib/types';
import TaskItem from './TaskItem';
import TaskStats from './TaskStats';
import { getTaskStats } from '@/lib/taskUtils';
import { Clock, Trash2 } from 'lucide-react';

export default function PendingTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [stats, setStats] = useState(getTaskStats());

  const loadTasks = () => {
    setTasks(getPendingTasks());
    setStats(getTaskStats());
  };

  useEffect(() => {
    loadTasks();
    
    // Refresh every minute to catch any updates
    const interval = setInterval(loadTasks, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleClearCompleted = () => {
    if (confirm('Are you sure you want to clear all completed pending tasks?')) {
      clearCompletedPendingTasks();
      loadTasks();
    }
  };

  const incompleteTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Clock className="w-8 h-8" />
            Pending Tasks
          </h1>
          <p className="text-gray-600 mt-1">
            Tasks that weren't completed on their assigned day
          </p>
        </div>
        {completedTasks.length > 0 && (
          <button
            onClick={handleClearCompleted}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear Completed
          </button>
        )}
      </div>

      <TaskStats stats={stats} />

      {incompleteTasks.length === 0 && completedTasks.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500">No pending tasks. Great job staying on top of things!</p>
        </div>
      ) : (
        <>
          {incompleteTasks.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">
                Incomplete ({incompleteTasks.length})
              </h2>
              {incompleteTasks.map((task) => (
                <TaskItem key={task.id} task={task} isPending onUpdate={loadTasks} />
              ))}
            </div>
          )}

          {completedTasks.length > 0 && (
            <div className="space-y-3 mt-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Completed ({completedTasks.length})
              </h2>
              {completedTasks.map((task) => (
                <TaskItem key={task.id} task={task} isPending onUpdate={loadTasks} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

