"use client";

import { learningPlan } from "@/data/learningPlan";
import { Month } from "@/data/learningPlan";
import { loadProgress, saveProgress, toggleDeliverable } from "@/lib/storage";
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

  const handleToggleDeliverable = (
    monthId: string,
    weekId: string,
    deliverableId: string
  ) => {
    setMonths((current) => {
      const updated = toggleDeliverable(current, monthId, weekId, deliverableId);
      saveProgress(updated);
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ProgressOverview months={months} />

        <div className="space-y-6">
          {months.map((month) => (
            <MonthCard
              key={month.id}
              month={month}
              onToggleDeliverable={handleToggleDeliverable}
              allMonths={months}
            />
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>Track your progress and stay motivated! 🚀</p>
        </footer>
      </div>
    </main>
  );
}

