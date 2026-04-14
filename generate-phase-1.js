import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helper to generate consistent lesson structure
function createLesson(id, title, summary, simple, intuition, deep, visualType, difficulty) {
  return {
    id,
    title,
    summary,
    simple,
    extraSimple: `Think of it like this: ${summary.toLowerCase()}`,
    visualType: visualType || 'motion-diagram',
    difficulty,
    intuition,
    deep,
    examples: [
      `Real world example 1 of ${title.toLowerCase()}`,
      `Real world example 2 of ${title.toLowerCase()}`,
      `Real world example 3 of ${title.toLowerCase()}`
    ],
    mistakes: [
      {
        wrong: `Thinking ${title.toLowerCase()} means something else.`,
        right: `Actually, physics defines it very specifically.`
      },
      {
        wrong: `Confusing this with a similar daily-life word.`,
        right: `In physics, words have precise mathematical meanings.`
      }
    ],
    keyConcepts: [
      {
        title: `Core principle of ${title}`,
        explanation: `This concept is foundational to understanding the mechanics of the universe.`
      },
      {
        title: `Mathematical relationship`,
        explanation: `How this ties into equations and observable patterns.`
      }
    ],
    questions: [
      {
        id: `q1-${id}`,
        text: `What is the primary focus of ${title}?`,
        options: [
          `Its precise scientific definition.`,
          `How it looks.`,
          `Its historical origin.`,
          `None of the above.`
        ],
        correctIndex: 0,
        explanation: `Physics relies on precise definitions to build models.`
      },
      {
        id: `q2-${id}`,
        text: `Which of these is a common misconception about ${title}?`,
        options: [
          `That it is the same as everyday language.`,
          `That it has mathematical structure.`,
          `That it can be measured.`,
          `That it relates to reality.`
        ],
        correctIndex: 0,
        explanation: `Words often mean different things in physics than in regular conversation.`
      }
    ]
  };
}

const topics = [
  {
    id: "intro-universe",
    title: "1. Welcome to the Universe",
    description: "Build intuition and understand the real-world relevance of physics.",
    lessons: [
      createLesson("what-is-physics", "What is Physics?", "Physics is the study of how the universe works, from atoms to galaxies.", "Physics tries to figure out the basic rules of the game we call the universe.", "Imagine watching a chess game without knowing the rules. Eventually, you figure out how pieces move. Physics is doing that with nature.", "At its core, physics is about finding the fundamental laws that govern matter, energy, space, and time.", "galaxy-orbit", "beginner"),
      createLesson("why-physics-matters", "Why Physics Matters", "Physics is the foundation of all modern technology.", "Every gadget you use, from phones to cars, exists because of physics.", "Think of physics as the underlying operating system of reality. Engineering just builds apps on top of it.", "From semiconductor quantum mechanics to satellite relativity, applied physics drives human progress.", "circuit-flow", "beginner"),
      createLesson("physics-vs-biology", "Physics vs Other Sciences", "Physics is the most fundamental science; others build upon it.", "Chemistry is applied physics. Biology is applied chemistry.", "If science is a building, physics is the concrete foundation. Chemistry is the framing, biology is the interior.", "Complex systems in chemistry and biology ultimately reduce to physical interactions between fundamental particles.", "atom-model", "beginner"),
      createLesson("the-rules", "The Rules of the Game", "The universe follows strict, discoverable mathematical rules.", "Things don't happen randomly; they follow distinct patterns.", "Like a video game engine running code, the universe runs on laws of physics.", "Symmetries in nature lead to conservation laws, as proven by Noether's theorem, dictating strict behavioral bounds.", "pendulum", "beginner"),
      createLesson("scale-universe", "Scales of the Universe", "Physics covers everything from the unimaginably tiny to the cosmic.", "We study things smaller than atoms and larger than galaxies.", "Zoom in to a grain of sand, then zoom out to the whole Milky Way. Physics explains both.", "The universe operates on scales from the Planck length (10^-35 m) up to the observable universe (10^26 m).", "galaxy-orbit", "beginner")
    ]
  },
  {
    id: "language-labels",
    title: "2. The Language of Labels",
    description: "Physical quantities, units, and the SI system.",
    lessons: [
      createLesson("physical-quantities", "Physical Quantities", "A physical quantity is anything you can measure.", "If you can put a number on it, it's a physical quantity. Like length, time, or mass.", "You can measure how tall someone is, but you can't scientifically measure how 'cool' they are.", "A physical quantity consists of a numerical magnitude and a unit of measurement.", "ruler", "beginner"),
      createLesson("standard-units", "Standard Units", "Units give numbers meaning in physics.", "The number 5 means nothing until you say 5 'meters' or 5 'seconds'.", "Saying 'I am 10 tall' is useless. Are you 10 feet? 10 inches? 10 meters?", "Without standardized units, scientific communication and reproducible experiments are impossible.", "ruler", "beginner"),
      createLesson("the-si-system", "The SI System", "The SI system is the global standard language for measurements.", "Scientists all over the world agreed to use the exact same units, like meters and kilograms.", "It's like agreeing that the whole world will speak one language for science.", "The SI base units are meter, kilogram, second, ampere, kelvin, mole, and candela.", "ruler", "intermediate"),
      createLesson("base-vs-derived", "Base vs Derived Units", "Base units are fundamental; derived units are combinations.", "Length is base. Speed (length divided by time) is derived.", "Base units are primary colors. Derived units are the millions of colors you get by mixing.", "Speed (m/s), Force (N = kg*m/s^2), and Energy (J) are all derived from the 7 base units.", "speedometer", "intermediate"),
      createLesson("dimensional-analysis", "Checking the Units", "Dimensional analysis is checking your math by looking at the units.", "If you calculate speed and get 'kilograms', you know you made a mistake.", "It's like solving a jigsaw puzzle by making sure the picture lines up, not just the shapes.", "Equations must be dimensionally homogeneous. You cannot add meters to seconds.", "ruler", "advanced")
    ]
  },
  {
    id: "magnitude-direction",
    title: "3. Magnitude & Direction",
    description: "Intuition for scalars and vectors.",
    lessons: [
      createLesson("what-is-scalar", "What is a Scalar?", "Scalars have only a size (magnitude), with no direction.", "Scalars answer 'how much?' but not 'which way?'. Like temperature or mass.", "If I say it's 30 degrees outside, I don't say 30 degrees North. It's just an amount.", "Scalars are tensors of rank zero and are invariant under coordinate rotations.", "thermometer", "beginner"),
      createLesson("what-is-vector", "What is a Vector?", "Vectors have both a size (magnitude) AND a direction.", "Vectors answer 'how much?' AND 'which way?'. Like wind speed or pushing force.", "Saying 'walk 5 miles' is a scalar. Saying 'walk 5 miles North' is a vector.", "Vectors transform appropriately under rotation of the coordinate system.", "displacement-arrow", "beginner"),
      createLesson("scalar-vector-difference", "Scalars vs Vectors", "Direction changes everything in physics calculations.", "Adding scalars is just 2+2=4. Adding vectors depends on which way they point.", "Imagine pushing a box. The force matters, but so does whether you push left or right.", "Displacement, velocity, and force are vectors. Distance, speed, and mass are scalars.", "displacement-arrow", "intermediate"),
      createLesson("vector-arrows", "Drawing Vectors", "We represent vectors as arrows pointing in space.", "The length is the size, and the arrowhead shows the direction.", "The longer the arrow, the stronger the force or the faster the speed.", "Visual representation of vectors enables graphical addition and geometric problem solving.", "displacement-arrow", "intermediate"),
      createLesson("vector-components-preview", "Breaking Vectors Apart", "A diagonal vector is just horizontal and vertical parts combined.", "Walking Northeast is the same as walking North, then walking East.", "You can always split a diagonal move into straight up/down and left/right steps on a grid.", "Any 2D vector can be decomposed into an x-component (A*cosθ) and y-component (A*sinθ).", "displacement-arrow", "advanced")
    ]
  },
  {
    id: "art-of-measurement",
    title: "4. The Art of Measurement",
    description: "Accuracy, precision, errors, and estimation.",
    lessons: [
      createLesson("measurement-limits", "Limits of Measurement", "No measurement is ever perfectly exact.", "Every ruler, scale, or clock has a limit to how precisely it can measure.", "If your ruler only has inch marks, you can't measure exactly 1/16th of an inch.", "Uncertainty is an inherent part of all empirical physical data.", "ruler", "beginner"),
      createLesson("accuracy-vs-precision", "Accuracy vs Precision", "Accuracy is being correct. Precision is being consistent.", "A broken clock stuck at 12 is precise (consistent) but not accurate (correct).", "Think of a dartboard. Hits clustered far from the bullseye are precise but inaccurate. Hits centered around the bullseye are accurate.", "Systematic errors affect accuracy, while random errors affect precision.", "ruler", "intermediate"),
      createLesson("significant-figures", "Significant Figures", "Sig figs tell us how confident we are in a number.", "Writing 5.00m implies more exactness than writing just 5m.", "If a scale only measures to the nearest pound, writing 150.32 lbs is lying to the reader.", "Sig figs keep track of the weakest link of precision through calculations.", "ruler", "intermediate"),
      createLesson("scientific-notation", "Scientific Notation", "A clean way to write ridiculously large or small numbers.", "Instead of 300,000,000, we write 3 x 10^8.", "It's annoying to write out 20 zeros, so we just count the zeros and make it an exponent.", "Scientific notation naturally exposes the order of magnitude of a quantity.", "atom-model", "beginner"),
      createLesson("fermi-estimation", "Fermi Estimation", "The art of making highly educated, fast guesses.", "You can estimate how many piano tuners are in Chicago by breaking the problem into simple steps.", "It's 'back of the envelope' math. You get close enough to the real answer to be useful.", "Order-of-magnitude estimation checks whether a precise calculation makes logical sense.", "brain-think", "advanced")
    ]
  },
  {
    id: "visual-evidence",
    title: "5. Visual Evidence",
    description: "Reading and interpreting physics graphs.",
    lessons: [
      createLesson("why-graphs", "Why We Use Graphs", "Graphs compress complex relationships into pictures.", "A line on a graph shows you immediately if something is getting faster or slowing down.", "A picture is worth a thousand words, and a graph is worth a thousand data points.", "Graphs reveal the mathematical relationships (linear, quadratic, inverse) between continuous variables.", "motion-graph", "beginner"),
      createLesson("reading-axes", "Reading the Axes", "The x and y axes define what story the graph is telling.", "Always look at what is on the bottom (x) and the side (y) before looking at the line.", "A graph of 'Distance vs Time' tells a completely different story than 'Speed vs Time'.", "The independent variable is typically on the x-axis, and the dependent variable on the y-axis.", "motion-graph", "beginner"),
      createLesson("slope-meaning", "What the Slope Means", "The steepness of the line (slope) tells us the rate of change.", "A steep slope means reality is changing really fast.", "Walking uphill is harder because the slope is steep. A steep slope on a distance graph means high speed.", "Mathematically, slope = Δy/Δx. In kinematics, the slope of a position-time graph is velocity.", "motion-graph", "intermediate"),
      createLesson("area-under-curve", "Area Under the Curve", "The filled space under a graph's line holds hidden information.", "If the graph is Speed vs Time, the area under the line is the total distance traveled.", "It's like counting the blocks under the staircase to find the total volume.", "The geometric area beneath a curve represents the definite integral of the plotted function.", "motion-graph", "advanced"),
      createLesson("spotting-trends", "Spotting Data Trends", "Graphs show patterns: linear, curved, or inverse.", "A straight line means steady change. A curve means the change is speeding up or slowing down.", "If the graph looks like a smile, the value is growing faster and faster.", "Identifying proportionalities (y ∝ x, y ∝ x^2) is the first step in formulating a physical law.", "motion-graph", "intermediate")
    ]
  },
  {
    id: "the-toolkit",
    title: "6. The Toolkit",
    description: "Basic math for physics (applied context).",
    lessons: [
      createLesson("physics-algebra", "Algebra is about Balance", "In physics, algebra is just rearranging a truth to find what's missing.", "If F = m*a, and you want to know 'a', you just balance the equation to get 'a' alone.", "Think of an equation as a perfectly balanced scale. What you do to one side, you must do to the other.", "Algebra allows us to isolate variables without violating the established physical equality.", "math-symbols", "beginner"),
      createLesson("proportions", "Direct and Inverse Proportions", "How one thing changes when another thing changes.", "If you push twice as hard (direct), it moves twice as fast. If it's twice as heavy (inverse), it moves half as fast.", "When baking, double the flour means double the sugar. That's a direct proportion.", "y = kx (direct) and y = k/x (inverse) are ubiquitous patterns in physical laws.", "math-symbols", "intermediate"),
      createLesson("trig-sin-cos", "SOH-CAH-TOA Intuition", "Trig is just the math of right triangles.", "Sine and Cosine tell you how much of a diagonal line goes 'up' versus 'over'.", "If you walk up a ramp, sine helps figure out how high you climbed, and cosine tells you how far forward you moved.", "Trigonometric functions map angles to geometric component ratios for vector decomposition.", "triangle-angles", "advanced"),
      createLesson("geometry-in-physics", "Geometry in Space", "Shapes and angles determine how forces and light behave.", "Circles dictate orbits, and straight lines dictate light rays.", "The universe builds things using geometry, from honeycomb hexagons to spherical planets.", "Surface area to volume ratios govern heat loss, and inverse square laws stem from spherical geometry.", "triangle-angles", "intermediate"),
      createLesson("reading-equations", "Reading Equations like Sentences", "An equation is just a sentence written in math symbols.", "E=mc^2 translates to 'Energy is the exact same thing as mass, multiplied by the speed of light squared.'", "Don't just plug numbers in. Read what the letters are trying to tell you about the world.", "Every term in an equation has a physical counterpart, and equations describe the interactions of these counterparts.", "math-symbols", "advanced")
    ]
  },
  {
    id: "point-of-view",
    title: "7. Point of View",
    description: "Coordinates, origins, and reference frames.",
    lessons: [
      createLesson("the-origin", "The Importance of '0,0'", "Every measurement needs a starting point.", "To say a car is at 'position 5', you must first define where 'position 0' is.", "You can't say a town is '10 miles away' without clarifying '10 miles from where?'.", "Defining the origin is arbitrary but essential for establishing a coordinate system.", "coordinate-system", "beginner"),
      createLesson("reference-frames", "Frames of Reference", "Motion looks entirely different depending on where you are standing.", "To you, the train is moving. To the person on the train, YOU are moving backward.", "If you drop an apple in a moving car, it falls straight down relative to you, but moves forward relative to the road.", "All inertial frames of reference are equally valid for describing physical laws (Galilean relativity).", "coordinate-system", "intermediate"),
      createLesson("relative-speed", "Relative Speed", "Speeds add up or subtract when objects move together.", "Running 5 mph on a train going 100 mph means you're moving 105 mph to someone outside.", "Walking toward someone on an airport moving walkway feels twice as fast.", "Velocities are vectors that sum via V_ac = V_ab + V_bc.", "speedometer", "intermediate"),
      createLesson("1d-vs-2d", "1D vs 2D vs 3D Space", "Adding dimensions adds complexity but realism.", "1D is a number line. 2D is a flat map. 3D is our real world.", "Mario plays in 2D (left/right, up/down). Real life is 3D (forward/backward too).", "Higher dimensions require tracking independent, orthogonal vector components simultaneously.", "coordinate-system", "beginner"),
      createLesson("moving-frames", "Moving Frames (Accelerated)", "If your point of view is accelerating, physics gets weird.", "When a car slams the brakes, you feel thrown forward, even though no force pushed you.", "In an accelerating elevator, objects seem to fall faster or slower than normal gravity.", "Non-inertial reference frames experience 'fictitious forces' like the centrifugal or Coriolis force.", "coordinate-system", "advanced")
    ]
  },
  {
    id: "the-stage",
    title: "8. The Stage",
    description: "Foundations of time, space, and motion.",
    lessons: [
      createLesson("what-is-space", "What is Space?", "Space is the 3D grid where everything happens.", "It is the emptiness that separates stuff.", "Think of space as the empty stage where the play of the universe takes place.", "Classical mechanics treats space as an absolute, rigid background grid (Euclidean space).", "coordinate-system", "beginner"),
      createLesson("what-is-time", "What is Time?", "Time is how we track change and order events.", "Without time, everything would happen all at once.", "Time is the universe's internal clock keeping everything ticking forward.", "Classically, time is considered an absolute, universal progression independent of space.", "clock-time", "beginner"),
      createLesson("space-time-linked", "Space and Time Together", "Motion requires both space and time.", "You can't define 'fast' without knowing how much space you crossed in how much time.", "Miles per Hour is literally Space divided by Time.", "Velocity is physically defined as the time derivative of position (dx/dt).", "clock-time", "intermediate"),
      createLesson("object-particle", "The 'Particle' Model", "We pretend big things are tiny dots to make math easy.", "When calculating a car's speed, we ignore the spinning tires and just treat the car as a single moving dot.", "It's like looking at a person from far away until they are just a pixel.", "The center of mass allows complex extended bodies to be treated mathematically as point masses.", "atom-model", "beginner"),
      createLesson("continuous-motion", "Motion is Continuous", "Objects don't instantly teleport; they pass through every point in between.", "To go from 0 to 60 mph, a car must go through 1, 2... 30, and 59 mph.", "Unlike a TV screen showing fast pictures, real life is a perfectly smooth flow.", "Physical states evolve smoothly according to differential equations; there are no instantaneous discontinuous leaps.", "displacement-arrow", "intermediate")
    ]
  },
  {
    id: "logic-cycle",
    title: "9. The Logic Cycle",
    description: "Intro to scientific thinking and hypotheses.",
    lessons: [
      createLesson("observation", "Observation", "Physics begins by just looking at the world closely.", "Before you can do math, you have to notice that things fall when you drop them.", "Apples fall. The moon doesn't. Asking 'why?' is the start of physics.", "Empirical observation is the ultimate arbiter of truth in the physical sciences.", "brain-think", "beginner"),
      createLesson("hypothesis", "Forming a Hypothesis", "A hypothesis is a smart guess that can be proven wrong.", "Guessing 'ghosts did it' isn't science. Guessing 'heavier things fall faster' is science, because we can test it.", "It's an educated guess. 'If I push it harder, it will go faster.'", "A valid scientific hypothesis must be falsifiable and generate testable predictions.", "brain-think", "intermediate"),
      createLesson("experiment", "The Experiment", "Testing your guess in a fair, controlled way.", "If you drop a feather and a rock to test gravity, air messes it up. A vacuum chamber makes it a fair test.", "Like testing recipes, you only change one ingredient at a time to see what happens.", "Isolating variables ensures the observed effect is caused exactly by the manipulated independent variable.", "experiment-setup", "beginner"),
      createLesson("analysis", "Analyzing Data", "Looking at the numbers to see if you were right.", "Did the math match your guess? If not, the universe is telling you to guess again.", "It's like checking the scoreboard at the end of the game to see who won.", "Statistical analysis and plotting determine whether an experimental result is significant or just noise.", "motion-graph", "intermediate"),
      createLesson("scientific-law", "Theory vs Law", "Laws state WHAT happens. Theories explain WHY it happens.", "Newton's Law says gravity pulls. Einstein's Theory explains that gravity is curving space.", "A Law is a rule (like 'Stop at red lights'). A Theory explains the engine that makes the car stop.", "A theory is not a guess; it is the highest level of established scientific framework.", "brain-think", "advanced")
    ]
  },
  {
    id: "architects-mind",
    title: "10. The Architect's Mind",
    description: "Problem-solving mindset in physics.",
    lessons: [
      createLesson("draw-the-picture", "Step 1: Draw the Picture", "Always draw what is happening before doing math.", "Your brain understands a sketch of a box on a hill much better than a paragraph of text.", "Architects don't build without blueprints. Physicists don't solve without a drawing.", "Transforming text into a physical diagram is the crucial first step in modeling reality.", "displacement-arrow", "beginner"),
      createLesson("knows-and-unknowns", "Step 2: List the Knowns", "Write down what the problem tells you and what you need to find.", "Sort the information: v = 10, t = 5, find d. Now it's just a puzzle.", "Like gathering all the ingredients before you start cooking.", "Structuring parameters aligns memory with available equations mapping inputs to outputs.", "brain-think", "beginner"),
      createLesson("find-the-equation", "Step 3: Pick the Tool", "Find the physics rule that connects what you have to what you want.", "If you have time and speed, pick the equation that links them to distance.", "You use a hammer for nails and a screwdriver for screws. Pick the right equation.", "Identifying the linking principle (kinematics, energy, momentum) narrows the mathematical toolset.", "math-symbols", "intermediate"),
      createLesson("sanity-check", "Step 4: The Sanity Check", "Does your answer make sense in the real world?", "If you calculate that a person runs 500 mph, you messed up the math.", "Don't blindly trust calculators. If the answer feels crazy, double check it.", "Comparing numerical outputs against intuition prevents catastrophic unit or algebra errors.", "brain-think", "beginner"),
      createLesson("breaking-hard-tasks", "Breaking Down Hard Problems", "Big problems are just small problems stacked together.", "To find where the ball lands, first find how long it's in the air, THEN find how far it travels.", "You can't eat a whole pizza in one bite. Slice it up.", "Complex systems are tackled via superposition and decoupling independent vector axes.", "brain-think", "advanced")
    ]
  }
];

const fileData = { topics };

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'topics.json'), JSON.stringify(fileData, null, 2));

console.log('Phase 1 generation complete. Written to topics.json.');
