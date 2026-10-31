/* ============================================================
   CYBERPUNK411 — core.js
   Tiny utility layer: DOM helpers, storage, toasts, modals,
   tooltips, sound blips, and the shared app state.
   No frameworks. Nothing to build. Open index.html and it runs.
   ============================================================ */

window.CP411 = window.CP411 || {};

(function (APP) {
  'use strict';

  /* ── DOM helpers ───────────────────────────────────────── */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── Storage (safe against private-mode weirdness) ─────── */
  const PREFIX = 'cp411:';
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(PREFIX + key);
        if (raw === null) return fallback;
        return JSON.parse(raw);
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(PREFIX + key, JSON.stringify(value));
      } catch (e) {
        /* storage full or blocked — the app still works in-memory */
      }
    },
    remove(key) {
      try { localStorage.removeItem(PREFIX + key); } catch (e) {}
    }
  };

  /* ── Small helpers ─────────────────────────────────────── */
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const pad3 = (n) => String(n).padStart(3, '0');

  function shuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function on(node, event, handler, opts) {
    if (!node) return;
    node.addEventListener(event, handler, opts);
  }

  /* ── Toast ─────────────────────────────────────────────── */
  function toast(message, kind) {
    const stack = $('#toast-stack');
    if (!stack) return;
    const t = el('div', 'toast' + (kind ? ' toast--' + kind : ''), message);
    stack.appendChild(t);
    setTimeout(() => {
      if (t.parentNode) t.parentNode.removeChild(t);
    }, 4700);
  }

  /* ── Sound (tiny WebAudio blips, off by default) ───────── */
  const sound = {
    enabled: false,
    ctx: null,
    ensureCtx() {
      if (!this.ctx) {
        const Ctor = window.AudioContext || window.webkitAudioContext;
        if (Ctor) this.ctx = new Ctor();
      }
      return this.ctx;
    },
    blip(freq, duration, type) {
      if (!this.enabled) return;
      const ctx = this.ensureCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type || 'square';
      osc.frequency.value = freq || 440;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (duration || 0.08));
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + (duration || 0.08) + 0.01);
    },
    click() { this.blip(520, 0.05, 'square'); },
    confirm() { this.blip(760, 0.09, 'triangle'); },
    error() { this.blip(160, 0.16, 'sawtooth'); },
    coin() { this.blip(880, 0.07, 'triangle'); setTimeout(() => this.blip(1180, 0.1, 'triangle'), 60); }
  };

  /* ── Modal system ──────────────────────────────────────── */
  const modalState = { open: false, onClose: null, lastFocus: null };

  function openModal(options) {
    const root = $('#modal-root');
    const titleEl = $('#modal-title');
    const bodyEl = $('#modal-body');
    if (!root || !titleEl || !bodyEl) return;

    modalState.lastFocus = document.activeElement;
    titleEl.innerHTML = options.title || 'WINDOW';
    bodyEl.innerHTML = options.html || '';
    root.hidden = false;
    document.body.style.overflow = 'hidden';
    modalState.open = true;
    modalState.onClose = options.onClose || null;

    const modal = $('.modal', root);
    if (modal) {
      modal.style.width = options.wide ? 'min(940px,100%)' : '';
      modal.scrollTop = 0;
    }
    bodyEl.scrollTop = 0;

    // focus first actionable element for keyboard users
    const focusable = bodyEl.querySelector('button, [href], input, select, textarea');
    if (focusable) focusable.focus({ preventScroll: true });

    if (options.after) options.after(bodyEl);
    return bodyEl;
  }

  function closeModal() {
    const root = $('#modal-root');
    if (!root || !modalState.open) return;
    root.hidden = true;
    document.body.style.overflow = '';
    modalState.open = false;
    if (typeof modalState.onClose === 'function') {
      const fn = modalState.onClose;
      modalState.onClose = null;
      fn();
    }
    if (modalState.lastFocus && modalState.lastFocus.focus) {
      try { modalState.lastFocus.focus({ preventScroll: true }); } catch (e) {}
    }
  }

  function wireModal() {
    const root = $('#modal-root');
    if (!root) return;
    root.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) {
        sound.click();
        closeModal();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalState.open) closeModal();
    });
  }

  /* ── Tooltip for glossary terms ────────────────────────── */
  function wireTooltips() {
    const tip = $('#tooltip');
    if (!tip) return;

    function show(target, text) {
      tip.textContent = text;
      tip.hidden = false;
      const rect = target.getBoundingClientRect();
      const tipRect = tip.getBoundingClientRect();
      let top = rect.top - tipRect.height - 10;
      let left = rect.left + rect.width / 2 - tipRect.width / 2;
      if (top < 8) top = rect.bottom + 10;
      left = clamp(left, 8, window.innerWidth - tipRect.width - 8);
      tip.style.top = top + 'px';
      tip.style.left = left + 'px';
    }
    function hide() { tip.hidden = true; }

    document.addEventListener('mouseover', (e) => {
      const term = e.target.closest('.term');
      if (term) show(term, term.dataset.def || '');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('.term')) hide();
    });
    document.addEventListener('click', (e) => {
      const term = e.target.closest('.term');
      if (term) {
        show(term, term.dataset.def || '');
        setTimeout(hide, 4200);
      }
    });
    window.addEventListener('scroll', hide, { passive: true });
  }

  /* ── Media query guard ─────────────────────────────────── */
  const reducedMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false };

  /* ── Shared state ──────────────────────────────────────── */
  APP.state = {
    tab: 'home',
    spoilers: store.get('spoilers', false),
    walkthrough: store.get('walkthrough', { chapter: 'ch0', step: 0 }),
    checks: store.get('checks', {}),
    eddies: store.get('eddies', 0),
    secretsFound: store.get('coinSecrets', 0),
    sandevistan: false,
    braindance: false
  };

  /* ── Export ────────────────────────────────────────────── */
  APP.$ = $;
  APP.$$ = $$;
  APP.el = el;
  APP.escapeHtml = escapeHtml;
  APP.store = store;
  APP.toast = toast;
  APP.sound = sound;
  APP.openModal = openModal;
  APP.closeModal = closeModal;
  APP.wireModal = wireModal;
  APP.wireTooltips = wireTooltips;
  APP.reducedMotion = reducedMotion;
  APP.util = { rand, pick, clamp, pad3, shuffle, on };
})(window.CP411);
