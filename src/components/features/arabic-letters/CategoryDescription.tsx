import React from 'react';
import { FilterCategory } from '@/lib/types';
import { categoryDescriptions } from '@/lib/constants';

interface CategoryDescriptionProps {
  selectedCategory: FilterCategory;
  filteredCount: number;
}

export const CategoryDescription: React.FC<CategoryDescriptionProps> = ({
  selectedCategory,
  filteredCount,
}) => {
  if (selectedCategory === 'الكل') return null;

  return (
    <div className="text-center mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/60">
      <h3 className="font-semibold text-xl text-gray-800 mb-2">{selectedCategory}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">
        {categoryDescriptions[selectedCategory as keyof typeof categoryDescriptions]}
      </p>
      <div className="mt-3 text-sm text-gray-500">
        عدد الحروف: <strong>{filteredCount}</strong>
      </div>
    </div>
  );
};