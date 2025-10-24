"use client";
import React from 'react';
import { useArabicLetters } from '@/hooks';
import { HeaderArabicLetters, FooterArabicLetters } from '@/components/layout';
import {
  StatsSection,
  FilterSection,
  LetterGrid,
  ColorKeySection,
  CategoryDescription,
} from '@/components/features/arabic-letters';


const ArabicLettersAnalyzer: React.FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    hoveredLetter,
    setHoveredLetter,
    filteredLetters,
    categories,
    categoryStats,
    totalLetters,
    getLetterCategory,
  } = useArabicLetters();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-6" dir='rtl'>
      <div className="max-w-7xl mx-auto">
        <HeaderArabicLetters />
        
        <StatsSection stats={categoryStats} />
        
        <FilterSection
          categories={categories}
          selectedCategory={selectedCategory}
       
          onCategoryChange={setSelectedCategory}
        />

        <CategoryDescription 
          selectedCategory={selectedCategory} 
          filteredCount={filteredLetters.length}
        />

        <LetterGrid
          letters={filteredLetters}
          hoveredLetter={hoveredLetter}
          getLetterCategory={getLetterCategory}
          onLetterHover={setHoveredLetter}
        />

        <ColorKeySection />

        <FooterArabicLetters
          filteredCount={filteredLetters.length} 
          totalCount={totalLetters} 
        />
      </div>
    </div>
  );
};

export default ArabicLettersAnalyzer;


// "use client";
// import React, { useState } from 'react';

// // بيانات الحروف العربية مع تصنيفاتها
// const arabicLetters = [
//   { char: 'أ', name: 'همزة', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ب', name: 'باء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ت', name: 'تاء', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
//   { char: 'ث', name: 'ثاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ج', name: 'جيم', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ح', name: 'حاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'خ', name: 'خاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'د', name: 'دال', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ذ', name: 'ذال', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ر', name: 'راء', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
//   { char: 'ز', name: 'زاي', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'س', name: 'سين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ش', name: 'شين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ص', name: 'صاد', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ض', name: 'ضاد', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ط', name: 'طاء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ظ', name: 'ظاء', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ع', name: 'عين', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'غ', name: 'غين', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ف', name: 'فاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ق', name: 'قاف', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ك', name: 'كاف', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
//   { char: 'ل', name: 'لام', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'م', name: 'ميم', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
//   { char: 'ن', name: 'نون', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'هـ', name: 'هاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'و', name: 'واو', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
//   { char: 'ي', name: 'ياء', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
// ];

// // تعريف الألوان للتصنيفات
// const categoryColors = {
//   'الشدة والجهر': 'bg-blue-500',
//   'الشدة والهمس': 'bg-red-500', 
//   'الرخاوة والهمس': 'bg-green-500',
//   'الرخاوة والجهر': 'bg-purple-500',
//   'البينية والجهر': 'bg-yellow-500',
//   'البينية والهمس': 'bg-gray-500'
// };

// const categoryDescriptions = {
//   'الشدة والجهر': 'حروف قوية في المخرج والصوت',
//   'الشدة والهمس': 'حروف قوية في المخرج وضعيفة في الصوت',
//   'الرخاوة والهمس': 'حروف ضعيفة في المخرج والصوت', 
//   'الرخاوة والجهر': 'حروف ضعيفة في المخرج وقوية في الصوت',
//   'البينية والجهر': 'حروف متوسطة في المخرج وقوية في الصوت'
// };

// const ArabicLettersAnalyzer = () => {
//   const [selectedCategory, setSelectedCategory] = useState('الكل');
//   const [hoveredLetter, setHoveredLetter] = useState(null);

//   // الحصول على التصنيف المركب لكل حرف
//   const getLetterCategory = (letter) => {
//     if (letter.strength === 'شدة' && letter.ghahr === 'جهر') return 'الشدة والجهر';
//     if (letter.strength === 'شدة' && letter.ghahr === 'همس') return 'الشدة والهمس';
//     if (letter.strength === 'رخاوة' && letter.ghahr === 'همس') return 'الرخاوة والهمس';
//     if (letter.strength === 'رخاوة' && letter.ghahr === 'جهر') return 'الرخاوة والجهر';
//     if (letter.strength === 'بينية' && letter.ghahr === 'جهر') return 'البينية والجهر';
//     if (letter.strength === 'بينية' && letter.ghahr === 'همس') return 'البينية والهمس';
//     return 'غير مصنف';
//   };

//   // تصفية الحروف حسب التصنيف المختار
//   const filteredLetters = selectedCategory === 'الكل' 
//     ? arabicLetters 
//     : arabicLetters.filter(letter => getLetterCategory(letter) === selectedCategory);

//   // الحصول على التصنيفات الفريدة
//   const categories = ['الكل', ...new Set(arabicLetters.map(letter => getLetterCategory(letter)))];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6" dir='rtl'>
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
//           التحليل الصوتي للحروف العربية
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           تصنيف الحروف حسب الجهر والهمس والشدة والرخاوة والبينية
//         </p>

//         {/* أزرار التصفية */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           {categories.map(category => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-lg font-medium transition-all ${
//                 selectedCategory === category
//                   ? category === 'الكل' 
//                     ? 'bg-gray-800 text-white'
//                     : `${categoryColors[category] || 'bg-gray-500'} text-white`
//                   : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* وصف التصنيف المختار */}
//         {selectedCategory !== 'الكل' && (
//           <div className="text-center mb-6 p-4 bg-white rounded-lg shadow-sm border">
//             <h3 className="font-semibold text-lg text-gray-800">{selectedCategory}</h3>
//             <p className="text-gray-600">{categoryDescriptions[selectedCategory]}</p>
//           </div>
//         )}

//         {/* عرض الحروف */}
//         <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-14 gap-4 justify-center">
//           {filteredLetters.map(letter => {
//             const category = getLetterCategory(letter);
//             return (
//               <div
//                 key={letter.char}
//                 className="relative group"
//                 onMouseEnter={() => setHoveredLetter(letter)}
//                 onMouseLeave={() => setHoveredLetter(null)}
//               >
//                 <div className={`
//                   w-14 h-14 rounded-full flex items-center justify-center 
//                   text-white font-bold text-xl shadow-lg transition-transform 
//                   duration-200 group-hover:scale-110 cursor-pointer
//                   ${categoryColors[category]}
//                 `}>
//                   {letter.char}
//                 </div>
                
//                 {/* Tooltip عند التمرير */}
//                 {hoveredLetter?.char === letter.char && (
//                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
//                     <div className="bg-gray-800 text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap">
//                       <div className="font-semibold">{letter.name} ({letter.char})</div>
//                       <div>الجهر/الهمس: {letter.ghahr}</div>
//                       <div>القوة: {letter.strength}</div>
//                       <div>التصنيف: {category}</div>
//                     </div>
//                     <div className="w-3 h-3 bg-gray-800 transform rotate-45 absolute top-full -mt-1 left-1/2 -translate-x-1/2"></div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* مفتاح الألوان */}
//         <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">مفتاح التصنيفات</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {Object.entries(categoryColors).map(([category, color]) => (
//               <div key={category} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
//                 <div className={`w-6 h-6 rounded-full ${color}`}></div>
//                 <div>
//                   <div className="font-medium text-gray-800">{category}</div>
//                   <div className="text-sm text-gray-600">{categoryDescriptions[category]}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* إحصائيات */}
//         <div className="mt-8 text-center text-gray-600">
//           <p>عرض {filteredLetters.length} من أصل {arabicLetters.length} حرف</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArabicLettersAnalyzer;

// "use client";
// import React, { useState } from 'react';

// // تعريف الأنواع (TypeScript Interfaces)
// interface ArabicLetter {
//   char: string;
//   name: string;
//   ghahr: 'جهر' | 'همس';
//   strength: 'شدة' | 'رخاوة' | 'بينية';
//   color: string;
// }

// type LetterCategory = 
//   | 'الشدة والجهر'
//   | 'الشدة والهمس'
//   | 'الرخاوة والهمس'
//   | 'الرخاوة والجهر'
//   | 'البينية والجهر'
//   | 'البينية والهمس'
//   | 'الشدة'
//   | 'الرخاوة'
//   | 'البينية'
//   | 'الجهر'
//   | 'الهمس'
//   | 'غير مصنف';

// type FilterCategory = LetterCategory | 'الكل';

// // بيانات الحروف العربية مع تصنيفاتها
// const arabicLetters: ArabicLetter[] = [
//   { char: 'أ', name: 'همزة', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ب', name: 'باء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ت', name: 'تاء', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
//   { char: 'ث', name: 'ثاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ج', name: 'جيم', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ح', name: 'حاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'خ', name: 'خاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'د', name: 'دال', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ذ', name: 'ذال', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ر', name: 'راء', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
//   { char: 'ز', name: 'زاي', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'س', name: 'سين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ش', name: 'شين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ص', name: 'صاد', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ض', name: 'ضاد', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ط', name: 'طاء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ظ', name: 'ظاء', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ع', name: 'عين', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'غ', name: 'غين', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ف', name: 'فاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ق', name: 'قاف', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ك', name: 'كاف', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
//   { char: 'ل', name: 'لام', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'م', name: 'ميم', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
//   { char: 'ن', name: 'نون', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'هـ', name: 'هاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'و', name: 'واو', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
//   { char: 'ي', name: 'ياء', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-yellow-500' },
// ];

// // تعريف الألوان للتصنيفات
// const categoryColors: Record<LetterCategory, string> = {
//   'الشدة والجهر': 'bg-blue-500 hover:bg-blue-600',
//   'الشدة والهمس': 'bg-red-500 hover:bg-red-600',
//   'الرخاوة والهمس': 'bg-green-500 hover:bg-green-600',
//   'الرخاوة والجهر': 'bg-purple-500 hover:bg-purple-600',
//   'البينية والجهر': 'bg-yellow-500 hover:bg-yellow-600',
//   'البينية والهمس': 'bg-yellow-500 hover:bg-yellow-600',
//   'الجهر' : 'bg-gray-500 hover:bg-gray-600',
//   'الشدة' : 'bg-gray-500 hover:bg-gray-600',
//   'الرخاوة' : 'bg-gray-500 hover:bg-gray-600',
//   'البينية' : 'bg-gray-500 hover:bg-gray-600',
//   'الهمس': 'bg-gray-500 hover:bg-gray-600',
//   'غير مصنف': 'bg-gray-500 hover:bg-gray-600'
// };

// const categoryDescriptions: Record<LetterCategory, string> = {
//   'الشدة والجهر': 'حروف قوية في المخرج والصوت (انحباس كامل للصوت ثم انطلاقه)',
//   'الشدة والهمس': 'حروف قوية في المخرج وضعيفة في الصوت (انحباس مع همس)',
//   'الرخاوة والهمس': 'حروف ضعيفة في المخرج والصوت (جريان الصوت مع همس)', 
//   'الرخاوة والجهر': 'حروف ضعيفة في المخرج وقوية في الصوت (جريان الصوت مع جهر)',
//   'البينية والجهر': 'حروف متوسطة في المخرج وقوية في الصوت (انحباس جزئي)',
//   'البينية والهمس': 'حروف متوسطة في المخرج وقوية في الصوت (انحباس جزئي)',
//   'الجهر' : 'حروف قوية في المخرج وقوية في الصوت (انحباس كامل للصوت)',
//   'الشدة' : 'حروف قوية في المخرج وقوية في الصوت (انحباس كامل للصوت)',
//   'الرخاوة' : 'حروف ضعيفة في المخرج وقوية في الصوت (جريان الصوت مع جهر)',
//   'البينية' : 'حروف متوسطة في المخرج وقوية في الصوت (انحباس جزئي)',
//   'الهمس': 'حروف ضعيفة في المخرج وقوية في الصوت (جريان الصوت مع همس)',
//   'غير مصنف': 'حروف غير مصنفة في النظام'
// };

// const ArabicLettersAnalyzer: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('الكل');
//   const [hoveredLetter, setHoveredLetter] = useState<ArabicLetter | null>(null);

//   // الحصول على التصنيف المركب لكل حرف
//   const getLetterCategory = (letter: ArabicLetter): LetterCategory => {
//     if (letter.strength === 'شدة' && letter.ghahr === 'جهر') return 'الشدة والجهر';
//     if (letter.strength === 'شدة' && letter.ghahr === 'همس') return 'الشدة والهمس';
//     if (letter.strength === 'رخاوة' && letter.ghahr === 'همس') return 'الرخاوة والهمس';
//     if (letter.strength === 'رخاوة' && letter.ghahr === 'جهر') return 'الرخاوة والجهر';
//     if (letter.strength === 'بينية' && letter.ghahr === 'جهر') return 'البينية والجهر';
//     if (letter.strength === 'بينية' && letter.ghahr === 'همس') return 'البينية والهمس';
//     if (letter.strength === 'شدة') return 'الشدة';
//     if (letter.strength === 'رخاوة') return 'الرخاوة';
//     if (letter.strength === 'بينية') return 'البينية';
//     if (letter.strength === 'همس') return 'الهمس';
//     if (letter.strength === 'جهر') return 'الجهر';
//     return 'غير مصنف';
//   };

//   // تصفية الحروف حسب التصنيف المختار
//   const filteredLetters: ArabicLetter[] = selectedCategory === 'الكل' 
//     ? arabicLetters 
//     : arabicLetters.filter(letter => getLetterCategory(letter) === selectedCategory);

//   // الحصول على التصنيفات الفريدة
//   const categories: FilterCategory[] = ['الكل', ...new Set(arabicLetters.map(letter => getLetterCategory(letter)))] as FilterCategory[];

//   // إحصائيات التصنيفات
//   const categoryStats = categories.filter(cat => cat !== 'الكل').map(category => ({
//     category,
//     count: arabicLetters.filter(letter => getLetterCategory(letter) === category).length
//   }));

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-6" dir='rtl'>
//       <div className="max-w-7xl mx-auto">
//         {/* الهيدر */}
//         <header className="text-center mb-8 sm:mb-12">
//           <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3">
//             📊 التحليل الصوتي للحروف العربية
//           </h1>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             تصنيف علمي تفاعلي للحروف حسب صفاتها الصوتية من الجهر والهمس والشدة والرخاوة والبينية
//           </p>
//         </header>

//         {/* إحصائيات سريعة */}
//         <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
//           {categoryStats.map(({ category, count }) => (
//             <div key={category} className="bg-white rounded-lg p-3 shadow-sm border text-center">
//               <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${categoryColors[category]}`}></div>
//               <div className="text-xs sm:text-sm font-medium text-gray-700">{category}</div>
//               <div className="text-lg font-bold text-gray-900">{count}</div>
//             </div>
//           ))}
//         </div>

//         {/* أزرار التصفية */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
//                 selectedCategory === category
//                   ? category === 'الكل' 
//                     ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg'
//                     : `${categoryColors[category]} text-white shadow-lg`
//                   : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
//               } text-sm sm:text-base min-w-[120px]`}
//             >
//               {category}
//               {category !== 'الكل' && (
//                 <span className="mr-2 text-xs opacity-80">
//                   ({arabicLetters.filter(l => getLetterCategory(l) === category).length})
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* وصف التصنيف المختار */}
//         {selectedCategory !== 'الكل' && (
//           <div className="text-center mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/60">
//             <h3 className="font-semibold text-xl text-gray-800 mb-2">{selectedCategory}</h3>
//             <p className="text-gray-600 text-lg leading-relaxed">{categoryDescriptions[selectedCategory]}</p>
//           </div>
//         )}

//         {/* عرض الحروف */}
//         <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-14 gap-3 sm:gap-4 justify-center mb-12">
//           {filteredLetters.map((letter) => {
//             const category = getLetterCategory(letter);
//             return (
//               <div
//                 key={letter.char}
//                 className="relative group"
//                 onMouseEnter={() => setHoveredLetter(letter)}
//                 onMouseLeave={() => setHoveredLetter(null)}
//               >
//                 <div className={`
//                   w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center 
//                   text-white font-bold text-lg sm:text-xl shadow-lg transition-all 
//                   duration-300 group-hover:scale-110 group-hover:shadow-xl cursor-pointer
//                   ${categoryColors[category]} border-2 border-white
//                 `}>
//                   {letter.char}
//                 </div>
                
//                 {/* Tooltip عند التمرير */}
//                 {hoveredLetter?.char === letter.char && (
//                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-20 animate-in fade-in-0 zoom-in-95">
//                     <div className="bg-gray-900/95 text-white text-sm rounded-xl py-3 px-4 whitespace-nowrap backdrop-blur-sm border border-gray-700/50 shadow-2xl">
//                       <div className="font-semibold text-base mb-1">{letter.name} ({letter.char})</div>
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className="text-gray-300">الجهر/الهمس:</span>
//                         <span className="font-medium">{letter.ghahr}</span>
//                       </div>
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className="text-gray-300">القوة:</span>
//                         <span className="font-medium">{letter.strength}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span className="text-gray-300">التصنيف:</span>
//                         <span className="font-medium">{category}</span>
//                       </div>
//                     </div>
//                     <div className="w-3 h-3 bg-gray-900/95 transform rotate-45 absolute top-full -mt-1.5 left-1/2 -translate-x-1/2 border-r border-b border-gray-700/50"></div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* مفتاح الألوان */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/60 p-6 sm:p-8 mb-8">
//           <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
//             🎨 مفتاح التصنيفات الصوتية
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {Object.entries(categoryColors).map(([category, color]) => (
//               <div key={category} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-colors">
//                 <div className={`w-8 h-8 rounded-lg ${color} flex-shrink-0 mt-1`}></div>
//                 <div className="flex-1">
//                   <div className="font-semibold text-gray-800 text-lg mb-1">{category}</div>
//                   <div className="text-gray-600 text-sm leading-relaxed">{categoryDescriptions[category as LetterCategory]}</div>
//                   <div className="text-xs text-gray-500 mt-2">
//                     العدد: {arabicLetters.filter(l => getLetterCategory(l) === category).length} حرف
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* إحصائيات نهائية */}
//         <footer className="text-center text-gray-600 bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-white/60">
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
//             <p className="text-lg font-medium">
//               📝 عرض <span className="text-gray-800 font-bold">{filteredLetters.length}</span> من أصل <span className="text-gray-800 font-bold">{arabicLetters.length}</span> حرف
//             </p>
//             <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>
//             <p className="text-sm text-gray-500">
//               🎯 اختر تصنيفاً معيناً لرؤية الحروف المشتركة في الصفات الصوتية
//             </p>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default ArabicLettersAnalyzer;

// "use client";
// import React, { useState } from 'react';

// // تعريف الأنواع (TypeScript Interfaces)
// interface ArabicLetter {
//   char: string;
//   name: string;
//   ghahr: 'جهر' | 'همس';
//   strength: 'شدة' | 'رخاوة' | 'بينية';
//   color: string;
// }

// type LetterCategory = 
//   | 'الشدة والجهر'
//   | 'الشدة والهمس'
//   | 'الرخاوة والهمس'
//   | 'الرخاوة والجهر'
//   | 'البينية والجهر'
//   | 'الجهر فقط'
//   | 'الهمس فقط'
//   | 'الشدة فقط'
//   | 'الرخاوة فقط'
//   | 'البينية فقط'
//   | 'غير مصنف';

// type FilterCategory = LetterCategory | 'الكل';

// // بيانات الحروف العربية مع تصنيفاتها
// const arabicLetters: ArabicLetter[] = [
//   { char: 'أ', name: 'همزة', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ب', name: 'باء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ت', name: 'تاء', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
//   { char: 'ث', name: 'ثاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ج', name: 'جيم', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ح', name: 'حاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'خ', name: 'خاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'د', name: 'دال', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ذ', name: 'ذال', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ر', name: 'راء', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
//   { char: 'ز', name: 'زاي', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'س', name: 'سين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ش', name: 'شين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ص', name: 'صاد', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ض', name: 'ضاد', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ط', name: 'طاء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ظ', name: 'ظاء', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ع', name: 'عين', ghahr: 'جهر', strength: 'بينية', color: 'bg-purple-500' },
//   { char: 'غ', name: 'غين', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ف', name: 'فاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ق', name: 'قاف', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ك', name: 'كاف', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
//   { char: 'ل', name: 'لام', ghahr: 'جهر', strength: 'بينية', color: 'bg-purple-500' },
//   { char: 'م', name: 'ميم', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
//   { char: 'ن', name: 'نون', ghahr: 'جهر', strength: 'بينية', color: 'bg-purple-500' },
//   { char: 'هـ', name: 'هاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'و', name: 'واو', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-yellow-500' },
//   { char: 'ي', name: 'ياء', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-yellow-500' },
// ];

// // تعريف الألوان للتصنيفات
// const categoryColors: Record<LetterCategory, string> = {
//   'الشدة والجهر': 'bg-blue-500 hover:bg-blue-600',
//   'الشدة والهمس': 'bg-red-500 hover:bg-red-600',
//   'الرخاوة والهمس': 'bg-green-500 hover:bg-green-600',
//   'الرخاوة والجهر': 'bg-purple-500 hover:bg-purple-600',
//   'البينية والجهر': 'bg-yellow-500 hover:bg-yellow-600',
//   'الجهر فقط': 'bg-teal-500 hover:bg-teal-600',
//   'الهمس فقط': 'bg-pink-500 hover:bg-pink-600',
//   'الشدة فقط': 'bg-indigo-500 hover:bg-indigo-600',
//   'الرخاوة فقط': 'bg-orange-500 hover:bg-orange-600',
//   'البينية فقط': 'bg-amber-500 hover:bg-amber-600',
//   'غير مصنف': 'bg-gray-500 hover:bg-gray-600'
// };

// const categoryDescriptions: Record<LetterCategory, string> = {
//   'الشدة والجهر': 'حروف قوية في المخرج والصوت (انحباس كامل للصوت ثم انطلاقه)',
//   'الشدة والهمس': 'حروف قوية في المخرج وضعيفة في الصوت (انحباس مع همس)',
//   'الرخاوة والهمس': 'حروف ضعيفة في المخرج والصوت (جريان الصوت مع همس)', 
//   'الرخاوة والجهر': 'حروف ضعيفة في المخرج وقوية في الصوت (جريان الصوت مع جهر)',
//   'البينية والجهر': 'حروف متوسطة في المخرج وقوية في الصوت (انحباس جزئي)',
//   'الجهر فقط': 'جميع الحروف المجهورة بغض النظر عن قوتها',
//   'الهمس فقط': 'جميع الحروف المهموسة بغض النظر عن قوتها',
//   'الشدة فقط': 'جميع حروف الشدة بغض النظر عن الجهر أو الهمس',
//   'الرخاوة فقط': 'جميع حروف الرخاوة بغض النظر عن الجهر أو الهمس',
//   'البينية فقط': 'جميع حروف البينية بغض النظر عن الجهر أو الهمس',
//   'غير مصنف': 'حروف غير مصنفة في النظام'
// };

// const ArabicLettersAnalyzer: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('الكل');
//   const [hoveredLetter, setHoveredLetter] = useState<ArabicLetter | null>(null);

//   // الحصول على التصنيف المركب لكل حرف
//   const getLetterCategory = (letter: ArabicLetter): LetterCategory => {
//     if (letter.strength === 'شدة' && letter.ghahr === 'جهر') return 'الشدة والجهر';
//     if (letter.strength === 'شدة' && letter.ghahr === 'همس') return 'الشدة والهمس';
//     if (letter.strength === 'رخاوة' && letter.ghahr === 'همس') return 'الرخاوة والهمس';
//     if (letter.strength === 'رخاوة' && letter.ghahr === 'جهر') return 'الرخاوة والجهر';
//     if (letter.strength === 'بينية' && letter.ghahr === 'جهر') return 'البينية والجهر';
//     return 'غير مصنف';
//   };

//   // الحصول على التصنيف الفردي للحرف
//   const getIndividualCategory = (letter: ArabicLetter, categoryType: 'ghahr' | 'strength'): string => {
//     if (categoryType === 'ghahr') return letter.ghahr === 'جهر' ? 'الجهر فقط' : 'الهمس فقط';
//     if (categoryType === 'strength') {
//       if (letter.strength === 'شدة') return 'الشدة فقط';
//       if (letter.strength === 'رخاوة') return 'الرخاوة فقط';
//       if (letter.strength === 'بينية') return 'البينية فقط';
//     }
//     return 'غير مصنف';
//   };

//   // تصفية الحروف حسب التصنيف المختار
//   const filteredLetters: ArabicLetter[] = selectedCategory === 'الكل' 
//     ? arabicLetters 
//     : selectedCategory === 'الجهر فقط'
//     ? arabicLetters.filter(letter => letter.ghahr === 'جهر')
//     : selectedCategory === 'الهمس فقط'
//     ? arabicLetters.filter(letter => letter.ghahr === 'همس')
//     : selectedCategory === 'الشدة فقط'
//     ? arabicLetters.filter(letter => letter.strength === 'شدة')
//     : selectedCategory === 'الرخاوة فقط'
//     ? arabicLetters.filter(letter => letter.strength === 'رخاوة')
//     : selectedCategory === 'البينية فقط'
//     ? arabicLetters.filter(letter => letter.strength === 'بينية')
//     : arabicLetters.filter(letter => getLetterCategory(letter) === selectedCategory);

//   // الحصول على التصنيفات الفريدة (المركبة والفردية)
//   const compositeCategories = [...new Set(arabicLetters.map(letter => getLetterCategory(letter)))] as LetterCategory[];
//   const individualCategories: LetterCategory[] = ['الجهر فقط', 'الهمس فقط', 'الشدة فقط', 'الرخاوة فقط', 'البينية فقط'];
//   const categories: FilterCategory[] = ['الكل', ...compositeCategories, ...individualCategories];

//   // إحصائيات التصنيفات
//   const categoryStats = [
//     { category: 'الجهر فقط', count: arabicLetters.filter(l => l.ghahr === 'جهر').length },
//     { category: 'الهمس فقط', count: arabicLetters.filter(l => l.ghahr === 'همس').length },
//     { category: 'الشدة فقط', count: arabicLetters.filter(l => l.strength === 'شدة').length },
//     { category: 'الرخاوة فقط', count: arabicLetters.filter(l => l.strength === 'رخاوة').length },
//     { category: 'البينية فقط', count: arabicLetters.filter(l => l.strength === 'بينية').length },
//   ];

//   // الحصول على لون الحرف بناء على التصنيف المختار
//   const getLetterColor = (letter: ArabicLetter): string => {
//     if (selectedCategory === 'الكل') {
//       return categoryColors[getLetterCategory(letter)];
//     }
    
//     if (selectedCategory.includes('فقط')) {
//       // للتصنيفات الفردية، نستخدم ألوان التصنيفات المركبة الأصلية
//       return categoryColors[getLetterCategory(letter)];
//     }
    
//     return categoryColors[selectedCategory];
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-6" dir='rtl'>
//       <div className="max-w-7xl mx-auto">
//         {/* الهيدر */}
//         <header className="text-center mb-8 sm:mb-12">
//           <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3">
//             📊 التحليل الصوتي للحروف العربية
//           </h1>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             تصنيف علمي تفاعلي للحروف حسب صفاتها الصوتية من الجهر والهمس والشدة والرخاوة والبينية
//           </p>
//         </header>

//         {/* إحصائيات سريعة */}
//         <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
//           {categoryStats.map(({ category, count }) => (
//             <div key={category} className="bg-white rounded-lg p-3 shadow-sm border text-center">
//               <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${categoryColors[category as LetterCategory]}`}></div>
//               <div className="text-xs sm:text-sm font-medium text-gray-700">{category}</div>
//               <div className="text-lg font-bold text-gray-900">{count}</div>
//             </div>
//           ))}
//         </div>

//         {/* أزرار التصفية */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
//                 selectedCategory === category
//                   ? category === 'الكل' 
//                     ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg'
//                     : `${categoryColors[category]} text-white shadow-lg`
//                   : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
//               } text-sm sm:text-base min-w-[120px]`}
//             >
//               {category}
//               {category !== 'الكل' && (
//                 <span className="mr-2 text-xs opacity-80">
//                   ({filteredLetters.length})
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* وصف التصنيف المختار */}
//         {selectedCategory !== 'الكل' && (
//           <div className="text-center mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/60">
//             <h3 className="font-semibold text-xl text-gray-800 mb-2">{selectedCategory}</h3>
//             <p className="text-gray-600 text-lg leading-relaxed">{categoryDescriptions[selectedCategory]}</p>
//             <div className="mt-3 text-sm text-gray-500">
//               عدد الحروف: <strong>{filteredLetters.length}</strong>
//             </div>
//           </div>
//         )}

//         {/* عرض الحروف */}
//         <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-14 gap-3 sm:gap-4 justify-center mb-12">
//           {filteredLetters.map((letter) => {
//             const category = getLetterCategory(letter);
//             return (
//               <div
//                 key={letter.char}
//                 className="relative group"
//                 onMouseEnter={() => setHoveredLetter(letter)}
//                 onMouseLeave={() => setHoveredLetter(null)}
//               >
//                 <div className={`
//                   w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center 
//                   text-white font-bold text-lg sm:text-xl shadow-lg transition-all 
//                   duration-300 group-hover:scale-110 group-hover:shadow-xl cursor-pointer
//                   ${getLetterColor(letter)} border-2 border-white
//                 `}>
//                   {letter.char}
//                 </div>
                
//                 {/* Tooltip عند التمرير */}
//                 {hoveredLetter?.char === letter.char && (
//                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-20 animate-in fade-in-0 zoom-in-95">
//                     <div className="bg-gray-900/95 text-white text-sm rounded-xl py-3 px-4 whitespace-nowrap backdrop-blur-sm border border-gray-700/50 shadow-2xl">
//                       <div className="font-semibold text-base mb-1">{letter.name} ({letter.char})</div>
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className="text-gray-300">الجهر/الهمس:</span>
//                         <span className="font-medium">{letter.ghahr}</span>
//                       </div>
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className="text-gray-300">القوة:</span>
//                         <span className="font-medium">{letter.strength}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span className="text-gray-300">التصنيف:</span>
//                         <span className="font-medium">{category}</span>
//                       </div>
//                     </div>
//                     <div className="w-3 h-3 bg-gray-900/95 transform rotate-45 absolute top-full -mt-1.5 left-1/2 -translate-x-1/2 border-r border-b border-gray-700/50"></div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* مفتاح الألوان */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/60 p-6 sm:p-8 mb-8">
//           <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
//             🎨 مفتاح التصنيفات الصوتية
//           </h3>
          
//           <h4 className="font-semibold text-lg text-gray-700 mb-4">التصنيفات المركبة:</h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//             {compositeCategories.map((category) => (
//               <div key={category} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-colors">
//                 <div className={`w-8 h-8 rounded-lg ${categoryColors[category]} flex-shrink-0 mt-1`}></div>
//                 <div className="flex-1">
//                   <div className="font-semibold text-gray-800 text-lg mb-1">{category}</div>
//                   <div className="text-gray-600 text-sm leading-relaxed">{categoryDescriptions[category]}</div>
//                   <div className="text-xs text-gray-500 mt-2">
//                     العدد: {arabicLetters.filter(l => getLetterCategory(l) === category).length} حرف
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <h4 className="font-semibold text-lg text-gray-700 mb-4">التصنيفات الفردية:</h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {individualCategories.map((category) => (
//               <div key={category} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-colors">
//                 <div className={`w-8 h-8 rounded-lg ${categoryColors[category]} flex-shrink-0 mt-1`}></div>
//                 <div className="flex-1">
//                   <div className="font-semibold text-gray-800 text-lg mb-1">{category}</div>
//                   <div className="text-gray-600 text-sm leading-relaxed">{categoryDescriptions[category]}</div>
//                   <div className="text-xs text-gray-500 mt-2">
//                     العدد: {category === 'الجهر فقط' 
//                       ? arabicLetters.filter(l => l.ghahr === 'جهر').length
//                       : category === 'الهمس فقط'
//                       ? arabicLetters.filter(l => l.ghahr === 'همس').length
//                       : category === 'الشدة فقط'
//                       ? arabicLetters.filter(l => l.strength === 'شدة').length
//                       : category === 'الرخاوة فقط'
//                       ? arabicLetters.filter(l => l.strength === 'رخاوة').length
//                       : arabicLetters.filter(l => l.strength === 'بينية').length
//                     } حرف
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* إحصائيات نهائية */}
//         <footer className="text-center text-gray-600 bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-white/60">
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
//             <p className="text-lg font-medium">
//               📝 عرض <span className="text-gray-800 font-bold">{filteredLetters.length}</span> من أصل <span className="text-gray-800 font-bold">{arabicLetters.length}</span> حرف
//             </p>
//             <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>
//             <p className="text-sm text-gray-500">
//               🎯 اختر تصنيفاً معيناً لرؤية الحروف المشتركة في الصفات الصوتية
//             </p>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default ArabicLettersAnalyzer;

// "use client";
// import React, { useState } from 'react';

// // تعريف الأنواع (TypeScript Interfaces)
// interface ArabicLetter {
//   char: string;
//   name: string;
//   ghahr: 'جهر' | 'همس';
//   strength: 'شدة' | 'رخاوة' | 'بينية';
//   color: string;
// }

// type LetterCategory = 
//   | 'الشدة والجهر'
//   | 'الشدة والهمس'
//   | 'الرخاوة والهمس'
//   | 'الرخاوة والجهر'
//   | 'البينية والجهر'
//   | 'البينية والهمس'
//   | 'الجهر فقط'
//   | 'الهمس فقط'
//   | 'الشدة فقط'
//   | 'الرخاوة فقط'
//   | 'البينية فقط'
//   // التصنيفات الجديدة بناء على الجهر والهمس أولاً
//   | 'الجهر والرخاوة'
//   | 'الجهر والشدة'
//   | 'الجهر والبينية'
//   | 'الهمس والرخاوة'
//   | 'الهمس والشدة'
//   | 'الهمس والبينية'
//   | 'غير مصنف';

// type FilterCategory = LetterCategory | 'الكل';

// // بيانات الحروف العربية مع تصنيفاتها
// // const arabicLetters: ArabicLetter[] = [
// //   { char: 'أ', name: 'همزة', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
// //   { char: 'ب', name: 'باء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
// //   { char: 'ت', name: 'تاء', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
// //   { char: 'ث', name: 'ثاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
// //   { char: 'ج', name: 'جيم', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
// //   { char: 'ح', name: 'حاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
// //   { char: 'خ', name: 'خاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
// //   { char: 'د', name: 'دال', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
// //   { char: 'ذ', name: 'ذال', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
// //   { char: 'ر', name: 'راء', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
// //   { char: 'ز', name: 'زاي', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
// //   { char: 'س', name: 'سين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
// //   { char: 'ش', name: 'شين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
// //   { char: 'ص', name: 'صاد', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
// //   { char: 'ض', name: 'ضاد', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
// //   { char: 'ط', name: 'طاء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
// //   { char: 'ظ', name: 'ظاء', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
// //   { char: 'ع', name: 'عين', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
// //   { char: 'غ', name: 'غين', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
// //   { char: 'ف', name: 'فاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
// //   { char: 'ق', name: 'قاف', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
// //   { char: 'ك', name: 'كاف', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
// //   { char: 'ل', name: 'لام', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
// //   { char: 'م', name: 'ميم', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
// //   { char: 'ن', name: 'نون', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
// //   { char: 'هـ', name: 'هاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
// //   { char: 'و', name: 'واو', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
// //   { char: 'ي', name: 'ياء', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
// // ];

// const arabicLetters: ArabicLetter[] = [
//   { char: 'أ', name: 'همزة', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ب', name: 'باء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ت', name: 'تاء', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
//   { char: 'ث', name: 'ثاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ج', name: 'جيم', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ح', name: 'حاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'خ', name: 'خاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'د', name: 'دال', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ذ', name: 'ذال', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ر', name: 'راء', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
//   { char: 'ز', name: 'زاي', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'س', name: 'سين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ش', name: 'شين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ص', name: 'صاد', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ض', name: 'ضاد', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ط', name: 'طاء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ظ', name: 'ظاء', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ع', name: 'عين', ghahr: 'جهر', strength: 'بينية', color: 'bg-purple-500' },
//   { char: 'غ', name: 'غين', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
//   { char: 'ف', name: 'فاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'ق', name: 'قاف', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
//   { char: 'ك', name: 'كاف', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
//   { char: 'ل', name: 'لام', ghahr: 'جهر', strength: 'بينية', color: 'bg-purple-500' },
//   { char: 'م', name: 'ميم', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
//   { char: 'ن', name: 'نون', ghahr: 'جهر', strength: 'بينية', color: 'bg-purple-500' },
//   { char: 'هـ', name: 'هاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
//   { char: 'و', name: 'واو', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-yellow-500' },
//   { char: 'ي', name: 'ياء', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-yellow-500' },
// ];

// // تعريف الألوان للتصنيفات
// const categoryColors: Record<LetterCategory, string> = {
//   'الشدة والجهر': 'bg-blue-500 hover:bg-blue-600',
//   'الشدة والهمس': 'bg-red-500 hover:bg-red-600',
//   'الرخاوة والهمس': 'bg-green-500 hover:bg-green-600',
//   'الرخاوة والجهر': 'bg-purple-500 hover:bg-purple-600',
//   'البينية والجهر': 'bg-yellow-500 hover:bg-yellow-600',
//   'البينية والهمس': 'bg-yellow-500 hover:bg-yellow-600',
//   'الجهر فقط': 'bg-teal-500 hover:bg-teal-600',
//   'الهمس فقط': 'bg-pink-500 hover:bg-pink-600',
//   'الشدة فقط': 'bg-indigo-500 hover:bg-indigo-600',
//   'الرخاوة فقط': 'bg-orange-500 hover:bg-orange-600',
//   'البينية فقط': 'bg-amber-500 hover:bg-amber-600',
//   // الألوان الجديدة للتصنيفات المبنية على الجهر والهمس أولاً
//   'الجهر والرخاوة': 'bg-purple-400 hover:bg-purple-500',
//   'الجهر والشدة': 'bg-blue-400 hover:bg-blue-500',
//   'الجهر والبينية': 'bg-yellow-400 hover:bg-yellow-500',
//   'الهمس والرخاوة': 'bg-green-400 hover:bg-green-500',
//   'الهمس والشدة': 'bg-red-400 hover:bg-red-500',
//   'الهمس والبينية': 'bg-yellow-300 hover:bg-yellow-400',
//   'غير مصنف': 'bg-gray-500 hover:bg-gray-600'
// };

// const categoryDescriptions: Record<LetterCategory, string> = {
//   'الشدة والجهر': 'حروف قوية في المخرج والصوت (انحباس كامل للصوت ثم انطلاقه)',
//   'الشدة والهمس': 'حروف قوية في المخرج وضعيفة في الصوت (انحباس مع همس)',
//   'الرخاوة والهمس': 'حروف ضعيفة في المخرج والصوت (جريان الصوت مع همس)', 
//   'الرخاوة والجهر': 'حروف ضعيفة في المخرج وقوية في الصوت (جريان الصوت مع جهر)',
//   'البينية والجهر': 'حروف متوسطة في المخرج وقوية في الصوت (انحباس جزئي)',
//   'البينية والهمس': 'حروف متوسطة في المخرج وضعيفة في الصوت (انحباس جزئي مع همس)',
//   'الجهر فقط': 'جميع الحروف المجهورة بغض النظر عن قوتها',
//   'الهمس فقط': 'جميع الحروف المهموسة بغض النظر عن قوتها',
//   'الشدة فقط': 'جميع حروف الشدة بغض النظر عن الجهر أو الهمس',
//   'الرخاوة فقط': 'جميع حروف الرخاوة بغض النظر عن الجهر أو الهمس',
//   'البينية فقط': 'جميع حروف البينية بغض النظر عن الجهر أو الهمس',
//   // الأوصاف الجديدة
//   'الجهر والرخاوة': 'حروف مجهورة ذات صفة الرخاوة (جريان الصوت مع الجهر)',
//   'الجهر والشدة': 'حروف مجهورة ذات صفة الشدة (انحباس كامل مع الجهر)',
//   'الجهر والبينية': 'حروف مجهورة ذات صفة البينية (انحباس جزئي مع الجهر)',
//   'الهمس والرخاوة': 'حروف مهموسة ذات صفة الرخاوة (جريان الصوت مع الهمس)',
//   'الهمس والشدة': 'حروف مهموسة ذات صفة الشدة (انحباس كامل مع الهمس)',
//   'الهمس والبينية': 'حروف مهموسة ذات صفة البينية (انحباس جزئي مع الهمس)',
//   'غير مصنف': 'حروف غير مصنفة في النظام'
// };

// const ArabicLettersAnalyzer: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('الكل');
//   const [hoveredLetter, setHoveredLetter] = useState<ArabicLetter | null>(null);

//   // الحصول على التصنيف المركب لكل حرف
//   const getLetterCategory = (letter: ArabicLetter): LetterCategory => {
//     if (letter.strength === 'شدة' && letter.ghahr === 'جهر') return 'الشدة والجهر';
//     if (letter.strength === 'شدة' && letter.ghahr === 'همس') return 'الشدة والهمس';
//     if (letter.strength === 'رخاوة' && letter.ghahr === 'همس') return 'الرخاوة والهمس';
//     if (letter.strength === 'رخاوة' && letter.ghahr === 'جهر') return 'الرخاوة والجهر';
//     if (letter.strength === 'بينية' && letter.ghahr === 'جهر') return 'البينية والجهر';
//     if (letter.strength === 'بينية' && letter.ghahr === 'همس') return 'البينية والهمس';
//     return 'غير مصنف';
//   };

//   // الحصول على التصنيف الجديد (بناء على الجهر/الهمس أولاً)
//   const getNewLetterCategory = (letter: ArabicLetter): LetterCategory => {
//     if (letter.ghahr === 'جهر' && letter.strength === 'رخاوة') return 'الجهر والرخاوة';
//     if (letter.ghahr === 'جهر' && letter.strength === 'شدة') return 'الجهر والشدة';
//     if (letter.ghahr === 'جهر' && letter.strength === 'بينية') return 'الجهر والبينية';
//     if (letter.ghahr === 'همس' && letter.strength === 'رخاوة') return 'الهمس والرخاوة';
//     if (letter.ghahr === 'همس' && letter.strength === 'شدة') return 'الهمس والشدة';
//     if (letter.ghahr === 'همس' && letter.strength === 'بينية') return 'الهمس والبينية';
//     return 'غير مصنف';
//   };

//   // تصفية الحروف حسب التصنيف المختار
//   const filteredLetters: ArabicLetter[] = selectedCategory === 'الكل' 
//     ? arabicLetters 
//     : selectedCategory === 'الجهر فقط'
//     ? arabicLetters.filter(letter => letter.ghahr === 'جهر')
//     : selectedCategory === 'الهمس فقط'
//     ? arabicLetters.filter(letter => letter.ghahr === 'همس')
//     : selectedCategory === 'الشدة فقط'
//     ? arabicLetters.filter(letter => letter.strength === 'شدة')
//     : selectedCategory === 'الرخاوة فقط'
//     ? arabicLetters.filter(letter => letter.strength === 'رخاوة')
//     : selectedCategory === 'البينية فقط'
//     ? arabicLetters.filter(letter => letter.strength === 'بينية')
//     : selectedCategory === 'الجهر والرخاوة'
//     ? arabicLetters.filter(letter => letter.ghahr === 'جهر' && letter.strength === 'رخاوة')
//     : selectedCategory === 'الجهر والشدة'
//     ? arabicLetters.filter(letter => letter.ghahr === 'جهر' && letter.strength === 'شدة')
//     : selectedCategory === 'الجهر والبينية'
//     ? arabicLetters.filter(letter => letter.ghahr === 'جهر' && letter.strength === 'بينية')
//     : selectedCategory === 'الهمس والرخاوة'
//     ? arabicLetters.filter(letter => letter.ghahr === 'همس' && letter.strength === 'رخاوة')
//     : selectedCategory === 'الهمس والشدة'
//     ? arabicLetters.filter(letter => letter.ghahr === 'همس' && letter.strength === 'شدة')
//     : selectedCategory === 'الهمس والبينية'
//     ? arabicLetters.filter(letter => letter.ghahr === 'همس' && letter.strength === 'بينية')
//     : arabicLetters.filter(letter => getLetterCategory(letter) === selectedCategory);

//   // الحصول على التصنيفات الفريدة
//   const compositeCategories = [...new Set(arabicLetters.map(letter => getLetterCategory(letter)))] as LetterCategory[];
//   const individualCategories: LetterCategory[] = ['الجهر فقط', 'الهمس فقط', 'الشدة فقط', 'الرخاوة فقط', 'البينية فقط'];
//   const newCategories: LetterCategory[] = ['الجهر والرخاوة', 'الجهر والشدة', 'الجهر والبينية', 'الهمس والرخاوة', 'الهمس والشدة', 'الهمس والبينية'];
  
//   const categories: FilterCategory[] = [
//     'الكل', 
//     ...compositeCategories, 
//     ...individualCategories,
//     ...newCategories
//   ];

//   // إحصائيات التصنيفات
//   const categoryStats = [
//     { category: 'الجهر فقط', count: arabicLetters.filter(l => l.ghahr === 'جهر').length },
//     { category: 'الهمس فقط', count: arabicLetters.filter(l => l.ghahr === 'همس').length },
//     { category: 'الشدة فقط', count: arabicLetters.filter(l => l.strength === 'شدة').length },
//     { category: 'الرخاوة فقط', count: arabicLetters.filter(l => l.strength === 'رخاوة').length },
//     { category: 'البينية فقط', count: arabicLetters.filter(l => l.strength === 'بينية').length },
//     { category: 'الجهر والرخاوة', count: arabicLetters.filter(l => l.ghahr === 'جهر' && l.strength === 'رخاوة').length },
//     { category: 'الجهر والشدة', count: arabicLetters.filter(l => l.ghahr === 'جهر' && l.strength === 'شدة').length },
//     { category: 'الجهر والبينية', count: arabicLetters.filter(l => l.ghahr === 'جهر' && l.strength === 'بينية').length },
//     { category: 'الهمس والرخاوة', count: arabicLetters.filter(l => l.ghahr === 'همس' && l.strength === 'رخاوة').length },
//     { category: 'الهمس والشدة', count: arabicLetters.filter(l => l.ghahr === 'همس' && l.strength === 'شدة').length },
//     { category: 'الهمس والبينية', count: arabicLetters.filter(l => l.ghahr === 'همس' && l.strength === 'بينية').length },
//     { category: 'الكل', count: arabicLetters.length },
//   ];

//   // الحصول على لون الحرف بناء على التصنيف المختار
//   const getLetterColor = (letter: ArabicLetter): string => {
//     if (selectedCategory === 'الكل') {
//       const newCategory = getNewLetterCategory(letter);
//       return categoryColors[newCategory];
//     }
    
//     if (selectedCategory.includes('فقط') || newCategories.includes(selectedCategory as LetterCategory)) {
//       const newCategory = getNewLetterCategory(letter);
//       return categoryColors[newCategory];
//     }
    
//     return categoryColors[selectedCategory];
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-6" dir='rtl'>
//       <div className="max-w-7xl mx-auto">
//         {/* الهيدر */}
//         <header className="text-center mb-8 sm:mb-12">
//           <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3">
//             📊 التحليل الصوتي للحروف العربية
//           </h1>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             تصنيف علمي تفاعلي للحروف حسب صفاتها الصوتية من الجهر والهمس والشدة والرخاوة والبينية
//           </p>
//         </header>

//         {/* إحصائيات سريعة */}
//         <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
//           {categoryStats.map(({ category, count }) => (
//             <div key={category} className="bg-white rounded-lg p-3 shadow-sm border text-center">
//               <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${categoryColors[category as LetterCategory]}`}></div>
//               <div className="text-xs sm:text-sm font-medium text-gray-700">{category}</div>
//               <div className="text-lg font-bold text-gray-900">{count}</div>
//             </div>
//           ))}
//         </div>

//         {/* أزرار التصفية */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
//                 selectedCategory === category
//                   ? category === 'الكل' 
//                     ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg'
//                     : `${categoryColors[category]} text-white shadow-lg`
//                   : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md'
//               } text-xs sm:text-sm min-w-[100px]`}
//             >
//               {category}
//               {category !== 'الكل' && (
//                 <span className="mr-1 text-xs opacity-80">
//                   ({filteredLetters.length})
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* وصف التصنيف المختار */}
//         {selectedCategory !== 'الكل' && (
//           <div className="text-center mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/60">
//             <h3 className="font-semibold text-xl text-gray-800 mb-2">{selectedCategory}</h3>
//             <p className="text-gray-600 text-lg leading-relaxed">{categoryDescriptions[selectedCategory]}</p>
//             <div className="mt-3 text-sm text-gray-500">
//               عدد الحروف: <strong>{filteredLetters.length}</strong>
//             </div>
//           </div>
//         )}

//         {/* عرض الحروف */}
//         <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-14 gap-3 sm:gap-4 justify-center mb-12">
//           {filteredLetters.map((letter) => {
//             const category = getNewLetterCategory(letter);
//             return (
//               <div
//                 key={letter.char}
//                 className="relative group"
//                 onMouseEnter={() => setHoveredLetter(letter)}
//                 onMouseLeave={() => setHoveredLetter(null)}
//               >
//                 <div className={`
//                   w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center 
//                   text-white font-bold text-lg sm:text-xl shadow-lg transition-all 
//                   duration-300 group-hover:scale-110 group-hover:shadow-xl cursor-pointer
//                   ${getLetterColor(letter)} border-2 border-white
//                 `}>
//                   {letter.char}
//                 </div>
                
//                 {/* Tooltip عند التمرير */}
//                 {hoveredLetter?.char === letter.char && (
//                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-20 animate-in fade-in-0 zoom-in-95">
//                     <div className="bg-gray-900/95 text-white text-sm rounded-xl py-3 px-4 whitespace-nowrap backdrop-blur-sm border border-gray-700/50 shadow-2xl">
//                       <div className="font-semibold text-base mb-1">{letter.name} ({letter.char})</div>
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className="text-gray-300">الجهر/الهمس:</span>
//                         <span className="font-medium">{letter.ghahr}</span>
//                       </div>
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className="text-gray-300">القوة:</span>
//                         <span className="font-medium">{letter.strength}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <span className="text-gray-300">التصنيف:</span>
//                         <span className="font-medium">{category}</span>
//                       </div>
//                     </div>
//                     <div className="w-3 h-3 bg-gray-900/95 transform rotate-45 absolute top-full -mt-1.5 left-1/2 -translate-x-1/2 border-r border-b border-gray-700/50"></div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* مفتاح الألوان */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/60 p-6 sm:p-8 mb-8">
//           <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
//             🎨 مفتاح التصنيفات الصوتية
//           </h3>
          
//           <h4 className="font-semibold text-lg text-gray-700 mb-4">التصنيفات الجديدة (بناء على الجهر/الهمس أولاً):</h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//             {newCategories.map((category) => (
//               <div key={category} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-colors">
//                 <div className={`w-8 h-8 rounded-lg ${categoryColors[category]} flex-shrink-0 mt-1`}></div>
//                 <div className="flex-1">
//                   <div className="font-semibold text-gray-800 text-lg mb-1">{category}</div>
//                   <div className="text-gray-600 text-sm leading-relaxed">{categoryDescriptions[category]}</div>
//                   <div className="text-xs text-gray-500 mt-2">
//                     العدد: {arabicLetters.filter(l => getNewLetterCategory(l) === category).length} حرف
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <h4 className="font-semibold text-lg text-gray-700 mb-4">التصنيفات المركبة الأصلية:</h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//             {compositeCategories.map((category) => (
//               <div key={category} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-colors">
//                 <div className={`w-8 h-8 rounded-lg ${categoryColors[category]} flex-shrink-0 mt-1`}></div>
//                 <div className="flex-1">
//                   <div className="font-semibold text-gray-800 text-lg mb-1">{category}</div>
//                   <div className="text-gray-600 text-sm leading-relaxed">{categoryDescriptions[category]}</div>
//                   <div className="text-xs text-gray-500 mt-2">
//                     العدد: {arabicLetters.filter(l => getLetterCategory(l) === category).length} حرف
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <h4 className="font-semibold text-lg text-gray-700 mb-4">التصنيفات الفردية:</h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {individualCategories.map((category) => (
//               <div key={category} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-colors">
//                 <div className={`w-8 h-8 rounded-lg ${categoryColors[category]} flex-shrink-0 mt-1`}></div>
//                 <div className="flex-1">
//                   <div className="font-semibold text-gray-800 text-lg mb-1">{category}</div>
//                   <div className="text-gray-600 text-sm leading-relaxed">{categoryDescriptions[category]}</div>
//                   <div className="text-xs text-gray-500 mt-2">
//                     العدد: {category === 'الجهر فقط' 
//                       ? arabicLetters.filter(l => l.ghahr === 'جهر').length
//                       : category === 'الهمس فقط'
//                       ? arabicLetters.filter(l => l.ghahr === 'همس').length
//                       : category === 'الشدة فقط'
//                       ? arabicLetters.filter(l => l.strength === 'شدة').length
//                       : category === 'الرخاوة فقط'
//                       ? arabicLetters.filter(l => l.strength === 'رخاوة').length
//                       : arabicLetters.filter(l => l.strength === 'بينية').length
//                     } حرف
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* إحصائيات نهائية */}
//         <footer className="text-center text-gray-600 bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-white/60">
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
//             <p className="text-lg font-medium">
//               📝 عرض <span className="text-gray-800 font-bold">{filteredLetters.length}</span> من أصل <span className="text-gray-800 font-bold">{arabicLetters.length}</span> حرف
//             </p>
//             <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>
//             <p className="text-sm text-gray-500">
//               🎯 اختر تصنيفاً معيناً لرؤية الحروف المشتركة في الصفات الصوتية
//             </p>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default ArabicLettersAnalyzer;