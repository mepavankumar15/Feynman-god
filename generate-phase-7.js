import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const topicsPhase7 = [
  {
    id: "electrostatics",
    title: "26. Electrostatics",
    description: "The invisible forces between stationary electric charges that silently govern atomic structure.",
    color: "bg-yellow-500",
    icon: "bolt",
    lessons: [
      { title: "Electric Charge & Quantization", summary: "Charge comes in discrete packets — you cannot have half an electron.", visualType: "electric" },
      { title: "Conductors vs Insulators", summary: "Why copper wires carry current while rubber gloves protect your hands.", visualType: "electric" },
      { title: "Coulomb's Law", summary: "The inverse-square force law governing the attraction and repulsion of charges.", visualType: "electric" },
      { title: "Electric Fields", summary: "Invisible force lines radiating outward from every charged particle in the universe.", visualType: "electric" },
      { title: "Field Lines & Visualization", summary: "Mapping the geometry of electric influence using directional arrows.", visualType: "electric" },
      { title: "Electric Potential Energy", summary: "The stored energy in the spatial configuration of charged particles.", visualType: "energy" },
      { title: "Voltage (Electric Potential)", summary: "Energy per unit charge — the pressure that drives electrons through wires.", visualType: "electric" },
      { title: "Equipotential Surfaces", summary: "Invisible contour maps where the voltage is identical at every point.", visualType: "electric" },
      { title: "Gauss's Law", summary: "The total electric flux through a closed surface equals the enclosed charge divided by ε₀.", visualType: "electric" },
      { title: "Capacitance & Capacitors", summary: "Storing electric energy by physically separating opposite charges across a gap.", visualType: "circuit" }
    ]
  },
  {
    id: "dc-circuits",
    title: "27. DC Circuits",
    description: "Electrons flowing through closed loops of wire, resistors, and batteries.",
    color: "bg-green-600",
    icon: "electrical_services",
    lessons: [
      { title: "Current & Charge Flow", summary: "Current is the rate of charge flow — measured in Amperes (Coulombs per second).", visualType: "circuit" },
      { title: "Ohm's Law (V=IR)", summary: "Voltage equals current times resistance — the most fundamental circuit equation.", visualType: "circuit" },
      { title: "Resistance & Resistivity", summary: "Why thinner, longer, hotter wires resist electron flow more aggressively.", visualType: "circuit" },
      { title: "Series Circuits", summary: "Components chained end-to-end share the same current but split the voltage.", visualType: "circuit" },
      { title: "Parallel Circuits", summary: "Components bridged side-by-side share voltage but split the current.", visualType: "circuit" },
      { title: "Kirchhoff's Voltage Law (KVL)", summary: "The sum of all voltage drops around any closed loop equals exactly zero.", visualType: "circuit" },
      { title: "Kirchhoff's Current Law (KCL)", summary: "Current entering a junction must equal current leaving — charge is conserved.", visualType: "circuit" },
      { title: "Power in Circuits (P=IV)", summary: "Electrical power measures how fast a device converts electrical energy to heat or work.", visualType: "circuit" },
      { title: "RC Circuits & Time Constants", summary: "How capacitors slowly charge and discharge through resistors on exponential curves.", visualType: "circuit" },
      { title: "Real-World Circuit Analysis", summary: "Combining series, parallel, Kirchhoff's laws, and Ohm's law to solve complex networks.", visualType: "circuit" }
    ]
  },
  {
    id: "magnetism",
    title: "28. Magnetism",
    description: "Moving charges create magnetic fields — the invisible twin of electricity.",
    color: "bg-rose-500",
    icon: "swap_horiz",
    lessons: [
      { title: "Magnetic Fields & Poles", summary: "Every magnet has a North and South pole — you can never isolate a monopole.", visualType: "magnet" },
      { title: "Magnetic Force on Moving Charges", summary: "A charged particle moving through a B-field feels a force perpendicular to both.", visualType: "magnet" },
      { title: "The Right-Hand Rule", summary: "Curl your fingers from velocity to B-field — your thumb points toward the force.", visualType: "magnet" },
      { title: "Force on Current-Carrying Wires", summary: "A wire carrying current through a magnetic field experiences a sideways push.", visualType: "magnet" },
      { title: "Magnetic Field from a Wire", summary: "Current-carrying wires generate circular magnetic field lines around themselves.", visualType: "magnet" },
      { title: "Solenoids & Electromagnets", summary: "Coiling wire into a helix concentrates the magnetic field into a powerful bar magnet.", visualType: "magnet" },
      { title: "Ampère's Law", summary: "The line integral of B around a closed loop equals μ₀ times the enclosed current.", visualType: "magnet" },
      { title: "Magnetic Flux", summary: "The total amount of magnetic field passing through a given surface area.", visualType: "magnet" },
      { title: "Ferromagnetism & Domains", summary: "Iron atoms align their tiny magnetic domains to create permanent magnets.", visualType: "magnet" },
      { title: "Applications: Motors & MRI", summary: "How magnetic forces spin electric motors and image the inside of your brain.", visualType: "magnet" }
    ]
  },
  {
    id: "electromagnetic-induction",
    title: "29. Electromagnetic Induction",
    description: "Changing magnetic fields create electric fields — the principle powering civilization.",
    color: "bg-fuchsia-500",
    icon: "settings_input_antenna",
    lessons: [
      { title: "Faraday's Law of Induction", summary: "A changing magnetic flux through a loop induces an electromotive force (voltage).", visualType: "magnet" },
      { title: "Lenz's Law", summary: "The induced current always opposes the change that caused it — nature resists.", visualType: "magnet" },
      { title: "Motional EMF", summary: "Moving a conductor through a magnetic field physically separates charges inside it.", visualType: "magnet" },
      { title: "Electric Generators", summary: "Spinning wire loops inside magnets convert mechanical rotation into AC electricity.", visualType: "circuit" },
      { title: "Transformers", summary: "Stepping voltage up or down using magnetically coupled coils — powering the grid.", visualType: "circuit" },
      { title: "Self-Inductance & Inductors", summary: "A coil resists changes in its own current by generating a back-EMF.", visualType: "circuit" },
      { title: "RL Circuits", summary: "Inductors create exponential current growth and decay, mirroring RC behavior.", visualType: "circuit" },
      { title: "Energy Stored in Magnetic Fields", summary: "Inductors store energy in their magnetic fields just as capacitors store it in electric fields.", visualType: "energy" },
      { title: "Eddy Currents", summary: "Circulating currents induced in bulk conductors that create drag and heating.", visualType: "magnet" },
      { title: "Maxwell's Equations (Overview)", summary: "Four elegant equations that unify all of electricity and magnetism into one framework.", visualType: "electric" }
    ]
  },
  {
    id: "optics",
    title: "30. Optics",
    description: "Light as rays, waves, and particles — how we see the universe.",
    color: "bg-amber-400",
    icon: "visibility",
    lessons: [
      { title: "The Nature of Light", summary: "Light is simultaneously an electromagnetic wave and a stream of photon particles.", visualType: "light" },
      { title: "Reflection & the Law of Reflection", summary: "Angle of incidence equals angle of reflection — mirrors obey strict geometry.", visualType: "light" },
      { title: "Refraction & Snell's Law", summary: "Light bends when entering a denser medium because it slows down.", visualType: "refraction" },
      { title: "Total Internal Reflection", summary: "Beyond the critical angle, light bounces completely — fiber optics rely on this.", visualType: "refraction" },
      { title: "Lenses: Converging & Diverging", summary: "Convex lenses focus light to a point; concave lenses spread it apart.", visualType: "light" },
      { title: "The Thin Lens Equation", summary: "1/f = 1/do + 1/di — relating focal length, object distance, and image distance.", visualType: "light" },
      { title: "Mirrors: Flat, Concave, Convex", summary: "How curved mirrors create real and virtual images at predictable locations.", visualType: "light" },
      { title: "Diffraction", summary: "Light waves bending around obstacles and through slits, proving wave nature.", visualType: "waves" },
      { title: "Young's Double Slit Experiment", summary: "The experiment that definitively proved light behaves as a wave.", visualType: "waves" },
      { title: "Polarization", summary: "Filtering light to oscillate in only one plane — sunglasses use this.", visualType: "light" }
    ]
  }
];

const jsonPath = path.join(__dirname, 'src', 'data', 'topics.json');
let topicsData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

topicsPhase7.forEach(topic => {
  topic.lessons = topic.lessons.map((lesson, idx) => ({
    id: `l${idx + 1}`,
    title: lesson.title,
    summary: lesson.summary,
    difficulty: idx < 3 ? 'beginner' : (idx < 7 ? 'intermediate' : 'advanced'),
    visualType: lesson.visualType,
    explanation: [`Understanding ${lesson.title} is essential for mastering the principles of ${topic.title.split('.')[1]?.trim() || topic.title}.`],
    commonMistakes: ["Confusing the direction of conventional current with electron flow, or mixing up field lines with force vectors."],
    realLifeExample: "This principle is critical in electrical engineering, medical imaging, telecommunications, and modern computing.",
    questions: []
  }));

  topicsData.topics.push(topic);
});

fs.writeFileSync(jsonPath, JSON.stringify(topicsData, null, 2));

console.log('✅ Phase 7 (Electrostatics, DC Circuits, Magnetism, EM Induction, Optics) generated — 50 new lessons appended!');
