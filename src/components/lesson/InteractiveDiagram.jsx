import React from 'react';
import { Illustration } from './SvgIllustrations';

const InteractiveDiagram = ({ visualType, title }) => {
  return (
    <section className="py-12 px-8 bg-slate-50 border border-slate-100 rounded-lg text-center">
      <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-8">Interactive Vector Laboratory</h4>
      <div className="w-full h-72 border border-slate-200 bg-white rounded-xl flex items-center justify-center flex-col relative overflow-hidden shadow-sm">
         <Illustration type={visualType} />
         <div className="absolute bottom-4 left-0 w-full text-center">
             <p className="font-semibold text-sm italic text-slate-400">Visual Demonstration of {title}</p>
         </div>
      </div>
    </section>
  );
};

export default InteractiveDiagram;
