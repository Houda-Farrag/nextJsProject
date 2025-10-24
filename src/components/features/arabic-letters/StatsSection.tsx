import React from 'react';
import { StatCard } from '@/components/ui/cards';
import { categoryColors } from '@/lib/constants';

interface StatsSectionProps {
  stats: Array<{ category: string; count: number }>;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
      {stats.map(({ category, count }) => (
        <StatCard
          key={category}
          category={category}
          count={count}
          color={categoryColors[category as keyof typeof categoryColors] || 'bg-gray-500'}
        />
      ))}
    </div>
  );
};