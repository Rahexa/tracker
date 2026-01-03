'use client';

import { RoadmapData } from '@/lib/roadmapTypes';
import { Calendar, Target, TrendingUp, BookOpen, Video, Code, Briefcase, FileText } from 'lucide-react';
import { getStatsByType } from '@/lib/roadmapUtils';

interface RoadmapOverviewProps {
  roadmap: RoadmapData;
}

export default function RoadmapOverview({ roadmap }: RoadmapOverviewProps) {
  const stats = getStatsByType(roadmap);
  const progress = roadmap.progress;

  const getDaysElapsed = () => {
    const start = new Date(roadmap.startDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const getExpectedDays = () => {
    return 180; // 6 months
  };

  const daysElapsed = getDaysElapsed();
  const expectedDays = getExpectedDays();
  const daysRemaining = Math.max(0, expectedDays - daysElapsed);

  const typeStats = [
    { label: 'Topics', value: `${stats.topics.completed}/${stats.topics.total}`, icon: BookOpen, color: 'text-blue-600 bg-blue-100' },
    { label: 'YouTube Videos', value: `${stats.youtube.completed}/${stats.youtube.total}`, icon: Video, color: 'text-red-600 bg-red-100' },
    { label: 'Practice Problems', value: `${stats.practice.completed}/${stats.practice.total}`, icon: Code, color: 'text-green-600 bg-green-100' },
    { label: 'Projects', value: `${stats.projects.completed}/${stats.projects.total}`, icon: Briefcase, color: 'text-purple-600 bg-purple-100' },
    { label: 'Assignments', value: `${stats.assignments.completed}/${stats.assignments.total}`, icon: FileText, color: 'text-orange-600 bg-orange-100' },
  ];

  return (
    <div className="space-y-6">
      {/* Main Progress Card */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">6-Month Backend Roadmap</h2>
            <p className="text-blue-100">Your journey to becoming a backend developer</p>
          </div>
          <Calendar className="w-12 h-12 opacity-80" />
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Overall Progress</span>
              <span className="font-semibold">{progress.overallProgress.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
              <div
                className="bg-white h-full rounded-full transition-all duration-500"
                style={{ width: `${progress.overallProgress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-3xl font-bold">{progress.completedItems}</div>
              <div className="text-sm text-blue-100">Items Completed</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-3xl font-bold">{progress.currentMonth}</div>
              <div className="text-sm text-blue-100">Current Month</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-3xl font-bold">{daysElapsed}</div>
              <div className="text-sm text-blue-100">Days Elapsed</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-3xl font-bold">{daysRemaining}</div>
              <div className="text-sm text-blue-100">Days Remaining</div>
            </div>
          </div>
        </div>
      </div>

      {/* Type Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {typeStats.map((stat, index) => {
          const Icon = stat.icon;
          const [completed, total] = stat.value.split('/');
          const totalNum = parseInt(total);
          const completedNum = parseInt(completed);
          const percentage = totalNum > 0 ? (completedNum / totalNum) * 100 : 0;

          return (
            <div key={index} className="bg-white rounded-lg border-2 border-gray-200 p-4">
              <div className={`p-2 rounded-lg ${stat.color} w-fit mb-3`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    stat.color.split(' ')[0].replace('text-', 'bg-')
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Month Progress */}
      <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6" />
          Monthly Progress
        </h3>
        <div className="space-y-3">
          {roadmap.months.map((month, index) => {
            const monthItems = month.weeks.reduce((acc, week) => acc + week.items.length, 0);
            const monthCompleted = month.weeks.reduce(
              (acc, week) => acc + week.items.filter(item => item.completed).length,
              0
            );
            const monthPercentage = monthItems > 0 ? (monthCompleted / monthItems) * 100 : 0;
            const isCurrentMonth = month.monthNumber === progress.currentMonth;

            return (
              <div
                key={month.id}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isCurrentMonth
                    ? 'border-blue-500 bg-blue-50'
                    : month.completed
                    ? 'border-green-300 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-500">Month {month.monthNumber}</span>
                    <h4 className="font-bold text-gray-900">{month.title}</h4>
                    {isCurrentMonth && (
                      <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">Current</span>
                    )}
                    {month.completed && (
                      <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">Completed</span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {monthCompleted}/{monthItems}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      month.completed ? 'bg-green-500' : isCurrentMonth ? 'bg-blue-500' : 'bg-gray-400'
                    }`}
                    style={{ width: `${monthPercentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

