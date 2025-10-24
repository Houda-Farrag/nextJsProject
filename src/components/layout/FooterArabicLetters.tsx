import React from 'react';

interface FooterProps {
  filteredCount: number;
  totalCount: number;
}

export const FooterArabicLetters: React.FC<FooterProps> = ({ filteredCount, totalCount }) => {
  return (
    <footer className="text-center text-gray-600 bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-white/60">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        <p className="text-lg font-medium">
          📝 عرض <span className="text-gray-800 font-bold">{filteredCount}</span> من أصل <span className="text-gray-800 font-bold">{totalCount}</span> حرف
        </p>
        <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>
        <p className="text-sm text-gray-500">
          🎯 اختر تصنيفاً معيناً لرؤية الحروف المشتركة في الصفات الصوتية
        </p>
      </div>
    </footer>
  );
};