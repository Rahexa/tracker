'use client';

import { useState, useEffect } from 'react';
import DailyTasks from '@/components/DailyTasks';
import PendingTasks from '@/components/PendingTasks';
import { CheckCircle2, Clock } from 'lucide-react';
import { getPendingTasks } from '@/lib/taskUtils';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'daily' | 'pending'>('daily');
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    const updatePendingCount = () => {
      if (typeof window !== 'undefined') {
        const pending = getPendingTasks().filter(t => !t.completed);
        setPendingCount(pending.length);
      }
    };
    
    updatePendingCount();
    const interval = setInterval(updatePendingCount, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Tab Navigation */}
        <div className="mb-8 bg-white rounded-lg p-1 shadow-lg border-2 border-gray-200 inline-flex">
          <button
            onClick={() => setActiveTab('daily')}
            className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all ${
              activeTab === 'daily'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            Daily Tasks
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all ${
              activeTab === 'pending'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Clock className="w-5 h-5" />
            Pending
            {pendingCount > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs font-semibold">
                {pendingCount}
              </span>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-gray-200">
          {activeTab === 'daily' ? <DailyTasks /> : <PendingTasks />}
        </div>
      </div>
    </main>
  );
}

