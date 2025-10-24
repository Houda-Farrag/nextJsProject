import { useState, useMemo } from 'react';
import { ArabicLetter, FilterCategory } from '@/lib/types';
import { arabicLetters } from '@/lib/constants';
import { getLetterCategory, getNewLetterCategory, filterLetters } from '@/lib/utils';

export const useArabicLetters = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('الكل');
  const [hoveredLetter, setHoveredLetter] = useState<ArabicLetter | null>(null);

  const filteredLetters = useMemo(
    () => filterLetters(arabicLetters, selectedCategory),
    [selectedCategory]
  );

  const categories = useMemo(() => {
    const compositeCategories = [...new Set(arabicLetters.map(getLetterCategory))];
    const individualCategories = ['الجهر فقط', 'الهمس فقط', 'الشدة فقط', 'الرخاوة فقط', 'البينية فقط'] as const;
    const newCategories = ['الجهر والرخاوة', 'الجهر والشدة', 'الجهر والبينية', 'الهمس والرخاوة', 'الهمس والشدة', 'الهمس والبينية'] as const;
    
    return ['الكل', ...compositeCategories, ...individualCategories, ...newCategories] as FilterCategory[];
  }, []);

  const categoryStats = useMemo(() => [
    { category: 'الجهر فقط', count: arabicLetters.filter(l => l.ghahr === 'جهر').length },
    { category: 'الهمس فقط', count: arabicLetters.filter(l => l.ghahr === 'همس').length },
    { category: 'الشدة فقط', count: arabicLetters.filter(l => l.strength === 'شدة').length },
    { category: 'الرخاوة فقط', count: arabicLetters.filter(l => l.strength === 'رخاوة').length },
    { category: 'البينية فقط', count: arabicLetters.filter(l => l.strength === 'بينية').length },
  ], []);

  return {
    selectedCategory,
    setSelectedCategory,
    hoveredLetter,
    setHoveredLetter,
    filteredLetters,
    categories,
    categoryStats,
    totalLetters: arabicLetters.length,
    getLetterCategory: getNewLetterCategory,
  };
};