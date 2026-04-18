import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/topics.json';

const phases = [
  { name: "Phase 1: Foundations", range: [0, 9], color: "from-blue-500 to-indigo-600" },
  { name: "Phase 2: Motion in Depth", range: [10, 16], color: "from-cyan-500 to-blue-600" },
  { name: "Phase 3: Forces & Dynamics", range: [17, 24], color: "from-emerald-500 to-teal-600" },
  { name: "Phase 4: Energy & Momentum", range: [25, 30], color: "from-amber-500 to-orange-600" },
  { name: "Phase 5: Rotation & Gravity", range: [31, 35], color: "from-violet-500 to-purple-600" },
  { name: "Phase 6: Waves & Thermodynamics", range: [36, 40], color: "from-cyan-500 to-teal-600" },
  { name: "Phase 7: Electricity & Optics", range: [41, 45], color: "from-rose-500 to-fuchsia-600" },
];

const Courses = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleTopic = (id) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-headline mb-3">
          Full Curriculum
        </h1>
        <p className="text-slate-500 font-medium text-base max-w-2xl">
          {data.topics.length} units · {data.topics.reduce((a, t) => a + t.lessons.length, 0)} lessons · Organized by learning phase
        </p>
      </div>

      {/* Phase Sections */}
      {phases.map((phase, pi) => {
        const topicsInPhase = data.topics.slice(phase.range[0], phase.range[1] + 1);
        if (topicsInPhase.length === 0) return null;

        return (
          <div key={pi} className="mb-10">
            {/* Phase Header */}
            <div className={`bg-gradient-to-r ${phase.color} rounded-xl px-6 py-4 mb-4 shadow-sm`}>
              <h2 className="text-white font-extrabold text-lg tracking-tight font-headline">{phase.name}</h2>
              <p className="text-white/70 text-sm font-medium mt-0.5">
                {topicsInPhase.length} units · {topicsInPhase.reduce((a, t) => a + t.lessons.length, 0)} lessons
              </p>
            </div>

            {/* Topic Accordion Cards */}
            <div className="flex flex-col gap-2">
              {topicsInPhase.map((topic) => {
                const isOpen = expandedTopic === topic.id;
                return (
                  <div key={topic.id} className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm transition-all">
                    
                    {/* Topic Row (Clickable) */}
                    <button 
                      onClick={() => toggleTopic(topic.id)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50/50 transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 ${topic.color || 'bg-slate-500'} rounded-lg flex items-center justify-center shadow-sm`}>
                          <span className="material-symbols-outlined text-white text-xl">{topic.icon || 'science'}</span>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors leading-tight">
                            {topic.title}
                          </h3>
                          <p className="text-xs text-slate-400 font-medium mt-0.5">{topic.lessons.length} lessons · {topic.description?.substring(0, 60)}...</p>
                        </div>
                      </div>
                      <span className={`material-symbols-outlined text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>

                    {/* Expanded Lesson List */}
                    {isOpen && (
                      <div className="border-t border-slate-100 bg-slate-50/30">
                        {topic.lessons.map((lesson, li) => (
                          <Link
                            key={lesson.id}
                            to={`/lesson/${topic.id}/${lesson.id}`}
                            className="flex items-center gap-4 px-6 py-3 hover:bg-primary/5 transition-colors border-b border-slate-100 last:border-0 group"
                          >
                            <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-bold
                              ${lesson.difficulty === 'beginner' ? 'bg-emerald-100 text-emerald-700' : 
                                lesson.difficulty === 'advanced' ? 'bg-red-100 text-red-600' : 
                                'bg-blue-100 text-blue-600'}`}
                            >
                              {li + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors truncate">
                                {lesson.title}
                              </h4>
                              <p className="text-[11px] text-slate-400 truncate">{lesson.summary}</p>
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full
                              ${lesson.difficulty === 'beginner' ? 'bg-emerald-50 text-emerald-600' : 
                                lesson.difficulty === 'advanced' ? 'bg-red-50 text-red-500' : 
                                'bg-blue-50 text-blue-500'}`}
                            >
                              {lesson.difficulty}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
