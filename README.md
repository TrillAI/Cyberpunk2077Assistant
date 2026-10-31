# CYBERPUNK411

A fan-made **field assistant for Cyberpunk 2077 on PlayStation 4** — strictly the last-gen build (patch **1.6x**),
the version that never got Phantom Liberty, never got the 2.0 overhaul, and gets left out of every guide written
after September 2023.

Open `index.html`. That is the entire installation process.

---

## What it is

| Section | What it does |
|---|---|
| **01 · Jack In** | Landing page, the 3D spinning eddie, a live rotation readout and the ground rules. |
| **02 · Start Here** | Orientation: how the 1.6 systems actually work, the ten decisions that make the first ten hours painless. |
| **03 · High-End Guns** | 14 iconic weapons mapped with district, quest, exact route, timing window, "why it's worth it", gotchas and a PS4 note. Filter by type, early-game or **missable**; search by name, district or quest. |
| **04 · Walkthrough** | Interactive, checkpoint-based, **waits for you**. Six chapters, 26 checkpoints. Every checkpoint has 3–4 prepared answers (done / stuck / game did something weird / skip me) so there are no dead ends. Progress is saved per device. |
| **05 · Beginner Checks** | Pop-up windows that **ask before they assume**. Nine beginner items — free cyberware, health items, the two Konpeki Plaza iconics, the free talking pistol, Kerenzikov, upgrades, money buffer. Each pop-up branches on the exact answer you give. |
| **06 · Eddies** | The honest PS4 economy: what pays, what doesn't, vendor wallets, spending order. |
| **07 · PS4 Truth** | A blunt feature table for the last-gen build plus stability rituals for a long playthrough. |
| **08 · FAQ + Jokes** | FAQ, glossary (auto-linked all over the app), and a drawer of jokes. |

---

## The splash sequence

1. **TRILL PRODUCTIONS** — fades in, glitches, holds, fades out. Click or press any key to skip.
2. **Boot / loading screen** — a live 3D coin, an eased progress bar, percentage-tagged status lines, and a rotating
   supply of loading tips written for the extremely relaxed.
3. **First-boot pop-up** — asks whether you have Kiroshi optics yet, and answers whichever of the four replies you pick.

The Trill splash can be replayed from the **REPLAY SPLASH** button on the home page.

---

## The coin

Built from pure CSS 3D transforms — no canvas, no WebGL, no libraries:

- two engraved faces (`€$` and `NC`) with a shine sweep,
- a ridged rim made of 36 tangent plates,
- a real physics loop: drag to spin, release for momentum, friction pulls it back to idle speed,
- **FLIP** (a burst of rotation plus a hop), **FLICK**, and **AUTO-SPIN**,
- a live readout of degrees-per-second and which face is showing,
- click it **seven times** for a secret. There are nine secrets.

---

## Animations, all game-flavoured

- **Katana-slash wipe** between sections, with a fresh loading tip each time.
- **SANDEVISTAN** mode — time compression, scanline pulses, everything sped up.
- **BRAINDANCE** mode — CRT scanlines, saturation shift, playback overlay.
- Glitch typography, CRT vignette, drifting boot grid, falling hexes, marquee ticker, eased eddie counter.
- Every animation respects `prefers-reduced-motion`.

---

## Running it

Static site, no build step, no dependencies at runtime:

```bash
# simplest
open index.html

# or serve it (any static server works)
python3 -m http.server 8080
```

### Dev test (optional)

```bash
npm install      # jsdom, dev only
npm test         # boots the app in a DOM, clicks every section and walks the whole walkthrough
```

`tests/smoke.mjs` loads the real HTML and scripts, skips both splashes, switches every tab, filters the arsenal,
opens gun details, answers a beginner check, walks all 26 checkpoints to the completion screen, and triggers the
coin secret. It exits non-zero if anything throws.

---

## Scope, honesty and disclaimers

- **PS4 only, patch 1.6x.** No Phantom Liberty, no 2.0 perks, no cyberware capacity, no metro, no Iconic Black Market
  vendor. Where other guides assume those exist, this app says so explicitly.
- Missable iconics are flagged as missable, because on this build there is genuinely no recovery route.
- Everything is plain HTML/CSS/JS — readable, editable, and yours.
- Fan project. Not affiliated with CD PROJEKT RED. *Cyberpunk 2077* and related marks belong to CD PROJEKT RED.
- Built by **Trill Productions**, for a console the publisher quietly walked away from.
