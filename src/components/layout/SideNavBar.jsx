import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../../data/topics.json';
import { useProgress } from '../../hooks/useProgress';

const getIcon = (id) => {
  const icons = {
    'intro': 'functions',
    'motion': 'architecture',
    'forces': 'sports_martial_arts', // or fitness_center
    'energy': 'bolt',
    'waves': 'waves'
  };
  return icons[id] || 'menu_book';
};

const SideNavBar = ({ isOpen, closeMenu }) => {
  const { completedCount, totalLessons, progressPercent } = useProgress();

  return (
    <aside className={`
      fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-white border-r border-slate-100 flex-col py-6 
      transition-transform duration-300 ease-in-out z-40 flex
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="px-6 mb-8">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Current Progress</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-700">Level 1</span>
          <span className="text-[10px] bg-tertiary-container text-on-tertiary-container px-1.5 py-0.5 rounded font-bold">Beginner</span>
        </div>
      </div>

      <nav className="flex-1 min-h-0 overflow-y-auto px-3 space-y-1 sidebar-scroll">
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ease-in-out active:scale-[0.98] ${isActive ? 'text-primary bg-primary-container' : 'text-slate-600 hover:bg-slate-50 group'}`}
        >
          <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
          <span>Overview</span>
        </NavLink>

        {data.topics.map(topic => (
          <NavLink
            key={topic.id}
            to={`/topic/${topic.id}`}
            onClick={closeMenu}
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg group transition-all duration-300 ease-in-out active:scale-[0.98] ${isActive ? 'text-primary bg-primary-container font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            {({ isActive }) => (
              <>
                <span className={`material-symbols-outlined text-[22px] transition-colors ${isActive ? 'text-primary' : 'group-hover:text-primary'}`}>{getIcon(topic.id)}</span>
                <span>{topic.title}</span>
              </>
            )}
          </NavLink>
        ))}

      </nav>

      <div className="px-4 mt-auto">
        <div className="bg-slate-50 rounded-xl p-4 mb-4">
          <p className="text-xs font-bold text-slate-500 mb-2">Total Progress</p>
          <div className="w-full h-1.5 bg-slate-200 rounded-full mb-2 overflow-hidden">
            <div className="h-full bg-secondary rounded-full transition-all duration-700" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <p className="text-[10px] text-slate-400">{completedCount}/{totalLessons} lessons completed</p>
        </div>
        <button className="w-full bg-slate-900 text-white rounded-lg py-3 text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm active:scale-95 transition-all duration-300 ease-in-out">
          Daily Challenge
        </button>
      </div>
    </aside>
  );
};

export default SideNavBar;
