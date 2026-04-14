import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const topics = [
  {
    id: "basics", title: "Pre-Physics Basics",
    lessons: [
      {
        id: "what-is-physics", title: "What is Physics?",
        summary: "Physics is the rulebook for everything in the universe — from jumping bugs to exploding stars.",
        simple: "Physics is the study of how everything moves, pushes, pulls, and interacts in the universe.",
        extraSimple: "Physics is just figuring out the rules of how stuff works — like why balls fall down and why ice melts.",
        intuition: "Imagine watching a giant chess game without knowing the rules. You see pieces move in patterns and slowly figure out the rules. Physics is exactly that — watching the universe and figuring out its hidden rules.",
        examples: ["Throwing a ball: Why does it curve back down? That's gravity and motion.", "Rubbing your hands: Why do they get warm? That's friction converting to heat.", "Your phone screen glowing: That's electricity powering tiny light-emitting crystals."],
        visualType: "physics",
        deep: "Physics is the fundamental natural science studying matter, energy, and their interactions through space and time. It uses mathematics as its language to describe laws that predict how the universe behaves — from subatomic particles to galaxy clusters.",
        mistakes: [{ mistake: "Thinking physics is just complicated math.", reality: "Math is merely the language. Physics is the actual ideas and concepts behind nature." }, { mistake: "Thinking physics only matters in science labs.", reality: "Walking, breathing, cooking, driving — every moment of your life is governed by physics." }],
        questions: [{ id: "q1", q: "What does physics primarily study?", options: ["Only math formulas", "Matter, energy, and their interactions", "Only chemistry reactions", "Only biology"], answer: 1 }, { id: "q2", q: "Which is an example of physics in daily life?", options: ["Memorizing dates", "A ball falling to the ground", "Writing an essay", "Painting a picture"], answer: 1 }]
      },
      {
        id: "units", title: "Units & SI System",
        summary: "Every measurement needs a 'name tag' — without units, numbers are meaningless.",
        simple: "Units tell us what a number means. '5' could be 5 dogs, 5 meters, or 5 seconds — the unit gives it meaning.",
        extraSimple: "Units are name tags for numbers. Without them, nobody knows what you're talking about!",
        intuition: "Imagine building a treehouse with a friend over the phone. You say 'cut a board 10 long.' Your friend cuts 10 inches, you meant 10 feet. The treehouse collapses. Units prevent chaos!",
        examples: ["A speedometer reads 60 mph — without 'mph' you wouldn't know if that's fast or slow.", "Mixing up miles and kilometers caused NASA to lose a $125 million Mars spacecraft!"],
        visualType: "units",
        deep: "The SI (Système International) defines seven base units: meter (length), kilogram (mass), second (time), ampere (current), kelvin (temperature), mole (amount), candela (luminosity). All other units are derived from combinations of these seven.",
        mistakes: [{ mistake: "Writing answers without units: 'The distance is 42.'", reality: "42 what? Lightyears? Millimeters? A number without a unit is completely meaningless." }, { mistake: "Thinking all measurement systems are equally used in science.", reality: "SI units are the universal standard in all scientific work worldwide." }],
        questions: [{ id: "q1", q: "What is the SI unit of time?", options: ["Hours", "Minutes", "Seconds", "Days"], answer: 2 }, { id: "q2", q: "Why did NASA lose a Mars spacecraft?", options: ["Bad fuel", "Mixed up metric and imperial units", "Solar wind", "Computer virus"], answer: 1 }]
      },
      {
        id: "vectors", title: "Scalars vs Vectors",
        summary: "Some measurements only need 'how much'; others also demand 'which way'.",
        simple: "Scalars have only a size (like temperature: 30°C). Vectors have both size AND direction (like wind: 20 mph East).",
        extraSimple: "Scalars tell you how much. Vectors tell you how much AND which way. It's that simple!",
        intuition: "A pirate map that says 'Walk 100 paces' is useless — you'll wander in circles. Add 'East' and suddenly you can find the treasure. Direction upgrades a scalar into a vector!",
        examples: ["Temperature is scalar: 'It's 30°C outside' — no direction needed.", "Wind is a vector: 'Wind blowing 20 mph towards the East' — direction matters!"],
        visualType: "vector",
        deep: "Scalar quantities are fully described by magnitude alone (mass, time, energy, speed, temperature). Vector quantities require both magnitude and direction (velocity, force, displacement, acceleration). Vectors are represented as arrows where length = magnitude and arrowhead = direction.",
        mistakes: [{ mistake: "Thinking speed and velocity are the same thing.", reality: "Speed is scalar (60 mph). Velocity is a vector (60 mph heading North)." }, { mistake: "Adding vectors like regular numbers.", reality: "3 miles North + 3 miles South = 0 displacement, not 6!" }],
        questions: [{ id: "q1", q: "Which is a vector quantity?", options: ["Mass", "Temperature", "Time", "Force"], answer: 3 }, { id: "q2", q: "What two things define a vector?", options: ["Color and size", "Magnitude and direction", "Weight and speed", "Length and width"], answer: 1 }]
      }
    ]
  },
  {
    id: "kinematics", title: "Motion (Kinematics)",
    lessons: [
      {
        id: "displacement", title: "Distance vs Displacement",
        summary: "Distance is your full journey; displacement is just the shortcut from start to finish.",
        simple: "Distance = total path traveled. Displacement = straight line from start to end, with direction.",
        extraSimple: "Distance is every step you took. Displacement is drawing a straight arrow from where you started to where you ended up.",
        intuition: "A bee flies in crazy loops around a garden but lands on a flower 1 foot from the hive. Distance flown: 100 feet of loops. Displacement: just 1 foot straight to the flower.",
        examples: ["Running one lap around a 400m track: distance = 400m, displacement = 0 (you're back at start!).", "Walking 3 blocks east then 4 blocks north: distance = 7 blocks, displacement = 5 blocks (diagonal shortcut)."],
        visualType: "displacement",
        deep: "Distance is a scalar measuring total path length. Displacement is a vector from initial to final position. Displacement magnitude is always ≤ distance. They're equal only when you move in a perfectly straight line without turning back.",
        mistakes: [{ mistake: "Assuming displacement equals distance.", reality: "Walk to school and back home, distance = 2 km, displacement = 0!" }, { mistake: "Forgetting displacement can be negative.", reality: "Moving backward from your reference point gives negative displacement." }],
        questions: [{ id: "q1", q: "You walk 5m North then 5m South. What is your displacement?", options: ["10m", "5m", "0m", "25m"], answer: 2 }, { id: "q2", q: "Distance is a ___; Displacement is a ___.", options: ["Vector; Scalar", "Scalar; Vector", "Both vectors", "Both scalars"], answer: 1 }]
      },
      {
        id: "velocity", title: "Speed vs Velocity",
        summary: "Speed says how fast; velocity says how fast AND where you're headed.",
        simple: "Speed = distance ÷ time (no direction). Velocity = displacement ÷ time (with direction).",
        extraSimple: "Speed is just your speedometer number. Velocity is that number PLUS pointing on a compass.",
        intuition: "In a dark room, someone yells 'Run at 10 mph!' — you crash into a wall because you only know speed. They yell 'Run 10 mph towards the door!' — that's velocity, and you escape.",
        examples: ["Car speedometer shows 60 mph — that's speed (no direction).", "GPS says '60 mph heading North on Highway 1' — that's velocity!"],
        visualType: "speed",
        deep: "Average speed = total distance / total time (scalar). Average velocity = total displacement / total time (vector). An object moving in a circle at constant speed has continuously changing velocity because its direction keeps changing.",
        mistakes: [{ mistake: "Thinking constant speed in a circle means constant velocity.", reality: "Direction changes every instant in a circle, so velocity constantly changes!" }, { mistake: "Confusing instantaneous and average velocity.", reality: "Average velocity uses total displacement; instantaneous is at one exact moment." }],
        questions: [{ id: "q1", q: "A car drives in a circle at 30 mph. Is its velocity constant?", options: ["Yes", "No, direction keeps changing", "Yes, speed is constant", "Depends on the circle"], answer: 1 }, { id: "q2", q: "To know velocity, you need magnitude and ___?", options: ["Color", "Temperature", "Direction", "Weight"], answer: 2 }]
      },
      {
        id: "acceleration", title: "Acceleration",
        summary: "Acceleration is the rate your velocity changes — speeding up, slowing down, or turning.",
        simple: "Acceleration = any change in velocity over time. Speeding up, slowing down, or turning are ALL acceleration.",
        extraSimple: "Acceleration is what you feel when the gas pedal goes down, the brakes hit, or the car turns a corner.",
        intuition: "Velocity is your bank balance. Acceleration is your paycheck (or bill). Without acceleration, your speed stays flat forever — nothing exciting happens.",
        examples: ["A dropped apple accelerates at 9.8 m/s² as gravity pulls it faster and faster.", "A car cruising at exactly 100 mph on a straight highway has ZERO acceleration."],
        visualType: "acceleration",
        deep: "Acceleration (a) is the rate of change of velocity: a = Δv/Δt. SI unit: m/s². Since velocity is a vector, acceleration occurs when speed changes, direction changes, or both. Deceleration is simply negative acceleration.",
        mistakes: [{ mistake: "Believing a fast-moving object is always accelerating.", reality: "Constant speed in a straight line = zero acceleration, no matter how fast." }, { mistake: "Thinking 'deceleration' is a separate concept.", reality: "Slowing down is just negative acceleration — the same formula applies." }],
        questions: [{ id: "q1", q: "A car travels at constant 60 mph in a straight line. Its acceleration is:", options: ["60 m/s²", "Positive", "Zero", "Negative"], answer: 2 }, { id: "q2", q: "What are the units of acceleration?", options: ["m/s", "m/s²", "kg·m/s", "N"], answer: 1 }]
      },
      {
        id: "freefall", title: "Free Fall & Motion Graphs",
        summary: "Free fall is nature's purest acceleration — and graphs tell the visual story of any motion.",
        simple: "Free fall means gravity is the ONLY force acting. On a distance-time graph, steeper slope = faster motion.",
        extraSimple: "Drop anything without air slowing it down and it speeds up at the same rate — that's free fall. Graphs are just pictures of how something moved.",
        intuition: "Galileo dropped a heavy cannonball and a light musket ball from the Leaning Tower of Pisa. They hit the ground at the same time! Without air resistance, ALL objects fall identically because gravity accelerates everything equally.",
        examples: ["An astronaut on the Moon dropped a hammer and a feather — they hit the ground together (no air!).", "A distance-time graph with a straight line means constant speed; a curve means speeding up or slowing down."],
        visualType: "freefall",
        deep: "In free fall near Earth's surface, all objects accelerate at g ≈ 9.8 m/s² regardless of mass. On a distance-time graph, slope = speed. On a velocity-time graph, slope = acceleration and area under the curve = displacement.",
        mistakes: [{ mistake: "Thinking heavier objects fall faster.", reality: "In a vacuum, a bowling ball and a feather fall at exactly the same rate!" }, { mistake: "Thinking a flat line on a velocity-time graph means stopped.", reality: "A flat line on a v-t graph means constant velocity — the object is still moving." }],
        questions: [{ id: "q1", q: "In free fall (no air), which hits the ground first: a rock or a feather?", options: ["The rock", "The feather", "They hit at the same time", "Neither falls"], answer: 2 }, { id: "q2", q: "On a distance-time graph, what does a steeper slope mean?", options: ["Slower speed", "Faster speed", "No movement", "Going backward"], answer: 1 }]
      }
    ]
  },
  {
    id: "forces", title: "Forces & Newton's Laws",
    lessons: [
      {
        id: "what-is-force", title: "What is Force?",
        summary: "A force is any push or pull that can change how an object moves.",
        simple: "Force is a push or pull. It can start motion, stop motion, change direction, or change shape.",
        extraSimple: "Forces are pushes and pulls. You push a door open. Gravity pulls you down. Friction pulls your shoes backward on the floor.",
        intuition: "Forces are invisible hands. Gravity is an invisible hand pulling everything toward Earth's center. Friction is an invisible hand grabbing your shoes each step. Magnetism is an invisible hand reaching across space to grab metal.",
        examples: ["Kicking a soccer ball: your foot's push force launches it forward.", "A book sitting on a table: gravity pulls it down, but the table pushes it up — forces balance!"],
        visualType: "force",
        deep: "Force is a vector quantity measured in Newtons (N). Contact forces require physical touch (friction, tension, normal force). Non-contact forces act at a distance (gravity, magnetism, electrostatic). When all forces on an object cancel out (net force = 0), the object is in equilibrium.",
        mistakes: [{ mistake: "Thinking stationary objects have no forces acting on them.", reality: "A book on a table has gravity pulling down AND the table pushing up — they just balance perfectly." }, { mistake: "Believing force is needed to keep something moving.", reality: "Force is only needed to START or CHANGE motion. In space, a push sends you gliding forever." }],
        questions: [{ id: "q1", q: "What is a force?", options: ["Only a push", "Only a pull", "A push or a pull", "A type of energy"], answer: 2 }, { id: "q2", q: "What unit measures force?", options: ["Joule", "Watt", "Newton", "Kilogram"], answer: 2 }]
      },
      {
        id: "newtons-first", title: "Newton's First Law (Inertia)",
        summary: "Objects are lazy: they resist any change to what they're currently doing.",
        simple: "An object at rest stays at rest. An object in motion stays in motion. Unless a force disturbs it.",
        extraSimple: "Things are lazy. Still things want to stay still. Moving things want to keep moving. You need a force to change their mind.",
        intuition: "Slide a hockey puck on ice. Without friction, it would glide forever without slowing down. It doesn't need an engine — its laziness (inertia) keeps it going.",
        examples: ["Yanking a tablecloth quickly: dishes stay put because their inertia resists the pull.", "When a car brakes suddenly, your body lurches forward — your body's inertia wants to keep moving at 60 mph!"],
        visualType: "force",
        deep: "Newton's First Law: An object remains at rest or in uniform straight-line motion unless acted upon by a net external force. Inertia is the property of matter that resists changes in motion. Mass is the quantitative measure of inertia — more mass means harder to start or stop.",
        mistakes: [{ mistake: "Thinking you need constant force to maintain constant motion.", reality: "In the absence of friction, one push keeps an object moving forever." }, { mistake: "Thinking inertia is a force.", reality: "Inertia is a property of matter, not a force. It describes resistance to change, not a push or pull." }],
        questions: [{ id: "q1", q: "What is inertia?", options: ["A type of energy", "Resistance to changes in motion", "A unit of force", "The speed of an object"], answer: 1 }, { id: "q2", q: "Which has MORE inertia?", options: ["A tennis ball", "A bowling ball", "They're equal", "Neither has inertia"], answer: 1 }]
      },
      {
        id: "newtons-second", title: "Newton's Second Law (F=ma)",
        summary: "The heavier the object, the harder you must push to accelerate it.",
        simple: "Force = mass × acceleration. More mass needs more force. More force creates more acceleration.",
        extraSimple: "Heavy things need big pushes. Light things need small pushes. That's F = ma.",
        intuition: "Kick a beach ball — it rockets away. Kick a bowling ball with the same force — you break your toe and it barely moves. Same force, different mass, wildly different acceleration.",
        examples: ["A motorcycle accelerates much faster than a truck with the same engine force — less mass!", "Pushing an empty shopping cart is easy; a full one takes serious effort."],
        visualType: "force",
        deep: "Newton's Second Law: F_net = ma. Force (Newtons) = mass (kg) × acceleration (m/s²). Acceleration is directly proportional to net force and inversely proportional to mass. This is the most important equation in classical mechanics.",
        mistakes: [{ mistake: "Confusing mass and weight.", reality: "Mass is how much stuff (kg). Weight is the gravitational force on that mass (Newtons): W = mg." }, { mistake: "Forgetting it's NET force, not just any single force.", reality: "Multiple forces can act on an object. F=ma uses the sum of ALL forces." }],
        questions: [{ id: "q1", q: "If mass doubles but force stays the same, acceleration:", options: ["Doubles", "Halves", "Stays same", "Triples"], answer: 1 }, { id: "q2", q: "What is the SI unit of force?", options: ["kg", "m/s²", "Newton (kg·m/s²)", "Joule"], answer: 2 }]
      },
      {
        id: "newtons-third", title: "Newton's Third Law & Friction",
        summary: "Every action has an equal and opposite reaction — and friction is the force that resists sliding.",
        simple: "Push something and it pushes you back equally hard. Friction is the grip between surfaces that resists sliding motion.",
        extraSimple: "You can't touch anything without it touching you back just as hard. And friction is why your shoes don't slip on the floor.",
        intuition: "Stand on ice skates facing a wall. Shove the wall — the wall shoves YOU backward and you slide away. You gave the action; the wall gave the equal reaction. Friction is like Velcro between surfaces — rougher surfaces = more grip.",
        examples: ["Rockets work in space by pushing hot gas downward; the gas pushes the rocket upward.", "Walking: your foot pushes the ground backward, friction pushes you forward."],
        visualType: "friction",
        deep: "Newton's Third Law: For every force, there is an equal and opposite reaction force acting on a different object. These pairs never cancel because they act on different bodies. Friction force depends on the normal force and the coefficient of friction: f = μN. Static friction prevents motion; kinetic friction opposes ongoing motion.",
        mistakes: [{ mistake: "Thinking action-reaction forces cancel each other out.", reality: "They act on DIFFERENT objects, so they never cancel!" }, { mistake: "Thinking friction always slows things down.", reality: "Without friction, you couldn't walk, drive, or even hold a pencil. Friction enables motion too!" }],
        questions: [{ id: "q1", q: "You push a wall with 50N. The wall pushes you with:", options: ["0N", "25N", "50N", "100N"], answer: 2 }, { id: "q2", q: "Friction between two surfaces depends on:", options: ["Color of surfaces", "Surface roughness and normal force", "Temperature only", "Speed only"], answer: 1 }]
      }
    ]
  },
  {
    id: "energy", title: "Work, Energy & Power",
    lessons: [
      {
        id: "work", title: "Work in Physics",
        summary: "Work means using force to actually move something — no movement, no work!",
        simple: "Work = Force × Distance (in the direction of force). Push a wall all day? If it doesn't move, zero work done.",
        extraSimple: "Work only counts when you push AND the thing actually moves. No movement = no work, even if you're exhausted!",
        intuition: "Push a concrete wall for 5 hours. You'll be drenched in sweat, but physics says you did ZERO work because the wall didn't budge. Your force must cause displacement for work to count.",
        examples: ["Pushing a stalled car down the street: massive work (force + movement).", "Holding a heavy box perfectly still above your head: zero physics work (no displacement)."],
        visualType: "energy",
        deep: "Work (W) = F × d × cos(θ), where θ is the angle between force and displacement. Unit: Joule (J) = 1 N·m. If force is perpendicular to motion (like carrying a box horizontally while gravity pulls down), work by that force is zero.",
        mistakes: [{ mistake: "Equating physical exhaustion with physics work.", reality: "Your muscles burn energy internally, but physics work requires external displacement." }, { mistake: "Forgetting the direction matters.", reality: "Only the component of force in the direction of movement counts as work." }],
        questions: [{ id: "q1", q: "You push a wall but it doesn't move. Work done =", options: ["A lot", "Some", "Zero", "Negative"], answer: 2 }, { id: "q2", q: "Work is measured in:", options: ["Newtons", "Joules", "Watts", "Kilograms"], answer: 1 }]
      },
      {
        id: "ke-pe", title: "Kinetic & Potential Energy",
        summary: "Energy is either stored and waiting (potential) or actively raging (kinetic).",
        simple: "Potential energy = stored energy (height, stretch, chemical). Kinetic energy = energy of motion.",
        extraSimple: "A rock on a cliff has stored energy (potential). Push it off and that stored energy becomes movement energy (kinetic)!",
        intuition: "A pulled-back bowstring holds invisible 'potential' energy in its tension. Release your fingers — all that tension converts into the arrow's 'kinetic' motion energy instantly.",
        examples: ["Water behind a dam: massive gravitational potential energy waiting to be released.", "A speeding bullet: extreme kinetic energy due to high velocity (KE = ½mv²)."],
        visualType: "pendulum",
        deep: "Gravitational PE = mgh (mass × gravity × height). Kinetic Energy KE = ½mv². As an object falls, PE decreases and KE increases. Elastic PE is stored in springs and stretched materials. Chemical PE is stored in bonds (food, fuel, batteries).",
        mistakes: [{ mistake: "Thinking energy disappears at the bottom of a roller coaster.", reality: "All PE has converted to KE — the cart is moving at maximum speed!" }, { mistake: "Ignoring velocity's squared effect on KE.", reality: "Double the speed = 4× the kinetic energy. Speed matters enormously!" }],
        questions: [{ id: "q1", q: "A ball at the top of a hill has mostly:", options: ["Kinetic energy", "Potential energy", "No energy", "Sound energy"], answer: 1 }, { id: "q2", q: "KE depends on mass and:", options: ["Height", "Velocity (squared!)", "Color", "Temperature"], answer: 1 }]
      },
      {
        id: "conservation", title: "Conservation of Energy & Power",
        summary: "Energy can never be created or destroyed — only transformed. Power is how fast you transform it.",
        simple: "Total energy in a closed system never changes — it just shifts forms. Power = energy transferred per second.",
        extraSimple: "Energy never dies. It just shape-shifts — like light becoming heat, or motion becoming sound. Power is how quickly the shape-shifting happens.",
        intuition: "Energy is like money. Buying a pizza doesn't destroy your $10 — it transforms into food. The universe never loses a single dime of energy; it just converts between accounts.",
        examples: ["A pendulum swings: PE→KE→PE→KE endlessly (minus tiny friction losses to heat).", "A 100W bulb converts 100 Joules of electrical energy every second into light and heat."],
        visualType: "energy",
        deep: "Conservation of Energy: In an isolated system, total energy remains constant. Energy transforms: kinetic ↔ potential ↔ thermal ↔ electrical ↔ chemical ↔ nuclear. Power (P) = Work/Time = Energy/Time. Unit: Watt (W) = 1 J/s. 1 horsepower ≈ 746 Watts.",
        mistakes: [{ mistake: "Thinking energy 'gets used up' when fuel burns.", reality: "Chemical energy converts to heat, light, sound, and kinetic energy — nothing is destroyed." }, { mistake: "Confusing energy and power.", reality: "Energy is the total amount (Joules). Power is the rate — how FAST you use energy (Watts = J/s)." }],
        questions: [{ id: "q1", q: "Can energy be destroyed?", options: ["Yes, fire destroys it", "Yes, it fades over time", "No, it only transforms", "Only in black holes"], answer: 2 }, { id: "q2", q: "Power is measured in:", options: ["Joules", "Newtons", "Watts", "Kilograms"], answer: 2 }]
      }
    ]
  },
  {
    id: "momentum", title: "Momentum",
    lessons: [
      {
        id: "what-is-momentum", title: "Momentum & Collisions",
        summary: "Momentum is the 'oomph' of a moving object — mass times velocity — and it's always conserved in collisions.",
        simple: "Momentum = mass × velocity. A heavy slow truck and a light fast bullet can have equal momentum. In any collision, total momentum before = total momentum after.",
        extraSimple: "Momentum is how hard it is to stop something. A charging elephant has way more momentum than a rolling marble, even at the same speed!",
        intuition: "Imagine catching a baseball vs catching a cannonball moving at the same speed. The cannonball's extra mass gives it enormously more momentum — that's why it would send you flying backward.",
        examples: ["A pool break shot: cue ball transfers its momentum to the other balls.", "A gun recoils backward when fired — the bullet's forward momentum must be balanced by the gun's backward momentum."],
        visualType: "momentum",
        deep: "Momentum (p) = mv (vector). Conservation of Momentum: in an isolated system, total momentum before interaction equals total after. Elastic collisions conserve both momentum AND kinetic energy. Inelastic collisions conserve momentum but objects may stick together, losing KE to heat/sound.",
        mistakes: [{ mistake: "Thinking a heavier object always has more momentum.", reality: "A tiny bullet going 900 m/s can have more momentum than a slow-walking person." }, { mistake: "Thinking momentum can be created from nothing.", reality: "If a gun gains momentum backward, the bullet gains exactly equal momentum forward." }],
        questions: [{ id: "q1", q: "Momentum equals:", options: ["Mass × acceleration", "Force × distance", "Mass × velocity", "Energy × time"], answer: 2 }, { id: "q2", q: "In a collision, total momentum:", options: ["Doubles", "Is halved", "Disappears", "Is conserved"], answer: 3 }]
      }
    ]
  },
  {
    id: "gravity", title: "Gravity",
    lessons: [
      {
        id: "what-is-gravity", title: "Gravity & Weight vs Mass",
        summary: "Gravity is the universal force of attraction between any two masses — and weight is simply gravity's pull on your mass.",
        simple: "Every object with mass attracts every other object. Weight = mass × gravity. Your mass stays the same everywhere; your weight changes depending on the planet's gravity.",
        extraSimple: "Gravity is the invisible pull between everything with mass. You weigh less on the Moon because its gravity is weaker — but you still have the same amount of 'stuff' (mass)!",
        intuition: "Mass is how much 'stuff' you're made of — like counting your Lego bricks. Weight is how hard gravity pulls on those bricks. On the Moon, you have the same bricks but gravity pulls gentler, so you weigh less and can jump higher!",
        examples: ["You weigh about 1/6th on the Moon but your mass is identical.", "Earth's gravity makes everything accelerate downward at 9.8 m/s², whether it's a coin or a car."],
        visualType: "gravity",
        deep: "Newton's Law of Universal Gravitation: F = G(m₁m₂)/r². Every mass attracts every other mass. g at Earth's surface ≈ 9.8 m/s². Weight W = mg (Newtons). Mass is intrinsic (kg); weight depends on local gravity. Astronauts in orbit experience weightlessness because they're in continuous free fall, not because gravity is absent.",
        mistakes: [{ mistake: "Thinking there's no gravity in space.", reality: "Gravity extends infinitely! Astronauts float because they're falling around Earth, not because gravity stopped." }, { mistake: "Using 'mass' and 'weight' interchangeably.", reality: "Mass = amount of matter (kg). Weight = gravitational force (Newtons). Completely different things!" }],
        questions: [{ id: "q1", q: "Your mass on the Moon compared to Earth is:", options: ["Less", "More", "Exactly the same", "Zero"], answer: 2 }, { id: "q2", q: "Weight is measured in:", options: ["Kilograms", "Newtons", "Meters", "Joules"], answer: 1 }]
      }
    ]
  },
  {
    id: "matter", title: "Properties of Matter",
    lessons: [
      {
        id: "states", title: "States of Matter & Density",
        summary: "Matter comes in three main states — solid, liquid, gas — and density tells you how tightly the matter is packed.",
        simple: "Solids have fixed shape. Liquids take the container's shape. Gases fill everything. Density = mass / volume — how much stuff is crammed into a space.",
        extraSimple: "Solids are like a packed classroom — nobody moves. Liquids are like students walking in hallways — they flow. Gases are like kids at recess — running everywhere!",
        intuition: "Why does a steel ship float but a steel nail sinks? The ship is shaped to trap air, making its overall density less than water. Density isn't just about the material — it's mass divided by TOTAL volume.",
        examples: ["Oil floats on water because oil is less dense.", "A helium balloon rises because helium gas is less dense than the surrounding air."],
        visualType: "states",
        deep: "Density (ρ) = mass/volume. Unit: kg/m³. Solids: molecules vibrate in fixed lattice positions. Liquids: molecules slide past each other freely. Gases: molecules move randomly with large separations. Phase transitions occur at specific temperatures (melting point, boiling point).",
        mistakes: [{ mistake: "Thinking bigger objects are always heavier.", reality: "A giant balloon is big but very light. A tiny lead ball is small but heavy. Density is what matters." }, { mistake: "Thinking ice sinks in water.", reality: "Ice is LESS dense than water (molecules form an open crystal structure), which is why it floats!" }],
        questions: [{ id: "q1", q: "Density equals:", options: ["Mass × volume", "Mass ÷ volume", "Weight × height", "Force × distance"], answer: 1 }, { id: "q2", q: "Why does ice float?", options: ["It's colder", "It's less dense than water", "Gravity doesn't affect ice", "Water pushes it up"], answer: 1 }]
      },
      {
        id: "pressure-buoyancy", title: "Pressure & Buoyancy",
        summary: "Pressure is force concentrated on an area, and buoyancy is the upward push a fluid exerts on submerged objects.",
        simple: "Pressure = Force ÷ Area. Smaller area = more pressure. Buoyancy is the upward force from a fluid — if it exceeds weight, the object floats.",
        extraSimple: "High heels sink into sand because all your weight is on a tiny point. Snowshoes don't because your weight spreads out. And boats float because water pushes them up!",
        intuition: "Lie on a bed of nails and you're fine — your weight spreads across hundreds of points. Step on ONE nail and it pierces you. Same force, dramatically different pressure because of the area.",
        examples: ["Knives cut because force is concentrated on the blade's thin edge — tiny area = enormous pressure.", "A submarine controls its depth by adjusting its density relative to the surrounding water."],
        visualType: "buoyancy",
        deep: "Pressure (P) = F/A. Unit: Pascal (Pa) = 1 N/m². Fluid pressure increases with depth: P = ρgh. Archimedes' Principle: buoyant force equals the weight of fluid displaced. Object floats when its average density < fluid density.",
        mistakes: [{ mistake: "Thinking heavy objects always sink.", reality: "A massive aircraft carrier floats because its overall density (steel + trapped air) is less than water." }, { mistake: "Thinking pressure only pushes downward.", reality: "Fluid pressure acts equally in ALL directions at a given depth." }],
        questions: [{ id: "q1", q: "If you double the area while keeping force constant, pressure:", options: ["Doubles", "Halves", "Stays same", "Quadruples"], answer: 1 }, { id: "q2", q: "An object floats when:", options: ["It's big", "Its density < fluid density", "It's cold", "It's smooth"], answer: 1 }]
      }
    ]
  },
  {
    id: "waves-sound", title: "Waves & Sound",
    lessons: [
      {
        id: "wave-basics", title: "What is a Wave?",
        summary: "A wave is a traveling disturbance that carries energy without permanently moving matter.",
        simple: "Waves carry energy from place to place. The material itself just vibrates in place — like a stadium wave where people stand and sit but nobody runs sideways.",
        extraSimple: "A wave is a traveling wiggle. Drop a stone in water — the ripple travels outward, but the water itself just bobs up and down in place.",
        intuition: "Imagine a stadium crowd doing 'the wave.' Each person simply stands up and sits down in their seat. Nobody runs to the other end of the stadium. Yet the visible pattern zooms around the entire arena. That's exactly how waves work — energy travels, matter vibrates locally.",
        examples: ["Ocean waves: water molecules move in small circles while the wave pattern travels horizontally.", "Shaking a rope: the bump travels along the rope but each piece of rope just moves up and down."],
        visualType: "waves",
        deep: "Transverse waves: particles vibrate perpendicular to wave direction (light, rope waves). Longitudinal waves: particles vibrate parallel to wave direction (sound, spring compression). Key properties: Amplitude (height), Wavelength λ (distance per cycle), Frequency f (cycles/second, Hz). Wave speed: v = fλ.",
        mistakes: [{ mistake: "Thinking waves transport matter across distances.", reality: "Waves transport ENERGY. The medium itself stays mostly in place." }, { mistake: "Thinking all waves need a medium.", reality: "Sound needs air/water/solid. But light travels through empty space — no medium needed!" }],
        questions: [{ id: "q1", q: "Waves transfer:", options: ["Matter from A to B", "Energy from A to B", "Atoms from A to B", "Weight from A to B"], answer: 1 }, { id: "q2", q: "Wave speed equals:", options: ["Amplitude × time", "Frequency × wavelength", "Mass × velocity", "Force × distance"], answer: 1 }]
      },
      {
        id: "sound-waves", title: "Sound Waves",
        summary: "Sound is a longitudinal wave created by vibrations traveling through matter — it cannot travel through empty space.",
        simple: "Sound is vibrating air molecules bumping into each other in a chain reaction. Higher frequency = higher pitch. Greater amplitude = louder volume.",
        extraSimple: "Sound is air molecules playing dominoes — each one bumps the next until the chain reaction reaches your ear!",
        intuition: "Imagine a long line of people standing shoulder-to-shoulder. The first person pushes the second, who pushes the third, and so on. The push travels down the line. That's literally how sound travels through air — molecules pushing neighboring molecules.",
        examples: ["In space, no one can hear you scream — there are no air molecules to carry the vibrations!", "A guitar string vibrates, pushing air molecules back and forth, creating sound waves that reach your ear."],
        visualType: "sound",
        deep: "Sound waves are longitudinal — compressions (high pressure) and rarefactions (low pressure) travel through the medium. Speed of sound in air ≈ 343 m/s (varies with temperature). Pitch correlates with frequency (Hz). Volume correlates with amplitude. Sound cannot travel in a vacuum.",
        mistakes: [{ mistake: "Thinking sound can travel through space.", reality: "Space is a vacuum — no molecules to vibrate, so sound cannot propagate." }, { mistake: "Thinking louder sounds are higher pitched.", reality: "Loudness = amplitude. Pitch = frequency. They're completely independent!" }],
        questions: [{ id: "q1", q: "Sound cannot travel through:", options: ["Water", "Steel", "A vacuum", "Air"], answer: 2 }, { id: "q2", q: "Pitch is determined by:", options: ["Amplitude", "Frequency", "Speed", "Density"], answer: 1 }]
      }
    ]
  },
  {
    id: "heat", title: "Heat & Temperature",
    lessons: [
      {
        id: "heat-vs-temp", title: "Heat vs Temperature",
        summary: "Temperature measures how fast molecules jiggle; heat is the total energy transferred between objects at different temperatures.",
        simple: "Temperature = average speed of molecule vibrations. Heat = energy flowing from hot to cold. A spark is hot (high temp) but carries little heat. A bathtub is warm (low temp) but holds enormous heat.",
        extraSimple: "Temperature is how hyper each molecule is. Heat is the total hyperactivity of ALL the molecules combined flowing from hot stuff to cold stuff.",
        intuition: "A tiny spark at 3000°C lands on your hand — barely any pain because it has almost no molecules to transfer energy. But jumping into a 40°C hot tub overwhelms you because trillions of water molecules are dumping their heat into you simultaneously.",
        examples: ["A cup of boiling water (100°C) has less heat energy than a swimming pool at 25°C because the pool has enormously more molecules.", "Metal feels colder than wood at the same temperature because metal conducts heat away from your hand faster."],
        visualType: "heat",
        deep: "Temperature (°C, K) measures average kinetic energy of molecules. Heat (Q, Joules) is thermal energy transferred due to a temperature difference. Heat always flows from higher to lower temperature until thermal equilibrium. Three transfer mechanisms: conduction (direct contact), convection (fluid flow), radiation (electromagnetic waves).",
        mistakes: [{ mistake: "Thinking heat and temperature are the same thing.", reality: "Temperature is an average per molecule. Heat is total energy transferred — they're fundamentally different." }, { mistake: "Thinking cold 'flows' into warm objects.", reality: "There's no such thing as 'cold.' Heat always flows FROM hot TO cold. Cold objects just have less heat energy." }],
        questions: [{ id: "q1", q: "Heat always flows from:", options: ["Cold to hot", "Hot to cold", "Left to right", "Bottom to top"], answer: 1 }, { id: "q2", q: "Which holds more heat energy?", options: ["A spark at 3000°C", "An ocean at 15°C", "They're equal", "Cannot compare"], answer: 1 }]
      },
      {
        id: "heat-transfer", title: "Heat Transfer & Thermal Expansion",
        summary: "Heat moves by conduction (touch), convection (flow), and radiation (invisible rays) — and most materials expand when heated.",
        simple: "Conduction: heat through direct contact (touching a hot pan). Convection: heat carried by moving fluid (boiling water). Radiation: heat through invisible waves (sunlight warming your face).",
        extraSimple: "Touch a hot pot — that's conduction. Watch soup swirl in a boiling pot — that's convection. Feel the sun's warmth — that's radiation. And when things get hot, they grow a little bit!",
        intuition: "Conduction is like a line of people passing a hot potato hand-to-hand. Convection is like the hot potato being carried by someone running across the room. Radiation is like throwing the hot potato directly through the air to someone far away.",
        examples: ["Metal bridge joints have gaps for thermal expansion — without them, bridges would buckle in summer heat!", "Convection makes hot air rise, which is why the top floor of a house is always warmest."],
        visualType: "heat",
        deep: "Conduction: energy transfer through molecular collisions in solids. Metals are excellent conductors. Convection: bulk movement of heated fluid (natural: density-driven; forced: fan/pump). Radiation: electromagnetic wave emission — no medium needed (how the Sun heats Earth). Thermal expansion: ΔL = αL₀ΔT.",
        mistakes: [{ mistake: "Thinking radiation requires a medium like air.", reality: "Radiation travels through empty space — that's how sunlight reaches Earth across 150 million km of vacuum!" }, { mistake: "Thinking materials only expand lengthwise.", reality: "Materials expand in ALL dimensions when heated — length, width, and height." }],
        questions: [{ id: "q1", q: "How does the Sun's heat reach Earth?", options: ["Conduction", "Convection", "Radiation", "Wind"], answer: 2 }, { id: "q2", q: "Why do bridges have expansion joints?", options: ["For drainage", "To allow thermal expansion", "For decoration", "To save material"], answer: 1 }]
      }
    ]
  },
  {
    id: "optics", title: "Light & Optics",
    lessons: [
      {
        id: "reflection", title: "Light & Reflection",
        summary: "Light travels in straight lines, and when it bounces off a surface, the angle in equals the angle out.",
        simple: "Light is an electromagnetic wave that travels in straight lines at 300,000 km/s. When light hits a mirror, it bounces off at the same angle it arrived — like a billiard ball off a wall.",
        extraSimple: "Light bounces off mirrors the same way a ball bounces off a wall. Throw it at an angle, it bounces away at the same angle on the other side.",
        intuition: "Roll a ball at a wall at 45°. It bounces off at 45° the other way. Light does exactly the same thing with mirrors. The Law of Reflection is just billiards with photons!",
        examples: ["You see yourself in a mirror because light bounces from your face, hits the mirror, and bounces back to your eyes.", "Ambulances write their name backward so it reads correctly in your car's rearview mirror."],
        visualType: "light",
        deep: "Light speed in vacuum: c = 3×10⁸ m/s. Law of Reflection: angle of incidence = angle of reflection (measured from the normal). Plane mirrors produce virtual, upright, same-size images. Concave mirrors can converge light (used in telescopes, satellite dishes). Convex mirrors diverge light (used in vehicle side mirrors for wider view).",
        mistakes: [{ mistake: "Thinking mirrors flip left and right.", reality: "Mirrors flip FRONT and BACK, not left and right. Your mirror image has reversed depth." }, { mistake: "Thinking you can see light beams.", reality: "You only see light when it enters your eyes. Visible 'beams' are actually light scattering off dust particles." }],
        questions: [{ id: "q1", q: "Angle of incidence equals:", options: ["Angle of refraction", "Angle of reflection", "90 degrees always", "Zero degrees"], answer: 1 }, { id: "q2", q: "Light travels at approximately:", options: ["300 m/s", "300,000 m/s", "300,000 km/s", "Infinity"], answer: 2 }]
      },
      {
        id: "refraction", title: "Refraction & Lenses",
        summary: "Light bends when it changes speed entering a new material — and lenses use this bending to focus or spread light.",
        simple: "Light slows down in denser materials (water, glass) and this speed change causes it to bend. Convex lenses focus light to a point; concave lenses spread light apart.",
        extraSimple: "A straw looks broken in a glass of water because light bends (refracts) when it enters the water. Magnifying glasses use this bending trick to make things look bigger!",
        intuition: "Imagine a marching band walking from pavement onto sand at an angle. The side hitting sand first slows down while the other side keeps marching fast. This speed difference makes the whole line pivot — that's exactly how light bends entering glass or water.",
        examples: ["Swimming pools look shallower than they are — light bending from water to air tricks your brain.", "Eyeglasses use convex or concave lenses to bend light so it focuses correctly on your retina."],
        visualType: "refraction",
        deep: "Refraction occurs because light changes speed in different media. Snell's Law: n₁sinθ₁ = n₂sinθ₂ where n is the refractive index. Light bends toward the normal when slowing down (entering denser medium). Convex (converging) lenses focus parallel rays to a focal point. Concave (diverging) lenses spread rays apart.",
        mistakes: [{ mistake: "Thinking light always travels at the same speed.", reality: "Light slows significantly in glass (≈200,000 km/s) and water (≈225,000 km/s)." }, { mistake: "Thinking magnifying glasses make things bigger.", reality: "They bend light rays so they appear to come from a larger, virtual image — the object itself doesn't change." }],
        questions: [{ id: "q1", q: "Light bends toward the normal when it enters a:", options: ["Less dense medium", "Denser medium", "Vacuum", "Mirror"], answer: 1 }, { id: "q2", q: "Convex lenses:", options: ["Spread light apart", "Focus light to a point", "Block all light", "Only work underwater"], answer: 1 }]
      }
    ]
  },
  {
    id: "electricity", title: "Electricity",
    lessons: [
      {
        id: "charge", title: "Electric Charge & Current",
        summary: "Atoms carry positive and negative charges — and current is simply a river of electrons flowing through a conductor.",
        simple: "Protons are positive (+), electrons are negative (-). Opposites attract, likes repel. Electric current is the flow of electrons through a wire, measured in Amperes.",
        extraSimple: "Imagine a party: pluses love minuses but hate other pluses. When you connect a wire to a battery, electrons start flowing like a river — that's electric current!",
        intuition: "Charge is like social magnetism. Positive-Negative pairs are best friends who always stick together. Positive-Positive pairs are enemies who shove each other away. This invisible social rule governs every lightning bolt, battery, and circuit on Earth.",
        examples: ["Rubbing a balloon on your hair steals electrons, making it stick to walls (static electricity).", "Lightning: massive charge buildup in clouds creates a giant spark to equalize the charge."],
        visualType: "electric",
        deep: "Charge is quantized: electron charge = -1.6×10⁻¹⁹ C. Coulomb's Law: F = kq₁q₂/r². Current (I) = charge flow rate = Q/t. Unit: Ampere (A) = 1 Coulomb/second. Conventional current flows + to -, but electrons actually flow - to +. Conductors have free electrons; insulators do not.",
        mistakes: [{ mistake: "Thinking current is electrons moving at light speed.", reality: "Individual electrons drift slowly (~mm/s), but the electrical signal propagates near light speed — like a chain reaction." }, { mistake: "Thinking only negative charges move.", reality: "In metals, electrons flow. In solutions, both positive AND negative ions can carry current." }],
        questions: [{ id: "q1", q: "Like charges:", options: ["Attract", "Repel", "Ignore each other", "Merge"], answer: 1 }, { id: "q2", q: "Electric current is the flow of:", options: ["Protons", "Neutrons", "Electrons", "Photons"], answer: 2 }]
      },
      {
        id: "circuits", title: "Voltage, Resistance & Circuits",
        summary: "Voltage pushes electrons, resistance slows them, and Ohm's Law ties them together: V = IR.",
        simple: "Voltage (V) = electrical pressure pushing electrons. Resistance (R) = opposition to flow. Ohm's Law: V = I × R. Double the voltage = double the current. Double the resistance = half the current.",
        extraSimple: "Voltage is the water pressure. Current is the water flow. Resistance is a kink in the hose. Ohm's Law says: more pressure means more flow, but more kinks means less flow!",
        intuition: "Sipping a thick milkshake (high resistance) through a tiny straw with weak suction (low voltage) = barely any milkshake reaches your mouth (low current). Use a fat boba straw (low resistance) and squeeze the cup (high voltage) = milkshake flood!",
        examples: ["A longer, thinner wire has more resistance — harder for electrons to push through.", "Christmas lights in series: one bulb dies and the whole chain goes dark. In parallel: each bulb is independent."],
        visualType: "circuit",
        deep: "Ohm's Law: V = IR. Voltage (V, Volts). Current (I, Amperes). Resistance (R, Ohms Ω). Series circuits: total R = R₁+R₂+R₃ (resistances add). Parallel circuits: 1/R_total = 1/R₁ + 1/R₂ (total resistance decreases). Power: P = IV = I²R = V²/R.",
        mistakes: [{ mistake: "Thinking current gets 'used up' by components.", reality: "Current is the same everywhere in a series circuit. Voltage drops across components, not current." }, { mistake: "Thinking more appliances generate more electricity.", reality: "More appliances lower total resistance, which draws more current — potentially overloading and blowing a fuse." }],
        questions: [{ id: "q1", q: "Ohm's Law states:", options: ["F = ma", "V = IR", "E = mc²", "P = IV"], answer: 1 }, { id: "q2", q: "In a series circuit, if one bulb breaks:", options: ["Others get brighter", "Nothing happens", "All bulbs go out", "Others get dimmer"], answer: 2 }]
      }
    ]
  },
  {
    id: "magnetism", title: "Magnetism",
    lessons: [
      {
        id: "magnets", title: "Magnetism & Electromagnets",
        summary: "Magnets have invisible force fields flowing from North to South — and electricity can create magnetism (and vice versa).",
        simple: "Every magnet has a North and South pole. Opposites attract (N-S), likes repel (N-N, S-S). Electric current flowing through a wire creates a magnetic field around it — that's an electromagnet.",
        extraSimple: "Magnets have two ends: North and South. North loves South, but North hates North! And here's the coolest part — flowing electricity creates magnetism, and moving magnets create electricity!",
        intuition: "Electricity and magnetism are secretly the same force wearing different disguises. Flow electrons through a wire → you get a magnet. Move a magnet near a wire → you get flowing electrons. They're two sides of the same coin!",
        examples: ["MRI machines use extremely powerful electromagnets to see inside your body without surgery.", "Electric motors: electricity → magnetism → spinning motion. Generators: spinning motion → magnetism → electricity."],
        visualType: "magnet",
        deep: "Magnetic field lines flow from North to South pole outside the magnet. Earth itself is a giant magnet (compass needles align with Earth's field). Electromagnets: coil of wire + current = controllable magnet. Stronger with more coils or more current. Faraday's Law: changing magnetic field induces an electric current. This links electricity and magnetism as one unified force: electromagnetism.",
        mistakes: [{ mistake: "Thinking you can isolate a North or South pole by cutting a magnet.", reality: "Cut a magnet in half and you get two complete magnets, each with its own N and S pole!" }, { mistake: "Thinking permanent magnets last forever.", reality: "They can weaken over time from heat, impacts, or opposing magnetic fields." }],
        questions: [{ id: "q1", q: "What happens when you bring two North poles together?", options: ["They attract", "They repel", "Nothing", "They merge"], answer: 1 }, { id: "q2", q: "An electromagnet is made from:", options: ["Two permanent magnets", "A coil of wire carrying current", "A piece of wood", "A glass rod"], answer: 1 }]
      }
    ]
  }
];

const output = JSON.stringify({ topics }, null, 2);
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'topics.json'), output, 'utf-8');
console.log(`✅ Generated ${topics.length} units with ${topics.reduce((a,t) => a + t.lessons.length, 0)} total lessons.`);
