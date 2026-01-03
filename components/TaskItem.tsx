'use client';

import { Task } from '@/lib/types';
import { Check, X, Clock, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { toggleTaskCompletion, deleteTask, moveTaskToPending, restoreTaskFromPending } from '@/lib/taskUtils';

interface TaskItemProps {
  task: Task;
  isPending?: boolean;
  onUpdate: () => void;
}

export default function TaskItem({ task, isPending = false, onUpdate }: TaskItemProps) {
  const handleToggle = () => {
    toggleTaskCompletion(task.id);
    onUpdate();
  };

  const handleDelete = () => {
    deleteTask(task.id);
    onUpdate();
  };

  const handleMoveToPending = () => {
    moveTaskToPending(task.id);
    onUpdate();
  };

  const handleRestore = () => {
    restoreTaskFromPending(task.id);
    onUpdate();
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'high':
        return 'border-red-500 bg-red-50';
      case 'medium':
        return 'border-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-blue-500 bg-blue-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  const getPriorityIcon = () => {
    switch (task.priority) {
      case 'high':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'medium':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'low':
        return <Clock className="w-4 h-4 text-blue-500" />;
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div
      className={`p-4 rounded-lg border-2 transition-all ${
        task.completed
          ? 'border-green-300 bg-green-50 opacity-75'
          : getPriorityColor()
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={handleToggle}
          className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            task.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {task.completed && <Check className="w-4 h-4" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3
              className={`font-medium ${
                task.completed ? 'line-through text-gray-500' : 'text-gray-900'
              }`}
            >
              {task.title}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              {getPriorityIcon()}
            </div>
          </div>

          {task.description && (
            <p
              className={`mt-1 text-sm ${
                task.completed ? 'line-through text-gray-400' : 'text-gray-600'
              }`}
            >
              {task.description}
            </p>
          )}

          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
            {task.originalDate && (
              <span>Created: {formatDate(task.originalDate)}</span>
            )}
            {task.movedToPendingAt && (
              <span>Moved to pending: {formatDate(task.movedToPendingAt)}</span>
            )}
            {task.dueDate && (
              <span className={task.completed ? '' : 'font-semibold text-orange-600'}>
                Due: {formatDate(task.dueDate)}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          {!isPending && !task.completed && (
            <button
              onClick={handleMoveToPending}
              className="p-1.5 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
              title="Move to pending"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
          
          {isPending && !task.completed && (
            <button
              onClick={handleRestore}
              className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
              title="Restore to daily"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleDelete}
            className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
            title="Delete task"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

