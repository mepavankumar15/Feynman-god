import React from 'react';
import TopNavBar from './TopNavBar';
import SideNavBar from './SideNavBar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      <TopNavBar />
      <div className="flex pt-16">
        <SideNavBar />
        <main className="flex-1 lg:ml-64 px-6 py-10 lg:px-12 max-w-6xl mx-auto transition-all">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
