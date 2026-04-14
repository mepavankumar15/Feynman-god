import React from 'react';

const FeatureCard = ({ banner, title, description, buttonText, buttonIcon, image }) => {
  return (
    <div className="md:col-span-2 lg:col-span-3 bg-slate-900 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center relative min-h-[300px]">
      <div className="flex-1 p-10 z-10">
        <span className="inline-block px-2 py-1 rounded bg-primary text-white text-[10px] font-bold uppercase mb-4">{banner}</span>
        <h3 className="text-3xl font-bold text-white mb-4 font-headline">{title}</h3>
        <p className="text-slate-300 text-lg mb-8 max-w-lg">{description}</p>
        <button className="bg-white text-slate-900 px-8 py-3.5 rounded-lg font-bold hover:bg-slate-100 flex items-center gap-2 active:scale-95 transition-all duration-300 ease-in-out">
          {buttonText}
          <span className="material-symbols-outlined text-sm">{buttonIcon}</span>
        </button>
      </div>
      <div className="flex-1 w-full h-full min-h-[300px] relative">
        <img alt="Interactive Feature" className="absolute object-cover w-full h-full opacity-40 mix-blend-screen" src={image}/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center ring-4 ring-white/10 group cursor-pointer hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl text-white">play_arrow</span>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"></div>
    </div>
  );
};

export default FeatureCard;
