import React from 'react';

export const Illustration = ({ type, val1 = 50, val2 = 50 }) => {
  switch (type) {
    case 'units':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <line x1="20" y1="50" x2="180" y2="50" stroke="#22c55e" strokeWidth="4" />
          <path d="M 20 40 L 20 60 M 60 45 L 60 55 M 100 40 L 100 60 M 140 45 L 140 55 M 180 40 L 180 60" stroke="#22c55e" strokeWidth="2" />
          <text x="20" y="80" fill="#16a34a" fontSize="14" textAnchor="middle">0m</text>
          <text x="100" y="80" fill="#16a34a" fontSize="14" textAnchor="middle">1m</text>
          <text x="180" y="80" fill="#16a34a" fontSize="14" textAnchor="middle">2m</text>
        </svg>
      );
    case 'physics':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <circle cx="100" cy="50" r="35" fill="none" stroke="#6366f1" strokeWidth="3" />
          <ellipse cx="100" cy="50" rx="35" ry="12" fill="none" stroke="#818cf8" strokeWidth="2" transform="rotate(60 100 50)" />
          <ellipse cx="100" cy="50" rx="35" ry="12" fill="none" stroke="#818cf8" strokeWidth="2" transform="rotate(-60 100 50)" />
          <circle cx="100" cy="50" r="6" fill="#6366f1">
            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      );
    case 'vector':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <line x1="40" y1="80" x2="160" y2="20" stroke="#8b5cf6" strokeWidth="4" />
          <polygon points="160,20 145,25 155,35" fill="#8b5cf6" />
          <text x="100" y="40" fill="#7c3aed" fontSize="14" fontWeight="bold">Magnitude: 5</text>
          <text x="120" y="80" fill="#7c3aed" fontSize="14" fontStyle="italic">Direction: NE</text>
        </svg>
      );
    case 'motion':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="0" y="80" width="200" height="4" fill="#cbd5e1" />
          <g>
            <rect x="20" y="50" width="40" height="20" rx="4" fill="#3b82f6" />
            <circle cx="30" cy="75" r="5" fill="#475569" />
            <circle cx="50" cy="75" r="5" fill="#475569" />
            <animateTransform attributeName="transform" type="translate" values="0,0; 130,0; 0,0" dur="4s" repeatCount="indefinite" />
          </g>
        </svg>
      );
    case 'displacement':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <path d="M 30 70 Q 60 20, 100 50 T 170 30" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6,4" />
          <line x1="30" y1="70" x2="170" y2="30" stroke="#3b82f6" strokeWidth="4" />
          <polygon points="170,30 158,28 162,40" fill="#3b82f6" />
          <circle cx="30" cy="70" r="5" fill="#22c55e" />
          <circle cx="170" cy="30" r="5" fill="#ef4444" />
          <text x="30" y="92" fill="#22c55e" fontSize="11" textAnchor="middle">Start</text>
          <text x="170" y="22" fill="#ef4444" fontSize="11" textAnchor="middle">End</text>
          <text x="100" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle">--- Distance (curved path)</text>
        </svg>
      );
    case 'speed':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <circle cx="100" cy="55" r="40" fill="none" stroke="#e2e8f0" strokeWidth="6" />
          <circle cx="100" cy="55" r="40" fill="none" stroke="#3b82f6" strokeWidth="6" strokeDasharray="125.6 125.6" strokeDashoffset="40" strokeLinecap="round" />
          <g>
            <line x1="100" y1="55" x2="100" y2="25" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
            <animateTransform attributeName="transform" type="rotate" from="0 100 55" to="360 100 55" dur="3s" repeatCount="indefinite" />
          </g>
          <circle cx="100" cy="55" r="4" fill="#1e293b" />
          <text x="100" y="12" fill="#3b82f6" fontSize="11" fontWeight="bold" textAnchor="middle">km/h</text>
        </svg>
      );
    case 'acceleration':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="0" y="82" width="200" height="3" fill="#cbd5e1" />
          <line x1="20" y1="70" x2="20" y2="90" stroke="#94a3b8" strokeWidth="1" />
          <line x1="60" y1="70" x2="60" y2="90" stroke="#94a3b8" strokeWidth="1" />
          <line x1="120" y1="70" x2="120" y2="90" stroke="#94a3b8" strokeWidth="1" />
          <line x1="180" y1="70" x2="180" y2="90" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="20" cy="60" r="8" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="60" cy="55" r="8" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="120" cy="48" r="8" fill="#60a5fa" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="180" cy="38" r="8" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
          <text x="20" y="97" fill="#64748b" fontSize="9" textAnchor="middle">t=0</text>
          <text x="60" y="97" fill="#64748b" fontSize="9" textAnchor="middle">t=1</text>
          <text x="120" y="97" fill="#64748b" fontSize="9" textAnchor="middle">t=2</text>
          <text x="180" y="97" fill="#64748b" fontSize="9" textAnchor="middle">t=3</text>
        </svg>
      );
    case 'graphs':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <line x1="30" y1="85" x2="190" y2="85" stroke="#475569" strokeWidth="2" />
          <line x1="30" y1="85" x2="30" y2="10" stroke="#475569" strokeWidth="2" />
          <text x="110" y="98" fill="#64748b" fontSize="10" textAnchor="middle">Time</text>
          <text x="12" y="50" fill="#64748b" fontSize="10" textAnchor="middle" transform="rotate(-90 12 50)">Distance</text>
          <path d="M 30 80 L 80 60 L 130 30 L 180 15" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
          <circle cx="30" cy="80" r="3" fill="#3b82f6" />
          <circle cx="80" cy="60" r="3" fill="#3b82f6" />
          <circle cx="130" cy="30" r="3" fill="#3b82f6" />
          <circle cx="180" cy="15" r="3" fill="#3b82f6" />
        </svg>
      );
    case 'freefall':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="85" y="5" width="30" height="5" fill="#94a3b8" />
          <g>
            <circle cx="100" cy="30" r="10" fill="#f59e0b" />
            <line x1="100" y1="42" x2="100" y2="55" stroke="#ef4444" strokeWidth="3" />
            <polygon points="95,55 105,55 100,62" fill="#ef4444" />
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,30; 0,0" dur="2s" repeatCount="indefinite" />
          </g>
          <rect x="60" y="90" width="80" height="8" rx="2" fill="#78716c" />
        </svg>
      );
    case 'force':
      const boxSpeed = 4.5 - (val1 / 100) * 4;
      const roughness = 20 - (val2 / 100) * 15;
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="0" y="70" width="200" height="2" fill="#cbd5e1" strokeDasharray={`${roughness} ${roughness}`} style={{ transition: 'stroke-dasharray 0.5s' }} />
          <g>
            <rect x="50" y="30" width="40" height="40" fill="#3b82f6" rx="4" />
            <path d="M 10 50 L 40 50 M 30 40 L 40 50 L 30 60" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <animateTransform attributeName="transform" type="translate" values="0,0; 50,0; 0,0" dur={`${boxSpeed}s`} repeatCount="indefinite" />
          </g>
          <text x="70" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">F</text>
        </svg>
      );
    case 'friction':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="0" y="75" width="200" height="25" fill="#d6d3d1" rx="2" />
          <path d="M 10 75 L 15 72 L 20 75 L 25 72 L 30 75 L 35 72 L 40 75 L 45 72 L 50 75 L 55 72 L 60 75 L 65 72 L 70 75 L 75 72 L 80 75 L 85 72 L 90 75 L 95 72 L 100 75 L 105 72 L 110 75 L 115 72 L 120 75 L 125 72 L 130 75 L 135 72 L 140 75 L 145 72 L 150 75 L 155 72 L 160 75 L 165 72 L 170 75 L 175 72 L 180 75 L 185 72 L 190 75" fill="none" stroke="#a8a29e" strokeWidth="1" />
          <rect x="70" y="45" width="50" height="28" rx="3" fill="#3b82f6" />
          <line x1="70" y1="60" x2="40" y2="60" stroke="#ef4444" strokeWidth="4" />
          <polygon points="40,55 28,60 40,65" fill="#ef4444" />
          <text x="45" y="42" fill="#ef4444" fontSize="10" fontWeight="bold">Friction</text>
          <line x1="120" y1="60" x2="155" y2="60" stroke="#22c55e" strokeWidth="4" />
          <polygon points="155,55 168,60 155,65" fill="#22c55e" />
          <text x="130" y="42" fill="#22c55e" fontSize="10" fontWeight="bold">Push</text>
        </svg>
      );
    case 'energy':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <circle cx="100" cy="50" r="20" fill="#fbbf24">
            <animate attributeName="r" values="20; 30; 20" dur="2s" repeatCount="indefinite" />
          </circle>
          <path d="M100 0 V15 M100 85 V100 M50 50 H65 M135 50 H150 M65 15 L75 25 M125 75 L135 85 M65 85 L75 75 M125 25 L135 15" stroke="#fbbf24" strokeWidth="4" />
        </svg>
      );
    case 'pendulum':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="60" y="5" width="80" height="5" fill="#475569" />
          <g>
            <line x1="100" y1="10" x2="100" y2="70" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="100" cy="75" r="10" fill="#3b82f6" />
            <animateTransform attributeName="transform" type="rotate" from="-30 100 10" to="30 100 10" dur="1.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" keyTimes="0;1" />
          </g>
          <text x="30" y="75" fill="#22c55e" fontSize="10">PE max</text>
          <text x="90" y="98" fill="#ef4444" fontSize="10">KE max</text>
          <text x="155" y="75" fill="#22c55e" fontSize="10">PE max</text>
        </svg>
      );
    case 'momentum':
      const r1 = 8 + (val1 / 100) * 12;
      const r2 = 8 + (val2 / 100) * 12;
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="0" y="75" width="200" height="4" fill="#cbd5e1" />
          <g>
            <circle cx="50" cy={75-r1} r={r1} fill="#3b82f6" />
            <text x="50" y={75-r1+3} fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">{val1}kg</text>
            <animateTransform attributeName="transform" type="translate" values="0,0; 30,0; 30,0;" dur="3s" repeatCount="indefinite" />
          </g>
          <g>
            <circle cx="110" cy={75-r2} r={r2} fill="#ef4444" />
            <text x="110" y={75-r2+3} fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">{val2}kg</text>
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,0; 40,0;" dur="3s" repeatCount="indefinite" />
          </g>
        </svg>
      );
    case 'gravity':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <circle cx="100" cy="50" r="30" fill="#a7f3d0" stroke="#059669" strokeWidth="2" />
          <text x="100" y="55" fill="#065f46" fontSize="12" fontWeight="bold" textAnchor="middle">Earth</text>
          <g>
            <circle cx="100" cy="5" r="5" fill="#f59e0b" />
            <line x1="100" y1="10" x2="100" y2="18" stroke="#ef4444" strokeWidth="2" />
            <polygon points="96,18 104,18 100,22" fill="#ef4444" />
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,0; 0,0" dur="2s" repeatCount="indefinite" />
          </g>
          <text x="115" y="16" fill="#ef4444" fontSize="9">g = 9.8 m/s²</text>
        </svg>
      );
    case 'density':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="20" y="20" width="50" height="50" rx="4" fill="#94a3b8" />
          <text x="45" y="50" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">Lead</text>
          <text x="45" y="82" fill="#64748b" fontSize="9" textAnchor="middle">Dense</text>
          <rect x="130" y="20" width="50" height="50" rx="4" fill="#fde68a" />
          <text x="155" y="50" fill="#92400e" fontSize="11" fontWeight="bold" textAnchor="middle">Wood</text>
          <text x="155" y="82" fill="#64748b" fontSize="9" textAnchor="middle">Light</text>
          <text x="100" y="55" fill="#64748b" fontSize="22" textAnchor="middle">vs</text>
        </svg>
      );
    case 'pressure':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="30" y="60" width="60" height="30" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <line x1="60" y1="30" x2="60" y2="58" stroke="#ef4444" strokeWidth="3" />
          <polygon points="55,58 65,58 60,65" fill="#ef4444" />
          <text x="60" y="25" fill="#ef4444" fontSize="10" textAnchor="middle">Force</text>
          <line x1="30" y1="95" x2="90" y2="95" stroke="#3b82f6" strokeWidth="2" />
          <text x="60" y="100" fill="#3b82f6" fontSize="8" textAnchor="middle" dy="4">Large Area = Low Pressure</text>
          <rect x="140" y="60" width="20" height="30" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <line x1="150" y1="30" x2="150" y2="58" stroke="#ef4444" strokeWidth="3" />
          <polygon points="145,58 155,58 150,65" fill="#ef4444" />
          <text x="150" y="25" fill="#ef4444" fontSize="10" textAnchor="middle">Force</text>
          <line x1="140" y1="95" x2="160" y2="95" stroke="#ef4444" strokeWidth="2" />
          <text x="150" y="100" fill="#ef4444" fontSize="8" textAnchor="middle" dy="4">Small Area = High Pressure</text>
        </svg>
      );
    case 'buoyancy':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="20" y="35" width="160" height="60" rx="4" fill="#bfdbfe" opacity="0.5" />
          <path d="M 20 35 Q 45 30, 60 35 T 100 35 T 140 35 T 180 35" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <g>
            <rect x="55" y="25" width="30" height="30" rx="3" fill="#f59e0b" />
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,3; 0,0" dur="2s" repeatCount="indefinite" />
          </g>
          <line x1="70" y1="60" x2="70" y2="72" stroke="#ef4444" strokeWidth="2" />
          <polygon points="66,60 74,60 70,55" fill="#22c55e" />
          <text x="80" y="58" fill="#22c55e" fontSize="9">Buoyancy ↑</text>
          <polygon points="66,72 74,72 70,77" fill="#ef4444" />
          <text x="80" y="76" fill="#ef4444" fontSize="9">Weight ↓</text>
        </svg>
      );
    case 'waves':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <path d="M 10 50 Q 30 10, 50 50 T 90 50 T 130 50 T 170 50 T 210 50" fill="none" stroke="#0ea5e9" strokeWidth="6">
            <animateTransform attributeName="transform" type="translate" values="-20,0; 20,0; -20,0" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>
      );
    case 'sound':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <polygon points="20,35 20,65 40,65 60,80 60,20" fill="#475569" />
          <g opacity="0.8">
            <path d="M 75 30 Q 90 50, 75 70" fill="none" stroke="#3b82f6" strokeWidth="3">
              <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M 90 20 Q 110 50, 90 80" fill="none" stroke="#3b82f6" strokeWidth="3">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M 105 15 Q 130 50, 105 85" fill="none" stroke="#3b82f6" strokeWidth="3">
              <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      );
    case 'heat':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="60" y="50" width="80" height="40" rx="4" fill="#fecaca" />
          <rect x="60" y="50" width="80" height="40" rx="4" fill="none" stroke="#ef4444" strokeWidth="2" />
          <g>
            <path d="M 80 45 Q 78 35, 82 30 Q 78 25, 82 20" fill="none" stroke="#ef4444" strokeWidth="2">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
            </path>
            <path d="M 100 45 Q 98 35, 102 30 Q 98 25, 102 18" fill="none" stroke="#f59e0b" strokeWidth="2">
              <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
            </path>
            <path d="M 120 45 Q 118 35, 122 30 Q 118 25, 122 20" fill="none" stroke="#ef4444" strokeWidth="2">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      );
    case 'light':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <line x1="20" y1="20" x2="100" y2="60" stroke="#f59e0b" strokeWidth="3" />
          <line x1="100" y1="60" x2="180" y2="20" stroke="#f59e0b" strokeWidth="3" />
          <rect x="60" y="60" width="80" height="5" fill="#94a3b8" />
          <polygon points="97,60 103,60 100,55" fill="#f59e0b" />
          <text x="50" y="30" fill="#f59e0b" fontSize="10">Incoming</text>
          <text x="140" y="30" fill="#f59e0b" fontSize="10">Reflected</text>
          <line x1="100" y1="35" x2="100" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,3" />
          <text x="100" y="30" fill="#94a3b8" fontSize="8" textAnchor="middle">Normal</text>
        </svg>
      );
    case 'refraction':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="0" y="50" width="200" height="50" fill="#bfdbfe" opacity="0.4" />
          <line x1="30" y1="10" x2="100" y2="50" stroke="#f59e0b" strokeWidth="3" />
          <line x1="100" y1="50" x2="150" y2="90" stroke="#f59e0b" strokeWidth="3" />
          <line x1="100" y1="20" x2="100" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,3" />
          <text x="10" y="35" fill="#475569" fontSize="10">Air</text>
          <text x="10" y="70" fill="#3b82f6" fontSize="10">Water</text>
        </svg>
      );
    case 'electric':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <circle cx="60" cy="50" r="25" fill="#fecaca" />
          <text x="60" y="55" fill="#dc2626" fontSize="24" textAnchor="middle" fontWeight="bold">+</text>
          <circle cx="140" cy="50" r="25" fill="#bfdbfe" />
          <text x="140" y="55" fill="#2563eb" fontSize="24" textAnchor="middle" fontWeight="bold">-</text>
          <g stroke="#94a3b8" strokeDasharray="5,5" strokeWidth="2">
            <line x1="85" y1="50" x2="115" y2="50" />
            <polygon points="110,45 115,50 110,55" fill="#94a3b8" stroke="none" />
          </g>
        </svg>
      );
    case 'circuit':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="30" y="20" width="140" height="60" rx="10" fill="none" stroke="#475569" strokeWidth="3" />
          <rect x="85" y="10" width="30" height="20" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" rx="2" />
          <text x="100" y="24" fill="#92400e" fontSize="8" fontWeight="bold" textAnchor="middle">BAT</text>
          <circle cx="100" cy="80" r="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2">
            <animate attributeName="fill" values="#fef3c7;#fbbf24;#fef3c7" dur="1s" repeatCount="indefinite" />
          </circle>
          <text x="100" y="84" fill="#92400e" fontSize="10" textAnchor="middle">💡</text>
          <g fill="#3b82f6">
            <circle cx="55" cy="20" r="3"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" /></circle>
            <circle cx="145" cy="20" r="3"><animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" /></circle>
          </g>
        </svg>
      );
    case 'magnet':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="40" y="30" width="60" height="40" rx="4" fill="#ef4444" />
          <text x="70" y="55" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">N</text>
          <rect x="100" y="30" width="60" height="40" rx="4" fill="#3b82f6" />
          <text x="130" y="55" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">S</text>
          <g stroke="#94a3b8" strokeWidth="1" fill="none" opacity="0.6">
            <path d="M 160 50 Q 180 50, 180 30 Q 180 10, 100 10 Q 20 10, 20 30 Q 20 50, 40 50" />
            <path d="M 160 50 Q 175 50, 175 35 Q 175 15, 100 15 Q 25 15, 25 35 Q 25 50, 40 50" />
            <path d="M 160 50 Q 180 50, 180 70 Q 180 90, 100 90 Q 20 90, 20 70 Q 20 50, 40 50" />
          </g>
        </svg>
      );
    case 'states':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <g>
            <rect x="10" y="50" width="50" height="40" rx="2" fill="#94a3b8" />
            <text x="35" y="45" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle">Solid</text>
          </g>
          <g>
            <ellipse cx="105" cy="75" rx="25" ry="15" fill="#93c5fd" />
            <path d="M 80 70 Q 90 60, 105 65 T 130 70" fill="none" stroke="#60a5fa" strokeWidth="2" />
            <text x="105" y="50" fill="#3b82f6" fontSize="10" fontWeight="bold" textAnchor="middle">Liquid</text>
          </g>
          <g>
            <circle cx="170" cy="60" r="6" fill="#c4b5fd" opacity="0.6">
              <animate attributeName="cy" values="60;50;65;55;60" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="180" cy="70" r="5" fill="#c4b5fd" opacity="0.5">
              <animate attributeName="cy" values="70;62;72;58;70" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="160" cy="72" r="4" fill="#c4b5fd" opacity="0.4">
              <animate attributeName="cy" values="72;60;68;55;72" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="170" y="45" fill="#7c3aed" fontSize="10" fontWeight="bold" textAnchor="middle">Gas</text>
          </g>
        </svg>
      );
    // === ALIASES AND NEW ILLUSTRATIONS ===
    case 'ruler':
    case 'units':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <line x1="20" y1="50" x2="180" y2="50" stroke="#22c55e" strokeWidth="4" />
          <path d="M 20 40 L 20 60 M 60 45 L 60 55 M 100 40 L 100 60 M 140 45 L 140 55 M 180 40 L 180 60" stroke="#22c55e" strokeWidth="2" />
          <text x="20" y="80" fill="#16a34a" fontSize="14" textAnchor="middle">0m</text>
          <text x="100" y="80" fill="#16a34a" fontSize="14" textAnchor="middle">1m</text>
          <text x="180" y="80" fill="#16a34a" fontSize="14" textAnchor="middle">2m</text>
        </svg>
      );
    case 'atom-model':
    case 'physics':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <circle cx="100" cy="50" r="35" fill="none" stroke="#6366f1" strokeWidth="3" />
          <ellipse cx="100" cy="50" rx="35" ry="12" fill="none" stroke="#818cf8" strokeWidth="2" transform="rotate(60 100 50)" />
          <ellipse cx="100" cy="50" rx="35" ry="12" fill="none" stroke="#818cf8" strokeWidth="2" transform="rotate(-60 100 50)" />
          <circle cx="100" cy="50" r="6" fill="#6366f1">
            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      );
    case 'displacement-arrow':
    case 'displacement':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <path d="M 30 70 Q 60 20, 100 50 T 170 30" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6,4" />
          <line x1="30" y1="70" x2="170" y2="30" stroke="#3b82f6" strokeWidth="4" />
          <polygon points="170,30 158,28 162,40" fill="#3b82f6" />
          <circle cx="30" cy="70" r="5" fill="#22c55e" />
          <circle cx="170" cy="30" r="5" fill="#ef4444" />
          <text x="30" y="92" fill="#22c55e" fontSize="11" textAnchor="middle">Start</text>
          <text x="170" y="22" fill="#ef4444" fontSize="11" textAnchor="middle">End</text>
          <text x="100" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle">--- Distance (curved path)</text>
        </svg>
      );
    case 'speedometer':
    case 'speed':
      const speedRotDur = 4.5 - (val2 / 100) * 3;
      const speedArcDash = (val1 / 100) * 125.6;
      const speedAngle = (val1 / 100) * 270;
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <circle cx="100" cy="55" r="40" fill="none" stroke="#e2e8f0" strokeWidth="6" />
          <circle cx="100" cy="55" r="40" fill="none" stroke="#3b82f6" strokeWidth="6" strokeDasharray="125.6 125.6" strokeDashoffset={125.6 - speedArcDash} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
          <g>
            <line x1="100" y1="55" x2="100" y2="25" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
            <animateTransform attributeName="transform" type="rotate" from="0 100 55" to={`${speedAngle} 100 55`} dur={`${speedRotDur}s`} repeatCount="indefinite" />
          </g>
          <circle cx="100" cy="55" r="4" fill="#1e293b" />
          <text x="100" y="12" fill="#3b82f6" fontSize="11" fontWeight="bold" textAnchor="middle">km/h</text>
        </svg>
      );
    case 'motion-graph':
    case 'graphs':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <line x1="30" y1="85" x2="190" y2="85" stroke="#475569" strokeWidth="2" />
          <line x1="30" y1="85" x2="30" y2="10" stroke="#475569" strokeWidth="2" />
          <text x="110" y="98" fill="#64748b" fontSize="10" textAnchor="middle">Time</text>
          <text x="12" y="50" fill="#64748b" fontSize="10" textAnchor="middle" transform="rotate(-90 12 50)">Distance</text>
          <path d="M 30 80 L 80 60 L 130 30 L 180 15" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
          <circle cx="30" cy="80" r="3" fill="#3b82f6" />
          <circle cx="80" cy="60" r="3" fill="#3b82f6" />
          <circle cx="130" cy="30" r="3" fill="#3b82f6" />
          <circle cx="180" cy="15" r="3" fill="#3b82f6" />
        </svg>
      );
    case 'circuit-flow':
    case 'circuit':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="30" y="20" width="140" height="60" rx="10" fill="none" stroke="#475569" strokeWidth="3" />
          <rect x="85" y="10" width="30" height="20" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" rx="2" />
          <text x="100" y="24" fill="#92400e" fontSize="8" fontWeight="bold" textAnchor="middle">BAT</text>
          <circle cx="100" cy="80" r="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2">
            <animate attributeName="fill" values="#fef3c7;#fbbf24;#fef3c7" dur="1s" repeatCount="indefinite" />
          </circle>
          <text x="100" y="84" fill="#92400e" fontSize="10" textAnchor="middle">💡</text>
          <g fill="#3b82f6">
            <circle cx="55" cy="20" r="3"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" /></circle>
            <circle cx="145" cy="20" r="3"><animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" /></circle>
          </g>
        </svg>
      );
    case 'car-motion':
    case 'motion':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="0" y="80" width="200" height="4" fill="#cbd5e1" />
          <g>
            <rect x="20" y="50" width="40" height="20" rx="4" fill="#3b82f6" />
            <circle cx="30" cy="75" r="5" fill="#475569" />
            <circle cx="50" cy="75" r="5" fill="#475569" />
            <animateTransform attributeName="transform" type="translate" values="0,0; 130,0; 0,0" dur="4s" repeatCount="indefinite" />
          </g>
        </svg>
      );
    case 'galaxy-orbit':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <circle cx="100" cy="50" r="12" fill="#fbbf24" />
          <ellipse cx="100" cy="50" rx="40" ry="12" fill="none" stroke="#94a3b8" strokeWidth="1" transform="rotate(15 100 50)" />
          <ellipse cx="100" cy="50" rx="60" ry="18" fill="none" stroke="#cbd5e1" strokeWidth="1" transform="rotate(15 100 50)" />
          <g>
            <circle cx="60" cy="50" r="4" fill="#3b82f6" />
            <animateTransform attributeName="transform" type="rotate" from="0 100 50" to="360 100 50" dur="4s" repeatCount="indefinite" />
          </g>
          <g>
            <circle cx="160" cy="50" r="3" fill="#ef4444" />
            <animateTransform attributeName="transform" type="rotate" from="360 100 50" to="0 100 50" dur="7s" repeatCount="indefinite" />
          </g>
        </svg>
      );
    case 'thermometer':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <rect x="90" y="15" width="20" height="60" rx="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="100" cy="75" r="15" fill="#ef4444" />
          <rect x="94" y="35" width="12" height="40" fill="#ef4444">
             <animate attributeName="height" values="20; 45; 20" dur="4s" repeatCount="indefinite" />
             <animate attributeName="y" values="55; 30; 55" dur="4s" repeatCount="indefinite" />
          </rect>
          <line x1="115" y1="30" x2="125" y2="30" stroke="#94a3b8" strokeWidth="2" />
          <line x1="115" y1="50" x2="125" y2="50" stroke="#94a3b8" strokeWidth="2" />
          <text x="135" y="34" fill="#64748b" fontSize="12">Hot</text>
          <text x="135" y="54" fill="#64748b" fontSize="12">Cold</text>
        </svg>
      );
    case 'math-symbols':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <text x="100" y="45" fill="#3b82f6" fontSize="24" fontWeight="bold" textAnchor="middle" fontStyle="italic">F = m a</text>
          <text x="100" y="80" fill="#64748b" fontSize="16" fontWeight="bold" textAnchor="middle" fontStyle="italic">v = u + a t</text>
          <path d="M 60 55 Q 100 70 140 55" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3,3">
             <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>
      );
    case 'triangle-angles':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <polygon points="40,80 140,80 140,20" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" />
          <rect x="130" y="70" width="10" height="10" fill="none" stroke="#0284c7" strokeWidth="2" />
          <path d="M 60 80 A 20 20 0 0 0 55 68" fill="none" stroke="#0284c7" strokeWidth="2" />
          <text x="70" y="75" fill="#0284c7" fontSize="12">θ</text>
          <text x="90" y="95" fill="#0369a1" fontSize="11" fontWeight="bold">Adjacent (x)</text>
          <text x="150" y="55" fill="#0369a1" fontSize="11" fontWeight="bold" transform="rotate(-90 150 55)">Opposite (y)</text>
          <text x="75" y="45" fill="#0369a1" fontSize="11" fontWeight="bold" transform="rotate(-30 75 45)">Hypotenuse</text>
        </svg>
      );
    case 'coordinate-system':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <line x1="20" y1="80" x2="180" y2="80" stroke="#475569" strokeWidth="2" />
          <polygon points="180,80 172,76 172,84" fill="#475569" />
          <line x1="100" y1="90" x2="100" y2="10" stroke="#475569" strokeWidth="2" />
          <polygon points="100,10 96,18 104,18" fill="#475569" />
          <text x="185" y="84" fill="#1e293b" fontSize="12" fontWeight="bold">x</text>
          <text x="105" y="15" fill="#1e293b" fontSize="12" fontWeight="bold">y</text>
          <circle cx="100" cy="80" r="3" fill="#ef4444" />
          <text x="85" y="93" fill="#ef4444" fontSize="10">(0,0)</text>
          <circle cx="140" cy="40" r="5" fill="#3b82f6" />
          <line x1="100" y1="40" x2="140" y2="40" stroke="#cbd5e1" strokeDasharray="3,3" />
          <line x1="140" y1="80" x2="140" y2="40" stroke="#cbd5e1" strokeDasharray="3,3" />
        </svg>
      );
    case 'clock-time':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <circle cx="100" cy="50" r="40" fill="#f8fafc" stroke="#334155" strokeWidth="4" />
          <line x1="100" y1="15" x2="100" y2="20" stroke="#334155" strokeWidth="2" />
          <line x1="100" y1="80" x2="100" y2="85" stroke="#334155" strokeWidth="2" />
          <line x1="135" y1="50" x2="130" y2="50" stroke="#334155" strokeWidth="2" />
          <line x1="65" y1="50" x2="70" y2="50" stroke="#334155" strokeWidth="2" />
          <line x1="100" y1="50" x2="100" y2="30" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
          <g>
            <line x1="100" y1="50" x2="120" y2="50" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            <animateTransform attributeName="transform" type="rotate" from="0 100 50" to="360 100 50" dur="2s" repeatCount="indefinite" />
          </g>
          <circle cx="100" cy="50" r="4" fill="#334155" />
        </svg>
      );
    case 'brain-think':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <path d="M 70 50 Q 70 20 100 20 Q 130 20 130 50 Q 130 70 120 80 L 100 80 L 90 70 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3" />
          <circle cx="100" cy="45" r="5" fill="#f59e0b">
             <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
          </circle>
          <path d="M 85 55 Q 100 65 115 55" fill="none" stroke="#64748b" strokeWidth="2" />
          <path d="M 80 40 Q 90 30 100 40 Q 110 30 120 40" fill="none" stroke="#cbd5e1" strokeWidth="2" />
        </svg>
      );
    case 'experiment-setup':
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <path d="M 80 80 L 120 80 L 110 30 L 90 30 Z" fill="none" stroke="#0ea5e9" strokeWidth="3" />
          <ellipse cx="100" cy="30" rx="10" ry="3" fill="none" stroke="#0ea5e9" strokeWidth="3" />
          <path d="M 85 60 L 115 60" stroke="#0ea5e9" strokeWidth="2" />
          <path d="M 85 60 L 80 80 L 120 80 L 115 60 Z" fill="#bae6fd" opacity="0.6">
            <animate attributeName="fill" values="#bae6fd;#7dd3fc;#bae6fd" dur="3s" repeatCount="indefinite" />
          </path>
          <circle cx="100" cy="70" r="2" fill="white">
            <animate attributeName="cy" values="70;40" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      );
    case 'trajectory-arc':
      const trajDurSecs = 4.5 - (val1 / 100) * 3;
      const arcDepth = -10 - (val2 / 100) * 70;
      const trajPath = `M 0 0 Q 70 ${arcDepth}, 140 0`;
      const bgPath = `M 30 80 Q 100 ${(80+arcDepth)}, 170 80`;
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <line x1="20" y1="80" x2="180" y2="80" stroke="#475569" strokeWidth="2" />
          <path d={bgPath} fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" style={{ transition: 'd 0.5s ease' }} />
          <g>
            <circle cx="30" cy="80" r="5" fill="#f59e0b" />
            <animateMotion path={trajPath} dur={`${trajDurSecs}s`} repeatCount="indefinite" />
          </g>
          <line x1="100" y1="40" x2="100" y2="40" stroke="none" />
        </svg>
      );
    case 'circular-orbit':
      const orbitSpeed = 4.5 - (val1 / 100) * 4;
      const orbitRadius = 10 + (val2 / 100) * 35;
      return (
        <svg viewBox="0 0 200 100" className="w-full max-w-sm mx-auto my-6">
          <circle cx="100" cy="50" r={orbitRadius} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" style={{ transition: 'r 0.5s ease' }} />
          <circle cx="100" cy="50" r="5" fill="#475569" />
          <g>
            <line x1="100" y1="50" x2="100" y2={50 - orbitRadius} stroke="#3b82f6" strokeWidth="2" />
            <circle cx="100" cy={50 - orbitRadius} r="6" fill="#ef4444" />
            <line x1="100" y1={50 - orbitRadius} x2="130" y2={50 - orbitRadius} stroke="#22c55e" strokeWidth="2" />
            <polygon points={`130,${50-orbitRadius} 120,${46-orbitRadius} 120,${54-orbitRadius}`} fill="#22c55e" />
            <animateTransform attributeName="transform" type="rotate" from="0 100 50" to="360 100 50" dur={`${orbitSpeed}s`} repeatCount="indefinite" />
          </g>
          <text x="140" y={60 - orbitRadius} fill="#22c55e" fontSize="10">v</text>
        </svg>
      );
    default:
      return null;
  }
}
