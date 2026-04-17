import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const topicsPhase6 = [
  {
    id: "oscillations",
    title: "21. Oscillations & SHM",
    description: "Objects that rhythmically vibrate back and forth obey elegant sinusoidal mathematics.",
    color: "bg-cyan-500",
    icon: "graphic_eq",
    lessons: [
      { title: "What is Simple Harmonic Motion?", summary: "When the restoring force is directly proportional to displacement, motion becomes perfectly sinusoidal.", visualType: "pendulum" },
      { title: "The Spring-Mass Oscillator", summary: "A mass on a Hooke's Law spring is the purest physical SHM system.", visualType: "pendulum" },
      { title: "Amplitude, Period, Frequency", summary: "The three pillars defining every oscillation: how far, how long, how often.", visualType: "waves" },
      { title: "Phase Angle & Initial Conditions", summary: "Where the oscillation starts determines the entire future motion via a phase constant.", visualType: "waves" },
      { title: "Energy in SHM", summary: "Kinetic and potential energy endlessly trade places in a perfectly conserved oscillating dance.", visualType: "pendulum" },
      { title: "The Simple Pendulum", summary: "A mass swinging on a string approximates SHM only for small angles.", visualType: "pendulum" },
      { title: "The Physical Pendulum", summary: "When the swinging object isn't a point mass, its moment of inertia matters.", visualType: "pendulum" },
      { title: "Damped Oscillations", summary: "Real-world friction gradually saps energy from every swing, shrinking the amplitude.", visualType: "waves" },
      { title: "Forced Oscillations & Resonance", summary: "Drive a system at its natural frequency and the amplitude explodes catastrophically.", visualType: "waves" },
      { title: "Resonance Disasters", summary: "The Tacoma Narrows Bridge and wine glass shattering — when resonance kills.", visualType: "waves" }
    ]
  },
  {
    id: "waves-mechanics",
    title: "22. Mechanical Waves",
    description: "Energy propagating through a medium without transporting matter.",
    color: "bg-sky-500",
    icon: "waves",
    lessons: [
      { title: "Transverse vs Longitudinal Waves", summary: "Perpendicular displacement or parallel compression — the two fundamental wave types.", visualType: "waves" },
      { title: "Wave Speed, Wavelength, Frequency", summary: "The holy equation v = fλ connects all wave properties.", visualType: "waves" },
      { title: "The Wave Equation", summary: "Partial differential equations describing how disturbances propagate through space and time.", visualType: "waves" },
      { title: "Superposition Principle", summary: "When two waves meet, their displacements add algebraically — they pass through each other.", visualType: "waves" },
      { title: "Standing Waves & Harmonics", summary: "Nodes and antinodes form when identical waves travel in opposite directions.", visualType: "waves" },
      { title: "Interference: Constructive & Destructive", summary: "Waves can amplify each other or perfectly cancel into silence.", visualType: "waves" },
      { title: "Beats Phenomenon", summary: "Two slightly different frequencies create a pulsing amplitude modulation.", visualType: "sound" },
      { title: "The Doppler Effect", summary: "Why an ambulance siren's pitch drops as it flies past you.", visualType: "sound" },
      { title: "Shock Waves & Sonic Booms", summary: "When the source outruns its own waves, a violent cone of pressure forms.", visualType: "sound" },
      { title: "Wave Energy & Intensity", summary: "Energy carried by a wave spreads across area, dropping with the inverse square law.", visualType: "waves" }
    ]
  },
  {
    id: "thermodynamics-intro",
    title: "23. Temperature & Heat",
    description: "Heat is not a substance — it is the chaotic kinetic energy of trillions of colliding molecules.",
    color: "bg-red-500",
    icon: "thermostat",
    lessons: [
      { title: "Temperature vs Heat vs Internal Energy", summary: "Three critically different concepts that beginners constantly confuse.", visualType: "thermometer" },
      { title: "Thermal Equilibrium & the Zeroth Law", summary: "If A equals B and B equals C in temperature, then A equals C.", visualType: "thermometer" },
      { title: "Celsius, Fahrenheit, Kelvin", summary: "Why physicists exclusively use Kelvin — absolute zero is the floor.", visualType: "thermometer" },
      { title: "Specific Heat Capacity", summary: "Why water resists temperature change far more stubbornly than iron.", visualType: "heat" },
      { title: "Calorimetry", summary: "Mixing hot and cold substances to measure heat transfers in an insulated container.", visualType: "heat" },
      { title: "Phase Changes & Latent Heat", summary: "Ice absorbs enormous energy to melt without changing temperature at all.", visualType: "states" },
      { title: "Heat Transfer: Conduction", summary: "Molecular vibrations passing kinetic energy neighbor by neighbor through solids.", visualType: "heat" },
      { title: "Heat Transfer: Convection", summary: "Hot fluid rises, cold fluid sinks — creating circular currents that mix heat.", visualType: "heat" },
      { title: "Heat Transfer: Radiation", summary: "Electromagnetic waves carry energy across the vacuum of space without any medium.", visualType: "light" },
      { title: "Thermal Expansion", summary: "Why bridges have expansion joints and railroad tracks buckle in summer heat.", visualType: "thermometer" }
    ]
  },
  {
    id: "thermodynamics-laws",
    title: "24. Laws of Thermodynamics",
    description: "The four unbreakable commandments governing energy flow in the universe.",
    color: "bg-orange-500",
    icon: "local_fire_department",
    lessons: [
      { title: "Systems, Surroundings, Boundaries", summary: "Defining what is inside and outside the thermodynamic experiment.", visualType: "experiment-setup" },
      { title: "The First Law of Thermodynamics", summary: "Energy cannot be created or destroyed — the universe's ledger always balances.", visualType: "energy" },
      { title: "Work Done by Expanding Gas", summary: "A piston pushing outward converts internal thermal energy into mechanical motion.", visualType: "force" },
      { title: "PV Diagrams", summary: "Pressure-Volume graphs that map the entire thermodynamic story of a gas.", visualType: "graphs" },
      { title: "Isothermal & Adiabatic Processes", summary: "Constant temperature vs zero heat exchange — two idealized gas transformations.", visualType: "graphs" },
      { title: "Heat Engines & Efficiency", summary: "Converting chaotic heat into organized work — and why 100% efficiency is forbidden.", visualType: "energy" },
      { title: "The Second Law of Thermodynamics", summary: "Entropy of the universe always increases. Time has a direction.", visualType: "energy" },
      { title: "Entropy", summary: "The measure of molecular disorder — why shattered eggs never reassemble.", visualType: "energy" },
      { title: "Carnot Engine", summary: "The theoretical maximum efficiency engine that reality can never quite reach.", visualType: "graphs" },
      { title: "The Third Law & Absolute Zero", summary: "You can approach 0 Kelvin asymptotically but never physically reach it.", visualType: "thermometer" }
    ]
  },
  {
    id: "fluid-mechanics",
    title: "25. Fluid Mechanics",
    description: "The physics of liquids and gases — from blood flow to airplane lift.",
    color: "bg-teal-500",
    icon: "water_drop",
    lessons: [
      { title: "Density & Specific Gravity", summary: "Mass per unit volume determines whether objects sink like anchors or float like corks.", visualType: "buoyancy" },
      { title: "Pressure in Fluids", summary: "Force distributed over area — why deep-sea submarines face crushing atmospheric loads.", visualType: "pressure" },
      { title: "Pascal's Principle", summary: "Pressure applied to a confined fluid transmits equally in all directions — powering hydraulics.", visualType: "pressure" },
      { title: "Archimedes' Principle", summary: "The buoyant force equals the weight of displaced fluid. How ships float despite being steel.", visualType: "buoyancy" },
      { title: "Fluid Dynamics & Flow Rate", summary: "Continuity equation: what flows in must flow out at the same mass rate.", visualType: "buoyancy" },
      { title: "Bernoulli's Equation", summary: "Faster fluid = lower pressure. The principle that makes airplanes fly.", visualType: "buoyancy" },
      { title: "Viscosity & Turbulence", summary: "Honey flows slowly, water flows fast — molecular friction inside fluids.", visualType: "friction" },
      { title: "Surface Tension", summary: "Why water droplets are spherical and insects walk on ponds.", visualType: "buoyancy" },
      { title: "Capillary Action", summary: "Water climbs up narrow tubes against gravity — trees use this to drink.", visualType: "buoyancy" },
      { title: "Applications: Blood Flow & Aerodynamics", summary: "Bernoulli in your arteries and on aircraft wings — fluid physics saves lives.", visualType: "buoyancy" }
    ]
  }
];

// Open and alter JSON array
const jsonPath = path.join(__dirname, 'src', 'data', 'topics.json');
let topicsData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

topicsPhase6.forEach(topic => {
  topic.lessons = topic.lessons.map((lesson, idx) => ({
    id: `l${idx + 1}`,
    title: lesson.title,
    summary: lesson.summary,
    difficulty: idx < 3 ? 'beginner' : (idx < 7 ? 'intermediate' : 'advanced'),
    visualType: lesson.visualType,
    explanation: [`Understanding ${lesson.title} requires mapping the governing principles to observable systems.`],
    commonMistakes: ["Confusing temperature with heat, or mixing up scalar and vector quantities within this domain."],
    realLifeExample: "High-fidelity engineering systems rely fundamentally on these exact principles.",
    questions: []
  }));

  topicsData.topics.push(topic);
});

fs.writeFileSync(jsonPath, JSON.stringify(topicsData, null, 2));

console.log('✅ Phase 6 (Oscillations, Waves, Thermodynamics, Fluids) generated — 50 new lessons appended!');
