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
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl p-8 border border-gray-700 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">Learning Progress Tracker</h1>
          <p className="text-gray-400 text-sm mt-1">6-Month Full Stack Development Journey</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-cyan-500/20 rounded-lg">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-300">Overall Progress</h3>
          </div>
          <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {Math.round(progress.overall)}%
          </div>
          <div className="bg-gray-700/50 rounded-full h-4 mb-2">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full h-4 transition-all duration-500 shadow-lg shadow-cyan-500/20"
              style={{ width: `${progress.overall}%` }}
            />
          </div>
          <p className="text-sm text-gray-400">{completedTasks} of {totalTasks} tasks completed</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
              <BookOpen className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-300">Total Tasks</h3>
          </div>
          <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            {totalTasks}
          </div>
          <p className="text-sm text-gray-400">Across all months</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-purple-500/20 rounded-lg">
              <Trophy className="w-4 h-4 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-300">Completed</h3>
          </div>
          <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {completedTasks}
          </div>
          <p className="text-sm text-gray-400">Tasks finished</p>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-gray-200">Monthly Breakdown</h3>
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
              <div key={month.id} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50 hover:border-gray-600 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm text-gray-300">Month {month.monthNumber}</span>
                  <span className="text-sm font-bold text-cyan-400">{Math.round(monthProgress)}%</span>
                </div>
                <div className="bg-gray-700/50 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full h-2.5 transition-all duration-300"
                    style={{ width: `${monthProgress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500">{monthCompleted}/{monthTasks} tasks</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

