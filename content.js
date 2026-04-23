// ============================================================
// Primer content — injected into #content on load.
// ============================================================

const TERM = (t, label) => `<span class="term" tabindex="0" data-term="${t}">${label || t}</span>`;

const SIGIL = {
  elf:      `<svg viewBox="0 0 40 40" fill="none"><path d="M20 4 C14 14, 14 26, 20 36 C26 26, 26 14, 20 4 Z M20 12 L20 28 M13 18 L27 18 M14 24 L26 24" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  kithkin:  `<svg viewBox="0 0 40 40" fill="none"><polygon points="20,5 33,12 33,28 20,35 7,28 7,12" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><polygon points="20,13 27,17 27,23 20,27 13,23 13,17" stroke="currentColor" stroke-width="1.2"/></svg>`,
  faerie:   `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="3" fill="currentColor"/><ellipse cx="12" cy="14" rx="7" ry="4" stroke="currentColor" stroke-width="1.4" transform="rotate(-30 12 14)"/><ellipse cx="28" cy="14" rx="7" ry="4" stroke="currentColor" stroke-width="1.4" transform="rotate(30 28 14)"/><ellipse cx="12" cy="26" rx="5" ry="3" stroke="currentColor" stroke-width="1.2" transform="rotate(30 12 26)"/><ellipse cx="28" cy="26" rx="5" ry="3" stroke="currentColor" stroke-width="1.2" transform="rotate(-30 28 26)"/></svg>`,
  merrow:   `<svg viewBox="0 0 40 40" fill="none"><path d="M4 22 C10 14, 14 30, 20 22 C26 14, 30 30, 36 22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/><path d="M4 28 C10 20, 14 36, 20 28 C26 20, 30 36, 36 28" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity=".55" fill="none"/></svg>`,
  flamekin: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 36 C10 30, 10 20, 18 12 C17 18, 22 18, 22 12 C27 16, 30 24, 26 30 C30 27, 31 22, 29 18 C34 22, 34 32, 26 36 Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/></svg>`,
  treefolk: `<svg viewBox="0 0 40 40" fill="none"><path d="M20 6 L20 28 M14 14 L20 18 M26 14 L20 18 M11 22 L20 25 M29 22 L20 25" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12 32 C16 30, 18 34, 20 32 C22 30, 24 34, 28 32" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none"/></svg>`,
  boggart:  `<svg viewBox="0 0 40 40" fill="none"><path d="M7 28 L20 8 L33 28 Z M20 8 L14 20 L22 18 L16 28" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/></svg>`,
  giant:    `<svg viewBox="0 0 40 40" fill="none"><path d="M8 30 L8 16 L18 16 L18 10 L22 10 L22 16 L32 16 L32 30 Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/></svg>`,
};

const PH = (label, hint) =>
  `<aside class="portrait"><div class="ph-label"><strong>${label}</strong>${hint ? `<em>${hint}</em>` : ''}</div></aside>`;
const PH_LEFT = (label, hint) =>
  `<aside class="portrait left"><div class="ph-label"><strong>${label}</strong>${hint ? `<em>${hint}</em>` : ''}</div></aside>`;
const PH_BLEED = (label, hint) =>
  `<div class="art-bleed"><div class="art-bleed-inner"><div class="ph-label"><strong>${label}</strong>${hint ? `<em>${hint}</em>` : ''}</div></div></div>`;

const ART_BLEED = (src, pos, size) => {
  const contain = size === 'contain';
  const cls = contain ? 'art-bleed-inner art-real art-contain' : 'art-bleed-inner art-real';
  const style = `background-image:url('${src}')${!contain && pos ? `;background-position:${pos}` : ''}${!contain && size && size !== 'contain' ? `;background-size:${size}` : ''}`;
  return `<div class="art-bleed"><div class="${cls}" style="${style}"></div></div>`;
};
const ART_PORTRAIT = (src, side = 'right', pos) =>
  `<aside class="portrait real ${side}" style="background-image:url('${src}')${pos ? `;background-position:${pos}` : ''}"></aside>`;

// ============================================================
const CONTENT = `

<!-- ========= INTRO ========= -->
<section class="sect sun" id="intro" data-screen-label="02 Intro">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part I</p>
      <h2>Two Worlds, <em>One Plane</em></h2>
      <p class="kicker">Lorwyn is unlike any other plane in the Multiverse.</p>
    </header>

    <p class="lede">The plane of Lorwyn exists in a perpetual twilight — the sun never quite sets, the sky never goes fully dark. It is a world of eternal summer and gentle magic, where six great tribes live in uneasy coexistence.</p>

    ${ART_BLEED('art/lorwyn/places/forest_sunbeams.png')}

    <p>But Lorwyn has a secret. Twice in its history, a magical cataclysm called the ${TERM('Aurora','Great Aurora')} has inverted the world. In one night it transforms from a summer idyll into a nightmare of endless winter twilight. The same tribes persist, but their natures flip. The beautiful become cruel. The cruel become wretched. The curious become paranoid. And no one remembers what came before.</p>

    <p>The Aurora arrived years ahead of schedule — a fact that unsettles ${TERM('Oona')} most of all, since she prided herself on orchestrating both phases of the cycle and found it arriving before she was ready.</p>

    <div class="callout warn">
      <p class="cal-head"><span class="dot"></span>A note on spoilers</p>
      <p>This primer discusses the plots of the four Lorwyn/Shadowmoor novels in full, including their endings. The novels are ~20 years old; read them unspoiled first if you'd like. Reading order: <em>Lorwyn → Morningtide → Shadowmoor → Eventide</em>.</p>
    </div>

    <p>Reading this before drafting will enrich the cards in your pile. The elves pursuing you, the faeries meddling in your affairs, the boggarts raiding your villages — they are characters with histories. We hope this makes them come alive at the table.</p>

    <div class="orn">${SIGIL.kithkin}</div>
  </div>
</section>

<!-- ========= WORLD ========= -->
<section class="sect sun" id="world" data-screen-label="03 World">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part II</p>
      <h2>The World <em>of Lorwyn</em></h2>
    </header>

    ${ART_BLEED('art/lorwyn/places/goldmeadow.png')}

    <p class="lede">Lorwyn is pastoral and sun-drenched: ancient forests, winding rivers, rolling meadows. The sky glows rose-gold — neither day nor night. The forests are vast and alive with magic. The rivers are swift and filled with secrets. The hills shelter kithkin villages; the crags above shelter the flamekin.</p>

    <p>The <em>Wanderwine River</em> is Lorwyn's great artery, lined with ${TERM('Crannog','crannogs')} — floating merrow village-structures whose above-water docks conceal ten times as much population beneath. Above the treeline, fire-elementals walk in search of meaning. In the deepest wood, ancient yew trees dispense slow wisdom to anyone patient enough to wait for it.</p>

    <div class="pull">
      "One day, night will come to these mountains. From crag to creekside and past all points beyond, the evening falls."
      <cite>Narvek Riag, kithkin prophet</cite>
    </div>

    <p>This is a world that feels safe and ordered on the surface. The elves maintain that order through force and hierarchy. The kithkin maintain it through community and shared thought. The merrow maintain the river lanes. Everyone knows their place — or is made to know it.</p>
  </div>
</section>

<!-- ========= TRIBES (glance cards) ========= -->
<section class="sect sun" id="tribes" data-screen-label="04 Tribes">
  <div class="sect-inner wide">
    <header class="part-head">
      <p class="roman">Part III</p>
      <h2>The Eight <em>Tribes</em></h2>
      <p class="kicker">Each tribe is not merely a species — it is a culture, a philosophy, a way of being.</p>
    </header>

    <h4 class="subheading">At a glance</h4>
    <div class="glance-grid">
      <article class="glance-card tribe elf">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.elf}</span><h4>Elves<small>Blessed Nation</small></h4></div>
        <p class="gc-tagline">"Beauty is philosophy. Ugliness is moral failure."</p>
        <dl><dt>Magic</dt><dd>Moonglove poison, vinebred control, hunting order.</dd>
        <dt>Home</dt><dd>The Gilt Leaf Wood; the spired city of Lys Alana.</dd>
        <dt>Mood</dt><dd>Haughty, ritualistic, merciless.</dd></dl>
      </article>
      <article class="glance-card tribe kithkin">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.kithkin}</span><h4>Kithkin<small>The Thoughtweft</small></h4></div>
        <p class="gc-tagline">"No kithkin is ever alone."</p>
        <dl><dt>Magic</dt><dd>The ${TERM('Mindweft','thoughtweft')} — a shared psychic bond spanning a clachan.</dd>
        <dt>Home</dt><dd>Fortified village-towns — clachans in Lorwyn, douns in Shadowmoor.</dd>
        <dt>Mood</dt><dd>Communal, cheerful → paranoid, defensive.</dd></dl>
      </article>
      <article class="glance-card tribe faerie">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.faerie}</span><h4>Faeries<small>Cliques of Glen Elendra</small></h4></div>
        <p class="gc-tagline">"Dreams are fleeting. Reality even more so." — Oona</p>
        <dl><dt>Magic</dt><dd>Glamers, dreamstuff harvesting, telepathy within a ${TERM('Clique','clique')}.</dd>
        <dt>Home</dt><dd>Glen Elendra — hidden by glamers so strong outsiders forget they came.</dd>
        <dt>Mood</dt><dd>Chittering mischief with complete absence of conscience.</dd></dl>
      </article>
      <article class="glance-card tribe merrow">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.merrow}</span><h4>Merrow<small>Schools of the Wanderwine</small></h4></div>
        <p class="gc-tagline">"There is nowhere on Lorwyn that the Merrow Lanes cannot go."</p>
        <dl><dt>Magic</dt><dd>${TERM('Shapewater')}, glamers for diplomacy, river-line navigation.</dd>
        <dt>Home</dt><dd>Crannogs — the dock hides a city below the waterline.</dd>
        <dt>Mood</dt><dd>Mercantile, inquisitive, subtly manipulative.</dd></dl>
      </article>
      <article class="glance-card tribe flamekin">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.flamekin}</span><h4>Flamekin<small>Walkers on the Path</small></h4></div>
        <p class="gc-tagline">"The Path of Flame is a flamekin's most personal journey."</p>
        <dl><dt>Magic</dt><dd>Living fire; spirit-binding; elemental summoning.</dd>
        <dt>Home</dt><dd>Scattered flickers and mountain shrines; no fixed cities.</dd>
        <dt>Mood</dt><dd>Spiritual, questing → cold, calculating cinders.</dd></dl>
      </article>
      <article class="glance-card tribe treefolk">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.treefolk}</span><h4>Treefolk<small>Elders of the Wood</small></h4></div>
        <p class="gc-tagline">"Changes far greater than the turning of the leaves await us." — Colfenor</p>
        <dl><dt>Magic</dt><dd>Slow, deep sylvan magic; memory stored in rings.</dd>
        <dt>Home</dt><dd>Anywhere a forest has stood long enough.</dd>
        <dt>Mood</dt><dd>Patient, secretive, knowing more than they tell.</dd></dl>
      </article>
      <article class="glance-card tribe boggart">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.boggart}</span><h4>Boggarts<small>Warrens of the Mire</small></h4></div>
        <p class="gc-tagline">"Things you can eat. Things you chase down, pummel, and then eat."</p>
        <dl><dt>Magic</dt><dd>Almost none — they are a riot of appetite and curiosity.</dd>
        <dt>Home</dt><dd>Warrens under hills; wherever the ground smells rich.</dd>
        <dt>Mood</dt><dd>Gleeful, feral, genuinely joyful in their cruelty.</dd></dl>
      </article>
      <article class="glance-card tribe giant">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.giant}</span><h4>Giants<small>Wanderers of the Heights</small></h4></div>
        <p class="gc-tagline">Slow, enormous, dreaming surnames out of sleep.</p>
        <dl><dt>Magic</dt><dd>Oracular; geomantic; rarely cast, but never wrong.</dd>
        <dt>Home</dt><dd>The ridges above the world — and the clouds above those.</dd>
        <dt>Mood</dt><dd>Distant, philosophical, occasionally apocalyptic.</dd></dl>
      </article>
    </div>
  </div>
</section>

<!-- ========= ELVES (full spotlight, real art) ========= -->
<section class="sect sun tribe elf" id="elves" data-screen-label="05 Elves">
  <div class="sect-inner">
    <header class="tribe-head">
      <div class="tribe-row">
        <span class="tribe-sigil">${SIGIL.elf}</span>
        <div>
          <p class="tribe-label">Tribe I · The Blessed Nation</p>
          <h3>The Elves <em>of Gilt Leaf</em></h3>
        </div>
        <span class="tribe-tag">Green · Black</span>
      </div>
    </header>

    ${ART_BLEED('art/lorwyn/creatures/elves/gilt_leaf_ambush.png', 'center 30%')}

    <p class="lede">The elves of Lorwyn are the plane's aristocracy. They believe themselves to be the living embodiment of beauty, and beauty to be the highest moral virtue. By extension, the ugly are to be destroyed — a philosophy they pursue with cheerful, ritualized violence.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/elves/elf_warrior_twilight.png', 'right')}

    <p>The greatest tribe is the ${TERM('Gilt Leaf')} — masters of the Gilt Leaf Wood, dwelling in the spired city of Lys Alana. Their society is strictly caste-stratified, led by the ${TERM('Perfect','High Perfects')} who are reckoned the most beautiful. Below the Perfects are hunters, artisans, and common elves; below them, servants. Lowest of all are the ${TERM('Eyeblight','eyeblights')} — elves stripped of status for disfigurement, deformity, or disgrace. An eyeblight ranks lower than a boggart in the elven accounting.</p>

    <p>Elves ride ${TERM('Cervin','cervins')} — graceful antlered mounts whose bloodlines are themselves graded by caste. They hunt with ${TERM('Moonglove','moonglove')} poison, whose source plant embodies the tribe's core axiom: <em>the most beautiful things are also the most lethal.</em></p>

    <div class="pull">
      Treefolk and elves share a common interest in the forests — but really, the elves just feel at home with the view from above.
      <cite>—Ambassador Oak</cite>
    </div>

    ${ART_PORTRAIT('art/lorwyn/creatures/elves/elf_moonglove.png', 'left')}

    <h4 class="subheading">How they fight</h4>
    <p>Elf warfare is choreographed. A pack is led by a ${TERM('Daen')} — commander — and ultimate authority lies with the ${TERM('Taercenn')}. Packs are organized into ritualized hunting lines; in the field, a full Gilt Leaf ambush unfolds with the precision of a dance. ${TERM('Scarblade','Scarblades')} specialize in disfigurement rather than killing, because to an elf, being <em>marked</em> is worse than being dead: it costs you caste forever.</p>

    <p>${TERM('Vinebred','Vinebred')} creatures — captured beasts implanted with controlling nettlevine — are the elves' living siege weapons. Many elves consider vinebreeding a high art form: the vine improves the creature, they insist, as a frame improves a painting.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/elves/elf_thorn_scout.png', 'right')}

    <div class="callout">
      <p class="cal-head"><span class="dot"></span>In Shadowmoor: the Wilt-Leaf</p>
      <p>After the Aurora, the Gilt Leaf becomes the ${TERM('Wilt-Leaf')} — vigilant protectors of beauty, not because they have grown kinder but because beauty has become desperately rare. Where a Lorwyn elf hunts the ugly for pleasure, a Wilt-Leaf elf guards the beautiful out of fear of loss. Same philosophy, inverted stance.</p>
    </div>

    ${ART_PORTRAIT('art/shadowmoor/creatures/elves/elf_moon_sorceress.png', 'left')}

    <p>The Wilt-Leaf are fewer, quieter, and far more dangerous than their Lorwyn counterparts. Under the perpetual moon, their armor has darkened to purples and pewters; their hair has gone long and white; horns have grown from their heads the way winter grows on a branch. They are beautiful in a way that can no longer be walked up to. The Perfects of the Blessed Nation would not recognize their descendants; the descendants would recognize the Perfects, and consider them gaudy.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/elves/elf_cervin_riders.png', 'right')}

    <p>The cervins rode by the Wilt-Leaf are paler, swifter, horned, and far harder to kill. A Gilt Leaf patrol in Lorwyn was a fashion statement that happened to be lethal; a Wilt-Leaf patrol in Shadowmoor is a last stand choreographed across centuries. They do not hunt eyeblights any more. They <em>harvest</em> the moonglove-blight groves, thin out whatever has come for the last pockets of beauty, and ride home before the eclipse.</p>

    ${ART_BLEED('art/shadowmoor/creatures/elves/elf_hunter_stag.png', 'center 25%')}

    <h4 class="subheading">Key elves</h4>
    <div class="two-col">
      <div>
        <p><strong>${TERM('Rhys')}.</strong> A Gilt Leaf hunter — a daen of the Hemlock Pack — who, in the opening of the cycle, loses an ear and is declared an eyeblight by his own kin. His exile sets the entire plot in motion.</p>
        <p><strong>Nath of the Gilt Leaf.</strong> The taercenn who orders Rhys's disfigurement. Cunning, cruel, and — by his own lights — utterly righteous.</p>
      </div>
      <div>
        <p><strong>${TERM('Maralen')}.</strong> An elf who appears as if from nowhere, bearing knowledge no elf should have. She will become something else entirely before the cycle ends.</p>
        <p><strong>Gaddock Teeg.</strong> A kithkin mentioned only for contrast: elves consider him a proper enemy precisely because he is <em>not</em> ugly. Respect, in the Blessed Nation, is rare and never freely given.</p>
      </div>
    </div>
  </div>
</section>

<!-- ========= KITHKIN ========= -->
<section class="sect sun tribe kithkin" id="kithkin" data-screen-label="06 Kithkin">
  <div class="sect-inner">
    <header class="tribe-head">
      <div class="tribe-row">
        <span class="tribe-sigil">${SIGIL.kithkin}</span>
        <div>
          <p class="tribe-label">Tribe II · The Thoughtweft</p>
          <h3>The Kithkin <em>of the Clachans</em></h3>
        </div>
        <span class="tribe-tag">White · Green</span>
      </div>
    </header>

    ${ART_BLEED('art/lorwyn/places/goldmeadow.png')}

    <p class="lede">Kithkin are halfling-like — short, round-faced, deeply communal. Their defining trait is the <strong>${TERM('Mindweft','thoughtweft')}</strong>: a shared psychic bond linking every member of a ${TERM('Clachan')}. A kithkin is never truly alone. Fear ripples through the weft; so does courage. When one clachan member lifts their chin, the whole village lifts with them.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/kithkin/wizened_cenn.png', 'right')}

    <p>Clachans are led by a ${TERM('Cenn')} — a mayor, priest, and anchor of the weft in one. The cenn's steadiness is the village's steadiness; their panic is the village's panic. The role is sacred and exhausting. Beneath the cenn, kithkin live an idyllic rural life: shepherding ${TERM('Springjack','springjacks')}, tending hedge-gardens, brewing, trading with merrow at the river crannogs. Almost every kithkin is an archer; almost every kithkin keeps a trap or two.</p>

    <div class="pull">
      The thoughtweft amplifies any small bud of courage — turning fear to resolve, daring to heroics.
      <cite>—Gallant Fowlknight</cite>
    </div>

    <h4 class="subheading">In Shadowmoor: the doun</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/kithkin/kithkin_sul_hooded.png', 'left')}

    <p>After the Aurora, the clachan becomes the ${TERM('Doun')} — a fortified village ringed by ditches and watchtowers, forever braced for attack. The thoughtweft survives, but it carries the cenn's fear to everyone, not their warmth. A Shadowmoor kithkin is still bound to their kin — but now the bond feels like a noose they cannot cut. Watchers called ${TERM('Sul','Suls')} are elected monthly and locked into towers called ${TERM('Inslintur','inslinturs')} to stare outward at the night.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/kithkin/kithkin_doun_band.png', 'right')}

    <p>Where a Lorwyn kithkin fought to defend a neighbor, a Shadowmoor kithkin fights to <em>preempt</em>. Bands rove the heath at dusk with blades drawn and eyes glowing in the doun's shared paranoia — every glance outward is an accusation. The cenn no longer soothes; she <em>points.</em> And whatever she points at, the thoughtweft has already agreed to kill.</p>

    <h4 class="subheading">Key kithkin</h4>
    <p><strong>${TERM('Brigid Baeli')}.</strong> Hero of Kinsbaile, sharpshooter, tracker. Later the bearer of the Crescent of Morningtide, which links her to every oath ever sworn in its presence.</p>
    <p><strong>Gaddock Teeg.</strong> The most famous kithkin in the cycle. Small, round, formidable — a natural null to magic, and the emblem of kithkin stubbornness.</p>
  </div>
</section>

<!-- ========= FAERIES ========= -->
<section class="sect sun tribe faerie" id="faeries" data-screen-label="07 Faeries">
  <div class="sect-inner">
    <header class="tribe-head">
      <div class="tribe-row">
        <span class="tribe-sigil">${SIGIL.faerie}</span>
        <div>
          <p class="tribe-label">Tribe III · Cliques of Glen Elendra</p>
          <h3>The Faeries <em>of the Court</em></h3>
        </div>
        <span class="tribe-tag">Blue · Black</span>
      </div>
    </header>

    ${ART_BLEED('art/lorwyn/creatures/faeries/faerie_glamour.png', 'center 25%')}

    <p class="lede">Lorwyn's faeries are not Tinkerbell. They are chittering, amoral sprites whose favorite amusements include deranging travelers, stealing dreams, and driving kithkin villages to quiet madness. They have no conscience at all — a fact they do not regard as a flaw.</p>

    <p>Faeries organize themselves into ${TERM('Clique','cliques')} — bonded trios whose members share an empathic link. A clique functions as a single organism: three bodies, one emotional state. Break one faerie of a clique and the other two will find you.</p>

    <div class="pull">
      "Dreams are fleeting. Reality even more so."
      <cite>Oona, Queen of the Fae</cite>
    </div>

    <p>The queen of the fae is ${TERM('Oona')} — ancient, vast, and the secret engine of the entire Aurora cycle. Her home, ${TERM('Glen Elendra')}, is hidden by glamers so strong that non-fae who approach simply forget why they came. She harvests <strong>${TERM('Dreamstuff','dreamstuff')}</strong> — tangible dreams and rumors — from across the plane. What mortals don't know is that dreamstuff is not just Oona's food: it is the fuel of the Aurora itself.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/faeries/vendilion_clique/vendilion_clique_b.png', 'right')}

    <h4 class="subheading">Key faeries</h4>
    <p><strong>The ${TERM('Vendilion Clique')}.</strong> Iliona, Veesa, and Endry — three siblings bonded for life. Spies, guides, tormentors, and reluctant allies throughout the cycle. They will end the novels changed forever.</p>
    <p><strong>Oona.</strong> Everywhere — and addressed directly in <a href="#oona">Part VIII: The Queen Beneath</a>.</p>

    <h4 class="subheading">In Shadowmoor</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/faeries/faerie_bellflower_thief.png', 'left')}

    <p>The Aurora does not break the faeries the way it breaks everyone else. The dreamstuff no longer flows cleanly to Oona, but what of it? The fae were never <em>owned</em> by the queen so much as <em>paid</em> by her. In Shadowmoor they roam the ridges freer than before, stealing fire from paper-lanterns, wilting whole meadows for amusement, cupping bell-flowers in their claws as lures for anything dull enough to investigate.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/faeries/faerie_witch_staff.png', 'right')}

    <p>And many of them, now, ride. Shadowmoor fae are older-looking, gaunter, sometimes antlered — witches on gnarled staves who pick their way across the twilight sky as if the wind owed them a favor. A clique in Lorwyn was three siblings who finished each other's sentences. A clique in Shadowmoor is three witches who finish each other's <em>curses</em>.</p>

    ${ART_BLEED('art/shadowmoor/creatures/faeries/faerie_antlered_queen.png', 'center 30%')}
  </div>
</section>

<!-- ========= MERROW ========= -->
<section class="sect sun tribe merrow" id="merrow" data-screen-label="08 Merrow">
  <div class="sect-inner">
    <header class="tribe-head">
      <div class="tribe-row">
        <span class="tribe-sigil">${SIGIL.merrow}</span>
        <div>
          <p class="tribe-label">Tribe IV · Schools of the Wanderwine</p>
          <h3>The Merrow <em>of the River</em></h3>
        </div>
        <span class="tribe-tag">Blue · Green</span>
      </div>
    </header>

    ${ART_BLEED('art/lorwyn/places/wanderwine_hub.png', 'center 15%')}

    <p class="lede">Merrow are sleek, sharp-eyed, intensely mercantile. They rule the ${TERM('Wanderwine')} and its tributaries. Nothing moves on the river without their permission — or their fare. Their magic is ${TERM('Shapewater')}, which they use to form navigable lanes, trade bridges, and the occasional riot of drowning.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/merrow/sygg/sygg_a.png', 'right')}

    <p>A crannog is the visible tip of a merrow settlement — a half-submerged trading post whose below-water city may be ten times the size. When merrow deal with landwalkers they use ${TERM('Glamer','glamers')} to modulate voice and appearance. Rarely to deceive outright; more often to put the customer at ease. Merrow are not liars; they are simply ruthless about the <em>terms</em>.</p>

    <div class="pull">
      "I like to bask and watch its beauty — a reminder that we can't control the currents, but we can know how to swim across them."
      <cite>Sygg, merrow ferryman</cite>
    </div>

    <p><strong>${TERM('Sygg')}.</strong> Captain of <em>the Wander</em> — a shapewater-powered river-craft. A seasoned ferryman who knows exactly when a deal has become acceptable and is willing to let you wait out the rest of the crossing in the current.</p>

    <h4 class="subheading">In Shadowmoor</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/merrow/merrow_rune_etched.png', 'left')}

    <p>The Wanderwine does not run the same water after the Aurora. Where Lorwyn's merrow were mercantile, Shadowmoor's merrow are <em>territorial</em> — fewer glamers, more teeth. Their shapewater now carries old runes along their flanks like second skin, glowing green through weed-light. The schools no longer <em>negotiate</em>; they simply surface, confirm you are still the kind of thing the river lets pass, and sink again. Most of the time they are still the kind of thing the river lets pass.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/merrow/merrow_horned_plunge.png', 'right')}

    <p>The river itself has gone rougher. Shadowmoor merrow plunge through white-water cataracts where Lorwyn merrow would have carved a lane, horns laid flat to the current, the hunt on. A Lorwyn crannog was a trading post with a price list. A Shadowmoor crannog is a fortress with an open bill of exchange: <em>one passage for one promise</em>. The promises are collected. The promises are sometimes called in.</p>

    ${ART_BLEED('art/shadowmoor/creatures/merrow/merrow_bone_witch.png')}
  </div>
</section>

<!-- ========= FLAMEKIN ========= -->
<section class="sect sun tribe flamekin" id="flamekin" data-screen-label="09 Flamekin">
  <div class="sect-inner">
    <header class="tribe-head">
      <div class="tribe-row">
        <span class="tribe-sigil">${SIGIL.flamekin}</span>
        <div>
          <p class="tribe-label">Tribe V · Walkers on the Path</p>
          <h3>The Flamekin <em>of the Heights</em></h3>
        </div>
        <span class="tribe-tag">Red</span>
      </div>
    </header>

    ${ART_BLEED('art/lorwyn/creatures/flamekin/flamekin_immolation.png')}

    <p class="lede">Flamekin are living fire — humanoid shapes of coals and banked embers who take the world as a place to be understood rather than commanded. Their defining tradition is the <strong>${TERM('Pilgrim','Path of Flame')}</strong>: a lifetime spiritual journey to find and commune with one's personal elemental spirit. A flamekin without a pilgrimage is an ember without purpose.</p>

    <div class="pull">
      "The Path of Flame is a flamekin's most personal journey. You must walk it for yourself — but you'll never walk alone."
      <cite>Zasharua, Brighthearth mentor</cite>
    </div>

    ${ART_PORTRAIT('art/lorwyn/creatures/flamekin/ashling/ashling_leaping.png', 'right')}

    <p>Flamekin have no fixed cities — only small camps and roadside shrines called <em>flickers</em>. Their fires burn cool until they decide otherwise; a peaceful flamekin can cradle a child's hand without harm. An angry one can ignite a forest.</p>

    <p><strong>${TERM('Ashling')}.</strong> The cycle's central flamekin. Her ten-year pilgrimage to find her elemental consumes the entire narrative. She will, over the course of the books, become <strong>The Destroyer</strong> that the cinders' prophecy names — and, eventually, something new.</p>

    <h4 class="subheading">In Shadowmoor: the Cinder</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/flamekin/cinder_walker.png', 'left')}

    <p>After the Aurora, flamekin become ${TERM('Cinder','cinders')} — half-dead creatures of coal and guttering ember, cold-hearted and cruel. The warm embers that once lit a pilgrim's way now smoulder in skeletal joints. A cinder that lays a hand on a child does not cradle; it <em>burns through.</em> Where a flamekin's fire was a search, a cinder's fire is a weapon.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/flamekin/cinder_flailing_heads.png', 'right')}

    <p>Cinders do not walk the Path. They no longer remember it exists. Their rituals are shriveled, spiteful echoes of the old pilgrim rites — they swing the skulls of their own as flails, bind flame into cruel fetishes, and raid the douns for fuel. The mentors and brightwardens of Lorwyn are, in Shadowmoor, just more coal to be broken apart and burned again.</p>

    <p>What the cinders do still hold is a prophecy. They do not worship Ashling — they have no idea who she is. They worship <strong>The Destroyer</strong>: a promised figure at the head of a three-phase liturgy, the messianic end of the world as they understand it. That Ashling turns out to <em>be</em> The Destroyer is a detail above their pay grade. The liturgy itself runs:</p>

    <div class="pull">
      In the darkness, she is the Destroyer, who shall cover the world with fire.<br>
      In the sea of flame she becomes the Extinguisher, who shall consume the fire that consumed the world.<br>
      And from the ashes, we are reborn.
      <cite>—Cinder liturgy</cite>
    </div>

    <p>Destroyer, Extinguisher, reborn — one figure moving through three phases, not three different beings. In Eventide they believe she has begun the first of those phases in earnest. They are not wrong.</p>

    ${ART_BLEED('art/shadowmoor/creatures/flamekin/cinder_pack.png')}
  </div>
</section>

<!-- ========= TREEFOLK ========= -->
<section class="sect sun tribe treefolk" id="treefolk" data-screen-label="10 Treefolk">
  <div class="sect-inner">
    <header class="tribe-head">
      <div class="tribe-row">
        <span class="tribe-sigil">${SIGIL.treefolk}</span>
        <div>
          <p class="tribe-label">Tribe VI · Elders of the Wood</p>
          <h3>The Treefolk <em>of the Deep Forest</em></h3>
        </div>
        <span class="tribe-tag">Green · Black</span>
      </div>
    </header>

    ${ART_BLEED('art/lorwyn/creatures/treefolk/ancient_singing_treefolk.png', 'center 10%')}

    <p class="lede">Treefolk are the oldest thinking beings on Lorwyn. They move slowly, speak slowly, live for centuries — and remember everything. Their magic is the slowest kind, the kind that moves through roots and is stored in rings. A treefolk sage can recall events from eras no one else has even heard of.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/treefolk/colfenor/colfenor.png', 'right')}

    <p>The most important treefolk in the cycle — perhaps the most important character, full stop — is <strong>${TERM('Colfenor','Colfenor, the Last Yew')}</strong>. He knows the Aurora is coming. He has been preparing for it longer than most of Lorwyn has been alive. He is mentor to Rhys, rival to Maralen, and quietly orchestrates events no one else realizes are connected.</p>

    <div class="pull">
      "Changes far greater than the turning of the leaves await us at season's end."
      <cite>Colfenor, the Last Yew</cite>
    </div>

    <h4 class="subheading">In Shadowmoor</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/treefolk/treefolk_blighted_yew.png', 'left')}

    <p>Colfenor is dead. The Red Yew fell in the last volume of Lorwyn, and the Aurora came down on a forest already missing its eldest tongue. What the Aurora finds in Shadowmoor's woods is grief without a speaker — mile on mile of bare, twisted sentinels leaning into a sunset that never goes dark. They are still awake. They are simply no longer answering. A kithkin who walks out to the edge of the treeline and calls a familiar elder's name will be heard, and will be remembered, and will not be replied to.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/treefolk/treefolk_fruitburdened.png', 'right')}

    <p>The younger treefolk took the turn worse. Wild magic pools in the bogs the way rain used to, and the saplings that rooted there have grown <em>burdened</em> — knuckled over with pods, fruiting heavy ropes of dream-rot, a single green eye blinking from under the moss. These are the <strong>fruit-hung</strong>, and what ripens on them is not to be eaten. Witches bargain with them by leaving gifts at the roots. Boggarts try to pick them anyway. The roots, mostly, are faster than the boggarts.</p>

    ${ART_BLEED('art/shadowmoor/creatures/treefolk/treefolk_woodfall_wrath.png', 'center 20%')}

    <p>And when the elder trees finally <em>do</em> answer, the answer is not a word. A Woodfall elder wakes the way a cliff wakes: once, suddenly, and everything below it rearranges. Cinders burn at its feet and leave no mark; elves with moonglove daggers run for the moorland. The old treefolk have waited long enough to hear what the plane is doing without Colfenor in it, and they do not like what they've heard. The forests of Shadowmoor are not peaceful. They are in mourning, and they are armed.</p>
  </div>
</section>

<!-- ========= BOGGARTS ========= -->
<section class="sect sun tribe boggart" id="boggarts" data-screen-label="11 Boggarts">
  <div class="sect-inner">
    <header class="tribe-head">
      <div class="tribe-row">
        <span class="tribe-sigil">${SIGIL.boggart}</span>
        <div>
          <p class="tribe-label">Tribe VII · Warrens of the Mire</p>
          <h3>The Boggarts <em>of the Warrens</em></h3>
        </div>
        <span class="tribe-tag">Red · Black</span>
      </div>
    </header>

    ${ART_BLEED('art/lorwyn/creatures/boggarts/boggart_birth_rite.png', 'center 30%', 'contain')}

    <p class="lede">Boggarts are filthy, stupid, and — genuinely, unambiguously — having the best time on Lorwyn. They are a riot of appetite and curiosity, roaming the plane in warrens that feel less like tribes and more like delighted mobs. A boggart is not malicious in the way an elf is malicious. A boggart simply hasn't yet been convinced that the thing in front of it is not, in fact, food.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/boggarts/boggart_warren.png', 'right')}

    <p>The fundamental boggart worldview: there are two kinds of thing in the world. <em>Things you can eat,</em> and <em>things you have to chase down and pummel before you can eat them.</em> Everything — giants, elves, weather, rocks — falls into one category or the other. This is not a metaphor; it is their operating principle.</p>

    <div class="pull">
      Boggarts revel in discovering new sensations — from the texture of an otter pellet to the squeak of a dying warrenmate.
      <cite>—Boggart Shenanigans</cite>
    </div>

    ${ART_PORTRAIT('art/lorwyn/creatures/boggarts/boggart_close.png', 'left')}

    <p>They live in warrens dug under hills and in the mire margins. A boggart warren has hierarchy only in the loosest sense — whichever boggart is loudest and currently holding the biggest stick is, for the moment, in charge. This lasts until the next stick.</p>

    ${ART_BLEED('art/lorwyn/creatures/boggarts/boggart_clan.png', 'center 30%')}

    <div class="callout">
      <p class="cal-head"><span class="dot"></span>In Shadowmoor</p>
      <p>Boggarts survive the Aurora remarkably intact. They were already living in the dark and muck; Shadowmoor merely confirms their worldview. Where a Lorwyn boggart is feral-joyful, a Shadowmoor boggart is feral-cunning. The joy remains. The cunning is new — and worse.</p>
    </div>

    ${ART_PORTRAIT('art/shadowmoor/creatures/boggarts/boggart_boar_rider.png', 'left')}

    <p>They mount what they can catch. Shadowmoor boggart raiders ride half-wild boars and bristlesows into douns at dusk, spears reeking of moonglove, teeth bared in a grin that has not stopped grinning since Lorwyn. A Lorwyn boggart would have eaten the boar. A Shadowmoor boggart eats whatever the boar knocks over.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/boggarts/boggart_brute_cleaver.png', 'right')}

    <p>And their shamans, at last, are <em>doing something</em>. The wild magic of Shadowmoor is exactly the kind of power a boggart shaman enjoys: fast, uncalibrated, explosive, and unfair. A clever warren in Lorwyn had a lucky stick; a clever warren in Shadowmoor has a feral mage who can hex a kithkin sentry into mistaking their own neighbor for a monster. Every use risks backlash. The warren does not care. The warren never has.</p>

    ${ART_BLEED('art/lorwyn/creatures/boggarts/boggart_raid.png', 'center 25%')}

    <p class="aside-note">▶ For the flavor of boggart life on both sides of the Aurora, see <a href="https://youtu.be/mCQ5EF69rSQ?si=MRgOaAcJl07dxX3j" target="_blank" rel="noopener"><em>A Boggart Ballad</em> — Lorwyn Eclipsed trailer</a>, a Jim Henson Studios collaboration depicting a Lorwyn boggart meeting its Shadowmoor counterpart.</p>
  </div>
</section>

<!-- ========= GIANTS ========= -->
<section class="sect sun tribe giant" id="giants" data-screen-label="12 Giants">
  <div class="sect-inner">
    <header class="tribe-head">
      <div class="tribe-row">
        <span class="tribe-sigil">${SIGIL.giant}</span>
        <div>
          <p class="tribe-label">Tribe VIII · Wanderers of the Heights</p>
          <h3>The Giants <em>of the Cloud Crags</em></h3>
        </div>
        <span class="tribe-tag">Red · White</span>
      </div>
    </header>

    ${ART_BLEED('art/lorwyn/creatures/giants/rosheen_meanderer.png', 'center 3%')}

    <p class="lede">Giants in Lorwyn are not dumb brutes. They are slow, enormous philosophers who think about time in eras rather than days. They live so long and on such a scale that many smaller folk genuinely do not believe they ever truly die. The eldest giants may in fact be right — or at least have outlived anyone who could contradict them.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_examines_grass.png', 'right')}

    <p>A giant's day unfolds at a pace that other tribes find maddening. They lean on ridgelines to watch a season pass. They pick up a kithkin-sized rock and turn it over for an afternoon. To a boggart this looks like catastrophic laziness; to a flamekin philosopher it looks like the plane's most honest meditation. The giants themselves are simply thinking things through. The conclusion, when it arrives, tends to flatten a village.</p>

    <div class="pull">
      Giants are prone to long naps and fits of grumpiness. Treading gently is generally a good idea when one is in the area.
      <cite>—Cloudcrown Oak</cite>
    </div>

    <h4 class="subheading">The Name Sleep</h4>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_cloudgoat_herder.png', 'left')}

    <p>Giants practice a custom called <strong>${TERM('Name Sleep','the Name Sleep')}</strong>: on sudden trauma — or sudden abundance — a giant lies down wherever they stand and enters a slumber that may last days or seasons. What they dream becomes their surname. A giant caught out on a hillside by bad news might wake up weeks later, blink, and announce themselves <em>Thunderbrow</em> or <em>Meanderer</em> or <em>Stoutarm</em>. The name is binding. The giant is, in a real sense, not the same person who lay down.</p>

    <p>The giantess <strong>${TERM('Rosheen Meanderer','Rosheen')}</strong> is the cycle's most beloved giant. She sleeps in a valley with her eyes half-open, muttering prophecy in the timbre of slow weather. Her cloudgoat <em>Mr. Choppers</em> — a woolly elemental the size of a barn — grazes on the clouds above her head and keeps the crows off. Kithkin from nearby clachans sometimes climb up to listen to her sleep-talk. Her mumbled fragments, interpreted correctly, have called storms, found lost children, and once named a cenn.</p>

    <h4 class="subheading">Giants and the small folk</h4>

    ${ART_BLEED('art/lorwyn/creatures/giants/giants_destroy_village.png', 'center 10%')}

    <p>Most giants are indifferent to smaller tribes the way a storm is indifferent to a puddle: not cruel, merely scaled wrong. A giant crossing the moors will flatten six boggart burrows and a kithkin orchard without noticing, not because they don't care — many giants care quite a lot — but because by the time they've looked down, the damage is already old news. Clachans that sit near giant pathways post watchers for this exact reason, and the cenn's thoughtweft will ripple with the message <em>move the children, a slow one is coming</em> sometimes hours before the first footfall.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_ladybug_palm.png', 'right')}

    <p>A giant with time on their hands, though, is a different creature. Curiosity runs deep in the Cloud Crags. Many a giant will scoop up a handful of something small — beetles, moonberries, a particularly confused faerie — and study it for a whole afternoon, perfectly still, brow furrowed in enormous concentration. The faerie may or may not be released. The beetles, in the giants' defence, are usually eaten.</p>

    <div class="pull">
      The gentle giant fumbled the tiny thing in his hand as he spoke to it. "Sorry, sorry," he said, "can you repeat that? I lost you among my fingers."
      <cite>—Giant Harbinger</cite>
    </div>

    <h4 class="subheading">When a giant fights</h4>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_charging.png', 'left')}

    <p>Giants rarely make war — their internal disputes play out across decades, at geologic tempo — but when a giant is roused, the result is not a skirmish, it is a <em>fact of geography</em>. Forests are restructured. Rivers change course. Whole boggart warrens are rearranged into hills of a slightly different shape. A charging giant levels ground the way a flood levels ground: without theory, without strategy, and without anyone left to debate whether it was fair.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_axe.png', 'right')}

    <p>Their weapons are scaled to match: axes hewn from whole oaks, mauls tipped with boulders, chains long enough to drag a crannog off its moorings. A few giants — the so-called <strong>Hearthcage</strong> lineage — have learned to carry flame the way a flamekin does, swinging a burning fist that is equal parts cudgel and meteor. They are, by giant standards, hotheads. By anyone else's standards they are a natural disaster with opinions.</p>

    ${ART_BLEED('art/lorwyn/creatures/giants/giant_chained_firefist.png', 'center 5%')}

    <h4 class="subheading">Oracles and ogres</h4>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_eater.png', 'left')}

    <p>Not every giant is wise. The kin of the high ridges — the Arbiters, the Meanderers, the cloudgoat-herders — tend to oracular thoughtfulness and long, mild lives. The lowland giants, the <em>hill-ogres</em> of the rough country between kithkin lands and the mire, are coarser, hungrier, and markedly less philosophical. Boggarts and hill-ogres have a fraught and mostly edible relationship: the boggart sees the ogre as a walking pantry with legs, and the ogre sees the boggart as a shrieking snack that has to be caught before it ducks into a hole.</p>

    <div class="pull">
      Though giants are mortal, they live so long and on such a grand scale that many small folk don't believe they ever truly die.
      <cite>—Arbiter of Knollridge</cite>
    </div>

    <h4 class="subheading">Key giants</h4>
    <div class="two-col">
      <div>
        <p><strong>${TERM('Rosheen Meanderer','Rosheen Meanderer')}.</strong> Oracular giantess of a nameless valley. Sleeps with eyes half-open; prophesies in mutters; keeps the cloudgoat Mr. Choppers. Any kithkin dispute of consequence eventually gets walked up to Rosheen's valley, whispered into the air near her, and reinterpreted by the cenn on the way back down.</p>
        <p><strong>Brion Stoutarm.</strong> A mercenary giant of the high crags who hires himself out — for the right herd of cloudgoats — to clachans too small to mount their own defence. Brion is the living proof that giants can, in fact, be bargained with, provided you respect the scale.</p>
      </div>
      <div>
        <p><strong>The Arbiters of Knollridge.</strong> A lineage of old giants who wander the ridges settling disputes simply by sitting down between the parties until one of them gives up and leaves. Their judgements are not always wise. They are always final.</p>
        <p><strong>The Hearthcage line.</strong> Fire-handed giants of the Sootstoke approaches. More kin-cousin to flamekin in temperament than to the Meanderers. Brief of fuse, large of fist, short of retirement plan.</p>
      </div>
    </div>

    ${ART_BLEED('art/lorwyn/creatures/giants/giant_contemplating.png', 'center 5%')}

    <div class="callout">
      <p class="cal-head"><span class="dot"></span>In Shadowmoor</p>
      <p>After the Aurora, giants change less than any other tribe — they were already slow, already indifferent, already old. The difference is that the sky stops being kind to them. Shadowmoor giants are gaunter, quieter, and spend even more time asleep; their Name Sleeps now yield darker surnames — <em>Brambleforge</em>, <em>Sunk-Shoulder</em>, <em>Winterbier</em>. Rosheen is believed to sleep through the entire Shadowmoor phase without waking once. Nobody has the nerve to check.</p>
    </div>

    ${ART_PORTRAIT('art/shadowmoor/creatures/giants/giant_purpleflame_rage.png', 'left')}

    <p>And yet — when a Shadowmoor giant <em>does</em> wake, the sky is not kind to anyone else either. The Hearthcage line has taken the worst of the turn: their fire has gone wrong-colored, a bruise-violet flame that does not warm, does not cook, does not comfort. A Hearthcage giant in rage is no longer a natural disaster with opinions; it is a natural disaster with a grudge, and the grudge is usually against something very small that ran very fast.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/giants/giant_hex_cursed.png', 'right')}

    <p>Some giants did not wake at all; the Name Sleep took them, and the wild magic of Shadowmoor grew in after. These are the <strong>hex-struck</strong> — moss-bearded sleepers whose bodies have become curse-vessels, red runes flickering across their skin in the dark. They dream aloud, and what they dream crawls out of them. Witches of the bog-covens hike up the ridges specifically to listen at their mouths. The Name Sleep, for a hex-struck giant, never ends; the surname, when it arrives, will be spoken by someone else.</p>

    ${ART_BLEED('art/shadowmoor/creatures/giants/giant_cagekeeper.png', 'center 3%')}

    <p>And at the foot of the crags, the hill-ogres have gone into the cage-keeping trade. A Shadowmoor ogre will drag a kithkin raiding party back to its lair in iron bars it wove itself, one captive at a time, and open the cage only to feed. The boggarts still try to steal them out. The ogres, being hungrier and smarter than they were in Lorwyn, now keep the keys.</p>
  </div>
</section>

<!-- ========= FAMILIAR FACES ========= -->
<section class="sect sun" id="familiar" data-screen-label="13 Familiar Faces">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part IV</p>
      <h2>Familiar Faces, <em>Made Strange</em></h2>
      <p class="kicker">Some creatures you think you know. Here they are not quite themselves.</p>
    </header>

    ${ART_PORTRAIT('art/lorwyn/creatures/changelings/changeling_crib_switched.png', 'right')}

    <p>If you've played Magic before, some Lorwyn creatures will look oddly familiar — until you notice what's changed.</p>

    <div class="two-col">
      <div>
        <h4 class="subheading">Goblins, restyled</h4>
        <p>Boggarts <em>are</em> goblins, in mechanics and role — but the flavor is entirely new. No gunpowder, no engineers, no gears. Lorwyn goblins are a Pictish folklore goblin: filthy, giggling, living under hills.</p>
        <h4 class="subheading">Halflings, weaponized</h4>
        <p>Kithkin are small round folk from the Shire — if the Shire had trained every Baggins from childhood as an archer and wired their emotions to every neighbor through telepathy.</p>
        <h4 class="subheading">Elves, unrecognizable</h4>
        <p>Forget Tolkien's wistful moral paragons. Lorwyn elves have <em>horns</em> and <em>cloven hooves</em>. They are aristocrats of aesthetics to the point of lunacy: beauty is moral worth, ugliness is a crime answerable by death, and a scarred face is grounds for execution. They are the plane's apex predators and they know it.</p>
      </div>
      <div>
        <h4 class="subheading">Elementals, personal</h4>
        <p>Elementals here are not weather. They are the spirits flamekin pilgrims seek. A flamekin's elemental is a mirror — the deep self, externalized — and binding to one is the culmination of a life.</p>
        <h4 class="subheading">Fae, without mercy</h4>
        <p>Forget any image of faeries as twinkling, benevolent, or small-and-cute. Their mythic lineage is the Unseelie Court of British folklore: tiny, capricious, and genuinely dangerous — the kind that lures travelers off paths for sport and counts a stolen breath as a good afternoon's work.</p>
      </div>
    </div>
  </div>
</section>

<!-- ========= CREATURES BETWEEN ========= -->
<section class="sect sun" id="creatures" data-screen-label="14 Creatures Between">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part V</p>
      <h2>The Creatures <em>Between</em></h2>
      <p class="kicker">Not everything on the plane fits a tribe.</p>
    </header>

    <h4 class="subheading">Changelings</h4>
    ${ART_BLEED('art/lorwyn/places/velis_vel.png')}

    <p>We do not know very much about changelings, and the changelings are not helping. They emerge from <em>Velis Vel</em> — a place of drifting light and stalactite cathedrals — and they can pass as any tribe at will. The mechanical answer is that a changeling counts as every creature type. The flavor answer is that you cannot trust one to stay shaped like whatever it was shaped like thirty seconds ago.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/changelings/changeling_kithkin_impostor.png', 'right')}

    <p>In Lorwyn they are <em>playful</em> mimics — children's stories are full of them: the extra kithkin at the harvest who turned out not to be anyone's cousin, the merrow on the barge who laughed at the wrong joke, the elf scout who, when looked at too closely, resolved into several smaller things that wandered off in different directions. Elves in particular hate them: something that is nominally every tribe is, to an elf, nominally <em>every possible eyeblight at once</em>.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/changelings/changeling_traveler_spyglass.png', 'left')}

    <p>In Shadowmoor the play drops away. What a Lorwyn changeling did for amusement — switched a crib, mimicked a voice, sat at the edge of a campfire unnoticed — a Shadowmoor changeling does for <em>appetite</em>. They are still shapeless. They are now also hungry. Kithkin doun watchers test strangers at the gate by asking them a question only a kin could answer; the changelings have been sitting in the hedge learning the answers.</p>

    <h4 class="subheading">Elementals (Shadowmoor)</h4>
    <p>In Shadowmoor the plane itself leaks elementals — raw spirits of landscape and weather, pulled into form by the wild magic saturating the world. They are everywhere and unpredictable.</p>

    <h4 class="subheading">Scarecrows</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/scarecrows/scarecrow_tattered_king.png', 'right')}

    <p>Very little is certain about Shadowmoor's scarecrows, and this is itself the most interesting thing about them. They are animated. They are stitched together from straw, elfskin, fence-nails, scavenged parts of whatever was in the field when the Aurora came down. They <em>walk</em>. Nobody is quite sure who first made one, or whether any living doun-wright remembers how. What is agreed on is that if a doun leaves an old scarecrow standing long enough in the wrong weather, one day it will simply take a step.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/scarecrows/scarecrow_antlered_reaper.png', 'left')}

    <p>Most stand guard. Any kithkin doun of consequence has at least one on watch at the threshold, and the older ones have two or three — gaunt antler-crowned things leaning into the wheat, eyes where eyes should not be, patient in a way nothing patient should be. They are the last thing raiders see before the doun wakes up. What task each scarecrow was given is usually something only its maker knew, and half the makers are dead. The scarecrow is still carrying out the task. It has simply forgotten what the task was <em>for.</em></p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/scarecrows/scarecrow_chained.png', 'right')}

    <p>Some go wrong. A scarecrow that begins acting on its own accord — walking when it has not been sent walking, taking what it has not been told to take — is by kithkin custom chained to a standing stone and left to think about it. Most of them stop moving after a season. The ones that do not are why the chains are so heavy. Their animosity, as the saying goes, outlives the chains.</p>

    <div class="pull">
      Scarecrows deemed too malevolent to roam free are shackled to boulders or dolmen stones. Their animosity usually outlives the chains.
      <cite>—Chainbreaker</cite>
    </div>

    <h4 class="subheading">Spiritual beings</h4>
    <p>Lorwyn has spirits — of trees, rivers, storms, dreams. Most are quiet. The ones that are not are usually the reason a clachan suddenly needs a hero.</p>

    <h4 class="subheading">Bairns</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/bairns/bairn_raccoon_gempail.png', 'left')}

    <p>In the long dusk between douns you will sometimes meet a <strong>bairn</strong> — a small hooded figure in a stitched-animal cowl, ember-eyed, carrying a pail. They are the smallest haunting Shadowmoor produces, and no one is quite sure what they are. They are not kithkin children. They are not faeries. They speak, occasionally, and what they say is usually a perfectly polite request for a shiny thing.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/bairns/bairn_bear_wisppail.png', 'right')}

    <p>Bairns collect, and bairns <em>distribute</em>. A raccoon-hood bairn will follow a stream for days filling its pail with river-gems and then, solemnly, set one on the shell of a passing frog. A bear-hood bairn will pluck a firesprite out of a withered oak, carry it home in a wisp-pail, and tuck it into the belly of a sleeping turtle for reasons no one has ever gotten a straight answer about. They take, they place, they move on. Cinders leave them alone. Boggarts have tried to rob them once and, as the phrase goes in the douns, <em>do not try a second time</em>. Most kithkin will set out a small bowl of pebbles on the doun wall at dusk and not ask questions when it is gone by dawn — or when, some mornings, there is something new in it.</p>

    <div class="pull">
      A bairn was seen to take a single gold coin, leave a toad in its place, and curtsy before disappearing into the hedge.
      <cite>from a kinsbaile night-ledger</cite>
    </div>

    <h4 class="subheading">Ouphes</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/ouphes/ouphe_sprite_hunt.png', 'right')}

    <p>Where bairns are polite, <strong>ouphes</strong> are not. An ouphe is a long, black, many-armed thing with too many teeth and a grudge against anything that flies. They hunt firesprites and faeries across the moor at dusk, snatching them out of the air with fingers that bend wrong. A clique of faeries can usually outsmart a single ouphe; an ouphe rarely hunts alone.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/ouphes/ouphe_kitchen_raiders.png', 'left')}

    <p>The smaller ouphes are worse houseguests than boggarts. They slip into a kithkin kitchen through the hedge-gap, scatter the milk, crack the eggs, and dance on the pot-rack. They are not trying to <em>feed</em>, exactly — they are trying to be witnessed. An ouphe that has not been seen has not had a good night. Douns hang copper bells at the pantry door not to scare them off but to give them the satisfaction and, in theory, hurry them along.</p>

    ${ART_BLEED('art/shadowmoor/creatures/ouphes/ouphe_rainbow_king.png')}

    <p>And somewhere in the deepest mires is the <strong>rainbow-mouthed</strong> — an ouphe the size of a barn, violet-scaled, its jaws leaking prismatic slaver that hardens into strange quick-stones when it strikes the mud. No one has seen it twice. Witches claim it is the first ouphe, or the last, or the same one in two moods; ouphes have no opinion on the matter, which for ouphes is unusual.</p>

    <h4 class="subheading">Hags &amp; Gwyllions</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/hags/hag_dandelion_crone.png', 'left')}

    <p>Every few miles of Shadowmoor moor, there is a <strong>hag</strong>. She is old — older than the woods around her, certainly older than the doun downwind. She lives alone in a hollow, brews in iron, and is paid by travelers who cannot afford to be haunted by what they need doing. A hag is not exactly evil. A hag is simply someone who has made her peace with being asked for the wrong thing. The dandelion-heads she collects are seed-spells: blown across a threshold, they can sour milk, call rain, or spoil a vow.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/hags/hag_fetish_witch.png', 'right')}

    <p>Some hags keep totems — bundles of bone, tooth, rag, and nail strung on a crooked stick and hung from their hut's lintel. Every totem is a debt owed <em>to</em> her, not by her. The hag does not collect on debts directly; she lets the totem do it, in its own time. A kithkin who cheats a hag at barter will find, four nights later, their barn door will not shut. A cinder who stiffs a hag on payment will find its embers will not stay lit. The totems never lose interest.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/hags/hag_scythewielder.png', 'left')}

    <p>When a hag <em>fights</em>, she does not cast spells. She swings. The scythe-bladed staves hags carry are not ceremonial; a hag will split a cinder in half with one stroke and be back at her cauldron before the embers land. Boggart warrens that stumble into a hag's hollow by accident come out one boggart lighter, at best, and frequently none. The hags of the bog-covens are the oldest fighters on the plane after the giants, and they fight without any of the giants' slowness.</p>

    ${ART_BLEED('art/shadowmoor/creatures/hags/gwyllion_death_dance.png')}

    <p>And the oldest of them is no longer a hag at all. She is a <strong>gwyllion</strong> — a hag who has danced, once, with the reaper in her own wheat-field and come back up from the dance still on her own feet. A gwyllion is beautiful again, in a way, and terrible for it; her hair is fire-red, her skin is young, and her touch stops a heart as gently as a mother's. Kithkin mothers tell their children that a gwyllion walks the stubble-fields after harvest collecting what the scythe missed. This is not a metaphor. The kithkin mothers are, as usual, correct.</p>
  </div>
</section>

<!-- ========= MAP ========= -->
<section class="sect sun" id="map" data-screen-label="15 Map">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part VI</p>
      <h2>A Schematic <em>of the Plane</em></h2>
      <p class="kicker">Not to scale. The plane has no real cardinal directions — Lorwyn's geography is a rumor that agrees with itself only about halfway.</p>
    </header>

    <div class="map-wrap">
      <svg class="map-svg" viewBox="0 0 1000 640" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="parch" patternUnits="userSpaceOnUse" width="8" height="8">
            <rect width="8" height="8" fill="none"/>
            <circle cx="1" cy="1" r=".4" fill="currentColor" opacity=".12"/>
          </pattern>
          <pattern id="forestDots" patternUnits="userSpaceOnUse" width="14" height="14">
            <circle cx="3" cy="4" r="1.1" fill="var(--elf-ink)" opacity=".35"/>
            <circle cx="9" cy="10" r=".8" fill="var(--elf-ink)" opacity=".28"/>
          </pattern>
          <pattern id="bogDots" patternUnits="userSpaceOnUse" width="12" height="12">
            <circle cx="2" cy="3" r=".7" fill="var(--boggart-ink)" opacity=".35"/>
            <circle cx="8" cy="9" r=".5" fill="var(--boggart-ink)" opacity=".25"/>
          </pattern>
          <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation=".6"/>
          </filter>
        </defs>

        <!-- frame (inner + outer hairline) -->
        <rect x="2" y="2" width="996" height="636" fill="none" stroke="currentColor" stroke-width="1" opacity=".45"/>
        <rect x="14" y="14" width="972" height="612" fill="none" stroke="currentColor" stroke-width=".5" opacity=".35"/>

        <!-- title + compass row -->
        <text x="50" y="50" font-family="Cormorant Unicase" font-size="16" letter-spacing="4" fill="currentColor" opacity=".7">LORWYN</text>
        <text x="50" y="66" font-family="Cormorant Garamond" font-style="italic" font-size="11" fill="currentColor" opacity=".55">— a schematic, not to scale —</text>

        

        <!-- ============ WANDERWINE NETWORK (drawn first, regions sit atop) ============ -->
        <g class="wanderwine" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <!-- soft glow underlay for every strand -->
          <g stroke="var(--merrow)" opacity=".32" stroke-width="9" filter="url(#soft)">
            <!-- main trunk: west coast -> central -> south-east mire -->
            <path d="M 40 340 C 140 330, 200 380, 270 370 S 430 360, 520 395 S 720 430, 860 470"/>
            <!-- north-west foothill feeder (stays below the Endless Peaks) -->
            <path d="M 200 310 C 220 320, 240 330, 260 345"/>
            <!-- Wren's Run tributary (emerges from the Gilt-Leaf edge, not the crags) -->
            <path d="M 560 300 C 530 330, 490 350, 450 375"/>
            <!-- Gilt-Leaf feed (E -> central) -->
            <path d="M 820 180 C 760 230, 680 300, 580 385"/>
            <!-- Goldmeadow oxbow loop -->
            <path d="M 380 380 C 420 430, 480 440, 520 400"/>
            <!-- south spur to Murmuring Bosk -->
            <path d="M 540 400 C 540 470, 520 520, 500 575"/>
            <!-- south-east spur into boggart mire -->
            <path d="M 720 430 C 760 490, 800 530, 840 560"/>
            <!-- small west spur -->
            <path d="M 200 360 C 180 420, 150 450, 120 490"/>
          </g>
          <!-- crisp strand on top -->
          <g stroke="var(--merrow-ink)" opacity=".85" stroke-width="1.8">
            <path d="M 40 340 C 140 330, 200 380, 270 370 S 430 360, 520 395 S 720 430, 860 470"/>
            <path d="M 200 310 C 220 320, 240 330, 260 345"/>
            <path d="M 560 300 C 530 330, 490 350, 450 375"/>
            <path d="M 820 180 C 760 230, 680 300, 580 385"/>
            <path d="M 380 380 C 420 430, 480 440, 520 400"/>
            <path d="M 540 400 C 540 470, 520 520, 500 575"/>
            <path d="M 720 430 C 760 490, 800 530, 840 560"/>
            <path d="M 200 360 C 180 420, 150 450, 120 490"/>
          </g>
          <!-- thin secondary capillaries -->
          <g stroke="var(--merrow-ink)" opacity=".55" stroke-width=".9">
            <path d="M 300 370 C 310 400, 330 410, 360 400"/>
            <path d="M 620 405 C 640 385, 680 390, 700 410"/>
            <path d="M 460 370 C 470 340, 490 330, 510 345"/>
            <path d="M 170 345 C 180 320, 200 315, 225 325"/>
            <path d="M 760 450 C 780 440, 810 445, 830 460"/>
          </g>
        </g>

        <!-- ============ GILT-LEAF WOOD (NE) ============ -->
        <g opacity=".95">
          <path d="M 560 80 Q 700 70 840 110 Q 900 150 895 240 Q 870 310 770 320 Q 650 315 590 260 Q 540 180 560 80 Z"
                fill="url(#forestDots)" stroke="var(--elf-ink)" stroke-width=".8" stroke-dasharray="3 3" opacity=".95"/>
          <path d="M 560 80 Q 700 70 840 110 Q 900 150 895 240 Q 870 310 770 320 Q 650 315 590 260 Q 540 180 560 80 Z"
                fill="var(--elf)" opacity=".12"/>
          <text x="720" y="140" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="20" fill="var(--elf-ink)">Gilt-Leaf Wood</text>
          <circle cx="760" cy="200" r="4" fill="var(--elf)" stroke="var(--elf-ink)"/>
          <text x="770" y="204" font-family="Cormorant Unicase" font-size="10" fill="var(--elf-ink)">LYS ALANA</text>
          <circle cx="830" cy="255" r="3" fill="var(--elf)" stroke="var(--elf-ink)"/>
          <text x="838" y="259" font-family="Cormorant Unicase" font-size="9" fill="var(--elf-ink)" opacity=".8">WREN'S RUN</text>
        </g>

        <!-- ============ GOLDMEADOW / KITHKIN HEARTLAND (center) ============ -->
        <g opacity=".95">
          <path d="M 280 260 Q 360 240 460 250 Q 540 270 560 330 Q 540 390 460 400 Q 360 395 290 370 Q 250 320 280 260 Z"
                fill="var(--kithkin)" opacity=".14" stroke="var(--kithkin-ink)" stroke-width=".8" stroke-dasharray="2 3"/>
          <text x="420" y="300" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="18" fill="var(--kithkin-ink)">Goldmeadow</text>
          <circle cx="370" cy="335" r="3" fill="var(--kithkin)" stroke="var(--kithkin-ink)"/>
          <text x="378" y="339" font-family="Cormorant Unicase" font-size="9" fill="var(--kithkin-ink)">KINSBAILE</text>
          <circle cx="470" cy="320" r="3" fill="var(--kithkin)" stroke="var(--kithkin-ink)"/>
          <text x="478" y="324" font-family="Cormorant Unicase" font-size="9" fill="var(--kithkin-ink)">KINSCAER</text>
          <circle cx="310" cy="295" r="2.5" fill="var(--kithkin)" stroke="var(--kithkin-ink)"/>
          <text x="295" y="288" text-anchor="end" font-family="Cormorant Unicase" font-size="8" fill="var(--kithkin-ink)" opacity=".75">CLOVERDELL</text>
          <circle cx="500" cy="240" r="2.5" fill="var(--kithkin)" stroke="var(--kithkin-ink)"/>
          <text x="508" y="238" font-family="Cormorant Unicase" font-size="8" fill="var(--kithkin-ink)" opacity=".75">BURRENTON</text>
          <circle cx="260" cy="340" r="2.5" fill="var(--kithkin)" stroke="var(--kithkin-ink)"/>
          <text x="255" y="352" text-anchor="end" font-family="Cormorant Unicase" font-size="8" fill="var(--kithkin-ink)" opacity=".75">BALLYRUSH</text>
        </g>

        <!-- ============ ENDLESS PEAKS / FLAMEKIN (west) ============ -->
        <g opacity=".95">
          <path d="M 30 210 L 70 130 L 110 195 L 145 110 L 185 180 L 225 140 L 255 210 L 250 290 L 30 290 Z"
                fill="var(--flamekin)" opacity=".2" stroke="var(--flamekin-ink)" stroke-width=".8"/>
          <text x="140" y="250" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="16" fill="var(--flamekin-ink)">Endless Peaks</text>
          <circle cx="150" cy="180" r="3.2" fill="var(--flamekin)" stroke="var(--flamekin-ink)"/>
          <text x="158" y="172" font-family="Cormorant Unicase" font-size="9" fill="var(--flamekin-ink)">MT. TANUFEL</text>
        </g>

        <!-- ============ CLOUD CRAGS / GIANTS (N) ============ -->
        <g opacity=".95">
          <path d="M 280 80 L 310 30 L 340 80 L 380 30 L 420 90 L 460 40 L 495 90 L 495 150 L 280 150 Z"
                fill="var(--giant)" opacity=".20" stroke="var(--giant-ink)" stroke-width=".8"/>
          <path d="M 300 45 q 10 -8 22 0 q 12 -6 20 2" stroke="var(--giant-ink)" stroke-width=".8" fill="none" opacity=".55"/>
          <path d="M 420 25 q 10 -6 20 0 q 10 -4 18 2" stroke="var(--giant-ink)" stroke-width=".8" fill="none" opacity=".5"/>
          <text x="390" y="120" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="15" fill="var(--giant-ink)">Cloud Crags</text>
          <text x="390" y="140" text-anchor="middle" font-family="Cormorant Unicase" font-size="8" fill="var(--giant-ink)" opacity=".7">(Boldwyr · Knollridge)</text>
        </g>

        <!-- ============ GREAT FOREST / MURMURING BOSK (south-center) ============ -->
        <g opacity=".95">
          <path d="M 340 450 Q 430 430 540 445 Q 620 470 640 545 Q 580 600 460 600 Q 340 590 310 530 Q 300 480 340 450 Z"
                fill="url(#forestDots)" opacity=".9"/>
          <path d="M 340 450 Q 430 430 540 445 Q 620 470 640 545 Q 580 600 460 600 Q 340 590 310 530 Q 300 480 340 450 Z"
                fill="var(--treefolk)" opacity=".15" stroke="var(--treefolk-ink)" stroke-width=".8" stroke-dasharray="2 3"/>
          <text x="480" y="500" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="18" fill="var(--treefolk-ink)">Great Forest</text>
          <text x="480" y="550" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="13" fill="var(--treefolk-ink)" opacity=".8">Murmuring Bosk</text>
          <circle cx="470" cy="565" r="3" fill="var(--treefolk)" stroke="var(--treefolk-ink)"/>
          <text x="478" y="569" font-family="Cormorant Unicase" font-size="9" fill="var(--treefolk-ink)">COLFENOR</text>
        </g>

        <!-- ============ PORRINGER VALLEY (west-central, between peaks & heartland) ============ -->
        <g opacity=".9">
          <path d="M 200 310 Q 250 305 280 340 Q 270 380 220 390 Q 180 380 190 340 Z"
                fill="var(--kithkin)" opacity=".10" stroke="var(--kithkin-ink)" stroke-width=".7" stroke-dasharray="1 3"/>
          <text x="230" y="362" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="11" fill="var(--kithkin-ink)" opacity=".85">Porringer Vale</text>
        </g>

        <!-- ============ VELIS VEL (changeling reach, SW) ============ -->
        <g opacity=".9">
          <path d="M 140 450 L 190 410 L 240 450 L 290 420 L 310 470 L 300 520 L 130 520 Z"
                fill="oklch(0.62 0.08 210)" opacity=".18" stroke="oklch(0.4 0.1 210)" stroke-width=".7" stroke-dasharray="2 3"/>
          <text x="220" y="495" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="13" fill="oklch(0.38 0.1 210)">Velis Vel</text>
          <text x="220" y="510" text-anchor="middle" font-family="Cormorant Unicase" font-size="7.5" fill="oklch(0.38 0.1 210)" opacity=".7">(changeling reach)</text>
        </g>

        <!-- ============ BOGGART WARRENS (SE mire) ============ -->
        <g opacity=".95">
          <path d="M 700 520 Q 780 510 870 540 Q 910 580 880 615 Q 780 620 700 605 Q 660 570 700 520 Z"
                fill="url(#bogDots)"/>
          <path d="M 700 520 Q 780 510 870 540 Q 910 580 880 615 Q 780 620 700 605 Q 660 570 700 520 Z"
                fill="var(--boggart)" opacity=".15" stroke="var(--boggart-ink)" stroke-width=".8" stroke-dasharray="2 3"/>
          <text x="790" y="568" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="14" fill="var(--boggart-ink)">Auntie's Warren</text>
          <text x="790" y="585" text-anchor="middle" font-family="Cormorant Unicase" font-size="8" fill="var(--boggart-ink)" opacity=".7">(boggart mire)</text>
        </g>

        <!-- ============ GLEN ELENDRA (concealed faerie court) ============ -->
        <g opacity=".95">
          <ellipse cx="870" cy="400" rx="55" ry="28" fill="var(--faerie)" opacity=".18"
                   stroke="var(--faerie-ink)" stroke-width=".8" stroke-dasharray="1 3"/>
          <text x="870" y="365" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="13" fill="var(--faerie-ink)">Glen Elendra</text>
          <text x="870" y="405" text-anchor="middle" font-family="Cormorant Unicase" font-size="8" fill="var(--faerie-ink)" opacity=".7">(concealed)</text>
        </g>

        <!-- River labels along the trunk -->
        <text x="150" y="330" font-family="Cormorant Garamond" font-style="italic" font-size="12" fill="var(--merrow-ink)" opacity=".8">the Wanderwine</text>
        <text x="640" y="418" font-family="Cormorant Garamond" font-style="italic" font-size="11" fill="var(--merrow-ink)" opacity=".7">(tributary)</text>
        <text x="440" y="440" font-family="Cormorant Garamond" font-style="italic" font-size="10" fill="var(--merrow-ink)" opacity=".6">oxbow</text>

        <!-- edge scribble: "here be larger things" — the unknown beyond -->
        <text x="500" y="630" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="9" fill="currentColor" opacity=".4">— the map fades at its margins; the plane does not —</text>
      </svg>

      <div class="map-legend">
        <div class="lg-item"><span class="lg-swatch" style="background:var(--elf)"></span>Gilt Leaf / Elf lands</div>
        <div class="lg-item"><span class="lg-swatch" style="background:var(--kithkin)"></span>Kithkin clachans</div>
        <div class="lg-item"><span class="lg-swatch" style="background:var(--faerie)"></span>Faerie (concealed)</div>
        <div class="lg-item"><span class="lg-swatch" style="background:var(--merrow)"></span>Wanderwine</div>
        <div class="lg-item"><span class="lg-swatch" style="background:var(--flamekin)"></span>Flamekin heights</div>
        <div class="lg-item"><span class="lg-swatch" style="background:var(--treefolk)"></span>Treefolk forest</div>
        <div class="lg-item"><span class="lg-swatch" style="background:var(--boggart)"></span>Boggart mire</div>
        <div class="lg-item"><span class="lg-swatch" style="background:var(--giant)"></span>Giant heights</div>
      </div>
    </div>
  </div>
</section>

<!-- ========= TIMELINE ========= -->
<section class="sect sun" id="timeline" data-screen-label="16 Timeline">
  <div class="sect-inner wide">
    <header class="part-head">
      <p class="roman">Part VII</p>
      <h2>A Timeline <em>of the Cycle</em></h2>
      <p class="kicker">From the summer idyll to the long dusk and back again.</p>
    </header>

    <div class="timeline">
      <div class="tl-track"></div>
      <!-- 5 nodes, spread across -->
      <div class="tl-node" style="left: 8%"></div>
      <div class="tl-node" style="left: 32%"></div>
      <div class="tl-node" style="left: 54%"></div>
      <div class="tl-node" style="left: 76%"></div>
      <div class="tl-node" style="left: 94%"></div>

      <div class="tl-item above" style="left: 8%">
        <div class="tl-era">Era I</div>
        <div class="tl-title">Lorwyn</div>
        <div class="tl-blurb">The eternal summer. Elves hunt; kithkin farm; faeries meddle. Rhys is exiled. Colfenor's plan begins to unfold.</div>
        <div class="tl-connector"></div>
      </div>

      <div class="tl-item below" style="left: 32%">
        <div class="tl-connector"></div>
        <div class="tl-era">Interstice</div>
        <div class="tl-title">The Aurora</div>
        <div class="tl-blurb">One night, dreamstuff breaches its vessels. The world inverts. Every mind forgets what it was.</div>
      </div>

      <div class="tl-item above" style="left: 54%">
        <div class="tl-era">Era II</div>
        <div class="tl-title">Shadowmoor</div>
        <div class="tl-blurb">Endless winter twilight. Clachans become douns. Flamekin become cinders. Wild magic saturates the land.</div>
        <div class="tl-connector"></div>
      </div>

      <div class="tl-item below" style="left: 76%">
        <div class="tl-connector"></div>
        <div class="tl-era">Reckoning</div>
        <div class="tl-title">Eventide</div>
        <div class="tl-blurb">Oona's architecture crumbles. Ashling reaches her elemental. Maralen takes the crown. The pendulum breaks.</div>
      </div>

      <div class="tl-item above" style="left: 94%">
        <div class="tl-era">Era III</div>
        <div class="tl-title">Eclipsed</div>
        <div class="tl-blurb">A generation later: Lorwyn and Shadowmoor bleed into one another. A third realm appears — and kills those who linger.</div>
        <div class="tl-connector"></div>
      </div>
    </div>
  </div>
</section>

<!-- ========= AURORA TRANSITION ========= -->
<div class="aurora-break"><span class="aurora-label">The Aurora · Lorwyn turns</span></div>

<!-- ========= OONA ========= -->
<section class="sect sun" id="oona" data-screen-label="17 Oona">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part VIII</p>
      <h2>The Queen <em>Beneath</em></h2>
      <p class="kicker">Oona · ancient, vast, and the secret engine of everything else.</p>
    </header>

    ${ART_BLEED('art/lorwyn/creatures/faeries/oona/oona_clouds.png', 'center 20%')}

    <p class="lede">Everything that happens in the Lorwyn cycle — Colfenor's patient scheming, Rhys's exile, Ashling's long pilgrimage, the Aurora itself — unfolds inside a design one being put in place long before any of them were born. That being is ${TERM('Oona')}, Queen of the Fae, and for most of the novels neither the heroes nor the reader quite understand how much of the plane she owns.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/faeries/oona/oona_bloom.png', 'right', 'center 25%')}

    <p>Oona is not a single body. She is a presence, worn outward through her court and her avatars; the face you see, if you ever see one, is not her, only an aspect she is wearing that afternoon. Her home, ${TERM('Glen Elendra')}, is wrapped in glamers so dense that nearly anyone who approaches simply forgets why they came. Faeries return there the way blood returns to a heart — routinely, unconsciously, and on business no outsider is allowed to understand.</p>

    <div class="pull">
      "Dreams are fleeting. Reality even more so."
      <cite>Oona, Queen of the Fae</cite>
    </div>

    <h4 class="subheading">Dreamstuff, and why she wants it</h4>

    <p>Her fae collect <strong>${TERM('Dreamstuff','dreamstuff')}</strong> — the raw material of dreams, rumors, half-thoughts, stories whispered on a pillow — from every corner of Lorwyn and route it back to Glen Elendra. Every fae in the cycle is, in some measure, a tax collector. Oona is a queen who taxes in <em>sleep</em>.</p>

    <p>What Lorwyn does not realise — what even most fae do not realise — is that dreamstuff is not a delicacy. It is a fuel. The Aurora that turns Lorwyn to Shadowmoor and back again is not a natural weather of the plane. It is a machine, and the machine runs on dreamstuff, and the machine has been running on Oona's schedule for longer than anyone now alive can measure. Every summer of Lorwyn is one she chose to spend. Every winter of Shadowmoor is one she chose to cash in.</p>

    <h4 class="subheading">Avatars</h4>

    ${ART_PORTRAIT('art/lorwyn/creatures/faeries/oko/oko_lorwyn_liege.png', 'left', 'center 8%')}

    <p>When Oona wants to act in the world without being <em>in</em> the world, she grows a vessel. The vessel looks like a person. It has a face and a name and, most importantly, a will it believes is its own. Oko — now known across the Multiverse as the trickster planeswalker — was her first. He was meant to be an instrument. He was meant to carry her work outside Glen Elendra and return. He did not return. He took his will and left, and Lorwyn's trouble has been leaking into other planes ever since.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/faeries/maralen/maralen_fae_ascendant.png', 'right')}

    <p>${TERM('Maralen')} is the second. Oona grew her to absorb the shock of an early Aurora — a buffer, a pressure valve, a vessel shaped like an elf so the other tribes would follow her instead of noticing the queen behind her. Maralen was not supposed to remember being made. She was not supposed to love Rhys. She was not supposed to <em>want</em> things. Like Oko before her, she begins to develop exactly the will she was not given, and this is the crack through which the entire Aurora machine, by the end of Eventide, will finally break.</p>

    <h4 class="subheading">What she is, underneath</h4>

    <p>Strip away the court, the glamers, the cliques, the dreamstuff, the avatars — and what is Oona? The books are careful never quite to answer. She is older than the current Aurora cycle; she may be older than Lorwyn's current plane-shape; she may not be, strictly, <em>of</em> Lorwyn at all. The Vendilion Clique, who have served her longest, describe her in terms that sound less like a monarch and more like a weather. Kithkin lore names her <em>the Queen Beneath</em> — meaning beneath the world, beneath the dream, beneath the sentence you are currently thinking.</p>

    <p>By the end of Eventide her machine is broken and Maralen sits in her chair. This does not mean Oona is <em>gone</em>. A presence that old does not vanish because its throne changed occupants. She is, the surviving fae will quietly tell you, still there. Still listening. Still taxing sleep in her own way. The Aurora's pendulum may have stopped swinging, but the queen beneath has not stopped being the queen beneath.</p>

    ${ART_BLEED('art/lorwyn/creatures/faeries/oona/oona_queen.png', 'center 15%')}
  </div>
</section>

<!-- ========= LORWYN STORY ========= -->
<section class="sect sun" id="lorwyn-story" data-screen-label="18 Lorwyn Story">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part IX</p>
      <h2>The Story <em>of Lorwyn</em></h2>
      <p class="kicker">Rhys falls; Colfenor plans; the Aurora breaks too early.</p>
    </header>

    ${ART_BLEED('art/lorwyn/places/island_twilight.png')}

    <p class="lede">The novels open with ${TERM('Rhys')}, a Gilt Leaf daen, sent with his Hemlock Pack to clear a band of feral boggarts threatening kithkin villages. He makes the controversial decision to hire the giant brothers Brion and Kiel as muscle, prioritising the mission over elf protocol. His taercenn Nath is not impressed. The hunt succeeds; Rhys is stripped of caste, disfigured — his horns broken — and declared an ${TERM('Eyeblight','eyeblight')}. His former comrades will now hunt <em>him</em>.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/elves/rhys_the_exiled.png', 'right')}

    <p>Rhys flees the Gilt Leaf and is taken in by the ancient yew ${TERM('Colfenor')}, who knows exactly who Rhys is and has, in fact, been waiting for him. Colfenor offers shelter, cryptic counsel, and a role Rhys does not yet understand in a plan decades in the making.</p>

    <p>Around Rhys's exile, the plot accretes. The flamekin pilgrim ${TERM('Ashling')} is on the Path — seeking her elemental in a years-long spiritual journey. The kithkin archer ${TERM('Brigid Baeli')} is defending her clachan from escalating boggart raids. The merrow ${TERM('Sygg')} is ferrying everyone on the Wanderwine, keeping careful track of who owes what. And the ${TERM('Vendilion Clique')} — three faerie spies — are watching it all.</p>

    <p>At the centre of the web sits ${TERM('Maralen')} — an elf who appears from nowhere, remembering nothing, drawing the others to her. She was made, it will turn out, by Oona herself: a vessel designed to absorb the shock of an early Aurora. But the vessel is developing a will of her own.</p>

    <div class="pull">
      Maralen sent Veesa, Endry, and Iliona — the Vendilion clique — on the gravest of tasks.
      <cite>—Maralen of the Mornsong</cite>
    </div>

    <p>At the climax of the Lorwyn half, the Aurora arrives — years ahead of schedule. Oona's careful calibration shatters. The world turns. Sun becomes moon. Summer becomes winter. Every mind on the plane forgets what it was.</p>
  </div>
</section>

<!-- ========= SHADOWMOOR ========= -->
<section class="sect shadow" id="shadowmoor" data-screen-label="19 Shadowmoor">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part X</p>
      <h2>The World <em>of Shadowmoor</em></h2>
      <p class="kicker">The same plane, inverted. Endless winter twilight. Nothing remembered.</p>
    </header>

    ${ART_BLEED('art/shadowmoor/places/forest_twilight_sunset.png')}

    <p class="lede">Shadowmoor is Lorwyn, but at the wrong end of the year. The sun never rises; the moon never sets. Wild magic saturates the land and misfires constantly. The clachan becomes the ${TERM('Doun')}. The flamekin become ${TERM('Cinder','cinders')}. The kithkin's thoughtweft curdles into a shared paranoia; the elves of the ${TERM('Wilt-Leaf')} become desperate guardians of beauty rather than its enforcers — the practical difference smaller than they would like to believe.</p>

    <div class="pull">
      The Aurora had lessened the kithkins' kindness, deepened their paranoia, and dulled their sense of pain.
      <cite>—Endure</cite>
    </div>

    <p>No one remembers Lorwyn. No one remembers being anything other than what they are now. They fight as if they have always fought. The wild magic in the land is both everywhere and unreliable — anyone can draw on it, and any use risks catastrophic backlash. Scarecrows walk. Dreamstuff no longer flows to Oona; it pools and ferments.</p>

    <p>The Shadowmoor novels follow familiar souls — ${TERM('Rhys')}, ${TERM('Ashling')}, ${TERM('Sygg')}, ${TERM('Brigid Baeli','Brigid')} — as they slowly rediscover the world they came from. Colfenor is dead; the Red Yew fell in the last volume of Lorwyn. But his plan has not.</p>
  </div>
</section>

<!-- ========= EVENTIDE ========= -->
<section class="sect shadow" id="eventide" data-screen-label="20 Eventide">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part XI</p>
      <h2>Eventide · <em>The Reckoning</em></h2>
      <p class="kicker">The cycle breaks; a new queen takes a new crown.</p>
    </header>

    ${ART_BLEED('art/shadowmoor/places/graven_cairns.png')}

    <p class="lede">Shadowmoor is already burning when Eventide opens. ${TERM('Ashling')}, having merged with her elemental on the mountain summit at the Aurora's turning point, has become something else: the <strong>Destroyer</strong>, a colossus of living fire at the head of a cinder horde that worships her as a messiah. Whole villages are gone. ${TERM('Rhys')} — one of the few who remembers Lorwyn at all — sets out with ${TERM('Brigid Baeli','Brigid')}, the Vendilion Clique, and the Sapling of Colfenor to find a way to stop her.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/flamekin/ashling/ashling_extinguisher.png', 'left')}

    <p>${TERM('Maralen')}, meanwhile, has stopped running. By the time the novels began she had already cultivated the Vendilion Clique as her agents, coaxed the <em>Crescent of Morningtide</em> out of Sygg, and quietly built toward a confrontation with her maker. Now she carries three forms of power that were never meant to coexist in one vessel: her own nature as Oona's construct, a stolen fragment of Ashling's elemental fire, and the Crescent's binding to the Source of the Wanderwine. She is barely holding together — and she is done hiding.</p>

    <h4 class="subheading">Cayr Ulios</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/scarecrows/reaper_king/reaper_king_a.png', 'right')}

    <p>Oona chooses the elf capital for their meeting. It is obviously a trap; Maralen walks into it anyway, because she knows Oona is afraid of her. Below, Maralen's rebel fae and Oona's loyalists tear the city apart. Above, Oona greets her in a puppet body wearing Maralen's own face — her imperfect twin, meeting her doom in her maker's mirror. She confirms it all: Maralen is a rag doll, a vessel, a decoy, and her free will is an accident that was always going to need correcting. The elves of Cayr Ulios, she notes, have already been absorbed into her essence — the city emptied as casually as a queen clearing a board.</p>

    <div class="pull">
      You were a rag doll, my dear. A vessel. Nothing more.
      <cite>—Oona, to Maralen</cite>
    </div>

    <p>Meanwhile, on the battlefield, Oona reaches for the Destroyer's power. She finds the seam between Ashling and her elemental — the fused line where two beings had become one — and begins to pry it open. This is the larger danger of the book: Oona with that fire would be catastrophic, using it slowly and invisibly across generations until no one alive understood what had changed.</p>

    <p>The <strong>Sapling of Colfenor</strong> breaks the grip. Carrying her seedfather's knowledge — as old as the queen herself — she charges forward at the critical moment and disrupts the seizure decisively. She cannot destroy Oona. But she keeps the elemental fire Ashling's. Above, Maralen defeats the puppet body. Oona's primary self withdraws — not destroyed, but broken. Her armies scatter. Her Aurora mechanism collapses.</p>

    <p>The summer world does not return. Neither does Shadowmoor hold. What Rhys, Brigid, the sapling, and their companions accomplish is something smaller and more durable: a break in the mechanism. Maralen ascends to Oona's throne — not born to it, but choosing it — and must now decide what kind of queen she will be. The Eclipsed era, forty years later, finds her still wrestling with that question.</p>
  </div>
</section>

<!-- ========= ECLIPSED ========= -->
<section class="sect shadow" id="eclipsed" data-screen-label="21 Eclipsed">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part XII</p>
      <h2>Lorwyn <em>Eclipsed</em></h2>
      <p class="kicker">A generation later. Two realms bleed into each other. A third emerges, and kills those who stay in it.</p>
    </header>

    ${ART_BLEED('art/eclipsed/eclipsed_realms.png')}

    <p class="lede">The <em>Lorwyn Eclipsed</em> era picks up years after Eventide. With the Aurora's pendulum broken, Lorwyn and Shadowmoor no longer cleanly alternate. Instead, they overlap. In some regions sun holds; in others, the moon; and in a few dangerous seams between, both hang motionless at once. These are the ${TERM('Eclipsed Realm','Eclipsed realms')}.</p>

    <p>Linger too long in the eclipse and a person's two selves cancel each other out. Everyone born on the plane has, in truth, lived twice — a sun-life in Lorwyn and a moon-life in Shadowmoor, same body, same face, wholly different memories. The Aurora normally lets only one of those lives be "real" at a time. In the eclipsed seams, both memories press in at once, and most minds cannot hold the contradiction. The sun-self and the moon-self meet inside one body and annihilate. What remains walks, and breathes, and does not answer to either name. The locals call them ${TERM('Calciform','calciforms')}: chalk-pale, hollowed, empty of self. They are not hostile. They are not anything. The fae and certain treefolk can endure the eclipse; most others cannot.</p>

    <h4 class="subheading">The twin worldsouls</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/eclipsed/isilu_moon_worldsoul.png', 'left')}

    <p>The Aurora used to hand off sun and moon cleanly, once a phase. Broken, the handoff is now carried — physically — by two six-legged worldsouls that step out of the plane's oldest places. <strong>${TERM('Isilu')}</strong> drags the moon. Her body is pale as river-ice and her long horned neck cranes up toward the crescent she pulls behind her the way a horse pulls a lamp. Where she walks, the frost sets; the bog firms; the fae grow still and attentive. She is not cruel. She is simply the shape Shadowmoor needs in order to keep being Shadowmoor for one more hour.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/eclipsed/eirdu_sun_worldsoul.png', 'right')}

    <p><strong>${TERM('Eirdu')}</strong> drags the sun. He is red and gold and the color of a hearth at the exact moment it is about to fail, and he is dragging, at the end of a mane of fire, the sun itself — a lamp not much bigger than he is and not much less tired. Where he walks, the grass greens again; the frost gives up; the kithkin lift their heads. He is also not cruel. He is simply what Lorwyn needs in order to keep being Lorwyn for one more hour.</p>

    ${ART_BLEED('art/shadowmoor/creatures/eclipsed/eirdu_isilu_conjunction.png')}

    <p>And once a Pendulum Year, they meet. The two worldsouls cross in a menhir-ringed meadow that nobody alive remembers naming. Eirdu lifts his burning head; Isilu bows her horned one. Sun and moon hang in the sky together for as long as the crossing takes — a minute, a season, it depends on who is watching. This is the heart of the <em>eclipse proper</em>: not a place, not a time, but an encounter. Firdochs — stone wrestlers of the high country — are the only witnesses the worldsouls tolerate. The firdochs carve what they see into the standing stones. The stones carry the record forward to the next year, whatever year that turns out to be.</p>

    <h4 class="subheading">Firdochs</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/eclipsed/firdoch_moon_forge.png', 'left')}

    <p>A ${TERM('Firdoch','firdoch')} is a mountain-formed being of stone and moonlight, sitting in the high places of the Eclipsed realm as calmly as a crag. They wrestle the boundaries of the realms the way a blacksmith beats iron — slowly, deliberately, with the whole shoulder. When an Eclipsed seam needs to be widened or closed, it is a firdoch who does it, and the menhirs they leave behind are less monuments than the tools they set down between shifts. A flamekin pilgrim caught out at altitude sometimes comes across a firdoch mid-forge, the moon breaking open across its lap like an egg, and sits at a respectful distance until it is done.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/flamekin/ashling/ashling_rekindled.png', 'left')}
    ${ART_PORTRAIT('art/shadowmoor/creatures/flamekin/ashling/ashling_rimebound.png', 'right')}

    <p>And Ashling returns — but not the way anyone had feared.</p>

    <p>For years after Eventide she is nowhere. The fire that consumed her as <strong>The Extinguisher</strong> had to exhaust itself somewhere, and when it did she was left in the wreckage of everything she had done as its host. Her actions under that name had been, in her own telling, heinous. The stories of the years afterward are sparse and second-hand: a flamekin pilgrim and dancer wandering the edges of the Blessed Nation, in anguish over what her body had been used for — not for a few months, but for years, refusing comfort, refusing followers, refusing the name.</p>

    <p>At the beginning of the ${TERM('Pendulum Year')} she departs again. This third pilgrimage is the one she will be remembered for. She sets out to reconcile her two selves and, if she can, to find the fourth path — the rumour the old Brighthearth elders kept alive and never pointed to. She walks into the <strong>Primal Beyond</strong>, the unshaped country at the elemental root of the plane, and asks the oldest force she can find for a truth the Path of Flame had never offered. What she finds there, she does not explain. But she comes back with an answer.</p>

    <p>The duality of the plane, she now understands, is not a contradiction to be resolved or a force to be resisted. It is a revelation: every being contains multitudes, and the clash of light and shadow — of Rekindled and Rimebound, of the dancer and the reckoner — is the slow way a self arrives at deeper understanding. She has stopped trying to choose. She flips with the Aurora, as everyone does, and she is fluent now in both faces.</p>

    <p>In sun she is <strong>Ashling, Rekindled</strong>: a return to the pilgrim and dancer she had been before any of this. Warm gold flame at her crown, ceremonial robes, fluent motion — leaping across the Wanderwine on errands only she understands, trailing sparks that do no harm. The Rekindled is not The Extinguisher returning; it is the <em>original</em> flamekin, remembered and chosen again, with everything she now knows about where unexamined fire can go.</p>

    <p>In shadow she is <strong>Ashling, Rimebound</strong>: the same person, but with her conscience on the outside. The fire goes blue-white and cold; a jagged crown of ice opens at her skull; she carries an axe she has no pleasure in. This is not the nihilism of The Extinguisher, and it is not a return to the cinder horde — she has no interest in burning the world. The Rimebound is what her guilt looks like when it has to stand up and walk around. She goes where she thinks a reckoning is owed, and she pays it.</p>

    <p>In the flamekin's own ancient taxonomy, her cold face is that of a <strong>${TERM('Rimekin','rimekin')}</strong> — the long-rumoured fourth path, flamekin who have turned their heat inward and burn blue-white and slow. For most of history it was only a rumour. A generation after Eventide, the <strong>Phyrexian Invasion</strong> made it a visible caste: many flamekin who survived that war did so only because they learned to pull their fire in behind a cold shell, and when the war ended they discovered they could not turn their heat back out again. A rimekin's scars are not on the skin. They're in the pauses before the rimekin speaks. Ashling reached the fourth path early, and by choice — but her passage through it gave the others a figure to study, and her Rekindled face is the proof most of them quietly hold onto: that the cold, in time and with honest work, does not have to be the last word.</p>

    <p>In the Eclipsed era she wanders the Wanderwine corridor, carrying stories and settling old debts, guiding travellers who have no idea who she is. She fights when she has to. The Extinguisher is laid down, and she does not apologise for it. She carries the memory of it the way other people carry a scar — and she dances anyway.</p>

    <h4 class="subheading">Where the old heroes are now</h4>
    <div class="now-grid">
      <article class="now-card">
        <h4>Rhys the Evermore</h4>
        <p class="now-role">Eyeblight · Consort · Conscience</p>
        <p>Kept alive by a magical pact with Maralen, who granted him immortality on one condition: that he poison her with moonglove should Oona's power ever begin to corrupt her. He now stands vigilant at her side, dagger dressed and waiting for a day he prays never comes.</p>
      </article>
      <article class="now-card">
        <h4>Maralen, Steward-Queen of the Fae</h4>
        <p class="now-role">Glen Elendra · Crescent of Morningtide</p>
        <p>Rules from Glen Elendra alongside the twin worldsouls Eirdu and Isilu, carrying the peoples' wishes and quietly guiding the plane through its new age. Her powers are weak but growing. Every day, a little closer to Oona's old strength.</p>
      </article>
      <article class="now-card">
        <h4>Ashling, Rekindled · Rimebound</h4>
        <p class="now-role">Flamekin · Dancer · Rimekin</p>
        <p>Back from a pilgrimage into the Primal Beyond. Wanders the Wanderwine corridor carrying stories, at peace with the plane's duality. The Extinguisher is laid down. In sun, a joyful pilgrim; in shadow, her conscience walking.</p>
      </article>
      <article class="now-card">
        <h4>Brigid</h4>
        <p class="now-role">Goldmeadow · Watch-Trainer</p>
        <p>Trains the city watch in Goldmeadow and lives without the yoke of the elves. Gruff to strangers, close to those she trusts. Her Shadowmoor self closes the village to outsiders — but never raises a hand — and wistfully remembers the pirate years under Sygg.</p>
      </article>
      <article class="now-card">
        <h4>Sygg, Schoolmaster</h4>
        <p class="now-role">Wanderwine · Family Man</p>
        <p>Given the mercantile trade to younger swimmers. Still quietly holds a grudge that the Crescent of Morningtide was never returned. His fins fail him now; his mind does not. In Shadowmoor he forgets his new family and pines for piracy.</p>
      </article>
      <article class="now-card">
        <h4>Auntie Grub</h4>
        <p class="now-role">Boggart Apothecary · Frog Familiar Smlurf</p>
        <p>Survived Oona's age, the elf culls, and the Phyrexian Invasion. Her parables now power boggart ritual. Her Shadowmoor self isolates and hoards her knowledge, and her potions turn chaotic — more potent, far more deadly.</p>
      </article>
      <article class="now-card">
        <h4>Oko</h4>
        <p class="now-role">Oona's First Avatar · Planeswalker</p>
        <p>Oona's first attempt at a vessel, centuries before Maralen — and an abysmal failure. Rebelled, sparked, and has been the Multiverse's most notorious trickster ever since. His Shadowmoor self is calmer, quieter, and heavy with guilt over what he left behind.</p>
      </article>
      <article class="now-card">
        <h4>Eirdu &amp; Isilu</h4>
        <p class="now-role">Twin Worldsouls · Stewards of Balance</p>
        <p>Emerged after Oona fell — though many suspect they were always here, merely returned from the Primal Beyond. While one sleeps, the other walks, spreading its domain. Unknowable to ordinary folk, indifferent to ordinary lives, and the reason the plane has not torn itself in half.</p>
      </article>
    </div>

    <h4 class="subheading">New faces of the Eclipsed age</h4>
    <div class="now-grid">
      <article class="now-card">
        <h4>High Perfect Morcant</h4>
        <p class="now-role">Lys Alana · Tyrant</p>
        <p>De facto ruler of the elves, carrying the full weight of her people's fall. Harbours a covert ambition to yoke Lorwyn under elvish rule again. Her methods — bribery, assassination, misdirection — bear little fruit, and her circle grows smaller every year. When outworlders arrive, she smells leverage.</p>
      </article>
      <article class="now-card">
        <h4>Trystan</h4>
        <p class="now-role">Morcant's Poison Master · Horticulturist</p>
        <p>Frail, beautiful, revered. Raised on stories of the elves' lost greatness. Ascended quickly to Morcant's side, and secretly despises her. Spends his days away from Lys Alana researching flora. His Shadowmoor self carries a guilt he cannot name, tending abandoned safeholds in silence.</p>
      </article>
      <article class="now-card">
        <h4>Lluwen</h4>
        <p class="now-role">Elf · Reserved · Loyal</p>
        <p>Born to supremacists, considered less beautiful than his peers, and uninterested in reclaiming a lost empire. Prefers animals to people; plays the obedient son in public while counting the days until he can leave. Fierce in defence of the few he loves.</p>
      </article>
      <article class="now-card">
        <h4>Bre of Clan Stoutarm</h4>
        <p class="now-role">Brion's Daughter · Herder</p>
        <p>Slow to anger, at home in the pastures with her sheep. At peace with every people on the plane — except the elves, who killed her father. When she meets one, she throws them. Far.</p>
      </article>
      <article class="now-card">
        <h4>Auntie Ool</h4>
        <p class="now-role">Boggart Witch · Curse-Smith</p>
        <p>A name spoken only in whispers. Conjures blight and stabilises wild magic into usable forms. Her curses are clever: perpetual insomnia for the boggart who woke her, a sentient judgmental wart for the one who spoke ill. She lives in a twig hut that leaps across the wilds on silent frog-legs.</p>
      </article>
      <article class="now-card">
        <h4>Doran, Silent Wanderer</h4>
        <p class="now-role">Shadowmoor Treefolk · Burdened Sage</p>
        <p>In Lorwyn he was a wizened scholar who collected magical knowledge across the plane. His Shadowmoor self is its twisted reflection — voiceless, cursed, wandering the dark woods at the edge of the Eclipsed realm. He is afraid to step back into the light for fear his hoarded memories will not survive the crossing.</p>
      </article>
      <article class="now-card">
        <h4>Ferrafor, Last Yew</h4>
        <p class="now-role">Sapling's Cutting · Shadowmoor Witch</p>
        <p>A secret cutting of the Sapling of Colfenor, saved by Rhys and nursed back to health by an elder treefolk. Woken through a ritual in which the one ritualist died so she might live, while fae attacked to hijack the rite. Raised in Shadowmoor without treefolk to temper her, she grew cruel and vindictive. In Lorwyn she would be kind and benevolent, seeding awakening everywhere she walks.</p>
      </article>
      <article class="now-card">
        <h4>The Reaper, King No More</h4>
        <p class="now-role">Scarecrow Patriarch · Deposed</p>
        <p>Origin stories conflict: a rebel scarecrow grown strange under Shadowmoor's moon, or an amalgam of many made from a single treefolk's bones whose vengeance stitched them together. Whatever the truth, the planar merging cost him his domain. He spreads blight across the land in hope of reclaiming a kingdom that has moved on without him.</p>
      </article>
      <article class="now-card">
        <h4>The Mass of Mysteries</h4>
        <p class="now-role">Elemental of the Unknown</p>
        <p>Born the moment Oona fell. A boundless elemental that turns the certain into the uncertain with every step. Fallow fields bloom unnamed flora in its wake. Rivers fill with strange fish, then run dry. People happy in their lives leave home to find something more. It is not hostile. It is simply the shape of the new age.</p>
      </article>
    </div>
  </div>
</section>

<!-- ========= DRAFT CHEAT SHEET ========= -->
<section class="sect sun" id="draft" data-screen-label="22 Draft">
  <div class="sect-inner wide">
    <header class="part-head">
      <p class="roman">Part XIII</p>
      <h2>At the <em>Draft Table</em></h2>
      <p class="kicker">The cube is tribal through-and-through. Pick a people; commit.</p>
    </header>

    <div class="callout">
      <p class="cal-head"><span class="dot"></span>A note on the cube</p>
      <p>This cube is a love letter to the block many consider Magic's most beloved limited environment — and a welcome-back party for a plane we hadn't seen in nearly twenty years. <em>Eclipsed</em> was a joy to open, but it committed to only five of the block's archetypes; iconic tribes like Faeries were left on the sidelines. This 360 restores all eight tribes and nearly every viable color-pair archetype (only black-white sits out; its Lorwyn-era identity never quite coalesced), pulling from <em>Lorwyn</em>, <em>Morningtide</em>, <em>Shadowmoor</em>, <em>Eventide</em>, and <em>Eclipsed</em> so every pairing has a lane to draft and a distinct game plan to win with.</p>
    </div>

    <div class="archetype-grid">
      <article class="arch-card tribe kithkin">
        <div class="arch-head"><span class="arch-tribe">Kithkin</span><span class="arch-color-id">G / W</span></div>
        <p class="arch-archetype">Go-wide aggro + anthems</p>
        <p>Kithkin curve out and swarm. Cheap one- and two-drops, stacked anthems, and every new villager multiplies the ones already on the board. Small bodies stay relevant into the late game as long as you keep layering lords on top of them.</p>
        <p class="arch-tip">Watch for: single-target removal, which eats your lords and collapses the swarm.</p>
      </article>
      <article class="arch-card tribe merrow">
        <div class="arch-head"><span class="arch-tribe">Merrow</span><span class="arch-color-id">W / U</span></div>
        <p class="arch-archetype">Tap-matters + islandwalk</p>
        <p>Merrow thrive on tap-and-untap. Lock down opposing creatures to slip through for damage, and squeeze extra value from tapping your own creatures as well — life gain, card selection, trigger chains. Islandwalk gives the tribe natural reach against any deck on blue sources.</p>
        <p class="arch-tip">Watch for: opponents who don't care about creature combat — the engine needs targets to tap.</p>
      </article>
      <article class="arch-card tribe faerie">
        <div class="arch-head"><span class="arch-tribe">Faeries</span><span class="arch-color-id">U / B</span></div>
        <p class="arch-archetype">Flash tempo + hand hate</p>
        <p>Faerie decks play almost entirely on their opponent's turn. Flash in threats, counter their spells, strip their hand, and ride tiny flying clocks to the finish. The game is about denying them the thing they most want to do, not about racing.</p>
        <p class="arch-tip">Watch for: wraths. You run thin on threats fast.</p>
      </article>
      <article class="arch-card tribe elf">
        <div class="arch-head"><span class="arch-tribe">Elves</span><span class="arch-color-id">B / G</span></div>
        <p class="arch-archetype">Tokens + graveyard recursion</p>
        <p>Elves want numbers <em>and</em> quality. Flood the board with tokens, pump with elf-matters lords, and loop value through the graveyard. Cheap creatures fuel later, more expensive payoffs; a single anthem on a wide board wins the race.</p>
        <p class="arch-tip">Watch for: non-elf anthems on the other side, and anything with reach against faeries.</p>
      </article>
      <article class="arch-card tribe boggart">
        <div class="arch-head"><span class="arch-tribe">Boggarts</span><span class="arch-color-id">B / R</span></div>
        <p class="arch-archetype">Recursive attrition <em>— not aggro</em></p>
        <p>The common trap: Boggarts <em>look</em> like a red-deck swarm, but this archetype grinds. Sacrifice creatures for value, bring them back from the graveyard, and trade one-for-one until their hand is empty and yours still isn't. You win on resources, not on the clock.</p>
        <p class="arch-tip">Watch for: lifegain and exile effects. Drawing pure haste-lord cards? Wrong deck — reroute.</p>
      </article>
      <article class="arch-card tribe flamekin">
        <div class="arch-head"><span class="arch-tribe">Flamekin / Cinders / Rimekin</span><span class="arch-color-id">U / R</span></div>
        <p class="arch-archetype">Evoke tempo, burn, and combos</p>
        <p>The Elemental-people tribe has changed colors across the block — Flamekin were mono-red in Lorwyn, Cinders turned BR in Shadowmoor, and the Rimekin of <em>Eclipsed</em> settled into UR — but the UR shell is where the archetype cashes in. Cheap mana-fixing enables big evoke plays, and cost reducers let you cheat fatties onto the table ahead of curve.</p>
        <p class="arch-tip">Watch for: graveyard hate (shuts evoke loops) and 4+ toughness walls on the ground.</p>
      </article>
      <article class="arch-card tribe flamekin">
        <div class="arch-head"><span class="arch-tribe">Elementals (open)</span><span class="arch-color-id">WUBRG</span></div>
        <p class="arch-archetype">Five-color toolbox</p>
        <p>Elementals are a creature type in <em>every</em> color, so "elemental deck" is distinct from the Flamekin tribe. Most individual elementals get drafted for their effects, but a dedicated shell strings them together with Elemental-specific mana fixing, tribal tutors, and cost reducers. Evoke lets you pay a cheaper alternate cost (at the same speed the creature would normally allow), so every creature doubles as a cheap effect. Green usually anchors the build for ramp, but the shell can flex whichever way your pool pushes.</p>
        <p class="arch-tip">Watch for: color-greed. Without enough fixing, the deck stalls on lands.</p>
      </article>
      <article class="arch-card tribe giant">
        <div class="arch-head"><span class="arch-tribe">Giants</span><span class="arch-color-id">R / W</span></div>
        <p class="arch-archetype">Midrange haymakers + reach</p>
        <p>Giants play fair, play big, and hit hard. A mass-damage effect keyed to small creatures punishes every go-wide deck in the format. Giant-matters lords reward you for drawing a critical mass of the tribe, and sacrificing a big body for reach closes out games the ground can't. You're not the fastest deck, but you're the heaviest.</p>
        <p class="arch-tip">Watch for: bounce and counterspells. Your best threats are chunky enough to cost you the game if they don't stick.</p>
      </article>
      <article class="arch-card tribe treefolk">
        <div class="arch-head"><span class="arch-tribe">Treefolk</span><span class="arch-color-id">B / G  ·  G / W</span></div>
        <p class="arch-archetype">High-toughness wall → Doran</p>
        <p>Treefolk stall the ground with huge toughness, then flip a toughness-matters lord to turn every wall into a finisher. Ramp and card advantage carry you through the midgame; your late-game permanents are big enough to end games single-handedly once stabilized.</p>
        <p class="arch-tip">Watch for: faeries, burn, and anything that ends the game before your six- and seven-drops land.</p>
      </article>
    </div>

    <div class="callout">
      <p class="cal-head"><span class="dot"></span>General advice</p>
      <p><strong>New to the cube?</strong> Pick a tribe you like and commit early. Hybrid mana lets you drift colors later, but the payoffs demand a critical mass of the right type line. <strong>Read signals</strong>: a late tribal lord or archetype engine means the lane is open. <strong>Changelings are glue</strong> — they count as every tribe, filling your ranks to cash in on tribal payoffs.</p>
    </div>
  </div>
</section>

<!-- ========= CUBE ========= -->
<section class="sect sun" id="cube" data-screen-label="23 Cube">
  <div class="sect-inner wide">
    <header class="part-head">
      <p class="roman">Part XIV</p>
      <h2>The <em>Cube</em></h2>
      <p class="kicker">All 360 cards. Hover any name to see the card. Click to open on Scryfall.</p>
    </header>

    <div class="cube-controls">
      <input type="search" id="cube-search" class="cube-search" placeholder="Search — a card name, a word in a type line…" aria-label="Search cube" />
      <div id="cube-chips" class="cube-chips" role="toolbar" aria-label="Filter by tribe"></div>
      <p id="cube-totals" class="cube-totals"></p>
    </div>

    <div id="cube-grid" class="cube-grid"></div>
  </div>
</section>

<!-- ========= GLOSSARY ========= -->
<section class="sect sun" id="glossary" data-screen-label="24 Glossary">
  <div class="sect-inner wide">
    <header class="part-head">
      <p class="roman">Part XV</p>
      <h2>A <em>Glossary</em></h2>
      <p class="kicker">Anything you saw marked <span class="term" data-term="Aurora">like this</span> earlier is defined below, and will fire a tooltip when hovered.</p>
    </header>

    <input type="search" id="gloss-search" class="gloss-search" placeholder="Search glossary — try 'Aurora', 'Maralen', 'doun'…" aria-label="Search glossary" />

    <div id="gloss-grid" class="gloss-grid"></div>
  </div>
</section>

`;

// Mount on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('content').innerHTML = CONTENT;

  // Build glossary grid from GLOSSARY data, grouped by first letter
  const grid = document.getElementById('gloss-grid');
  if (grid && window.GLOSSARY) {
    const sorted = [...window.GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
    const byLetter = {};
    sorted.forEach(g => {
      const L = g.term[0].toUpperCase();
      (byLetter[L] = byLetter[L] || []).push(g);
    });
    const letters = Object.keys(byLetter).sort();
    let html = '';
    letters.forEach(L => {
      html += `<div class="gloss-group"><div class="gloss-letter">${L}</div>`;
      byLetter[L].forEach(g => {
        html += `<div><dt>${g.term}</dt><dd>${g.def}</dd></div>`;
      });
      html += `</div>`;
    });
    grid.innerHTML = html;
  }
});
