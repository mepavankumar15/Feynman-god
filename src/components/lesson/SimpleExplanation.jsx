import React, { useState } from 'react';

const SimpleExplanation = ({ content, contentExtraSimple }) => {
  const [showExtraSimple, setShowExtraSimple] = useState(false);

  return (
    <section>
      <div className="bg-teal-50 border border-teal-100 p-8 rounded-lg shadow-sm transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className={`p-2.5 rounded-lg shadow-sm flex items-center justify-center transition-colors ${showExtraSimple ? 'bg-amber-100' : 'bg-white'}`}>
              <span className={`material-symbols-outlined text-[20px] ${showExtraSimple ? 'text-amber-600' : 'text-teal-600'}`}>
                {showExtraSimple ? 'child_care' : 'tips_and_updates'}
              </span>
            </div>
            <h2 className="text-xl font-headline font-bold text-teal-900">
              {showExtraSimple ? "Explain like I'm 5" : "The Simple Truth"}
            </h2>
          </div>
          
          {contentExtraSimple && (
            <button 
              onClick={() => setShowExtraSimple(!showExtraSimple)}
              className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 active:scale-95 ${showExtraSimple ? 'bg-amber-200 text-amber-800 hover:bg-amber-300' : 'bg-teal-200 text-teal-800 hover:bg-teal-300'}`}
            >
              {showExtraSimple ? "Show regular explanation" : "Make it simpler!"}
            </button>
          )}
        </div>
        <p className={`text-base leading-relaxed font-medium transition-colors ${showExtraSimple ? 'text-amber-900' : 'text-teal-800'}`}>
          {showExtraSimple && contentExtraSimple ? contentExtraSimple : content}
        </p>
      </div>
    </section>
  );
};

export default SimpleExplanation;
