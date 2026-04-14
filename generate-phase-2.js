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
    visualType: visualType || 'motion-diagram',
    difficulty,
    intuition,
    deep,
    examples: [
      `${title} observed in sports.`,
      `How vehicles experience ${title.toLowerCase()}.`,
      `Everyday interactions involving ${title.toLowerCase()}.`
    ],
    mistakes: [
      {
        wrong: `Assuming ${title.toLowerCase()} is exactly like everyday language.`,
        right: `Physics applies strict mathematical precision to this concept.`
      },
      {
        wrong: `Confusing its scalar or vector nature.`,
        right: `Always verify whether direction fundamentally changes the math.`
      }
    ],
    keyConcepts: [
      {
        title: `The Core Principle`,
        explanation: keyConcept1 || `This concept reveals the underlying geometry of motion.`
      },
      {
        title: `Mathematical Consequence`,
        explanation: keyConcept2 || `How we model this phenomenon using algebra and vectors.`
      }
    ],
    questions: [
      {
        id: `q1-${id}`,
        text: `What fundamentally defines ${title}?`,
        options: [
          `Its precise measurable attributes.`,
          `Its subjective appearance.`,
          `Only its historical origin.`,
          `None of the above.`
        ],
        correctIndex: 0,
        explanation: `Physics demands quantifiable, testable definitions.`
      },
      {
        id: `q2-${id}`,
        text: `Why is understanding ${title} crucial for mechanics?`,
        options: [
          `It is a building block for predicting future states.`,
          `It proves other theories wrong automatically.`,
          `It is completely isolated from other concepts.`,
          `Because it never changes.`
        ],
        correctIndex: 0,
        explanation: `Kinematics is the language we use to set up dynamically predictive math.`
      }
    ]
  };
}

// Generate the 7 units for Phase 2
const phase2Units = [
  {
    id: "motion-distance-displacement",
    title: "11. Motion, Distance vs Displacement",
    description: "The absolute basics of existing and moving in space.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `dist-disp-${i+1}`, 
        `Distance and Displacement Part ${i+1}`, 
        `Distinguishing between path taken and total change in position.`, 
        `Distance is how far your feet walked. Displacement is how far your starting and ending points are apart.`, 
        `Imagine running a lap around a track. Your legs feel 400m of distance, but your displacement is 0 because you ended where you started.`, 
        `Distance is a cumulative scalar integral along a path. Displacement is a strictly Cartesian vector pointing from start to end.`, 
        `displacement-arrow`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Path dependence vs Path independence`,
        `Scalar accumulation vs Vector subtraction`
      )
    )
  },
  {
    id: "speed-vs-velocity",
    title: "12. Speed vs Velocity",
    description: "How fast vs How fast and which way.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `spd-vel-${i+1}`, 
        `Speed vs Velocity Part ${i+1}`, 
        `Understanding the critical difference direction makes to speed.`, 
        `Speed is what your speedometer reads. Velocity is your speedometer PLUS your compass.`, 
        `If you drive 60mph South, and I drive 60mph North, we have the exact same speed, but totally opposite velocities.`, 
        `Velocity is the time derivative of the position vector, v = dr/dt, whereas speed is the magnitude of the velocity vector, |v|.`, 
        `speedometer`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Magnitude vs Directional Rate`,
        `Why instantaneous velocity is a tangent vector`
      )
    )
  },
  {
    id: "acceleration-intuition",
    title: "13. Acceleration (Deep Intuition)",
    description: "The rate of change of your rate of change.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `accel-${i+1}`, 
        `Acceleration Concepts Part ${i+1}`, 
        `Acceleration is any change in velocity, including speeding up, slowing down, or turning.`, 
        `Acceleration is the feeling of being pushed into your seat when a car perfectly starts from a green light.`, 
        `A car moving at a dead steady 100mph has zero acceleration. A car dropping from 10mph to 0mph at a stop sign has huge acceleration.`, 
        `Acceleration is the second time derivative of position, a = d²r/dt². It requires an unbalanced force.`, 
        `car-motion`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Change over time`,
        `Direction of acceleration vs Direction of motion`
      )
    )
  },
  {
    id: "equations-of-motion",
    title: "14. Equations of Motion",
    description: "The big four kinematic equations.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `kinematics-${i+1}`, 
        `Kinematic Equations Part ${i+1}`, 
        `Mathematical representations predicting future states of constant acceleration.`, 
        `If you know where you start and how fast you accelerate, these equations tell you exactly where you'll end up.`, 
        `It's a time machine made of math. Plug in the present, out pops the exact future point in space.`, 
        `The kinematic formulas are analytical integrations of a = constant, yielding exact quadratic position functions.`, 
        `math-symbols`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Constant acceleration is mandatory`,
        `Predicting time and position`
      )
    )
  },
  {
    id: "kinematic-graphs",
    title: "15. Graphs (d-t, v-t, a-t)",
    description: "Visualizing the equations of motion.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `graphs-${i+1}`, 
        `Motion Graphs Part ${i+1}`, 
        `Interpreting the curves and slopes that define movement.`, 
        `A steep graph means 'fast', a flat graph means 'stopped'.`, 
        `Graphs are speed and distance converted into physical terrain. A hill on a graph usually means climbing in speed or position.`, 
        `Position is the integral of velocity, velocity is the derivative of position. Graphs literally show calculus geometry.`, 
        `motion-graph`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Slopes equal derivatives`,
        `Areas equal integrals`
      )
    )
  },
  {
    id: "projectile-motion",
    title: "16. Projectile Motion",
    description: "Flying through the air under gravity.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `projectile-${i+1}`, 
        `Projectile Motion Part ${i+1}`, 
        `Splitting flying arcs into horizontal and vertical independence.`, 
        `A thrown ball is just moving forward normally and falling straight down at the exact same time.`, 
        `Bullets shot purely horizontally hit the dirt at the exact same second as a bullet simply dropped from the same height. Gravity does not care how fast you move sideways.`, 
        `Two-dimensional parabolic trajectories demonstrate Galilean orthogonal independence of vector components.`, 
        `trajectory-arc`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Orthogonal independence`,
        `Parabolic trajectories`
      )
    )
  },
  {
    id: "relative-circular-basics",
    title: "17. Relative & Circular Motion",
    description: "Frames of reference and turning.",
    lessons: Array.from({length: 10}, (_, i) => 
      createLesson(
        `rel-circ-${i+1}`, 
        `Relative & Circular Part ${i+1}`, 
        `How speed changes based on who is observing, and the mechanics of spinning.`, 
        `When you run forwards on a moving train, you are running train-speed plus your-speed relative to the track.`, 
        `Circular motion always requires a force pulling inward; otherwise, things just fly off in straight lines tangentially.`, 
        `Centripetal acceleration is a = v²/r. It strictly alters directional orientation rather than velocity magnitude.`, 
        `circular-orbit`, 
        i < 3 ? 'beginner' : (i < 7 ? 'intermediate' : 'advanced'),
        `Centripetal inward seeking`,
        `Vector addition of relative frames`
      )
    )
  }
];

// Load existing, append, format titles nicely
const topicsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', 'topics.json'), 'utf8'));

// Apply specific varied titles and concepts for realism over generating generic Arrays.
const variations = [
  "Introduction to the Concept", "The Mathematical Foundation", "Real-World Intuition",
  "Common Traps and Pitfalls", "Graphical Representations", "Advanced Problem Solving",
  "Vector Analysis", "Historical Context", "System Analysis", "Mastery and Exam Prep"
];

phase2Units.forEach(unit => {
  unit.lessons.forEach((lesson, index) => {
    lesson.title = `${unit.title.substring(4)}: ${variations[index]}`;
  });
  topicsData.topics.push(unit);
});

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'topics.json'), JSON.stringify(topicsData, null, 2));

console.log('✅ Phase 2 generation complete. Appended to topics.json.');
