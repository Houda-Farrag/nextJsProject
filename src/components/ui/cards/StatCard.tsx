import React from 'react';

interface StatCardProps {
  category: string;
  count: number;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({ category, count, color }) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm border text-center">
      <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${color}`}></div>
      <div className="text-xs sm:text-sm font-medium text-gray-700">{category}</div>
      <div className="text-lg font-bold text-gray-900">{count}</div>
    </div>
  );
};