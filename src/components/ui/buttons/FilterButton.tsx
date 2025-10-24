import React from 'react';
import { FilterCategory } from '@/lib/types';
import { categoryColors } from '@/lib/constants';

interface FilterButtonProps {
  category: FilterCategory;
  isSelected: boolean;
  count?: number;
  onClick: (category: FilterCategory) => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  category,
  isSelected,
  count,
  onClick,
}) => {
  const baseClasses = "px-3 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm min-w-[100px]";
  
  const getButtonClasses = () => {
    if (isSelected) {
      return category === 'الكل' 
        ? `${baseClasses} bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg`
        : `${baseClasses} ${categoryColors[category]} text-white shadow-lg`;
    }
    
    return `${baseClasses} bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md`;
  };
  return (
    <button
      onClick={() => onClick(category)}
      className={getButtonClasses()}
    >
      {category}
      {category !== 'الكل' && count !== undefined && (
        <span className="mr-1 text-xs opacity-80">({count})</span>
      )}
    </button>
  );
};