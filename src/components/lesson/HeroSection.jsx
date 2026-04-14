import React from 'react';

const HeroSection = ({ unitIndex, topicTitle, lessonTitle, summary }) => {
  return (
    <>
      <nav className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">
        <span>Unit {unitIndex}</span>
        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
        <span>{topicTitle}</span>
        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
        <span className="text-primary">{lessonTitle}</span>
      </nav>

      <header className="mb-12 border-b border-slate-100 pb-12">
        <h1 className="text-4xl lg:text-5xl font-headline font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
          {topicTitle}: <span className="text-primary-dim">{lessonTitle}</span>
        </h1>
        {summary && (
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed font-body italic">
            — {summary}
          </p>
        )}
      </header>
    </>
  );
};

export default HeroSection;
