import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import data from '../../data/topics.json';

const TopNavBar = ({ toggleMobileMenu }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search Logic
  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = [];

    // Traverse all topics and lessons
    data.topics.forEach(topic => {
      topic.lessons.forEach(lesson => {
        if (lesson.title.toLowerCase().includes(query) || lesson.summary.toLowerCase().includes(query)) {
          results.push({
            topicId: topic.id,
            topicTitle: topic.title,
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            summary: lesson.summary
          });
        }
      });
    });

    // Limit to top 8 to prevent infinite scrolling dropdown
    setSearchResults(results.slice(0, 8));
  }, [searchQuery]);

  const handleLessonSelect = (topicId, lessonId) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/topic/${topicId}/lesson/${lessonId}`);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 px-4 sm:px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4 sm:gap-10">
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">science</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 font-headline hidden sm:block">PhysicsGod</span>
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          <NavLink 
            to="/" 
            className={({isActive}) => `px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out active:scale-[0.98] ${isActive ? 'text-primary bg-primary-container' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/courses" 
            className={({isActive}) => `px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out active:scale-[0.98] ${isActive ? 'text-primary bg-primary-container' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            Courses
          </NavLink>
          <NavLink 
            to="/sandbox" 
            className={({isActive}) => `px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out active:scale-[0.98] ${isActive ? 'text-primary bg-primary-container' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            Experiments
          </NavLink>
        </div>
      </div>
      
      <div className="flex items-center gap-3 relative" ref={searchRef}>
        
        {/* Search Input (conditionally expanded) */}
        <div className={`transition-all duration-300 origin-right ${isSearchOpen ? 'w-64 sm:w-80 opacity-100 scale-100' : 'w-0 opacity-0 scale-95 overflow-hidden'}`}>
           <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 flex items-center justify-center text-slate-400 text-sm">search</span>
              <input 
                type="text" 
                placeholder="Search 260 lessons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus={isSearchOpen}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-full focus:ring-2 focus:ring-primary/20 focus:border-primary block pl-10 p-2.5 transition-all outline-none placeholder:text-slate-400"
              />
              <button onClick={() => setIsSearchOpen(false)} className="absolute right-3 text-slate-400 hover:text-slate-600 flex items-center justify-center">
                 <span className="material-symbols-outlined text-sm">close</span>
              </button>
           </div>
           
           {/* Dropdown Results */}
           {isSearchOpen && searchQuery.trim().length > 0 && (
             <div className="absolute top-12 right-0 w-full sm:w-96 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden z-50 flex flex-col max-h-[400px]">
                <div className="p-3 bg-slate-50/50 border-b border-slate-100">
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Search Results</p>
                </div>
                <div className="overflow-y-auto">
                    {searchResults.length > 0 ? searchResults.map((res, i) => (
                      <button 
                         key={i} 
                         onClick={() => handleLessonSelect(res.topicId, res.lessonId)}
                         className="w-full text-left px-5 py-3 hover:bg-primary/5 transition-colors border-b border-slate-50 last:border-0 group"
                      >
                         <h5 className="text-sm font-bold text-slate-800 group-hover:text-primary leading-tight">{res.lessonTitle}</h5>
                         <p className="text-[11px] font-semibold text-slate-400 mt-0.5">{res.topicTitle}</p>
                      </button>
                    )) : (
                      <div className="p-8 text-center text-slate-500 text-sm">
                         No physics topics matched "{searchQuery}".
                      </div>
                    )}
                </div>
             </div>
           )}
        </div>

        {/* Search Button (Hidden when input is open) */}
        {!isSearchOpen && (
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all duration-300 ease-in-out active:scale-[0.98]"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
        )}

        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg relative transition-all duration-300 ease-in-out active:scale-[0.98]">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <div className="h-9 w-9 rounded-full ring-2 ring-slate-100 overflow-hidden ml-2 cursor-pointer">
          <img alt="Student avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1mUjW4-QMPBOBpeOgkJFpMWxDpZvoSJZg16a38TTEyuvIycdbvNlThbAGdigKyCFb3iNsVoywwe7af45lTd_nAYsPIoHvc1EK4aSrnjW3LOrryoAHncmNoY6jTa5bw2lTfkof7CMYqdqTrL6ZPT8Y4ZO7r8ewIsKUgrk_hmKRL0Xu6DffpoxHbvmqvzEuWecqkapFP7BLqsnH1NIG733MiURtjQlQrFXS6-3sLi7hHfJQ7G2Eoqi1BqYPmp5_lLmNWQx4_ApQ1j8"/>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
