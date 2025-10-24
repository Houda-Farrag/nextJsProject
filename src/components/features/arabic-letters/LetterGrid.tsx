import React from 'react';
import { ArabicLetter } from '@/lib/types';
import { LetterCard } from '@/components/ui/cards';
import { LetterTooltip } from '@/components/ui/tooltips';

interface LetterGridProps {
  letters: ArabicLetter[];
  hoveredLetter: ArabicLetter | null;
  getLetterCategory: (letter: ArabicLetter) => string;
  onLetterHover: (letter: ArabicLetter | null) => void;
}

export const LetterGrid: React.FC<LetterGridProps> = ({
  letters,
  hoveredLetter,
  getLetterCategory,
  onLetterHover,
}) => {
  return (
    <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-14 gap-3 sm:gap-4 justify-center mb-12">
      {letters.map((letter) => {
        const category = getLetterCategory(letter);
        return (
          <LetterCard
            key={letter.char}
            letter={letter}
            category={category}
            isHovered={hoveredLetter?.char === letter.char}
            onMouseEnter={() => onLetterHover(letter)}
            onMouseLeave={() => onLetterHover(null)}
          >
            {hoveredLetter?.char === letter.char && (
              <LetterTooltip letter={letter} category={category} />
            )}
          </LetterCard>
        );
      })}
    </div>
  );
};