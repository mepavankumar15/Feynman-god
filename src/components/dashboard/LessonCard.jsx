import React from 'react';
import { Link } from 'react-router-dom';

const difficultyConfig = {
  beginner:     { label: 'Beginner',     color: 'bg-emerald-100 text-emerald-700 border-emerald-200', icon: 'spa',            dots: 1 },
  intermediate: { label: 'Intermediate', color: 'bg-amber-100 text-amber-700 border-amber-200',       icon: 'local_fire_department', dots: 2 },
  advanced:     { label: 'Advanced',     color: 'bg-rose-100 text-rose-700 border-rose-200',           icon: 'bolt',           dots: 3 },
};

const DifficultyBadge = ({ level }) => {
  const config = difficultyConfig[level] || difficultyConfig.intermediate;
  return (
    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${config.color}`}>
      <span className="material-symbols-outlined" style={{ fontSize: '12px', fontVariationSettings: "'FILL' 1" }}>{config.icon}</span>
      <span>{config.label}</span>
      <span className="flex gap-0.5 ml-0.5">
        {[...Array(3)].map((_, i) => (
          <span key={i} className={`w-1 h-1 rounded-full ${i < config.dots ? 'bg-current' : 'bg-current/20'}`}></span>
        ))}
      </span>
    </div>
  );
};

const LessonCard = ({ topicId, lesson, progress, locked }) => {
  if (locked) {
    return (
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 opacity-60 card-interaction">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-slate-400">
            <span className="material-symbols-outlined text-2xl">fitness_center</span>
          </div>
          <span className="material-symbols-outlined text-slate-400 text-sm">lock</span>
        </div>
        <div className="mb-2">
          <DifficultyBadge level={lesson.difficulty} />
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2 font-headline">{lesson.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{lesson.simple}</p>
        </div>
        <div className="pt-4 border-t border-slate-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Locked</span>
            <span className="text-xs font-bold text-slate-400">0%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="w-0 h-full bg-slate-300"></div>
          </div>
        </div>
      </div>
    );
  }

  const isCompleted = progress === 100;

  return (
    <Link 
      to={`/lesson/${topicId}/${lesson.id}`} 
      className={`block group bg-white p-6 rounded-2xl border card-shadow card-shadow-hover relative card-interaction ${isCompleted ? 'border-slate-100' : 'border-2 border-primary'}`}
    >
      {!isCompleted && (
        <div className="absolute -top-3 right-6 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">CONTINUE</div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isCompleted ? 'bg-secondary/10' : 'bg-primary/10'}`}>
          <span className={`material-symbols-outlined text-2xl ${isCompleted ? 'text-secondary' : 'text-primary'}`}>
            {isCompleted ? 'functions' : 'shutter_speed'}
          </span>
        </div>
        {isCompleted && (
          <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
        )}
      </div>

      <div className="mb-2">
        <DifficultyBadge level={lesson.difficulty} />
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2 font-headline">{lesson.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{lesson.simple}</p>
      </div>
      
      <div className="pt-4 border-t border-slate-50">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider ${isCompleted ? 'text-secondary' : 'text-primary'}`}>
             {isCompleted ? 'Completed' : 'In Progress'}
          </span>
          <span className="text-xs font-bold text-slate-700">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
             className={`h-full rounded-full transition-all duration-500 ${isCompleted ? 'bg-secondary w-full' : 'bg-primary animate-progress-pulse'}`}
             style={!isCompleted ? {width: `${progress}%`} : {}}
          ></div>
        </div>
      </div>
    </Link>
  );
};

export default LessonCard;
