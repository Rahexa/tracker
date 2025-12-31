"use client";

import { Month } from "@/data/learningPlan";
import { calculateProgress } from "@/lib/storage";
import { Trophy, TrendingUp } from "lucide-react";

interface ProgressOverviewProps {
  months: Month[];
}

export default function ProgressOverview({ months }: ProgressOverviewProps) {
  const progress = calculateProgress(months);

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-8 h-8" />
        <h1 className="text-3xl font-bold">Learning Progress Tracker</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5" />
            <h3 className="text-lg font-semibold">Overall Progress</h3>
          </div>
          <div className="text-4xl font-bold mb-2">{Math.round(progress.overall)}%</div>
          <div className="bg-white/20 rounded-full h-3 mb-2">
            <div
              className="bg-white rounded-full h-3 transition-all duration-500"
              style={{ width: `${progress.overall}%` }}
            />
          </div>
          <p className="text-sm text-white/80">6-Month Full Stack Journey</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold mb-4">Monthly Breakdown</h3>
          <div className="space-y-3">
            {months.map((month) => {
              const monthProgress =
                progress.byMonth.find((p) => p.monthId === month.id)?.progress || 0;
              return (
                <div key={month.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Month {month.monthNumber}</span>
                    <span>{Math.round(monthProgress)}%</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white rounded-full h-2 transition-all duration-300"
                      style={{ width: `${monthProgress}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

