/* ============================================================
   CYBERPUNK411 — data/beginner.js
   Beginner "do you have it yet?" pop-ups.
   Each one ASKS first, then answers the answer you actually gave.
   ============================================================ */

window.CP411_CHECKS = [
  {
    id: 'kiroshi',
    name: 'Kiroshi Optics',
    item: 'Free cyberware · eyes',
    desc: 'The free optical cyberware Viktor Vektor installs during the early storyline. Scanning is how you find loot, enemies through walls, and half the secrets in Night City.',
    question: 'Have you had Viktor Vektor install your Kiroshi optics yet?',
    why: 'These are free, they are part of the early story, and scanning is a core mechanic. Players who skip the clinic spend the next ten hours walking past loot.',
    choices: [
      {
        label: 'Yes, I have them',
        hint: 'Vik installed them and I have scanned something',
        answer: {
          tone: 'good',
          title: 'Then you have the most important free item in the game.',
          html: `<p>Use it constantly:</p>
                 <ul>
                   <li><strong>Scan enemies</strong> before a fight — you will see their level, weaknesses, and whether they have cyberware worth hacking.</li>
                   <li><strong>Scan for loot</strong> — highlightable items appear through walls within range.</li>
                   <li><strong>Scan in alleys</strong> — this is how you find free iconics like Skippy.</li>
                 </ul>
                 <p>Upgrade the optics at any ripperdoc as you level; better optics = longer scan range.</p>`
        }
      },
      {
        label: 'No, I haven&rsquo;t been to Vik yet',
        hint: 'I&rsquo;m early in the story',
        answer: {
          tone: 'warn',
          title: 'Go now — it is free and it is on the story path.',
          html: `<p>Continue the main story until <strong>Jackie takes you to Viktor Vektor&rsquo;s clinic</strong> in Little China, Watson
                 (under Misty&rsquo;s Esoterica). He installs the Kiroshi optics as part of the scene and tells you to pay him back later.</p>
                 <p>You cannot skip this and still progress; but you <em>can</em> walk out without noticing what you got. Check your inventory
                 under <strong>Cyberware → Ocular</strong> afterwards.</p>`
        }
      },
      {
        label: 'I have them but I never scan',
        hint: 'They are installed, I just forget to use them',
        answer: {
          tone: 'info',
          title: 'Then you own a very expensive pair of sunglasses.',
          html: `<p>Scanning is a shoulder-button hold in most controllers on PS4 (check the on-screen prompt the first time). Get in the habit of
                 scanning every room before entering it:</p>
                 <ul>
                   <li>Enemies: levels, weaknesses, hackable cyberware.</li>
                   <li>Environment: cameras, turrets, explosive barrels, alternate routes.</li>
                   <li>Loot: crates, bodies, stashes — including the one gun you were about to walk past.</li>
                 </ul>`
        }
      },
      {
        label: 'I sold them / something went wrong',
        hint: 'Cyberware is gone or broken',
        answer: {
          tone: 'bad',
          title: 'Cyberware cannot be sold, so this is almost certainly a menu misunderstanding.',
          html: `<p>Installed cyberware is not inventory — it lives on the <strong>Cyberware</strong> tab and stays equipped. If you replaced your
                 optics with a different ocular implant, you still have optics, just a different type.</p>
                 <p>If the ocular slot is genuinely empty: visit any ripperdoc and buy the cheapest Kiroshi model. It is inexpensive and the
                 scanning function is identical.</p>`
        }
      }
    ]
  },

  {
    id: 'stims',
    name: 'Bounce Back health items',
    item: 'Consumable · healing',
    desc: 'The standard healing item. Cheap, craftable, and the single biggest reason people survive Act 2 fights.',
    question: 'Do you currently have at least five healing items in your quick slot?',
    why: 'Health items are the difference between a death and a story beat. Players who run out at the wrong moment lose entire evenings.',
    choices: [
      {
        label: 'Yes, I&rsquo;m stocked',
        hint: 'Five or more, on the quick slot',
        answer: {
          tone: 'good',
          title: 'Excellent. Now the advanced habit.',
          html: `<p>Use them <strong>early</strong>. The instinct is to save healing for emergencies, then die at 5% health while reaching for the
                 button. Pop one at 50% in a hard fight.</p>
                 <p>Also: bind health to a quick slot you can hit without looking. On a controller that usually means a radial menu — learn the
                 muscle memory before the boss fight, not during it.</p>`
        }
      },
      {
        label: 'No — where do I get them?',
        hint: 'I have none or almost none',
        answer: {
          tone: 'warn',
          title: 'Three ways, in order of speed',
          html: `<ol>
                   <li><strong>Buy them</strong> at any <strong>medpoint / pharmaceutical vendor</strong>, or the health vending machines around the city.</li>
                   <li><strong>Craft them</strong> at any crafting station — Bounce Back Mk.1 needs common components and you will have thousands.</li>
                   <li><strong>Loot them</strong> — enemies and medkits. Grab every single one.</li>
                 </ol>
                 <p>Do this before every main job. Ten items minimum, every time. It is not glamorous and it is why you will survive.</p>`
        }
      },
      {
        label: 'I have some but I keep dying anyway',
        hint: 'Healing is not saving me',
        answer: {
          tone: 'info',
          title: 'Then healing is not your problem — positioning is.',
          html: `<p>If you die while healing, you are usually healing <em>in the open</em>. Try:</p>
                 <ul>
                   <li><strong>Break line of sight first</strong>, then heal. Behind cover, around a corner.</li>
                   <li><strong>Kerenzikov</strong> cyberware gives you slow-mo to escape a room before you die in it.</li>
                   <li><strong>Level check</strong> — if enemies are 5+ levels above you, no amount of stims will fix that fight.</li>
                   <li>Lower the difficulty. It changes nothing about your save and everything about your evening.</li>
                 </ul>`
        }
      }
    ]
  },

  {
    id: 'satori',
    name: 'Satori (katana)',
    item: 'Free iconic · The Heist, rooftop',
    desc: 'The crit-damage katana from the Konpeki Plaza rooftop. The most commonly missed iconic weapon in the base game.',
    question: 'Did you grab Satori from the AV landing pad during The Heist?',
    why: 'If you have already left Konpeki Plaza, it is permanently gone on the PS4 build. Knowing the answer matters.',
    choices: [
      {
        label: 'Yes, I have Satori',
        hint: 'Looted the rooftop before escaping',
        answer: {
          tone: 'good',
          title: 'You beat the statistic. Most players leave it on the roof.',
          html: `<p>Satori is a crit-scaled katana, which means it gets better as your crit chance and crit damage go up. For a blade build it stays
                 relevant for the entire game.</p>
                 <p>Keep it. Upgrade it at crafting stations as you level. Never scrap it.</p>`
        }
      },
      {
        label: 'No, and I&rsquo;m still inside Konpeki',
        hint: 'I can still go back',
        answer: {
          tone: 'warn',
          title: 'Then stop reading and go look at the landing pad.',
          html: `<p>Before you trigger the escape: <strong>sweep the rooftop</strong>. Satori is in a stash spot near the corner of the AV landing
                 pad, not in a container and not on a body.</p>
                 <p>While you are in the penthouse: check the <strong>nightstand cluster beside Yorinobu&rsquo;s bed</strong> for
                 <strong>Kongou</strong> too. Two iconics, one visit.</p>`
        }
      },
      {
        label: 'No, I&rsquo;ve already left Konpeki',
        hint: 'The Heist is over',
        answer: {
          tone: 'bad',
          title: 'Then it is gone for this save — and that is genuinely okay.',
          html: `<p>On the PS4 build there is no vendor, no black market and no re-acquisition route for missed base-game iconics. That feature
                 arrived with 2.0, which last-gen never received.</p>
                 <p>Your alternatives:</p>
                 <ul>
                   <li><strong>Reload a manual save</strong> from the penthouse if you have one.</li>
                   <li><strong>Use another blade:</strong> Scalpel (Big in Japan gig) and Byakko (Wakako&rsquo;s gigs) are both excellent.</li>
                   <li><strong>Next run:</strong> sticky note that says "ROOFTOP + BEDROOM".</li>
                 </ul>`
        }
      }
    ]
  },

  {
    id: 'kongou',
    name: 'Kongou (pistol)',
    item: 'Free iconic · The Heist, bedroom',
    desc: 'A hard-hitting power pistol from Yorinobu Arasaka&rsquo;s bedroom. Small, dark, and extremely easy to walk past.',
    question: 'Do you have Kongou from Yorinobu&rsquo;s bedroom?',
    why: 'Act 1 pistols are weak, and Kongou is one of the few strong early handguns. It is also permanently missable.',
    choices: [
      {
        label: 'Yes, got it',
        hint: 'Looted the bedroom',
        answer: {
          tone: 'good',
          title: 'Good. That will carry your pistol slot for a while.',
          html: `<p>Use it as your "close the distance" gun. Power pistols ricochet — fire at the floor and walls in tight corridors and you will
                 occasionally kill someone you were not even aiming at. That is a feature.</p>
                 <p>When it starts feeling weak around level 15–20, that is your signal to start hunting the Malorian or an Overture.</p>`
        }
      },
      {
        label: 'No, missed it',
        hint: 'Left the bedroom without looting',
        answer: {
          tone: 'warn',
          title: 'Not fatal. Pistols are replaceable; katana builds are not.',
          html: `<p>Kongou is missable on the PS4 build with no recovery route. But unlike Satori, there are excellent alternatives that are
                 <em>not</em> missable:</p>
                 <ul>
                   <li><strong>Overture</strong> — buy from Wilson&rsquo;s gun shop in Watson; a top-tier non-iconic revolver.</li>
                   <li><strong>Skippy</strong> — the free talking smart pistol in Vista del Rey, Heywood.</li>
                   <li><strong>Plan B</strong> — free iconic on Dexter DeShawn&rsquo;s body at the landfill.</li>
                 </ul>`
        }
      },
      {
        label: 'I don&rsquo;t know if I did',
        hint: 'Not sure',
        answer: {
          tone: 'info',
          title: 'Then check your inventory, not your memory.',
          html: `<p>Pause → <strong>Inventory → Weapons → Pistols</strong>. Iconics have a distinct yellow-ish nameplate and a unique look. If
                 Kongou is not there, you did not get it.</p>
                 <p>This is also a good habit generally: after any big mission, open the inventory and look at what actually changed. The loot pop-up
                 is easy to miss during a firefight.</p>`
        }
      }
    ]
  },

  {
    id: 'skippy',
    name: 'Skippy (talking pistol)',
    item: 'Free iconic · Heywood alley',
    desc: 'A smart pistol lying next to a corpse in Vista del Rey. Talks constantly. Free. No quest, no fight.',
    question: 'Have you picked up Skippy yet?',
    why: 'It is free, it is strong, and the alley it is in is on nobody&rsquo;s main story path.',
    choices: [
      {
        label: 'Yes, Skippy is mine',
        hint: 'I have the talking gun',
        answer: {
          tone: 'good',
          title: 'Good. Now do not sell it.',
          html: `<p>Skippy has a small questline (lethal vs non-lethal mode, and later an offer to return it to Regina Jones). Selling it removes
                 that content permanently.</p>
                 <p>And if it feels like it is not homing in on targets: install <strong>Smart Link</strong> hand cyberware. Without it, smart weapons
                 fire like normal guns.</p>`
        }
      },
      {
        label: 'No — where exactly?',
        hint: 'I want the route',
        answer: {
          tone: 'warn',
          title: 'Heywood → Vista del Rey → dead-end alley with a corpse.',
          html: `<ol>
                   <li>Fast travel to Vista del Rey, Heywood (the point near the highway overpass).</li>
                   <li>Head into the alley network in the middle of the district.</li>
                   <li>Look for an alley with a <strong>corpse slumped against the wall and a scatter of belongings</strong>.</li>
                   <li>Skippy is in that pile on the ground. Hold the pickup prompt.</li>
                   <li>Install <strong>Smart Link</strong> from a ripperdoc to make it home in on enemies.</li>
                 </ol>`
        }
      },
      {
        label: 'I have it but I hate the talking',
        hint: 'It will not shut up',
        answer: {
          tone: 'info',
          title: 'Finish its questline and the talking stops',
          html: `<p>If you return Skippy to <strong>Regina Jones</strong> at the end of its little story, she extracts the AI and gives you back a
                 functioning (silent) pistol. You lose the personality and keep the gun.</p>
                 <p>You can also just... keep it. It grows on people. Like a fungus with opinions.</p>`
        }
      }
    ]
  },

  {
    id: 'armor',
    name: 'Armor on every slot',
    item: 'Gear · clothing',
    desc: 'On the PS4 build, armor comes from clothing and stacks across slots. Empty slots are free damage taken.',
    question: 'Is every clothing slot filled with something that has an armor value?',
    why: 'A lot of players run around with a cool jacket and no trousers. It is not a fashion crime, it is a survival one.',
    choices: [
      {
        label: 'Yes, all slots covered',
        hint: 'Jacket, shirt, trousers, boots, face',
        answer: {
          tone: 'good',
          title: 'Then set up the Wardrobe so you never have to look like a bin bag.',
          html: `<p>Patch 1.6 added the <strong>Wardrobe (transmog)</strong>: you wear your best armor stats while choosing your appearance from
                 anything you own.</p>
                 <ol>
                   <li>Inventory → Wardrobe.</li>
                   <li>Set the <strong>combat loadout</strong> to your highest-armor pieces.</li>
                   <li>Set the <strong>appearance</strong> to whatever actually looks good.</li>
                 </ol>
                 <p>Zero downside. Do it once and forget it.</p>`
        }
      },
      {
        label: 'No, some slots are empty',
        hint: 'I have gaps',
        answer: {
          tone: 'warn',
          title: 'Fix it in five minutes at any clothing vendor.',
          html: `<p>Clothing vendors are marked on the map (they look like a little hanger). Buy the cheapest armor-bearing item for every empty slot.
                 Armor is flat damage reduction and it stacks across all clothing slots.</p>
                 <p>Also loot every body and wardrobe you pass — clothing is everywhere and free armor is free.</p>`
        }
      },
      {
        label: 'I sell all my clothes for money',
        hint: 'Fashion is not my priority',
        answer: {
          tone: 'info',
          title: 'Sell the spares — keep one full armor set.',
          html: `<p>Selling clothing is a legitimate income stream, but keep a complete <strong>high-armor set</strong> equipped (or set in the Wardrobe)
                 before you sell the rest.</p>
                 <p>Sort by armor value in the inventory, keep the best of each slot, and dump the rest at a clothing vendor.</p>`
        }
      }
    ]
  },

  {
    id: 'biomonitor',
    name: 'Biomonitor / Kerenzikov',
    item: 'Cyberware · survival',
    desc: 'Two mid-tier cyberware pieces that dramatically change your survivability: one auto-revives you, the other slows time when you dodge.',
    question: 'Do you have Biomonitor or Kerenzikov installed?',
    why: 'These two are the best-value defensive cyberware in the base game, and both are ordinary purchases — no quest required.',
    choices: [
      {
        label: 'Yes, at least one',
        hint: 'Installed and working',
        answer: {
          tone: 'good',
          title: 'That is a real build decision most beginners never make.',
          html: `<p><strong>Biomonitor</strong> auto-triggers a heal when you drop low — think of it as a second life with a cooldown.
                 <strong>Kerenzikov</strong> slows time when you dodge-slide or aim while moving, which is both a panic button and a way to line up a
                 headshot on a moving target.</p>
                 <p>Upgrade both at ripperdocs as you level. They get noticeably better.</p>`
        }
      },
      {
        label: 'No, where do I buy them?',
        hint: 'Not installed yet',
        answer: {
          tone: 'warn',
          title: 'Any ripperdoc — Vik is the convenient one.',
          html: `<ul>
                   <li><strong>Kerenzikov</strong> is a <em>Nervous System</em> cyberware. Buy it first if you only buy one.</li>
                   <li><strong>Biomonitor</strong> is an <em>Integumentary/Immune</em> style implant — check the ripperdoc&rsquo;s full list; stock is
                   level-gated, so check back as you level.</li>
                   <li>Prices are usually a few thousand eddies early. Sell two guns and you are there.</li>
                 </ul>
                 <p>Cyberware is a better investment than a new car. Cars do not stop bullets.</p>`
        }
      },
      {
        label: 'I don&rsquo;t have the eddies',
        hint: 'Broke',
        answer: {
          tone: 'info',
          title: 'Then run the money tab for one evening.',
          html: `<p>Fast, legal money in Act 2:</p>
                 <ul>
                   <li><strong>NCPD scanner hustles</strong> — short fights, guaranteed sellable guns.</li>
                   <li><strong>Datamine access points</strong> with Breach Protocol — pick the money daemons.</li>
                   <li><strong>Sell guns</strong> at vendors (check the vendor&rsquo;s remaining eddies first).</li>
                   <li><strong>Disassemble junk</strong> into components, then sell the excess components.</li>
                 </ul>
                 <p>Two evenings of that and Kerenzikov is paid for.</p>`
        }
      }
    ]
  },

  {
    id: 'upgrade',
    name: 'Weapon upgrades',
    item: 'Crafting · maintenance',
    desc: 'Upgrading keeps your favourite weapon at your level instead of letting it rot in your inventory.',
    question: 'Have you upgraded at least one weapon at a crafting station?',
    why: 'This is the mechanic most players discover 30 hours late, after wondering why their iconic feels weak.',
    choices: [
      {
        label: 'Yes, I upgrade regularly',
        hint: 'I know the crafting menu',
        answer: {
          tone: 'good',
          title: 'Then you have solved the "why does my iconic feel bad at level 30" problem.',
          html: `<p>Keep the routine: every few levels, dismantle junk for components, then upgrade your two main weapons. Rarity upgrades need the
                 <strong>crafting spec</strong> for that weapon, which is why you never scrap specs.</p>`
        }
      },
      {
        label: 'No, how does it work?',
        hint: 'I did not know about this',
        answer: {
          tone: 'warn',
          title: 'Find a crafting station. Here is the whole system.',
          html: `<ol>
                   <li>Stand at a <strong>crafting station</strong> (V&rsquo;s apartment, most gun shops, safehouses).</li>
                   <li>Open <strong>Crafting</strong>, switch to the <strong>Upgrade</strong> tab.</li>
                   <li>Pick your weapon, spend components, raise its level.</li>
                   <li>Dismantle junk and unused guns first — that is where components come from.</li>
                 </ol>
                 <p>Upgrading does not change rarity. Rarity upgrades require the crafting spec for that weapon.</p>`
        }
      },
      {
        label: 'My gun is already weaker than everything I find',
        hint: 'It fell behind',
        answer: {
          tone: 'info',
          title: 'Then either upgrade it, or retire it with honour.',
          html: `<p>If a weapon is many levels behind and you lack the components, the honest answer is: use a higher-level gun you found, and keep the
                 iconic in your stash until you can afford the upgrade.</p>
                 <p>Iconics are worth keeping because their <em>special effect</em> does not scale away even when the raw damage falls behind.</p>`
        }
      }
    ]
  },

  {
    id: 'money',
    name: '€$5,000 buffer',
    item: 'Money · safety net',
    desc: 'A cash buffer means you can buy cyberware, ammo and health items without a detour.',
    question: 'Do you have at least €$5,000 to your name right now?',
    why: 'Being broke in Night City means skipping cyberware upgrades, which means getting weaker relative to the enemies.',
    choices: [
      {
        label: 'Yes, I have a buffer',
        hint: '€$5,000 or more',
        answer: {
          tone: 'good',
          title: 'Good. Spend it on cyberware, not cars.',
          html: `<p>Priority purchases at this budget: <strong>Kerenzikov</strong>, a better hand mod, a stronger skeleton implant, and always
                 health items.</p>
                 <p>Vehicles are a trap early — you get gifted several through story progress, and they do not help you survive a firefight.</p>`
        }
      },
      {
        label: 'No, I&rsquo;m broke',
        hint: 'Under €$5,000',
        answer: {
          tone: 'warn',
          title: 'Then here is the one-evening money plan.',
          html: `<ol>
                   <li>Open the map, filter to <strong>NCPD scanner hustles</strong> (the blue-ish icons). Do three in one district.</li>
                   <li>Loot <em>everything</em>, including bodies and crates.</li>
                   <li>Sell the generic guns at a <strong>weapon vendor</strong> (check their wallet first).</li>
                   <li>Disassemble junk into components and sell any excess you will not use.</li>
                   <li>Hack access points with Breach Protocol and pick the money daemons when they appear.</li>
                 </ol>
                 <p>That is usually €$8,000–15,000 for an evening of play, without any exploits.</p>`
        }
      },
      {
        label: 'I keep spending it immediately',
        hint: 'Money vanishes',
        answer: {
          tone: 'info',
          title: 'Then budget like a person with a plan.',
          html: `<p>Simple split: <strong>50% cyberware, 30% health items and ammo, 20% "fun"</strong> (clothes, cars, that gun you want).</p>
                 <p>And never sell an iconic to fund a purchase. That trade always loses.</p>`
        }
      }
    ]
  }
];
