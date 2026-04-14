import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../data/topics.json';
import { BookOpen, Home } from 'lucide-react';

const Sidebar = ({ isOpen, setMobileOpen }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 z-50 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-6 border-b border-slate-100">
        <NavLink to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-brand-600 hover:text-brand-700 transition-colors">
          <BookOpen className="w-8 h-8" />
          <span className="text-2xl font-bold tracking-tight">PhysicsHub</span>
        </NavLink>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
        <NavLink to="/" onClick={() => setMobileOpen(false)} className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50'}`}>
          <Home className="w-5 h-5" />
          Dashboard
        </NavLink>
        
        {data.topics.map((topic) => (
          <div key={topic.id} className="space-y-3">
            <h4 className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">{topic.title}</h4>
            <ul className="space-y-1">
              {topic.lessons.map(lesson => (
                <li key={lesson.id}>
                  <NavLink 
                    to={`/lesson/${topic.id}/${lesson.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) => 
                      `block px-4 py-2.5 rounded-xl font-medium transition-colors ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50'}`
                    }
                  >
                    {lesson.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
