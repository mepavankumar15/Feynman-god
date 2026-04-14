import React, { useState } from 'react';

const KeyConcepts = ({ concepts }) => {
  const [expandedIdx, setExpandedIdx] = useState(0);

  if (!concepts || concepts.length === 0) return null;

  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2.5 bg-blue-50 rounded-lg shadow-sm flex items-center justify-center">
          <span className="material-symbols-outlined text-blue-600 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
        </div>
        <div>
          <h2 className="text-xl font-headline font-bold text-slate-900">Key Concepts</h2>
          <p className="text-xs text-slate-400">Click each concept to expand the full explanation</p>
        </div>
      </div>

      <div className="space-y-3">
        {concepts.map((concept, idx) => {
          const isOpen = expandedIdx === idx;
          return (
            <div
              key={idx}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-200 bg-blue-50/40 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}`}
            >
              <button
                onClick={() => setExpandedIdx(isOpen ? -1 : idx)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left group"
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-extrabold font-headline transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                  {idx + 1}
                </div>
                <span className={`flex-1 font-bold text-sm transition-colors ${isOpen ? 'text-blue-900' : 'text-slate-800'}`}>
                  {concept.title}
                </span>
                <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}>
                  expand_more
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-5 pb-5 pl-[4.25rem]">
                  <p className="text-sm text-slate-700 leading-relaxed">{concept.explanation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyConcepts;
