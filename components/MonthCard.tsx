"use client";

import { Month } from "@/data/learningPlan";
import { calculateProgress } from "@/lib/storage";
import { ChevronDown, ChevronUp, Target } from "lucide-react";
import { useState } from "react";
import WeekCard from "./WeekCard";

interface MonthCardProps {
  month: Month;
  onToggleDeliverable: (monthId: string, weekId: string, deliverableId: string) => void;
  allMonths: Month[];
}

export default function MonthCard({ month, onToggleDeliverable, allMonths }: MonthCardProps) {
  const [isExpanded, setIsExpanded] = useState(month.monthNumber === 1);
  const progress = calculateProgress(allMonths);
  const monthProgress = progress.byMonth.find((p) => p.monthId === month.id)?.progress || 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg">
                {month.monthNumber}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {month.name}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{month.goal}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Target className="w-4 h-4" />
                <span>{Math.round(monthProgress)}% Complete</span>
              </div>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 max-w-xs">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-300"
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
        <div className="px-6 pb-6 space-y-4">
          {month.weeks.map((week) => (
            <WeekCard
              key={week.id}
              week={week}
              monthId={month.id}
              onToggleDeliverable={onToggleDeliverable}
            />
          ))}
        </div>
      )}
    </div>
  );
}

