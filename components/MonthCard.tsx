"use client";

import { Month } from "@/data/learningPlan";
import { calculateProgress } from "@/lib/storage";
import { ChevronDown, ChevronUp, Target } from "lucide-react";
import { useState } from "react";
import WeekCard from "./WeekCard";

interface MonthCardProps {
  month: Month;
  onToggleTask: (monthId: string, weekId: string, topicId: string, taskId: string) => void;
  allMonths: Month[];
}

export default function MonthCard({ month, onToggleTask, allMonths }: MonthCardProps) {
  const [isExpanded, setIsExpanded] = useState(month.monthNumber === 1);
  const progress = calculateProgress(allMonths);
  const monthProgress = progress.byMonth.find((p) => p.monthId === month.id)?.progress || 0;

  // Calculate total tasks for this month
  let totalTasks = 0;
  let completedTasks = 0;
  month.weeks.forEach((week) => {
    week.topics.forEach((topic) => {
      topic.tasks.forEach((task) => {
        totalTasks++;
        if (task.completed) completedTasks++;
      });
    });
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-xl shadow-lg">
                {month.monthNumber}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {month.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{month.goal}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Target className="w-4 h-4" />
                <span>{completedTasks}/{totalTasks} tasks</span>
                <span className="text-gray-500">•</span>
                <span>{Math.round(monthProgress)}% Complete</span>
              </div>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3 max-w-md">
                <div
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 h-3 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${monthProgress}%` }}
                />
              </div>
            </div>
          </div>
          <div className="ml-4">
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-gray-500" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-500" />
            )}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 pt-2 space-y-5">
          {month.weeks.map((week) => (
            <WeekCard
              key={week.id}
              week={week}
              monthId={month.id}
              onToggleTask={onToggleTask}
              allMonths={allMonths}
            />
          ))}
        </div>
      )}
    </div>
  );
}
