// ============================================================
// The Lorwyn / Shadowmoor Cube — interactive behaviors
// ============================================================
function initPrimer() {

  // ---- INTERACTIVE GLOSSARY ----
  const tip = document.getElementById("gloss-tip");
  const gloss = (window.GLOSSARY || []).reduce((m, g) => {
    [g.term, ...(g.also || [])].forEach(k => m[k.toLowerCase()] = g);
    return m;
  }, {});
  function showTip(el) {
    const key = (el.dataset.term || el.textContent).toLowerCase();
    const g = gloss[key];
    if (!g) return;
    tip.innerHTML =
      `<p class="gt-term">${g.term}</p><p>${g.def}</p>`;
    const r = el.getBoundingClientRect();
    const tw = 340;
    let x = r.left + r.width / 2 - tw / 2;
    x = Math.max(12, Math.min(window.innerWidth - tw - 12, x));
    let y = r.bottom + 10;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
    tip.setAttribute("data-visible", "true");
  }
  function hideTip() {
    tip.setAttribute("data-visible", "false");
  }
  // Attach to any .term element
  document.addEventListener("mouseover", e => {
    const t = e.target.closest(".term"); if (!t) return;
    showTip(t);
  });
  document.addEventListener("mouseout", e => {
    const t = e.target.closest(".term"); if (!t) return;
    hideTip();
  });
  document.addEventListener("focusin", e => {
    const t = e.target.closest(".term"); if (!t) return;
    showTip(t);
  });
  document.addEventListener("focusout", hideTip);

  // ---- GLOSSARY SEARCH ----
  const search = document.getElementById("gloss-search");
  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      // Toggle term rows (the plain <div> children of .gloss-group)
      document.querySelectorAll(".gloss-group").forEach(group => {
        let anyVisible = false;
        group.querySelectorAll(":scope > div").forEach(row => {
          if (row.classList.contains("gloss-letter")) return;
          const match = !q || row.textContent.toLowerCase().includes(q);
          row.style.display = match ? "" : "none";
          if (match) anyVisible = true;
        });
        // Hide the whole letter group (including its letter header) if nothing matches
        group.style.display = anyVisible ? "" : "none";
      });
    });
  }

}

// content.js injects the glossary on DOMContentLoaded; run after that fires.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    // Give content.js's own DOMContentLoaded handler a tick to run first.
    queueMicrotask(initPrimer);
  });
} else {
  initPrimer();
}
