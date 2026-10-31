/* ============================================================
   CYBERPUNK411 — data/walkthrough.js
   Interactive, checkpoint-based walkthrough for the PS4 build.
   Every step STOPS and asks. Every choice has a prepared answer,
   including "I'm stuck", "my game did something weird", and
   "skip me" — so no dead ends and no blank confusion.
   ============================================================ */

window.CP411_WALKTHROUGH = {
  chapters: [
    /* ══════════════════════ CHAPTER 0 ══════════════════════ */
    {
      id: 'ch0',
      title: 'Before You Press New Game',
      sub: 'Patch level, console settings, saves, difficulty. Ten minutes now saves ten hours later.',
      steps: [
        {
          id: 'c0s1',
          phase: 'ACT 0',
          time: '~5 min',
          title: 'Confirm what build you actually have',
          body: `
            <p>Cyberpunk 2077 on PS4 is frozen at <strong>patch 1.6x</strong> — the "Edgerunners" update. Everything after that
            (2.0, 2.1, Phantom Liberty, Dogtown) is current-gen and PC only. This matters because almost every guide
            online is written for 2.0+ and will give you advice that literally does not exist on your console.</p>
            <h4>Check in 30 seconds</h4>
            <ul>
              <li>From the PS4 dashboard, highlight Cyberpunk 2077, press <code>Options</code> → <code>Information</code> → check the version number.</li>
              <li>Or in-game: main menu → the version string in the corner will read <code>1.6x</code>.</li>
              <li>If your patch is below <strong>1.6</strong>, let the console update. 1.6 is the last and best last-gen build: it fixed a lot of crashes and added the Wardrobe (transmog) system.</li>
            </ul>
            <p>If you are on a <strong>PS4 Pro</strong>, you are playing the same build as base PS4 — just with a bigger resolution and steadier frames. Nothing in this app changes between them.</p>
          `,
          note: 'Fun fact: your version of Night City is a museum piece now. A very loud, very janky museum piece. We love it.',
          choices: [
            {
              label: 'I checked — I&rsquo;m on 1.6x',
              kind: 'ok',
              answer: {
                title: 'Perfect. You&rsquo;re in the right city.',
                tone: 'good',
                html: `<p>Then this whole assistant applies to you directly. Everything you read here — every gun location,
                       every missable warning, every cyberware tip — is written against the 1.6 build, not 2.0.</p>
                       <p>Next up: console settings that make the game run like it likes you.</p>`,
                then: 'next'
              }
            },
            {
              label: 'My version number is different',
              kind: 'odd',
              answer: {
                title: 'Different is usually "not updated yet"',
                tone: 'warn',
                html: `<p>Two possibilities:</p>
                       <ul>
                         <li><strong>Lower than 1.6</strong> — you have a pending update. Close the game, press <code>Options</code> on the
                         game tile, choose <code>Check for Update</code>. Older patches crash more, and some iconic weapon behavior differs.</li>
                         <li><strong>Higher than 1.6</strong> — that would be a different platform or a different game version listed in a
                         launcher, because last-gen does not get 1.7/2.x. Double-check you are not reading the PC/PS5 number from a website
                         instead of your console.</li>
                       </ul>
                       <p>Either way, this assistant works on 1.6. If you are somehow on an older patch, the story and gun locations
                       are still valid; only stability and a few quality-of-life systems differ.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I can&rsquo;t find a version number at all',
              kind: 'stuck',
              answer: {
                title: 'No problem — we can work around it',
                tone: 'info',
                html: `<p>You do not actually need the number. Use these tells instead:</p>
                       <ul>
                         <li>Main menu shows <strong>no</strong> "Phantom Liberty" option and no Dogtown on the map → you are on last-gen.</li>
                         <li>Perk tree has the old-style layout with <em>Street Cred</em> gating perks → 1.6 or earlier.</li>
                         <li>You have a <strong>Wardrobe</strong> in your apartment → 1.6.</li>
                       </ul>
                       <p>If all three point at 1.6x, carry on. The assistant is not going to quiz you again.</p>`,
                then: 'next'
              }
            }
          ]
        },
        {
          id: 'c0s2',
          phase: 'ACT 0',
          time: '~3 min',
          title: 'Set your video options for a base PS4',
          body: `
            <p>On last-gen, the settings menu is small but it matters. The goal is <strong>fewer effects, steadier frames,
            readable world</strong>. Night City at 25fps with motion blur is a headache; Night City at 27fps without it is a game.</p>
            <h4>The list</h4>
            <ul>
              <li><strong>Motion Blur → OFF.</strong> Biggest single win. It smears everything and eats clarity during driving.</li>
              <li><strong>Film Grain → OFF.</strong> Also hides detail and costs performance.</li>
              <li><strong>Chromatic Aberration → OFF.</strong> Colours get cleaner, text gets sharper.</li>
              <li><strong>Depth of Field → OFF.</strong> Helps you read distant enemies; costs frames when on.</li>
              <li><strong>Lens Flare → your call.</strong> It is pretty. Pretty is expensive. We would turn it off.</li>
              <li><strong>HDR</strong> only if your TV genuinely does it well — bad HDR makes the yellow UI muddy.</li>
              <li><strong>Subtitles → ON</strong>, with speaker names. Night City mumbles. You will be reading in combat.</li>
            </ul>
            <p>Do not expect a miracle. Base PS4 Cyberpunk is a <em>cinematic 27fps experience</em>. These settings keep it from
            dipping into slideshow territory during the big set pieces.</p>
          `,
          note: 'If your PS4&rsquo;s fan starts sounding like a Raffen Shiv jet ski, that is normal. Just do not stack books on the vents. <em>— Trill, your assistant</em>',
          choices: [
            {
              label: 'Settings changed',
              kind: 'ok',
              answer: {
                title: 'Good. Now the game looks like a game instead of a JPEG.',
                tone: 'good',
                html: `<p>One more performance habit worth forming: <strong>close the game fully between long sessions</strong>.
                       The PS4 build leaks memory in long play sessions, and "rest mode + resume for three days" is the #1 cause of
                       the famous crash-to-dashboard. Fully close it (Hold PS button → Close Application) once a day.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I don&rsquo;t see those options',
              kind: 'odd',
              answer: {
                title: 'You might be looking in the wrong place',
                tone: 'info',
                html: `<p>The video options live in <strong>Settings → Video</strong> on the main menu or in the pause menu. They are
                       not in the accessibility tab.</p>
                       <p>If your menu genuinely has only a couple of toggles: that is normal on some base-PS4 configurations, and you
                       can skip this without losing anything. Do not spend twenty minutes hunting a toggle.</p>`,
                then: 'next'
              }
            },
            {
              label: 'Skip — I like the blur',
              kind: 'skip',
              answer: {
                title: 'Respect. Some of us enjoy running through vaseline.',
                tone: 'warn',
                html: `<p>Genuinely fine — the "cinematic" look is a taste thing and motion blur is part of how the game is
                       presented. Just know that if you start dropping frames badly in driving chases or the Kabuki market,
                       motion blur is the first thing to switch off.</p>`,
                then: 'next'
              }
            }
          ]
        },
        {
          id: 'c0s3',
          phase: 'ACT 0',
          time: '~2 min',
          title: 'Pick your difficulty before the first firefight',
          body: `
            <p>Difficulty can be changed mid-game, so nothing here is permanent. But the first two hours set your comfort level.</p>
            <ul>
              <li><strong>Easy / Normal</strong> — recommended for a first PS4 run. The build has rough edges; you want the story,
              not a war of attrition against the AI.</li>
              <li><strong>Hard</strong> — enemies hit harder and enemies that would flee will fight. Fine if you have played before.</li>
              <li><strong>Very Hard</strong> — genuinely hostile. On a controller and a 27fps console, this is a hobby for patient people.</li>
            </ul>
            <p>There is <strong>no achievement for difficulty</strong> in the base game, so there is no bragging cost to Normal.</p>
          `,
          note: 'Very Hard mode is the same game, but every enemy has a doctorate in being a problem.',
          choices: [
            {
              label: 'Normal it is',
              kind: 'ok',
              answer: {
                title: 'Correct choice for a first PS4 playthrough.',
                tone: 'good',
                html: `<p>Normal gives you room to experiment with builds — which matters, because 1.6 lets you respec attributes
                       only once (with a one-time item), so mistakes are expensive in spirit even when difficulty is lenient.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I&rsquo;m on Hard / Very Hard',
              kind: 'ok',
              answer: {
                title: 'Bold. Two survival rules:',
                tone: 'warn',
                html: `<ul>
                         <li><strong>Cover is life.</strong> On high difficulty the game becomes a cover shooter with a story attached.
                         Long peeks kill V.</li>
                         <li><strong>Carry health items always.</strong> You will run out at the worst time otherwise. The
                         <em>Bounce Back</em> line is cheap and you can craft it.</li>
                       </ul>
                       <p>Also: high difficulty makes enemies that would run away fight instead — which is a great way to get ambushed.
                       Check your mini-map, not your ego.</p>`,
                then: 'next'
              }
            },
            {
              label: 'Can I change it later?',
              kind: 'odd',
              answer: {
                title: 'Yes — pause menu, anytime.',
                tone: 'info',
                html: `<p>Difficulty is a sliding setting, not a locked choice. Drop it for the Konpeki Plaza escape, raise it back
                       when you are stronger. Nobody from CD PROJEKT RED will knock on your door.</p>`,
                then: 'next'
              }
            }
          ]
        },
        {
          id: 'c0s4',
          phase: 'ACT 0',
          time: '~3 min',
          title: 'Build a save habit before the first cutscene',
          body: `
            <p>The PS4 build auto-saves aggressively — which is normally good, but auto-saves overwrite each other, so a bad
            checkpoint can lock you into a broken spot. Manual saves are your real insurance.</p>
            <h4>The rotation</h4>
            <ol>
              <li>Keep <strong>three manual save slots</strong> rotating: A, B, C.</li>
              <li>Save A before every <em>main job</em> starts.</li>
              <li>Save B before every <em>one-visit area</em> (Konpeki Plaza, the furnace room, tunnels with named bosses).</li>
              <li>Save C is your "I did something dumb" slot — refresh it any time you are about to sell or scrap anything.</li>
            </ol>
            <p>This is how you recover a missed iconic without replaying twenty hours.</p>
          `,
          note: 'Saving before looting is legal, moral, and will one day save your entire personality.',
          choices: [
            {
              label: 'Saves are set up',
              kind: 'ok',
              answer: {
                title: 'You are officially more prepared than 90% of Night City.',
                tone: 'good',
                html: `<p>Now we start the game — and the first chapter is where the two most-missed iconics in the entire
                       base game live. Read it before Konpeki Plaza, even if you have already started.</p>`,
                then: 'next'
              }
            },
            {
              label: 'Where do I even make a manual save?',
              kind: 'stuck',
              answer: {
                title: 'Here is the exact path',
                tone: 'info',
                html: `<p>Open the pause menu (<code>Options</code>) → <strong>Save Game</strong> (not "Save and Exit") → pick any empty
                       slot → save. On PS4 the menu lags a second or two after a big fight; that is the console catching up, not you.</p>
                       <p>Also turn <strong>Auto-save = ON</strong>. It is on by default. Leave it on and let it be the safety net,
                       with your manual saves as the plan.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I already started and I&rsquo;m past Act 1',
              kind: 'skip',
              answer: {
                title: 'Then jump straight to where you are',
                tone: 'warn',
                html: `<p>Use the chapter list on the left — jump to <strong>Act 2</strong> and carry on. You do not need to replay
                       the prologue for us.</p>
                       <p>The one thing worth checking: did you loot <strong>Satori</strong> (katana, rooftop) and
                       <strong>Kongou</strong> (pistol, Yorinobu&rsquo;s bedroom) during The Heist? If not, they are gone for this save
                       on PS4. Mention it to yourself now, grieve, then keep playing.</p>`,
                then: 'next'
              }
            }
          ]
        }
      ]
    },

    /* ══════════════════════ CHAPTER 1 ══════════════════════ */
    {
      id: 'ch1',
      title: 'Act 1 — The Prologue',
      sub: 'Character creation, Vik, your first cyberware, and the two iconics everybody loses.',
      steps: [
        {
          id: 'c1s1',
          phase: 'ACT 1',
          time: '~10 min',
          title: 'Lifepath — the only choice you cannot undo',
          body: `
            <p>Your lifepath determines the <strong>first 20 minutes of the game</strong> and gives you unique dialogue options
            for the rest of the story. It does <em>not</em> lock you out of any gun, any build, or any ending.</p>
            <h4>What they actually change</h4>
            <ul>
              <li><strong>Nomad</strong> — Badlands intro, car culture, and dialogue options with nomad characters (Panam, Aldecaldos).
              Best choice if you plan to befriend Panam. Also the most cinematic opening.</li>
              <li><strong>Streetkid</strong> — Heywood intro, you know the local fixers, and you get street-savvy dialogue with gangs
              and fixers. The most "native" feeling playthrough.</li>
              <li><strong>Corpo</strong> — Arasaka desk intro, corporate dialogue options that let you bluff your way through
              conversations. Best for a social/intelligence build.</li>
            </ul>
            <p><strong>Which should a beginner pick?</strong> Streetkid. It gives you familiarity with V&rsquo;s world without any
            extra reading, and its dialogue options are the most consistently useful.</p>
          `,
          note: 'Lifepath does not affect loot. A Nomad can still be a netrunner, a Corpo can still be a hammer. Night City is nothing if not flexible.',
          choices: [
            {
              label: 'Lifepath chosen',
              kind: 'ok',
              answer: {
                title: 'Now get through the intro without dying of tutorial',
                tone: 'good',
                html: `<p>The lifepath intro is 15–20 minutes of cutscenes and one small action sequence. Do not worry about
                       loot during it — there is nothing missable there.</p>
                       <p>What matters happens the moment the world opens up: <strong>Jackie calls, and the tutorial starts.</strong></p>`,
                then: 'next'
              }
            },
            {
              label: 'Wait — should I pick Corpo for the good guns?',
              kind: 'odd',
              answer: {
                title: 'No. Guns are not lifepath-gated. Ever.',
                tone: 'info',
                html: `<p>Every iconic weapon in the base game is available on every lifepath. Lifepath changes <em>dialogue</em> and the
                       prologue, nothing else. Pick the one you want to roleplay — the arsenal is waiting regardless.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'I already picked one, just move me forward',
              kind: 'skip',
              answer: {
                title: 'Moving.',
                tone: 'info',
                html: `<p>Carry on to the tutorial. The only thing in Act 1 that can cost you permanently is missing loot
                       during the two big jobs — we will stop you before both.</p>`,
                then: 'next'
              }
            }
          ]
        },
        {
          id: 'c1s2',
          phase: 'ACT 1',
          time: '~45 min',
          title: 'The Rescue → Vik&rsquo;s clinic: get your free Kiroshi optics',
          body: `
            <p>This is the real tutorial: Jackie&rsquo;s rescue job in Watson, a scav den, and then a ride to
            <strong>Viktor Vektor</strong>, the ripperdoc under Misty&rsquo;s Esoterica in Little China.</p>
            <h4>Do these in order</h4>
            <ol>
              <li><strong>Loot the scav den like a raccoon.</strong> Every crate, every body, every duffel bag. Early components
              and eddies compound.</li>
              <li>Take the <strong>free Kiroshi optics</strong> from Vik. He installs them and tells you to pay him back later — a
              genuinely great deal and you should take it.</li>
              <li>While you are there, <strong>buy the cheapest hand cyberware</strong> he stocks if you have the eddies. Any hand mod
              you can afford starts you on the weapon-mod path.</li>
              <li>After the clinic, <strong>pay Vik back when you can afford it.</strong> Not for a mechanical reward — it just changes
              how the story treats you, and he is one of the few decent people in Night City.</li>
            </ol>
            <p><strong>Kiroshi optics matter</strong> because they give you visual scanning, and scanning is how you find
            half the loot in this game. Look at everything.</p>
          `,
          note: 'Vik: "You pay me when you can." Every other person in this city: "You pay me now, or I break the arm the money is in."',
          choices: [
            {
              label: 'Optics installed, den looted',
              kind: 'ok',
              answer: {
                title: 'Good V. Now the first big one.',
                tone: 'good',
                html: `<p>Next stop is <strong>The Heist</strong> — the Konpeki Plaza job. Two permanent iconics live inside that building,
                       and one of them is the most-missed weapon in the game.</p>
                       <p>Before you go, save manually. Seriously.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I let Vik install and I still haven&rsquo;t paid him',
              kind: 'odd',
              answer: {
                title: 'That is the intended path, not a debt collector problem',
                tone: 'info',
                html: `<p>There is no timer and no penalty. Pay him back whenever you have the eddies — later in the story the option
                       stays open. It is one of the few "nice" choices the game actually rewards with a warmer scene.</p>
                       <p>Tip: <strong>€$1,000–5,000</strong> is a comfortable amount to hand him. Do not bankrupt yourself for vibes.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'I skipped the scav den loot',
              kind: 'stuck',
              answer: {
                title: 'Not fatal, just expensive',
                tone: 'warn',
                html: `<p>You cannot go back to that specific den in most cases. Do not restart — instead fix the habit now:</p>
                       <ul>
                         <li>After <strong>every</strong> fight, do one full lap of the room before touching the objective marker.</li>
                         <li>Du sell everything you do not need; components are the real early-game currency.</li>
                         <li>If losing loot upsets you more than losing time, reload the autosave from before you left the area.</li>
                       </ul>`,
                then: 'next'
              }
            }
          ]
        },
        {
          id: 'c1s3',
          phase: 'ACT 1',
          time: '~60 min',
          title: 'The Heist — the Satori and Kongou checkpoint',
          body: `
            <p>Konpeki Plaza is a <strong>one-visit building</strong>. When the story leaves, you cannot come back. Three things
            to do before the escape sequence:</p>
            <h4>1. Kongou — Yorinobu&rsquo;s bedroom</h4>
            <p>While the mission walks you through the penthouse bedroom, search the <strong>nightstand / side tables beside the bed</strong>.
            Kongou (power pistol, iconic) is there. Grab it before you follow the marker out.</p>
            <h4>2. Satori — the AV landing pad on the roof</h4>
            <p>When the escape starts and you reach the <strong>roof landing pad</strong>, do not sprint to the AV. Sweep the pad.
            Satori (crit katana, iconic) is on the rooftop in a stash spot near the corner.</p>
            <h4>3. Save before, not during</h4>
            <p>Manual-save at the start of the penthouse. Do not rely on autosave mid-escape; it can drop you after the loot window closes.</p>
          `,
          note: 'The AV is leaving. The gun is right there. The AV will wait approximately eight seconds for your entire personality to decide.',
          choices: [
            {
              label: 'Got both Satori and Kongou',
              kind: 'ok',
              answer: {
                title: 'You have beaten the statistics. Genuinely.',
                tone: 'good',
                html: `<p>Most players finish Act 1 with neither. Satori is the critical-damage katana that carries blade builds, and
                       Kongou is a real pistol in a part of the game where your guns are still sad.</p>
                       <p>Now survive the escape and get ready for Act 2 — where the world opens up and the actual gun hunting begins.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I missed them / already left Konpeki',
              kind: 'bad',
              answer: {
                title: 'You are not alone, and here are your real options',
                tone: 'bad',
                html: `<p>On the PS4 build there is <strong>no vendor and no black market</strong> that sells missed base-game iconics — that
                       is a 2.0+ feature. So realistically:</p>
                       <ul>
                         <li><strong>Reload a Konpeki save</strong> if you have one. Search the rooftop properly this time; it takes
                         four extra minutes.</li>
                         <li><strong>No save? Play on.</strong> Satori and Kongou are excellent, not mandatory. Plenty of strong iconics are
                         still ahead: Widow Maker, Overwatch, Skippy, Malorian, Amnesty.</li>
                         <li><strong>Next playthrough:</strong> write "ROOFTOP + BEDROOM" on a sticky note. That is the whole strategy.</li>
                       </ul>
                       <p>Do not restart a 15-hour save over two weapons. That is the kind of decision this assistant exists to prevent.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I got Satori but not Kongou',
              kind: 'odd',
              answer: {
                title: 'Half a win is still a win — and the katana is the better half',
                tone: 'warn',
                html: `<p>Satori is the more valuable of the two long-term because crit-scaled melee stays relevant; Kongou is a good
                       Act 1 pistol that gets replaced later.</p>
                       <p>If you are still in the bedroom now: the nightstand cluster by the bed. If you are already on the roof: let it
                       go, finish the job, and grab <strong>Skippy</strong> in Heywood as your next free iconic pistol.</p>`,
                then: 'next'
              }
            },
            {
              label: 'The escape keeps killing me',
              kind: 'stuck',
              answer: {
                title: 'The escape is not a level, it is a hallway with a timer vibe',
                tone: 'info',
                html: `<ul>
                         <li>Do not stop to fight everything. The mission wants momentum.</li>
                         <li>Use the <strong>slow walk behind cover</strong> moments to reload and heal. Two seconds of patience beats a
                         respawn.</li>
                         <li>If you keep dying, drop difficulty one notch in the pause menu. It does not affect rewards.</li>
                         <li>Loot the roof <strong>first</strong>, then fight. Loot does not run away. You do.</li>
                       </ul>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c1s4',
          phase: 'ACT 1',
          time: '~20 min',
          title: 'End of Act 1 — the time skip and your new reality',
          body: `
            <p>Act 1 ends with one of the most famous sequences in the game. When it is over, you wake up in a landfill with
            a new passenger in your head and the entire map unlocked.</p>
            <h4>What changes immediately</h4>
            <ul>
              <li><strong>The whole map opens.</strong> Gigs, NCPD hustles, and side jobs appear by the dozen.</li>
              <li><strong>You get Johnny Silverhand</strong> — and eventually his questline, which leads to the Malorian Arms 3516.</li>
              <li><strong>Your build identity matters now.</strong> Its time to pick a lane: guns, blades, or netrunning.</li>
              <li><strong>Plan B is available</strong> — the iconic pistol on Dexter DeShawn&rsquo;s body, in the landfill you just left.
              You can drive back for it in Act 2.</li>
            </ul>
          `,
          note: 'Nothing says "fresh start" like waking up in a garbage dump with a rockstar in your skull.',
          choices: [
            {
              label: 'Act 1 done, take me to Act 2',
              kind: 'ok',
              answer: {
                title: 'Act 2 is the actual game.',
                tone: 'good',
                html: `<p>This is where we stop following the story marker and start building a V who can survive the story. In order:
                       cyberware, build lane, vehicle, then the iconic gun route.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I want to rush the main story',
              kind: 'odd',
              answer: {
                title: 'You can — but the game will punish it',
                tone: 'warn',
                html: `<p>Rushing the main story on the PS4 build means arriving at Act 3 under-levelled with bad cyberware, and Act 3
                       contains some of the hardest fights in the base game. You will hit a wall.</p>
                       <p>Minimum before pushing the story hard: <strong>level 15+</strong>, one full cyberware set, one good iconic gun,
                       and 10+ health items. Act 2 gigs are how you get all four.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'I already did loads of Act 2',
              kind: 'skip',
              answer: {
                title: 'Then use this as a checklist, not a script',
                tone: 'info',
                html: `<p>Skim chapter 2 for anything you have not done (especially <strong>Skippy</strong> and <strong>Plan B</strong>,
                       both free), then go straight to chapter 3 — the gun route — which is the part people actually come here for.</p>`,
                then: 'next'
              }
            }
          ]
        }
      ]
    },

    /* ══════════════════════ CHAPTER 2 ══════════════════════ */
    {
      id: 'ch2',
      title: 'Act 2 — Open World, Open Wallet',
      sub: 'Cyberware, a build lane, a vehicle, and three free iconics you can grab today.',
      steps: [
        {
          id: 'c2s1',
          phase: 'ACT 2',
          time: '~20 min',
          title: 'Cyberware: what actually keeps you alive on 1.6',
          body: `
            <p>On the PS4 build, cyberware is straightforward: you have slots, you buy upgrades from ripperdocs, and there is no
            "cyberware capacity" system (that arrived in 2.0). So there is no reason not to fill every slot you own.</p>
            <h4>Priority order for a beginner</h4>
            <ol>
              <li><strong>Frontal Cortex</strong> — anything that boosts crit chance or quickhack damage. Small but permanent gains.</li>
              <li><strong>Ocular (Kiroshi)</strong> — keep it upgraded; better optics = better scanning = more loot found.</li>
              <li><strong>Hands</strong> — <em>Smart Link</em> if you use smart guns, otherwise a reload/charge mod matching your gun type.</li>
              <li><strong>Skeleton</strong> — armor and carry capacity. Cheap and boring and you will be glad.</li>
              <li><strong>Nervous system</strong> — <em>Kerenzikov</em> (slow-mo when you dodge-slide/aim) is the best value cyberware in
              the base game for a gun build. Buy it as soon as you can.</li>
              <li><strong>Immune system</strong> — resistances. Grab when you have spare eddies.</li>
              <li><strong>Legs / arms</strong> — double jump or reinforced tendons are a genuine mobility upgrade; Gorilla Arms if you melee.</li>
            </ol>
            <p><strong>Ripperdocs to know:</strong> Vik in Little China (all-round), the Kabuki ripperdoc (cheap basics), and the
            Japantown / Westbrook ripperdocs for higher-tier stock as you level.</p>
          `,
          note: 'Cyberware in 1.6 is just "buy the thing, get the thing." Enjoy it. In 2.0 you need a spreadsheet and a therapist.',
          choices: [
            {
              label: 'Priority slots filled',
              kind: 'ok',
              answer: {
                title: 'You now hit harder and die slower. That is the whole game.',
                tone: 'good',
                html: `<p>If you bought exactly one thing from that list and it was <strong>Kerenzikov</strong>, you made the right call.
                       It turns a panic into a plan.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I have no money for cyberware',
              kind: 'stuck',
              answer: {
                title: 'Then we get money first — the free way',
                tone: 'info',
                html: `<p>In the first two hours of Act 2, the fastest legal money is:</p>
                       <ul>
                         <li><strong>NCPD scanner hustles</strong> — blue icons. Small fights, guaranteed loot, sellable guns.</li>
                         <li><strong>Sell guns to weapon vendors</strong> — not to drop boxes if the vendor pays more. Vendors have limited
                         eddies per visit; check the wallet before you haul a bag across the city.</li>
                         <li><strong>Datamine access points</strong> with Breach Protocol — pick the money/eddies daemons. It is free money
                         for a few seconds of a minigame.</li>
                         <li><strong>Skip buying vehicles.</strong> You will be given free ones. Spend on cyberware first.</li>
                       </ul>`,
                then: 'stay'
              }
            },
            {
              label: 'Which ripperdoc has the best stuff?',
              kind: 'odd',
              answer: {
                title: 'Depends on your level, not the doc',
                tone: 'info',
                html: `<p>Ripperdoc stock is <strong>level-gated</strong>. The same doc offers better cyberware as you level up. So the answer is:
                       whichever is closest, revisited regularly.</p>
                       <p>Vik in Little China is the convenient one (and the best-written). The Westbrook/Japantown docs tend to carry
                       the flashier high-tier stuff once you are level 25+.</p>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c2s2',
          phase: 'ACT 2',
          time: '~5 min',
          title: 'Pick a lane: guns, blades, or netrunner',
          body: `
            <p>1.6 gives you a <strong>one-time attribute respec</strong> item, but perk points are cheap to re-earn. Your
            attribute spread is the hard commitment. Do not spread points evenly — that is how you get a V who is mediocre at
            three things.</p>
            <h4>The three lanes</h4>
            <ul>
              <li><strong>Gunslinger</strong> — Reflexes + Body + Cool. Handguns/rifles, Kerenzikov, crit stacking. Most
              PS4-friendly because it works at any range and does not need much menu time.</li>
              <li><strong>Blade / melee</strong> — Reflexes + Body. Satori, Scalpel, Byakko. Cheapest build in the game (no ammo),
              best on a controller, but you take more hits.</li>
              <li><strong>Netrunner</strong> — Intelligence + Cool. Quickhacks from cover. Strong but menu-heavy, and menu time is
              the worst thing for a base PS4 session.</li>
            </ul>
            <p><strong>Beginner recommendation:</strong> Gunslinger with a katana as the panic button. Cheap to run, forgiving on a
            controller, and it uses every iconic in chapter 3.</p>
          `,
          note: 'A jack-of-all-trades V in Night City is a master of getting shot at by everyone equally.',
          choices: [
            {
              label: 'Lane picked',
              kind: 'ok',
              answer: {
                title: 'Good. Now go get a car and a free gun.',
                tone: 'good',
                html: `<p>Two quick Act 2 wins before the big gun route: a vehicle so the map stops being a hike, and
                       <strong>Skippy</strong> — the free talking smart pistol in Heywood.</p>`,
                then: 'next'
              }
            },
            {
              label: 'Can I do two lanes?',
              kind: 'odd',
              answer: {
                title: 'Yes — one primary, one "oh no" secondary',
                tone: 'info',
                html: `<p>Pick a primary lane and put a single point-splash into one backup. Classic example: <strong>guns primary,
                       blades secondary</strong> — shoot until something closes the distance, then katana.</p>
                       <p>What you should not do is split attributes three ways. Attribute points are finite (you top out around 20 per
                       attribute), and half-built lanes do not clear Act 3.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'I want to change my build later',
              kind: 'skip',
              answer: {
                title: 'You can — here is the honest cost',
                tone: 'warn',
                html: `<p>Perks can be refunded freely at any time from the perks menu, so perk mistakes are free. <strong>Attributes are
                       not</strong> — there is a single one-time respec item in the base game.</p>
                       <p>So: experiment with perks as much as you like, but choose attributes as though you mean it.</p>`,
                then: 'next'
              }
            }
          ]
        },
        {
          id: 'c2s3',
          phase: 'ACT 2',
          time: '~15 min',
          title: 'Get a vehicle (and which ones are free)',
          body: `
            <p>Act 2 hands you transport through story progress and fixer jobs. You do <strong>not</strong> need to buy the
            expensive cars on the Autofixer — several come free.</p>
            <ul>
              <li><strong>Story freebies</strong> — as you progress the main and major side stories, you are gifted vehicles.
              Keep playing; check your messages and the Autofixer for free entries.</li>
              <li><strong>Fixer rewards</strong> — some gig chains gift vehicles at the end.</li>
              <li><strong>Bought vehicles</strong> — only worth it if you love the car. They do not make you faster at being shot.</li>
            </ul>
            <p>Driving on base PS4 is where the frame rate shows its whole personality. Keep the camera steady, avoid dense downtown
            at speed if you can, and use <strong>fast travel</strong> for distances over 800m. Fast travel points are blue circles
            on the map.</p>
          `,
          note: 'Night City traffic is the only place where a 2077 hypercar and a 2004 hatchback have identical top speed: 27 frames per second.',
          choices: [
            {
              label: 'I have transport',
              kind: 'ok',
              answer: {
                title: 'Excellent. Next: free guns, no strings.',
                tone: 'good',
                html: `<p>Two free iconics are sitting in the world right now, both requiring zero combat:
                       <strong>Skippy</strong> in a Heywood alley and <strong>Plan B</strong> on a corpse in the landfill.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I can&rsquo;t afford a vehicle',
              kind: 'stuck',
              answer: {
                title: 'Then do not buy one',
                tone: 'info',
                html: `<p>You will be gifted vehicles through story progress, and until then <strong>fast travel</strong> is free. The map
                       looks like a hike; it is actually a menu.</p>
                       <p>If you have literally nothing: complete two or three NCPD hustles, sell the loot, and check the Autofixer — there
                       are cheap starter vehicles in the low five figures.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'Driving makes me nauseous / crashes the game',
              kind: 'odd',
              answer: {
                title: 'Real issue, real fixes',
                tone: 'warn',
                html: `<ul>
                         <li>Turn <strong>motion blur off</strong> if you have not — this is the nausea fix.</li>
                         <li>Use <strong>third-person camera, high angle</strong> so the horizon moves less.</li>
                         <li>Fast travel for long trips; drive only for short hops.</li>
                         <li>If the game crashes specifically while driving downtown: that is a known last-gen hotspot. Save before driving
                         into City Center.</li>
                       </ul>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c2s4',
          phase: 'ACT 2',
          time: '~30 min',
          title: 'Free iconic run #1: Skippy + Plan B',
          body: `
            <h4>Skippy (smart pistol, talking)</h4>
            <p>Heywood → <strong>Vista del Rey</strong> → dead-end alley with a corpse and a pile of belongings → pick up the pistol.
            It talks. It has opinions about your aim. It is free.</p>
            <p>Requirement: install <strong>Smart Link</strong> hand cyberware if you want it to home in on targets. Without it, it fires
            straight like any pistol.</p>
            <h4>Plan B (power pistol)</h4>
            <p>Badlands → the <strong>landfill</strong> where Act 1 ended → loot <strong>Dexter DeShawn&rsquo;s body</strong>. Free, no combat,
            and nobody ever goes there.</p>
            <p>Both of these are in the Arsenal tab with full route detail if you want the step-by-step.</p>
          `,
          note: 'One of these guns talks to you and the other belonged to a man who shot you in the head. Take them both. Ethics in Night City are a spectrum.',
          choices: [
            {
              label: 'Got both',
              kind: 'ok',
              answer: {
                title: 'Two free iconics in under an hour. Look at you.',
                tone: 'good',
                html: `<p>Your arsenal now has a smart pistol and a spare. That is a real loadout.</p>
                       <p>Next chapter is the big one: the ordered route through every other iconic so you never miss a loot window.</p>`,
                then: 'next'
              }
            },
            {
              label: 'Skippy&rsquo;s alley isn&rsquo;t where you said',
              kind: 'stuck',
              answer: {
                title: 'Vista del Rey is a maze of identical alleys',
                tone: 'info',
                html: `<p>Here is the reliable approach:</p>
                       <ul>
                         <li>Fast travel to the Vista del Rey point closest to the highway overpass.</li>
                         <li>Look for the alley with a <strong>corpse against the wall and a scatter of junk</strong> around it — Skippy is in
                         that pile, not in a container.</li>
                         <li>Scan the area with your Kiroshi (shoulder button while scanning) — lootable items highlight.</li>
                         <li>If a quest marker sent you elsewhere first, finish that beat; some world items only appear once Act 2 is fully active.</li>
                       </ul>`,
                then: 'stay'
              }
            },
            {
              label: 'Skippy keeps asking me questions',
              kind: 'odd',
              answer: {
                title: 'That is the gun&rsquo;s whole deal. Answer honestly.',
                tone: 'info',
                html: `<p>Skippy runs a small questline: it asks whether it should use <strong>lethal or non-lethal</strong> mode, and later
                       asks to be returned to its owner, <strong>Regina Jones</strong>.</p>
                       <ul>
                         <li><strong>Keep it:</strong> you keep a talking smart pistol forever, plus its non-lethal flexibility.</li>
                         <li><strong>Return it:</strong> Regina extracts the AI and returns the gun in a different form — you lose the talking
                         but it remains usable.</li>
                       </ul>
                       <p>Either is fine. <strong>Do not sell it, and do not scrap it.</strong> Those are the only two real mistakes.</p>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c2s5',
          phase: 'ACT 2',
          time: '~2 hrs',
          title: 'Build your reputation: gigs, fixers, and Street Cred',
          body: `
            <p>Street Cred is your reputation level. It is <strong>separate from your character level</strong> and it unlocks
            better vendor stock, more gigs, and certain story options. It goes up by doing gigs, NCPD hustles, and side jobs.</p>
            <h4>The efficient Act 2 loop</h4>
            <ol>
              <li>Open the map, filter to <strong>GIGS</strong>, and pick a cluster (Kabuki, Japantown, or Heywood).</li>
              <li>Do 3–4 gigs in that cluster without driving across the city between them. Loading zones are the real enemy.</li>
              <li>After each gig: loot, then <strong>sell</strong> generic guns, then check the nearest vendor&rsquo;s wallet.</li>
              <li>Every second or third gig, swing by a ripperdoc and spend. Cyberware, not clothes.</li>
              <li>When your Street Cred hits a new tier, go check vendor stock — it updates.</li>
            </ol>
            <p>This loop is how you arrive at Act 3 with a real build instead of a pile of unspent potential.</p>
          `,
          note: 'Street Cred is like a credit score, except you earn it by being helpful with a gun.',
          choices: [
            {
              label: 'Loop going, cred climbing',
              kind: 'ok',
              answer: {
                title: 'Now the guns.',
                tone: 'good',
                html: `<p>You have the fundamentals. Chapter 3 is the ordered iconic gun route — where to go, in what order, and the exact
                       moment each weapon becomes permanent or disappears forever.</p>`,
                then: 'next'
              }
            },
            {
              label: 'Gigs feel repetitive',
              kind: 'odd',
              answer: {
                title: 'They are — but they are also the engine',
                tone: 'info',
                html: `<p>Gigs repeat a shape (get in, steal someone, get out), but they carry the best small stories in the game and they
                       are the main source of eddies, cred, and cyberware money.</p>
                       <p>If you are bored, switch districts. Kabuki gigs feel different from Japantown gigs feel different from Badlands
                       jobs. Also: the fixer personalities change the tone a lot — Wakako, Regina, Dakota, Rogue.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'Just tell me the fastest money',
              kind: 'skip',
              answer: {
                title: 'Fastest legal eddies, in order',
                tone: 'good',
                html: `<ol>
                         <li><strong>Datamine access points</strong> (Breach Protocol) — pick money daemons.</li>
                         <li><strong>Sell guns</strong> at vendors — not junk, guns. Hundreds to thousands each.</li>
                         <li><strong>NCPD scanner hustles</strong> — guaranteed sellable loot, short fights.</li>
                         <li><strong>Gig completion bonuses</strong> — the payout is bigger than it looks once you add loot.</li>
                         <li>Assault-in-progress markers — thin fights, dense loot.</li>
                       </ol>
                       <p>The Eddies tab has the full breakdown, including vendor wallet behavior.</p>`,
                then: 'next'
              }
            }
          ]
        }
      ]
    },

    /* ══════════════════════ CHAPTER 3 ══════════════════════ */
    {
      id: 'ch3',
      title: 'The Iconic Gun Route',
      sub: 'The ordered checklist so you never miss a loot window again.',
      steps: [
        {
          id: 'c3s1',
          phase: 'GUN ROUTE',
          time: '~1 hr',
          title: 'Step 1 — Chaos at the All Foods plant',
          body: `
            <p><strong>Chaos</strong> (tech pistol, iconic) drops from <strong>Royce</strong>, the Maelstrom boss, at the end of
            <strong>The Pickup</strong> in the All Foods plant, Northside, Watson.</p>
            <p>The catch: <strong>he only drops it if he dies.</strong> If you resolve The Pickup peacefully, you do not get Chaos on that
            save. That is not a bug, it is a branch.</p>
            <h4>If The Pickup is already behind you</h4>
            <p>Move on to step 2. There is no vendor or recovery route on the PS4 build, so do not burn an evening looking for one.</p>
          `,
          note: 'A gun that randomises its damage type every reload. Finally, a weapon with the same attention span as us.',
          choices: [
            {
              label: 'Royce is dead and Chaos is mine',
              kind: 'ok',
              answer: {
                title: 'One down. Keep it — tech pistols eat cover for breakfast.',
                tone: 'good',
                html: `<p>Remember to <strong>charge</strong> it: hold the trigger to build power, then release to punch through walls.
                       Fired like a normal pistol, it will feel distinctly average.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I did The Pickup peacefully',
              kind: 'bad',
              answer: {
                title: 'Then Chaos is gone for this save — and that is allowed',
                tone: 'bad',
                html: `<p>Chaos is one of several branch-locked iconics. Your consolation prizes are real though: peaceful playthroughs keep
                       certain NPCs alive and open different quest content later.</p>
                       <p>Move to the next step and grab <strong>Widow Maker</strong>, which is a better gun for most builds anyway.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I&rsquo;m mid-plant right now — what do I do?',
              kind: 'stuck',
              answer: {
                title: 'Loot the body before anything else',
                tone: 'info',
                html: `<p>Kill Royce → <strong>open his body immediately</strong> → take Chaos → then talk to anyone / touch the objective.
                       Quest areas can lock or clean up bodies when the objective completes.</p>
                       <p>If the body is empty, check the surrounding floor — drops can be nudged by explosions, and grenades in that plant
                       are the number one cause of "I lost the gun in the wall."</p>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c3s2',
          phase: 'GUN ROUTE',
          time: '~45 min',
          title: 'Step 2 — Widow Maker with Panam (Ghost Town)',
          body: `
            <p><strong>Widow Maker</strong> (tech precision rifle, iconic) comes from <strong>Nash</strong> during Panam&rsquo;s
            <strong>Ghost Town</strong> main job. It fires <em>two</em> shots through cover and applies chemical damage.</p>
            <ol>
              <li>Play Ghost Town until Panam asks you to go after <strong>Nash in the tunnel</strong>. Say yes.</li>
              <li>Clear the tunnel. Nash is the named Raffen Shiv at the end with the big gun.</li>
              <li>Loot him <strong>immediately</strong>, before the objective clears.</li>
              <li>If you skipped him: he attacks the Aldecaldos camp during <strong>Queen of the Highway</strong>. Loot him there instead.</li>
            </ol>
          `,
          note: 'Two bullets through a wall. Somewhere, a Raffen Shiv is still annoyed about it.',
          choices: [
            {
              label: 'Widow Maker collected',
              kind: 'ok',
              answer: {
                title: 'Best early-mid sniper on your console. You are officially dangerous at range.',
                tone: 'good',
                html: `<p>Pair it with the Tech weapon perks and start every fight by deleting the guy on the roof. That is the correct
                       order of operations.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I skipped Nash — is it lost?',
              kind: 'odd',
              answer: {
                title: 'No! Widow Maker has a second chance',
                tone: 'good',
                html: `<p>This is the rare soft-missable. Nash returns to attack the Aldecaldos camp during <strong>Queen of the Highway</strong>.
                       Kill him there and loot him — same gun.</p>
                       <p>So do not restart. Just make sure you loot him the second time. Bodies still despawn, so loot first, celebrate later.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'Nash&rsquo;s body had nothing',
              kind: 'bad',
              answer: {
                title: 'Three reasons that happens',
                tone: 'warn',
                html: `<ul>
                         <li><strong>You looted after the objective completed</strong> — the cleanup can wipe quest bodies. Reload the
                         autosave from the tunnel and loot immediately.</li>
                         <li><strong>Explosions moved the drop</strong> — scan the floor around his position with Kiroshi.</li>
                         <li><strong>You fought the wrong NPC</strong> — Nash is the named, higher-health Raffen Shiv, not the crowd of
                         regular ones.</li>
                       </ul>
                       <p>If none of those: the Queen of the Highway fallback is your safety net.</p>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c3s3',
          phase: 'GUN ROUTE',
          time: '~1 hr',
          title: 'Step 3 — Overwatch from Panam (Riders on the Storm)',
          body: `
            <p><strong>Overwatch</strong> (silenced power sniper, iconic) is a <em>gift</em>, not a drop. You get it from Panam the
            morning after <strong>Riders on the Storm</strong>, at Ingall&rsquo;s Farm.</p>
            <ol>
              <li>Complete Riders on the Storm (rescue Saul from the Wraiths).</li>
              <li>Spend the night at Ingall&rsquo;s Farm as the mission directs.</li>
              <li><strong>Stay for the morning conversation.</strong> Do not drive off the second the objective clears.</li>
              <li>Panam hands it over regardless of whether you asked for payment earlier.</li>
            </ol>
          `,
          note: 'A silenced sniper rifle given to you by someone who likes you. Rare in Night City. Enjoy it before it asks you for a favour.',
          choices: [
            {
              label: 'Got Overwatch',
              kind: 'ok',
              answer: {
                title: 'Now you have a stealth opener.',
                tone: 'good',
                html: `<p>Use it to start encounters from range, then switch to something loud when the room wakes up. That pattern alone
                       will carry you through most gigs.</p>`,
                then: 'next'
              }
            },
            {
              label: 'Panam never gave me anything',
              kind: 'bad',
              answer: {
                title: 'You almost certainly left before the morning scene',
                tone: 'warn',
                html: `<p>The hand-off happens in the <strong>morning</strong> at the farm, in dialogue — not in a loot container and not as a
                       quest reward pop-up. If you fast-travelled or drove away during the night, you can miss it.</p>
                       <p>Options: reload the save from before the morning, or accept the loss — there are other silenced weapons, just not
                       with this much style.</p>`,
                then: 'next'
              }
            },
            {
              label: 'Is the Panam questline required?',
              kind: 'odd',
              answer: {
                title: 'Not for the ending — yes for the gun',
                tone: 'info',
                html: `<p>Panam&rsquo;s chain is optional for finishing the game, but it gates <strong>Overwatch</strong> and one of the endings
                       (the Aldecaldos route). It is also the best-written side story in the base game, which is not a mechanical argument
                       but is a real one.</p>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c3s4',
          phase: 'GUN ROUTE',
          time: '~90 min',
          title: 'Step 4 — Divided We Stand, Errata, and Scalpel (mid-game trio)',
          body: `
            <h4>Divided We Stand — Santo Domingo</h4>
            <p>Side job <strong>Stadium Love</strong>. Enter and <strong>win the shooting contest</strong> at the Stadium. Win = iconic smart
            assault rifle that locks onto multiple targets. Lose = nothing but shame and a reload.</p>
            <h4>Errata — Watson, Disasterpiece (Judy)</h4>
            <p>Inside the Electric Corporation building on Judy&rsquo;s <strong>Disasterpiece</strong> job, search the <strong>furnace room</strong>
            thoroughly. Guaranteed crits on burning enemies.</p>
            <h4>Scalpel — Watson, Kabuki</h4>
            <p>Complete the gig <strong>Big in Japan</strong>. Reward katana that stacks crit and bleed while Sandevistan is active.</p>
            <p>All three are listed in the Arsenal tab with exact routes and the "what if I missed it" notes.</p>
          `,
          note: 'A shooting contest, a furnace room, and a gig in Kabuki. Night City really does hand you three different genres of errand on the same afternoon.',
          choices: [
            {
              label: 'All three collected',
              kind: 'ok',
              answer: {
                title: 'You are now genuinely well-armed on a base PS4. That is an achievement.',
                tone: 'good',
                html: `<p>If you are running a blade build, you have Satori (crit), Errata (burn crits) and Scalpel (Sandevistan) — that is
                       an entire playstyle in three swords.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I lost the shooting contest',
              kind: 'odd',
              answer: {
                title: 'Then reload — the contest is short',
                tone: 'info',
                html: `<p>Save before talking to the organiser, then take the contest seriously: hit the <strong>high-value targets</strong>,
                       keep moving, and do not dump rounds into the low-point plates at the end when you are nervous.</p>
                       <p>A reload costs two minutes. The rifle is worth it.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'Where is the furnace room exactly?',
              kind: 'stuck',
              answer: {
                title: 'Rough directions, because the building is a maze',
                tone: 'info',
                html: `<p>Inside the Electric Corporation building, the furnace area is an <strong>industrial room with fire hazards and heavy
                       machinery</strong>, away from the clean office corridors. Follow the heat and the orange light.</p>
                       <p>When you find it, do a full lap: corners, behind machinery, on top of crates. Errata is a small pickup and it is
                       easy to miss in the gloom.</p>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c3s5',
          phase: 'GUN ROUTE',
          time: '~2 hrs',
          title: 'Step 5 — The late-game pistols: Malorian, Archangel, Amnesty',
          body: `
            <p>These three are the endgame handgun set. They arrive late because they are tied to Johnny&rsquo;s, Kerry&rsquo;s and the
            Aldecaldos&rsquo; storylines respectively.</p>
            <h4>Malorian Arms 3516 — Chippin&rsquo; In</h4>
            <p>Johnny&rsquo;s side job chain → the <strong>Ebunike</strong> ship in the docks → kill <strong>Grayson</strong> → loot his body.
            Four mod slots, thermal damage, highest pistol punch in the base game.</p>
            <h4>Archangel — A Like Supreme (Kerry)</h4>
            <p>Kerry Eurodyne&rsquo;s questline ends with the band reunion job. <strong>Stay to the end of the conversation</strong> and Kerry
            gives you the revolver.</p>
            <h4>Amnesty — We Gotta Live Together (Aldecaldos)</h4>
            <p>At the Aldecaldo camp, find <strong>Cassidy</strong> and <strong>win his shooting challenge</strong>. Losing = reload before
            the challenge.</p>
          `,
          note: 'Three legendary handguns obtained by: shooting a man on a boat, having a conversation, and winning a drinking-adjacent contest. Night City is consistent.',
          choices: [
            {
              label: 'All three in the bag',
              kind: 'ok',
              answer: {
                title: 'Your sidearm collection is complete and frankly rude.',
                tone: 'good',
                html: `<p>Mod the Malorian for recoil, put crit mods on Archangel, and use Amnesty as the "I need something to stop existing
                       immediately" gun.</p>
                       <p>Next chapter: making sure your build and gear are ready for the endgame difficulty spike.</p>`,
                then: 'next'
              }
            },
            {
              label: 'My Johnny questline hasn&rsquo;t started',
              kind: 'info',
              answer: {
                title: 'It unlocks from the main story, not from waiting',
                tone: 'info',
                html: `<p>Johnny&rsquo;s side job chain — ending in <strong>Chippin&rsquo; In</strong> — unlocks as you progress the main story into
                       Act 3 territory and build your relationship with Johnny (the more you engage with him in dialogue and main jobs,
                       the more of his content opens).</p>
                       <p>Kerry&rsquo;s chain unlocks <em>after</em> Chippin&rsquo; In, so Malorian comes first. Do not look for Archangel before it.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'Grayson didn&rsquo;t have the Malorian',
              kind: 'bad',
              answer: {
                title: 'Check where you looted, and whether the fight ended the quest',
                tone: 'warn',
                html: `<ul>
                         <li>Loot <strong>during</strong> the fight, not after the quest completes. Quest-end cleanup can remove bodies.</li>
                         <li>Scan the deck with Kiroshi — drops can slide on the ship&rsquo;s deck.</li>
                         <li>If the quest is finished and the body is gone: on PS4 there is no recovery. Reload a save from the Ebunike
                         approach if you have one.</li>
                       </ul>
                       <p>This is exactly why we told you to make manual saves before one-visit areas.</p>`,
                then: 'next'
              }
            }
          ]
        },
        {
          id: 'c3s6',
          phase: 'GUN ROUTE',
          time: '~20 min',
          title: 'Step 6 — The final missable audit',
          body: `
            <p>Before you push the story into the endgame, run this audit. Tick every one of these in your head:</p>
            <ul>
              <li><strong>Konpeki Plaza</strong> — Satori (rooftop) and Kongou (bedroom) collected?</li>
              <li><strong>All Foods</strong> — did Royce die, and did you loot Chaos?</li>
              <li><strong>Ghost Town</strong> — Nash looted for Widow Maker?</li>
              <li><strong>Riders on the Storm</strong> — morning at Ingall&rsquo;s Farm completed for Overwatch?</li>
              <li><strong>Disasterpiece</strong> — furnace room swept for Errata?</li>
              <li><strong>Stadium Love</strong> — contest won for Divided We Stand?</li>
              <li><strong>Big in Japan</strong> — finished for Scalpel?</li>
              <li><strong>Wakako&rsquo;s gigs</strong> — chain finished for Byakko?</li>
              <li><strong>Chippin&rsquo; In</strong> — Grayson looted for Malorian?</li>
              <li><strong>Amnesty</strong> — Cassidy&rsquo;s challenge beaten?</li>
            </ul>
            <p>Anything you have not done and <em>can</em> still do: do it now. Anything already gone: let it go. The game is bigger than one gun.</p>
          `,
          note: 'This is the part where the assistant nags you like a responsible adult. Consider it affection.',
          choices: [
            {
              label: 'Audit complete',
              kind: 'ok',
              answer: {
                title: 'Then you are ready for the endgame chapter.',
                tone: 'good',
                html: `<p>Next: levels, cyberware, health items, and the exact moment the story stops being reversible.</p>`,
                then: 'next'
              }
            },
            {
              label: 'Something on that list is impossible for me now',
              kind: 'bad',
              answer: {
                title: 'Then here is the honest triage',
                tone: 'warn',
                html: `<p>Rank them by what they do for your build:</p>
                       <ul>
                         <li><strong>Must-have if you can get them:</strong> Malorian (gun builds), Scalpel or Satori (blade builds), Widow Maker (any build).</li>
                         <li><strong>Nice:</strong> Overwatch, Divided We Stand, Amnesty.</li>
                         <li><strong>Display-wall tier:</strong> Plan B, Kongou at high level, Chaos if you do not use tech.</li>
                       </ul>
                       <p>Do not restart a 40-hour save for a display-wall gun. There is a new-game-plus-shaped hole in your life later, and these
                       routes will still be here.</p>`,
                then: 'next'
              }
            },
            {
              label: 'Am I going to lose them at the end of the game?',
              kind: 'odd',
              answer: {
                title: 'No — your stash survives the ending',
                tone: 'info',
                html: `<p>Weapon pickups live in your inventory/stash, not with the story. Finishing the game does not delete your iconics.
                       After the credits you are returned to a point before the finale, with everything intact.</p>
                       <p>The thing that actually resets is your <em>position in the story</em>, not your gear. So loot freely.</p>`,
                then: 'stay'
              }
            }
          ]
        }
      ]
    },

    /* ══════════════════════ CHAPTER 4 ══════════════════════ */
    {
      id: 'ch4',
      title: 'Mid & Late Game Systems',
      sub: 'Levels, armor, crafting, and the things that quietly make you stronger.',
      steps: [
        {
          id: 'c4s1',
          phase: 'SYSTEMS',
          time: '~10 min',
          title: 'How leveling actually works on 1.6',
          body: `
            <p>Two separate bars:</p>
            <ul>
              <li><strong>Character level</strong> — from XP. Gives attribute and perk points. Caps around 50.</li>
              <li><strong>Street Cred</strong> — from gigs and jobs. Unlocks vendor stock, gig tiers and some story options. Separate bar,
              separate rewards.</li>
            </ul>
            <p>Weapon damage scales with level, and enemies scale too. This is why <strong>upgrading</strong> matters: a favourite iconic
            upgraded to your level stays usable, while a legendary you found at level 10 becomes a museum piece by level 30.</p>
            <h4>Upgrade, don&rsquo;t hoard</h4>
            <p>At any crafting station: <code>Crafting → Upgrade</code> takes components and levels a specific weapon. Do it to the two or
            three guns you actually use, not all forty you own.</p>
          `,
          note: 'Your inventory is not a collection. It is a fire hazard.',
          choices: [
            {
              label: 'Understood',
              kind: 'ok',
              answer: {
                title: 'Then you already know more than most level-30 players.',
                tone: 'good',
                html: `<p>Next: armor and clothing, which the PS4 build handles differently from 2.0 (and much more simply).</p>`,
                then: 'next'
              }
            },
            {
              label: 'Where do I get components?',
              kind: 'stuck',
              answer: {
                title: 'Four sources, in order of usefulness',
                tone: 'info',
                html: `<ol>
                         <li><strong>Disassemble junk and spare guns</strong> — the everyday source. Do not sell junk; break it.</li>
                         <li><strong>Loot containers</strong> — every crate and toolbox in every building. Boring, effective.</li>
                         <li><strong>Vendors</strong> — component vendors and some weapon vendors sell them directly.</li>
                         <li><strong>Datamine access points</strong> — Breach Protocol daemons drop components.</li>
                       </ol>`,
                then: 'stay'
              }
            },
            {
              label: 'Should I hoard components or spend them?',
              kind: 'odd',
              answer: {
                title: 'Spend on your main guns, hoard the rare tiers',
                tone: 'info',
                html: `<p>Common and uncommon components: spend freely, you will drown in them. <strong>Rare/epic/legendary components</strong>:
                       save them for rarity upgrades on iconics.</p>
                       <p>The mistake is upgrading all forty guns to your level. Pick two or three. The rest are vendor money.</p>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c4s2',
          phase: 'SYSTEMS',
          time: '~5 min',
          title: 'Armor, clothes, and the Wardrobe (1.6 gift)',
          body: `
            <p>On the PS4 build, <strong>armor lives on clothing</strong>. Your jacket, trousers, boots and so on each have an armor value,
            and they stack. Outfits are therefore a stat decision <em>and</em> a fashion decision — which is why the Wardrobe matters.</p>
            <h4>Wardrobe / transmog</h4>
            <p>Patch 1.6 added the <strong>Wardrobe</strong>. It lets you <strong>wear the stats of your best gear while looking like whatever
            you want</strong>. This means you never have to choose between "ugly but armored" and "cool but dead."</p>
            <ol>
              <li>Open your inventory → Wardrobe.</li>
              <li>Set your <strong>combat loadout</strong> (highest armor pieces).</li>
              <li>Then set your <strong>appearance</strong> from anything you own.</li>
            </ol>
            <p>Use it immediately. It is the single most player-friendly thing last-gen ever got.</p>
          `,
          note: 'Finally a system that understands the real endgame: looking cool while being armoured.',
          choices: [
            {
              label: 'Wardrobe set up',
              kind: 'ok',
              answer: {
                title: 'Style is a stat now, officially.',
                tone: 'good',
                html: `<p>Next: the crafting-station habits that keep your iconics relevant all the way to the finale.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I don&rsquo;t see a Wardrobe',
              kind: 'odd',
              answer: {
                title: 'Then check your patch',
                tone: 'warn',
                html: `<p>The Wardrobe arrived in <strong>1.6</strong>. If it is missing, you are probably on an older patch — see chapter 0, step 1.
                       Your console may have a pending update.</p>
                       <p>If you are definitely on 1.6 and still cannot find it: it is accessed from your <strong>apartment stash/inventory screen</strong>,
                       not from the pause menu directly.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'Armour feels useless, I keep dying',
              kind: 'bad',
              answer: {
                title: 'Armor helps, but positioning helps more',
                tone: 'warn',
                html: `<p>Armor is a flat damage reduction — it is not a shield. On 1.6, the things that actually keep you alive are:</p>
                       <ul>
                         <li><strong>Cover</strong> and breaking line of sight.</li>
                         <li><strong>Health items bound to a quick slot</strong> — carry 10+ always.</li>
                         <li><strong>Kerenzikov</strong> slow-mo to escape a bad room.</li>
                         <li><strong>Level</strong> — enemies above your level hit like trucks no matter your jacket.</li>
                       </ul>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c4s3',
          phase: 'SYSTEMS',
          time: '~15 min',
          title: 'The crafting-station routine that keeps iconics alive',
          body: `
            <p>Every time you gain a few levels, do this 3-minute routine:</p>
            <ol>
              <li>Go to any <strong>crafting station</strong> (V&rsquo;s apartment, most gun shops, some safehouses).</li>
              <li>Dismantle all junk and every grey/green gun you are not using.</li>
              <li><code>Upgrade</code> your two main guns to your current level.</li>
              <li>If you have the crafting spec for a favourite gun, check whether a <strong>rarity upgrade</strong> is available.</li>
              <li>Craft 5–10 <strong>health items</strong> and a handful of grenades.</li>
            </ol>
            <h4>Never scrap these</h4>
            <ul>
              <li>Any <strong>crafting spec</strong> — specs are the only route to higher rarity copies of that weapon.</li>
              <li>Any <strong>iconic weapon</strong> — no vendor can replace it on PS4.</li>
              <li>Rare/epic components, until you know what you are saving them for.</li>
            </ul>
          `,
          note: 'Dismantling junk for components is the most profitable thing you will do with your hands today, and one of the few.',
          choices: [
            {
              label: 'Routine running',
              kind: 'ok',
              answer: {
                title: 'Now the endgame.',
                tone: 'good',
                html: `<p>Next chapter covers the point of no return, the difficulty spike, and how to make sure you actually finish the game
                       rather than endlessly doing gigs in Japantown (which is a valid lifestyle, but still).</p>`,
                then: 'next'
              }
            },
            {
              label: 'I sold an iconic by accident',
              kind: 'bad',
              answer: {
                title: 'Okay. Deep breath. Here is your situation.',
                tone: 'bad',
                html: `<p>On the PS4 build, <strong>you cannot buy back sold iconics</strong> — there is no buyback tab and no black market
                       iconic vendor (that is 2.0+). So:</p>
                       <ul>
                         <li><strong>Vendor restock does not return sold goods.</strong></li>
                         <li><strong>No save from before the sale?</strong> That gun is gone for this playthrough.</li>
                         <li><strong>You do have saves?</strong> Reload the manual save from before you sold it. This is exactly what slot C was for.</li>
                       </ul>
                       <p>Genuinely, we are sorry. Add it to the list of things you will do on the next run, along with the rooftop katana.</p>`,
                then: 'next'
              }
            },
            {
              label: 'What are grenades good for?',
              kind: 'odd',
              answer: {
                title: 'Room control, and moving enemies out of cover',
                tone: 'info',
                html: `<p>Grenades in 1.6 come in types: frag (damage), EMP (anti-tech/cyberware), thermal, and flash. The useful habits:</p>
                       <ul>
                         <li>Throw <strong>first</strong>, not last — start the fight by shoving enemies out of cover.</li>
                         <li>Use EMP on groups with cyberware-heavy enemies (Maelstrom, Militech).</li>
                         <li>Grenades are cheap to craft; carry more than you think you need.</li>
                       </ul>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c4s4',
          phase: 'SYSTEMS',
          time: '~5 min',
          title: 'Stability rituals for a 100-hour PS4 save',
          body: `
            <p>The last-gen build is stable <em>if</em> you treat it with respect. The ritual:</p>
            <ul>
              <li><strong>Full-close the app once a session.</strong> Rest mode + resume is the number one crash cause.</li>
              <li><strong>Rebuild the PS4 database</strong> occasionally (Safe Mode → Rebuild Database). It is not a myth; it helps
              with the open-world stutter.</li>
              <li><strong>Keep 5–10 GB of free drive space.</strong> Cyberpunk uses it for cache and save data.</li>
              <li><strong>Never quit mid-save icon.</strong> That is how you get an unreadable save.</li>
              <li><strong>Back up your save to USB</strong> now and then if you care about a long playthrough.</li>
              <li><strong>Do not fast-travel repeatedly in a quick loop</strong> — each load is a stress test. Walk, drive, or wait.</li>
            </ul>
          `,
          note: 'Night City is a beautiful, broken place. Your PS4 is also a beautiful, broken place. Be gentle with both.',
          choices: [
            {
              label: 'Rituals noted',
              kind: 'ok',
              answer: {
                title: 'Good. Now the endgame chapter.',
                tone: 'good',
                html: `<p>Last chapter: levels, gear, the point of no return, and what happens after the credits.</p>`,
                then: 'next'
              }
            },
            {
              label: 'My game already crashed and I lost progress',
              kind: 'stuck',
              answer: {
                title: 'Two recovery paths',
                tone: 'warn',
                html: `<ul>
                         <li><strong>Corrupted save file?</strong> PS4 keeps backups in <code>Settings → Application Saved Data Management</code>.
                         You can download your cloud backup (if you have PS Plus) over the broken local one.</li>
                         <li><strong>Game crashing at a specific spot?</strong> Reload an earlier save, lower difficulty, and avoid the
                         specific action that triggers it (often driving into City Center or a big explosion chain).</li>
                       </ul>
                       <p>If the console itself is failing (overheating, loud fan, shutdowns), that is hardware — clean the vents, give it air, and
                       be aware that Cyberpunk is the most demanding thing you own.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'Can I lose my save entirely?',
              kind: 'odd',
              answer: {
                title: 'It happens, which is why backups are not optional',
                tone: 'info',
                html: `<p>It is rare but real on last-gen. Upload your save to PS Plus cloud storage (automatic if you are a subscriber) and
                       periodically copy to USB.</p>
                       <p>Cost of doing this: 2 minutes. Cost of not doing this: 100 hours. The maths is on the side of the backup.</p>`,
                then: 'stay'
              }
            }
          ]
        }
      ]
    },

    /* ══════════════════════ CHAPTER 5 ══════════════════════ */
    {
      id: 'ch5',
      title: 'Point of No Return & Endings',
      sub: 'Prep checklist, the difficulty spike, and what happens after the credits. Spoilers gated.',
      steps: [
        {
          id: 'c5s1',
          phase: 'ENDGAME',
          time: '~10 min',
          title: 'The pre-finale checklist',
          body: `
            <p>Before you cross the point of no return, get these in order. The finale is the hardest stretch of the base game and it does
            not care about your roleplay.</p>
            <h4>Hard requirements</h4>
            <ul>
              <li><strong>Level 30+</strong> minimum. 35+ is comfortable. Under 25 is asking for it.</li>
              <li><strong>Every cyberware slot filled</strong> with level-appropriate gear.</li>
              <li><strong>Two weapons upgraded to your level</strong> — one close range, one ranged.</li>
              <li><strong>10+ health items</strong>, and know where the quick-slot button is.</li>
              <li><strong>Armor on every clothing slot</strong> (use the Wardrobe for looks).</li>
              <li><strong>Manual save</strong> in a fresh slot, before the final sequence.</li>
            </ul>
            <h4>Soft recommendations</h4>
            <ul>
              <li>Finish Johnny&rsquo;s and Kerry&rsquo;s chains (they change dialogue and give you the Malorian).</li>
              <li>Finish the Aldecaldos chain if you want that ending option available.</li>
              <li>Do every gig you are close to finishing. Reputation opens dialogue doors in the finale.</li>
            </ul>
          `,
          note: 'The point of no return has a very polite warning screen. It has never once been believed by anyone.',
          choices: [
            {
              label: 'Checklist done, I&rsquo;m ready',
              kind: 'ok',
              answer: {
                title: 'Then go finish your story. We will be here.',
                tone: 'good',
                html: `<p>Take the finale at your own pace. If a fight feels impossible, it is usually one of three things: under-levelled,
                       wrong gun for the range, or no health items left.</p>
                       <p>Afterwards, come back for the after-credits step.</p>`,
                then: 'next'
              }
            },
            {
              label: 'I feel under-levelled',
              kind: 'stuck',
              answer: {
                title: 'Then do not go yet. Here is the fastest catch-up.',
                tone: 'warn',
                html: `<ol>
                         <li><strong>Gigs + NCPD hustles</strong> — 1–2 levels per evening of play, plus loot money.</li>
                         <li><strong>Spend the money on cyberware</strong> before weapons. Cyberware scales unconditionally.</li>
                         <li><strong>Upgrade your two main guns</strong> to your level at a crafting station.</li>
                         <li><strong>Beat Cassidy&rsquo;s challenge / Stadium Love</strong> if you skipped them — free iconics are free levels
                         of firepower.</li>
                         <li><strong>Drop difficulty one notch</strong> if you want the story more than the challenge. No achievement is lost.</li>
                       </ol>`,
                then: 'stay'
              }
            },
            {
              label: 'How many endings are there?',
              kind: 'odd',
              answer: {
                title: 'Several — and you can see more than one without a full replay',
                tone: 'info',
                html: `<p>Open the spoiler block on this step if you want the details. Short version: the ending depends on which allies you
                       cultivated, and the game drops you back before the finale after the credits, so you can try a different door.</p>
                       <p>Nothing about the ending is decided by your guns or your lifepath. It is decided by who you helped.</p>`,
                then: 'stay'
              }
            }
          ],
          spoiler: `<p>The base game's ending branches are gated by specific side-story completions — most notably the Aldecaldos (Panam),
          Johnny/Rogue, and the secret option that only opens if your relationship with Johnny is high enough at the final decision.
          The "secret" route is famously brutal on any difficulty and near-suicidal under-levelled. Also: whichever ending you choose,
          the game returns you to the point of no return afterwards with your gear intact, so you can explore other branches.</p>`
        },
        {
          id: 'c5s2',
          phase: 'ENDGAME',
          time: '~1 hr',
          title: 'The finale difficulty spike (no spoilers)',
          body: `
            <p>Whatever route you take, the last stretch throws <strong>heavily armoured, high-damage enemies in enclosed spaces</strong>.
            This is where builds that coasted on long-range picks suddenly need a close-range answer.</p>
            <h4>Survival notes</h4>
            <ul>
              <li><strong>Tech weapons shine</strong> — walls stop being protection for the enemy.</li>
              <li><strong>Smart weapons shine</strong> — you cannot miss what the gun aims at for you.</li>
              <li><strong>Health items on the quick slot</strong>, and use them early, not at 5% health.</li>
              <li><strong>Kerenzikov</strong> is your panic button. It does not cost you anything to use.</li>
              <li>If a section genuinely will not budge: lower the difficulty, finish the story, raise it on a later run.</li>
            </ul>
          `,
          note: 'The final act is the game finally cashing all those cheques your build wrote.',
          choices: [
            {
              label: 'Noted, moving on',
              kind: 'ok',
              answer: {
                title: 'Good luck, V.',
                tone: 'good',
                html: `<p>Last step: what happens after the credits, and what to do with your save.</p>`,
                then: 'next'
              }
            },
            {
              label: 'A specific fight is destroying me',
              kind: 'stuck',
              answer: {
                title: 'Practical troubleshooting for a wall',
                tone: 'info',
                html: `<ol>
                         <li><strong>Change your gun, not your build.</strong> If it is a close-quarters fight and you are using a sniper,
                         that is the problem.</li>
                         <li><strong>Use the environment.</strong> Explosive barrels, turrets, hackable cameras.</li>
                         <li><strong>Reload a save before the arena</strong> and stock up — the game is very forgiving about this.</li>
                         <li><strong>Drop difficulty.</strong> Genuinely. The story is the point.</li>
                       </ol>`,
                then: 'stay'
              }
            },
            {
              label: 'How long is the finale?',
              kind: 'odd',
              answer: {
                title: 'Roughly 1–2 hours, depending on route and deaths',
                tone: 'info',
                html: `<p>Some endings have a long combat crawl; others are shorter and more narrative. Either way, plan a session where you are
                       not going to be interrupted mid-fight — the checkpoint spacing in the finale is not generous.</p>`,
                then: 'stay'
              }
            }
          ]
        },
        {
          id: 'c5s3',
          phase: 'ENDGAME',
          time: '~5 min',
          title: 'After the credits',
          body: `
            <p>Finishing the game does <strong>not</strong> wipe your save. You are returned to the point before the finale with all your gear,
            level and money intact, and you can keep playing the open world or pursue a different ending.</p>
            <h4>What carries over</h4>
            <ul>
              <li>Everything in your inventory and stash, including every iconic you collected.</li>
              <li>Your level, attributes, perks, cyberware, money, and Street Cred.</li>
              <li>Open side content you have not finished.</li>
            </ul>
            <h4>What you should do next</h4>
            <ul>
              <li>Grab any iconics you missed — the route in chapter 3 is still valid.</li>
              <li>Try a different ending by making a different final choice.</li>
              <li>Start a new run with a different lane (blade or netrunner) to see how differently the same story plays.</li>
            </ul>
          `,
          note: 'Your save file is immortal. Your PS4 fan is not. Give it a break between runs.',
          choices: [
            {
              label: 'Finished the game. What now?',
              kind: 'ok',
              answer: {
                title: 'Congratulations, choom. You finished the version nobody defended.',
                tone: 'good',
                html: `<p>You played Cyberpunk 2077 on a console it was famously not ready for, and you got to the end anyway. That is a real
                       achievement and there is no trophy for it.</p>
                       <p>If you want a second run: pick a different lifepath, a different lane, and take the peaceful branch of
                       <strong>The Pickup</strong> just to see the other half of the story. The guns will still be here, and now you know exactly
                       where they are.</p>
                       <p>Reset this walkthrough from the RESET button if you want to run it again from the top.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'I got a bad ending',
              kind: 'odd',
              answer: {
                title: 'There are no "bad" endings, only bleak ones',
                tone: 'info',
                html: `<p>Cyberpunk 2077&rsquo;s endings are all some flavour of bittersweet. If yours felt like a downer, it probably
                       <em>was</em> the intended tone rather than a failure state.</p>
                       <p>What changes endings is <strong>who you helped</strong>, not how well you shoot. If you want a different outcome, invest in
                       a different ally chain and choose their door at the finale.</p>`,
                then: 'stay'
              }
            },
            {
              label: 'Start a new playthrough checklist',
              kind: 'skip',
              answer: {
                title: 'Second-run plan',
                tone: 'good',
                html: `<ol>
                         <li>New lifepath, new lane.</li>
                         <li><strong>Save before Konpeki</strong> and loot the bedroom + rooftop.</li>
                         <li>Take the hostile branch of The Pickup for Chaos.</li>
                         <li>Grab Skippy in the first hour of Act 2.</li>
                         <li>Do Panam&rsquo;s chain early for Overwatch and access to the finale route.</li>
                         <li>Finish Wakako&rsquo;s gigs for Byakko, and Cassidy&rsquo;s challenge for Amnesty.</li>
                       </ol>`,
                then: 'stay'
              }
            }
          ]
        }
      ]
    }
  ]
};

/* Flattened list — used for the progress counter */
window.CP411_ALL_STEPS = window.CP411_WALKTHROUGH.chapters.reduce((acc, ch) => {
  ch.steps.forEach((s, i) => acc.push({ chapterId: ch.id, chapterTitle: ch.title, index: i, step: s }));
  return acc;
}, []);
