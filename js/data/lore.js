/* ============================================================
   CYBERPUNK411 — data/lore.js
   Boot lines, loading-screen tips (for the terminally relaxed),
   orientation copy, money guide, PS4 reality check, FAQ,
   glossary, jokes and easter eggs.
   ============================================================ */

window.CP411_LORE = {

  /* ── Boot status lines (percentage-tagged) ──────────────── */
  bootLines: [
    { at: 0,   text: 'Rerouting power from the vending machine…' },
    { at: 8,   text: 'Waking up the 3D coin. It was not asleep, it was thinking…' },
    { at: 16,  text: 'Checking that you are on patch 1.6x and not some wishful thinking…' },
    { at: 24,  text: 'Asking the PS4 fan for permission to proceed…' },
    { at: 32,  text: 'Loading iconic weapon coordinates (nobody tell the Black Market)…' },
    { at: 41,  text: 'Compiling 411 excuses for why you missed Satori on the roof…' },
    { at: 50,  text: 'Calibrating braindance scanlines. Do not adjust your eyes…' },
    { at: 58,  text: 'Spinning the coin at a legally distinct speed…' },
    { at: 66,  text: 'Loading beginner check pop-ups. They will ask. They will wait…' },
    { at: 74,  text: 'Warming up the joke drawer. It is slightly sticky…' },
    { at: 82,  text: 'Counting eddies. Then counting them again. Then losing count…' },
    { at: 90,  text: 'Almost there. Do not press DO NOT PRESS yet…' },
    { at: 97,  text: 'One more thing: drink some water. The assistant cares…' }
  ],

  /* ── Loading tips: very relaxed person flavour ──────────── */
  loadingTips: [
    'LOADING TIP: If you have walked to the kitchen and forgotten why, it was snacks. It is always snacks.',
    'LOADING TIP: Take a sip of water. No seriously. Your V is hydrated. You are not.',
    'LOADING TIP: You do not need to loot every crate. You are going to loot every crate.',
    'LOADING TIP: The fridge light does not stay on when you close the door. Check again just to be sure.',
    'LOADING TIP: You have been holding the controller wrong for six years. It is fine. Continue.',
    'LOADING TIP: Staring at the loading bar does not make it faster, but we respect the commitment.',
    'LOADING TIP: That thing you were going to do later? You have now forgotten it. It was probably laundry.',
    'LOADING TIP: You can pause a game. You can pause a movie. You cannot pause the microwave. Plan accordingly.',
    'LOADING TIP: Night City has 3,000 snack vending machines. This is not a coincidence. They know.',
    'LOADING TIP: Did you leave the stove on? You did not turn the stove on. But now you will wonder all night.',
    'LOADING TIP: If you cannot remember whether you saved, the answer is no.',
    'LOADING TIP: The gun is on the roof. The gun has always been on the roof. The gun will be on the roof.',
    'LOADING TIP: Every open world looks smaller after a snack. Science.',
    'LOADING TIP: You keep checking the same three containers. They are still empty. They love you anyway.',
    'LOADING TIP: That dialogue choice you are agonising over? Ten hours from now you will not remember it. Choose the fun one.',
    'LOADING TIP: Driving in Night City at 27fps is a form of meditation, if you commit to it.',
    'LOADING TIP: Your PS4 fan is not angry at you. It is just loud. Like a friend who loves you badly.',
    'LOADING TIP: You can sell that gun, or you can hoard it forever. One of these is a personality.',
    'LOADING TIP: There is a corpse in Heywood with a talking gun on it. Go. Before you forget. You will forget.',
    'LOADING TIP: Blinking is a free animation that we cannot patch in. Please blink.',
    'LOADING TIP: If you are reading this, the game is not frozen. Probably. Give it a second.',
    'LOADING TIP: The coin has spun 4,111 times. It is not tired. You are not tired. Nobody is tired.',
    'LOADING TIP: Snacks first, then the rooftop katana. In that order. This is the only rule.',
    'LOADING TIP: You are allowed to lower the difficulty. Night City will not tell anyone. We will not tell anyone.',
    'LOADING TIP: You put the controller down to read this. Pick it back up. We will wait. We are good at waiting.'
  ],

  /* ── Orientation content (view: START) ─────────────────── */
  startContent: [
    {
      eyebrow: 'THE BASICS',
      title: 'What kind of game you are actually playing',
      html: `
        <p>Cyberpunk 2077 is an <strong>open-world action RPG</strong> with a linear story spine and a very large amount of
        optional content bolted to its ribs. On your console, it is the <strong>1.6 build</strong>: the whole base story,
        the whole base map (including the Badlands), all base-game iconic weapons, the Edgerunners-era UI improvements and
        the Wardrobe. What it does not have is anything from 2.0 onward.</p>
        <table>
          <tr><th>System</th><th>How it works on PS4 (1.6x)</th></tr>
          <tr><td><strong>Attributes</strong></td><td>Body, Reflexes, Technical Ability, Intelligence, Cool. Spent at level-up. One-time respec item exists — treat attributes as permanent.</td></tr>
          <tr><td><strong>Perks</strong></td><td>Free to refund at any time. Experiment without fear.</td></tr>
          <tr><td><strong>Street Cred</strong></td><td>Separate reputation bar. Gates gig tiers, vendor stock, and some story options.</td></tr>
          <tr><td><strong>Armor</strong></td><td>Comes from clothing and stacks across slots. Use the Wardrobe to look however you want.</td></tr>
          <tr><td><strong>Cyberware</strong></td><td>Slots per body area, no capacity system. Fill every slot you own.</td></tr>
          <tr><td><strong>Crafting</strong></td><td>Dismantle junk → components → craft/upgrade. Upgrading keeps iconic guns at your level.</td></tr>
          <tr><td><strong>Iconics</strong></td><td>Unique weapons with fixed effects. Missable. Not buyable if missed (that is 2.0+).</td></tr>
        </table>`
    },
    {
      eyebrow: 'THE FIRST HOUR',
      title: 'The ten decisions that make the rest painless',
      html: `
        <ol>
          <li><strong>Pick Normal difficulty.</strong> No achievement is tied to it, and you can change it anytime.</li>
          <li><strong>Turn motion blur off.</strong> It is the single biggest quality-of-life change on base PS4.</li>
          <li><strong>Rotate three manual saves.</strong> Before main jobs, before one-visit areas, and a "I did something dumb" slot.</li>
          <li><strong>Take the free Kiroshi optics</strong> from Vik and pay him back later.</li>
          <li><strong>Scan everything.</strong> Scanning is how loot, weak points, and secrets become visible.</li>
          <li><strong>Loot the room after every fight</strong> before touching the objective marker. Every iconic in this game is somebody&rsquo;s corpse.</li>
          <li><strong>Never sell or scrap an iconic.</strong> There is no recovery on PS4.</li>
          <li><strong>Buy Kerenzikov</strong> as soon as you can afford it. Best defensive cyberware in the base game.</li>
          <li><strong>Do Act 2 gigs before pushing the story.</strong> Levels and eddies come from gigs, not from plot.</li>
          <li><strong>Full-close the game once per session.</strong> Rest mode is not a save state, it is a countdown.</li>
        </ol>`
    },
    {
      eyebrow: 'HOW TO READ THIS APP',
      title: 'Three sections do three different jobs',
      html: `
        <p><strong>High-End Guns</strong> is the reference: every iconic worth chasing, with district, quest, exact route, and the
        moment it becomes permanent. Use it when you are standing in the wrong alley.</p>
        <p><strong>Walkthrough</strong> is the guided run: one checkpoint at a time, and it <em>stops</em> until you say you are ready.
        Every checkpoint has prepared answers for "I&rsquo;m stuck", "that didn&rsquo;t happen", and "skip me" — you cannot dead-end it.</p>
        <p><strong>Beginner Checks</strong> is the interrogation: little pop-up windows that ask whether you actually have the item,
        then answer the answer you gave. Nothing is assumed about you.</p>
        <p>Everything else — eddies, PS4 reality, FAQ, glossary — is there so you never have to open a browser tab mid-fight.</p>`
    },
    {
      eyebrow: 'TONE WARNING',
      title: 'Spoilers are fenced, not sprinkled',
      html: `
        <p>Story spoilers live inside <span class="tag tag--spoiler">SPOILER</span> blocks that stay blurred until you click them, and
        behind the <strong>Show spoilers</strong> switch in the walkthrough rail. Weapon locations are not spoilers — that is just
        geography — but ending details absolutely are.</p>
        <p>If you are the kind of person who reads the last page first: the switch is right there. We are not your parent.</p>`
    }
  ],

  /* ── Money content ─────────────────────────────────────── */
  moneyIntro: `On the PS4 build there is no stock market, no property empire, and no repeatable exploit worth your dignity. There is
    loot, there are vendors, and there are very short gaps between them. This is the honest version.`,

  moneyCards: [
    {
      title: 'Sell guns, not junk',
      rate: '€$200–2,500',
      rateNote: 'PER GUN, SCALES WITH RARITY',
      body: `A legendary gun you will never use is worth more than everything in your junk tab combined. After every fight, dump
      the generic weapons on the nearest weapon vendor. <strong>Check the vendor&rsquo;s remaining eddies first</strong> — vendors have a
      wallet and it does not refill instantly. If they are broke, disassemble the guns into components instead and sell those
      somewhere else.`
    },
    {
      title: 'Disassemble junk into components',
      rate: '€$40–400',
      rateNote: 'PER BATCH, ZERO EFFORT',
      body: `Junk items are almost worthless as junk and genuinely useful as components. Break everything in the junk tab, then
      sell any components you have thousands of. It is the least glamorous money in the game and it is always available.`
    },
    {
      title: 'Datamine access points',
      rate: '€$300–1,200',
      rateNote: 'PER HACK, ~20 SECONDS',
      body: `Access points are small blue terminals in most buildings — the Breach Protocol minigame. Some daemon reward rows
      grant <strong>money</strong>. Take those rows first, even if you are not a netrunner build. It is quick, it is safe, and it
      stacks up over a session.`
    },
    {
      title: 'NCPD scanner hustles',
      rate: '€$1,000–4,000',
      rateNote: 'PER HUSTLE INCLUDING LOOT',
      body: `Blue icons on the map. Short, contained fights with guaranteed loot nearby. On a base PS4 these are also the most
      performance-friendly activity in the game — small areas, few NPCs, stable frames.`
    },
    {
      title: 'Gigs and their loot',
      rate: '€$2,000–10,000',
      rateNote: 'PER GIG, MID-GAME',
      body: `The fixer payout is only part of it. Gigs hand you weapons, components, and access to areas full of containers.
      Loot the whole location before you walk to the exit.`
    },
    {
      title: 'Do not do this',
      rate: '€$0',
      rateNote: 'ACTUALLY ZERO',
      body: `Do not sell iconics. Do not sell crafting specs. Do not sell your only armor set. Do not sell health items. Every one
      of those is a "fast money now, expensive problem later" trade, and on PS4 there is no way to get the iconic back.`
    }
  ],

  moneyProse: `
    <h3>How vendor wallets actually work</h3>
    <p>Every vendor has a limited pool of eddies. When you sell them enough gear, their wallet empties and they stop paying for
    anything until it refills (it refills over in-game time — use the <em>Wait</em> option, or go do a gig and come back).</p>
    <p>Practical version: <strong>spread your selling across two or three vendors</strong> in a district, and check the number at
    the top of the sell screen before you haul a bag of forty pistols across the city.</p>

    <h3>The early-game spending order</h3>
    <ol>
      <li><strong>Health items</strong> — 10+ in the quick slot, always. Non-negotiable.</li>
      <li><strong>Kerenzikov</strong> — best defensive cyberware in the base game.</li>
      <li><strong>Hand cyberware matching your guns</strong> — Smart Link for smart weapons, charge/recoil for the others.</li>
      <li><strong>Component restock</strong> — so you can upgrade your two main weapons.</li>
      <li><strong>Vehicles</strong> — last. You get several free ones from story progress, and a car does not stop a bullet.</li>
    </ol>

    <h3>A word about "money exploits"</h3>
    <p>You may find guides describing duplication tricks, vendor loops, or selling a single item repeatedly. On the PS4 build
    most of those were patched, several of them can corrupt saves, and none of them are in this app on purpose. The honest
    economy is more than generous enough if you loot what you kill.</p>
  `,

  /* ── PS4 reality check ─────────────────────────────────── */
  ps4Intro: `This is not a comparison to make you feel bad about your console. It is a list of what exists in the build you own,
    so that you stop reading guides written for a version you cannot install.`,

  ps4Rows: [
    ['Last patch', '<strong>1.6x</strong> (the Edgerunners update)', 'Last-gen support ended here.'],
    ['Phantom Liberty / Dogtown', 'NO', 'Expansion is current-gen and PC only.'],
    ['Update 2.0 / 2.1 / 2.5', 'NO', 'Perk overhaul, cyberware capacity, metro, police rework — none of it.'],
    ['Wardrobe (transmog)', 'YES', 'Added in 1.6. Use it constantly.'],
    ['Full base story + all endings', 'YES', 'Base game is complete.'],
    ['All base-game iconic weapons', 'YES', 'Including the missable ones.'],
    ['Iconic Black Market vendor', 'NO', '2.0+ feature. Missed iconics are gone on PS4.'],
    ['Cyberware capacity system', 'NO', 'You have slots. Fill them all.'],
    ['Vehicle combat / car chases', 'NO', '2.0+ feature.'],
    ['Police pursuit system', 'Limited', 'Old-style NCPD response, not the 2.0 chase system.'],
    ['Metro / public transit', 'NO', '2.1 feature. Fast travel only.'],
    ['Photo mode', 'YES', 'Base version.'],
    ['Performance', 'Rough', 'Base PS4 is the floor; PS4 Pro is steadier at higher resolution.']
  ],

  ps4Prose: `
    <h3>Living with the last-gen build</h3>
    <p>The single most useful mental model: <strong>your console is rendering an open world designed for a much faster
    machine</strong>. It works, it is stable in most places, and it will occasionally drop to a slideshow in City Center at
    speed. Plan around it rather than fighting it.</p>

    <h4>Where it struggles</h4>
    <ul>
      <li><strong>Dense downtown driving</strong> — City Center and Corpo Plaza at speed. Use fast travel for long trips.</li>
      <li><strong>Big scripted fights</strong> — Konpeki Plaza, the finale, some gigs. Expect frame drops, not crashes.</li>
      <li><strong>Long sessions</strong> — memory leaks build up. Full-close the game once a session.</li>
      <li><strong>Menu spam</strong> — repeatedly opening the inventory in a busy area can stutter. Do your sorting after fights, not during.</li>
    </ul>

    <h4>Where it is fine</h4>
    <ul>
      <li>The Badlands, most of Watson, and interiors with few NPCs.</li>
      <li>Gigs and NCPD hustles — small, contained, stable.</li>
      <li>Anything after you turn the effects down (see chapter 0 of the walkthrough).</li>
    </ul>

    <h4>Save safety for long playthroughs</h4>
    <ul>
      <li>Rotate three manual saves. Auto-saves overwrite each other.</li>
      <li>Never quit while the save icon is on screen.</li>
      <li>Upload to PS Plus cloud storage or copy to USB occasionally. Two minutes now beats 100 hours gone.</li>
    </ul>

    <h3>Things last-gen genuinely does not have that guides assume</h3>
    <p>If you follow a 2.0+ guide you will be told to buy missed iconics from the Dogtown Black Market, use cyberware capacity
    planning, take the metro, do car chases, and pick new perks that do not exist in your perk tree. Ignore all of it. This
    assistant is written against 1.6 on purpose, and that is the entire reason it exists.</p>
  `,

  /* ── FAQ ──────────────────────────────────────────────── */
  faq: [
    {
      q: 'Is this assistant really PS4-only?',
      a: `<p>Yes. Every gun location, quest branch, cyberware note and stability tip is written against <strong>patch 1.6x</strong>,
      the final last-gen build. Anything that only exists in 2.0+ or Phantom Liberty is deliberately excluded — and where a guide
      elsewhere might send you looking for a vendor that does not exist, we say so explicitly.</p>`
    },
    {
      q: 'Can I still get Phantom Liberty on PS4?',
      a: `<p>No. The expansion is not available on PS4 or Xbox One, and it is not coming. It requires the 2.0-updated engine, which
      last-gen never received. If someone is selling you a PS4 Phantom Liberty code, it is either a mistake or a scam.</p>`
    },
    {
      q: 'I missed an iconic weapon. Can I get it back?',
      a: `<p>On the PS4 build: <strong>no</strong>. There is no buy-back tab, no black-market iconic vendor (that arrived with 2.0), and
      quest bodies despawn. Your only options are a save from before the moment passed, or picking it up on a later playthrough.
      This is exactly why the <strong>missable</strong> tags in the Arsenal tab exist.</p>`
    },
    {
      q: 'Does the 3D coin do anything?',
      a: `<p>It spins, it flips, it reads out its own rotation speed, and it knows a secret if you click it seven times. Functionally,
      it is decoration. Spiritually, it is load-bearing.</p>`
    },
    {
      q: 'Why does the walkthrough stop and wait?',
      a: `<p>Because auto-advancing guides are useless the moment real life happens. Every checkpoint ends with a question, and the
      assistant does not move until you answer. Each checkpoint also carries fallback answers — stuck, lost, game did something
      weird, skip me — so there is no dead end.</p>`
    },
    {
      q: 'Is there a difficulty achievement?',
      a: `<p>Not in the base game. Lowering difficulty costs you nothing except pride, and pride does not survive the Act 3 difficulty
      spike anyway.</p>`
    },
    {
      q: 'How do I make money fast without exploits?',
      a: `<p>Sell guns (not junk) at vendors with eddies left in their wallet, disassemble junk into components, datamine access
      points for money daemons, and run NCPD scanner hustles. That is roughly €$10,000 per evening of ordinary play. The Eddies
      tab has the full breakdown.</p>`
    },
    {
      q: 'Why does my game crash in the same place every time?',
      a: `<p>Most commonly: long sessions (full-close the app), dense downtown driving, or a specific scripted fight on base hardware.
      Reload an earlier save, lower difficulty, and avoid the exact triggering action. If it is the console overheating or shutting
      down, that is hardware, not the game — clean the vents.</p>`
    },
    {
      q: 'Does my progress in this app save?',
      a: `<p>Yes — walkthrough checkpoints, beginner check answers, and your settings are stored in your browser&rsquo;s local storage on
      this device. Close the tab, come back, and it remembers. The RESET button in the walkthrough rail wipes it.</p>`
    },
    {
      q: 'Are the jokes going to stop?',
      a: `<p>No. They are placed in clever places, which is where jokes belong. There is an entire drawer of them in this tab and a
      rotating supply in the loading tips.</p>`
    }
  ],

  /* ── Glossary ─────────────────────────────────────────── */
  glossary: [
    ['Iconic', 'A unique weapon with a fixed special effect and a one-of-a-kind look. Usually one per save. Missable.'],
    ['Missable', 'Content that becomes permanently unavailable if you leave an area or finish a quest without looting it. The single most important word in this app.'],
    ['Smart weapon', 'A gun that homes rounds toward targets. Requires the Smart Link hand cyberware on 1.6.'],
    ['Tech weapon', 'A gun that charges up and shoots through walls and cover. Hold the trigger; do not tap.'],
    ['Power weapon', 'A conventional gun with ricochet. No wall penetration, but excellent raw damage.'],
    ['Eddies', 'The currency. Written €$. Nicknamed "eddies" after the Eurodollar.'],
    ['Preem', 'Night City slang for excellent, premium, top-tier. From "premium."'],
    ['Choom', 'Slang for friend, close to "bro." Use sparingly, or you will sound like a tourist.'],
    ['Ripperdoc', 'Back-alley cyberware surgeon. Where you buy and install implants.'],
    ['Fixer', 'A middleman who hands out gigs. Wakako, Regina, Rogue, Dakota, and others.'],
    ['Street Cred', 'Reputation level from gigs and jobs. Separate from character level. Unlocks stock and content.'],
    ['Gig', 'A small contracted job from a fixer. The best source of money, cred, and stability-friendly combat.'],
    ['NCPD scanner hustle', 'Blue map icon. A short crime-in-progress you can interrupt for loot and XP.'],
    ['Kerenzikov', 'Cyberware that slows time when you dodge or aim while moving. The best panic button in the game.'],
    ['Sandevistan', 'Cyberware that compresses time and massively speeds you up. Blade-build staple. Also the name of a button in this app.'],
    ['Breach Protocol', 'The minigame for hacking access points. Some daemons pay money or components.'],
    ['Braindance', 'The game&rsquo;s recorded-memory playback mode. Also a look in this app, because scanlines are free.'],
    ['Wardrobe', '1.6 feature: wear your best stats while looking how you want. Added in the last-gen-friendly patch.'],
    ['Netrunner', 'A hacker build. Menu-heavy, powerful, rough on a base PS4 session.'],
    ['Night City', 'The city. 2077. It is loud, it is broken, it is home.']
  ],

  /* ── Joke drawer ──────────────────────────────────────── */
  jokes: [
    'Why did the netrunner bring a ladder to the gig? The job said to get on the mainframe.',
    'I told my ripperdoc I wanted to feel like a new man. He installed a mirror.',
    'Night City has two weather conditions: neon rain, and someone else&rsquo;s problem.',
    'My V has 4,000 eddies, three iconics and no health items. Priorities are a form of art.',
    'The mercenary walked into the Afterlife and ordered a drink. The bartender said "we only serve legends." He said "I&rsquo;ll wait."',
    'I keep a talking pistol in my apartment. It is cheaper than a therapist and it interrupts me just as often.',
    'Why is the Badlands so quiet? Everyone who complained was moved to Watson.',
    'My build is called "stealth." It consists of killing everyone very quickly and then claiming nobody saw me.',
    'A Nomad, a Corpo and a Streetkid walk into a bar. The Corpo owns the bar, the Streetkid knows the bouncer, and the Nomad is outside fixing the car.',
    'I looted an entire skyscraper and all I got was a crafting spec for a hat.',
    'Ripperdoc: "You&rsquo;ll feel a slight pinch." That was the sound of my bank account closing.',
    'My Kerenzikov triggers when I dodge and also, apparently, when I panic and press everything at once. Working as intended.',
    'I asked a fixer for a simple job. He said "no such thing." Then he gave me three. He was right and also a liar.',
    'The point of no return screen has a button that says "not yet." I have pressed it 47 times.',
    'What is a Cyberpunk&rsquo;s favourite kind of loading screen? A long one, with a tip that reminds them they left the kettle on.',
    'I do not have a hoarding problem. I have a stash with 61 identical pistols and a perfectly good explanation.',
    'Everyone in Night City is a legend. Statistically, most legends die in an alley next to a free pistol.',
    'My shooting contest strategy is to win, which is also my strategy for everything, and also why I reload saves so often.',
    'I named my car. The car does not have a name field. I named it anyway.',
    'Therapist: "And how do you feel about your relationship with Johnny?" Me: "It is complicated." Therapist: "He is in your head." Me: "It is complicated."'
  ],

  /* ── Coin secrets (7 clicks) ──────────────────────────── */
  coinSecrets: [
    'The coin is not a coin. It is 411 tiny coins in a trench coat.',
    'You clicked it seven times. Statistically, you are the first person to read this.',
    'Somewhere in Vista del Rey, a pistol is still talking to a corpse.',
    'The rooftop katana is the single most missed object in Night City. You know this now. You will still almost miss it.',
    'There is no Black Market on last-gen. There is only looting, and regret.',
    'If you are reading this at 3am, the assistant is genuinely impressed. Go drink some water.',
    'Trill Productions: making one (1) fan app, very seriously, for a console the publisher walked away from.',
    'Roll credits. Roll them slowly. Roll them in 3D. Roll them at 27 frames per second.',
    'You have unlocked nothing. The coin respects the honesty.'
  ],

  /* ── Small randomised footer / idle lines ─────────────── */
  idleLines: [
    'Still here. Still spinning.',
    'The coin is fine. The coin is fine.',
    'Take your time. Night City is not going anywhere and neither are the bodies.',
    'If you got up for snacks, the gun will still be there when you get back.',
    'Pausing a guide is a valid playstyle.',
    'We could be loading something. We are not. Enjoy this moment.'
  ]
};
