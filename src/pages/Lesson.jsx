import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/topics.json';
import Quiz from '../components/quiz/Quiz';
import { useProgress } from '../hooks/useProgress';

import HeroSection from '../components/lesson/HeroSection';
import SimpleExplanation from '../components/lesson/SimpleExplanation';
import IntuitionSection from '../components/lesson/IntuitionSection';
import RealLifeExample from '../components/lesson/RealLifeExample';
import InteractiveDiagram from '../components/lesson/InteractiveDiagram';
import DeeperExplanation from '../components/lesson/DeeperExplanation';
import CommonMistakes from '../components/lesson/CommonMistakes';
import KeyConcepts from '../components/lesson/KeyConcepts';

const Lesson = () => {
  const { topicId, lessonId } = useParams();
  const navigate = useNavigate();
  const { completeLesson } = useProgress();

  const topicIndex = data.topics.findIndex(t => t.id === topicId);
  const topic = data.topics[topicIndex];
  const lesson = topic?.lessons.find(l => l.id === lessonId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId, lessonId]);

  if (!topic || !lesson) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800">Lesson not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-primary font-bold hover:underline">Return Home</button>
      </div>
    );
  }

  const handleQuizComplete = (score, total) => {
    if (score === total) {
      completeLesson(topicId, lessonId);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">

      {/* ─── HERO: Summary & Breadcrumbs ─── */}
      <HeroSection 
        unitIndex={topicIndex + 1}
        topicTitle={topic.title}
        lessonTitle={lesson.title}
        summary={lesson.summary}
      />

      <div className="space-y-12">

        {/* ─── 1. SIMPLE EXPLANATION ─── */}
        <SimpleExplanation 
          content={lesson.simple} 
          contentExtraSimple={lesson.extraSimple} 
        />

        {/* ─── 2. FEYNMAN'S INTUITION ─── */}
        <IntuitionSection content={lesson.intuition} />

        {/* ─── 2.5 KEY CONCEPTS (DETAILED) ─── */}
        <KeyConcepts concepts={lesson.keyConcepts} />

        {/* ─── 3. REAL-LIFE EXAMPLES ─── */}
        <RealLifeExample examples={lesson.examples} />

        {/* ─── 4. VISUAL / INTERACTIVE DIAGRAM ─── */}
        <InteractiveDiagram 
          visualType={lesson.visualType} 
          title={lesson.title} 
        />

        {/* ─── 5. THE DEEPER PHYSICS ─── */}
        <DeeperExplanation content={lesson.deep} />

        {/* ─── 6. COMMON PITFALLS ─── */}
        <CommonMistakes mistakes={lesson.mistakes} />

        {/* ─── 7. QUICK CHECK QUIZ ─── */}
        {lesson.questions && lesson.questions.length > 0 && (
          <section className="pt-8">
            <div className="flex flex-col items-center mb-10">
              <div className="h-1 w-12 bg-primary/20 rounded-full mb-6"></div>
              <h3 className="text-2xl font-headline font-extrabold text-slate-900">Check Your Mastery</h3>
            </div>
            <Quiz questions={lesson.questions} onComplete={handleQuizComplete} />
          </section>
        )}
      </div>

      {/* ─── 8. ONE-LINE SUMMARY (footer) ─── */}
      {lesson.summary && (
        <div className="mt-12 bg-primary/5 border border-primary/10 rounded-xl p-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary/60 mb-2">Key Takeaway</p>
          <p className="text-lg font-headline font-bold text-slate-800">{lesson.summary}</p>
        </div>
      )}

      <footer className="mt-12 flex justify-between items-center py-10 border-t border-slate-200">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-500 text-sm font-bold hover:text-slate-900 transition-colors group">
          <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Dashboard
        </button>
        <div className="flex items-center gap-8">
          <button 
            onClick={() => {
              completeLesson(topicId, lessonId);
              navigate('/');
            }} 
            className="bg-primary text-white px-8 py-3.5 rounded-lg font-bold hover:bg-primary-dim transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 duration-200"
          >
              Complete Lesson
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Lesson;
