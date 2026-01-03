'use client';

import { RoadmapData, PendingItem } from '@/lib/roadmapTypes';
import { getPendingItems, toggleItemCompletion } from '@/lib/roadmapUtils';
import { CheckCircle2, Circle, BookOpen, Search, Code, Briefcase, FileText, ExternalLink, Clock } from 'lucide-react';

interface PendingItemsProps {
  roadmap: RoadmapData;
  onRoadmapUpdate: (updated: RoadmapData) => void;
}

export default function PendingItems({ roadmap, onRoadmapUpdate }: PendingItemsProps) {
  const pendingItems = getPendingItems(roadmap.months);

  const getItemIcon = (type: PendingItem['type']) => {
    switch (type) {
      case 'topic':
        return BookOpen;
      case 'search':
        return Search;
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

  const getItemColor = (type: PendingItem['type']) => {
    switch (type) {
      case 'topic':
        return 'text-blue-400 bg-blue-900/30 border-blue-700';
      case 'search':
        return 'text-red-400 bg-red-900/30 border-red-700';
      case 'practice':
        return 'text-green-400 bg-green-900/30 border-green-700';
      case 'project':
        return 'text-purple-400 bg-purple-900/30 border-purple-700';
      case 'assignment':
        return 'text-orange-400 bg-orange-900/30 border-orange-700';
      default:
        return 'text-gray-400 bg-gray-900/30 border-gray-700';
    }
  };

  const handleComplete = (pendingItem: PendingItem) => {
    const updated = toggleItemCompletion(
      roadmap,
      pendingItem.monthId,
      pendingItem.weekId,
      pendingItem.dayId,
      pendingItem.itemId
    );
    onRoadmapUpdate(updated);
  };

  if (pendingItems.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg border-2 border-gray-700 p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-200 mb-2">All Caught Up!</h3>
        <p className="text-gray-400">No pending items. Great job staying on track!</p>
      </div>
    );
  }

  // Group by days missed
  const groupedByDays = pendingItems.reduce((acc, item) => {
    const key = item.daysMissed;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<number, PendingItem[]>);

  const sortedGroups = Object.keys(groupedByDays)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Pending Items
          </h2>
          <p className="text-gray-400 mt-1">
            {pendingItems.length} item{pendingItems.length !== 1 ? 's' : ''} from past days
          </p>
        </div>
      </div>

      {sortedGroups.map((daysMissed) => {
        const items = groupedByDays[daysMissed];
        return (
          <div key={daysMissed} className="bg-gray-800 rounded-lg border-2 border-gray-700 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-red-900/50 text-red-300 text-sm font-semibold rounded-full">
                {daysMissed} day{daysMissed !== 1 ? 's' : ''} ago
              </span>
              <span className="text-gray-400 text-sm">
                {new Date(items[0].assignedDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>

            <div className="space-y-2">
              {items.map((item) => {
                const Icon = getItemIcon(item.type);
                const colorClass = getItemColor(item.type);

                return (
                  <div
                    key={item.id}
                    className={`p-3 rounded-lg border-2 transition-all ${colorClass}`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => handleComplete(item)}
                        className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-500 hover:border-green-500 flex items-center justify-center transition-all"
                      >
                        <Circle className="w-4 h-4 text-gray-400" />
                      </button>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2 flex-1">
                            <div className={`p-1.5 rounded ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <h4 className="font-medium text-gray-200">{item.title}</h4>
                            {item.searchKeyword && (
                              <a
                                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(item.searchKeyword)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

