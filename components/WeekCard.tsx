"use client";

import { Week } from "@/data/learningPlan";
import { calculateProgress } from "@/lib/storage";
import TopicCard from "./TopicCard";

interface WeekCardProps {
  week: Week;
  monthId: string;
  onToggleTask: (monthId: string, weekId: string, topicId: string, taskId: string) => void;
  allMonths: any[];
}

export default function WeekCard({ week, monthId, onToggleTask, allMonths }: WeekCardProps) {
  const progress = calculateProgress(allMonths);
  const weekProgress = progress.byWeek.find((p) => p.weekId === week.id)?.progress || 0;

  // Calculate tasks for this week
  let totalTasks = 0;
  let completedTasks = 0;
  week.topics.forEach((topic) => {
    topic.tasks.forEach((task) => {
      totalTasks++;
      if (task.completed) completedTasks++;
    });
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            Week {week.weekNumber}: {week.phase}
          </h3>
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">{completedTasks}/{totalTasks} tasks completed</span>
            <span>•</span>
            <span>{Math.round(weekProgress)}% progress</span>
          </div>
        </div>
        <div className="flex-1 max-w-xs ml-4 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${weekProgress}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {week.topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            monthId={monthId}
            weekId={week.id}
            onToggleTask={onToggleTask}
          />
        ))}
      </div>
    </div>
  );
}
