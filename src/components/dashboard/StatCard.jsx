import React from 'react';

const StatCard = ({ title, value, icon, subtitle, colorClass, highlightClass }) => {
  return (
    <div className="space-y-1 card-interaction">
      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{title}</p>
      <p className={`text-4xl font-extrabold font-headline ${colorClass}`}>{value}</p>
      {subtitle && (
        <p className={`text-xs font-medium flex items-center gap-1 ${highlightClass || 'text-slate-500'}`}>
          {icon && <span className="material-symbols-outlined text-xs">{icon}</span>}
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default StatCard;
