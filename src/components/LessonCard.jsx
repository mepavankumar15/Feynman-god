import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const LessonCard = ({ topicId, lesson, completed }) => {
  return (
    <Link 
      to={`/lesson/${topicId}/${lesson.id}`}
      className="group block bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-400 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
      
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl font-bold text-slate-800 group-hover:text-brand-600 transition-colors">{lesson.title}</h4>
        {completed && <CheckCircle2 className="w-6 h-6 text-green-500" />}
      </div>
      
      <p className="text-slate-600 mb-6 line-clamp-2">{lesson.simple}</p>
      
      <div className="flex items-center text-sm font-semibold text-brand-600">
        <span>Start Lesson</span>
        <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default LessonCard;
