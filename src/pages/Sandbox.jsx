import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const Sandbox = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const renderRef = useRef(null);
  const runnerRef = useRef(null);
  const [gravity, setGravity] = useState(1); // 1 = down, -1 = up, 0 = zero g

  useEffect(() => {
    // Component lifecycle init
    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          World = Matter.World,
          Bodies = Matter.Bodies;

    // Use established engine
    const engine = engineRef.current;
    
    // Create renderer fitting the container
    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
        hasBounds: true
      }
    });
    renderRef.current = render;

    // Build the boundaries (Floor, Ceiling, Walls)
    const wallOptions = { isStatic: true, render: { fillStyle: '#e2e8f0'} };
    World.add(engine.world, [
      Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions), // floor
      Bodies.rectangle(width / 2, -25, width, 50, wallOptions), // ceiling
      Bodies.rectangle(-25, height / 2, 50, height, wallOptions), // left wall
      Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions) // right wall
    ]);

    // Add interactive mouse controls
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    World.add(engine.world, mouseConstraint);
    
    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Run the engine
    Render.run(render);
    
    // Create runner
    const runner = Runner.create();
    Runner.run(runner, engine);
    runnerRef.current = runner;

    // Handle Window Resize via extremely basic reset logic
    const handleResize = () => {
       render.canvas.width = sceneRef.current.clientWidth;
       render.canvas.height = sceneRef.current.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas) {
        render.canvas.remove();
      }
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, []);

  // Sandbox UI Controls Handlers
  const addBox = () => {
    const width = sceneRef.current.clientWidth;
    const box = Matter.Bodies.rectangle(
      width / 2 + (Math.random() * 40 - 20), 
      50, 
      60, 60, 
      { 
        restitution: 0.6, 
        friction: 0.1, 
        render: { fillStyle: '#3b82f6', strokeStyle: '#1e40af', lineWidth: 2 } 
      }
    );
    Matter.World.add(engineRef.current.world, box);
  };

  const addBoulder = () => {
    const width = sceneRef.current.clientWidth;
    const boulder = Matter.Bodies.circle(
      width / 2 + (Math.random() * 40 - 20), 
      50, 
      40, 
      { 
        restitution: 0.9, 
        density: 0.05, 
        render: { fillStyle: '#f59e0b', strokeStyle: '#b45309', lineWidth: 2 } 
      }
    );
    Matter.World.add(engineRef.current.world, boulder);
  };

  const toggleGravity = () => {
    const newGrav = gravity === 1 ? -1 : (gravity === -1 ? 0 : 1);
    setGravity(newGrav);
    engineRef.current.world.gravity.y = newGrav;
  };

  const clearWorld = () => {
    Matter.World.clear(engineRef.current.world, true); // Keep static bounds
  };

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col h-[calc(100vh-2rem)]">
      
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
           <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 font-headline mb-2">Physics Sandbox Engine</h1>
           <p className="text-slate-500 font-medium max-w-2xl">
             Welcome to the 2D Matter.js laboratory. Drop blocks, reverse gravity, and test true algorithmic collisions. Use your mouse to physically throw objects extremely hard.
           </p>
        </div>
        
        {/* Real-time Status Pills */}
        <div className="flex gap-2">
           <div className="bg-slate-100 px-3 py-1.5 rounded-md text-xs font-bold text-slate-600 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Engine Active
           </div>
           <div className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1 ${gravity === 1 ? 'bg-primary/10 text-primary' : (gravity === -1 ? 'bg-amber-100 text-amber-700' : 'bg-slate-800 text-white')}`}>
              <span className="material-symbols-outlined text-[14px]">public</span> 
              G = {gravity === 1 ? '9.8 (Earth)' : (gravity === -1 ? '-9.8 (Reverse)' : '0 (Zero-G)')}
           </div>
        </div>
      </div>

      {/* Laboratory Constraints Box */}
      <div className="relative flex-1 bg-slate-50 border-2 border-slate-200 rounded-2xl shadow-inner overflow-hidden flex flex-col">
        
        {/* Floating Tool Palette Overlay */}
        <div className="absolute top-4 left-4 right-16 z-10 flex flex-wrap gap-2">
           <button 
             onClick={addBox}
             className="px-3 py-2 sm:px-4 bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm rounded-lg text-sm font-bold text-slate-700 hover:text-primary transition-all active:scale-95 flex items-center gap-2"
           >
             <span className="material-symbols-outlined text-[18px]">crop_square</span> <span className="hidden sm:inline">Blue Box</span>
           </button>
           <button 
             onClick={addBoulder}
             className="px-3 py-2 sm:px-4 bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm rounded-lg text-sm font-bold text-slate-700 hover:text-amber-500 transition-all active:scale-95 flex items-center gap-2"
           >
             <span className="material-symbols-outlined text-[18px]">radio_button_unchecked</span> <span className="hidden sm:inline">Heavy Boulder</span>
           </button>
           <button 
             onClick={toggleGravity}
             className="px-3 py-2 sm:px-4 bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm rounded-lg text-sm font-bold text-slate-700 hover:text-emerald-500 transition-all active:scale-95 flex items-center gap-2"
           >
             <span className="material-symbols-outlined text-[18px]">swap_vert</span> <span className="hidden sm:inline">Toggle Gravity</span>
           </button>
        </div>

        <button 
             onClick={clearWorld}
             className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm rounded-lg text-error hover:bg-error hover:text-white transition-all active:scale-95 flex items-center justify-center group"
             title="Clear Stage"
           >
             <span className="material-symbols-outlined text-[18px]">delete</span>
        </button>

        {/* The Physics Engine Mount Container */}
        <div ref={sceneRef} className="w-full h-full flex-1 cursor-crosshair"></div>
      </div>
    </div>
  );
};

export default Sandbox;
