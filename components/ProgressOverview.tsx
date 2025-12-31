"use client";

import { Month } from "@/data/learningPlan";
import { calculateProgress } from "@/lib/storage";
import { Trophy, TrendingUp, BookOpen } from "lucide-react";

interface ProgressOverviewProps {
  months: Month[];
}

export default function ProgressOverview({ months }: ProgressOverviewProps) {
  const progress = calculateProgress(months);

  // Calculate total tasks
  let totalTasks = 0;
  let completedTasks = 0;
  months.forEach((month) => {
    month.weeks.forEach((week) => {
      week.topics.forEach((topic) => {
        topic.tasks.forEach((task) => {
          totalTasks++;
          if (task.completed) completedTasks++;
        });
      });
    });
  });

  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-white mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-10 h-10" />
        <div>
          <h1 className="text-4xl font-bold">Learning Progress Tracker</h1>
          <p className="text-white/80 text-sm mt-1">6-Month Full Stack Development Journey</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5" />
            <h3 className="text-lg font-semibold">Overall Progress</h3>
          </div>
          <div className="text-5xl font-bold mb-3">{Math.round(progress.overall)}%</div>
          <div className="bg-white/20 rounded-full h-4 mb-2">
            <div
              className="bg-white rounded-full h-4 transition-all duration-500 shadow-lg"
              style={{ width: `${progress.overall}%` }}
            />
          </div>
          <p className="text-sm text-white/80">{completedTasks} of {totalTasks} tasks completed</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5" />
            <h3 className="text-lg font-semibold">Total Tasks</h3>
          </div>
          <div className="text-5xl font-bold mb-2">{totalTasks}</div>
          <p className="text-sm text-white/80">Across all months</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-5 h-5" />
            <h3 className="text-lg font-semibold">Completed</h3>
          </div>
          <div className="text-5xl font-bold mb-2">{completedTasks}</div>
          <p className="text-sm text-white/80">Tasks finished</p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-lg font-semibold mb-4">Monthly Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {months.map((month) => {
            const monthProgress =
              progress.byMonth.find((p) => p.monthId === month.id)?.progress || 0;
            let monthTasks = 0;
            let monthCompleted = 0;
            month.weeks.forEach((week) => {
              week.topics.forEach((topic) => {
                topic.tasks.forEach((task) => {
                  monthTasks++;
                  if (task.completed) monthCompleted++;
                });
              });
            });
            return (
              <div key={month.id} className="bg-white/5 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm">Month {month.monthNumber}</span>
                  <span className="text-sm font-bold">{Math.round(monthProgress)}%</span>
                </div>
                <div className="bg-white/20 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-white rounded-full h-2.5 transition-all duration-300"
                    style={{ width: `${monthProgress}%` }}
                  />
                </div>
                <p className="text-xs text-white/70">{monthCompleted}/{monthTasks} tasks</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

