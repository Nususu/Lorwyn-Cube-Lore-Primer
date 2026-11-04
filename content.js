// ============================================================
// Primer content — injected into #content on load.
// ============================================================

const TERM = (t, label) => `<span class="term" tabindex="0" data-term="${t}">${label || t}</span>`;

// Footnote marker: ${FN('Source, section')}. primer.js numbers these per part and builds a Notes list.
const FN = (note) => `<sup class="fn"><span hidden>${note}</span></sup>`;

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

    <p class="lede">The plane of Lorwyn exists in a perpetual golden afternoon. The sun sinks low but never sets, and the sky never goes dark. It is a world of eternal summer and gentle magic, where eight tribes live in uneasy coexistence.</p>

    ${ART_BLEED('art/lorwyn/places/forest_sunbeams.png')}

    <p>But Lorwyn has a secret. Every three hundred years or so a turning called the ${TERM('Aurora')} inverts the world. In one night it transforms from a summer idyll into a nightmare of endless winter twilight. The same tribes persist, but their natures flip. The beautiful become cruel. The cruel become wretched. The curious become paranoid. And almost no one remembers what came before.</p>

    <p>The cycle is natural; its length is not. ${TERM('Oona')}, Queen of the Fae, stretched each phase to last centuries, and she remembers through every turning. Then something happened far beyond the plane, the Great Mending, which healed the Multiverse's old wounds, and a hundred years before the next turning was due, Oona felt it coming early. For the first time she feared the change might touch her, and she began to prepare.</p>

    <div class="callout warn">
      <p class="cal-head"><span class="dot"></span>A note on spoilers</p>
      <p>This primer discusses the plots of the Lorwyn/Shadowmoor novels (<em>Shadowmoor</em> is a short-story anthology) in full, including their endings. The novels are ~20 years old; read them unspoiled first if you'd like. Reading order: <em>Lorwyn → Morningtide → Shadowmoor → Eventide</em>.</p>
    </div>

    <p>Reading this before drafting will enrich the cards in your pile. The elves pursuing you, the faeries meddling in your affairs, the boggarts raiding your villages are characters with histories, and knowing those histories brings them to life at the table.</p>

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

    <p class="lede">Lorwyn is pastoral and sun-drenched: ancient forests, winding rivers, rolling meadows. The sky glows rose-gold, the sun forever hanging warm and low. The forests are vast and alive with magic. The rivers are swift and filled with secrets. The hills shelter kithkin villages; the crags above shelter the flamekin.</p>

    <p>The <em>Wanderwine River</em>, called the Wanderbrine in Shadowmoor,${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Major Locations')} is Lorwyn's great artery, lined with ${TERM('Crannog','crannogs')}: floating merrow village-structures whose above-water docks conceal a population many times larger beneath. Above the treeline, fire-elementals walk in search of meaning. In the deepest wood, ancient treefolk dispense slow wisdom to anyone patient enough to wait for it.</p>

    <div class="pull">
      "One day, night will come to these mountains. From crag to creekside and past all points beyond, the evening falls."
      <cite>Narvek Riag, kithkin prophet, from the Lorwyn basic Mountains</cite>
    </div>

    <p>This is a world that feels safe and ordered on the surface. The elves maintain that order through force and hierarchy. The kithkin maintain it through community and shared thought. The merrow maintain the river lanes. Everyone knows their place, or is made to know it.</p>
  </div>
</section>

<!-- ========= TRIBES (glance cards) ========= -->
<section class="sect sun" id="tribes" data-screen-label="04 Tribes">
  <div class="sect-inner wide">
    <header class="part-head">
      <p class="roman">Part III</p>
      <h2>The Eight <em>Tribes</em></h2>
      <p class="kicker">Each tribe is a culture, a philosophy, a way of being as much as a species.</p>
    </header>

    <h4 class="subheading">At a glance</h4>
    <div class="glance-grid">
      <article class="glance-card tribe elf">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.elf}</span><h4>Elves<small>Blessed Nation</small></h4></div>
        <p class="gc-tagline">"Those without beauty are Lorwyn's greatest tumor." <cite>Eidren, perfect of Lys Alana</cite></p>
        <dl><dt>Magic</dt><dd>Moonglove poison, vinebred control, hunting order.</dd>
        <dt>Home</dt><dd>The Gilt Leaf Wood; the city of Lys Alana and its tiered Dawn's Light Palace.</dd>
        <dt>Mood</dt><dd>Haughty, ritualistic, merciless.</dd></dl>
      </article>
      <article class="glance-card tribe kithkin">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.kithkin}</span><h4>Kithkin<small>The Thoughtweft</small></h4></div>
        <p class="gc-tagline">No kithkin is ever alone.</p>
        <dl><dt>Magic</dt><dd>The ${TERM('Mindweft','thoughtweft')} (the mindweft in Shadowmoor), a shared psychic bond spanning a clachan.</dd>
        <dt>Home</dt><dd>Village-towns: open clachans in Lorwyn, fortified douns in Shadowmoor.</dd>
        <dt>Mood</dt><dd>Communal, cheerful → paranoid, defensive.</dd></dl>
      </article>
      <article class="glance-card tribe faerie">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.faerie}</span><h4>Faeries<small>Cliques of Glen Elendra</small></h4></div>
        <p class="gc-tagline">"Dreams are fleeting. Reality even more so." <cite>Oona</cite></p>
        <dl><dt>Magic</dt><dd>Glamers, dreamstuff harvesting, telepathy within a ${TERM('Clique','clique')}.</dd>
        <dt>Home</dt><dd>Glen Elendra, hidden by glamers so strong outsiders forget they came.</dd>
        <dt>Mood</dt><dd>Chittering mischief with complete absence of conscience.</dd></dl>
      </article>
      <article class="glance-card tribe merrow">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.merrow}</span><h4>Merrow<small>Schools of the Wanderwine</small></h4></div>
        <p class="gc-tagline">"There is nowhere on Lorwyn that the Merrow Lanes cannot go."</p>
        <dl><dt>Magic</dt><dd>${TERM('Shapewater')}, glamers for diplomacy, river-line navigation.</dd>
        <dt>Home</dt><dd>Crannogs: the dock hides a city below the waterline.</dd>
        <dt>Mood</dt><dd>Mercantile, inquisitive, subtly manipulative.</dd></dl>
      </article>
      <article class="glance-card tribe flamekin">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.flamekin}</span><h4>Flamekin<small>Walkers on the Path</small></h4></div>
        <p class="gc-tagline">"The Path of Flame is a flamekin's most personal journey."</p>
        <dl><dt>Magic</dt><dd>Living fire; spirit-binding; elemental summoning.</dd>
        <dt>Home</dt><dd>Flickers and forge-villages on the slopes of Mount Tanufel; festivals in calderas.</dd>
        <dt>Mood</dt><dd>Spiritual, questing → cold, calculating cinders.</dd></dl>
      </article>
      <article class="glance-card tribe treefolk">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.treefolk}</span><h4>Treefolk<small>Elders of the Wood</small></h4></div>
        <p class="gc-tagline">"Changes far greater than the turning of the leaves await us." <cite>Colfenor</cite></p>
        <dl><dt>Magic</dt><dd>Slow, deep sylvan magic; memory stored in rings.</dd>
        <dt>Home</dt><dd>Anywhere a forest has stood long enough.</dd>
        <dt>Mood</dt><dd>Patient, secretive, knowing more than they tell.</dd></dl>
      </article>
      <article class="glance-card tribe boggart">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.boggart}</span><h4>Boggarts<small>Warrens of the Mire</small></h4></div>
        <p class="gc-tagline">Things you can eat. Things you chase down, pummel, and then eat.</p>
        <dl><dt>Magic</dt><dd>Auntie-led parables, swamp-foci and rituals; curses in Shadowmoor.</dd>
        <dt>Home</dt><dd>Warrens under hills; wherever the ground smells rich.</dd>
        <dt>Mood</dt><dd>Gleeful, feral, genuinely joyful in their cruelty.</dd></dl>
      </article>
      <article class="glance-card tribe giant">
        <div class="gc-head"><span class="tribe-sigil">${SIGIL.giant}</span><h4>Giants<small>Wanderers of the Heights</small></h4></div>
        <p class="gc-tagline">Slow, enormous, dreaming surnames out of sleep.</p>
        <dl><dt>Magic</dt><dd>Prophetic dreams and the Name Sleep; world-shaking strength.</dd>
        <dt>Home</dt><dd>The ridges above the world, and the clouds above those.</dd>
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

    ${ART_BLEED('art/lorwyn/creatures/elves/gilt_leaf_ambush.png', 'center 40%')}

    <p class="lede">The elves of Lorwyn are the plane's aristocracy. They believe themselves to be the living embodiment of beauty, and beauty to be the highest moral virtue. By extension, the ugly are to be destroyed, a philosophy they pursue with cheerful, ritualized violence.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/elves/elf_warrior_twilight.png', 'right')}

    <p>The greatest tribe is the ${TERM('Gilt Leaf')}, masters of the Gilt Leaf Wood, dwelling in the spired city of Lys Alana. Their society is strictly caste-stratified by beauty. At the top are the ${TERM('Perfect','Perfects')}; the High Perfects, chosen from among them to rule for life, are what other tribes call the king and queen. Below them the ${TERM('Exquisite','Exquisites')} (taercenns, courtiers, artists), then the Immaculates (seedguides, diplomats), then the ${TERM('Faultless')}, the populous minimum of acceptable beauty, from whom most hunters are drawn. Lowest of all are the ${TERM('Eyeblight','eyeblights')}: elves stripped of status for disfigurement, deformity, or disgrace. An eyeblight ranks lower than a boggart in the elven accounting.</p>

    <p>Even elven grief is measured in beauty. The eulogists admit that their effigies can never hope to capture "the vibrant beauty of a living elf," and that perhaps this is truly why they mourn.${FN('Flavor text, <em>Elvish Eulogist</em>')} To an elf, a death is first a loss of beauty.</p>

    <p>Elves ride ${TERM('Cervin','cervins')}, graceful antlered mounts whose bloodlines are themselves graded by caste. They hunt with ${TERM('Moonglove','moonglove')} poison, whose source plant embodies the tribe's core axiom: <em>the most beautiful things are also the most lethal.</em></p>

    <div class="pull">
      Treefolk and elves share a common interest in the forests, but really, the elves just feel at home with the view from above.
      <cite>Ambassador Oak</cite>
    </div>

    ${ART_PORTRAIT('art/lorwyn/creatures/elves/elf_moonglove.png', 'left')}

    <h4 class="subheading">How they fight</h4>
    <p>Elf warfare is choreographed. A pack is led by a ${TERM('Daen')}, its commander, and several packs answer to a ${TERM('Taercenn')}, the battlefield general. Packs are organized into ritualized hunting lines; in the field, a full Gilt Leaf ambush unfolds with the precision of a dance. ${TERM('Scarblade','Scarblades')} specialize in disfigurement rather than killing, because to an elf, being <em>marked</em> is worse than being dead: it costs you caste forever. Winnowers then hunt the marked down.</p>

    <p>${TERM('Vinebred','Vinebred')} creatures, captured beasts implanted with controlling nettlevine, are the elves' living siege weapons. Many elves consider vinebreeding a high art form: the vine improves the creature, they insist, as a frame improves a painting.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/elves/elf_thorn_scout.png', 'right')}

    <div class="callout">
      <p class="cal-head"><span class="dot"></span>In Shadowmoor: the Wilt-Leaf</p>
      <p>After the Aurora, the Gilt Leaf becomes the ${TERM('Wilt-Leaf')}, vigilant protectors of beauty.${FN('<em>Eventide</em>, Scott McGough')} They have not grown kinder; beauty has become desperately rare. Where a Lorwyn elf hunts the ugly for pleasure, a Wilt-Leaf elf guards the beautiful out of fear of loss. Same philosophy, inverted stance.</p>
    </div>

    ${ART_PORTRAIT('art/shadowmoor/creatures/elves/elf_moon_sorceress.png', 'left')}

    <p>The Wilt-Leaf are fewer and quieter than their Lorwyn counterparts, and no less dangerous. Every Wilt-Leaf elf is charged from birth with "a terrible duty: to strike back against the ugliness and darkness, even though they are all around and seemingly without end."${FN('Flavor text, <em>Wilt-Leaf Cavaliers</em>')} Where the Gilt Leaf ruled, the Wilt-Leaf endure, and their beauty has become something to protect rather than display.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/elves/elf_cervin_riders.png', 'right')}

    <p>The cervins the Wilt-Leaf ride are horned, and the riders' work is rescue: <em>"Things of beauty are in constant peril. The riders whisk them to safety, ahead of the encroaching darkness."</em>${FN('Flavor text, <em>Rune-Cervin Rider</em>')} They tend the ${TERM('Dawnglow','dawnglove')} groves, Shadowmoor's mirror of the moonglove plant, that supply the safeholds' healing potion, dawnglow.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Dawnglove and Dawnglow; <em>Shadowmoor</em> anthology')}</p>

    ${ART_BLEED('art/shadowmoor/creatures/elves/elf_hunter_stag.png', 'center 15%')}

    <h4 class="subheading">Key elves</h4>
    <div class="two-col">
      <div>
        <p><strong>Rhys.</strong> Daen of the Hemlock Pack, and Colfenor's student for a third of his life. In the opening of the cycle, with three Gilt Leaf packs overrun by a boggart frenzy, he unleashes a surge of yew magic he never learned and cannot explain. It destroys his horns and most of the three packs, and he is ${TERM('Eyeblight','eyeblight')} by his own hand.${FN('<em>Lorwyn</em>, ch. 8: "He had done this, and he did not know how."')} His exile sets the entire plot in motion.</p>
        <p><strong>Nath of the Gilt Leaf.</strong> The taercenn who led the doomed extermination, was marred in the same blast, and hunts Rhys for it. Rhys kills him in Kinsbaile at the first novel's end, and his corpse reveals the glamer that hid his own disfigurement. His second, Gryffid, takes up his sword and the hunt.</p>
      </div>
      <div>
        <p><strong>Maralen.</strong> A Mornsong elf who claims to be cursed and knows far too much. There was a real Maralen once, Peradala's maid-in-waiting, and what happened to her is the cycle's buried secret.</p>
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

    <p class="lede">Kithkin are halfling-like: short, round-faced, deeply communal. Their defining trait is the <strong>${TERM('Mindweft','thoughtweft')}</strong>, a shared psychic bond linking every member of a ${TERM('Clachan')}. Shadowmoor kithkin call it the mindweft.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, The Thoughtweft; <em>Eventide</em>, Scott McGough')} A kithkin is never truly alone. Fear ripples through the weft; so does courage. When one clachan member lifts their chin, the whole village lifts with them.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/kithkin/wizened_cenn.png', 'right')}

    <p>Clachans are led by a ${TERM('Cenn')}, a mayor and anchor of the weft in one. The cenn's steadiness is the village's steadiness; their panic is the village's panic. The role is sacred and exhausting. Beneath the cenn, kithkin live an idyllic rural life: shepherding ${TERM('Springjack','springjacks')}, tending hedge-gardens, brewing, trading with merrow at the river crannogs. Kithkin keep their own archers for the village's defense, and a trap or two is never far from the door.</p>

    <div class="pull">
      The thoughtweft amplifies any small bud of courage, turning fear to resolve, daring to heroics.
      <cite>Gallant Fowlknight</cite>
    </div>

    <h4 class="subheading">In Shadowmoor: the doun</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/kithkin/kithkin_sul_hooded.png', 'left')}

    <p>After the Aurora, the clachan becomes the ${TERM('Doun')}, an armed fortress behind wrought-iron gates and stone ramparts, forever braced for attack. The thoughtweft survives, but it now broadcasts only the paranoia of every kithkin in the doun. A Shadowmoor kithkin is still bound to their kin, but the bond feels like a noose they cannot cut. Each month a tribunal elects a watcher called a ${TERM('Sul')}, the eyes of the people, who is locked into a tower called an ${TERM('Inslintur','inslintur')} with a view of the whole village, watching for any sign of crime or treason. Isolation becomes a sacred duty.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Kithkin: Society')}</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/kithkin/kithkin_doun_band.png', 'right')}

    <p>Where a Lorwyn kithkin fought to defend a neighbor, a Shadowmoor kithkin fights to <em>preempt</em>. They leave the walls of their douns only to ward off attacks,${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Kithkin: History')} and the mindweft decides what counts as one: no dounsfolk will hear a single word that runs counter to its opinion.${FN('<em>Eventide</em>, Scott McGough')}</p>

${ART_PORTRAIT('art/shadowmoor/creatures/kithkin/kithkin_whiteclay_priests.jpg', 'left')}

    <p>Respect for the dead survives in the doun, too. The priests of the Order of Whiteclay paint their faces with clay from burial mounds, <em>a sign of their respect for those whose rest they interrupt.</em>${FN('Flavor text, <em>Order of Whiteclay</em>')}</p>

    <h4 class="subheading">Key kithkin</h4>
    <p><strong>Brigid Baeli.</strong> Hero of Kinsbaile, sharpshooter, tracker, and, on Colfenor's orders, a traitor to her own companions in the first novel. Morningtide is her search for redemption. At its end she takes the Crescent of Morningtide from Sygg's hands, and because she is holding it when the Aurora falls, she alone among kithkin remembers Lorwyn.</p>
    <p><strong>Gaddock Teeg.</strong> ${TERM('Cenn')} of Kinsbaile, Colfenor's willing accomplice, and the most famous kithkin in the cycle. Lean and tall for a kithkin, and formidable. The Hemlock pack's pursuit of Rhys runs straight through his clachan. He is dead by Morningtide.</p>
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

    ${ART_BLEED('art/lorwyn/creatures/faeries/faerie_glamour.png', 'center 35%')}

    <p class="lede">Lorwyn's faeries are not Tinkerbell. They are chittering, amoral sprites whose favorite amusements include deranging travelers, stealing dreams, and driving kithkin villages to quiet madness. They have no conscience at all, a fact they do not regard as a flaw.</p>

    <p>Faeries organize themselves into ${TERM('Clique','cliques')}: three or more bonded for life, most often a pair of twins and one odd sibling out, nearly always of a single sex. A clique functions as a single organism, several bodies with one emotional state. Break one faerie of a clique and the rest will find you. They live very short lives, which is why consequences never seem to apply to them.</p>

    <div class="pull">
      "Dreams are fleeting. Reality even more so."
      <cite>Oona, Queen of the Fae</cite>
    </div>

    <p>The queen of the fae is ${TERM('Oona')}: ancient, vast, and the secret engine of the entire Aurora cycle. Her home, ${TERM('Glen Elendra')}, is hidden by glamers so strong that non-fae who approach simply forget why they came. She harvests <strong>${TERM('Dreamstuff','dreamstuff')}</strong> (tangible dreams and rumors) from across the plane. What mortals don't know is that dreamstuff is not just Oona's food: it sustains the queen and powers the glamers that hide her glen. The fae sustain themselves on dreamstuff too, and do not care for jobs.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')}</p>

    <p>Their favorite targets are the biggest creatures they can find. A pestermite will perch on a giant's nose and cut at it with a barbed stick until the blood sprays, and then it is gone before the giant gets a hand up. <em>The fae know when they're not wanted. That's precisely why they show up.</em>${FN('Flavor text, <em>Pestermite</em>')} Gaddock Teeg, a kithkin, calls most faeries harmless pranksters.${FN('Flavor text, <em>Nightshade Stinger</em>')}</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/faeries/vendilion_clique/vendilion_clique_b.png', 'right')}

    <h4 class="subheading">Key faeries</h4>
    <p><strong>The ${TERM('Vendilion Clique')}.</strong> Iliona, Veesa, and Endry: twin sisters and a brother, a mixed clique rare enough to be remarked on. Spies, guides, tormentors, and reluctant allies throughout the cycle. They will end the novels changed forever.</p>
    <p><strong>Oona.</strong> Everywhere, and addressed directly in <a href="#oona">Part VIII: The Queen Beneath</a>.</p>

    <h4 class="subheading">In Shadowmoor</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/faeries/faerie_bellflower_thief.png', 'left')}

    <p>The Aurora does not break the faeries the way it breaks everyone else. The dreamstuff still flows to Oona, and Glen Elendra stays as lush as ever. In Shadowmoor they roam the ridges as always, stealing fire from paper-lanterns, wilting whole meadows for amusement, cupping bell-flowers in their claws as lures for anything dull enough to investigate.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/faeries/faerie_witch_staff.png', 'right')}

    <p>And many of them, now, ride. Shadowmoor fae look older and gaunter, and some grow horns like a stag beetle's, in keeping with their insect look. Witches on gnarled staves pick their way across the twilight sky as if the wind owed them a favor. A clique in Lorwyn was siblings who finished each other's sentences. A clique in Shadowmoor is witches who finish each other's <em>curses</em>.</p>



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
        <span class="tribe-tag">Blue · Black</span>
      </div>
    </header>

    ${ART_BLEED('art/lorwyn/places/wanderwine_hub.png', 'center 15%')}

    <p class="lede">Merrow are sleek, sharp-eyed, intensely mercantile. They rule the ${TERM('Wanderwine')} and its tributaries. Nothing moves on the river without their permission or their fare. Their magic is ${TERM('Shapewater')}, which they use to shape solid, mobile water: ferries, bridges, reinforced banks, and the occasional shapewater prison.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/merrow/sygg/sygg_a.png', 'right')}

    <p>A crannog is the visible tip of a merrow settlement, a half-submerged trading post whose below-water city may be many times the size. When merrow deal with landwalkers they use ${TERM('Glamer','glamers')} to modulate voice and appearance, to put the customer at ease and quietly to tilt the mood of the bargain. Merrow are not liars; they are simply ruthless about the <em>terms</em>.</p>

${ART_PORTRAIT('art/lorwyn/creatures/merrow/merrow_silvergill_peddler.jpg', 'left')}

    <p>Pressure is part of the stock. A silvergill peddler spreads her wares across the water and mentions that a rival clachan has already shown interest: <em>"I should let you know, Longlake Clachan was very interested in that one, but I'm willing to entertain a better offer."</em>${FN('Flavor text, <em>Silvergill Peddler</em>')}</p>

    <div class="pull">
      "I like to bask and watch its beauty, a reminder that we can't control the currents, but can know how to swim across them."
      <cite>Sygg, merrow ferryman</cite>
    </div>

    <p><strong>${TERM('Sygg')}.</strong> A rudder, a merrow ferryman, who pilots a ${TERM('Shapewater','shapewater')} ferry along the Lanes. A seasoned hand who knows exactly when a deal has become acceptable and is willing to let you wait out the rest of the crossing in the current.</p>

    <h4 class="subheading">In Shadowmoor</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/merrow/merrow_rune_etched.png', 'left')}

    <p>The Wanderwine becomes the Wanderbrine after the Aurora.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Major Locations')} Where Lorwyn's merrow were mercantile, Shadowmoor's merrow are <em>territorial</em>, and they use their glamers almost exclusively to run cons.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Merrow')} Their shapewater now carries old runes along their flanks like second skin. The schools no longer <em>negotiate</em>; they take. What was a trading fleet is a set of criminal gangs working the same water, and a Shadowmoor merrow will steal anything that is not held down: cargo, tackle, boots, the coin out of a drowned pocket. <em>What the current doesn't take, they do.</em>${FN('Flavor text, <em>Cache Raiders</em>')}</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/merrow/merrow_horned_plunge.png', 'right')}

    <p>The river itself has gone rougher. Shadowmoor merrow plunge through white-water cataracts where Lorwyn merrow would have carved a lane, horns laid flat to the current, the hunt on. A Lorwyn crannog was a trading post with a price list. A Shadowmoor crannog is a fortress full of other people's property. There is no toll and no bargain; there is what you can carry past them, which is usually less than you were carrying before.</p>

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

    <p class="lede">Flamekin are living fire, humanoid shapes of flame and living stone who take the world as a place to be understood rather than commanded. Their defining tradition is the <strong>${TERM('Pilgrim','Path of Flame')}</strong>: a lifetime spiritual journey to find and commune with one's personal elemental spirit. A flamekin without a pilgrimage is an ember without purpose.</p>

    <div class="pull">
      "The Path of Flame is a flamekin's most personal journey. You must walk it for yourself, but you'll never walk alone."
      <cite>Zasharua, Brighthearth mentor</cite>
    </div>

    ${ART_PORTRAIT('art/lorwyn/creatures/flamekin/ashling/ashling_leaping.png', 'right')}

    <p>Flamekin build no great cities, but they are not homeless. They gather in small, ever-shifting towns called <em>flickers</em> that never grow large because flamekin wander, and in forge-villages whose smithies supply iron tools and weapons to the rest of Lorwyn. Flamekin Village on the slopes of Mount Tanufel, the birthplace of their kind, is the best known. Between towns they meet at festivals in calderas and burnt-out pits, drawn to the places where the plane itself is shifting. Their fires burn cool until they decide otherwise; a peaceful flamekin can cradle a child's hand without harm. An angry one can ignite a forest.</p>

    <p>Craft is honored among them. Few flamekin have the patience to weave goldenglow moth silk, and those who do are highly revered and highly rewarded.${FN('Flavor text, <em>Flamekin Gildweaver</em>')}</p>

    <p><strong>Ashling.</strong> The cycle's central flamekin. Her long ${TERM('Pilgrim','pilgrimage')} to find her elemental consumes the entire narrative. The Path of Flame is marked in colors of fire: red, then yellow, then white, and a fourth stage, blue, that no one understands, because those who come close are consumed by their own inner fires. Whoever reaches it and survives would become the stuff of legend.${FN('Rei Nakazawa, <em>In the Early Morningtide</em>, Wizards of the Coast, January 7, 2008')} Ashling will, over the course of the books, become the Destroyer the cinders hail as their Extinguisher, and eventually something new.</p>

    <h4 class="subheading">In Shadowmoor: the Cinder</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/flamekin/cinder_walker.png', 'left')}

    <p>After the Aurora, flamekin become ${TERM('Cinder','cinders')}: half-dead creatures of coal and guttering ember, cold-hearted and cruel. The warm embers that once lit a pilgrim's way now smoulder in skeletal joints. A cinder that lays a hand on a child does not cradle; it <em>burns through.</em> Where a flamekin's fire was a search, a cinder's fire is a weapon.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/flamekin/cinder_flailing_heads.png', 'right')}

    <p>Cinders do not walk the Path. Their legend says a traitor called the Extinguisher took their flames long ago, and their bitterness has only grown since. Their rituals are shriveled, spiteful echoes of the old pilgrim rites: they swing the skulls of their own as flails, bind flame into cruel fetishes, and raid the douns for fuel. The mentors and brightwardens of Lorwyn are, in Shadowmoor, just more coal to be broken apart and burned again.</p>

    <p>What the ${TERM('Cinder','cinders')} do still hold is a liturgy. They do not know who Ashling was. They know only that the Extinguisher of legend has returned as a colossus of living fire, and two cinders on a mountainside in Eventide recite what she means:</p>

    <div class="pull">
      In the darkness, she is the Destroyer, who shall cover the world with fire.<br>
      In the sea of flame she becomes the Extinguisher, who shall consume the fire that consumed the world.<br>
      And from the ashes, we are reborn.
      <cite>Cinder liturgy</cite>
    </div>

    <p>Destroyer, Extinguisher, reborn: one figure moving through three phases. 'First for her and then with her,' the golden cinder says. 'We will burn.' Everyone who is not a cinder simply calls her the Destroyer.</p>

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

    <p class="lede">Treefolk are the oldest thinking beings on Lorwyn. They move slowly, speak slowly, live for centuries, and remember everything. Their magic is the slowest kind, the kind that moves through roots and is stored in rings. A treefolk sage can recall events from eras no one else has even heard of.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/treefolk/colfenor/colfenor.png', 'right')}

    <p>The most important treefolk in the cycle, perhaps the most important character, full stop, is <strong>${TERM('Colfenor')}, the great red yew</strong>, the last living yew on the plane.${FN('Eventide (novel), Colfenor: "I am the last living yew." The Lorwyn yew entry in the <em>Planeswalker\'s Guide to Lorwyn Eclipsed</em> says his only progeny was destroyed defeating Oona.')} He knows the Aurora is coming. He has been preparing for it longer than most of Lorwyn has been alive. He is mentor to Rhys, puppeteer of Brigid and Gaddock Teeg, and quietly orchestrates events no one else realizes are connected.</p>

<p>Treefolk keep a different ledger from the elves and the faerie queen, and they count givers rather than rulers: <em>"Forget the elves, that meddling faerie queen, and those greasy machines. If you ask me, it's the generous who should be remembered."</em>${FN('Flavor text, <em>Great Forest Druid</em>')}</p>

    <div class="pull">
      "Changes far greater than the turning of the leaves await us at season's end."
      <cite>Colfenor, the Last Yew</cite>
    </div>

    <h4 class="subheading">In Shadowmoor</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/treefolk/treefolk_blighted_yew.png', 'left')}

    <p>Colfenor is dead. The red yew burned himself on Ashling's fire at the end of the first novel so that his seed would wake 'ready to carry the old world into what comes after,' and the Aurora came down on a forest already missing its eldest tongue. Shadowmoor's treefolk are leafless and live in bitter resentment.${FN('Wizards of the Coast, <em>The Deepening Shadowmoor</em>')} Most have lost their faces, with only vestiges of their humanoid features remaining, and they live isolated and lonely.${FN('<em>Planeswalker\'s Guide to Lorwyn Eclipsed</em>, Society (Shadowmoor treefolk)')}</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/treefolk/treefolk_fruitburdened.png', 'right')}

    <p>Some of the younger treefolk took the turn worse. They grow <strong>burdened</strong>, knuckled over with pods, a single green eye blinking from under the moss.</p>

    <p>What every Shadowmoor treefolk carries, young or old, is the <strong>Canker</strong>: a rot in the heartwood that will not finish. They hate life, their own most of all, and they are afraid to die, and the two feelings hold each other in place for centuries.</p>

    ${ART_BLEED('art/shadowmoor/creatures/treefolk/treefolk_woodfall_wrath.png', 'center 20%')}

    <p>The forests of Shadowmoor are not peaceful. The treefolk are vengeful guardians of nature against the ravages of the denizens of Shadowmoor,${FN('<em>Planeswalker\'s Guide to Lorwyn Eclipsed</em>, Society (Shadowmoor treefolk)')} and much of the nuance of their species has been lost in favor of a more violent approach.${FN('<em>Planeswalker\'s Guide to Lorwyn Eclipsed</em>, Society (Shadowmoor treefolk)')}</p>
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

    ${ART_BLEED('art/lorwyn/creatures/boggarts/boggart_birth_rite.png', 'center 25%')}

    <p class="lede">Boggarts are filthy, stupid, and genuinely having the best time on Lorwyn. They are a riot of appetite and curiosity, roaming the plane in warrens that feel less like tribes and more like delighted mobs. A boggart is not malicious the way an elf can be; it simply hasn't yet been convinced that the thing in front of it is not, in fact, food.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/boggarts/boggart_warren.png', 'right')}

    <p>The fundamental boggart worldview: there are two kinds of thing in the world. <em>Things you can eat,</em> and <em>things you have to chase down and pummel before you can eat them.</em> Everything (giants, elves, weather, rocks) falls into one category or the other. That is their operating principle.</p>

    <div class="pull">
      Boggarts revel in discovering new sensations, from the texture of an otter pellet to the squeak of a dying warrenmate.
      <cite>Boggart Shenanigans</cite>
    </div>

    ${ART_PORTRAIT('art/lorwyn/creatures/boggarts/boggart_close.png', 'left')}

    <p>They live in warrens dug under hills and in the mire margins, under the guidance and leadership of an <em>auntie</em>.${FN('<em>Planeswalker\'s Guide to Lorwyn Eclipsed</em>, Society (boggarts)')} An auntie is not always female (the Shadowmoor novel has "Auntie Geg" on his throne),${FN('Shadowmoor (novel): "Auntie Geg sat on his throne in the hollow of a gnarled..."')} usually a boggart of great age who explains what puzzling things and sensations mean. The greatest of them, Auntie Grub, still guides boggart behavior through her tales.</p>

    <p>Whatever the dead leave behind belongs to the warren: <em>"What do they need all this stuff for? They're dead. We're alive. Simple enough."</em>${FN('Flavor text, <em>Warren Pilferers</em>')}</p>

    ${ART_BLEED('art/lorwyn/creatures/boggarts/boggart_clan.png', 'center 30%')}

    <div class="callout">
      <p class="cal-head"><span class="dot"></span>In Shadowmoor</p>
      <p>Boggarts survive the Aurora, but not their minds. Where a Lorwyn boggart is feral-joyful, a Shadowmoor boggart is no more than a mindless eating machine, traveling in loose gangs of nomadic feeding frenzies.${FN('Wizards of the Coast, <em>The Deepening Shadowmoor</em>')}</p>
    </div>

    ${ART_PORTRAIT('art/shadowmoor/creatures/boggarts/boggart_boar_rider.png', 'left')}

    <p>Shadowmoor boggarts live isolated. Their warrens are small and simple, with limited hierarchies supported by force, and no boggart warren has ever survived more than a generation.${FN('<em>Planeswalker\'s Guide to Lorwyn Eclipsed</em>, Society (Shadowmoor boggarts)')} The warriors hammer crude iron plates into their own bones.${FN('<em>Planeswalker\'s Guide to Lorwyn Eclipsed</em>, Society (Shadowmoor boggarts)')}</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/boggarts/boggart_brute_cleaver.png', 'right')}

    <p>The eldest aunties are cruel nomads and loners, and Shadowmoor boggarts tend to practice cursecasting.${FN('<em>Planeswalker\'s Guide to Lorwyn Eclipsed</em>, Society (Shadowmoor boggarts)')}</p>

${ART_PORTRAIT('art/shadowmoor/creatures/boggarts/boggart_hobgoblin_farm.jpg', 'left')}

    <p>Shadowmoor's goblin creature type covers a few distinct entities: boggarts, hobgoblins and spriggans.${FN('Card type lines: <em>Hearthfire Hobgoblin</em> (Goblin Soldier), <em>Hobgoblin Dragoon</em> (Goblin Knight), <em>Hungry Spriggan</em> (Goblin Warrior), <em>Swirling Spriggan</em> (Goblin Shaman)')} Hobgoblins work the fields, and the menace is in how well they keep their tools: <em>Hobgoblins are best left alone. They sharpen their farm implements far more than is necessary for their work in the fields.</em>${FN('Flavor text, <em>Hearthfire Hobgoblin</em>')}</p>

    ${ART_BLEED('art/lorwyn/creatures/boggarts/boggart_raid.png', 'center 25%')}

    <p class="aside-note">▶ For the flavor of boggart life on both sides of the Aurora, see <a href="https://youtu.be/mCQ5EF69rSQ?si=MRgOaAcJl07dxX3j" target="_blank" rel="noopener"><em>A Boggart Ballad</em>, Lorwyn Eclipsed trailer</a>, a Jim Henson Studios collaboration depicting a Lorwyn boggart meeting its Shadowmoor counterpart.</p>
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
          <h3>The Giants <em>of the High Peaks</em></h3>
        </div>
        <span class="tribe-tag">Red · White</span>
      </div>
    </header>

    ${ART_BLEED('art/lorwyn/creatures/giants/rosheen_meanderer.png', 'center 3%')}

    <p class="lede">Giants in Lorwyn are not dumb brutes. They are slow, enormous philosophers who think about time in eras rather than days. They live so long and on such a scale that many smaller folk genuinely do not believe they ever truly die. Giants are mortal, but the eldest have outlived anyone who could say how.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_examines_grass.png', 'right')}

    <p>A giant's day unfolds at a pace that other tribes find maddening. They lean on ridgelines to watch a season pass. They pick up a kithkin-sized rock and turn it over for an afternoon. To a boggart this looks like catastrophic laziness; to a flamekin philosopher it looks like the plane's most honest meditation. The giants themselves are simply thinking things through. The conclusion, when it arrives, tends to flatten a village.</p>

    <div class="pull">
      A giant can brood over a grudge for decades, and woe to those who interrupt him.
      <cite>Lairwatch Giant</cite>
    </div>

    <h4 class="subheading">The Name Sleep</h4>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_cloudgoat_herder.png', 'left')}

    <p>Giants practice a custom called <strong>${TERM('Name Sleep','the Name Sleep')}</strong>. Triggered by a sudden change such as trauma or abundance, a giant lies down wherever they stand and enters a slumber that may last days or seasons.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')} What they dream becomes their surname. A giant caught out on a hillside by bad news might wake up weeks later, blink, and announce themselves <em>Thunderbrow</em> or <em>Meanderer</em> or <em>Stoutarm</em>. Not every giant keeps the new name; some stay with a family or clan name, and Rosheen has woken from three Name Sleeps still <em>Meanderer</em>.${FN('<em>Morningtide</em>, Cory J. Herndon and Scott McGough')} But a Name Sleep is always a fresh start.</p>

    <p>The giantess <strong>${TERM('Rosheen Meanderer','Rosheen')}</strong> is the cycle's oldest and largest giant and a famously mad seer. When Rhys finds her in <em>Morningtide</em> she is asleep in a valley, muttering prophecy in the timbre of slow weather. Her cloudgoat <em>Mr. Choppers</em>, a huge white beast, keeps a standoffish vigil in the clouds high above. Her mumbled fragments hold prophetic truths that, in the right hands, could change the course of history.</p>

    <h4 class="subheading">Giants and the small folk</h4>

    ${ART_BLEED('art/lorwyn/creatures/giants/giants_destroy_village.png', 'center 10%')}

    <p>Most giants are indifferent to smaller tribes the way a storm is indifferent to a puddle: not cruel, merely scaled wrong. A giant crossing the moors will flatten six boggart burrows and a kithkin orchard without noticing, not because they don't care (many giants care quite a lot) but because by the time they've looked down, the damage is already old news. Clachans that sit near giant pathways post watchers for this exact reason, and the cenn's thoughtweft will ripple with the message <em>move the children, a slow one is coming</em> sometimes hours before the first footfall.</p>

    <p>Some giants take an interest in the small folk instead of overlooking them. <em>Sometimes a curious giant singles out a "little one" to follow for a few days, never realizing the effect it will have on the little one's life.</em>${FN('Flavor text, <em>Kithkin Greatheart</em>')} The effect lands on the little one; the giant never learns of it.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_ladybug_palm.png', 'right')}

    <p>A giant with time on their hands, though, is a different creature. Curiosity runs deep in the high country. Many a giant will scoop up a handful of something small (beetles, moonberries, a particularly confused faerie) and study it for a whole afternoon, perfectly still, brow furrowed in enormous concentration. The faerie may or may not be released. The beetles, in the giants' defence, are usually eaten.</p>

${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_hillcomber_fossil.jpg', 'left')}

    <p>Giants also collect. <em>They believe the fossils they find in Lorwyn's rocky heights are dreams frozen in time, and they treasure them.</em>${FN('Flavor text, <em>Hillcomber Giant</em>')} That fits a people whose dreams during the Name Sleep give them direction and purpose.</p>

    <div class="pull">
      The gentle giant fumbled the tiny thing in his hand as he spoke to it. "Sorry, sorry," he said, "can you repeat that? I lost you among my fingers."
      <cite>Giant Harbinger</cite>
    </div>

    <h4 class="subheading">When a giant fights</h4>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_charging.png', 'left')}

    <p>Giants rarely make war; their internal disputes play out across decades, at geologic tempo. But when a giant is roused, the result is a <em>fact of geography</em> rather than a skirmish. Forests are restructured. Rivers change course. Whole boggart warrens are rearranged into hills of a slightly different shape. A charging giant levels ground the way a flood levels ground: without theory, without strategy, and without anyone left to debate whether it was fair.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_axe.png', 'right')}

    <p>Their weapons are scaled to match: axes hewn from whole oaks, mauls tipped with boulders, chains long enough to drag a crannog off its moorings. A few giants, the so-called <strong>Hearthcage</strong> lineage, have learned to carry flame the way a flamekin does, swinging a burning fist that is equal parts cudgel and meteor. They are, by giant standards, hotheads. By anyone else's standards they are a natural disaster with opinions.</p>

    ${ART_BLEED('art/lorwyn/creatures/giants/giant_chained_firefist.png', 'center 5%')}

    <h4 class="subheading">Oracles and ogres</h4>

    ${ART_PORTRAIT('art/lorwyn/creatures/giants/giant_eater.png', 'left')}

    <p>Not every giant is wise. The kin of the high ridges (the Arbiters, the Meanderers, the cloudgoat-herders) tend to oracular thoughtfulness and long, mild lives. Red giants, who turn their feelings outward, are coarser, hungrier, and markedly less philosophical. Boggarts and hill-ogres have a fraught and mostly edible relationship: the boggart sees the ogre as a walking pantry with legs, and the ogre sees the boggart as a shrieking snack that has to be caught before it ducks into a hole.</p>

    <div class="pull">
      Though giants are mortal, they live so long and on such a grand scale that many small folk don't believe they ever truly die.
      <cite>Arbiter of Knollridge</cite>
    </div>

    <h4 class="subheading">Key giants</h4>
    <div class="two-col">
      <div>
        <p><strong>${TERM('Rosheen Meanderer','Rosheen Meanderer')}.</strong> Oracular, wandering giantess, oldest and largest of the giants. Prophesies in mutters; keeps the cloudgoat Mr. Choppers; carries a scroll that holds her personal journal, which many seek.</p>
        <p><strong>Brion Stoutarm.</strong> A giant of the high crags who hires out his fists. Rhys pays him and his brother Kiel to break boggarts in the first novel. Brion shows that giants can be bargained with, provided you respect the scale. He is murdered with moonglove by the taercenn Eidren in Morningtide.</p>
      </div>
      <div>
        <p><strong>The Arbiters of Knollridge.</strong> Giant arbiters are trusted by the smaller races to settle hard disputes from their lofty perspective; the greatest, Galanda Feudkiller, holds court in a mountain amphitheater, and her judgment is swift and absolute. Their verdicts are not always wise. They are always final.</p>
        <p><strong>The Hearthcage line.</strong> A line of fire-handed giants, red giants whose feelings go outward. Brief of fuse, large of fist, short of retirement plan.</p>
      </div>
    </div>

    ${ART_BLEED('art/lorwyn/creatures/giants/giant_contemplating.png', 'center 5%')}

    <div class="callout">
      <p class="cal-head"><span class="dot"></span>In Shadowmoor</p>
      <p>After the Aurora, giants change less than most tribes. They were already slow, already indifferent, already old. Shadowmoor giants are hibernators: long weeks of sleep leave them covered in moss and plants, and over the ages their skin shrinks over muscle that magic keeps intact.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')} They are lazier than malicious, fighting only when driven to extremes, and so oblivious they never redirect their feet away from a village. They are also closer to nature, often harnessing wild magic in ways other creatures find awe-inspiring. Rosheen, far from sleeping, tears across Shadowmoor in a prophetic frenzy; in the anthology a whole doun must flee her path.${FN('<em>Shadowmoor</em> anthology, "Ode to Mistmeadow Jack"')}</p>
    </div>

    <p>The one voice among them that remembers the old world goes unheard: <em>Night after night, Rosheen babbled about a bygone sunlit world, her every word dismissed as a madwoman's ravings.</em>${FN('Flavor text, <em>Rosheen Meanderer</em>')}</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/giants/giant_purpleflame_rage.png', 'left')}

    <p>Shadowmoor fire runs wrong-colored. On the giants it burns as a bruise-violet flame that does not warm, does not cook, does not comfort, and an enraged giant is a natural disaster with a grudge.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/giants/giant_hex_cursed.png', 'right')}

    <p>Some giants lie so long that the wild magic of Shadowmoor grows in with the moss: red runes flicker across their skin in the dark. The Name Sleep of such a giant may never end.</p>

    ${ART_BLEED('art/shadowmoor/creatures/giants/giant_cagekeeper.png', 'center 3%')}

    <p>Not every Shadowmoor giant sleeps through the small folk. Some carry iron cages, and the small folk run before them.</p>
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

    <p>If you've played Magic before, some Lorwyn creatures will look oddly familiar, until you notice what's changed.</p>

    <div class="two-col">
      <div>
        <h4 class="subheading">Goblins, restyled</h4>
        <p>Boggarts <em>are</em> goblins, in mechanics and role, but the flavor is entirely new. No gunpowder, no engineers, no gears. Lorwyn's boggarts are muck-dwelling goblins: filthy, giggling, and hungry for every new sensation.</p>
        <h4 class="subheading">Halflings, weaponized</h4>
        <p>Kithkin are small round folk from the Shire, but this Shire keeps a militia, forges the best weapons around, and wires every neighbor's moods together through an empathic bond.</p>
        <h4 class="subheading">Elves, unrecognizable</h4>
        <p>Forget Tolkien's wistful moral paragons. Lorwyn elves have <em>horns</em> and <em>cloven hooves</em>. They are aristocrats of aesthetics to the point of lunacy: beauty is moral worth, ugliness is the worst thing a person can be, and the ugly, called eyeblights, are shunned at best and hunted, enslaved, or poisoned with moonglove at worst. They are the plane's apex predators and they know it.</p>
      </div>
      <div>
        <h4 class="subheading">Elementals, personal</h4>
        <p>Elementals here are not weather. They are the spirits flamekin pilgrims seek. Greater elementals are living embodiments of ideas, and a flamekin on the Path of Flame spends a life seeking one: a goal very few reach, since it ends in a fiery death.</p>
        <h4 class="subheading">Fae, without mercy</h4>
        <p>Forget any image of faeries as twinkling and benevolent. They are vain, petty, and carelessly cruel: petulant children at play, tiny and capricious, with a talent for stealing dreams and a very short attention span.</p>
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

    <p>Little is known about changelings. They emerge from <em>Velis Vel</em>, a quartz-lined grotto where, once a year, sunlight through a hole in the roof sets the whole cavern flashing, and they take the shape of whatever is near, poorly.${FN('Lorwyn Survival Guide, Velis Vel')} The mechanical answer is that a changeling counts as every creature type. The flavor answer is that you cannot trust one to stay shaped like whatever it was shaped like thirty seconds ago.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/changelings/changeling_kithkin_impostor.png', 'right')}

    <p>In Lorwyn they are mild, mindless mimics, and every species has its own outlook on them.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')}</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/changelings/changeling_traveler_spyglass.png', 'left')}

    <p>In Shadowmoor the play drops away. A changeling that enters Shadowmoor becomes a mimic: a cruel creature that mocks its victims by taking the appearance of their loved ones before ending their lives.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')} No changeling appears in the Shadowmoor or Eventide novels, so the Guide is the only account of what becomes of one there.${FN('<em>Shadowmoor</em> and <em>Eventide</em>, novels: neither mentions changelings')}</p>

    <p>Two plain facts sit under all this. First, changelings are poor at disguise: their opalescent, translucent skin gives them away at once.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')} Second, since Oona's fall they stay in Lorwyn unless they are driven into Shadowmoor against their will. You will rarely see one, in any case. When Rhys finds Rosheen in <em>Morningtide</em> there are dozens, maybe hundreds of them settled on the sleeping giantess, blank-eyed and shimmering blue, and he notes that very few in Lorwyn had ever seen a changeling at all.${FN('<em>Morningtide</em>, Cory J. Herndon and Scott McGough')}</p>

    <h4 class="subheading">Elementals (Shadowmoor)</h4>
    <p>Greater elementals still lurk in Shadowmoor, but twisted into embodiments of fears and nightmares: terrifying, uncommunicative things that ignore the other species and command the land that bore them.</p>

    <h4 class="subheading">Scarecrows</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/scarecrows/scarecrow_tattered_king.png', 'right')}

    <p>Very little is certain about Shadowmoor's scarecrows, and this is itself the most interesting thing about them. They are animated kithkin constructs, typically made from the wood of dead treefolk, with no real intelligence; they act in parody of their builders' intent.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')} <em>Once a tool of kithkin farmers, scarecrows of all shapes now skitter and lurch across Shadowmoor, animated by residual rustic magics.</em>${FN('Flavor text, <em>Scrapbasket</em>')} They <em>walk</em>. Kithkin make them and kithkin wake them, and what comes up out of the lashed wood and straw is rarely what the builder had in mind: a scarecrow carries out the instruction and mocks it in the same motion.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/scarecrows/scarecrow_antlered_reaper.png', 'left')}

    <p>In the anthology they are aimless and mindless. Jack Chierdagh's own scarecrow, built outside Mistmeadow, scuttles off into the fog; later he meets almost a score of wild ones on a path, which seem to have woven themselves bodies from marsh trash and shuffle toward him in what looks like silent consensus.${FN('<em>Shadowmoor</em> anthology, "Ode to Mistmeadow Jack"')}</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/scarecrows/scarecrow_chained.png', 'right')}

    <p>Some go wrong, and the ones judged too malevolent to roam free are chained to standing stones.</p>

    <div class="pull">
      Scarecrows deemed too malevolent to roam free are shackled to boulders or dolmen stones. Their animosity usually outlives the chains.
      <cite>Chainbreaker</cite>
    </div>

    <p>If scarecrows have a ruler, it is the Reaper, and nobody agrees where it came from. One account has a scarecrow that rebelled against its maker and grew strange under Shadowmoor's moon. The other has an amalgam of many scarecrows, all built from the remains of a single treefolk whose vengeful spirit held them together.${FN('The Legends of Lorwyn Eclipsed, The Reaper, King No More')} The second story fits the fact that scarecrows are typically made from the wood of dead treefolk. Its fate after the planes merged is in <a href="#eclipsed">Part XII</a>.</p>

    <h4 class="subheading">Spiritual beings</h4>
    <p>Lorwyn's supernatural life is mostly elemental: greater elementals, the purest essence of dreams and ideas, which the kithkin study as portents. Most are quiet.</p>

    <h4 class="subheading">Bairns</h4>

    <p>The lore says almost nothing about bairns. On the cards a bairn is a kind of ouphe, with a child-like trick-or-treat rhyme (<em>Tricks and treats, souls and sweets! On wooded path, whom shall we meet?</em>${FN('Flavor text, <em>Glimmer Bairn</em>')}) and a warning about glowing trinkets: <em>Do the glowing trinkets show it the way home, or do they set a twisted path for someone else to follow?</em>${FN('Flavor text, <em>Gilder Bairn</em>')}</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/bairns/bairn_raccoon_gempail.png', 'left')}

    <p>In the long dusk between douns you will sometimes meet a <strong>bairn</strong>, a small hooded figure in a stitched-animal cowl, carrying a pail. They are the smallest haunting Shadowmoor produces, and no one is quite sure what they are. They are not kithkin children. They are not faeries. They speak, occasionally, and what they say is usually a perfectly polite request for a shiny thing.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/bairns/bairn_bear_wisppail.png', 'right')}

    <p>Bairns collect, and bairns <em>distribute</em>. A raccoon-hood bairn will follow a stream for days filling its pail with river-gems and then, solemnly, set one on the shell of a passing frog. A toad-hood bairn will pluck a glowing wisp from a gnarled branch, carry it home in a wisp-pail, and set it on the shell of a sleeping turtle for reasons no one has ever gotten a straight answer about. They take, they place, they move on. <em>We'll leave this one here and that one there. Then wait and see who comes to share.</em>${FN('Flavor text, <em>Glister Bairn</em>')} Most kithkin will set out a small bowl of pebbles on the doun wall at dusk and not ask questions when it is gone by dawn, or when, some mornings, there is something new in it.</p>

    <div class="pull">
      Do the glowing trinkets show it the way home, or do they set a twisted path for someone else to follow?
      <cite>Gilder Bairn</cite>
    </div>

    <h4 class="subheading">Ouphes</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/ouphes/ouphe_sprite_hunt.png', 'right')}

    <p>Ouphes lurk in Shadowmoor's far reaches.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')} They trade in favors that bind: <em>Accept one favor from an ouphe, and you're doomed to accept another.</em>${FN('Flavor text, <em>Kitchen Finks</em>')} Auntie Grub wants them for potion stock: <em>Coin's no good. A potion for an ouphe liver or else you join my supply stock.</em>${FN('Flavor text, <em>Blood Crypt (Shadowmoor side)</em>')}</p>

    <p>Bairns are, on the cards, a kind of ouphe, but most <strong>ouphes</strong> are not so polite. The hunters among them are black and long-limbed, with ram-like horns, two arms and clawed fingers, and the firesprites and faeries of the moor are their quarry. <em>They spawn from shadow, wreaking chaos until shadow claims them again.</em>${FN('Flavor text, <em>Dusk Urchins</em>')}</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/ouphes/ouphe_kitchen_raiders.png', 'left')}

    <p>The smaller ouphes turn up in kithkin kitchens, and the favor is the hook: the milk gets spilled, the eggs get cracked, the tub gets scrubbed by hands nobody invited, and the debt is the part that stays.</p>



    <h4 class="subheading">Hags &amp; Gwyllions</h4>

    <p>Hags and gwyllions steal what the dead leave behind. Hobs bury their kin far from home because <em>they believe the dry, open ground keeps hags from stealing the bones and gwyllions from stealing the spirits.</em>${FN('Flavor text, <em>Rugged Prairie</em>')}</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/hags/hag_dandelion_crone.png', 'left')}

    <p>Hags are found in the far reaches of Shadowmoor.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')} They rob graves and hunt: <em>Loose earth is not a burial but an appetizer.</em>${FN('Flavor text, <em>Desecrator Hag</em>')} <em>Her hunt is silent until a bone snaps or flesh tears. Her victims never know to scream.</em>${FN('Flavor text, <em>Stalker Hag</em>')}</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/hags/hag_fetish_witch.png', 'right')}

    <p>Some hags carry bone totems, bundles of bone and tooth strung on a crooked stick.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/hags/hag_scythewielder.png', 'left')}

    <p>Others carry a scythe-bladed staff into the bog.</p>

    ${ART_BLEED('art/shadowmoor/creatures/hags/gwyllion_death_dance.png', 'center 12%')}

    <p>Among the hags are the <strong>gwyllions</strong>, who steal spirits. <em>When a graveyard is full, the gwyllions rattle the tombs and unleash the spirits into the sky.</em>${FN('Flavor text, <em>Beckon Apparition</em>')} Their favorite trap is the vanity mirror: <em>a bewitched piece of glass traps the looker's soul and does away with the body.</em>${FN('Flavor text, <em>Unmake</em>')} They can also be civil, after a fashion: <em>once your life and all your worldly possessions have been surrendered to her, a gwyllion can be surprisingly civilized.</em>${FN('Flavor text, <em>Nip Gwyllion</em>')} The Harvest Gwyllion <em>speaks only in vile epithets, spitting out curses and obscenities that harm others just by the hearing,</em>${FN('Flavor text, <em>Harvest Gwyllion</em>')} and her card shows her in a wheat field reaching toward a skeleton with a scythe.</p>

    <p>Noggles, the donkey-eared thieves of Shadowmoor, <em>believe that they were the first race ever to walk Shadowmoor. They don't "steal." They just take back what's rightfully theirs.</em>${FN('Flavor text, <em>Noggle Bandit</em>')} <em>Noggles have no concept of money, but they do have a high affinity for "shiny."</em>${FN('Flavor text, <em>Noggle Robber</em>')}</p>
  </div>
</section>

<!-- ========= MAP ========= -->
<section class="sect sun" id="map" data-screen-label="15 Map">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part VI</p>
      <h2>A Schematic <em>of the Plane</em></h2>
      <p class="kicker">Not to scale. The plane has no real cardinal directions, and Lorwyn's geography is a rumor that agrees with itself only about halfway.</p>
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
        <text x="50" y="66" font-family="Cormorant Garamond" font-style="italic" font-size="11" fill="currentColor" opacity=".55">a schematic, not to scale</text>

        

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
          <text x="478" y="324" font-family="Cormorant Unicase" font-size="9" fill="var(--kithkin-ink)">DUNDOOLIN</text>
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
          <text x="140" y="250" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="16" fill="var(--flamekin-ink)">Mount Tanufel highlands</text>
          <circle cx="150" cy="180" r="3.2" fill="var(--flamekin)" stroke="var(--flamekin-ink)"/>
          <text x="158" y="172" font-family="Cormorant Unicase" font-size="9" fill="var(--flamekin-ink)">MT. TANUFEL</text>
        </g>

        <!-- ============ CLOUD CRAGS / GIANTS (N) ============ -->
        <g opacity=".95">
          <path d="M 280 80 L 310 30 L 340 80 L 380 30 L 420 90 L 460 40 L 495 90 L 495 150 L 280 150 Z"
                fill="var(--giant)" opacity=".20" stroke="var(--giant-ink)" stroke-width=".8"/>
          <path d="M 300 45 q 10 -8 22 0 q 12 -6 20 2" stroke="var(--giant-ink)" stroke-width=".8" fill="none" opacity=".55"/>
          <path d="M 420 25 q 10 -6 20 0 q 10 -4 18 2" stroke="var(--giant-ink)" stroke-width=".8" fill="none" opacity=".5"/>
          <text x="390" y="120" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="15" fill="var(--giant-ink)">The High Peaks</text>
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
          <text x="230" y="362" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="11" fill="var(--kithkin-ink)" opacity=".85">Porringer Valley</text>
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

        <!-- edge scribble: "here be larger things", the unknown beyond -->
        <text x="500" y="630" text-anchor="middle" font-family="Cormorant Garamond" font-style="italic" font-size="9" fill="currentColor" opacity=".4">the map fades at its margins; the plane does not</text>
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
        <div class="tl-blurb">The Great Aurora arrives years ahead of schedule. The world inverts. Almost every mind forgets what it was.</div>
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
        <div class="tl-blurb">Oona dies at the Heart of Glen Elendra. Ashling's elemental departs. Maralen takes the crown. A twelve-hour day begins.</div>
      </div>

      <div class="tl-item above" style="left: 94%">
        <div class="tl-era">Era III</div>
        <div class="tl-title">Eclipsed</div>
        <div class="tl-blurb">About forty years later: the balance frays and Lorwyn and Shadowmoor bleed into one another. A third state appears, and it calcifies those who linger.</div>
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

    <p class="lede">Everything that happens in the Lorwyn cycle (Colfenor's patient scheming, Rhys's exile, Ashling's long pilgrimage, the Aurora itself) plays out on a plane that one being has shaped for millennia, and Colfenor's scheming is aimed squarely at her. That being is ${TERM('Oona')}, Queen of the Fae, and for most of the novels neither the heroes nor the reader quite understand how much of the plane she owns.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society: Oona "used the Great Aurora to perserve her memories and body between the cycles and grant herself control of the plane"')}</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/faeries/oona/oona_bloom.png', 'right', 'center 25%')}

    <p>Oona is a presence more than a single body, worn outward through her court and her avatars. Her home, ${TERM('Glen Elendra')}, is wrapped in glamers so dense that nearly anyone who approaches forgets why they came. Faeries return there routinely and unconsciously, on business no outsider is allowed to understand.</p>

    <div class="pull">
      "Dreams are fleeting. Reality even more so."
      <cite>Oona, Queen of the Fae</cite>
    </div>

    <h4 class="subheading">Dreamstuff, and why she wants it</h4>

    <p>Her fae collect <strong>${TERM('Dreamstuff','dreamstuff')}</strong>, a substance distilled from the minds of sleepers, from every corner of Lorwyn and route it back to Glen Elendra, where it sustains the queen and the fae themselves.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society: faeries "distill dreams into a sparkling energy that they can carry around like a bee carries pollen. This is used to sustain and power the queen and themselves."')}</p>

    <p>What Lorwyn does not realise is how much the queen has shaped the turning of the plane. The Aurora is a natural cycle (in her own words, "my formation of the natural world"), but she has stretched each day and each night to last centuries, and she has never let it change her. What she does with all that dreamstuff is not spelled out; the novel says only that she "used it however she pleased," much of it to wrap Glen Elendra in glamers.</p>

    <h4 class="subheading">Avatars</h4>

    ${ART_PORTRAIT('art/lorwyn/creatures/faeries/oko/oko_lorwyn_liege.png', 'left', 'center 8%')}

    <p>When Oona wants to act in the world without being <em>in</em> the world, she grows a vessel. The vessel looks like a person. It has a face and a name and, most importantly, a will it believes is its own. Oko, now known across the Multiverse as the trickster planeswalker, was her first, made to enact her will whenever the plane turned to Shadowmoor. His Lorwyn side rebelled almost at once; he sparked, left, and Lorwyn's trouble has been leaking into other planes ever since.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/faeries/maralen/maralen_fae_ascendant.png', 'right')}

    <p>${TERM('Maralen')} is the second. A hundred years before the Aurora was due, Oona felt a disaster from beyond the plane that would bring it early, and for the first time she feared the change might touch her. So she built someone to take it for her. She chose a template: a real Mornsong elf named Maralen, maid-in-waiting to the Perfect Peradala, whose bridal party the fae swallowed on a forest road. Oona killed her and grew a copy. The copy was not supposed to remember, or to want things, or to inherit the dead elf's stubbornness. Like Oko before her, she develops exactly the will she was not given, and that borrowed will, with the dead elf's moonglove in its hand, kills the queen.</p>

    <p>The Lorwyn novel opens on that murder. The bride's train halts at a Gilt Leaf road marker, and the maid is sent to find fresh moonglove for the marker-carving. While she is gone, vines wrap the throats of the whole Mornsong party and a false Peradala rises from the tangle. Maralen holds the vines off with the crushed flower, because they fear it, until a vine hauls her back from the river and stinging things overhead leave her bound and answering questions. Hold that image. Oona's own weapon was afraid of moonglove, and the elf who carried it did not know she still had it.</p>

    <h4 class="subheading">What she is, underneath</h4>

    <p>Strip away the court, the glamers, the cliques, the dreamstuff and the avatars, and what is Oona? The books are careful never quite to answer. She is older than the current Aurora cycle: she has been bending the Great Aurora to her use for millennia.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')} In the books she is the Great Mother, the Queen of the Fae, and even Maralen, made from her, never learns what Oona truly looks like.</p>

    <p>By the end of Eventide Oona's body is destroyed and Maralen sits in her chair with what was left of Oona's power inside her. The queen is not entirely gone. Where her flower was buried in the Creakwood, a forest of blossoming trees grew up, the Grove of the Aurora Queen, and her consciousness remains hidden, slowly recovering strength in secret while she searches for a way back to her throne.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')} Maralen took the mantle of queen and bound herself to Rhys with a death pact: if there is ever a sign that Oona might return, Rhys is to kill Maralen.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Society')}</p>

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

    <p class="lede">The novels open with Rhys, a Gilt Leaf ${TERM('Daen','daen')}, sent with his Hemlock Pack against boggarts who have gone inexplicably mad. He makes the controversial decision to hire the giant brothers Brion and Kiel as muscle, and his ${TERM('Taercenn','taercenn')} Nath is not impressed. Nath escalates to a three-pack extermination in Porringer Valley, and it goes catastrophically wrong: the packs are overrun, and Rhys, with his dying friend Gryffid in his arms, calls on Colfenor's power. The answering blast of yew magic kills the boggarts, most of the elves, and Rhys's horns. He is ${TERM('Eyeblight','eyeblight')}. Nath, marred in the same blast, hunts him. When Rhys kills Nath in Kinsbaile at the novel's end, snapping his neck and exposing the glamer that had hidden the taercenn's own disfigurement, Gryffid takes up the hunt in his place.</p>

    ${ART_PORTRAIT('art/lorwyn/creatures/elves/rhys_the_exiled.png', 'right')}

    <p>Rhys flees the Gilt Leaf toward his old mentor ${TERM('Colfenor')}, the last of the yews, who has been waiting for him. Colfenor offers cryptic counsel and a role Rhys does not yet understand in a plan decades in the making. The plan ends, at the first novel's climax, with the yew burning himself alive on Ashling's fire so that a sapling carrying his memory can rise in the world to come.</p>

    <p>Around Rhys's exile, the plot accretes. The flamekin pilgrim ${TERM('Ashling')} is on the Path, seeking her elemental in a years-long spiritual journey. The kithkin archer ${TERM('Brigid Baeli')}, on her cenn's orders, is shadowing Ashling, and will betray her own companions before the book is out. The merrow ${TERM('Sygg')} is ferrying everyone on the Wanderwine, keeping careful track of who owes what. And the ${TERM('Vendilion Clique')}, three faerie spies, are watching it all.</p>

    <p>At the centre of the web sits ${TERM('Maralen')}, a Mornsong elf who says she is cursed, knows what no elf should know, and draws the others to her. She was made, it will turn out, by Oona herself, from the body of a real Mornsong elf of that name whom the fae murdered in the novel's prologue: a vessel built a century early so that the Aurora would change the copy and not the queen. But the vessel is developing a will of her own, the dead elf's will.</p>

    <div class="pull">
      Maralen sent Veesa, Endry, and Iliona, the Vendilion clique, on the gravest of tasks.
      <cite>Maralen of the Mornsong</cite>
    </div>

    <p>At the climax of Morningtide, the Aurora arrives a century ahead of schedule. Ashling reaches her elemental at last and merges with it. The world turns. Sun becomes moon. Summer becomes winter. Nearly every mind on the plane forgets what it was, all but Oona, her vessel, the Vendilion clique, and one kithkin clutching a bone crescent.</p>
  </div>
</section>

<!-- ========= SHADOWMOOR ========= -->
<section class="sect shadow" id="shadowmoor" data-screen-label="19 Shadowmoor">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part X</p>
      <h2>The World <em>of Shadowmoor</em></h2>
      <p class="kicker">The same plane, inverted. Endless winter twilight. Almost nothing remembered.</p>
    </header>

    ${ART_BLEED('art/shadowmoor/places/forest_twilight_sunset.png')}

    <p class="lede">Shadowmoor is Lorwyn, but at the wrong end of the year. The sun never rises; the night never ends. Wild magic saturates the land and misfires constantly. The clachan becomes the ${TERM('Doun')}. The flamekin become ${TERM('Cinder','cinders')}. The kithkin's thoughtweft becomes the mindweft, a shared paranoia.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Kithkin')} The elves of the ${TERM('Wilt-Leaf')} become desperate guardians of beauty rather than its enforcers, though the practical difference is smaller than they would like to believe.</p>

    <div class="pull">
      The Aurora had lessened the kithkins' kindness, deepened their paranoia, and dulled their sense of pain.
      <cite>Endure</cite>
    </div>

    <p>Almost no one remembers Lorwyn. Almost no one remembers being anything other than what they are now. They fight as if they have always fought. The wild magic in the land is both everywhere and unreliable: anyone can draw on it, and any use risks catastrophic backlash. Scarecrows walk. The faeries alone are unchanged: they still harvest dreams for Oona, and Glen Elendra stays as lush as ever.</p>

    <p>Shadowmoor has no novel of its own; it is an anthology of nine stories. The longest, 'Ode to Mistmeadow Jack,' follows Brigid, the one kithkin who remembers, with Maralen, Sygg, and the Vendilion clique in the fortified ${TERM('Doun','doun')} of Mistmeadow. Rhys and Ashling do not appear in it at all. Colfenor is dead. But his plan is not.</p>
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

    <p class="lede">Shadowmoor is already burning when Eventide opens, less than a year after the Aurora. ${TERM('Ashling')}, having merged with her elemental at the turning, has become something else: the Destroyer, a colossus of living fire at the head of a ${TERM('Cinder','cinder')} horde that hails her as their Extinguisher. Whole douns are gone. Brigid, the one kithkin who remembers Lorwyn, holds Mistmeadow against her. Rhys remembers nothing: he is Second Safewright Rhys of the ${TERM('Wilt-Leaf')}, an honored elf of the safeholds, until the Sapling of Colfenor and the faerie Endry find him.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/flamekin/ashling/ashling_extinguisher.png', 'left')}

    <p>${TERM('Maralen')}, meanwhile, has stopped running. She has the Vendilion Clique as her agents, the <em>Crescent of Morningtide</em> by way of Brigid, and a rebellion of fae who have turned from their queen. She carries three forms of power that were never meant to coexist in one vessel: her own nature as Oona's construct, a fragment of Ashling's elemental fire imprisoned in her body, and the Crescent's binding to the Source of the Wanderbrine. She is barely holding together, and she is done hiding.</p>

    <h4 class="subheading">Cayr Ulios</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/scarecrows/reaper_king/reaper_king_a.png', 'right')}

    <p>The Wilt-Leaf capital, seat of the elf king and queen. Oona's vines have laced the whole city and hung every elf in it from the rafters, dreaming. Gryffid's returning pack finds the palace vestibule full of them. Above the city Oona greets Maralen in a puppet body wearing Maralen's own face: 'It seemed only fair. As the kithkin might say: I want to give you a sporting chance.' She confirms it all. A century before the Aurora was due she felt a disaster from beyond the world; she built a vessel to take the change in her place; and she has since decided the vessel was 'an unnecessary precaution… an ambitious error.' Maralen's answer is that Oona chose the wrong template, because the dead elf's strength lives on in her, and she leaves the decoy behind and flies for Glen Elendra.</p>

    <div class="pull">
      I am this world, my dear.
      <cite>Oona, to Maralen</cite>
    </div>

    <p>It is in this same conversation that she explains the Aurora. It is "not my creation so much as my formation of the natural world. Night into day, day into night. I've just stretched the days…" and Maralen finishes the thought: "And the night as well." That is the whole secret of the long Lorwyn summer and the long Shadowmoor night, from the one who did it. It also explains why Maralen's closing joke, an Aurora every twelve hours, has teeth.</p>

        <p>Meanwhile Gryffid, whom Rhys talked into turning back to save the city, has reached the palace. In the throne room the elf king and queen hang in the vines like the rest, but their vines keep growing upward, as if something were drawing off their light. Gryffid decides Oona is feeding on them and that the royals are all that is left. He leads a last charge, and his sword strikes home. The stored magic has nowhere to go. When the light clears there is nothing left of Gryffid or of the monarchs but ashes.</p>

    <p>At the Heart of Glen Elendra, Rhys, Ashling, and the Sapling make their assault. It goes badly. A vine from the Heart cuts the Sapling in two. Dying, she tells Rhys: 'Take my blood, and use it. This world must be allowed to find its own destiny without the interference of petty gods and old logs.'</p>

    <p>Rhys drains the Sapling's corpse of every drop of yew poison. Ashling, no longer the Destroyer, reaches deep and joins with her elemental one last time. From opposite sides they pour killing magic into the Heart. And Maralen, carried in by the Crescent, goes inside it and finishes Oona with the last petal of ${TERM('Moonglove','moonglove')} the murdered Maralen of the Mornsong was carrying on the day she was killed. Oona is dead. Kiel splits the corpse. Ashling's elemental departs and does not return.</p>

    <p>One small betrayal sits inside that victory. As Rhys and Ashling pour their magic into the Heart, Oona calls her child Endry, the faerie who left the Clique to follow the sapling, and reminds him that he swore never to betray her. She had already reached into his mind once and made him forget it. This time he refuses: "You're not my mother. I'm the last of the groundlings now. I'm an outcast." His sisters took the other road. Veesa and Iliona stay with Maralen and her rebel fae, and Iliona still thinks of him as the traitor who left them to save a tree. The first voice he hears after Oona goes quiet is Maralen's, asking for help out of the Heart.</p>

    <p>The summer world does not return. Neither does Shadowmoor hold. Glen Elendra blooms with newborn fae, and Maralen, who says 'I am Maralen. But what was left of Oona's power is within me,' is Queen of the Fae. She presses the last petal of moonglove into Rhys's hand: 'If I ever show signs of making day and night last for centuries at a time, you can feed it to me.' Then the horizon brightens. 'Think of it as having an Aurora every twelve hours or so.' Dawn comes to a world that is neither Lorwyn nor Shadowmoor, but something new. The Eclipsed era, nearly forty years later, finds that dawn unravelling, and Rhys still carrying the flower.</p>
  </div>
</section>

<!-- ========= ECLIPSED ========= -->
<section class="sect shadow" id="eclipsed" data-screen-label="21 Eclipsed">
  <div class="sect-inner">
    <header class="part-head">
      <p class="roman">Part XII</p>
      <h2>Lorwyn <em>Eclipsed</em></h2>
      <p class="kicker">About forty years later. Two realms bleed into each other. A third emerges, and slowly turns those who stay in it to husks.</p>
    </header>

    ${ART_BLEED('art/eclipsed/eclipsed_realms.png')}

    <p class="lede">The <em>Lorwyn Eclipsed</em> era picks up years after Eventide. With the Aurora's pendulum broken, Lorwyn and Shadowmoor no longer cleanly alternate. Instead, they overlap. In some regions sun holds; in others, the moon; and in a few dangerous seams between, both hang motionless at once. These are the ${TERM('Eclipsed Realm','Eclipsed realms')}.</p>

    <p>After Eventide, and before the eclipse of today, came a war. The Phyrexian Invasion nearly broke the Lorwyn elves: the compleated ones kept their old cruelty, and the rest allied with the other peoples and made a stand at Lys Alana.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, The Phyrexian Invasion')} Shadowmoor fought in scattered pieces, with boggart cavalry as the vanguard, and its isolationist kithkin led the last charge. The flamekin who turned inward and became rimekin, and the kithkin who cut themselves off from the thoughtweft, come out of that war.</p>

    <p>Linger too long in the eclipse and a person's two selves begin to merge. Everyone born on the plane has, in truth, lived twice: a sun-life in Lorwyn and a moon-life in Shadowmoor, two forms of one self, each remembering the other only murkily. The Aurora normally lets only one of those lives be "real" at a time. In the eclipsed seams, a person keeps the memories of the life outside and slowly regains the other's, and the two try to merge. The two selves cannot fully resolve, and the strain shows. The afflicted are called ${TERM('Calciform','calciforms')},${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Calciforms')} and the story Star-Crossed names the process calcification: they lose their desires and emotions and end as husks that cease movement entirely.</p>

    <h4 class="subheading">Reliquaries, and the one cure</h4>

    <p>Star-Crossed shows what calcification does. Rhain, an elf of Lorwyn, was caught in an eclipsed realm when an aurora shifted. Three calcified lines scored his face, and stone veins crept toward his heart for years. The only cure was ${TERM('Dawnglow','dawnglove')}, which is sacred in Shadowmoor. Cerys, a Shadowmoor elf who had been writing to him, fed it to him, crossing into Lorwyn with a reliquary that was failing. Her own calcification came fast, and the two ended as stone together at the border.</p>

    <p>The other defense is the ${TERM('Reliquary','reliquary')}, a rare, sacred lantern or pendant made from a piece of Eirdu or Isilu, which lets its bearer keep body and memories across a crossing.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Reliquaries')} A Reliquary of Dawn (Eirdu) resists Eventide; a Reliquary of Twilight (Isilu) resists Morningtide; carrying both is said to let you traverse eclipsed realms unchanged. Here Eventide and Morningtide are plain terms for the crossings themselves, Lorwyn to Shadowmoor and Shadowmoor to Lorwyn. In Episode 6 the elves march with torches topped in reliquaries that seem to cage sunlight.</p>

    <h4 class="subheading">The twin worldsouls</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/eclipsed/isilu_moon_worldsoul_crop.png', 'left')}

    <p>The Aurora used to hand off sun and moon cleanly, once a phase. Broken, the handoff is now carried physically by two winged, six-legged worldsouls that step out of the plane's oldest places. <strong>${TERM('Isilu')}</strong> carries the moon on its head, and its wings are fused behind it into a long dragging tail. Where it walks, Shadowmoor's night spreads. Isilu is supposed to be sleeping through most of the turning; it is the shape Shadowmoor takes to keep being Shadowmoor.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/eclipsed/eirdu_sun_worldsoul_crop.png', 'right')}

    <p><strong>${TERM('Eirdu')}</strong> carries the sun above its head and drags a long thorny tail behind it. Where it walks, Lorwyn's day spreads. It is the counterpart of Isilu, the shape Lorwyn takes to keep being Lorwyn.</p>

    ${ART_BLEED('art/shadowmoor/creatures/eclipsed/eirdu_isilu_conjunction.png')}

    <p>In the main story the two worldsouls meet once, on a battlefield (Episode 7). They circle and play-fight, Eirdu nuzzles Isilu, and Isilu heads home. Sun and moon share the sky while they are together, as they do in the eclipsed realms.</p>


    <h4 class="subheading">Those who worship them</h4>

    <p>The worldsouls are indifferent, but plenty of people are not. Many have taken to worshiping Eirdu and Isilu as deities.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Worship of the Worldsouls')} Eirdu's worshipers want the whole plane turned into Lorwyn. They wear armor with sunburst motifs and wings, and on cold days they hold the Festival of Idyllglare: a pyre at the center of an ancient dolmen, fed with crops and heirlooms while an Eirdu costume is paraded around it atop an elemental. Isilu's adherents want Shadowmoor everywhere. They wear moon-marked armor and clouded headwear, and keep vigils for their dead beneath the great stone structures. Every people holds those burial grounds sacred, and no violence is done there.</p>

    <h4 class="subheading">Firdochs</h4>

    ${ART_PORTRAIT('art/shadowmoor/creatures/eclipsed/firdoch_moon_forge.png', 'left')}

    <p>A ${TERM('Firdoch','firdoch')} is a stone creature of the kind that began wandering the land once Eirdu and Isilu emerged. They serve the two worldsouls in ways nobody has explained, carving paths and managing the boundaries between Lorwyn and Shadowmoor through elaborate wrestling. Card flavor gives the moment of waking: as Isilu drifts past in a swirl of shadow and moonlight, the strange, half-buried stones begin to wake.</p>

    ${ART_PORTRAIT('art/shadowmoor/creatures/flamekin/ashling/ashling_rekindled.png', 'left')}
    ${ART_PORTRAIT('art/shadowmoor/creatures/flamekin/ashling/ashling_rimebound.png', 'right')}

    <p>And Ashling returns, though not the way anyone had feared.</p>

    <p>Ashling was a key figure in the defeat of Oona, but her heinous actions as <strong>The Extinguisher</strong> caused her great anguish and suffering.${FN('The Legends of Lorwyn Eclipsed, Ashling')} At the start of the Pendulum Year, she departed the Blessed Nation.</p>

    <p>At the beginning of the ${TERM('Pendulum Year')} she departs the Blessed Nation in search of some way to reconcile her two selves and perhaps discover the fourth path, the stage beyond red, yellow and white flame that flamekin once only rumored. She travels to the <strong>Primal Beyond</strong>, the wild country beyond the old elf dominion, as a pilgrim yet again, seeking out an elemental force that might illuminate the truth. When she returns she has an answer.</p>

    <p>She has come to realize that the duality of the plane is something greater than a force to be resisted: a revelation that every being contains multitudes, and that the clash of light and shadow is the slow way a self arrives at deeper understanding.${FN('The Legends of Lorwyn Eclipsed, Ashling')} She has stopped trying to choose. Her form flickers between night and day with the plane, but her memory does not: "My memory is as unbroken as yours," she tells Maralen, and she is fluent now in both faces.</p>

    <p>In sun she is <strong>Ashling, Rekindled</strong>, the pilgrim and dancer she had been before the Extinguisher.</p>

    <p>In shadow she goes cold, and she has her own word for it. Stepping into Shadowmoor her flame turns blue and she says it plainly: <em>"By night, I'm what we call 'rimekin.'"</em></p>

    <p>The older account of the Path of Flame ended at a blue flame that consumed those who came near it.${FN('Rei Nakazawa, <em>In the Early Morningtide</em>, Wizards of the Coast, January 7, 2008')} The modern account gives the Path three states, incindiator, blazeform and soulstoke, and treats a fourth path as an old rumor.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Flamekin (Path of Flame)')} Many flamekin of the modern era assume that ${TERM('Rimekin','rimekin')} are that fourth path, though the old texts never said so. The two accounts meet at the same danger. Rimekin are flamekin whose emotions grew too hot to contain, who turned inward and put out their own heat instead of being consumed by it, and the <strong>Phyrexian Invasion</strong> made the change permanent for many.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Rimekin and Cinders')}</p>

    <p>In the Eclipsed era she runs the length of the Wanderwine and back again, carrying stories and secrets to the mountain, and she is glad to help strangers find their way. She fights when she has to.</p>

    <h4 class="subheading">The Eclipsed story, briefly</h4>

    <p>It begins with outworlders. Four students from the Strixhaven academy, on another plane, follow a little blue faerie through an Omenpath and fall into a sunlit Lorwyn meadow. A dolmen gate leads into a cave where Isilu sleeps; a student touches it, it wakes, and night floods the land. Brigid points the stranded students toward Maralen at Glen Elendra, with Rhys soon on their trail. High Perfect Morcant has other plans: she wants Isilu dead so endless day can restore the Gilt-Leaf, and she means to do it with a poison made from dawnglow.</p>

    <p>The faerie is Oko, Maralen's older brother and Oona's first avatar. He took Maralen for Oona reborn, tormented her, and brought outsiders to sow chaos. Rhys, sure that Oona is returning, wounds Maralen with moonglove; Kirol, Sanar and Lluwen take the dawnglow back from Morcant, and Oko uses it to heal her. Eirdu arrives and the two worldsouls wrestle without harm, Isilu heads home, Rhys's pact lapses and he dissolves into petals, and the visitors go back through an Omenpath, with Lluwen.</p>


    <h4 class="subheading">Where the old heroes are now</h4>
    <div class="now-grid">
      <article class="now-card">
        <h4>Rhys the Evermore</h4>
        <p class="now-role">Eyeblight · Friend · Conscience</p>
        <p>Kept alive by a magical pact with Maralen, who granted him immortality on one condition: that he poison her with moonglove should Oona's power ever begin to corrupt her. He stands vigilant at her side, dagger dressed and waiting for a day he prays never comes. In the main story that day arrives: Rhys, believing Maralen is becoming Oona reborn, strikes her with the moonglove dagger; she survives only on dawnglow, the pact between them breaks, and Rhys drifts away in a swirl of petals.</p>
      </article>
      <article class="now-card">
        <h4>Maralen, Steward-Queen of the Fae</h4>
        <p class="now-role">Glen Elendra · Crescent of Morningtide</p>
        <p>Rules from Glen Elendra alongside the twin worldsouls Eirdu and Isilu, carrying the peoples' wishes and quietly guiding the plane through its new age. Her powers are weak but growing. Every day, a little closer to Oona's old strength.</p>
      </article>
      <article class="now-card">
        <h4>Ashling, Rekindled</h4>
        <p class="now-role">Flamekin · Dancer · Rimekin by night</p>
        <p>Back from a pilgrimage into the Primal Beyond. Wanders the Wanderwine corridor carrying stories, at peace with the plane's duality. The Extinguisher is laid down. In sun, a joyful pilgrim; by night, rimekin, the same person gone blue and cold.</p>
      </article>
      <article class="now-card">
        <h4>Brigid</h4>
        <p class="now-role">Goldmeadow · Watch-Trainer</p>
        <p>Trains the city watch in Goldmeadow and lives without the yoke of the elves. Gruff to strangers, close to those she trusts. Her Shadowmoor self closes the village to outsiders, but never raises a hand, and wistfully remembers the pirate years under Sygg.</p>
      </article>
      <article class="now-card">
        <h4>Sygg, Schoolmaster</h4>
        <p class="now-role">Wanderwine · Family Man</p>
        <p>Given the mercantile trade to younger swimmers. Still quietly holds a grudge that the Crescent of Morningtide was never returned. His fins fail him now; his mind does not. In Shadowmoor he forgets his new family and pines for piracy.</p>
      </article>
      <article class="now-card">
        <h4>Auntie Grub</h4>
        <p class="now-role">Boggart Apothecary · Frog Familiar Smlurf</p>
        <p>Survived Oona's age, the elf culls, and the Phyrexian Invasion. Her parables now power boggart ritual. Her Shadowmoor self isolates and hoards her knowledge, and her potions turn chaotic, more potent and far more deadly.</p>
      </article>
      <article class="now-card">
        <h4>Oko</h4>
        <p class="now-role">Oona's First Avatar · Planeswalker</p>
        <p>Oona's first avatar, made before Maralen, and an abysmal failure. Rebelled, sparked, and has been the Multiverse's most notorious trickster ever since. His Shadowmoor self is calmer, quieter, and feeling responsible for the direction Lorwyn-Shadowmoor has taken in his absence.</p>
      </article>
      <article class="now-card">
        <h4>Eirdu &amp; Isilu</h4>
        <p class="now-role">Twin Worldsouls · Stewards of Balance</p>
        <p>Emerged after Oona fell, though many suspect they were always here, merely returned from the Primal Beyond. While one sleeps, the other walks, spreading its domain. Unknowable to ordinary folk and heedless of ordinary lives; they seek only balance.</p>
      </article>
    </div>

    <h4 class="subheading">New faces of the Eclipsed age</h4>
    <div class="now-grid">
      <article class="now-card">
        <h4>High Perfect Morcant</h4>
        <p class="now-role">Lys Alana · Tyrant</p>
        <p>De facto ruler of the elves, carrying the full weight of her people's fall. Harbours a covert ambition to yoke Lorwyn under elvish rule again. Her methods of bribery, assassination and misdirection bear little fruit, and her circle grows smaller every year. When outworlders arrive, she smells leverage.</p>
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
        <p>Slow to anger, at home in the pastures with her sheep. At peace with every people on the plane except the elves, who killed her father. When she meets one, she throws them. Far.</p>
      </article>
      <article class="now-card">
        <h4>Auntie Ool</h4>
        <p class="now-role">Boggart Witch · Curse-Smith</p>
        <p>A name spoken only in whispers. Conjures blight and stabilises wild magic into usable forms. Her curses are clever: perpetual insomnia for the boggart who woke her, a sentient judgmental wart for the one who spoke ill. She lives in a twig hut that leaps across the wilds on silent frog-legs.</p>
      </article>
      <article class="now-card">
        <h4>Doran, Silent Wanderer</h4>
        <p class="now-role">Shadowmoor Treefolk · Burdened Sage</p>
        <p>In Lorwyn he was a wizened scholar who collected magical knowledge across the plane. His Shadowmoor self is its twisted reflection: voiceless, cursed, wandering the dark woods where no one dares approach him. He is afraid to step back into the light for fear his hoarded memories will not survive the crossing.</p>
      </article>
      <article class="now-card">
        <h4>Ferrafor, Last Yew</h4>
        <p class="now-role">Sapling's Cutting · Shadowmoor Witch</p>
        <p>A secret cutting of the Sapling of Colfenor, saved by Rhys and nursed back to health by an elder treefolk. Woken through a ritual in which the one ritualist died so she might live, while fae attacked to hijack the rite. Raised in Shadowmoor without treefolk to temper her, she grew cruel and vindictive. In Lorwyn she would be kind and benevolent, seeding awakening everywhere she walks.</p>
      </article>
      <article class="now-card">
        <h4>The Reaper, King No More</h4>
        <p class="now-role">Scarecrow Ruler · Deposed</p>
        <p>Origin stories conflict: a rebel scarecrow grown strange under Shadowmoor's moon, or an amalgam of many scarecrows, all built from the remains of a single treefolk whose vengeful spirit joined them together. Whatever the truth, the planar merging cost it much of its domain. It spreads blight across the land in hopes of reclaiming its broken kingdom.</p>
      </article>
      <article class="now-card">
        <h4>The Mass of Mysteries</h4>
        <p class="now-role">Elemental of the Unknown</p>
        <p>Born the moment Oona fell. A boundless elemental that turns the certain into the uncertain with every step. Fallow fields bloom unnamed flora in its wake. Rivers fill with strange fish, then run dry. People happy in their lives leave home to find something more. It represents the potential of everything unknown.</p>
      </article>
    </div>

    <h4 class="subheading">Three more threads</h4>

    <p><em>Much Ado About Thieving</em> is Auntie Grub telling a tale, not a heist of her own. Four young boggarts (Flib, Lugg, Ygril and Naance) rob the dolmen lair of the foul-tempered giant Boeb of Boldwyr, because the border has swallowed a gentler giant's lair. Ygril drinks a stolen potion and swells to giant size, an eagle named Marrja blinds Boeb, and the survivors go home with the loot.</p>

    <p><em>Three Dreams, Three Truths</em> follows three treefolk (the rowan Erewaker, the ash Morecote and the elder Sigric) carrying a yew sapling to a Shadowmoor grove where dawnglove grows, to attempt a new Rising. Faeries who name themselves the Deffroad Clique goad Morecote into killing one of them, poison Sigric, and turn the ritual to their own ends. It resembles Ferrafor's origin on her card, though the story never names her and there all three treefolk die rather than one ritualist.</p>

    <p>Many Lorwyn faeries worship Queen Oura, who proclaimed herself queen by mimicking Oona.${FN('Planeswalker\'s Guide to Lorwyn Eclipsed, Faeries')} Maralen leaves the upstart alone, lest she become more like Oona herself.</p>
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
      <p>This cube is a love letter to the block many consider Magic's most beloved limited environment, and a welcome-back party for a plane that had gone unvisited for nearly twenty years. <em>Eclipsed</em> was a joy to open, but it committed to only five of the block's archetypes; iconic tribes like Faeries were left on the sidelines. This 360 restores all eight tribes and nearly every viable color-pair archetype (only black-white sits out; its Lorwyn-era identity never quite coalesced), pulling from <em>Lorwyn</em>, <em>Morningtide</em>, <em>Shadowmoor</em>, <em>Eventide</em>, and <em>Eclipsed</em> so every pairing has a lane to draft and a distinct game plan to win with.</p>
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
        <p>Merrow thrive on tap-and-untap. Lock down opposing creatures to slip through for damage, and squeeze extra value from tapping your own creatures as well: life gain, card selection, trigger chains. Islandwalk gives the tribe natural reach against any deck on blue sources.</p>
        <p class="arch-tip">Watch for: opponents who don't care about creature combat, since the engine needs targets to tap.</p>
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
        <p class="arch-archetype">Recursive attrition, <em>not aggro</em></p>
        <p>The common trap: Boggarts <em>look</em> like a red-deck swarm, but this archetype grinds. Sacrifice creatures for value, bring them back from the graveyard, and trade one-for-one until their hand is empty and yours still isn't. You win on resources, not on the clock.</p>
        <p class="arch-tip">Watch for: lifegain and exile effects. Drawing pure haste-lord cards? Wrong deck, so reroute.</p>
      </article>
      <article class="arch-card tribe flamekin">
        <div class="arch-head"><span class="arch-tribe">Flamekin / Cinders / Rimekin</span><span class="arch-color-id">U / R</span></div>
        <p class="arch-archetype">Evoke tempo, burn, and combos</p>
        <p>The Elemental-people tribe has changed colors across the block: Flamekin were mono-red in Lorwyn, Cinders turned BR in Shadowmoor, and the Rimekin of <em>Eclipsed</em> settled into UR, but the UR shell is where the archetype cashes in. Cheap mana-fixing enables big evoke plays, and cost reducers let you cheat fatties onto the table ahead of curve.</p>
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
      <p><strong>New to the cube?</strong> Pick a tribe you like and commit early. Hybrid mana lets you drift colors later, but the payoffs demand a critical mass of the right type line. <strong>Read signals</strong>: a late tribal lord or archetype engine means the lane is open. <strong>Changelings are glue</strong>: they count as every tribe, filling your ranks to cash in on tribal payoffs.</p>
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
      <input type="search" id="cube-search" class="cube-search" placeholder="Search a card name or a word in a type line…" aria-label="Search cube" />
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

    <input type="search" id="gloss-search" class="gloss-search" placeholder="Search the glossary: try 'Aurora', 'Maralen', 'doun'…" aria-label="Search glossary" />

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
