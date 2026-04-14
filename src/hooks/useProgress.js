import { useState, useEffect } from 'react';
import data from '../data/topics.json';

export const useProgress = () => {
  const [completedLessons, setCompletedLessons] = useState({});

  const loadProgress = () => {
    const saved = localStorage.getItem('physics_completed');
    if (saved) {
      try {
        setCompletedLessons(JSON.parse(saved));
      } catch (e) {}
    }
  };

  useEffect(() => {
    loadProgress();
    window.addEventListener('progressUpdate', loadProgress);
    return () => window.removeEventListener('progressUpdate', loadProgress);
  }, []);

  const completeLesson = (topicId, lessonId) => {
    const saved = localStorage.getItem('physics_completed');
    const parsed = saved ? JSON.parse(saved) : {};
    parsed[`${topicId}-${lessonId}`] = true;
    localStorage.setItem('physics_completed', JSON.stringify(parsed));
    setCompletedLessons(parsed);
    window.dispatchEvent(new Event('progressUpdate'));
  };

  const getLessonStatus = (topicId, lessonId, index, flatLessonsArray) => {
    if (completedLessons[`${topicId}-${lessonId}`]) return 'completed';
    // All lessons are now unlocked by default instead of strictly sequential
    return 'active';
  };

  const totalLessons = data.topics.reduce((acc, t) => acc + t.lessons.length, 0);
  const completedCount = Object.keys(completedLessons).length;
  const progressPercent = totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

  return { 
    completedLessons, 
    completeLesson, 
    getLessonStatus,
    totalLessons,
    completedCount,
    progressPercent
  };
};
