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
    visualType: visualType || 'force',
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
        right: `Physics applies strict vector definitions and forces causing changes in momentum.`
      },
      {
        wrong: `Confusing the cause with the effect.`,
        right: `Dynamics seeks to explain the root causes of acceleration rather than just describing the motion.`
      }
    ],
    keyConcepts: [
      {
        title: `The Driving Mechanism`,
        explanation: keyConcept1 || `The underlying interaction that creates this physical consequence.`
      },
      {
        title: `Vector Analysis`,
        explanation: keyConcept2 || `How we break this interaction down into measurable orthogonal forces.`
      }
    ],
    questions: [
      {
        id: `q1-${id}`,
        text: `What is the primary physical cause of ${title}?`,
        options: [
          `Unbalanced forces.`,
          `Constant velocity.`,
          `Time passing.`,
          `Its mass alone.`
        ],
        correctIndex: 0,
        explanation: `Changes in states of motion (Dynamics) require unbalanced interactions.`
      },
      {
        id: `q2-${id}`,
        text: `Why is understanding ${title} fundamental to Dynamics?`,
        options: [
          `It dictates why motion happens, not just how.`,
          `It ignores mass completely.`,
          `It is purely theoretical.`,
          `It disproves kinematics.`
        ],
        correctIndex: 0,
        explanation: `Dynamics is the study of causes (forces and masses) unlike Kinematics (geometry of motion).`
      }
    ]
  };
}

// Generate the 7 units for Phase 3
const phase3Units = [
  {
    id: "forces-types",
    title: "18. Force and Types of Forces",
    description: "The fundamental pushes and pulls of the universe.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `force-${i+1}`, 
        `Types of Forces Part ${i+1}`, 
        `Classifying interactions into contact and field forces.`, 
        `A force is just a push or a pull. Some touch you (like a slap), some don't (like gravity).`, 
        `Imagine walking a dog. The leash pulling you is a contact force. The Earth pulling you down is a field force.`, 
        `In classical mechanics, forces are vector quantities describing the rate of change of momentum (dp/dt).`, 
        `force`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Field vs Contact interactions`,
        `Vector superposition of forces`
      )
    )
  },
  {
    id: "newtons-first",
    title: "19. Newton's First Law (Inertia)",
    description: "Things like to act exactly the way they are already acting.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `inertia-${i+1}`, 
        `Inertia Concept Part ${i+1}`, 
        `Objects at rest stay at rest, objects in motion stay in motion, unless acted upon by a net force.`, 
        `If you throw a hammer in deep space, it will travel in a straight line forever without ever slowing down.`, 
        `If you slam the brakes in a car, your coffee flies forward because the coffee wants to keep going at 60mph.`, 
        `The First Law defines inertial reference frames; frames where the net force is zero imply acceleration is globally zero.`, 
        `car-motion`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Inertial Reference Frames`,
        `Mass as a measure of inertia`
      )
    )
  },
  {
    id: "newtons-second",
    title: "20. Newton's Second Law (F=ma)",
    description: "The most important equation in classical mechanics.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `fma-${i+1}`, 
        `F=ma Deep Dive Part ${i+1}`, 
        `Acceleration is proportional to force and inversely proportional to mass.`, 
        `If you push a shopping cart, it moves easily. If you push a parked truck with the same push, it barely budges.`, 
        `Force is the budget, mass is the cost, acceleration is what you can afford to buy.`, 
        `The differential equation F = m(d²r/dt²) acts as the deterministic engine for classical particle mechanics.`, 
        `math-symbols`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Proportionality of Acceleration`,
        `Net Force Integration`
      )
    )
  },
  {
    id: "newtons-third",
    title: "21. Newton's Third Law",
    description: "For every action, there is an equal and opposite reaction.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `action-reaction-${i+1}`, 
        `Action and Reaction Part ${i+1}`, 
        `Forces always come in pairs. You cannot touch without being touched.`, 
        `When you punch a brick wall, the wall punches your hand back with the exact same amount of violence.`, 
        `Swimmers move forward by pushing the water backward. The water pushes them forward.`, 
        `The Third Law implies the conservation of total momentum in closed systems under mutual interactions.`, 
        `momentum`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Interaction Force Pairs`,
        `Why internal forces cancel out`
      )
    )
  },
  {
    id: "friction-dynamics",
    title: "22. Friction (Static vs Kinetic)",
    description: "The force that resists motion between surfaces.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `friction-${i+1}`, 
        `Friction Physics Part ${i+1}`, 
        `Friction has two modes: grabbing (static) and sliding (kinetic).`, 
        `It's much harder to get a heavy couch to start sliding than it is to keep it sliding.`, 
        `Friction is actually microscopic mountains and valleys getting snagged on each other between two seemingly smooth surfaces.`, 
        `Static friction matches applied traction up to a threshold μsN, after which it drops instantly to μkN.`, 
        `friction`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Atomic level asperities`,
        `The Normal Force dependency`
      )
    )
  },
  {
    id: "tension-normal-spring",
    title: "23. Tension, Normal, & Spring",
    description: "Ropes, floors, and bouncy things.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `contact-forces-${i+1}`, 
        `Special Context Forces Part ${i+1}`, 
        `Understanding specific mechanical responses like stretching ropes or compressed springs.`, 
        `The floor pushes up on you (Normal force) so you don't fall through it. Ropes pull (Tension), they don't push.`, 
        `A table surface actually bends microscopically when you sit a book on it, pushing back up like a highly stiff trampoline.`, 
        `Normal force is a constraint force that prevents surface interpenetration, modeled strictly perpendicular to contact.`, 
        `buoyancy`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Hooke's Law for elasticity`,
        `Constraint forces vs active forces`
      )
    )
  },
  {
    id: "free-body-diagrams",
    title: "24. Free-Body Diagrams",
    description: "Drawing the battle map of forces.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `fbd-${i+1}`, 
        `Body Diagrams Part ${i+1}`, 
        `Reducing complex physical objects down to a single dot with arrows pulling it.`, 
        `To figure out where an object will go, wipe out the confusing background and just draw arrows for who is pushing it.`, 
        `A car driving up a hill looks complicated. A dot with Gravity down, Normal up-left, and Friction down-left is solvable.`, 
        `By isolating the system, we sum the discrete force vectors precisely to derive net acceleration via orthogonal components.`, 
        `coordinate-system`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `System isolation`,
        `Vector decomposition`
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
  "Vector Analysis", "Historical Context", "System Isolation", "Mastery and Syntheses"
];

phase3Units.forEach(unit => {
  unit.lessons.forEach((lesson, index) => {
    lesson.title = `${unit.title.substring(4)}: ${variations[index]}`;
  });
  topicsData.topics.push(unit);
});

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'topics.json'), JSON.stringify(topicsData, null, 2));

console.log('✅ Phase 3 generation complete. Appended to topics.json.');
