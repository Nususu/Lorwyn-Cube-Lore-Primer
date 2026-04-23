// Cube renderer — columns by color, grouped by type, sorted by CMC then name.
// Hover a card name to preview its Scryfall image.
(function () {
  if (!window.CUBE_CARDS) return;

  const COLORS = [
    { key: 'W', label: 'White',      className: 'col-w' },
    { key: 'U', label: 'Blue',       className: 'col-u' },
    { key: 'B', label: 'Black',      className: 'col-b' },
    { key: 'R', label: 'Red',        className: 'col-r' },
    { key: 'G', label: 'Green',      className: 'col-g' },
    { key: 'C', label: 'Colorless',  className: 'col-c' },
    { key: 'M', label: 'Multicolor', className: 'col-m' },
    { key: 'L', label: 'Lands',      className: 'col-l' },
  ];

  // Order of type subgroups inside a column
  const TYPE_ORDER = [
    'Creature',
    'Planeswalker',
    'Kindred',
    'Artifact',
    'Enchantment',
    'Sorcery',
    'Instant',
    'Land',
    'Other',
  ];

  // Multicolor sub-ordering (guild-ish)
  const MULTI_ORDER = ['UW','BU','BR','GR','GW','BW','RW','GU','BG','RU','BGW','BGRUW'];

  // ----- Tooltip -----
  let tipEl, tipImg, tipHideTimer, currentHoverCard;
  function ensureTooltip() {
    if (tipEl) return;
    tipEl = document.createElement('div');
    tipEl.className = 'cube-tip';
    tipEl.innerHTML = '<img alt="" />';
    tipImg = tipEl.querySelector('img');
    document.body.appendChild(tipEl);
  }
  function scryfallUrl(set, cn) {
    // Normal size JPG. Returns 302 to CDN. Browser caches.
    return `https://api.scryfall.com/cards/${encodeURIComponent(set)}/${encodeURIComponent(cn)}?format=image&version=normal`;
  }
  function showTooltip(card, x, y) {
    ensureTooltip();
    currentHoverCard = card;
    const url = scryfallUrl(card.s, card.cn);
    if (tipImg.dataset.src !== url) {
      tipImg.dataset.src = url;
      tipImg.src = url;
    }
    const isTouchViewport = window.matchMedia('(hover: none)').matches;
    tipEl.classList.toggle('tap-hint', isTouchViewport);
    positionTooltip(x, y);
    tipEl.classList.add('visible');
    clearTimeout(tipHideTimer);
  }
  function hideTooltip() {
    currentHoverCard = null;
    tipHideTimer = setTimeout(() => tipEl && tipEl.classList.remove('visible'), 80);
  }
  function positionTooltip(x, y) {
    if (!tipEl) return;
    const isTouchViewport = window.matchMedia('(hover: none)').matches;
    const W = 244, H = 340; // approx card size
    const pad = 16;
    if (isTouchViewport) {
      // Center horizontally in viewport, anchor near top
      const left = Math.max(8, (window.innerWidth - W) / 2);
      const top = Math.max(16, Math.min(60, window.innerHeight * 0.08));
      tipEl.style.left = left + 'px';
      tipEl.style.top = top + 'px';
      return;
    }
    let left = x + pad;
    let top = y + pad;
    if (left + W > window.innerWidth - 8) left = x - W - pad;
    if (top + H > window.innerHeight - 8) top = Math.max(8, window.innerHeight - H - 8);
    if (top < 8) top = 8;
    tipEl.style.left = left + 'px';
    tipEl.style.top = top + 'px';
  }

  // ----- Data shaping -----
  function sortCards(arr) {
    return arr.slice().sort((a, b) => {
      if (a.c !== b.c) return a.c - b.c;
      return a.n.localeCompare(b.n);
    });
  }

  function groupByColor(cards) {
    const g = {};
    for (const c of cards) (g[c.col] = g[c.col] || []).push(c);
    return g;
  }

  function groupByType(cards) {
    const g = {};
    for (const c of cards) (g[c.pt] = g[c.pt] || []).push(c);
    return g;
  }

  // ----- Render -----
  function render(cards, state) {
    const root = document.getElementById('cube-grid');
    if (!root) return;
    const visibleCards = cards.filter(card => matchFilter(card, state));
    const byColor = groupByColor(visibleCards);
    let html = '';
    for (const { key, label, className } of COLORS) {
      const list = byColor[key] || [];
      html += `<section class="cube-col ${className}" data-col="${key}">`;
      html += `<header class="cube-col-head"><h3>${label}</h3><span class="cube-col-count">${list.length}</span></header>`;
      const byType = groupByType(list);
      for (const t of TYPE_ORDER) {
        const arr = byType[t];
        if (!arr || !arr.length) continue;
        html += `<div class="cube-sub"><h4>${t} <span>(${arr.length})</span></h4><ol>`;
        const sorted = sortCards(arr);
        let prevCmc = null;
        for (const card of sorted) {
          if (prevCmc !== null && card.c !== prevCmc) {
            html += `<li class="cube-divider" aria-hidden="true"></li>`;
          }
          html += renderCard(card);
          prevCmc = card.c;
        }
        html += `</ol></div>`;
      }
      html += `</section>`;
    }
    root.innerHTML = html;
    updateTotals(visibleCards.length, cards.length);
  }

  function renderCard(card) {
    const subtypes = (card.st || []).join(' ').toLowerCase();
    return `<li class="cube-card" data-set="${escapeAttr(card.s)}" data-cn="${escapeAttr(card.cn)}" data-name="${escapeAttr(card.n)}" data-subtypes="${escapeAttr(subtypes)}"><span class="cube-name">${escapeHtml(card.n)}</span></li>`;
  }

  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
  function escapeAttr(s) { return escapeHtml(s); }

  function updateTotals(shown, total) {
    const el = document.getElementById('cube-totals');
    if (!el) return;
    el.textContent = shown === total ? `${total} cards` : `${shown} of ${total} cards`;
  }

  // ----- Filtering -----
  function matchFilter(card, state) {
    if (state.subtype && !(card.st || []).some(st => st.toLowerCase() === state.subtype.toLowerCase())) return false;
    if (state.search) {
      const q = state.search.toLowerCase();
      const hay = (card.n + ' ' + card.t).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  // ----- Chip bar -----
  function buildChips(cards) {
    const counts = {};
    for (const c of cards) {
      if (!/Creature|Kindred/i.test(c.t)) continue;
      for (const st of c.st || []) counts[st] = (counts[st] || 0) + 1;
    }
    // Only tribe-ish chips (noise filter: min 4)
    const CHIP_ALLOW = new Set([
      'Elf','Faerie','Goblin','Merfolk','Kithkin','Treefolk','Giant',
      'Elemental','Shapeshifter','Scarecrow','Warrior','Shaman','Wizard',
      'Soldier','Rogue','Druid','Assassin',
    ]);
    const entries = Object.entries(counts)
      .filter(([k, v]) => CHIP_ALLOW.has(k) && v >= 3)
      .sort((a, b) => b[1] - a[1]);
    return entries;
  }

  function renderChips(chips) {
    const bar = document.getElementById('cube-chips');
    if (!bar) return;
    let html = `<button class="cube-chip active" data-st="">All</button>`;
    for (const [k, v] of chips) {
      html += `<button class="cube-chip" data-st="${escapeAttr(k)}">${escapeHtml(k)} <span>${v}</span></button>`;
    }
    bar.innerHTML = html;
  }

  // ----- Init -----
  function init() {
    const cards = window.CUBE_CARDS;
    const state = { search: '', subtype: '' };

    renderChips(buildChips(cards));
    render(cards, state);

    const search = document.getElementById('cube-search');
    if (search) {
      search.addEventListener('input', () => {
        state.search = search.value.trim();
        render(cards, state);
      });
    }

    const chipBar = document.getElementById('cube-chips');
    if (chipBar) {
      chipBar.addEventListener('click', e => {
        const btn = e.target.closest('.cube-chip');
        if (!btn) return;
        chipBar.querySelectorAll('.cube-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.subtype = btn.dataset.st || '';
        render(cards, state);
      });
    }

    // Tooltip events via delegation
    const grid = document.getElementById('cube-grid');
    const isTouch = window.matchMedia('(hover: none)').matches;
    let pendingCard = null; // touch-preview state: the card currently shown in tap-preview

    function dismissPreview() {
      if (pendingCard) {
        const prev = grid && grid.querySelector('.cube-card.is-previewed');
        if (prev) prev.classList.remove('is-previewed');
      }
      pendingCard = null;
      hideTooltip();
    }

    if (grid) {
      if (!isTouch) {
        grid.addEventListener('mouseover', e => {
          const li = e.target.closest('.cube-card');
          if (!li) return;
          const card = { s: li.dataset.set, cn: li.dataset.cn, n: li.dataset.name };
          showTooltip(card, e.clientX, e.clientY);
        });
        grid.addEventListener('mousemove', e => {
          if (!currentHoverCard) return;
          positionTooltip(e.clientX, e.clientY);
        });
        grid.addEventListener('mouseout', e => {
          const li = e.target.closest('.cube-card');
          if (!li) return;
          if (e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.cube-card') === li) return;
          hideTooltip();
        });
      }

      grid.addEventListener('click', e => {
        const li = e.target.closest('.cube-card');
        if (!li) return;

        const cardKey = li.dataset.set + '/' + li.dataset.cn;

        if (isTouch) {
          // Two-tap pattern: first tap previews, second tap (same card) opens Scryfall.
          if (pendingCard === cardKey) {
            dismissPreview();
            const url = `https://scryfall.com/card/${encodeURIComponent(li.dataset.set)}/${encodeURIComponent(li.dataset.cn)}`;
            window.open(url, '_blank', 'noopener');
            return;
          }
          e.preventDefault();
          // Clear any previously-previewed card
          const prev = grid.querySelector('.cube-card.is-previewed');
          if (prev) prev.classList.remove('is-previewed');
          pendingCard = cardKey;
          li.classList.add('is-previewed');
          const card = { s: li.dataset.set, cn: li.dataset.cn, n: li.dataset.name };
          const rect = li.getBoundingClientRect();
          showTooltip(card, rect.left + rect.width / 2, rect.top);
          return;
        }

        const url = `https://scryfall.com/card/${encodeURIComponent(li.dataset.set)}/${encodeURIComponent(li.dataset.cn)}`;
        window.open(url, '_blank', 'noopener');
      });
    }

    // Dismiss touch preview when tapping anywhere else
    if (isTouch) {
      document.addEventListener('click', e => {
        if (!pendingCard) return;
        if (e.target.closest('.cube-card')) return;
        if (e.target.closest('.cube-tip')) return;
        dismissPreview();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(init, 0));
  } else {
    setTimeout(init, 0);
  }
})();
