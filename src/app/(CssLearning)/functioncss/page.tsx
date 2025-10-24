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

"use client";
import React, { useState } from 'react';

// تعريف الأنواع (TypeScript Interfaces)
interface ArabicLetter {
  char: string;
  name: string;
  ghahr: 'جهر' | 'همس';
  strength: 'شدة' | 'رخاوة' | 'بينية';
  color: string;
}

type LetterCategory = 
  | 'الشدة والجهر'
  | 'الشدة والهمس'
  | 'الرخاوة والهمس'
  | 'الرخاوة والجهر'
  | 'البينية والجهر'
  | 'غير مصنف';

type FilterCategory = LetterCategory | 'الكل';

// بيانات الحروف العربية مع تصنيفاتها
const arabicLetters: ArabicLetter[] = [
  { char: 'أ', name: 'همزة', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
  { char: 'ب', name: 'باء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
  { char: 'ت', name: 'تاء', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
  { char: 'ث', name: 'ثاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
  { char: 'ج', name: 'جيم', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
  { char: 'ح', name: 'حاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
  { char: 'خ', name: 'خاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
  { char: 'د', name: 'دال', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
  { char: 'ذ', name: 'ذال', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
  { char: 'ر', name: 'راء', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
  { char: 'ز', name: 'زاي', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
  { char: 'س', name: 'سين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
  { char: 'ش', name: 'شين', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
  { char: 'ص', name: 'صاد', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
  { char: 'ض', name: 'ضاد', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
  { char: 'ط', name: 'طاء', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
  { char: 'ظ', name: 'ظاء', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
  { char: 'ع', name: 'عين', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
  { char: 'غ', name: 'غين', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
  { char: 'ف', name: 'فاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
  { char: 'ق', name: 'قاف', ghahr: 'جهر', strength: 'شدة', color: 'bg-blue-500' },
  { char: 'ك', name: 'كاف', ghahr: 'همس', strength: 'شدة', color: 'bg-red-500' },
  { char: 'ل', name: 'لام', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
  { char: 'م', name: 'ميم', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
  { char: 'ن', name: 'نون', ghahr: 'جهر', strength: 'رخاوة', color: 'bg-purple-500' },
  { char: 'هـ', name: 'هاء', ghahr: 'همس', strength: 'رخاوة', color: 'bg-green-500' },
  { char: 'و', name: 'واو', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
  { char: 'ي', name: 'ياء', ghahr: 'جهر', strength: 'بينية', color: 'bg-yellow-500' },
];

// تعريف الألوان للتصنيفات
const categoryColors: Record<LetterCategory, string> = {
  'الشدة والجهر': 'bg-blue-500 hover:bg-blue-600',
  'الشدة والهمس': 'bg-red-500 hover:bg-red-600',
  'الرخاوة والهمس': 'bg-green-500 hover:bg-green-600',
  'الرخاوة والجهر': 'bg-purple-500 hover:bg-purple-600',
  'البينية والجهر': 'bg-yellow-500 hover:bg-yellow-600',
  'غير مصنف': 'bg-gray-500 hover:bg-gray-600'
};

const categoryDescriptions: Record<LetterCategory, string> = {
  'الشدة والجهر': 'حروف قوية في المخرج والصوت (انحباس كامل للصوت ثم انطلاقه)',
  'الشدة والهمس': 'حروف قوية في المخرج وضعيفة في الصوت (انحباس مع همس)',
  'الرخاوة والهمس': 'حروف ضعيفة في المخرج والصوت (جريان الصوت مع همس)', 
  'الرخاوة والجهر': 'حروف ضعيفة في المخرج وقوية في الصوت (جريان الصوت مع جهر)',
  'البينية والجهر': 'حروف متوسطة في المخرج وقوية في الصوت (انحباس جزئي)',
  'غير مصنف': 'حروف غير مصنفة في النظام'
};

const ArabicLettersAnalyzer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('الكل');
  const [hoveredLetter, setHoveredLetter] = useState<ArabicLetter | null>(null);

  // الحصول على التصنيف المركب لكل حرف
  const getLetterCategory = (letter: ArabicLetter): LetterCategory => {
    if (letter.strength === 'شدة' && letter.ghahr === 'جهر') return 'الشدة والجهر';
    if (letter.strength === 'شدة' && letter.ghahr === 'همس') return 'الشدة والهمس';
    if (letter.strength === 'رخاوة' && letter.ghahr === 'همس') return 'الرخاوة والهمس';
    if (letter.strength === 'رخاوة' && letter.ghahr === 'جهر') return 'الرخاوة والجهر';
    if (letter.strength === 'بينية' && letter.ghahr === 'جهر') return 'البينية والجهر';
    return 'غير مصنف';
  };

  // تصفية الحروف حسب التصنيف المختار
  const filteredLetters: ArabicLetter[] = selectedCategory === 'الكل' 
    ? arabicLetters 
    : arabicLetters.filter(letter => getLetterCategory(letter) === selectedCategory);

  // الحصول على التصنيفات الفريدة
  const categories: FilterCategory[] = ['الكل', ...new Set(arabicLetters.map(letter => getLetterCategory(letter)))] as FilterCategory[];

  // إحصائيات التصنيفات
  const categoryStats = categories.filter(cat => cat !== 'الكل').map(category => ({
    category,
    count: arabicLetters.filter(letter => getLetterCategory(letter) === category).length
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-6" dir='rtl'>
      <div className="max-w-7xl mx-auto">
        {/* الهيدر */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3">
            📊 التحليل الصوتي للحروف العربية
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            تصنيف علمي تفاعلي للحروف حسب صفاتها الصوتية من الجهر والهمس والشدة والرخاوة والبينية
          </p>
        </header>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {categoryStats.map(({ category, count }) => (
            <div key={category} className="bg-white rounded-lg p-3 shadow-sm border text-center">
              <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${categoryColors[category]}`}></div>
              <div className="text-xs sm:text-sm font-medium text-gray-700">{category}</div>
              <div className="text-lg font-bold text-gray-900">{count}</div>
            </div>
          ))}
        </div>

        {/* أزرار التصفية */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? category === 'الكل' 
                    ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg'
                    : `${categoryColors[category]} text-white shadow-lg`
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
              } text-sm sm:text-base min-w-[120px]`}
            >
              {category}
              {category !== 'الكل' && (
                <span className="mr-2 text-xs opacity-80">
                  ({arabicLetters.filter(l => getLetterCategory(l) === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* وصف التصنيف المختار */}
        {selectedCategory !== 'الكل' && (
          <div className="text-center mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/60">
            <h3 className="font-semibold text-xl text-gray-800 mb-2">{selectedCategory}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{categoryDescriptions[selectedCategory]}</p>
          </div>
        )}

        {/* عرض الحروف */}
        <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-14 gap-3 sm:gap-4 justify-center mb-12">
          {filteredLetters.map((letter) => {
            const category = getLetterCategory(letter);
            return (
              <div
                key={letter.char}
                className="relative group"
                onMouseEnter={() => setHoveredLetter(letter)}
                onMouseLeave={() => setHoveredLetter(null)}
              >
                <div className={`
                  w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center 
                  text-white font-bold text-lg sm:text-xl shadow-lg transition-all 
                  duration-300 group-hover:scale-110 group-hover:shadow-xl cursor-pointer
                  ${categoryColors[category]} border-2 border-white
                `}>
                  {letter.char}
                </div>
                
                {/* Tooltip عند التمرير */}
                {hoveredLetter?.char === letter.char && (
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
                )}
              </div>
            );
          })}
        </div>

        {/* مفتاح الألوان */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/60 p-6 sm:p-8 mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
            🎨 مفتاح التصنيفات الصوتية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(categoryColors).map(([category, color]) => (
              <div key={category} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50 hover:bg-gray-100/50 transition-colors">
                <div className={`w-8 h-8 rounded-lg ${color} flex-shrink-0 mt-1`}></div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-lg mb-1">{category}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{categoryDescriptions[category as LetterCategory]}</div>
                  <div className="text-xs text-gray-500 mt-2">
                    العدد: {arabicLetters.filter(l => getLetterCategory(l) === category).length} حرف
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* إحصائيات نهائية */}
        <footer className="text-center text-gray-600 bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-white/60">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <p className="text-lg font-medium">
              📝 عرض <span className="text-gray-800 font-bold">{filteredLetters.length}</span> من أصل <span className="text-gray-800 font-bold">{arabicLetters.length}</span> حرف
            </p>
            <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>
            <p className="text-sm text-gray-500">
              🎯 اختر تصنيفاً معيناً لرؤية الحروف المشتركة في الصفات الصوتية
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ArabicLettersAnalyzer;