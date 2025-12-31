"use client";

import { Week } from "@/data/learningPlan";
import { CheckCircle2, Circle } from "lucide-react";

interface WeekCardProps {
  week: Week;
  monthId: string;
  onToggleDeliverable: (monthId: string, weekId: string, deliverableId: string) => void;
}

export default function WeekCard({ week, monthId, onToggleDeliverable }: WeekCardProps) {
  const completedCount = week.deliverables.filter((d) => d.completed).length;
  const totalCount = week.deliverables.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            Week {week.weekNumber}: {week.phase}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <span>{completedCount}/{totalCount} deliverables</span>
            <span>•</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
        <div className="flex-1 max-w-xs ml-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Topics:
        </h4>
        <ul className="space-y-1">
          {week.topics.map((topic, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
              <span className="mr-2">•</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Deliverables:
        </h4>
        <div className="space-y-2">
          {week.deliverables.map((deliverable) => (
            <label
              key={deliverable.id}
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onToggleDeliverable(monthId, week.id, deliverable.id);
                }}
                className="flex-shrink-0"
              >
                {deliverable.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <span
                className={`text-sm flex-1 ${
                  deliverable.completed
                    ? "line-through text-gray-500 dark:text-gray-500"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {deliverable.text}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

