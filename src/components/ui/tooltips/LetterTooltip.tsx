import React from 'react';
import { ArabicLetter } from '@/lib/types';

interface LetterTooltipProps {
  letter: ArabicLetter;
  category: string;
}

export const LetterTooltip: React.FC<LetterTooltipProps> = ({ letter, category }) => {
  return (
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-20 animate-in fade-in-0 zoom-in-95">
      <div className="bg-gray-900/95 text-white text-sm rounded-xl py-3 px-4 whitespace-nowrap backdrop-blur-sm border border-gray-700/50 shadow-2xl">
        <div className="font-semibold text-base mb-1">{letter.name} ({letter.char})</div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-gray-300">الجهر/الهمس:</span>
          <span className="font-medium">{letter.ghahr}</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-gray-300">القوة:</span>
          <span className="font-medium">{letter.strength}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-300">التصنيف:</span>
          <span className="font-medium">{category}</span>
        </div>
      </div>
      <div className="w-3 h-3 bg-gray-900/95 transform rotate-45 absolute top-full -mt-1.5 left-1/2 -translate-x-1/2 border-r border-b border-gray-700/50"></div>
    </div>
  );
};