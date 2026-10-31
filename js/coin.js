/* ============================================================
   CYBERPUNK411 — coin.js
   A real 3D coin, built out of CSS 3D transforms:
     · two engraved faces (€$ / NIGHT CITY 2077)
     · a ridged rim made of 36 tangent segments
     · drag to spin, release to keep momentum
     · flick / flip, auto-spin, and a seven-click secret
   No canvas, no WebGL, no dependency. Just transforms and math.
   ============================================================ */

(function (APP) {
  'use strict';

  const RIM_SEGMENTS = 36;
  const RADIUS = 88;            // coin radius in px (176 / 2) — the rim band sits right on the edge
  const THICKNESS = 14;         // coin thickness in px
  const AUTO_SPEED = 105;       // degrees per second at rest
  const FRICTION = 1.35;

  function buildCoinDOM(opts) {
    const stage = document.createElement('div');
    stage.className = 'coin-stage' + (opts && opts.boot ? ' coin-stage--boot' : '');

    const hop = document.createElement('div');
    hop.className = 'coin-hop';

    const coin = document.createElement('div');
    coin.className = 'coin';

    /* ── Rim: 36 tangential segments forming a band ── */
    const half = THICKNESS / 2;
    for (let i = 0; i < RIM_SEGMENTS; i++) {
      const theta = (360 / RIM_SEGMENTS) * i;
      const seg = document.createElement('div');
      seg.className = 'coin__rim';
      const shade = 0.55 + 0.45 * Math.abs(Math.cos((theta * Math.PI) / 180));
      /* rotate around the coin axis, push out to the rim, then turn the
         plate so its width spans the coin's thickness and its height runs
         along the tangent — 36 of these make a continuous ridged edge. */
      seg.style.transform =
        'rotateZ(' + theta + 'deg) translateY(-' + RADIUS + 'px) rotateY(90deg)';
      seg.style.filter = 'brightness(' + shade.toFixed(2) + ')';
      coin.appendChild(seg);
    }

    /* ── Front face: €$ ── */
    const front = document.createElement('div');
    front.className = 'coin__face coin__face--front';
    front.style.transform = 'translateZ(' + half + 'px)';
    front.innerHTML =
      '<span class="coin__ring-text"><span>NIGHT CITY · 2077 ·</span><span>ONE EDDIE · €$</span></span>' +
      '<span class="coin__knot"></span>' +
      '<span class="coin__glyph">€$</span>';
    coin.appendChild(front);

    /* ── Back face: NIGHT CITY seal ── */
    const back = document.createElement('div');
    back.className = 'coin__face coin__face--back';
    back.style.transform = 'rotateY(180deg) translateZ(' + half + 'px)';
    back.innerHTML =
      '<span class="coin__ring-text"><span>· PREEM ·</span><span>· TOTALLY LEGAL ·</span></span>' +
      '<span class="coin__knot"></span>' +
      '<span class="coin__glyph">NC</span>';
    coin.appendChild(back);

    hop.appendChild(coin);
    stage.appendChild(hop);

    const shadow = document.createElement('div');
    shadow.className = 'coin__shadow';
    stage.appendChild(shadow);

    return { stage, hop, coin };
  }

  function createCoin(container, options) {
    const opts = options || {};
    let angle = opts.startAngle != null ? opts.startAngle : 24;
    let velocity = opts.autoSpin === false ? 0 : AUTO_SPEED;
    let autoSpin = opts.autoSpin !== false;
    let dragging = false;
    let lastX = 0;
    let lastT = 0;
    let dragVelocity = 0;
    let clicks = 0;
    let clickTimer = null;
    let hopY = 0;
    let hopV = 0;
    let flipBoost = 0;
    let destroyed = false;

    const parts = buildCoinDOM(opts);
    if (container) {
      container.appendChild(parts.stage);
    }

    /* ── Render loop ───────────────────────────────────── */
    let prev = performance.now();
    function frame(now) {
      if (destroyed) return;
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;

      if (!dragging) {
        /* momentum from a drag decays toward the idle speed */
        if (autoSpin) {
          velocity += (AUTO_SPEED - velocity) * Math.min(1, dt * FRICTION);
        } else {
          velocity *= Math.max(0, 1 - dt * 2.2);
          if (Math.abs(velocity) < 0.4) velocity = 0;
        }
      }

      /* a flip is a temporary extra burst on top of the spin */
      if (flipBoost > 0) {
        const use = Math.min(flipBoost, dt * 1500 * 3.2);
        angle += use;
        flipBoost -= use;
      }

      angle += velocity * dt;
      if (angle > 3600 || angle < -3600) angle = angle % 360;

      /* vertical hop physics for flick / flip */
      if (hopY !== 0 || hopV !== 0) {
        hopV += -1400 * dt;             // gravity
        hopY += hopV * dt;
        if (hopY <= 0) { hopY = 0; hopV = 0; }
      }

      const tilt = -13 + Math.sin(now / 2600) * 2.4;
      parts.coin.style.transform =
        'rotateX(' + tilt.toFixed(2) + 'deg) rotateY(' + angle.toFixed(2) + 'deg)';
      parts.hop.style.transform = 'translateY(' + hopY.toFixed(1) + 'px)';

      const speed = Math.abs(velocity);
      const glow = 0.16 + Math.min(0.4, speed / 900);
      parts.coin.style.setProperty('--glow', glow.toFixed(2));
      parts.stage.classList.toggle('is-spinning', speed > 160);

      if (typeof opts.onFrame === 'function') {
        opts.onFrame({
          angle: angle,
          speed: speed,
          face: faceOf(angle),
          autoSpin: autoSpin
        });
      }

      requestAnimationFrame(frame);
    }

    function faceOf(a) {
      const norm = ((a % 360) + 360) % 360;
      if (norm > 45 && norm < 135) return 'NC';
      if (norm > 225 && norm < 315) return 'NC';
      return '€$';
    }

    /* ── Drag to spin ──────────────────────────────────── */
    function onPointerDown(e) {
      if (e.button != null && e.button !== 0) return;
      dragging = true;
      lastX = e.clientX;
      lastT = performance.now();
      dragVelocity = 0;
      parts.stage.setPointerCapture && parts.stage.setPointerCapture(e.pointerId);
      APP.sound.blip(340, 0.03, 'sine');
    }

    function onPointerMove(e) {
      if (!dragging) return;
      const now = performance.now();
      const dx = e.clientX - lastX;
      const dt = Math.max(1, now - lastT) / 1000;
      angle += dx * 0.85;
      dragVelocity = (dx * 0.85) / dt;
      lastX = e.clientX;
      lastT = now;
      if (Math.abs(dx) > 2) parts.stage.dataset.dragged = '1';
    }

    function onPointerUp(e) {
      if (!dragging) return;
      dragging = false;
      velocity = APP.util.clamp(dragVelocity, -2400, 2400);
      if (Math.abs(velocity) < 30) velocity = autoSpin ? AUTO_SPEED : 0;
      parts.stage.releasePointerCapture && parts.stage.releasePointerCapture(e.pointerId);
      setTimeout(() => { delete parts.stage.dataset.dragged; }, 40);
      if (typeof opts.onRelease === 'function') opts.onRelease();
    }

    parts.stage.addEventListener('pointerdown', onPointerDown);
    parts.stage.addEventListener('pointermove', onPointerMove);
    parts.stage.addEventListener('pointerup', onPointerUp);
    parts.stage.addEventListener('pointercancel', onPointerUp);
    parts.stage.addEventListener('dragstart', (e) => e.preventDefault());

    /* ── Click: flick + secret counter ─────────────────── */
    parts.stage.addEventListener('click', (e) => {
      if (parts.stage.dataset.dragged) return; // was a drag, not a click
      clicks++;
      APP.sound.coin();
      flick(260);
      if (typeof opts.onClick === 'function') opts.onClick(clicks);

      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        if (clicks >= 7 && typeof opts.onSecret === 'function') {
          opts.onSecret(clicks);
        }
        clicks = 0;
      }, 650);
    });

    function flick(power) {
      hopV = power || 220;
      if (hopY === 0) hopY = 0.1;
      velocity += (Math.random() > 0.5 ? 1 : -1) * 140;
    }

    function flip() {
      flipBoost = 1080;
      hopV = 400;
      hopY = 0.1;
      parts.coin.classList.add('is-flipping');
      setTimeout(() => parts.coin.classList.remove('is-flipping'), 950);
      APP.sound.blip(660, 0.12, 'triangle');
      setTimeout(() => APP.sound.blip(990, 0.1, 'triangle'), 120);
    }

    function toggleAutoSpin(force) {
      autoSpin = typeof force === 'boolean' ? force : !autoSpin;
      if (autoSpin && Math.abs(velocity) < 20) velocity = AUTO_SPEED;
      return autoSpin;
    }

    function setAngle(deg) { angle = deg; }

    function destroy() {
      destroyed = true;
      if (parts.stage.parentNode) parts.stage.parentNode.removeChild(parts.stage);
    }

    requestAnimationFrame(frame);

    return {
      stage: parts.stage,
      coin: parts.coin,
      flip,
      flick,
      toggleAutoSpin,
      setAngle,
      destroy,
      get autoSpin() { return autoSpin; },
      get speed() { return Math.abs(velocity); }
    };
  }

  APP.createCoin = createCoin;
})(window.CP411);
