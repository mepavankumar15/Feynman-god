import React from 'react';

const IntuitionSection = ({ content }) => {
  if (!content) return null;
  
  return (
    <section>
      <div className="bg-purple-50 border border-purple-100 p-8 rounded-lg shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2.5 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-purple-600 text-[20px]">psychology</span>
          </div>
          <h2 className="text-xl font-headline font-bold text-purple-900">Feynman's Intuition</h2>
        </div>
        <p className="text-base leading-relaxed text-purple-800 font-medium italic">
          "{content}"
        </p>
      </div>
    </section>
  );
};

export default IntuitionSection;
