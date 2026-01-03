'use client';

import { RoadmapData } from '@/lib/roadmapTypes';
import { Calendar, TrendingUp, Target, CheckCircle2, Circle } from 'lucide-react';

interface DailyProgressProps {
  roadmap: RoadmapData;
}

export default function DailyProgress({ roadmap }: DailyProgressProps) {
  const today = new Date().toISOString().split('T')[0];
  const todayProgress = roadmap.progress.dailyProgress.find(p => p.date === today);
  const itemsCompletedToday = todayProgress?.itemsCompleted || 0;

  // Get last 7 days of progress
  const last7Days = roadmap.progress.dailyProgress
    .slice(-7)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const getCurrentDayItems = () => {
    const currentMonth = roadmap.months.find(m => m.monthNumber === roadmap.progress.currentMonth);
    if (!currentMonth) return [];
    const currentWeek = currentMonth.weeks.find(w => w.weekNumber === roadmap.progress.currentWeek);
    if (!currentWeek) return [];
    const currentDay = currentWeek.days.find(d => d.dayNumber === roadmap.progress.currentDay);
    return currentDay?.items || [];
  };

  const currentDayItems = getCurrentDayItems();
  const currentDayCompleted = currentDayItems.filter(item => item.completed).length;
  const currentDayTotal = currentDayItems.length;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6" />
          Today's Progress
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
            <div className="text-3xl font-bold text-blue-600">{itemsCompletedToday}</div>
            <div className="text-sm text-gray-600">Items Completed Today</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
            <div className="text-3xl font-bold text-green-600">{currentDayCompleted}/{currentDayTotal}</div>
            <div className="text-sm text-gray-600">Current Day Progress</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
            <div className="text-3xl font-bold text-purple-600">{roadmap.progress.overallProgress.toFixed(1)}%</div>
            <div className="text-sm text-gray-600">Overall Progress</div>
          </div>
        </div>
      </div>

      {last7Days.length > 0 && (
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Last 7 Days Activity
          </h3>
          <div className="space-y-2">
            {last7Days.map((day, index) => {
              const date = new Date(day.date);
              const isToday = day.date === today;
              const maxItems = Math.max(...last7Days.map(d => d.itemsCompleted), 1);

              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-24 text-sm text-gray-600">
                    {isToday ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                    <div
                      className={`h-6 rounded-full transition-all ${
                        isToday ? 'bg-blue-500' : 'bg-gray-400'
                      }`}
                      style={{ width: `${(day.itemsCompleted / maxItems) * 100}%` }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700">
                      {day.itemsCompleted} items
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {currentDayItems.length > 0 && (
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Today's Focus
          </h3>
          <div className="space-y-2">
            {currentDayItems.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className={`p-3 rounded-lg border-2 ${
                  item.completed
                    ? 'bg-green-50 border-green-300 line-through'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400" />
                  )}
                  <span className={item.completed ? 'text-gray-500' : 'text-gray-900'}>
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
            {currentDayItems.length > 5 && (
              <p className="text-sm text-gray-500 text-center mt-2">
                +{currentDayItems.length - 5} more items
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

