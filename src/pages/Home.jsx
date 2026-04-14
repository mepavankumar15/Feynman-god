import React from 'react';
import data from '../data/topics.json';
import LessonCard from '../components/dashboard/LessonCard';
import StatCard from '../components/dashboard/StatCard';
import FeatureCard from '../components/dashboard/FeatureCard';
import { useProgress } from '../hooks/useProgress';

const Home = () => {
  const { getLessonStatus, completedCount } = useProgress();

  const allLessons = data.topics.map(topic =>
    topic.lessons.map(lesson => ({ ...lesson, topicId: topic.id }))
  ).flat();

  const stats = [
    { title: "Time Active", value: "12.5h", icon: "trending_up", subtitle: "14% vs last week", colorClass: "text-slate-900", highlightClass: "text-secondary font-bold" },
    { title: "Concept Score", value: "92%", subtitle: "Top 5% overall", colorClass: "text-slate-900" },
    { title: "Learning Streak", value: "8", subtitle: "Days in a row", colorClass: "text-tertiary" },
    { title: "XP Earned", value: (completedCount * 100).toLocaleString(), subtitle: `+${completedCount > 0 ? 100 : 0} today`, colorClass: "text-primary" }
  ];

  return (
    <>
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-wide">Dashboard</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-headline">
              Mastering the <span className="text-primary">Physics</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Welcome back, Buddy. You're making excellent progress in Physics. Today let's learn something new.
            </p>
          </div>
          <div className="shrink-0">
            <div className="bg-tertiary-container border border-tertiary/10 p-6 rounded-2xl max-w-xs card-shadow transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                </div>
                <span className="font-bold text-on-tertiary-container text-sm">Study Tip</span>
              </div>
              <p className="text-on-tertiary-container/80 text-sm leading-snug">Visualizing forces as vectors helps simplify complex 3D motion problems.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 font-headline">Learning Path</h2>
          <button className="text-sm font-bold text-primary hover:underline transition-all duration-300 ease-in-out active:scale-[0.98]">View All Units</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allLessons.slice(0, 3).map((lesson, index) => {
            const status = getLessonStatus(lesson.topicId, lesson.id, index, allLessons);
            return (
              <LessonCard
                key={lesson.id}
                topicId={lesson.topicId}
                lesson={lesson}
                progress={status === 'completed' ? 100 : 0}
                locked={status === 'locked'}
              />
            );
          })}

          <FeatureCard
            banner="Laboratory"
            title="Momentum & Collisions Lab"
            description="Launch virtual projectiles in a zero-gravity environment. Practice elastic collision calculations with real-time feedback."
            buttonText="Enter Simulation"
            buttonIcon="rocket_launch"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBEDZy2T7hdKGFc4Mrh2GsujwmrhGu83D6-Q7aPrXDOgsyITg1NFh2iUC9hoCylkh0zJFArAky2Q3AKC8_5aB_gUvYBITyq1x94Ms8grl5G5E8qvq2dmj0DombGyqtLHzzhA1-N7XfioZw_6G5fQ1026zCVdLFdoXPrajfilTvCD73J9BHbrGEuC3Ni8ltuFnj3AB0P72ME6Ncn6u9anFAYgOFxfvIRPp0IRYk7CaMEBMxe3Bpx7jhMcmunicOYZwuRrSqFw_reJFo"
          />
        </div>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-10">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-xl font-bold text-slate-900 font-headline">Weekly Performance</h3>
          <button className="text-sm font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-all duration-300 ease-in-out active:scale-[0.98]">
            Full Report
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
