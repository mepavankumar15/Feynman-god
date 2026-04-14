import React from 'react';

const DeeperExplanation = ({ content }) => {
  if (!content) return null;

  return (
    <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm mt-8">
      <div className="flex flex-col items-center mb-6">
        <div className="h-1 w-12 bg-slate-300 rounded-full mb-4"></div>
        <h3 className="text-xl font-headline font-extrabold text-slate-800 uppercase tracking-widest text-center">The Deeper Physics</h3>
      </div>
      <div className="max-w-3xl mx-auto">
        <p className="text-slate-700 leading-relaxed font-medium text-lg text-center">
          {content}
        </p>
      </div>
    </section>
  );
};

export default DeeperExplanation;
