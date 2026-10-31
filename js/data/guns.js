/* ============================================================
   CYBERPUNK411 — data/guns.js
   Base-game iconic weapons, mapped for the PS4 build (patch 1.6x).
   No Phantom Liberty weapons exist here — that DLC never shipped
   for last-gen, so anything from Dogtown is deliberately absent.
   ============================================================ */

window.CP411_GUNS = [
  {
    id: 'skippy',
    name: 'Skippy',
    typeLine: 'Smart Pistol · Iconic',
    type: 'pistol',
    tags: ['iconic', 'early', 'ps4'],
    district: 'Heywood — Vista del Rey',
    quest: 'No quest. Free world pickup.',
    act: 'Act 2 (as soon as the world opens up)',
    how: 'A talking smart pistol lying next to a corpse in a dead-end alley. Free. No fight, no quest.',
    stats: [
      ['Damage', 'Moderate (scales to your level)'],
      ['Fire mode', 'Smart — locks on, curves bullets'],
      ['Special', 'It talks. It will not stop talking.'],
      ['Hand mod', 'Smart Link required for homing'],
      ['Missable?', 'No — but see the gotchas']
    ],
    route: [
      'Open the map and fast-travel to the <strong>Vista del Rey</strong> district of Heywood (the fast-travel point near the Megabuilding H2 area is the closest).',
      'Head for the alley network in the middle of Vista del Rey — it is the little warren of backstreets south of the big highway overpass.',
      'Look for an alley with a <strong>corpse slumped against a wall and a small pile of personal stuff</strong> beside it. Skippy is lying on the ground among that mess, face-up.',
      'Hold <code>▲ / Triangle</code> on the prompt to pick it up. It immediately starts a conversation. Do not panic. That is the gun.',
      'Open your inventory, equip Skippy to a pistol slot, and fire it once at nothing to hear it. It has opinions.'
    ],
    why: 'Skippy is a <em>smart</em> pistol, which means it curves bullets toward targets for you. For a low-level V with shaky aim, that is a genuine crutch, and it costs nothing.',
    gotchas: [
      'Skippy is tied to a small side-encounter: it asks you to pick a firing mode (lethal or non-lethal) and later asks to be returned to its owner, Regina Jones. You can keep it or hand it over — keeping it means the talking continues forever.',
      '<strong>Do not sell it before you finish its little questline.</strong> Selling removes the option of the AI-extraction outcome permanently.',
      'Smart weapons only home in if you have the <strong>Smart Link</strong> hand cyberware installed. Without it, Skippy fires like a normal pistol and you will swear it is broken. It is not. You are.'
    ],
    ps4: 'Works identically on PS4. Smart-link targeting is slightly more forgiving on last-gen because the aim assist is aggressive — use that.',
    missable: false,
    early: true
  },

  {
    id: 'satori',
    name: 'Satori',
    typeLine: 'Katana · Iconic',
    type: 'melee',
    tags: ['iconic', 'early', 'missable'],
    district: 'Watson — Corpo Plaza / Konpeki Plaza penthouse',
    quest: 'The Heist (main job)',
    act: 'Act 1 — the last job of the prologue',
    how: 'Looted from the AV landing pad on the Konpeki Plaza roof during The Heist. There is no second chance.',
    stats: [
      ['Damage', 'Scales with body/reflexes + blade perks'],
      ['Special', 'Massively increased critical damage'],
      ['Slot', 'Melee weapon slot'],
      ['Missable?', 'PERMANENTLY — rooftop only'],
      ['Best for', 'Blade builds, and as a display piece']
    ],
    route: [
      'During <strong>The Heist</strong>, after the penthouse goes loud, you fight your way to the roof.',
      'When you reach the <strong>AV landing pad on the roof</strong>, do not run straight to the AV and leave. The area behind and around the AV is the looting window.',
      'Check the <strong>corner of the landing pad opposite the AV ramp</strong> — Satori is leaning/lying there in a small stash spot with the AV in view.',
      'Grab it before the scripted escape triggers. If the escape sequence starts, sprint back and loot first — you usually have a few seconds.',
      'After The Heist, you can also find a crafting spec route for Satori on some playthroughs, but <strong>the rooftop pickup is the reliable one</strong>.'
    ],
    why: 'Critical-damage katana. On the PS4 build, crit builds are king for melee, and Satori is the earliest iconic blade in the game.',
    gotchas: [
      'This is the most commonly missed iconic in Cyberpunk 2077. Everyone is panicking during the escape and leaves it.',
      'If you have already finished The Heist without it: on the PS4 build there is no vendor that sells it. Iconic Black Market vendors are a 2.0+ feature. Your only option is a new save or a reload of an earlier save at Konpeki.',
      'Katana damage needs <strong>Reflexes + Blade perks</strong>. A katana on a Body/Shotgun build will feel like a butter knife and that is not the sword&rsquo;s fault.'
    ],
    ps4: 'Identical on PS4. The rooftop fight is one of the heavier combat scenes on base PS4 — expect frame drops, keep the camera calm, and loot in the gaps between enemies.',
    missable: true,
    early: true
  },

  {
    id: 'kongou',
    name: 'Kongou',
    typeLine: 'Power Pistol · Iconic',
    type: 'pistol',
    tags: ['iconic', 'early', 'missable'],
    district: 'Watson — Konpeki Plaza penthouse',
    quest: 'The Heist (main job)',
    act: 'Act 1 — same night as Satori',
    how: 'Found in Yorinobu Arasaka&rsquo;s bedroom during the penthouse section of The Heist.',
    stats: [
      ['Damage', 'High burst for early game'],
      ['Fire mode', 'Power — charges ricochet, no wall penetration'],
      ['Special', 'Enormous single-shot punch for Act 1'],
      ['Missable?', 'YES — bedroom is a one-visit area'],
      ['Ammo', 'Handgun rounds, cheap and everywhere']
    ],
    route: [
      'During <strong>The Heist</strong>, once you are inside the penthouse, the objective walks you past Yorinobu&rsquo;s <strong>bedroom</strong>.',
      'Before you leave the bedroom, sweep it: the nightstand / side-table cluster beside the bed and the surfaces near the wardrobe.',
      'Kongou is in that cluster. It is small, dark, and easy to walk past while the mission marker screams at you.',
      'Grab it, then continue. This is the same window as Satori — <strong>two iconics, one visit</strong>.'
    ],
    why: 'Early-game handgun with actual stopping power. On the PS4 build, before you have decent cyberware, a hard-hitting power pistol is what keeps you alive in Watson alley fights.',
    gotchas: [
      'Missable with zero recovery on PS4. No vendor, no re-acquisition.',
      'It is a <em>power</em> weapon: it ricochets but does not shoot through walls. Do not expect tech-weapon wall-bangs.',
      'Do not scrap it for components. It is worth more as a fallback gun than the handful of components you would get.'
    ],
    ps4: 'Identical on PS4. If you are save-scumming this section (you should), make a manual save at the start of the penthouse, not at the roof.',
    missable: true,
    early: true
  },

  {
    id: 'chaos',
    name: 'Chaos',
    typeLine: 'Tech Pistol · Iconic',
    type: 'pistol',
    tags: ['iconic', 'early', 'missable'],
    district: 'Watson — All Foods plant, Northside',
    quest: 'The Pickup (main job)',
    act: 'Act 1 — the Maelstrom deal',
    how: 'Dropped by Royce, the Maelstrom boss, at the end of The Pickup — only if the deal goes loud and you kill him.',
    stats: [
      ['Damage', 'High, chargeable'],
      ['Fire mode', 'Tech — charges, shoots through cover'],
      ['Special', 'Randomises its damage type and effects on every reload'],
      ['Missable?', 'YES — depends on how The Pickup resolves'],
      ['Hand mod', 'Tech weapons want Charge/Power mods, not Smart Link']
    ],
    route: [
      'In <strong>The Pickup</strong>, you meet Royce at the All Foods plant in Northside, Watson.',
      'The job can end peacefully (pay with the chip, or use the "flathead" route) or violently. <strong>Chaos only drops if Royce dies.</strong>',
      'Choose the aggressive path — provoke Royce, or refuse his demands — and clear the plant. Royce is the big Maelstrom boss; he drops Chaos on death.',
      'Loot his body <strong>before</strong> you leave the building, and before you interact with anything that ends the mission.',
      'If you already ended The Pickup without killing Royce, there is no way back to this gun on the PS4 build. It is gone for that save.'
    ],
    why: 'A tech pistol that shoots through cover is a different game for a low-level V. Chaos also rolls random damage types, which is chaos. It is in the name. We cannot be clearer.',
    gotchas: [
      'This is a <strong>branch-dependent</strong> iconic. Peaceful players simply do not get it. That is not a bug.',
      'Tech weapons need to be <em>charged</em> (hold the trigger) to punch through walls. Fire them like a normal pistol and they are mediocre.',
      'If you want Chaos and you are doing a pacifist-ish run: you can still choose the hostile route at the plant without ruining anything major — the story re-converges.'
    ],
    ps4: 'Identical on PS4. The All Foods fight is close-quarters and busy — on base PS4, drop your graphics expectations, not your frames.',
    missable: true,
    early: true
  },

  {
    id: 'widowmaker',
    name: 'Widow Maker',
    typeLine: 'Tech Precision Rifle · Iconic',
    type: 'sniper',
    tags: ['iconic', 'missable'],
    district: 'Badlands — Raffen Shiv tunnel / Rocky Ridge',
    quest: 'Ghost Town (main job, Panam) — fallback in Queen of the Highway',
    act: 'Act 2',
    how: 'Looted from Nash&rsquo;s corpse in the tunnel during Ghost Town. If you skip Nash, he shows up later and you can loot it then.',
    stats: [
      ['Damage', 'Very high per shot, two rounds through cover'],
      ['Fire mode', 'Tech — charge and penetrate'],
      ['Special', 'Fires two shots, chemical damage, poison chance'],
      ['Missable?', 'Soft-missable — second chance exists'],
      ['Range', 'Long. This is a wall-puncher.']
    ],
    route: [
      'Play Panam&rsquo;s <strong>Ghost Town</strong> main job. It takes you into the Badlands with Panam to deal with Nash and the Raffen Shiv.',
      'When Panam asks you to <strong>go after Nash</strong> in the tunnel, say yes. This is the whole reason to be here.',
      'Fight through the tunnel. <strong>Nash</strong> is the named Raffen Shiv with the big gun at the end.',
      'Kill him and loot his body immediately — <strong>Widow Maker</strong> is on him. Bodies in quest areas can despawn, so do not wander off first.',
      'If you skipped Nash: he later attacks the Aldecaldos camp during <strong>Queen of the Highway</strong>. Kill him there and loot him — the gun is still on him.'
    ],
    why: 'It shoots through walls, twice, and poisons people. In the PS4 build there is no better early-mid sniper for a tech-savvy V, and it is basically free if you just loot a corpse you were going to kill anyway.',
    gotchas: [
      'The tunnel exit is easy to sprint past. Loot Nash&rsquo;s body before the objective completes.',
      'Tech sniper rifles are heavy on stamina/charge cycles — invest in the Tech weapon perks if you plan to main this.',
      'The poison proc is a bonus, not a plan. Do not stand in the open waiting for someone to die of chemistry.'
    ],
    ps4: 'Identical on PS4. The Badlands tunnel is one of the more stable zones on last-gen — good place to farm, honestly.',
    missable: true,
    early: false
  },

  {
    id: 'overwatch',
    name: 'Overwatch',
    typeLine: 'Power Sniper Rifle · Iconic',
    type: 'sniper',
    tags: ['iconic', 'ps4'],
    district: 'Badlands — Ingall&rsquo;s Farm',
    quest: 'Riders on the Storm (Panam questline)',
    act: 'Act 2',
    how: 'Given to you by Panam the morning after the mission, at Ingall&rsquo;s Farm. It is a gift, not a drop.',
    stats: [
      ['Damage', 'Very high'],
      ['Fire mode', 'Power — suppressed silencer built in'],
      ['Special', 'Silenced: does not alert the whole district'],
      ['Missable?', 'No, but you must sleep/finish the mission'],
      ['Best for', 'Stealth openings, one-shot headshots']
    ],
    route: [
      'Complete <strong>Riders on the Storm</strong> — the Panam quest where you rescue Saul from the Wraiths and then spend the night at Ingall&rsquo;s Farm.',
      'Stay through the <strong>morning conversation</strong> with Panam. Do not drive off the moment the objective clears.',
      'Panam hands you <strong>Overwatch</strong> as a thank-you before you leave.',
      'It does not matter whether you asked for payment earlier — you still get the rifle.',
      'Open your inventory and confirm it is in the <em>Sniper Rifles</em> category. If it is not there, you left before the morning scene.'
    ],
    why: 'It is a silenced sniper rifle. On the PS4 build, where enemy detection is twitchy and loud fights spiral, a suppressed one-shot opener is the difference between a clean gig and a firefight in a stairwell.',
    gotchas: [
      'You cannot re-earn it. Leaving early is the only way to lose it.',
      'Sniper ammo is scarce early. Do not make Overwatch your only weapon.',
      'The silencer suppresses the <em>sound</em>, not the corpse. Bodies still get found.'
    ],
    ps4: 'Identical on PS4. Scoped aiming on a controller is clumsier — lean on the "hold breath"/steady aim and take one careful shot rather than five panicked ones.',
    missable: true,
    early: false
  },

  {
    id: 'malorian',
    name: 'Malorian Arms 3516',
    typeLine: 'Power Pistol · Iconic (Johnny&rsquo;s gun)',
    type: 'pistol',
    tags: ['iconic', 'missable'],
    district: 'Watson — the Ebunike (docks)',
    quest: 'Chippin&rsquo; In (Johnny&rsquo;s side job chain)',
    act: 'Act 3-ish — late',
    how: 'Taken from Grayson aboard the Ebunike during Chippin&rsquo; In.',
    stats: [
      ['Damage', 'Massive for a pistol, thermal bonus'],
      ['Fire mode', 'Power — heavy recoil, fast reload'],
      ['Special', 'Four mod slots, thermal damage'],
      ['Missable?', 'YES — one encounter'],
      ['Style', 'Maximum. It is Johnny&rsquo;s.']
    ],
    route: [
      'Progress Johnny Silverhand&rsquo;s side job chain until <strong>Chippin&rsquo; In</strong> unlocks. This is late-game content; do not rush it or you will be under-levelled.',
      'The job takes you to the <strong>Ebunike</strong>, a freighter in the Watson docks, to meet Grayson.',
      'Play the conversation out until it turns hostile (it usually does — Johnny has opinions about Grayson).',
      'Kill <strong>Grayson</strong> and loot his body for the <strong>Malorian Arms 3516</strong>. Loot before the quest wraps.',
      'Equip it and fire it once into the sea. That is the law. We did not write it.'
    ],
    why: 'The highest single-shot pistol damage in the base game, four mod slots, and the best reload animation in Night City. End-game sidearm for a handgun build.',
    gotchas: [
      'If you did not loot Grayson, the gun is gone for that save on the PS4 build.',
      'Heavy recoil. Mod it (recoil reduction) or accept that shot two is aimed at the moon.',
      'It is a <em>power</em> pistol. It ricochets. It does not wall-bang. Do not try to snipe through a wall with Johnny&rsquo;s gun and then blame us.'
    ],
    ps4: 'Identical on PS4. This is a late-game weapon on a console that struggles with big fights — the Ebunike shootout is doable, just expect chug.',
    missable: true,
    early: false
  },

  {
    id: 'dividedwestand',
    name: 'Divided We Stand',
    typeLine: 'Smart Assault Rifle · Iconic',
    type: 'rifle',
    tags: ['iconic'],
    district: 'Santo Domingo — the Stadium (Stadium Love)',
    quest: 'Stadium Love (side job) — win the shooting contest',
    act: 'Act 2',
    how: 'Win the shooting contest at the Stadium in Santo Domingo.',
    stats: [
      ['Damage', 'Good sustained'],
      ['Fire mode', 'Smart — multi-target lock'],
      ['Special', 'Can lock onto several targets at once'],
      ['Missable?', 'Yes, if you fail/lose the contest'],
      ['Hand mod', 'Smart Link needed to home']
    ],
    route: [
      'Find the <strong>Stadium Love</strong> side job in Santo Domingo (the big stadium district, near the gun range).',
      'Speak to the organiser and enter the <strong>shooting contest</strong>.',
      'Win it. Aim for the highest-value targets, keep moving, do not waste rounds on the low-point plates.',
      '<strong>Divided We Stand</strong> is the prize. Confirm it in your inventory before you walk away.',
      'If you lost, reload a save from before the contest — this is a cheap reload with almost no lost progress.'
    ],
    why: 'A smart assault rifle that paints multiple targets is one of the most forgiving weapons for a controller player. Hold the trigger near a group and let the gun do the aiming.',
    gotchas: [
      'Losing the contest costs you the gun. It is not awarded for participation. Night City does not do participation trophies.',
      'Smart weapons need <strong>Smart Link</strong> cyberware for homing. No Smart Link, no help.',
      'Smart rounds are pricey early. This is a mid-game weapon, not a starter.'
    ],
    ps4: 'Identical on PS4. Lock-on aiming actually suits a controller well, which makes this one of the most PS4-friendly iconics in the game.',
    missable: true,
    early: false
  },

  {
    id: 'archangel',
    name: 'Archangel',
    typeLine: 'Power Revolver · Iconic (Kerry&rsquo;s gun)',
    type: 'pistol',
    tags: ['iconic', 'missable'],
    district: 'Westbrook — North Oak / Kerry&rsquo;s villa',
    quest: 'A Like Supreme (Kerry Eurodyne questline)',
    act: 'Act 3 — late',
    how: 'Comes from Kerry Eurodyne&rsquo;s questline, at the end of A Like Supreme.',
    stats: [
      ['Damage', 'Very high per shot'],
      ['Fire mode', 'Power revolver — slow, deliberate'],
      ['Special', 'Unique mods, blistering crit potential'],
      ['Missable?', 'Yes — questline only'],
      ['Style', 'Rockstar. Literally.']
    ],
    route: [
      'Finish Johnny&rsquo;s chain and then run <strong>Kerry Eurodyne&rsquo;s</strong> side jobs (they unlock after Chippin&rsquo; In).',
      'Progress through the band storyline until <strong>A Like Supreme</strong> — the big reunion gig.',
      'Complete the job and <strong>stay for the aftermath conversation</strong>. Kerry hands over <strong>Archangel</strong> as part of the wrap-up.',
      'Check your inventory&rsquo;s revolver category. If it is missing, you left before the dialogue finished.',
      'Put a scope and a crit-damage mod on it and enjoy the loudest handgun in the game.'
    ],
    why: 'One of the hardest-hitting revolvers in the base game, and crit builds on the PS4 build can push it absurdly high. It is also, and this matters, extremely cool.',
    gotchas: [
      'Quests in this chain lock each other. If you blow off Kerry or leave mid-conversation, you can lose the gun permanently.',
      'Revolvers reload slowly. Mod for reload speed or learn to count your shots.',
      'If Kerry&rsquo;s quests never appear, finish more of Johnny&rsquo;s chain first — the prerequisites are not obvious.'
    ],
    ps4: 'Identical on PS4. Aim assist on revolvers is generous on last-gen — use slow, deliberate shots.',
    missable: true,
    early: false
  },

  {
    id: 'amnesty',
    name: 'Amnesty',
    typeLine: 'Power Revolver · Iconic',
    type: 'pistol',
    tags: ['iconic', 'missable'],
    district: 'Badlands — Aldecaldos camp',
    quest: 'We Gotta Live Together (Aldecaldos) — beat Cassidy&rsquo;s shooting challenge',
    act: 'Act 3 — late',
    how: 'Win Cassidy&rsquo;s shooting challenge at the Aldecaldo camp.',
    stats: [
      ['Damage', 'Very high'],
      ['Fire mode', 'Power revolver'],
      ['Special', 'Unique slot layout, crit-friendly'],
      ['Missable?', 'Yes — challenge only'],
      ['Ammo', 'Handgun rounds']
    ],
    route: [
      'Advance the Aldecaldos storyline to <strong>We Gotta Live Together</strong>. You end up at the camp with the whole family.',
      'Find <strong>Cassidy</strong> and his shooting challenge (bottles/ cans on a fence line). Talk to him to start it.',
      'Win the challenge. You do not need a perfect score, but you cannot miss half the targets.',
      '<strong>Amnesty</strong> is the prize. Loot/confirm immediately.',
      'If you lose, reload a save from before the challenge. It is a two-minute reload and worth it.'
    ],
    why: 'A late-game revolver with enormous per-shot damage and a great crit ceiling. It pairs with the same handgun build that carries Malorian and Archangel.',
    gotchas: [
      'It is easy to walk past Cassidy entirely. The camp has a lot of people talking at you.',
      'You can lose by being sloppy, not just by being bad. Take the shots you know.',
      'Once the Aldecaldos storyline moves past this point, the challenge is gone.'
    ],
    ps4: 'Identical on PS4. Controller aim makes Cassidy&rsquo;s challenge slightly harder than on PC — aim assist is on your side, but pace yourself.',
    missable: true,
    early: false
  },

  {
    id: 'planb',
    name: 'Plan B',
    typeLine: 'Power Pistol · Iconic',
    type: 'pistol',
    tags: ['iconic', 'ps4'],
    district: 'Badlands — the landfill / city dump',
    quest: 'Free roam — return to where Act 1 ended',
    act: 'Act 2, once you have a vehicle',
    how: 'Looted off Dexter DeShawn&rsquo;s body at the landfill where Act 1 drops you.',
    stats: [
      ['Damage', 'Solid mid-game pistol'],
      ['Fire mode', 'Power pistol'],
      ['Special', 'Unique mod, thematically about money'],
      ['Missable?', 'No — but easy to forget'],
      ['Ammo', 'Handgun rounds']
    ],
    route: [
      'After Act 1 ends, V wakes up in a landfill outside Night City.',
      'You can return to that landfill area once you have a vehicle (Act 2, after the world opens up). It is out past the dump, east/south-east of the city.',
      'Find <strong>Dexter DeShawn&rsquo;s body</strong> amid the trash piles — it is roughly where the story left him.',
      'Loot him for <strong>Plan B</strong>. It is sitting on a corpse nobody else bothered to check.',
      'There is genuinely nothing else there. Loot, leave, do not tell anyone we sent you.'
    ],
    why: 'A free iconic pistol you can pick up in free roam with zero risk. Not a monster, but it is free, and free is the best price.',
    gotchas: [
      'People forget this exists because the game never sends you back there.',
      'The location is bleak and full of nothing. Bring a fast car and a podcast.',
      'If Dex&rsquo;s body is not where you remember, look for the big landmark piles — the landfill has a few distinct mounds.'
    ],
    ps4: 'Identical on PS4. Driving out there is one of the calmer road trips on the map — good for testing whether your console wants to render the Badlands today.',
    missable: false,
    early: false
  },

  {
    id: 'scalpel',
    name: 'Scalpel',
    typeLine: 'Katana · Iconic',
    type: 'melee',
    tags: ['iconic', 'ps4'],
    district: 'Watson — Kabuki',
    quest: 'Big in Japan (gig)',
    act: 'Act 2',
    how: 'Reward from the gig Big in Japan in Kabuki, Watson.',
    stats: [
      ['Damage', 'High for a mid-game blade'],
      ['Special', 'Crit + bleed bonus while Sandevistan is active'],
      ['Slot', 'Melee'],
      ['Missable?', 'Soft — gig reward'],
      ['Best with', 'A Sandevistan build']
    ],
    route: [
      'Go to Kabuki in Watson and pick up the gig <strong>Big in Japan</strong>.',
      'Complete the gig the way your V would — the reward is not gated behind a specific moral choice, but you do need to finish it properly.',
      'Collect <strong>Scalpel</strong> as the reward, from the drop point / fixer handoff.',
      'Equip it and pair it with a Sandevistan cyberware. That is the entire build. There is no more build.'
    ],
    why: 'On the PS4 build, Sandevistan + blades is one of the most reliable builds in the whole game, and Scalpel is purpose-built for it: it gains crit and bleed while Sandevistan is active.',
    gotchas: [
      'Without a Sandevistan, Scalpel is just a good katana. With one, it is a war crime.',
      'Do not confuse it with Satori. Satori is the crit katana from Konpeki; Scalpel is the Sandevistan katana from a gig.',
      'The gig is easy to miss on the map. Filter your map by GIGS and look at Kabuki.'
    ],
    ps4: 'Identical on PS4. Sandevistan slows the world and speeds you up — on a base PS4 that also slows the frame rate, so keep the effect duration short.',
    missable: true,
    early: false
  },

  {
    id: 'errata',
    name: 'Errata',
    typeLine: 'Katana · Iconic',
    type: 'melee',
    tags: ['iconic', 'missable'],
    district: 'Watson — Electric Corporation building',
    quest: 'Disasterpiece (Judy questline)',
    act: 'Act 2',
    how: 'In the furnace room of the Electric Corporation building during Disasterpiece.',
    stats: [
      ['Damage', 'High'],
      ['Special', 'Guaranteed crits against burning enemies'],
      ['Slot', 'Melee'],
      ['Missable?', 'YES — mission-only room'],
      ['Synergy', 'Fire / thermal damage sources']
    ],
    route: [
      'Run Judy Alvarez&rsquo;s questline into <strong>Disasterpiece</strong>, inside the Electric Corporation building.',
      'Somewhere in the building you pass the <strong>furnace room</strong> — a hot, dark, industrial space with fire hazards.',
      'Search the furnace room thoroughly. <strong>Errata</strong> is in there.',
      'Grab it before you follow the mission objective out of the area.',
      'If you already finished Disasterpiece: there is no vendor route on PS4. It was that room or nothing.'
    ],
    why: 'Guaranteed crits on burning enemies is a genuinely strong effect, and the PS4 build gives you plenty of fire sources (grenades, thermal rounds, fire-based quickhacks).',
    gotchas: [
      'Furnace room is easy to sprint through because it is hot and horrible and you want out. Look anyway.',
      'It is a crit weapon — on a build with no crit investment it will feel average. That is a build problem, not a sword problem, but it still stings.',
      'Do not accidentally destroy it by... okay, you cannot destroy it. We just wanted to scare you. Loot it.'
    ],
    ps4: 'Identical on PS4. The Disasterpiece building runs heavy — save before entering, and loot in a calm moment.',
    missable: true,
    early: false
  },

  {
    id: 'byakko',
    name: 'Byakko',
    typeLine: 'Katana · Iconic',
    type: 'melee',
    tags: ['iconic', 'missable'],
    district: 'Westbrook — Japantown (Wakako&rsquo;s pachinko parlor)',
    quest: 'Wakako Okada&rsquo;s gig chain (incl. Professional Widow)',
    act: 'Act 2–3',
    how: 'Given by Wakako Okada after you finish her gigs, primarily Professional Widow.',
    stats: [
      ['Damage', 'High'],
      ['Special', 'Powerful leap attack; chains nicely in blade builds'],
      ['Slot', 'Melee'],
      ['Missable?', 'Yes — gig chain reward'],
      ['Best with', 'Reflexes + blades']
    ],
    route: [
      'Do every gig Wakako Okada hands you in Westbrook, especially <strong>Professional Widow</strong>.',
      'Answer her calls and read her messages — she deals her rewards through conversation, not always through a map marker.',
      'Once the chain wraps, visit <strong>Wakako&rsquo;s pachinko parlor in Japantown</strong> and collect <strong>Byakko</strong> from her.',
      'Equip it and try the leap attack from a rooftop. It is the correct way to arrive at any fight.'
    ],
    why: 'A blade with a leap attack gives you mobility on rooftops, which is how half the gigs in this game are meant to be approached. On a controller, the leap is also a fantastic panic button.',
    gotchas: [
      'You must actually finish the gigs. Walking away halfway leaves the reward locked.',
      'Wakako is a fixer — her gigs appear on the map under GIGS in Westbrook. They do not auto-start.',
      'If Wakako has no gigs for you, you may need to progress the main story one beat for new gigs to populate.'
    ],
    ps4: 'Identical on PS4. Melee builds are cheaper on last-gen than gun builds (no ammo economy), which makes Byakko a strong value pick.',
    missable: true,
    early: false
  }
];

/* ── Non-iconic "still high-end" picks, buyable/craftable ───── */
window.CP411_VENDOR_GUNS = [
  {
    name: 'Overture (Power Revolver)',
    why: 'The best non-iconic revolver in the base game. Hits like a truck, easy to find at any decent gun vendor, and works on every build.',
    where: 'Wilson at Wilson&rsquo;s Gun Shop in Watson, and most weapon vendors at higher levels.'
  },
  {
    name: 'SOR-22 (Precision Rifle)',
    why: 'A reliable precision rifle that appears in vendor stock around mid-game. No fancy gimmick — just accurate, punishing headshots.',
    where: 'Weapon vendors in Japantown and the Badlands, stock rotates with your level.'
  },
  {
    name: 'Achilles (Tech Precision Rifle)',
    why: 'The tech-rifle benchmark: charge it, shoot through the wall, ruin someone&rsquo;s afternoon. Cheaper than chasing an iconic.',
    where: 'Craftable, and stocked by higher-level weapon vendors.'
  },
  {
    name: 'Carnage (Power Shotgun)',
    why: 'Point blank, delete the room. The PS4 build loves a shotgun because close-range fights run better than long sight-lines.',
    where: 'Common vendor stock and enemy drops from mid-game onward.'
  },
  {
    name: 'Anything Legendary from a vendor',
    why: 'Rarity beats iconics on raw numbers early. A legendary non-iconic pistol will out-damage an epic iconic for a while.',
    where: 'Gun vendors restock when you level up. Visit Wilson, the Japantown vendors, and the Badlands camp.'
  }
];

/* ── Best-in-slot advice for the PS4 build ─────────────────── */
window.CP411_LOADOUT_TIPS = [
  {
    title: 'The PS4-friendly gun rule',
    body: 'Long sight-lines mean more geometry on screen, which is where base PS4 chokes. Close-range weapons (shotguns, SMGs, blades) keep the camera tight and the frames steadier. This is not just a build choice, it is a performance strategy.'
  },
  {
    title: 'Two guns, not four',
    body: 'Carry one close-range answer and one ranged answer. Everything else is inventory weight and menu time. On last-gen, less menu time is a feature.'
  },
  {
    title: 'Match the hand mod to the gun',
    body: 'Smart weapons want Smart Link. Tech weapons want charge/power mods. Power weapons want ricochet/recoil mods. Using the wrong mod makes a good gun feel broken.'
  },
  {
    title: 'Upgrade, don&rsquo;t replace',
    body: 'At any crafting station you can upgrade a weapon to your level. An iconic you love at level 12 can stay relevant at level 35 if you keep throwing components at it. Rarity upgrades need the crafting spec, which is why you never scrap specs.'
  },
  {
    title: 'Never sell an iconic',
    body: 'There is no Black Market iconic vendor on the PS4 build. Selling an iconic is the end of that gun for that save file. Sell the 40 generic pistols instead.'
  }
];
