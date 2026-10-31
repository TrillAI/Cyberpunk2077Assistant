/* ============================================================
   CYBERPUNK411 — ui.js
   Renders every view, wires the tabs, the arsenal filters, the
   beginner pop-ups, the glossary tooltips and all the small
   buttons that make the assistant feel like a place.
   ============================================================ */

(function (APP) {
  'use strict';

  const { $, $$, el, toast, store, sound, openModal, closeModal, util, escapeHtml } = APP;
  const LORE = window.CP411_LORE;
  const GUNS = window.CP411_GUNS;
  const VENDOR_GUNS = window.CP411_VENDOR_GUNS;
  const LOADOUT_TIPS = window.CP411_LOADOUT_TIPS;
  const CHECKS = window.CP411_CHECKS;
  const WT = window.CP411_WALKTHROUGH;

  let heroCoin = null;
  let bootCoin = null;
  let gunFilter = 'all';
  let gunSearch = '';
  let jokeIndex = 0;

  /* ══════════════════════════════════════════════════════════
     COINS
     ══════════════════════════════════════════════════════════ */
  function initHeroCoin() {
    const stage = $('#hero-coin-stage');
    if (!stage || heroCoin) return;

    heroCoin = APP.createCoin(stage, {
      autoSpin: true,
      onFrame(info) {
        const spinEl = $('#coin-readout-spin');
        const faceEl = $('#coin-readout-face');
        if (spinEl) spinEl.textContent = info.speed.toFixed(1) + '°/s';
        if (faceEl) faceEl.textContent = info.face;
      },
      onSecret() {
        const count = store.get('coinSecrets', 0);
        const secrets = LORE.coinSecrets;
        const text = secrets[count % secrets.length];
        store.set('coinSecrets', count + 1);
        APP.state.secretsFound = count + 1;
        openModal({
          title: '€$ // THE COIN SPEAKS',
          html: `<p class="pop__kicker">SEVEN CLICKS REGISTERED · SECRET ${count + 1} OF ${secrets.length}</p>
                 <p class="pop__q">"${escapeHtml(text)}"</p>
                 <p class="pop__why">The coin has ${secrets.length} secrets and no memory. Click it seven more times and it
                 will tell you one it has already told you, with total confidence.</p>
                 <div class="pop__actions">
                   <button class="btn btn--primary" data-close="1">ACCEPT THE MYSTERY</button>
                   <button class="btn btn--ghost" data-close="1">BACK AWAY SLOWLY</button>
                 </div>`,
          onClose: () => sound.coin()
        });
        toast('Secret recovered. Nobody will believe you.', 'cyan');
      }
    });

    const autoBtn = $('#coin-auto');
    if (autoBtn) {
      autoBtn.addEventListener('click', () => {
        const on = heroCoin.toggleAutoSpin();
        autoBtn.textContent = on ? 'AUTO-SPIN' : 'SPIN STUCK';
        autoBtn.classList.toggle('is-picked', !on);
        sound.click();
      });
    }
    const flipBtn = $('#coin-flip');
    if (flipBtn) flipBtn.addEventListener('click', () => heroCoin.flip());

    const flickBtn = $('#coin-flick');
    if (flickBtn) flickBtn.addEventListener('click', () => {
      heroCoin.flick(300);
      toast(util.pick(LORE.loadingTips).replace('LOADING TIP: ', ''), 'cyan');
    });
  }

  function initBootCoin() {
    const stage = $('#boot-coin-stage');
    if (!stage || bootCoin) return;
    bootCoin = APP.createCoin(stage, { autoSpin: true, boot: true });
  }

  /* ══════════════════════════════════════════════════════════
     GLOSSARY AUTO-WRAPPING
     ══════════════════════════════════════════════════════════ */
  function glossaryLookup() {
    const map = new Map();
    LORE.glossary.forEach(([term, def]) => map.set(term.toLowerCase(), { term, def }));
    return map;
  }

  function applyGlossaryTerms(root) {
    if (!root) return;
    const lookup = glossaryLookup();
    const used = new Set();
    const skipped = new Set(['CODE', 'BUTTON', 'A', 'H1', 'H2', 'H3', 'H4', 'SCRIPT', 'STYLE', 'DT', 'TH']);

    const textNodes = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        let p = node.parentElement;
        while (p && p !== root.parentElement) {
          if (skipped.has(p.tagName)) return NodeFilter.FILTER_REJECT;
          if (p.classList && (p.classList.contains('term') || p.classList.contains('no-terms'))) {
            return NodeFilter.FILTER_REJECT;
          }
          p = p.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      let text = node.nodeValue;
      let changed = false;

      lookup.forEach((entry, key) => {
        if (used.has(key)) return;
        const re = new RegExp('\\b' + key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
        const match = re.exec(text);
        if (!match) return;

        changed = true;
        used.add(key);
        const before = text.slice(0, match.index);
        const hit = match[0];
        const after = text.slice(match.index + hit.length);

        const frag = document.createDocumentFragment();
        if (before) frag.appendChild(document.createTextNode(before));
        const span = document.createElement('span');
        span.className = 'term';
        span.dataset.def = entry.def;
        span.textContent = hit;
        frag.appendChild(span);
        if (after) frag.appendChild(document.createTextNode(after));

        if (node.parentNode) node.parentNode.replaceChild(frag, node);
        text = '';
      });

      if (changed) node.nodeValue = text;
    });
  }

  /* ══════════════════════════════════════════════════════════
     START VIEW
     ══════════════════════════════════════════════════════════ */
  function renderStart() {
    const host = $('#start-content');
    if (!host || host.dataset.rendered) return;
    host.dataset.rendered = '1';

    const wrap = el('div', 'prose');
    LORE.startContent.forEach((block) => {
      wrap.appendChild(el('p', 'eyebrow', escapeHtml(block.eyebrow)));
      wrap.appendChild(el('h3', '', escapeHtml(block.title)));
      wrap.insertAdjacentHTML('beforeend', block.html);
    });
    host.appendChild(wrap);
  }

  /* ══════════════════════════════════════════════════════════
     ARSENAL VIEW
     ══════════════════════════════════════════════════════════ */
  function gunMatches(gun) {
    if (gunFilter === 'all') {
      /* still allow search */
    } else if (gunFilter === 'early' || gunFilter === 'missable') {
      if (!gun.tags.includes(gunFilter)) return false;
    } else if (gunFilter === 'melee') {
      if (gun.type !== 'melee') return false;
    } else if (gun.type !== gunFilter) return false;

    if (!gunSearch) return true;
    const hay = (gun.name + ' ' + gun.typeLine + ' ' + gun.district + ' ' + gun.quest + ' ' + gun.how).toLowerCase();
    return hay.includes(gunSearch.toLowerCase());
  }

  function tagHtml(tag) {
    const map = {
      iconic: ['tag--iconic', 'ICONIC'],
      early: ['tag--early', 'EARLY GAME'],
      missable: ['tag--missable', 'MISSABLE'],
      ps4: ['tag--ps4', 'PS4 VERIFIED']
    };
    const got = map[tag];
    return got ? '<span class="tag ' + got[0] + '">' + got[1] + '</span>' : '';
  }

  function renderArsenal() {
    const grid = $('#gun-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const collected = store.get('gunsCollected', {});
    const matches = GUNS.filter(gunMatches);

    if (!matches.length) {
      grid.innerHTML = `<div class="card"><h3>No guns match that.</h3>
        <p>Try a district name (Heywood, Badlands, Watson) or clear the filter. There are ${GUNS.length} mapped iconics in here.</p></div>`;
      return;
    }

    matches.forEach((gun, i) => {
      const card = el('article', 'gun-card');
      card.innerHTML = `
        <div class="gun-card__top">
          <div>
            <div class="gun-card__tagrow">
              ${gun.tags.map(tagHtml).join('')}
              ${collected[gun.id] ? '<span class="tag tag--early">✓ COLLECTED</span>' : ''}
            </div>
            <h3 class="gun-card__name">${gun.name}</h3>
            <p class="gun-card__type" style="margin:.3em 0 0">${gun.typeLine}</p>
          </div>
          <span class="gun-card__num">${String(i + 1).padStart(2, '0')}</span>
        </div>
        <div class="gun-card__body">
          <div class="gun-card__meta">
            <div><dt>District</dt><dd>${gun.district}</dd></div>
            <div><dt>Quest</dt><dd>${gun.quest}</dd></div>
            <div><dt>When</dt><dd>${gun.act}</dd></div>
            <div><dt>Missable</dt><dd>${gun.missable ? 'YES — timed' : 'No'}</dd></div>
          </div>
          <p class="gun-card__how">${gun.how}</p>
          <div class="gun-card__foot">
            <button class="btn btn--primary btn--sm" data-gun="${gun.id}">FULL ROUTE →</button>
            <button class="btn btn--ghost btn--sm" data-collect="${gun.id}">
              ${collected[gun.id] ? 'UNMARK' : 'I HAVE THIS'}
            </button>
          </div>
          <div class="gun-card__rail"></div>
        </div>`;
      grid.appendChild(card);
    });

    $$('[data-gun]', grid).forEach((btn) => {
      btn.addEventListener('click', () => {
        const gun = GUNS.find((g) => g.id === btn.dataset.gun);
        if (gun) openGunDetail(gun);
      });
    });

    $$('[data-collect]', grid).forEach((btn) => {
      btn.addEventListener('click', () => {
        const map = store.get('gunsCollected', {});
        const id = btn.dataset.collect;
        if (map[id]) delete map[id];
        else {
          map[id] = true;
          sound.confirm();
          addEddies(250);
          toast('Logged as collected. +€$250 of imaginary confidence.', 'green');
        }
        store.set('gunsCollected', map);
        renderArsenal();
        applyGlossaryTerms($('#view-arsenal'));
      });
    });

    applyGlossaryTerms($('#view-arsenal'));
  }

  function openGunDetail(gun) {
    sound.confirm();
    const stats = gun.stats.map(([k, v]) => `<div class="gd__stat"><span>${k}</span><b>${v}</b></div>`).join('');
    const route = gun.route.map((step) => '<li>' + step + '</li>').join('');
    const gotchas = gun.gotchas.map((g) => '<li>' + g + '</li>').join('');
    const collected = store.get('gunsCollected', {})[gun.id];

    openModal({
      title: 'ARSENAL // ' + gun.name.toUpperCase(),
      wide: true,
      html: `
        <div class="gd">
          <div class="gd__head">
            <div>
              <div class="gun-card__tagrow">${gun.tags.map(tagHtml).join('')}</div>
              <h3 class="gd__title">${gun.name}</h3>
              <p class="gd__sub">${gun.typeLine}</p>
            </div>
            <button class="btn btn--primary btn--sm" id="gd-collect">
              ${collected ? '✓ MARKED COLLECTED' : 'MARK AS COLLECTED'}
            </button>
          </div>

          <div class="gd__stats">${stats}</div>

          <p><strong>Where:</strong> ${gun.district} · <strong>Quest:</strong> ${gun.quest} · <strong>Timing:</strong> ${gun.act}</p>
          <p>${gun.how}</p>

          <h4>Step-by-step route</h4>
          <ol>${route}</ol>

          <h4>Why it&rsquo;s worth the detour</h4>
          <p>${gun.why}</p>

          <h4>Gotchas, traps and the ways people lose it</h4>
          <ul>${gotchas}</ul>

          <div class="gd__note${gun.missable ? ' gd__note--warn' : ''}">
            <strong>On PS4:</strong> ${gun.ps4}
            ${gun.missable ? '<br><br><strong>Missable weapon.</strong> There is no vendor recovery on the PS4 build — if the moment passes, it is gone for that save.' : ''}
          </div>

          <div class="pop__actions" style="margin-top:20px">
            <button class="btn btn--ghost" data-close="1">CLOSE</button>
          </div>
        </div>`,
      after(body) {
        const btn = body.querySelector('#gd-collect');
        if (btn) {
          btn.addEventListener('click', () => {
            const map = store.get('gunsCollected', {});
            if (map[gun.id]) delete map[gun.id];
            else {
              map[gun.id] = true;
              addEddies(250);
              toast(gun.name + ' logged as collected.', 'green');
            }
            store.set('gunsCollected', map);
            btn.textContent = map[gun.id] ? '✓ MARKED COLLECTED' : 'MARK AS COLLECTED';
            renderArsenal();
          });
        }
        applyGlossaryTerms(body);
      }
    });
  }

  function wireArsenal() {
    $$('#gun-filters .filter').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('#gun-filters .filter').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        gunFilter = btn.dataset.filter;
        sound.click();
        renderArsenal();
      });
    });

    const search = $('#gun-search');
    if (search) {
      search.addEventListener('input', () => {
        gunSearch = search.value.trim();
        renderArsenal();
      });
    }
  }

  /* ══════════════════════════════════════════════════════════
     BEGINNER CHECKS
     ══════════════════════════════════════════════════════════ */
  function checkStatus(id) {
    return store.get('checks', {})[id] || null;
  }

  function renderBeginner() {
    const grid = $('#beginner-grid');
    if (!grid) return;
    grid.innerHTML = '';

    CHECKS.forEach((check) => {
      const status = checkStatus(check.id);
      const card = el('article', 'card check-card');
      card.innerHTML = `
        <div class="check-card__status">
          <span>${check.item}</span>
          <span class="${status ? 'done' : ''}">${status ? '✓ CHECKED' : 'ASK ME'}</span>
        </div>
        <h3 class="check-card__name">${check.name}</h3>
        <p class="check-card__desc">${check.desc}</p>
        ${status ? `<p class="check-card__desc" style="color:var(--text-faint);font-size:.72rem">
            You answered: <em>${escapeHtml(status.label)}</em></p>` : ''}
        <div class="check-card__foot">
          <button class="btn ${status ? 'btn--ghost' : 'btn--primary'} btn--sm" data-check="${check.id}">
            ${status ? 'ASK AGAIN' : 'ASK ME →'}
          </button>
          ${status ? `<button class="btn btn--sm" data-uncheck="${check.id}">RESET</button>` : ''}
        </div>`;
      grid.appendChild(card);
    });

    $$('[data-check]', grid).forEach((btn) => {
      btn.addEventListener('click', () => {
        const check = CHECKS.find((c) => c.id === btn.dataset.check);
        if (check) openCheckPopup(check);
      });
    });

    $$('[data-uncheck]', grid).forEach((btn) => {
      btn.addEventListener('click', () => {
        const map = store.get('checks', {});
        delete map[btn.dataset.uncheck];
        store.set('checks', map);
        APP.state.checks = map;
        sound.click();
        renderBeginner();
      });
    });

    updateCheckSummary();
    applyGlossaryTerms($('#view-beginner'));
  }

  function updateCheckSummary() {
    const map = store.get('checks', {});
    const done = Object.keys(map).length;
    const total = CHECKS.length;
    const pct = Math.round((done / total) * 100);

    const ring = $('#check-ring');
    if (ring) {
      ring.style.background = `conic-gradient(var(--yellow) ${pct}%, #141922 ${pct}%)`;
      const txt = $('#check-ring-text');
      if (txt) txt.textContent = pct + '%';
    }
    const head = $('#check-headline');
    const sub = $('#check-sub');
    if (head) {
      if (done === 0) head.textContent = 'Nothing checked yet';
      else if (done === total) head.textContent = 'All checks complete. You are, statistically, a competent V.';
      else head.textContent = done + ' of ' + total + ' checks answered';
    }
    if (sub) {
      if (done === 0) {
        sub.textContent = 'Hit "ASK ME" on any card below. It opens a pop-up, asks a direct question, and only then gives advice. You can re-run any check at any time.';
      } else if (done === total) {
        sub.textContent = 'Nothing left to assume about you. Go and get the guns — the Arsenal tab has the routes.';
      } else {
        sub.textContent = 'Keep going. Each answer sticks on this device, and the assistant will not ask you again unless you press ASK AGAIN.';
      }
    }
  }

  function openCheckPopup(check) {
    sound.click();

    const choices = check.choices
      .map(
        (choice, i) => `
        <button class="pop__choice" data-choice="${i}">
          <b>${String(i + 1).padStart(2, '0')}</b>
          <span>${choice.label}<small>${choice.hint}</small></span>
        </button>`
      )
      .join('');

    openModal({
      title: 'BEGINNER CHECK // ' + check.name.toUpperCase(),
      html: `
        <p class="pop__kicker">${check.item} · CHECK ${CHECKS.indexOf(check) + 1} OF ${CHECKS.length}</p>
        <h3 class="pop__q">${check.question}</h3>
        <p class="pop__why">${check.why}</p>
        <div class="pop__choices" id="pop-choices">${choices}</div>
        <p class="pop__why" style="margin-top:16px">Answer honestly. The assistant will not judge. The assistant will only
          gently redirect you to the nearest alley.</p>`
    });

    $$('#pop-choices .pop__choice').forEach((btn) => {
      btn.addEventListener('click', () => {
        const choice = check.choices[Number(btn.dataset.choice)];
        sound.confirm();
        showCheckAnswer(check, choice);
      });
    });
  }

  /* Jump straight into a check's answer (used by the first-boot pop-up).
     `kind` is one of: have | notyet | unsure — anything else just opens the question. */
  function runCheck(id, kind) {
    const check = CHECKS.find((c) => c.id === id);
    if (!check) return;
    if (!kind) {
      openCheckPopup(check);
      return;
    }
    const map = { have: 0, yes: 0, notyet: 1, no: 1, unsure: 1, skip: 1 };
    const index = util.clamp(map[kind] != null ? map[kind] : 0, 0, check.choices.length - 1);
    sound.confirm();
    showCheckAnswer(check, check.choices[index]);
  }

  function showCheckAnswer(check, choice) {
    const answer = choice.answer;
    const toneClass =
      answer.tone === 'bad' ? 'pop__answer--bad' : answer.tone === 'warn' ? 'pop__answer--warn' : '';

    const map = store.get('checks', {});
    map[check.id] = { label: choice.label.replace(/&[a-z]+;/g, "'"), at: Date.now() };
    store.set('checks', map);
    APP.state.checks = map;
    addEddies(100);

    openModal({
      title: 'ANSWER // ' + check.name.toUpperCase(),
      html: `
        <p class="pop__kicker">YOU SAID: "${escapeHtml(choice.label.replace(/&[a-z]+;/g, "'"))}"</p>
        <div class="pop__answer ${toneClass}">
          <h4>${answer.title}</h4>
          ${answer.html}
        </div>
        <div class="pop__actions">
          <button class="btn btn--primary" data-close="1">GOT IT</button>
          <button class="btn btn--ghost" id="pop-redo">ASK AGAIN</button>
          <button class="btn btn--ghost" id="pop-to-arsenal">SEE THE ARSENAL →</button>
        </div>`,
      onClose: () => {
        renderBeginner();
        applyGlossaryTerms($('#view-beginner'));
      },
      after(body) {
        const redo = body.querySelector('#pop-redo');
        if (redo) {
          redo.addEventListener('click', () => {
            closeModal();
            setTimeout(() => openCheckPopup(check), 220);
          });
        }
        const jump = body.querySelector('#pop-to-arsenal');
        if (jump) {
          jump.addEventListener('click', () => {
            closeModal();
            APP.ui.switchView('arsenal');
          });
        }
        applyGlossaryTerms(body);
      }
    });
  }

  /* ══════════════════════════════════════════════════════════
     MONEY VIEW
     ══════════════════════════════════════════════════════════ */
  function renderMoney() {
    const host = $('#money-content');
    if (!host || host.dataset.rendered) return;
    host.dataset.rendered = '1';

    host.insertAdjacentHTML('beforeend', `<div class="prose"><p>${LORE.moneyIntro}</p></div>`);

    const grid = el('div', 'money-grid');
    LORE.moneyCards.forEach((card) => {
      const node = el('article', 'money-card');
      node.innerHTML = `
        <span class="money-card__rate">${card.rate} <small>${card.rateNote}</small></span>
        <h4>${card.title}</h4>
        <p>${card.body}</p>`;
      grid.appendChild(node);
    });
    host.appendChild(grid);

    host.insertAdjacentHTML('beforeend', `<div class="prose">${LORE.moneyProse}</div>`);

    const vendor = el('div', 'prose');
    vendor.appendChild(el('h3', '', 'High-end guns you can just buy'));
    vendor.appendChild(el('p', '', 'Iconics are not the only answer. A legendary non-iconic often out-damages an epic iconic, and vendor stock scales with your level. These five are worth checking for every few levels:'));
    const list = el('ul');
    VENDOR_GUNS.forEach((g) => {
      list.insertAdjacentHTML('beforeend', `<li><strong>${g.name}</strong> — ${g.why} <em>Where:</em> ${g.where}</li>`);
    });
    vendor.appendChild(list);
    host.appendChild(vendor);

    const tips = el('div', 'prose');
    tips.appendChild(el('h3', '', 'Loadout rules for the PS4 build'));
    LOADOUT_TIPS.forEach((tip) => {
      tips.appendChild(el('h4', '', tip.title));
      tips.appendChild(el('p', '', tip.body));
    });
    host.appendChild(tips);

    host.appendChild(
      el(
        'div',
        'callout callout--danger',
        `<h3>⚠ The one thing that cannot be undone</h3>
         <p>There is no iconic Black Market vendor on the PS4 build. If you sell an iconic, it is gone for that save file
         forever. Not "gone until later". Gone. Sell the forty identical grey pistols in your stash instead.</p>`
      )
    );

    applyGlossaryTerms(host);
  }

  /* ══════════════════════════════════════════════════════════
     PS4 VIEW
     ══════════════════════════════════════════════════════════ */
  function renderPs4() {
    const host = $('#ps4-content');
    if (!host || host.dataset.rendered) return;
    host.dataset.rendered = '1';

    host.insertAdjacentHTML('beforeend', `<div class="prose"><p>${LORE.ps4Intro}</p></div>`);

    const rows = LORE.ps4Rows
      .map((row) => {
        const verdict = row[1];
        const cls = /^YES/i.test(verdict) ? 'yes' : /^NO/i.test(verdict) ? 'no' : '';
        return `<tr><td><strong>${row[0]}</strong></td><td class="${cls}">${verdict}</td><td>${row[2]}</td></tr>`;
      })
      .join('');

    host.insertAdjacentHTML(
      'beforeend',
      `<table class="ps4-table">
        <thead><tr><th>Feature</th><th>On your PS4</th><th>Notes</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>`
    );

    host.insertAdjacentHTML('beforeend', `<div class="prose">${LORE.ps4Prose}</div>`);
    applyGlossaryTerms(host);
  }

  /* ══════════════════════════════════════════════════════════
     FAQ VIEW
     ══════════════════════════════════════════════════════════ */
  function renderFaq() {
    const list = $('#faq-list');
    if (list && !list.dataset.rendered) {
      list.dataset.rendered = '1';
      LORE.faq.forEach((item) => {
        const wrap = el('div', 'acc-item');
        wrap.innerHTML = `
          <button class="acc-q"><span>${item.q}</span><span class="acc-q__sign">+</span></button>
          <div class="acc-a">${item.a}</div>`;
        list.appendChild(wrap);
      });
      $$('.acc-q', list).forEach((btn) => {
        btn.addEventListener('click', () => {
          const item = btn.parentElement;
          const open = item.classList.toggle('is-open');
          btn.querySelector('.acc-q__sign').textContent = open ? '−' : '+';
          sound.blip(open ? 620 : 380, 0.04, 'square');
        });
      });
    }

    const gloss = $('#glossary-list');
    if (gloss && !gloss.dataset.rendered) {
      gloss.dataset.rendered = '1';
      LORE.glossary.forEach(([term, def]) => {
        const item = el('div', 'gloss-item');
        item.innerHTML = `<p class="gloss-term">${escapeHtml(term)}</p><p class="gloss-def">${def}</p>`;
        gloss.appendChild(item);
      });
    }

    const drawer = $('#joke-drawer-btn');
    if (drawer && !drawer.dataset.wired) {
      drawer.dataset.wired = '1';
      const textEl = $('#joke-drawer-text');
      drawer.addEventListener('click', () => {
        jokeIndex = (jokeIndex + 1 + Math.floor(Math.random() * (LORE.jokes.length - 1))) % LORE.jokes.length;
        if (textEl) {
          textEl.style.opacity = '0';
          setTimeout(() => {
            textEl.textContent = LORE.jokes[jokeIndex];
            textEl.style.opacity = '1';
          }, 140);
        }
        sound.blip(700, 0.06, 'triangle');
      });
    }

    applyGlossaryTerms($('#view-faq'));
  }

  /* ══════════════════════════════════════════════════════════
     EDDIE COUNTER
     ══════════════════════════════════════════════════════════ */
  function addEddies(amount) {
    const current = store.get('eddies', 0);
    const next = current + amount;
    store.set('eddies', next);
    APP.state.eddies = next;
    renderEddies(true);
  }

  function renderEddies(animate) {
    const node = $('#eddie-count');
    if (!node) return;
    const target = store.get('eddies', 0);
    const start = parseInt(node.textContent.replace(/[^\d]/g, ''), 10) || 0;
    if (!animate || APP.reducedMotion.matches) {
      node.textContent = target.toLocaleString('en-US');
      return;
    }
    const duration = 520;
    const t0 = performance.now();
    function step(now) {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(start + (target - start) * eased).toLocaleString('en-US');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ══════════════════════════════════════════════════════════
     TABS
     ══════════════════════════════════════════════════════════ */
  const viewRenderers = {
    start: renderStart,
    arsenal: renderArsenal,
    beginner: renderBeginner,
    money: renderMoney,
    ps4: renderPs4,
    faq: renderFaq
  };

  function switchView(id, options) {
    const opts = options || {};
    if (!id) return;
    const target = $('#view-' + id);
    if (!target) return;

    if (APP.state.tab === id && !opts.force) return;

    APP.state.tab = id;
    sound.blip(480, 0.05, 'square');

    const apply = () => {
      $$('.tab').forEach((tab) => tab.classList.toggle('is-active', tab.dataset.view === id));
      $$('.view').forEach((view) => view.classList.remove('is-active'));
      target.classList.add('is-active');

      const fn = viewRenderers[id];
      if (fn) fn();
      if (id === 'walkthrough' && APP.walkthrough) APP.walkthrough.render();
      if (id === 'home') initHeroCoin();

      applyGlossaryTerms(target);

      if (!opts.noScroll) {
        window.scrollTo({ top: 0, behavior: APP.reducedMotion.matches ? 'auto' : 'smooth' });
      }
    };

    const wipe = $('#wipe');
    if (wipe && !APP.reducedMotion.matches) {
      const label = $('#wipe-label');
      const sub = $('#wipe-sub');
      if (label) label.textContent = util.pick(['JACKING IN', 'SPINNING THE COIN', 'MAPPING NIGHT CITY', 'PATCH 1.6x', 'PREEM']);
      if (sub) sub.textContent = util.pick(LORE.loadingTips).replace('LOADING TIP: ', '');
      wipe.classList.add('is-active');
      setTimeout(() => {
        apply();
        setTimeout(() => wipe.classList.remove('is-active'), 120);
      }, 190);
    } else {
      apply();
    }
  }

  function wireTabs() {
    $$('.tab').forEach((tab) => {
      tab.addEventListener('click', () => switchView(tab.dataset.view));
    });
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-goto]');
      if (trigger) {
        e.preventDefault();
        switchView(trigger.dataset.goto);
      }
    });
  }

  /* ══════════════════════════════════════════════════════════
     HEADER TOGGLES + EASTER EGGS
     ══════════════════════════════════════════════════════════ */
  function wireHeader() {
    const sandev = $('#btn-sandevistan');
    if (sandev) {
      sandev.addEventListener('click', () => {
        const on = document.body.classList.toggle('mode-sandevistan');
        sandev.classList.toggle('is-on', on);
        APP.state.sandevistan = on;
        sound.blip(on ? 900 : 300, 0.1, 'sawtooth');
        toast(on ? 'Sandevistan active. Everything is faster except you.' : 'Sandevistan off. Welcome back to real time.', 'cyan');
      });
    }

    const bd = $('#btn-bd');
    if (bd) {
      bd.addEventListener('click', () => {
        const on = document.body.classList.toggle('mode-bd');
        bd.classList.toggle('is-on', on);
        APP.state.braindance = on;
        sound.blip(on ? 260 : 520, 0.12, 'sine');
        toast(on ? 'Braindance layer engaged. Sensory overlay active.' : 'Braindance layer off.', 'magenta');
      });
    }

    const snd = $('#btn-sound');
    if (snd) {
      snd.addEventListener('click', () => {
        sound.enabled = !sound.enabled;
        snd.classList.toggle('is-on', sound.enabled);
        snd.innerHTML = '<span class="chip-btn__dot"></span> SOUND: ' + (sound.enabled ? 'ON' : 'OFF');
        if (sound.enabled) {
          sound.ensureCtx();
          sound.confirm();
          toast('UI blips on. Tiny. Polite. 1980s.', 'green');
        }
      });
    }

    const eddies = $('.eddies');
    if (eddies) {
      eddies.style.cursor = 'pointer';
      eddies.title = 'Click for a free eddie. Literally free. Not real. But free.';
      eddies.addEventListener('click', () => {
        addEddies(1);
        sound.coin();
        const lines = [
          'One eddie. Do not spend it all at once.',
          'The economy is now slightly warmer.',
          'You have found a coin. It was yours the whole time.',
          'That eddie is imaginary and yet you feel richer.'
        ];
        if (Math.random() > 0.55) toast(util.pick(lines), 'green');
      });
    }

    const dnp = $('#do-not-press');
    if (dnp) {
      dnp.addEventListener('click', () => {
        sound.error();
        openModal({
          title: 'SYSTEM // YOU PRESSED IT',
          html: `<p class="pop__kicker">WE LITERALLY PUT "DO NOT PRESS" ON IT</p>
                 <p class="pop__q">And yet.</p>
                 <div class="pop__answer pop__answer--warn">
                   <h4>Consequences: none. Dignity: slightly reduced.</h4>
                   <p>Nothing happened. There was never going to be anything. The button exists so that people like you press it,
                   and the assistant can then feel smug about knowing people like you.</p>
                   <p>If it helps: you are not the first, and the counter is not real either.</p>
                 </div>
                 <div class="pop__actions">
                   <button class="btn btn--primary" data-close="1">I ACCEPT MYSELF</button>
                   <button class="btn btn--ghost" data-close="1">NEVER SPEAK OF THIS</button>
                 </div>`
        });
      });
    }

    const secret = $('#footer-secret');
    if (secret) {
      secret.style.cursor = 'pointer';
      secret.addEventListener('click', () => {
        openModal({
          title: 'FOOTER // A SMALL SECRET',
          html: `<p class="pop__kicker">YOU CLICKED THE SMALL PRINT</p>
                 <p class="pop__q">The coin already knows. It is seven clicks ahead of you.</p>
                 <p class="pop__why">There is no achievement here. There is only the warm feeling of having clicked a thing
                 that said "click me" in the voice of a footer.</p>
                 <div class="pop__actions">
                   <button class="btn btn--primary" data-close="1">SATISFYING</button>
                   <button class="btn btn--ghost" data-goto="home" data-close="1">GO CLICK THE COIN</button>
                 </div>`
        });
      });
    }
  }

  /* ══════════════════════════════════════════════════════════
     STATS
     ══════════════════════════════════════════════════════════ */
  function renderStats() {
    const guns = $('#stat-guns');
    const steps = $('#stat-steps');
    const checks = $('#stat-checks');
    if (guns) guns.textContent = String(GUNS.length);
    if (steps) steps.textContent = String(window.CP411_ALL_STEPS.length);
    if (checks) checks.textContent = String(CHECKS.length);
  }

  /* ══════════════════════════════════════════════════════════
     INIT
     ══════════════════════════════════════════════════════════ */
  function init() {
    wireTabs();
    wireHeader();
    wireArsenal();
    renderStats();
    renderEddies(false);
    initHeroCoin();
    applyGlossaryTerms($('#view-home'));
  }

  APP.ui = {
    init,
    switchView,
    initHeroCoin,
    initBootCoin,
    renderStart,
    renderArsenal,
    renderBeginner,
    renderMoney,
    renderPs4,
    renderFaq,
    applyGlossaryTerms,
    addEddies,
    renderEddies,
    openCheckPopup,
    runCheck
  };
})(window.CP411);
