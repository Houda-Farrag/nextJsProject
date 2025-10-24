import React from 'react';

export const HeaderArabicLetters: React.FC = () => {
  return (
    <header className="text-center mb-8 sm:mb-12">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3">
        📊 التحليل الصوتي للحروف العربية
      </h1>
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        تصنيف علمي تفاعلي للحروف حسب صفاتها الصوتية من الجهر والهمس والشدة والرخاوة والبينية
      </p>
    </header>
  );
};