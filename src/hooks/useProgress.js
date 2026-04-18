import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import data from '../data/topics.json';

export const useProgress = () => {
  const [completedLessons, setCompletedLessons] = useState({});
  const { user } = useAuth();

  // Load progress: from Supabase if logged in, otherwise localStorage
  const loadProgress = useCallback(async () => {
    if (user) {
      const { data: row } = await supabase
        .from('user_progress')
        .select('completed_lessons')
        .eq('user_id', user.id)
        .single();

      if (row && row.completed_lessons) {
        const parsed = {};
        row.completed_lessons.forEach(key => { parsed[key] = true; });
        setCompletedLessons(parsed);
        // Also mirror to localStorage for offline speed
        localStorage.setItem('physics_completed', JSON.stringify(parsed));
      }
    } else {
      const saved = localStorage.getItem('physics_completed');
      if (saved) {
        try {
          setCompletedLessons(JSON.parse(saved));
        } catch (e) {}
      }
    }
  }, [user]);

  useEffect(() => {
    loadProgress();
    window.addEventListener('progressUpdate', loadProgress);
    return () => window.removeEventListener('progressUpdate', loadProgress);
  }, [loadProgress]);

  const completeLesson = async (topicId, lessonId) => {
    const key = `${topicId}-${lessonId}`;
    const updated = { ...completedLessons, [key]: true };
    setCompletedLessons(updated);
    localStorage.setItem('physics_completed', JSON.stringify(updated));
    window.dispatchEvent(new Event('progressUpdate'));

    // If user is authenticated, sync to Supabase
    if (user) {
      const allKeys = Object.keys(updated);
      
      // Upsert: insert or update the progress row
      await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          completed_lessons: allKeys,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id'
        });
    }
  };

  const getLessonStatus = (topicId, lessonId) => {
    if (completedLessons[`${topicId}-${lessonId}`]) return 'completed';
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
