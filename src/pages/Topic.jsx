import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/topics.json';
import LessonCard from '../components/dashboard/LessonCard';
import { useProgress } from '../hooks/useProgress';

const Topic = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { getLessonStatus } = useProgress();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId]);

  const topicIndex = data.topics.findIndex(t => t.id === topicId);
  const topic = data.topics[topicIndex];

  if (!topic) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800">Topic not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-primary font-bold hover:underline">Return Home</button>
      </div>
    );
  }

  // Pre-calculate flat array for status checking
  const allLessons = data.topics.map(t => 
    t.lessons.map(l => ({ ...l, topicId: t.id }))
  ).flat();

  return (
    <>
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wide">Unit {topicIndex + 1}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-headline">
              {topic.title}
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Explore all lessons within the {topic.title} module.
            </p>
          </div>
        </div>
      </header>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topic.lessons.map((lesson) => {
            const index = allLessons.findIndex(l => l.id === lesson.id && l.topicId === topic.id);
            const status = getLessonStatus(topic.id, lesson.id, index, allLessons);
            
            return (
              <LessonCard 
                key={lesson.id}
                topicId={topic.id}
                lesson={lesson}
                progress={status === 'completed' ? 100 : 0}
                locked={status === 'locked'}
              />
            );
          })}
        </div>

        {/* Overall Unit Progress Bar */}
        {(() => {
          const completed = topic.lessons.filter(l => getLessonStatus(topic.id, l.id, 0, allLessons) === 'completed').length;
          const total = topic.lessons.length;
          const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
          return (
            <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>bar_chart</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-headline">Unit Progress</h4>
                    <p className="text-xs text-slate-500">{completed} of {total} lessons completed</p>
                  </div>
                </div>
                <span className={`text-2xl font-extrabold font-headline ${pct === 100 ? 'text-secondary' : 'text-primary'}`}>{pct}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ease-out ${pct === 100 ? 'bg-gradient-to-r from-secondary to-emerald-400' : 'bg-gradient-to-r from-primary to-blue-400'}`}
                  style={{ width: `${pct}%` }}
                ></div>
              </div>
              {pct === 100 && (
                <div className="mt-3 flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>emoji_events</span>
                  <span className="text-xs font-bold">Unit Mastered! Great work!</span>
                </div>
              )}
            </div>
          );
        })()}
      </section>
    </>
  );
};

export default Topic;
