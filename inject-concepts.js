import fs from 'fs';

const d = JSON.parse(fs.readFileSync('src/data/topics.json', 'utf8'));

const conceptsMap = {
  // === BASICS ===
  'what-is-physics': [
    { title: 'Physics is observation-driven', explanation: 'Physics starts with watching how the universe behaves. Scientists observe patterns — a ball always falls down, light always travels in straight lines, magnets always have two poles — and then form rules (laws) to describe those patterns. These laws let us predict what will happen before it happens.' },
    { title: 'The scientific method is the backbone', explanation: 'Every physics idea follows a strict cycle: Observe something curious → Form a hypothesis (educated guess) → Design an experiment to test it → Analyze the results → Accept, reject, or refine the hypothesis. This method ensures physics knowledge is reliable and self-correcting over time.' },
    { title: 'Physics connects to everything', explanation: 'Chemistry is based on how atoms interact (physics). Biology depends on energy flow and electrical signals (physics). Engineering applies force, motion, and material science (physics). Even music is sound waves obeying physics. Understanding physics gives you a master key to every other science.' },
    { title: 'Models simplify complex reality', explanation: 'Physicists use simplified models to understand complex systems. For example, we treat Earth as a perfect sphere (it is not), ignore air resistance in basic problems, and assume ropes are massless. These idealizations are not "wrong" — they focus your thinking on the core principle without overwhelming detail.' }
  ],
  'units': [
    { title: 'The 7 SI base units', explanation: 'The entire measurement system in physics rests on exactly 7 base units: meter (m) for length, kilogram (kg) for mass, second (s) for time, ampere (A) for electric current, kelvin (K) for temperature, mole (mol) for amount of substance, and candela (cd) for luminous intensity. Every other unit is derived by combining these.' },
    { title: 'Derived units are combinations', explanation: 'Speed is meters per second (m/s) — derived from length and time. Force is Newtons (kg·m/s²) — derived from mass, length, and time. Energy is Joules (kg·m²/s²). Understanding derived units means you can always trace back to the fundamental seven.' },
    { title: 'Unit conversion is essential', explanation: 'To convert units, multiply by a fraction equal to 1. For example, to convert 5 km to meters: 5 km × (1000 m / 1 km) = 5000 m. The key insight is that 1000m/1km equals exactly 1, so you are not changing the quantity, only its label.' },
    { title: 'Dimensional analysis catches errors', explanation: 'If your final answer has the wrong units, the calculation is guaranteed wrong. For example, if you calculate speed and get "kg," something went wrong. Always check: does my answer have the correct units? This simple habit catches most physics errors before they become problems.' }
  ],
  'vectors': [
    { title: 'Adding vectors is NOT like adding numbers', explanation: 'Walk 3 km East, then 4 km North. Total distance walked: 7 km. But displacement? Using the Pythagorean theorem: √(3² + 4²) = 5 km Northeast. Vector addition accounts for direction, which is why the result differs dramatically from simple number addition.' },
    { title: 'Breaking vectors into components', explanation: 'Any vector can be split into horizontal (x) and vertical (y) components. A ball thrown at 45° with speed 10 m/s has: horizontal component = 10 × cos(45°) = 7.07 m/s, vertical component = 10 × sin(45°) = 7.07 m/s. This decomposition makes complex problems solvable using simple math.' },
    { title: 'Negative direction is meaningful', explanation: 'In physics, direction matters so much that we assign positive and negative signs. "Moving at -5 m/s" means 5 m/s in the negative direction (e.g., backward or downward). This is not "less than zero speed" — it is full speed in the opposite direction.' }
  ],

  // === KINEMATICS ===
  'displacement': [
    { title: 'Position vs Distance vs Displacement', explanation: 'Position is WHERE you are (e.g., x = 5m from the door). Distance is HOW FAR you traveled in total (path-dependent scalar, always positive). Displacement is the straight-line change in position (Δx = final position – initial position). A marathon runner completes 42 km of distance but if they finish at the starting line, displacement = 0.' },
    { title: 'Displacement can be zero even after moving', explanation: 'If you walk from home to school (1 km) and back home (1 km), your distance is 2 km but your displacement is 0 km. This is because displacement only cares about your starting and ending positions. The journey in between is irrelevant to displacement.' },
    { title: 'Direction makes displacement powerful', explanation: 'Because displacement is a vector, it carries direction information that distance cannot. "The store is 500 meters North" (displacement) is far more useful than "the store is 500 meters away" (distance) when you need to actually navigate there.' }
  ],
  'velocity': [
    { title: 'Average vs Instantaneous velocity', explanation: 'Average velocity looks at the entire trip (total displacement ÷ total time). Instantaneous velocity is your velocity at one exact moment — what your speedometer reads right NOW. A car trip might average 40 mph, but at any given instant you could be doing 60 on the highway or 0 at a red light.' },
    { title: 'Constant speed ≠ constant velocity', explanation: 'A car driving in a perfect circle at exactly 30 mph has constant speed but constantly changing velocity. Why? Because direction is part of velocity, and in a circle, direction changes every instant. This is a crucial distinction that many students miss.' },
    { title: 'Relative velocity', explanation: 'Velocity depends on your frame of reference. If you are walking at 5 km/h inside a train moving at 100 km/h, your velocity relative to the ground is 105 km/h (same direction) or 95 km/h (opposite direction). There is no single "correct" velocity — it always depends on what you are measuring relative to.' }
  ],
  'acceleration': [
    { title: 'Acceleration is about CHANGE, not speed', explanation: 'A parked car has zero acceleration. A car cruising at 200 mph in a straight line also has zero acceleration. Acceleration only exists when velocity is changing. A slow car that is speeding up has acceleration; a fast car at constant speed does not.' },
    { title: 'The direction of acceleration matters', explanation: 'If you throw a ball straight up, it decelerates (acceleration points downward, opposite to motion) on the way up, momentarily stops, then accelerates downward on the way down. The acceleration due to gravity is always 9.8 m/s² downward throughout the entire flight — even at the very top when the ball has zero velocity.' },
    { title: 'Acceleration has units of m/s²', explanation: 'This means "meters per second, per second." An acceleration of 3 m/s² means every second, the velocity increases by 3 m/s. After 1 second: 3 m/s. After 2 seconds: 6 m/s. After 3 seconds: 9 m/s. The velocity grows linearly over time when acceleration is constant.' }
  ],
  'freefall': [
    { title: 'All objects fall at the same rate (in vacuum)', explanation: 'Without air resistance, a feather and a bowling ball dropped from the same height hit the ground at exactly the same time. Galileo famously demonstrated this. The acceleration due to gravity (g ≈ 9.8 m/s²) is independent of mass. Air resistance is what makes a feather float in normal conditions — not a difference in gravitational pull.' },
    { title: 'Reading distance-time graphs', explanation: 'A straight diagonal line means constant speed. A curved line bending upward means speeding up. A flat horizontal line means stopped. The steepness (slope) at any point gives the instantaneous speed. The steeper the line, the faster the object is moving at that moment.' },
    { title: 'Reading velocity-time graphs', explanation: 'A horizontal line means constant velocity (zero acceleration). An upward-sloping line means positive acceleration (speeding up). A downward-sloping line means negative acceleration (slowing down). The area under the curve equals displacement — a powerful tool for solving motion problems without equations.' }
  ],

  // === FORCES ===
  'what-is-force': [
    { title: 'Forces always come in types', explanation: 'Contact forces require physical touch: friction, tension, normal force, air resistance, spring force, applied push/pull. Non-contact forces act through space: gravity (mass attracts mass), electromagnetic (charges attract/repel), strong nuclear (holds atomic nuclei together). Every force in the universe falls into one of these categories.' },
    { title: 'Net force determines motion', explanation: 'Multiple forces often act on an object simultaneously. A book on a table has gravity pulling down (~10N) and the table pushing up (~10N). Net force = 0N, so the book stays still. If one force exceeds the other, the object accelerates in the direction of the stronger force.' },
    { title: 'Free body diagrams are essential tools', explanation: 'A free body diagram draws the object as a dot and shows ALL forces acting on it as arrows. Arrow length represents force magnitude; arrow direction represents force direction. This simple sketch transforms confusing word problems into clear, solvable visual equations.' }
  ],
  'newtons-first': [
    { title: 'Inertia is proportional to mass', explanation: 'A bowling ball (7 kg) has much more inertia than a tennis ball (0.06 kg). This means it is much harder to start moving, stop once moving, or change the direction of a bowling ball. Mass is the single measure of how much inertia an object possesses.' },
    { title: 'Why objects on Earth seem to "need" force to keep moving', explanation: 'On Earth, friction and air resistance are always stealing energy from moving objects. So it SEEMS like you need constant force to maintain motion. But in deep space, with zero friction, a single push would keep an object moving forever at constant velocity. Newton realized the "natural" state is constant motion, not rest.' },
    { title: 'Equilibrium means zero net force', explanation: 'An object in equilibrium is not necessarily stationary — it can be moving at constant velocity! A skydiver falling at terminal velocity has zero net force (gravity down = air resistance up), yet is moving at 120 mph. Equilibrium means balanced forces, not necessarily "stopped."' }
  ],
  'newtons-second': [
    { title: 'F = ma connects three fundamental quantities', explanation: 'Force (Newtons) equals mass (kg) times acceleration (m/s²). This single equation is arguably the most important in all of physics. Rearranged: a = F/m tells you the acceleration for a given force and mass. F = ma tells you the force needed. m = F/a tells you the mass.' },
    { title: 'Weight is just F = ma applied to gravity', explanation: 'Your weight is not your mass. Weight W = mg, where g = 9.8 m/s² on Earth. A 50 kg person weighs W = 50 × 9.8 = 490 Newtons on Earth. On the Moon (g = 1.6 m/s²), same person weighs only 80 Newtons. Mass stays 50 kg everywhere.' },
    { title: 'The superposition principle', explanation: 'When multiple forces act on an object, you can analyze each one independently and then add them together (as vectors) to find the net force. This "superposition" principle makes complex multi-force problems manageable by breaking them into simple single-force problems.' }
  ],
  'newtons-third': [
    { title: 'Action-reaction pairs act on DIFFERENT objects', explanation: 'When you push a wall, the wall pushes you back. The action force is on the wall (from your hand). The reaction force is on you (from the wall). Because they act on different objects, they do NOT cancel each other out. This is the single most misunderstood aspect of Newton\'s Third Law.' },
    { title: 'Friction is what enables walking', explanation: 'When you walk, your foot pushes backward on the ground. By Newton\'s Third Law, the ground pushes your foot forward — that is the friction force that propels you. On a perfectly frictionless surface (like ideal ice), your foot would slide backward and you could not walk at all.' },
    { title: 'Types of friction', explanation: 'Static friction prevents an object from starting to move (it matches your push up to a maximum). Kinetic friction acts on already-moving objects (always less than max static friction). This is why it is harder to start pushing a heavy box than to keep it sliding once started.' }
  ],

  // === ENERGY ===
  'work': [
    { title: 'Work requires displacement in the force direction', explanation: 'If you push a box horizontally 5 meters with 10N of force, work = 10N × 5m = 50 Joules. But if you carry the same box horizontally, gravity pulls down while you move sideways — the angle between force and displacement is 90°, so gravity does zero work on the box during horizontal motion.' },
    { title: 'Negative work is possible', explanation: 'When friction acts on a sliding box, friction points backward while the box moves forward. The work done by friction is negative because force opposes displacement. Negative work means the force is removing energy from the object, slowing it down.' },
    { title: 'The work-energy theorem', explanation: 'The total (net) work done on an object equals its change in kinetic energy: W_net = ΔKE. If net work is positive, the object speeds up. If net work is negative, it slows down. If net work is zero, speed stays constant. This theorem connects force-and-distance thinking to energy thinking.' }
  ],
  'ke-pe': [
    { title: 'The velocity term in KE is squared — this matters enormously', explanation: 'KE = ½mv². Because velocity is squared, doubling speed quadruples kinetic energy. A car at 60 mph has 4 times the kinetic energy of the same car at 30 mph. This is why highway crashes are dramatically more destructive than parking lot bumps — and why stopping distance increases exponentially with speed.' },
    { title: 'Gravitational PE depends on reference point', explanation: 'PE = mgh, but "h" is measured from a reference level you choose. A ball on a table has PE relative to the floor, but zero PE relative to the tabletop. The actual value of PE does not matter — only the CHANGE in PE (ΔPE) is physically meaningful. Choose whatever reference makes your math simplest.' },
    { title: 'Energy transformation is continuous', explanation: 'A roller coaster at the top of a hill has maximum PE and minimum KE. As it descends, PE converts to KE continuously (not in chunks). At the bottom, PE is minimum and KE is maximum. The total mechanical energy (PE + KE) remains constant if we ignore friction.' }
  ],
  'conservation': [
    { title: 'Energy cannot be created from nothing', explanation: 'No device in the universe can create energy. A "perpetual motion machine" that produces energy forever without fuel is physically impossible — it would violate conservation of energy. Every machine that appears to create energy is actually transforming energy from another source (chemical, nuclear, solar, etc.).' },
    { title: 'Efficiency is always less than 100%', explanation: 'In every energy transformation, some energy becomes thermal energy (heat) due to friction, air resistance, or electrical resistance. A car engine converts only about 25% of fuel energy into motion — the rest becomes heat. LED bulbs are ~90% efficient. No real-world device is 100% efficient.' },
    { title: 'Power is the pace of energy use', explanation: 'Two cars might both climb the same hill (same work done against gravity), but a sports car does it in 5 seconds while a truck takes 30 seconds. The sports car has 6× the power. Power = Work/Time = Energy/Time. A 100-watt bulb uses 100 Joules every second.' }
  ],

  // === MOMENTUM ===
  'what-is-momentum': [
    { title: 'Momentum depends on mass AND velocity equally', explanation: 'A 0.01 kg bullet at 900 m/s has momentum p = 0.01 × 900 = 9 kg·m/s. A 90 kg person walking at 0.1 m/s also has momentum p = 90 × 0.1 = 9 kg·m/s. Identical momentum! This shows that a small, fast object can carry the same momentum as a large, slow one.' },
    { title: 'Impulse changes momentum', explanation: 'Impulse = Force × Time = Change in Momentum (Δp). This is why airbags save lives: they increase the time of collision from 0.01s to about 0.1s. Same momentum change, but 10× longer time means 10× less force on your body. Crumple zones in cars work on the same principle.' },
    { title: 'Elastic vs Inelastic collisions', explanation: 'In elastic collisions, objects bounce off each other and total kinetic energy is conserved (e.g., billiard balls). In perfectly inelastic collisions, objects stick together and maximum kinetic energy is lost to heat/sound/deformation (e.g., a car crash where vehicles crumple together). Both types conserve momentum.' }
  ],

  // === GRAVITY ===
  'what-is-gravity': [
    { title: 'Gravity is the weakest fundamental force', explanation: 'Gravity is roughly 10^36 times weaker than the electromagnetic force. A tiny refrigerator magnet overcomes the gravitational pull of the entire Earth on a paperclip! Gravity only feels strong because Earth is enormously massive and bodies like stars and planets accumulate it over vast amounts of matter.' },
    { title: 'Gravity decreases with distance (inverse square law)', explanation: 'Double your distance from Earth\'s center and gravity becomes 1/4 as strong. Triple the distance, 1/9 as strong. This is the inverse square law: F ∝ 1/r². It means gravity never reaches zero — it just gets weaker and weaker. Even at the edge of the observable universe, Earth\'s gravity technically still exists.' },
    { title: 'Orbits are just free fall with sideways velocity', explanation: 'The International Space Station is falling toward Earth every second — but it is also moving sideways so fast that the ground curves away beneath it at the same rate. The astronauts inside experience weightlessness not because gravity is absent (it is about 90% of surface gravity at their altitude), but because everything around them is falling at the same rate.' }
  ],

  // === MATTER ===
  'states': [
    { title: 'Temperature controls the state of matter', explanation: 'At low temperatures, molecules vibrate but stay locked in place (solid). Add heat and they gain enough energy to slide past each other (liquid). Add more heat and they fly apart entirely (gas). The same substance (like water) exists in all three states — it is solely the energy of the molecules that determines the state.' },
    { title: 'Density explains floating and sinking', explanation: 'If object density > fluid density, it sinks. If object density < fluid density, it floats. Ice floats because water uniquely expands when it freezes, making ice about 9% less dense than liquid water. This is critical for life — if ice sank, lakes would freeze solid from the bottom up, killing all aquatic life.' },
    { title: 'Density is an intrinsic property', explanation: 'A gold ring and a gold bar have very different masses and volumes, but identical density (19,300 kg/m³). Density depends on what the material IS, not how much of it you have. This makes density extremely useful for identifying unknown substances.' }
  ],
  'pressure-buoyancy': [
    { title: 'Pressure increases with depth', explanation: 'At the bottom of a swimming pool, there is more water above you pushing down, creating higher pressure. The formula P = ρgh tells us: pressure increases linearly with depth (h), fluid density (ρ), and gravitational acceleration (g). This is why deep-sea creatures have specialized bodies — the pressure at the ocean floor is over 1000 times atmospheric pressure.' },
    { title: 'Archimedes\' Principle quantifies buoyancy', explanation: 'The buoyant force on a submerged object equals the weight of the fluid it displaces. A 1-liter block submerged in water displaces 1 liter (1 kg) of water, so the buoyant force is about 9.8 Newtons upward. If the block weighs less than 9.8N, it floats. If more, it sinks.' },
    { title: 'Hydraulic systems multiply force using pressure', explanation: 'Pressure applied to an enclosed fluid transmits equally in all directions (Pascal\'s Law). A small force on a small piston creates the same pressure as a large force on a large piston. This is how a car\'s brake pedal (small force, small area) stops massive wheels (large force, large area).' }
  ],

  // === WAVES ===
  'wave-basics': [
    { title: 'Transverse vs Longitudinal waves', explanation: 'In transverse waves, particles vibrate perpendicular to the wave direction (like shaking a rope up and down while the wave travels horizontally). In longitudinal waves, particles vibrate parallel to the wave direction (like pushing and pulling a slinky). Light is transverse; sound is longitudinal.' },
    { title: 'The wave equation: v = fλ', explanation: 'Wave speed (v) equals frequency (f) times wavelength (λ). If you know any two of these three values, you can calculate the third. For example, middle C on a piano has frequency 262 Hz. The speed of sound in air is 343 m/s. So its wavelength is λ = 343/262 = 1.31 meters.' },
    { title: 'Amplitude carries energy information', explanation: 'A wave\'s amplitude is the maximum displacement from the rest position. For sound, larger amplitude means louder. For light, larger amplitude means brighter. For ocean waves, larger amplitude means more destructive. The energy carried by a wave is proportional to the SQUARE of its amplitude.' }
  ],
  'sound-waves': [
    { title: 'Sound is compression and rarefaction of air', explanation: 'A vibrating speaker cone pushes air molecules together (compression) and then pulls back, leaving a gap (rarefaction). These alternating high-pressure and low-pressure zones travel outward from the speaker at 343 m/s. When they reach your ear, your eardrum vibrates in response, and your brain interprets it as sound.' },
    { title: 'Pitch and frequency are directly linked', explanation: 'Higher frequency = higher pitch. The lowest note on a piano (A0) vibrates at 27.5 Hz. The highest (C8) vibrates at 4186 Hz. Human hearing range is approximately 20 Hz to 20,000 Hz. Dogs can hear up to ~65,000 Hz, which is why dog whistles are silent to humans.' },
    { title: 'The Doppler Effect explains changing pitch', explanation: 'When an ambulance approaches, sound waves get compressed (higher frequency = higher pitch). As it moves away, waves get stretched (lower frequency = lower pitch). This is the Doppler Effect. It works for all waves, including light — astronomers use it to determine whether stars are moving toward or away from Earth.' }
  ],

  // === HEAT ===
  'heat-vs-temp': [
    { title: 'Temperature is molecular kinetic energy per molecule', explanation: 'Temperature measures the AVERAGE kinetic energy of individual molecules. A cup of boiling water at 100°C has molecules moving at the same average speed as a bathtub of water at 100°C. But the bathtub contains far more molecules, so it holds enormously more total thermal energy (heat).' },
    { title: 'Thermal equilibrium is the endpoint of heat flow', explanation: 'When you put a hot spoon in cold water, heat flows from spoon to water until both reach the same temperature. At this point, thermal equilibrium is achieved and heat flow stops. The final temperature is always between the two starting temperatures, closer to the object with more thermal mass.' },
    { title: 'Specific heat capacity varies by material', explanation: 'Water has an unusually high specific heat capacity — it takes 4,186 Joules to raise 1 kg of water by 1°C. Iron only needs 449 J/kg·°C. This is why water heats up and cools down slowly (great for regulating Earth\'s climate), while metal heats up and cools down rapidly (ouch when touching a hot pan).' }
  ],
  'heat-transfer': [
    { title: 'Conduction needs direct molecular contact', explanation: 'When you touch a hot pan, fast-vibrating metal molecules collide with slow-vibrating skin molecules, transferring kinetic energy. Metals conduct heat well because they have free electrons that carry energy quickly. Wood and plastic are poor conductors (insulators) — which is why pot handles are plastic.' },
    { title: 'Convection creates circulation currents', explanation: 'Hot air rises because heating makes it expand and become less dense. Cool air sinks to replace it. This creates a continuous loop called a convection current. It is the reason warm air collects at your ceiling, why coastal regions get sea breezes, and how Earth\'s atmosphere circulates globally.' },
    { title: 'Radiation requires no medium at all', explanation: 'All objects emit electromagnetic radiation based on their temperature. The Sun heats Earth purely through radiation across 150 million km of vacuum. You feel warmth from a campfire because infrared radiation travels directly to your skin. Unlike conduction and convection, radiation works perfectly in empty space.' }
  ],

  // === OPTICS ===
  'reflection': [
    { title: 'The Law of Reflection is geometrically precise', explanation: 'The angle of incidence always equals the angle of reflection — both measured from an imaginary line perpendicular to the surface called the "normal." This is not approximate. It is an exact, universally true geometric law. Every mirror, every polished surface, every lake reflection obeys this rule perfectly.' },
    { title: 'Smooth vs rough surfaces create different reflections', explanation: 'A smooth mirror produces a clear image because all reflected rays bounce in the same organized direction (specular reflection). A rough wall scatters light in random directions (diffuse reflection) — you can see the wall is lit, but no clear image forms. Both obey the law of reflection at each individual point.' },
    { title: 'Virtual images appear behind mirrors', explanation: 'When you look in a flat mirror, your brain traces the reflected light rays backward in straight lines. They appear to converge behind the mirror, creating a "virtual image." It looks real but no actual light exists behind the mirror. You cannot project a virtual image onto a screen.' }
  ],
  'refraction': [
    { title: 'Light bends because it changes speed', explanation: 'Light travels at different speeds in different materials: ~300,000 km/s in vacuum, ~225,000 km/s in water, ~200,000 km/s in glass. When light enters a denser material at an angle, the side that enters first slows down while the other side maintains speed, causing the beam to pivot (bend). This is refraction.' },
    { title: 'The refractive index quantifies bending', explanation: 'The refractive index (n) = speed of light in vacuum / speed of light in material. Water has n = 1.33, glass has n ≈ 1.5, diamond has n = 2.42. Higher n means more bending. Diamond\'s extremely high refractive index is what creates its brilliant sparkle — light bounces around inside many times before escaping.' },
    { title: 'Total Internal Reflection traps light', explanation: 'When light tries to exit a dense material at a steep angle, it can be completely reflected back inside — no light escapes! This phenomenon powers fiber optic cables: light bounces along the inside of thin glass fibers for hundreds of kilometers with almost zero loss. It also creates the shimmering surface effect when you look up from underwater.' }
  ],

  // === ELECTRICITY ===
  'charge': [
    { title: 'Conservation of charge is absolute', explanation: 'Charge cannot be created or destroyed — only transferred. When you rub a balloon on your hair, you are not creating charge. Electrons are physically moving from your hair to the balloon. Your hair becomes positively charged (lost electrons) and the balloon becomes negatively charged (gained electrons). The total charge of the system remains exactly zero.' },
    { title: 'Coulomb\'s Law mirrors gravity\'s structure', explanation: 'The force between two charges follows F = kq₁q₂/r², remarkably similar to gravity\'s F = Gm₁m₂/r². Both are inverse-square laws. But electromagnetic force can attract OR repel (positive and negative charges), while gravity only attracts (all mass is positive). This makes electromagnetism vastly more complex and interesting.' },
    { title: 'Conductors and insulators differ at the atomic level', explanation: 'In conductors (metals), outer electrons are loosely bound and can flow freely throughout the material. In insulators (rubber, glass, plastic), electrons are tightly bound to individual atoms. Semiconductors (silicon) are in between — their conductivity can be controlled, which is the entire basis of computer chips and modern electronics.' }
  ],
  'circuits': [
    { title: 'Current is the same everywhere in a series circuit', explanation: 'In a series circuit (one single loop), the same current flows through every component. If 2 amps flow out of the battery, exactly 2 amps flow through each resistor, each bulb, and back to the battery. Current does not get "used up" by components — that is perhaps the most common misconception in circuit physics.' },
    { title: 'Voltage drops across components, not current', explanation: 'A 9V battery provides 9 volts of electrical "pressure." As current flows through resistors, each one causes a voltage drop. If you have three equal resistors in series, each drops 3V. The sum of all voltage drops always equals the battery voltage. Voltage is what gets distributed, not current.' },
    { title: 'Parallel circuits divide current, not voltage', explanation: 'In parallel, each branch gets the full battery voltage. Current splits at junctions — more current flows through lower-resistance paths (like water preferring wider channels). Total current increases with more parallel branches, which is why plugging too many appliances into one outlet can overload the circuit and blow a fuse.' }
  ],

  // === MAGNETISM ===
  'magnets': [
    { title: 'Magnetic monopoles do not exist', explanation: 'You cannot isolate a North pole or a South pole. Cut a bar magnet in half and you get two smaller complete magnets, each with its own N and S pole. Cut again, same result. This is fundamentally different from electric charges, where you CAN have isolated positive or negative charges. Why monopoles don\'t exist remains one of physics\' deepest mysteries.' },
    { title: 'Electricity creates magnetism', explanation: 'A wire carrying current creates a circular magnetic field around it. Coil the wire into a solenoid and you get a powerful electromagnet that can be turned on and off. The strength depends on current (more amps = stronger field) and number of coils (more loops = stronger field). This is how MRI machines, electric motors, and speakers work.' },
    { title: 'Magnetism creates electricity (electromagnetic induction)', explanation: 'Moving a magnet through a coil of wire generates electric current — Faraday\'s discovery that changed the world. This is how all power plants generate electricity: spin a magnet inside coils of wire. Whether the energy comes from coal, wind, water, or nuclear reactions, the final conversion step is always electromagnetic induction.' }
  ]
};

// Inject keyConcepts into each lesson
d.topics.forEach(topic => {
  topic.lessons.forEach(lesson => {
    const key = lesson.id;
    lesson.keyConcepts = conceptsMap[key] || [];
  });
});

fs.writeFileSync('src/data/topics.json', JSON.stringify(d, null, 2), 'utf8');
console.log('✅ Injected keyConcepts into all lessons.');
