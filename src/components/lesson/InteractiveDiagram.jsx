import React, { useState } from 'react';
import { Illustration } from './SvgIllustrations';

const getCaption = (type, title) => {
  const captions = {
    'momentum': 'Tracking the center of mass and continuous transfer of velocity.',
    'buoyancy': 'Observing the displacement of fluid causing an upward lift force.',
    'friction': 'Notice how the microscopic contact points resist sheer velocity.',
    'ruler': 'Establishing a standardized scale to measure scalar magnitude objectively.',
    'units': 'Establishing a standardized scale to measure scalar magnitude objectively.',
    'atom-model': 'Defining the foundational building blocks of the physical model.',
    'physics': 'Defining the foundational building blocks of the physical model.',
    'displacement-arrow': 'Tracking the strict linear vector from origin to destination.',
    'displacement': 'Tracking the strict linear vector from origin to destination.',
    'speedometer': 'Measuring the instantaneous rate of distance closure over active time.',
    'speed': 'Measuring the instantaneous rate of distance closure over active time.',
    'motion-graph': 'Plotting the temporal rate of change on a rigid coordinate plane.',
    'graphs': 'Plotting the temporal rate of change on a rigid coordinate plane.',
    'circuit-flow': 'Observing the closed-loop transfer of continuous electrical energy.',
    'circuit': 'Observing the closed-loop transfer of continuous electrical energy.',
    'car-motion': 'Visualizing bulk macroscopic translation along a 1D reference plane.',
    'motion': 'Visualizing bulk macroscopic translation along a 1D reference plane.',
    'galaxy-orbit': 'Examining cosmic-scale forces dictated entirely by inverse-square laws.',
    'thermometer': 'Tracking the invisible kinetic energy of molecules as scalar heat.',
    'math-symbols': 'Translating complex physical realities into strict algebraic equations.',
    'triangle-angles': 'Deconstructing an angled vector into independent orthogonal axes.',
    'coordinate-system': 'Isolating the object in a standardized reference frame to sum forces.',
    'clock-time': 'Using the localized passage of time to calculate strict rates of physical processes.',
    'brain-think': 'Applying analytical logic and abstraction to isolate the correct parameters.',
    'experiment-setup': 'Testing the hypothesis by isolating the target variable in a closed system.',
    'trajectory-arc': 'Tracing the continuous parabolic path continuously dictated by constant gravity.',
    'circular-orbit': 'Visualizing the perpendicular centripetal force continuously changing the velocity vector.',
    'force': 'Representing the physical push or pull interaction changing the momentum constraints.'
  };
  return captions[type] || `Visual Demonstration: Analyzing the mechanics of ${title}.`;
};

const InteractiveDiagram = ({ visualType, title }) => {
  const [val1, setVal1] = useState(50);
  const [val2, setVal2] = useState(50);

  let label1 = "Intensity";
  let label2 = "Scale";
  let showSliders = true;

  // Determine what the sliders represent dynamically
  if (['trajectory-arc', 'projectile'].includes(visualType)) {
    label1 = "Launch Velocity";
    label2 = "Gravity Pull";
  } else if (['speed', 'speedometer', 'motion', 'car-motion'].includes(visualType)) {
    label1 = "Target Speed";
    label2 = "Time Scale";
  } else if (['force', 'friction'].includes(visualType)) {
    label1 = "Applied Force";
    label2 = "Surface Roughness";
  } else if (['circular-orbit', 'galaxy-orbit', 'gravity'].includes(visualType)) {
    label1 = "Orbital Velocity";
    label2 = "Central Mass";
  } else if (['momentum'].includes(visualType)) {
    label1 = "Blue Ball Mass";
    label2 = "Red Ball Mass";
  } else if (['pendulum'].includes(visualType)) {
    label1 = "Start Angle";
    label2 = "String Length";
  } else if (['motion-graph', 'graphs'].includes(visualType)) {
    label1 = "Acceleration";
    label2 = "Max Velocity";
  } else {
    // Hide sliders for completely abstract non-manipulatable concepts
    showSliders = false;
  }

  return (
    <section className="py-12 px-4 sm:px-8 bg-slate-50 border border-slate-100 rounded-lg text-center shadow-inner">
      <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-8 w-full">Interactive Vector Laboratory</h4>
      
      {/* SVG Viewer */}
      <div className={`w-full ${showSliders ? 'h-72 rounded-t-xl' : 'h-80 rounded-xl'} border border-slate-200 bg-white flex flex-col items-center justify-center relative overflow-hidden shadow-sm`}>
         <div className="flex-1 flex items-center justify-center w-full pb-8">
            <Illustration type={visualType} val1={val1} val2={val2} />
         </div>
         <div className="absolute bottom-0 left-0 w-full bg-slate-100/80 backdrop-blur-sm border-t border-slate-200 px-4 py-3 text-center">
             <p className="font-semibold text-[13px] text-slate-600 leading-snug">{getCaption(visualType, title)}</p>
         </div>
      </div>

      {/* Dynamic Control Panel */}
      {showSliders && (
         <div className="w-full bg-white border border-t-0 border-slate-200 rounded-b-xl p-5 sm:p-6 shadow-sm flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
               
               {/* Slider 1 */}
               <div className="w-full sm:w-1/2 flex flex-col items-start gap-2">
                  <div className="flex justify-between w-full">
                     <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{label1}</label>
                     <span className="text-xs font-mono font-bold text-primary">{val1}%</span>
                  </div>
                  <input 
                    type="range" min="10" max="100" 
                    value={val1} 
                    onChange={(e) => setVal1(parseInt(e.target.value))} 
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary hover:bg-slate-300 transition-colors" 
                  />
               </div>
               
               {/* Slider 2 */}
               <div className="w-full sm:w-1/2 flex flex-col items-start gap-2">
                  <div className="flex justify-between w-full">
                     <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{label2}</label>
                     <span className="text-xs font-mono font-bold text-primary">{val2}%</span>
                  </div>
                  <input 
                    type="range" min="10" max="100" 
                    value={val2} 
                    onChange={(e) => setVal2(parseInt(e.target.value))} 
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary hover:bg-slate-300 transition-colors" 
                  />
               </div>
               
            </div>
         </div>
      )}
    </section>
  );
};

export default InteractiveDiagram;
