/* =========================================================
   main.js — app entry
   Flow: state → getVisibleBusinesses() → render()
   Next steps plug in here:
     • Filters: add fields to `state.filters`, extend getVisibleBusinesses()
     • Recently Viewed: listen for the "business:viewed" event (see bottom)
   ========================================================= */
import { businesses, CATEGORIES } from "./data/businesses.js";
import { createBusinessCard } from "./components/businessCard.js";

// ---------- State ----------
const state = {
  filters: {
    category: null, // CATEGORIES[].id or null for all
    // query: "",        ← search (next step)
    // zone: null,       ← proximity zone
    // priceRanges: [],  ← "$", "$$", ...
    // hairTypes: [],    ← HAIR_TYPES[].id
    // studentDealOnly: false,
  },
  sortBy: "distance",
};

// ---------- DOM refs ----------
const els = {
  rail: document.getElementById("category-rail"),
  grid: document.getElementById("business-grid"),
  count: document.getElementById("result-count"),
  empty: document.getElementById("empty-state"),
  clearBtn: document.getElementById("clear-filters"),
};

// ---------- Derivation ----------
export function getVisibleBusinesses(list = businesses, filters = state.filters) {
  let result = list;

  if (filters.category) {
    result = result.filter((b) => b.category === filters.category);
  }
  // Add more filters here, each as its own small `if` block.

  if (state.sortBy === "distance") {
    result = [...result].sort((a, b) => a.distanceMiles - b.distanceMiles);
  }
  return result;
}

// ---------- Rendering ----------
function renderCategoryRail() {
  const counts = businesses.reduce((acc, b) => {
    acc[b.category] = (acc[b.category] ?? 0) + 1;
    return acc;
  }, {});

  const chips = [{ id: null, label: "Everything", emoji: "✨", color: "var(--white)" }, ...CATEGORIES];

  els.rail.innerHTML = "";
  for (const cat of chips) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "category-chip";
    btn.dataset.category = cat.id ?? "";
    btn.style.setProperty("--chip-bg", cat.color);
    btn.setAttribute("aria-pressed", String(state.filters.category === cat.id));
    const count = cat.id ? counts[cat.id] ?? 0 : businesses.length;
    btn.innerHTML = `<span aria-hidden="true">${cat.emoji}</span> ${cat.label}
      <span class="category-chip__count">${count}</span>`;
    li.append(btn);
    els.rail.append(li);
  }
}

function renderGrid() {
  const visible = getVisibleBusinesses();
  els.grid.replaceChildren(...visible.map(createBusinessCard));
  els.count.textContent = `${visible.length} ${visible.length === 1 ? "business" : "businesses"}`;
  els.empty.hidden = visible.length > 0;
}

function render() {
  renderCategoryRail();
  renderGrid();
}

// ---------- State updates ----------
export function setFilter(key, value) {
  state.filters[key] = value;
  render();
}

function clearFilters() {
  state.filters.category = null;
  render();
}

// ---------- Events ----------
els.rail.addEventListener("click", (e) => {
  const chip = e.target.closest(".category-chip");
  if (!chip) return;
  const id = chip.dataset.category || null;
  setFilter("category", state.filters.category === id ? null : id);
});

els.grid.addEventListener("click", (e) => {
  const actionEl = e.target.closest("[data-action]");
  if (!actionEl) return;
  const card = actionEl.closest(".card");
  const id = card?.dataset.id;

  if (actionEl.dataset.action === "toggle-details") {
    const details = document.getElementById(actionEl.getAttribute("aria-controls"));
    const open = actionEl.getAttribute("aria-expanded") === "true";
    actionEl.setAttribute("aria-expanded", String(!open));
    actionEl.textContent = open ? "Show details" : "Hide details";
    details.hidden = open;
    if (!open) announceView(id);
  }

  if (actionEl.dataset.action === "book") announceView(id);
});

els.clearBtn.addEventListener("click", clearFilters);

/**
 * Fires a custom event whenever a user engages with a listing.
 * The Recently Viewed module will subscribe to this:
 *   document.addEventListener("business:viewed", (e) => track(e.detail.id))
 */
function announceView(id) {
  if (!id) return;
  document.dispatchEvent(new CustomEvent("business:viewed", { detail: { id } }));
}

// ---------- Init ----------
render();
