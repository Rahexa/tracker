"use client";

import { Topic } from "@/data/learningPlan";
import { CheckCircle2, Circle, Youtube } from "lucide-react";

interface TopicCardProps {
  topic: Topic;
  monthId: string;
  weekId: string;
  onToggleTask: (monthId: string, weekId: string, topicId: string, taskId: string) => void;
}

export default function TopicCard({ topic, monthId, weekId, onToggleTask }: TopicCardProps) {
  const completedCount = topic.tasks.filter((t) => t.completed).length;
  const totalCount = topic.tasks.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {topic.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{topic.description}</p>
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
              <span className="flex items-center gap-1">
                <span className="font-medium">{completedCount}/{totalCount}</span>
                <span>tasks</span>
              </span>
              <span>•</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
          </div>
          <div className="flex-1 max-w-xs ml-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {topic.youtubeLinks && topic.youtubeLinks.length > 0 && (
        <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-2 mb-2">
            <Youtube className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              YouTube Search Keywords:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {topic.youtubeLinks.map((link, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-white dark:bg-gray-700 border border-yellow-300 dark:border-yellow-700 rounded text-gray-700 dark:text-gray-300"
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      )}

      <div>
        <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Tasks Checklist:
        </h5>
        <div className="space-y-2">
          {topic.tasks.map((task) => (
            <label
              key={task.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onToggleTask(monthId, weekId, topic.id, task.id);
                }}
                className="flex-shrink-0 mt-0.5"
              >
                {task.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                )}
              </button>
              <span
                className={`text-sm flex-1 leading-relaxed ${
                  task.completed
                    ? "line-through text-gray-500 dark:text-gray-500"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {task.text}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

