'use client';

import { useState } from 'react';
import { RoadmapData, LearningItem } from '@/lib/roadmapTypes';
import { toggleItemCompletion, updatePracticeCount } from '@/lib/roadmapUtils';
import {
  CheckCircle2,
  Circle,
  BookOpen,
  Video,
  Code,
  Briefcase,
  FileText,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
  ExternalLink,
} from 'lucide-react';

interface RoadmapDetailProps {
  roadmap: RoadmapData;
  onRoadmapUpdate: (updated: RoadmapData) => void;
}

export default function RoadmapDetail({ roadmap, onRoadmapUpdate }: RoadmapDetailProps) {
  const [expandedMonths, setExpandedMonths] = useState<Set<string>>(
    new Set([roadmap.months.find(m => m.monthNumber === roadmap.progress.currentMonth)?.id || ''])
  );
  const [expandedWeeks, setExpandedWeeks] = useState<Set<string>>(new Set());

  const toggleMonth = (monthId: string) => {
    const newExpanded = new Set(expandedMonths);
    if (newExpanded.has(monthId)) {
      newExpanded.delete(monthId);
    } else {
      newExpanded.add(monthId);
    }
    setExpandedMonths(newExpanded);
  };

  const toggleWeek = (weekId: string) => {
    const newExpanded = new Set(expandedWeeks);
    if (newExpanded.has(weekId)) {
      newExpanded.delete(weekId);
    } else {
      newExpanded.add(weekId);
    }
    setExpandedWeeks(newExpanded);
  };

  const handleItemToggle = (monthId: string, weekId: string, itemId: string) => {
    const updated = toggleItemCompletion(roadmap, monthId, weekId, itemId);
    onRoadmapUpdate(updated);
  };

  const handlePracticeUpdate = (monthId: string, weekId: string, itemId: string, increment: boolean) => {
    const updated = updatePracticeCount(roadmap, monthId, weekId, itemId, increment);
    onRoadmapUpdate(updated);
  };

  const getItemIcon = (type: LearningItem['type']) => {
    switch (type) {
      case 'topic':
        return BookOpen;
      case 'youtube':
        return Video;
      case 'practice':
        return Code;
      case 'project':
        return Briefcase;
      case 'assignment':
        return FileText;
      default:
        return Circle;
    }
  };

  const getItemColor = (type: LearningItem['type']) => {
    switch (type) {
      case 'topic':
        return 'text-blue-600 bg-blue-100 border-blue-300';
      case 'youtube':
        return 'text-red-600 bg-red-100 border-red-300';
      case 'practice':
        return 'text-green-600 bg-green-100 border-green-300';
      case 'project':
        return 'text-purple-600 bg-purple-100 border-purple-300';
      case 'assignment':
        return 'text-orange-600 bg-orange-100 border-orange-300';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className="space-y-4">
      {roadmap.months.map((month) => {
        const isExpanded = expandedMonths.has(month.id);
        const monthItems = month.weeks.reduce((acc, week) => acc + week.items.length, 0);
        const monthCompleted = month.weeks.reduce(
          (acc, week) => acc + week.items.filter(item => item.completed).length,
          0
        );
        const isCurrentMonth = month.monthNumber === roadmap.progress.currentMonth;

        return (
          <div
            key={month.id}
            className={`bg-white rounded-lg border-2 transition-all ${
              isCurrentMonth ? 'border-blue-500 shadow-lg' : 'border-gray-200'
            }`}
          >
            {/* Month Header */}
            <button
              onClick={() => toggleMonth(month.id)}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 rounded-t-lg transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 text-left">
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-500">Month {month.monthNumber}</span>
                    <h3 className="text-lg font-bold text-gray-900">{month.title}</h3>
                    {isCurrentMonth && (
                      <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">Current</span>
                    )}
                    {month.completed && (
                      <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">✓ Done</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{month.goal}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>{monthCompleted}/{monthItems} items</span>
                    <span>{Math.round((monthCompleted / monthItems) * 100)}% complete</span>
                  </div>
                </div>
              </div>
            </button>

            {/* Month Content */}
            {isExpanded && (
              <div className="border-t border-gray-200 p-4 space-y-3">
                {month.weeks.map((week) => {
                  const isWeekExpanded = expandedWeeks.has(week.id);
                  const weekCompleted = week.items.filter(item => item.completed).length;
                  const weekTotal = week.items.length;

                  return (
                    <div key={week.id} className="bg-gray-50 rounded-lg border border-gray-200">
                      {/* Week Header */}
                      <button
                        onClick={() => toggleWeek(week.id)}
                        className="w-full p-3 flex items-center justify-between hover:bg-gray-100 rounded-t-lg transition-colors"
                      >
                        <div className="flex items-center gap-2 flex-1 text-left">
                          {isWeekExpanded ? (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                          )}
                          <span className="font-semibold text-gray-700">Week {week.weekNumber}: {week.title}</span>
                          <span className="text-sm text-gray-500">
                            ({weekCompleted}/{weekTotal})
                          </span>
                          {week.completed && (
                            <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">✓</span>
                          )}
                        </div>
                      </button>

                      {/* Week Items */}
                      {isWeekExpanded && (
                        <div className="p-3 space-y-2 border-t border-gray-200">
                          {week.items.map((item) => {
                            const Icon = getItemIcon(item.type);
                            const colorClass = getItemColor(item.type);
                            const isPractice = item.type === 'practice' && item.count;

                            return (
                              <div
                                key={item.id}
                                className={`p-3 rounded-lg border-2 transition-all ${
                                  item.completed
                                    ? 'bg-green-50 border-green-300 opacity-75'
                                    : `bg-white ${colorClass}`
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <button
                                    onClick={() => handleItemToggle(month.id, week.id, item.id)}
                                    className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                      item.completed
                                        ? 'bg-green-500 border-green-500 text-white'
                                        : 'border-gray-300 hover:border-green-500'
                                    }`}
                                  >
                                    {item.completed && <CheckCircle2 className="w-4 h-4" />}
                                  </button>

                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                      <div className="flex items-center gap-2 flex-1">
                                        <div className={`p-1.5 rounded ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]}`}>
                                          <Icon className="w-4 h-4" />
                                        </div>
                                        <h4
                                          className={`font-medium ${
                                            item.completed ? 'line-through text-gray-500' : 'text-gray-900'
                                          }`}
                                        >
                                          {item.title}
                                        </h4>
                                        {item.url && (
                                          <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-gray-600"
                                            onClick={(e) => e.stopPropagation()}
                                          >
                                            <ExternalLink className="w-4 h-4" />
                                          </a>
                                        )}
                                      </div>
                                    </div>

                                    {isPractice && (
                                      <div className="mt-2 flex items-center gap-2">
                                        <button
                                          onClick={() => handlePracticeUpdate(month.id, week.id, item.id, false)}
                                          className="p-1 rounded hover:bg-gray-200 transition-colors"
                                          disabled={!item.currentCount || item.currentCount === 0}
                                        >
                                          <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="text-sm font-semibold text-gray-700">
                                          {item.currentCount || 0} / {item.count}
                                        </span>
                                        <button
                                          onClick={() => handlePracticeUpdate(month.id, week.id, item.id, true)}
                                          className="p-1 rounded hover:bg-gray-200 transition-colors"
                                          disabled={item.completed}
                                        >
                                          <Plus className="w-4 h-4" />
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

