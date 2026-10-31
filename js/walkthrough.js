/* ============================================================
   CYBERPUNK411 — walkthrough.js
   The interactive checkpoint engine.

   Rules it enforces:
     · one checkpoint on screen at a time
     · it NEVER advances on its own — you press the button
     · every checkpoint has multiple prepared answers, so any
       branch (stuck / lost / game behaved weirdly / skip) always
       lands somewhere useful instead of a dead end
     · progress is saved per device
   ============================================================ */

(function (APP) {
  'use strict';

  const { $, $$, el, store, sound, toast, escapeHtml, util } = APP;
  const WT = window.CP411_WALKTHROUGH;

  let state = Object.assign({ chapter: 'ch0', step: 0 }, store.get('walkthrough', {}));
  let showingAnswer = false;

  function chapters() {
    return WT.chapters;
  }

  function currentChapter() {
    return chapters().find((c) => c.id === state.chapter) || chapters()[0];
  }

  function currentStep() {
    const ch = currentChapter();
    return ch.steps[state.step] || ch.steps[0];
  }

  function isFinalStep() {
    const all = chapters();
    const ch = currentChapter();
    const chIndex = all.findIndex((c) => c.id === ch.id);
    return chIndex === all.length - 1 && state.step === ch.steps.length - 1;
  }

  function flatIndex() {
    const all = window.CP411_ALL_STEPS;
    let i = 0;
    chapters().forEach((ch) => {
      ch.steps.forEach((s) => {
        if (s.id === currentStep().id) i = all.findIndex((entry) => entry.step.id === s.id);
      });
    });
    return Math.max(0, i);
  }

  function save() {
    store.set('walkthrough', state);
    APP.state.walkthrough = state;
  }

  function totalSteps() {
    return window.CP411_ALL_STEPS.length;
  }

  /* ── Chapter rail ──────────────────────────────────────── */
  function renderRail() {
    const rail = $('#wt-chapters');
    if (!rail) return;
    rail.innerHTML = '';

    chapters().forEach((ch, idx) => {
      const li = document.createElement('li');
      const btn = el('button', 'wt-ch');
      btn.dataset.chapter = ch.id;

      const isActive = ch.id === state.chapter;
      const done = chapterDone(ch);
      btn.className += isActive ? ' is-active' : done ? ' is-done' : '';
      btn.innerHTML = `<span class="wt-ch__num">${String(idx).padStart(2, '0')}</span><span>${ch.title}</span>`;
      btn.title = ch.sub;
      btn.addEventListener('click', () => {
        if (ch.id === state.chapter && state.step === 0) return;
        state.chapter = ch.id;
        state.step = 0;
        showingAnswer = false;
        save();
        sound.click();
        render();
      });
      li.appendChild(btn);
      rail.appendChild(li);
    });
  }

  function chapterDone(ch) {
    const visited = store.get('wtVisited', {});
    return (visited[ch.id] || 0) >= ch.steps.length;
  }

  function markVisited() {
    const visited = store.get('wtVisited', {});
    const ch = currentChapter();
    visited[ch.id] = Math.max(visited[ch.id] || 0, state.step + 1);
    store.set('wtVisited', visited);
  }

  /* ── Progress bar ──────────────────────────────────────── */
  function renderProgress() {
    const total = totalSteps();
    const idx = flatIndex();
    const pct = Math.round(((idx + 1) / total) * 100);

    const fill = $('#wt-progress-fill');
    if (fill) fill.style.width = pct + '%';

    const count = $('#wt-step-count');
    if (count) count.textContent = `${idx + 1} / ${total} CHECKPOINTS · ${pct}%`;

    const label = $('#wt-chapter-label');
    if (label) label.textContent = currentChapter().title.toUpperCase();

    const idle = $('#wt-idle');
    if (idle) {
      idle.hidden = showingAnswer;
      if (!showingAnswer) {
        const p = idle.querySelector('p');
        if (p && Math.random() > 0.72) {
          p.innerHTML = '<span class="blink">▮</span> ' + util.pick(window.CP411_LORE.idleLines);
        }
      }
    }
  }

  /* ── Step render ───────────────────────────────────────── */
  function renderStep() {
    const host = $('#wt-step');
    if (!host) return;

    const ch = currentChapter();
    const step = currentStep();
    markVisited();

    const spoilerHtml = step.spoiler
      ? `<div class="spoiler ${APP.state.spoilers ? '' : 'is-hidden'}">
           <div>${step.spoiler}</div>
           <button class="btn btn--sm spoiler__btn">${APP.state.spoilers ? 'HIDE SPOILER' : 'REVEAL SPOILER'}</button>
         </div>`
      : '';

    host.innerHTML = `
      <article class="wt-card">
        <div class="wt-card__kicker">
          <span class="wt-act">${escapeHtml(step.phase)} · CHECKPOINT ${String(state.step + 1).padStart(2, '0')} OF ${String(ch.steps.length).padStart(2, '0')}${isFinalStep() ? ' · FINAL' : ''}</span>
          <span>${escapeHtml(step.time)} · ${escapeHtml(ch.title)}</span>
        </div>
        <h3 class="wt-card__title">${escapeHtml(step.title)}</h3>
        <div class="wt-card__body">
          ${step.body}
          ${spoilerHtml}
          ${step.note ? `<p style="border-left:2px solid var(--yellow);padding-left:12px;color:var(--text-faint);font-size:.8rem">
            <em>${step.note}</em></p>` : ''}
        </div>
        <div class="wt-choices">
          ${step.choices
            .map(
              (choice, i) =>
                `<button class="btn ${i === 0 ? 'btn--primary' : 'btn--ghost'} btn--sm" data-choice="${i}">${choice.label}</button>`
            )
            .join('')}
        </div>
        <div id="wt-answer-slot"></div>
      </article>`;

    /* spoiler toggle */
    const spoilerBtn = $('.spoiler__btn', host);
    if (spoilerBtn) {
      spoilerBtn.addEventListener('click', () => {
        const box = spoilerBtn.closest('.spoiler');
        const hidden = box.classList.toggle('is-hidden');
        spoilerBtn.textContent = hidden ? 'REVEAL SPOILER' : 'HIDE SPOILER';
        sound.blip(hidden ? 300 : 700, 0.06, 'square');
      });
    }

    /* choice buttons */
    $$('[data-choice]', host).forEach((btn) => {
      btn.addEventListener('click', () => {
        const choice = step.choices[Number(btn.dataset.choice)];
        sound.confirm();
        showAnswer(choice);
      });
    });

    applyGlossary(host);
    renderProgress();
    renderRail();
  }

  function applyGlossary(root) {
    if (APP.ui && APP.ui.applyGlossaryTerms) APP.ui.applyGlossaryTerms(root);
  }

  /* ── Answer panel: the "several other responses" ────────── */
  function showAnswer(choice) {
    const answer = choice.answer;
    if (!answer) {
      next(true);
      return;
    }
    showingAnswer = true;

    const slot = $('#wt-answer-slot');
    if (!slot) return;

    const toneClass =
      answer.tone === 'bad'
        ? 'wt-answer--bad'
        : answer.tone === 'warn'
        ? 'wt-answer--warn'
        : answer.tone === 'good'
        ? 'wt-answer--good'
        : '';

    const final = isFinalStep();

    slot.innerHTML = `
      <div class="wt-answer ${toneClass}">
        <h4>${answer.title}</h4>
        ${answer.html}
        <div class="wt-answer__actions">
          <button class="btn btn--primary btn--sm" id="wt-continue">
            ${final ? 'FINISH THE WALKTHROUGH ✓' : answer.then === 'next' ? 'CONTINUE TO NEXT CHECKPOINT →' : 'BACK TO THE CHECKPOINT'}
          </button>
          <button class="btn btn--ghost btn--sm" id="wt-stay">STAY HERE A MINUTE</button>
          ${state.step > 0 ? '<button class="btn btn--ghost btn--sm" id="wt-prev">← PREVIOUS CHECKPOINT</button>' : ''}
          <button class="btn btn--ghost btn--sm" id="wt-jump-map">BROWSE CHAPTERS</button>
        </div>
      </div>`;

    const cont = $('#wt-continue');
    if (cont) {
      cont.addEventListener('click', () => {
        if (final) {
          showingAnswer = false;
          APP.ui.addEddies(500);
          renderFinished();
        } else if (answer.then === 'next') {
          next();
        } else {
          showingAnswer = false;
          render();
        }
      });
    }
    const stay = $('#wt-stay');
    if (stay) {
      stay.addEventListener('click', () => {
        showingAnswer = false;
        toast('Paused. Take your time — nothing advances without you.', 'cyan');
        renderProgress();
        render();
      });
    }
    const prev = $('#wt-prev');
    if (prev) prev.addEventListener('click', prevStep);
    const jump = $('#wt-jump-map');
    if (jump) {
      jump.addEventListener('click', () => {
        toast('Chapter list is on the left. Pick any checkpoint; nothing is locked.', 'cyan');
        const rail = $('.wt-rail');
        if (rail) rail.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }

    renderProgress();
    applyGlossary(slot);
    if (slot.scrollIntoView) {
      slot.scrollIntoView({ behavior: APP.reducedMotion.matches ? 'auto' : 'smooth', block: 'nearest' });
    }
  }

  /* ── Navigation ────────────────────────────────────────── */
  function next(fromAnswer) {
    showingAnswer = false;
    const ch = currentChapter();

    if (state.step + 1 < ch.steps.length) {
      state.step++;
      save();
      sound.blip(600, 0.06, 'triangle');
      render();
      return;
    }

    /* end of chapter → next chapter */
    const idx = chapters().findIndex((c) => c.id === ch.id);
    if (idx + 1 < chapters().length) {
      const nextCh = chapters()[idx + 1];
      state.chapter = nextCh.id;
      state.step = 0;
      save();
      sound.blip(760, 0.09, 'triangle');
      toast('Chapter complete. Next: ' + nextCh.title, 'green');
      APP.ui.addEddies(150);
      render();
      return;
    }

    /* end of everything */
    renderFinished();
  }

  function prevStep() {
    showingAnswer = false;
    if (state.step > 0) {
      state.step--;
    } else {
      const idx = chapters().findIndex((c) => c.id === state.chapter);
      if (idx > 0) {
        const prevCh = chapters()[idx - 1];
        state.chapter = prevCh.id;
        state.step = prevCh.steps.length - 1;
      }
    }
    save();
    render();
  }

  function renderFinished() {
    const host = $('#wt-step');
    if (!host) return;
    host.innerHTML = `
      <article class="wt-card wt-done">
        <p class="pop__kicker">WALKTHROUGH COMPLETE</p>
        <h3 style="font-size:1.7rem;color:var(--yellow);margin-bottom:.4em">That&rsquo;s the whole run, choom.</h3>
        <p style="color:var(--text-dim);max-width:60ch;margin:0 auto 1.4em">
          Every checkpoint answered, every missable window accounted for, every fallback branch available if something went wrong
          along the way. Your iconics are either in your stash or permanently gone, and now you know which is which — which is
          more than most players ever get.
        </p>
        <div class="pop__actions" style="justify-content:center">
          <button class="btn btn--primary" id="wt-restart">RUN IT AGAIN</button>
          <button class="btn btn--ghost" data-goto="arsenal">GO TO THE ARSENAL</button>
          <button class="btn btn--ghost" data-goto="beginner">BEGINNER CHECKS</button>
        </div>
      </article>`;

    const restart = $('#wt-restart');
    if (restart) {
      restart.addEventListener('click', () => {
        state = { chapter: 'ch0', step: 0 };
        store.remove('wtVisited');
        save();
        render();
        toast('Walkthrough reset. Round two.', 'cyan');
      });
    }
    renderProgress();
    renderRail();
    applyGlossary(host);
  }

  /* ── Public render ─────────────────────────────────────── */
  function render() {
    const host = $('#wt-step');
    if (!host) return;

    const allSteps = window.CP411_ALL_STEPS;
    const last = allSteps.length - 1;
    if (state.chapter === chapters()[chapters().length - 1].id &&
        state.step >= chapters()[chapters().length - 1].steps.length) {
      renderFinished();
      return;
    }
    renderRail();
    renderStep();
    renderProgress();
    /* prevent impossible indices */
    if (state.step > last) state.step = last;
  }

  /* ── Wiring ────────────────────────────────────────────── */
  function wire() {
    const reset = $('#wt-reset');
    if (reset) {
      reset.addEventListener('click', () => {
        state = { chapter: 'ch0', step: 0 };
        store.remove('wtVisited');
        save();
        showingAnswer = false;
        render();
        sound.error();
        toast('Walkthrough progress wiped. Clean slate.', 'magenta');
      });
    }

    const spoilers = $('#wt-spoilers');
    if (spoilers) {
      spoilers.checked = !!APP.state.spoilers;
      spoilers.addEventListener('change', () => {
        APP.state.spoilers = spoilers.checked;
        store.set('spoilers', spoilers.checked);
        sound.click();
        render();
      });
    }

    /* keyboard: left/right through checkpoints, escape to stop */
    document.addEventListener('keydown', (e) => {
      if (APP.state.tab !== 'walkthrough') return;
      if (APP.$('#modal-root') && !APP.$('#modal-root').hidden) return;
      if (e.key === 'ArrowRight') {
        if (showingAnswer) { showingAnswer = false; render(); }
        else next();
      } else if (e.key === 'ArrowLeft') {
        prevStep();
      }
    });
  }

  APP.walkthrough = { render, wire, next, prevStep, get state() { return state; } };
})(window.CP411);
