import React from 'react';

const CommonMistakes = ({ mistakes }) => {
  if (!mistakes || mistakes.length === 0) return null;

  return (
    <section>
      <div className="flex flex-col items-center mb-8">
        <div className="h-1 w-12 bg-error/20 rounded-full mb-4"></div>
        <h3 className="text-2xl font-headline font-extrabold text-slate-900">Common Pitfalls</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mistakes.map((m, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="bg-error/10 p-4 border-b border-error/10 flex items-start gap-3">
              <span className="material-symbols-outlined text-error mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>cancel</span>
              <div>
                <p className="text-[10px] font-bold text-error uppercase tracking-wider mb-1">Mistake</p>
                <p className="text-slate-800 font-medium text-sm">{m.mistake}</p>
              </div>
            </div>
            <div className="bg-success/10 p-4 flex items-start gap-3 flex-1">
              <span className="material-symbols-outlined text-success mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              <div>
                <p className="text-[10px] font-bold text-success uppercase tracking-wider mb-1">Reality</p>
                <p className="text-slate-800 font-medium text-sm">{m.reality}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommonMistakes;
