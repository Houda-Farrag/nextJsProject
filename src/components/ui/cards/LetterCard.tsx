import React from 'react';
import { ArabicLetter } from '@/lib/types';
import { categoryColors } from '@/lib/constants';

interface LetterCardProps {
  letter: ArabicLetter;
  category: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children?: React.ReactNode;
}

export const LetterCard: React.FC<LetterCardProps> = ({
  letter,
  category,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  return (
    <div
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`
        w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center 
        text-white font-bold text-lg sm:text-xl shadow-lg transition-all 
        duration-300 group-hover:scale-110 group-hover:shadow-xl cursor-pointer
        ${categoryColors[category as keyof typeof categoryColors] || 'bg-gray-500'} 
        border-2 border-white
      `}>
        {letter.char}
      </div>
      {children}
    </div>
  );
};