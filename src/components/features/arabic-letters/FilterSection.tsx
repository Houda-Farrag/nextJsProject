import React, { useMemo } from "react";
import { ArabicLetter, FilterCategory } from "@/lib/types";
import { FilterButton } from "@/components/ui";
import { arabicLetters } from "@/lib/constants";
// import { getLetterCategory, getNewLetterCategory } from "@/lib/utils";

interface FilterSectionProps {
  categories: FilterCategory[];
  selectedCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  categories,
  selectedCategory,
  // filteredCount,
  onCategoryChange,
}) => {
  // Pre-calculate counts for all categories using useMemo for optimization
  const categoryCounts = useMemo(() => {
    const counts: Record<FilterCategory, number> = {} as Record<FilterCategory, number>;
    
    categories.forEach(category => {
      if (category === 'الكل') {
        counts[category] = arabicLetters.length;
      } else {
        // Use a more direct counting approach
        counts[category] = countLettersByCategory(arabicLetters, category);
      }
    });
    
    return counts;
  }, [categories]);

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <FilterButton
          key={category}
          category={category}
          isSelected={selectedCategory === category}
          count={categoryCounts[category]}
          onClick={onCategoryChange}
        />
      ))}
    </div>
  );
};



const countLettersByCategory = (letters: ArabicLetter[], category: string): number => {
  const countMap: Record<string, (letter: ArabicLetter) => boolean> = {
    'الجهر فقط': (letter) => letter.ghahr === 'جهر',
    'الهمس فقط': (letter) => letter.ghahr === 'همس',
    'الشدة فقط': (letter) => letter.strength === 'شدة',
    'الرخاوة فقط': (letter) => letter.strength === 'رخاوة',
    'البينية فقط': (letter) => letter.strength === 'بينية',
    'الجهر والرخاوة': (letter) => letter.ghahr === 'جهر' && letter.strength === 'رخاوة',
    'الجهر والشدة': (letter) => letter.ghahr === 'جهر' && letter.strength === 'شدة',
    'الجهر والبينية': (letter) => letter.ghahr === 'جهر' && letter.strength === 'بينية',
    'الهمس والرخاوة': (letter) => letter.ghahr === 'همس' && letter.strength === 'رخاوة',
    'الهمس والشدة': (letter) => letter.ghahr === 'همس' && letter.strength === 'شدة',
    'الهمس والبينية': (letter) => letter.ghahr === 'همس' && letter.strength === 'بينية',
    'الشدة والجهر': (letter) => letter.strength === 'شدة' && letter.ghahr === 'جهر',
    'الشدة والهمس': (letter) => letter.strength === 'شدة' && letter.ghahr === 'همس',
    'الرخاوة والهمس': (letter) => letter.strength === 'رخاوة' && letter.ghahr === 'همس',
    'الرخاوة والجهر': (letter) => letter.strength === 'رخاوة' && letter.ghahr === 'جهر',
    'البينية والجهر': (letter) => letter.strength === 'بينية' && letter.ghahr === 'جهر',
    'البينية والهمس': (letter) => letter.strength === 'بينية' && letter.ghahr === 'همس',
  };

  if (countMap[category]) {
    const filteredLetters = letters.filter(countMap[category]);
    return filteredLetters.length;
  }
  
  return 0;
};