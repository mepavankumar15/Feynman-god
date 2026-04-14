import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNavBar = ({ toggleMobileMenu }) => {
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
          <span className="text-xl font-extrabold tracking-tight text-slate-900 font-headline hidden sm:block">PhysicsFlow</span>
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          <NavLink 
            to="/" 
            className={({isActive}) => `px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out active:scale-[0.98] ${isActive ? 'text-primary bg-primary-container' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            Dashboard
          </NavLink>
          <a className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-md transition-all duration-300 ease-in-out active:scale-[0.98]" href="#">Courses</a>
          <a className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-md transition-all duration-300 ease-in-out active:scale-[0.98]" href="#">Experiments</a>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all duration-300 ease-in-out active:scale-[0.98]">
          <span className="material-symbols-outlined">search</span>
        </button>
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
