/* ============================================================
   CYBERPUNK411 — app.js
   Boot choreography:
     1. TRILL PRODUCTIONS splash (fade in, hold, fade out)
     2. loading screen with a 3D coin, a progress bar and a
        rotating supply of extremely relaxed loading tips
     3. the app itself, plus the first beginner pop-up
   ============================================================ */

(function (APP) {
  'use strict';

  const { $, $$, store, toast, sound, util, openModal } = APP;
  const LORE = window.CP411_LORE;

  let bootTimers = [];
  let splashTimers = [];
  let tipIndex = 0;
  let tipOrder = [];

  function clearTimers(list) {
    list.forEach((t) => clearTimeout(t) || clearInterval(t));
    list.length = 0;
  }

  /* ══════════════════════════════════════════════════════════
     SPLASH 1 — TRILL PRODUCTIONS
     ══════════════════════════════════════════════════════════ */
  function playSplash(onDone) {
    const splash = $('#trill-splash');
    const app = $('#app');
    const boot = $('#boot');
    if (!splash) {
      onDone();
      return;
    }

    clearTimers(splashTimers);
    if (app) app.hidden = true;
    if (boot) boot.hidden = true;

    /* restart the CSS animations cleanly (needed on replay) */
    splash.hidden = false;
    splash.style.animation = 'none';
    splash.style.display = '';
    void splash.offsetWidth;
    splash.style.animation = '';

    let finished = false;

    const finish = (skipped) => {
      if (finished) return;
      finished = true;
      clearTimers(splashTimers);
      splash.hidden = true;
      splash.removeEventListener('click', skip);
      document.removeEventListener('keydown', skip);
      if (APP.sound.enabled) APP.sound.blip(220, 0.2, 'sawtooth');
      onDone();
    };

    const skip = () => finish(true);

    splash.addEventListener('click', skip);
    document.addEventListener('keydown', skip);

    const hold = APP.reducedMotion.matches ? 900 : 6900;
    splashTimers.push(setTimeout(() => finish(false), hold));
  }

  /* ══════════════════════════════════════════════════════════
     SPLASH 2 — BOOT / LOADING
     ══════════════════════════════════════════════════════════ */
  function buildHexes() {
    const host = $('#boot-hexes');
    if (!host || host.dataset.built) return;
    host.dataset.built = '1';

    const glyphs = '0123456789ABCDEF€$¥ΔΣΩアイウエオカキクケコサシスセソタチツテト';
    for (let i = 0; i < 26; i++) {
      const span = document.createElement('span');
      let text = '';
      const len = util.rand(4, 14);
      for (let j = 0; j < len; j++) {
        text += glyphs[Math.floor(Math.random() * glyphs.length)];
      }
      span.textContent = text;
      span.style.left = util.rand(0, 98) + '%';
      span.style.top = util.rand(-40, 0) + '%';
      span.style.animationDuration = util.rand(9, 22) + 's';
      span.style.animationDelay = '-' + util.rand(0, 20) + 's';
      span.style.fontSize = util.rand(9, 15) + 'px';
      host.appendChild(span);
    }
  }

  function playBoot(onDone) {
    const boot = $('#boot');
    if (!boot) {
      onDone();
      return;
    }

    clearTimers(bootTimers);
    buildHexes();
    tipOrder = util.shuffle(LORE.loadingTips);
    tipIndex = 0;

    boot.hidden = false;
    boot.style.animation = 'none';
    void boot.offsetWidth;
    boot.style.animation = '';

    APP.ui.initBootCoin();

    const progressFill = $('#boot-progress-fill');
    const percentEl = $('#boot-percent');
    const statusEl = $('#boot-status');
    const stepEl = $('#boot-step');
    const tipEl = $('#boot-tip');
    const tipIdxEl = $('#boot-tip-index');

    if (progressFill) progressFill.style.width = '0%';
    if (percentEl) percentEl.textContent = '0';

    let done = false;
    const finishBoot = () => {
      if (done) return;
      done = true;
      clearTimers(bootTimers);
      boot.hidden = true;
      boot.removeEventListener('click', finishBoot);
      document.removeEventListener('keydown', finishBoot);
      onDone();
    };

    /* the loading screen is skippable too — nobody should be trapped in a bar */
    boot.addEventListener('click', finishBoot);
    document.addEventListener('keydown', finishBoot);

    const totalDuration = APP.reducedMotion.matches ? 1600 : 6400;
    const start = performance.now();
    let lastLineShown = -1;
    let lastTipAt = 0;
    let raf = null;

    function frame(now) {
      const elapsed = now - start;
      const linear = Math.min(1, elapsed / totalDuration);
      /* ease so it feels like a real loading bar: fast, stall, sprint */
      const eased = linear < 0.7 ? linear * 0.82 : 0.574 + (linear - 0.7) * 1.42;
      const pct = Math.min(100, Math.round(eased * 100));

      if (progressFill) progressFill.style.width = pct + '%';
      if (percentEl) percentEl.textContent = String(pct);

      /* status line by threshold */
      let line = LORE.bootLines[0];
      LORE.bootLines.forEach((entry) => {
        if (pct >= entry.at) line = entry;
      });
      if (statusEl && line.text !== statusEl.textContent) {
        statusEl.textContent = line.text;
      }
      if (stepEl) {
        stepEl.textContent =
          pct < 20 ? 'LOADING CORE' : pct < 45 ? 'MAPPING ARSENAL' : pct < 72 ? 'WRITING CHECKPOINTS' : pct < 95 ? 'POLISHING COIN' : 'ALMOST PREEM';
      }

      /* rotate loading tip every ~2.2s */
      if (tipEl && now - lastTipAt > 2200) {
        lastTipAt = now;
        const tip = tipOrder[tipIndex % tipOrder.length];
        tipEl.style.opacity = '0';
        setTimeout(() => {
          tipEl.textContent = tip.replace('LOADING TIP: ', '');
          tipEl.style.opacity = '1';
        }, 140);
        if (tipIdxEl) tipIdxEl.textContent = util.pad3((tipIndex % tipOrder.length) + 1);
        tipIndex++;
      }

      if (linear < 1) {
        raf = requestAnimationFrame(frame);
      } else {
        if (progressFill) progressFill.style.width = '100%';
        if (percentEl) percentEl.textContent = '100';
        bootTimers.push(setTimeout(finishBoot, 520));
      }
    }

    raf = requestAnimationFrame(frame);

    /* guard against a backgrounded tab pausing rAF forever */
    bootTimers.push(setTimeout(finishBoot, totalDuration + 4200));
  }

  /* ══════════════════════════════════════════════════════════
     APP START
     ══════════════════════════════════════════════════════════ */
  function startApp() {
    const app = $('#app');
    if (app) app.hidden = false;

    APP.wireModal();
    APP.wireTooltips();
    APP.ui.init();
    APP.walkthrough.wire();
    APP.walkthrough.render();

    /* restore the last tab you were on */
    const lastTab = store.get('lastTab', 'home');
    if (lastTab && lastTab !== 'home') {
      APP.ui.switchView(lastTab, { noScroll: true, force: true });
    }

    /* small welcome */
    setTimeout(() => {
      toast('CYBERPUNK411 online. PS4 build, patch 1.6x. No Phantom Liberty, no nonsense.', 'cyan');
    }, 500);

    setTimeout(() => {
      const tips = [
        'The coin is draggable. It also flips. It has opinions about being clicked seven times.',
        'The walkthrough waits for you. It literally cannot move without your input.',
        'Every yellow button leads somewhere. Even DO NOT PRESS. Especially DO NOT PRESS.'
      ];
      toast(util.pick(tips), 'yellow');
    }, 4200);

    /* the "splash screen pop-up" — asks about a beginner item, once per device */
    if (!store.get('onboarded', false)) {
      setTimeout(() => {
        openWelcomePopup();
        store.set('onboarded', true);
      }, 1400);
    }
  }

  function openWelcomePopup() {
    openModal({
      title: 'CYBERPUNK411 // FIRST BOOT',
      html: `
        <p class="pop__kicker">A POP-UP, AS PROMISED · BEFORE ANYTHING ELSE</p>
        <h3 class="pop__q">Before we start: do you already have Kiroshi optics installed?</h3>
        <p class="pop__why">This is the first of nine beginner checks. It is the free cyberware Viktor Vektor gives you early on,
          and it is the single item that teaches you to scan for loot — which is how you find half the guns in this app.</p>
        <div class="pop__choices">
          <button class="pop__choice" data-welcome="have">
            <b>01</b><span>Yes, I have them<small>Show me what to do with them</small></span>
          </button>
          <button class="pop__choice" data-welcome="notyet">
            <b>02</b><span>No, not yet<small>Tell me exactly where and when</small></span>
          </button>
          <button class="pop__choice" data-welcome="unsure">
            <b>03</b><span>I have no idea what that is<small>Start from the very beginning</small></span>
          </button>
          <button class="pop__choice" data-welcome="guns">
            <b>04</b><span>Skip the check — I came for the guns<small>Straight to the arsenal</small></span>
          </button>
        </div>
        <p class="pop__why" style="margin-top:14px">You can re-run this and the other eight checks any time in
          <strong>05 · Beginner Checks</strong>. Nothing here is a one-shot question — the assistant will always ask again.</p>`,
      after(body) {
        $$('[data-welcome]', body).forEach((btn) => {
          btn.addEventListener('click', () => {
            const kind = btn.dataset.welcome;
            sound.confirm();
            APP.closeModal();
            if (kind === 'guns') {
              APP.ui.switchView('arsenal');
              return;
            }
            setTimeout(() => APP.ui.runCheck('kiroshi', kind), 260);
          });
        });
      }
    });
  }

  /* ══════════════════════════════════════════════════════════
     REPLAY SPLASH BUTTON
     ══════════════════════════════════════════════════════════ */
  function wireReplay() {
    const btn = $('#btn-replay-splash');
    if (!btn) return;
    btn.addEventListener('click', () => {
      playSplash(() => {
        const app = $('#app');
        if (app) app.hidden = false;
        toast('Splash replayed. Trill Productions thanks you for your attention.', 'cyan');
      });
    });
  }

  /* ══════════════════════════════════════════════════════════
     GO
     ══════════════════════════════════════════════════════════ */
  function boot() {
    lineItUp();
    playSplash(() => {
      playBoot(() => startApp());
    });
    wireReplay();
  }

  function lineItUp() {
    /* keep the last tab for the restore step */
    document.addEventListener('click', (e) => {
      const tab = e.target.closest('.tab');
      if (tab && tab.dataset.view) store.set('lastTab', tab.dataset.view);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(window.CP411);
