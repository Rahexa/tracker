'use client';

import { useState, useEffect } from 'react';
import { RoadmapData } from '@/lib/roadmapTypes';
import { initializeRoadmap } from '@/lib/roadmapUtils';
import RoadmapOverview from '@/components/RoadmapOverview';
import RoadmapDetail from '@/components/RoadmapDetail';
import DailyProgress from '@/components/DailyProgress';
import { BookOpen, List, Calendar } from 'lucide-react';

export default function Home() {
  const [roadmap, setRoadmap] = useState<RoadmapData | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'detail' | 'daily'>('overview');

  useEffect(() => {
    const loaded = initializeRoadmap();
    setRoadmap(loaded);
  }, []);

  const handleRoadmapUpdate = (updated: RoadmapData) => {
    setRoadmap(updated);
  };

  if (!roadmap) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your roadmap...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Backend Developer Roadmap Tracker</h1>
          <p className="text-gray-600">Track your 6-month journey to becoming a backend developer</p>
          <p className="text-sm text-gray-500 mt-2">
            Started: {new Date(roadmap.startDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 bg-white rounded-lg p-1 shadow-lg border-2 border-gray-200 inline-flex mx-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('detail')}
            className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all ${
              activeTab === 'detail'
                ? 'bg-purple-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <List className="w-5 h-5" />
            Full Roadmap
          </button>
          <button
            onClick={() => setActiveTab('daily')}
            className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all ${
              activeTab === 'daily'
                ? 'bg-green-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Calendar className="w-5 h-5" />
            Daily Progress
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-gray-200">
          {activeTab === 'overview' && <RoadmapOverview roadmap={roadmap} />}
          {activeTab === 'detail' && (
            <RoadmapDetail roadmap={roadmap} onRoadmapUpdate={handleRoadmapUpdate} />
          )}
          {activeTab === 'daily' && <DailyProgress roadmap={roadmap} />}
        </div>
      </div>
    </main>
  );
}
