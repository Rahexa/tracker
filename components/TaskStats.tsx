'use client';

import { TaskStats as TaskStatsType } from '@/lib/types';
import { CheckCircle2, Clock, TrendingUp, AlertCircle } from 'lucide-react';

interface TaskStatsProps {
  stats: TaskStatsType;
}

export default function TaskStats({ stats }: TaskStatsProps) {
  const statsCards = [
    {
      label: 'Daily Tasks',
      value: stats.totalDaily,
      icon: CheckCircle2,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      label: 'Completed',
      value: stats.completedDaily,
      icon: CheckCircle2,
      color: 'text-green-600 bg-green-100',
    },
    {
      label: 'Pending',
      value: stats.pendingCount,
      icon: Clock,
      color: 'text-orange-600 bg-orange-100',
    },
    {
      label: 'Completion Rate',
      value: `${stats.completionRate}%`,
      icon: TrendingUp,
      color: 'text-purple-600 bg-purple-100',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {statsCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-lg border-2 border-gray-200 p-4 flex items-center gap-3"
          >
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}




