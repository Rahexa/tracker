"use client";

import { learningPlan } from "@/data/learningPlan";
import { Month } from "@/data/learningPlan";
import { loadProgress, saveProgress, toggleTask } from "@/lib/storage";
import { useEffect, useState } from "react";
import MonthCard from "@/components/MonthCard";
import ProgressOverview from "@/components/ProgressOverview";

export default function Home() {
  const [months, setMonths] = useState<Month[]>(learningPlan);

  useEffect(() => {
    // Load saved progress on mount
    const saved = loadProgress(learningPlan);
    setMonths(saved);
  }, []);

  const handleToggleTask = (
    monthId: string,
    weekId: string,
    topicId: string,
    taskId: string
  ) => {
    setMonths((current) => {
      const updated = toggleTask(current, monthId, weekId, topicId, taskId);
      saveProgress(updated);
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ProgressOverview months={months} />

        <div className="space-y-6">
          {months.map((month) => (
            <MonthCard
              key={month.id}
              month={month}
              onToggleTask={handleToggleTask}
              allMonths={months}
            />
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p className="mb-2">Track your progress and stay motivated! 🚀</p>
          <p className="text-xs">Your progress is automatically saved in your browser.</p>
        </footer>
      </div>
    </main>
  );
}
