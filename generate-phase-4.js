import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helper for lessons
function createLesson(id, title, summary, simple, intuition, deep, visualType, difficulty, keyConcept1, keyConcept2) {
  return {
    id,
    title,
    summary,
    simple,
    extraSimple: `Basically: ${summary.toLowerCase()}`,
    visualType: visualType || 'math-symbols',
    difficulty,
    intuition,
    deep,
    examples: [
      `Observing ${title.toLowerCase()} in everyday mechanics.`,
      `How engineers account for ${title.toLowerCase()}.`,
      `Extreme edge cases of ${title.toLowerCase()}.`
    ],
    mistakes: [
      {
        wrong: `Treating ${title.toLowerCase()} as a visual illusion rather than a defined interaction.`,
        right: `Physics applies strict mathematical definitions built around scalar limits and system budgets.`
      },
      {
        wrong: `Confusing the state with the transfer.`,
        right: `Energy is a property of a system, Work is the mechanical transfer mechanism.`
      }
    ],
    keyConcepts: [
      {
        title: `The Energy Budget`,
        explanation: keyConcept1 || `The underlying currency model that tracks physical transfers.`
      },
      {
        title: `System Transformation`,
        explanation: keyConcept2 || `How we measure invisible states transforming continuously into active motion.`
      }
    ],
    questions: [
      {
        id: `q1-${id}`,
        text: `What is the primary conceptual focus of ${title}?`,
        options: [
          `Tracking scalar limits within a closed system.`,
          `Calculating straight lines.`,
          `Finding the center of mass.`,
          `Drawing force arrows.`
        ],
        correctIndex: 0,
        explanation: `Energy acts as the ultimate scalar accounting book for isolated systems.`
      },
      {
        id: `q2-${id}`,
        text: `Why is understanding ${title} fundamental to Mechanics?`,
        options: [
          `It lets us solve problems without caring about time or exact paths.`,
          `It ignores mass completely.`,
          `It relies heavily on vectors.`,
          `It is purely theoretical.`
        ],
        correctIndex: 0,
        explanation: `Energy conservation gives us a powerful shortcut right to the end state, bypassing complex vector integrals.`
      }
    ]
  };
}

// Generate the 7 units for Phase 4
const phase4Units = [
  {
    id: "work-mechanical-energy",
    title: "25. Work & Mechanical Energy",
    description: "The physics definition of getting things done.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `work-${i+1}`, 
        `Physics of Work Part ${i+1}`, 
        `Work is force applied across a distance, resulting in energy transfer.`, 
        `Pushing a wall forever does zero work because the wall didn't move. Work requires something actually shifting.`, 
        `Work is like a paycheck. You can push hard all day, but if the box didn't move, physics says you aren't getting paid in energy.`, 
        `W = ∫F·dr. Work is the path integral of force, meaning only the component of force perfectly aligned with motion does work.`, 
        `experiment-setup`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Dot Products in Physics`,
        `Force-Displacement Graphs`
      )
    )
  },
  {
    id: "kinetic-energy",
    title: "26. Kinetic Energy",
    description: "The energy of massive objects in motion.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `kinetic-${i+1}`, 
        `Kinetic Energy Part ${i+1}`, 
        `Kinetic energy scales linearly with mass but quadratically with velocity.`, 
        `A car going 60mph has FOUR times the destructive energy of a car going 30mph, not twice.`, 
        `Think of kinetic energy as the 'damage potential' an object holds simply because it is heavy and moving fast.`, 
        `K = ½mv². Derived from the work-energy theorem, integrating F=ma respecting spatial displacement rather than time.`, 
        `speedometer`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `The Work-Energy Theorem`,
        `Quadratic Scaling`
      )
    )
  },
  {
    id: "potential-energy",
    title: "27. Potential Energy",
    description: "Stored energy waiting to be unleashed.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `potential-${i+1}`, 
        `Stored Systems Part ${i+1}`, 
        `Energy is stored in gravitational fields or stretched springs.`, 
        `Holding a bowling ball over your head stores energy in the invisible rubber band of gravity.`, 
        `A compressed spring is like a frozen explosion. It's holding 'potential' motion mathematically hostage.`, 
        `U = mgh for gravity, U = ½kx² for springs. Potential energy relies entirely on defining a relative zero-reference frame.`, 
        `coordinate-system`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Reference Frames and Zero Points`,
        `Gravitational vs Elastic Fields`
      )
    )
  },
  {
    id: "conservation-of-energy",
    title: "28. Conservation of Energy",
    description: "You cannot create or destroy the universe's currency.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `conservation-${i+1}`, 
        `Energy Accounting Part ${i+1}`, 
        `In an isolated system, total energy remains strictly constant.`, 
        `If you drop a ball, gravity trades height (potential) evenly for speed (kinetic) like cashing a check into coins.`, 
        `Energy is the universe's ultimate accountant. The books always balance, every single millisecond.`, 
        `E_initial = E_final. The sum of K + U remains constant if no non-conservative forces perform work on the system boundaries.`, 
        `triangle-angles`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `System Boundaries`,
        `The First Law of Thermodynamics`
      )
    )
  },
  {
    id: "power-physics",
    title: "29. Power",
    description: "How fast can you spend your energy?",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `power-${i+1}`, 
        `Work Rates Part ${i+1}`, 
        `Power is the rate at which work is done or energy is transferred.`, 
        `Walking up stairs and running up stairs requires the exact same energy. Running requires much more Power.`, 
        `If energy is money, Power is how fast you are allowed to spend it. A 100W bulb spends 100 Joules every second.`, 
        `P = dW/dt or P = F·v. Power is the temporal derivative of work, bridging energy states with time factors.`, 
        `clock-time`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Watts and Horsepower`,
        `Instantaneous vs Average Power`
      )
    )
  },
  {
    id: "non-conservative-forces",
    title: "30. Heat & Friction (Loss)",
    description: "The 'taxes' the universe charges on motion.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `dissipation-${i+1}`, 
        `Energy Dissipation Part ${i+1}`, 
        `Friction and air resistance convert clean mechanical energy into chaotic thermal energy.`, 
        `When cars brake, they don't 'destroy' energy. The brakes just turn the motion into heat.`, 
        `Non-conservative forces act like an invisible tax collector, continually bleeding kinetic energy into the environment as heat.`, 
        `W_nc = ΔE. Net work done by non-conservative paths alters the macroscopic mechanical energy level of the strict system.`, 
        `thermometer`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Macroscopic Chaos`,
        `Irreversibility`
      )
    )
  },
  {
    id: "momentum-energy-synthesis",
    title: "31. Energy vs Momentum",
    description: "Combining both laws to solve impossible collisions.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `synthesis-${i+1}`, 
        `Collision Mechanics Part ${i+1}`, 
        `Momentum is always conserved. Energy is only conserved in perfectly elastic systems.`, 
        `Pool balls bounce perfectly (Elastic). Two cars crashing crumple together (Inelastic).`, 
        `Momentum is a stubborn ghost that haunts the center of mass. Energy is fragile and breaks easily into heat during impact.`, 
        `Solving an elastic collision requires solving identical simultaneous equations for Σp_initial = Σp_final and ΣK_initial = ΣK_final.`, 
        `motion-graph`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Elasticity coefficients`,
        `Center of Mass frames`
      )
    )
  }
];

// Load existing, append, format titles nicely
const topicsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', 'topics.json'), 'utf8'));

// Topic variations
const variations = [
  "Introduction to the Concept", "Core Mechanical Foundation", "Real-World Intuition",
  "Common Traps and Pitfalls", "Microscopic View", "Dynamic Adjustments",
  "Vector vs Scalar Modes", "Historical Context", "System Isolation", "Mastery and Syntheses"
];

phase4Units.forEach(unit => {
  unit.lessons.forEach((lesson, index) => {
    lesson.title = `${unit.title.substring(4).split(' ')[0]}: ${variations[index]}`;
  });
  topicsData.topics.push(unit);
});

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'topics.json'), JSON.stringify(topicsData, null, 2));

console.log('✅ Phase 4 (Energy & Work) generation complete. Appended to topics.json.');
