import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const topicsPhase5 = [
  {
    id: "rotational-kinematics",
    title: "16. Rotational Kinematics",
    description: "Translating linear motion into rigid circular rotation using Theta, Omega, and Alpha.",
    color: "bg-blue-500",
    icon: "data_usage",
    lessons: [
      { title: "Rigid Body Mechanics", summary: "Why points on a spinning wheel move at different speeds but identical angles." },
      { title: "Angular Displacement (Theta)", summary: "Measuring pure rotational progress via Radians." },
      { title: "Angular Velocity (Omega)", summary: "How radically fast the angle is mathematically sweeping per second." },
      { title: "Angular Acceleration (Alpha)", summary: "The rate at which the spin itself visibly speeds up or critically slows." },
      { title: "Linear to Angular Transmutation", summary: "The profound mathematical bridge: v = rω." },
      { title: "Centripetal vs Tangential Acceleration", summary: "Why spinning objects inherently possess two distinct acceleration vectors." },
      { title: "The Kinematic Equations of Rotation", summary: "Translating the sacred 4 linear equations into pure spinning algebra." },
      { title: "Spinning Up a Hard Drive", summary: "Calculating time to reach terminal operational RPM." },
      { title: "The Drill Bit Problem", summary: "Evaluating the lethal edge-speed of industrial drill boundaries." },
      { title: "Rolling Without Slipping", summary: "The unique harmony where linear velocity perfectly marries rotational velocity." }
    ]
  },
  {
    id: "torque-equilibrium",
    title: "17. Torque & Statics",
    description: "The mathematical physics of leverage, twisting, and structural stability.",
    color: "bg-amber-500",
    icon: "miscellaneous_services",
    lessons: [
      { title: "What is Torque?", summary: "Force is a push. Torque is a twist. How they mathematically differ." },
      { title: "The Lever Arm & Cross Products", summary: "Why pushing perfectly parallel to a wrench does absolutely nothing." },
      { title: "Center of Gravity", summary: "Finding the singular magical point where entire masses balance flawlessly." },
      { title: "Static Equilibrium Defined", summary: "When Net Force = 0 AND Net Torque = 0 concurrently." },
      { title: "The Seesaw Equation", summary: "Evaluating fulcrums and balancing massive offsets with pure leverage." },
      { title: "Tension in Suspended Beams", summary: "Calculating the breaking point of structural cables holding heavy signs." },
      { title: "The Ladder Against a Wall", summary: "Solving the classic frictional torque boundary problem." },
      { title: "Couples & Pure Rotation", summary: "Applying two equal and opposite forces specifically to prevent translation." },
      { title: "Biological Leverage", summary: "Why the human bicep operates at a physically terrible mechanical disadvantage." },
      { title: "Structural Sheer Limits", summary: "When excess torque permanently fatally ruins atomic bonds." }
    ]
  },
  {
    id: "rotational-dynamics",
    title: "18. Dynamics & Inertia",
    description: "Mass acts vastly differently when it is forced to spin.",
    color: "bg-emerald-500",
    icon: "adjust",
    lessons: [
      { title: "Newton's Second Law for Rotation", summary: "Replacing F=ma strictly with τ=Iα." },
      { title: "The Moment of Inertia (I)", summary: "Why the exact location of mass radically dictates how hard it is to spin." },
      { title: "Calculating Inertia of Rings vs Disks", summary: "Why a hollow wheel violently resists spinning more than a solid wheel." },
      { title: "The Parallel Axis Theorem", summary: "Shifting the axis of rotation entirely away from the center of mass." },
      { title: "Rotational Kinetic Energy", summary: "The hidden massive energy reservoir stored entirely within the spin itself." },
      { title: "Work done by Torque", summary: "Scaling standard Joules into rotational paradigms." },
      { title: "The Rolling Sphere Race", summary: "Why a solid sphere always flawlessly beats a hollow hoop down a ramp." },
      { title: "Flywheels & Grid Storage", summary: "Using massive spinning cylinders as mechanical batteries to power cities." },
      { title: "Pulleys with Actual Mass", summary: "Abandoning the 'massless pulley' lie to solve brutal realistic tensions." },
      { title: "Atwood Machines Re-evaluated", summary: "How massive pulleys heavily bleed acceleration from falling blocks." }
    ]
  },
  {
    id: "angular-momentum",
    title: "19. Angular Momentum",
    description: "The terrifying and beautiful invisible ghost dictating spin continuity.",
    color: "bg-indigo-500",
    icon: "cyclone",
    lessons: [
      { title: "Defining Angular Momentum (L)", summary: "The rotational twin to linear momentum (L = Iω)." },
      { title: "The Strict Law of Conservation", summary: "Why a violently spinning system refuses to ever suddenly stop." },
      { title: "The Figure Skater Paradox", summary: "Why retracting your arms inherently forcefully multiplies your spin speed." },
      { title: "Gyroscopes & Stability", summary: "How spinning heavily grants magical immunity to tipping over." },
      { title: "Precession under Gravity", summary: "Why the Earth wobbles exactly like a dying spinning top." },
      { title: "Collisions that Rotate", summary: "When a linear bullet hits a wooden door, spawning violent rotation." },
      { title: "Pulsars & Neutron Stars", summary: "How collapsed stars spin at thousands of RPMs purely via conservation." },
      { title: "Helicopter Tail-Rotors", summary: "Why helicopters would violently spin backwards without a tail stabilization fan." },
      { title: "Conservation in Multi-Body Systems", summary: "Tracking the ghost variable across interacting massive gears." },
      { title: "Quantum Spin Analogs", summary: "A brief look at how angular momentum scales down to the chaotic atomic level." }
    ]
  },
  {
    id: "universal-gravitation",
    title: "20. Universal Gravitation",
    description: "Newton's supreme synthesis uniting the Apple and the Moon.",
    color: "bg-violet-500",
    icon: "public",
    lessons: [
      { title: "Newton's Grand Synthesis", summary: "The realization that celestial orbits follow the exact same rules as falling rocks." },
      { title: "The Inverse-Square Law", summary: "Why doubling the sheer distance brutally slashes gravitational pull by a factor of 4." },
      { title: "The Universal Constant (G)", summary: "Cavendish's agonizingly slow experiment to physically weigh the Earth." },
      { title: "Calculating Planet Mass", summary: "How we accurately know the mass of Jupiter without ever bringing a scale." },
      { title: "Kepler's Three Laws of Motion", summary: "The strict geometric geometry locking planets into elliptical cages." },
      { title: "Orbital Velocity", summary: "Exactly how violently fast you must launch to perpetually fall without hitting the floor." },
      { title: "Escape Velocity", summary: "The catastrophic speed required to sever Earth's gravitational tether permanently." },
      { title: "Gravitational Potential Energy (Macro)", summary: "Abandoning mgh for the terrifyingly massive U = -GMm/r." },
      { title: "Satellites and Geosynchro Orbit", summary: "Finding the exact altitude where a satellite seamlessly locks to Earth's rotation." },
      { title: "Black Holes (Tidal Forces)", summary: "When gravity gradients become so instantly severe they mathematically rip atoms apart." }
    ]
  }
];

// Open and alter JSON array
const jsonPath = path.join(__dirname, 'src', 'data', 'topics.json');
let topicsData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

topicsPhase5.forEach(topic => {
  // Add standardized properties for Phase 5 to seamlessly fit the current engine
  topic.lessons = topic.lessons.map((lesson, idx) => ({
    id: `l${idx + 1}`,
    title: lesson.title,
    summary: lesson.summary,
    difficulty: idx < 3 ? 'beginner' : (idx < 7 ? 'intermediate' : 'advanced'),
    visualType: 'gravity', // Will be customized if requested, 'gravity' is a generic orbit SVG
    explanation: [`Understanding ${lesson.title} requires mapping advanced mechanics.`],
    commonMistakes: ["Applying linear equations arbitrarily instead of angular conversions."],
    realLifeExample: "Tracking celestial bodies or massive industrial flywheels.",
    questions: [] // Will be perfectly populated by the algorithmic injector
  }));
  
  // Update visually relevant tags dynamically
  if (topic.id === 'universal-gravitation') {
     topic.lessons.forEach(l => l.visualType = 'galaxy-orbit');
  } else if (topic.id.includes('rotational')) {
     topic.lessons.forEach(l => l.visualType = 'circular-orbit');
  }

  topicsData.topics.push(topic);
});

fs.writeFileSync(jsonPath, JSON.stringify(topicsData, null, 2));

console.log('✅ Phase 5 (Rotational Mechanics & Gravity) mathematically appended yielding 50 new lessons!');
