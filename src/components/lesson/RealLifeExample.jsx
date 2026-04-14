import React from 'react';

const RealLifeExample = ({ examples }) => {
  if (!examples || examples.length === 0) return null;

  return (
    <section>
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-100 rounded-md mb-6">
        <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>sports_basketball</span>
        <span className="text-[10px] font-extrabold font-label tracking-widest uppercase">Real-World Examples</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {examples.map((ex, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-headline font-extrabold text-sm">
              {idx + 1}
            </div>
            <p className="text-slate-700 leading-relaxed text-sm font-medium">{ex}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealLifeExample;
