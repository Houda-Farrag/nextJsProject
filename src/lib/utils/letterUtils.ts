import { ArabicLetter, LetterCategory } from '../types';

export const getLetterCategory = (letter: ArabicLetter): LetterCategory => {
  if (letter.strength === 'شدة' && letter.ghahr === 'جهر') return 'الشدة والجهر';
  if (letter.strength === 'شدة' && letter.ghahr === 'همس') return 'الشدة والهمس';
  if (letter.strength === 'رخاوة' && letter.ghahr === 'همس') return 'الرخاوة والهمس';
  if (letter.strength === 'رخاوة' && letter.ghahr === 'جهر') return 'الرخاوة والجهر';
  if (letter.strength === 'بينية' && letter.ghahr === 'جهر') return 'البينية والجهر';
  if (letter.strength === 'بينية' && letter.ghahr === 'همس') return 'البينية والهمس';
  return 'غير مصنف';
};

export const getNewLetterCategory = (letter: ArabicLetter): LetterCategory => {
  if (letter.ghahr === 'جهر' && letter.strength === 'رخاوة') return 'الجهر والرخاوة';
  if (letter.ghahr === 'جهر' && letter.strength === 'شدة') return 'الجهر والشدة';
  if (letter.ghahr === 'جهر' && letter.strength === 'بينية') return 'الجهر والبينية';
  if (letter.ghahr === 'همس' && letter.strength === 'رخاوة') return 'الهمس والرخاوة';
  if (letter.ghahr === 'همس' && letter.strength === 'شدة') return 'الهمس والشدة';
  if (letter.ghahr === 'همس' && letter.strength === 'بينية') return 'الهمس والبينية';
  return 'غير مصنف';
};

export const filterLetters = (
  letters: ArabicLetter[], 
  selectedCategory: string
): ArabicLetter[] => {
  if (selectedCategory === 'الكل') return letters;
  
  const filterMap: Record<string, (letter: ArabicLetter) => boolean> = {
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
  };

  return filterMap[selectedCategory] 
    ? letters.filter(filterMap[selectedCategory])
    : letters.filter(letter => getLetterCategory(letter) === selectedCategory);
};