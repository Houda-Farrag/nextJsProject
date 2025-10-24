import React from 'react';
import { categoryColors, categoryDescriptions } from '@/lib/constants';
import { arabicLetters } from '@/lib/constants';
import { getLetterCategory, getNewLetterCategory } from '@/lib/utils/index';

export const ColorKeySection: React.FC = () => {
  const compositeCategories = [...new Set(arabicLetters.map(getLetterCategory))];
  const individualCategories = ['الجهر فقط', 'الهمس فقط', 'الشدة فقط', 'الرخاوة فقط', 'البينية فقط'] as const;
  const newCategories = ['الجهر والرخاوة', 'الجهر والشدة', 'الجهر والبينية', 'الهمس والرخاوة', 'الهمس والشدة', 'الهمس والبينية'] as const;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/60 p-6 sm:p-8 mb-8">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
        🎨 مفتاح التصنيفات الصوتية
      </h3>
      
      <h4 className="font-semibold text-lg text-gray-700 mb-4">التصنيفات الجديدة (بناء على الجهر/الهمس أولاً):</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {newCategories.map((category) => (
          <div key={category} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-colors">
            <div className={`w-8 h-8 rounded-lg ${categoryColors[category]} flex-shrink-0 mt-1`}></div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800 text-lg mb-1">{category}</div>
              <div className="text-gray-600 text-sm leading-relaxed">{categoryDescriptions[category]}</div>
              <div className="text-xs text-gray-500 mt-2">
                العدد: {arabicLetters.filter(l => getNewLetterCategory(l) === category).length} حرف
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="font-semibold text-lg text-gray-700 mb-4">التصنيفات المركبة الأصلية:</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {compositeCategories.map((category) => (
          <div key={category} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-colors">
            <div className={`w-8 h-8 rounded-lg ${categoryColors[category]} flex-shrink-0 mt-1`}></div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800 text-lg mb-1">{category}</div>
              <div className="text-gray-600 text-sm leading-relaxed">{categoryDescriptions[category]}</div>
              <div className="text-xs text-gray-500 mt-2">
                العدد: {arabicLetters.filter(l => getLetterCategory(l) === category).length} حرف
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="font-semibold text-lg text-gray-700 mb-4">التصنيفات الفردية:</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {individualCategories.map((category) => (
          <div key={category} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-colors">
            <div className={`w-8 h-8 rounded-lg ${categoryColors[category]} flex-shrink-0 mt-1`}></div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800 text-lg mb-1">{category}</div>
              <div className="text-gray-600 text-sm leading-relaxed">{categoryDescriptions[category]}</div>
              <div className="text-xs text-gray-500 mt-2">
                العدد: {category === 'الجهر فقط' 
                  ? arabicLetters.filter(l => l.ghahr === 'جهر').length
                  : category === 'الهمس فقط'
                  ? arabicLetters.filter(l => l.ghahr === 'همس').length
                  : category === 'الشدة فقط'
                  ? arabicLetters.filter(l => l.strength === 'شدة').length
                  : category === 'الرخاوة فقط'
                  ? arabicLetters.filter(l => l.strength === 'رخاوة').length
                  : arabicLetters.filter(l => l.strength === 'بينية').length
                } حرف
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};