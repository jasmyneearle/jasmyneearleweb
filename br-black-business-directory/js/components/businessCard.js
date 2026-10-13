/* Renders one business card as an <li>. Pure: data in, element out. */
import { CATEGORIES, HAIR_TYPES, PRICE_RANGES } from "../data/businesses.js";
import {
  escapeHTML, formatDistance, formatYears, SERVICE_MODE_LABELS,
  instagramUrl, tiktokUrl, byId,
} from "../utils/helpers.js";

const categoryMap = byId(CATEGORIES);
const hairTypeMap = byId(HAIR_TYPES);

/**
 * @param {import("../data/businesses.js").Business} b
 * @returns {HTMLLIElement}
 */
export function createBusinessCard(b) {
  const cat = categoryMap[b.category];
  const li = document.createElement("li");
  li.className = "card";
  li.dataset.id = b.id;
  li.style.setProperty("--chip-bg", cat?.color ?? "var(--blush)");

  const detailsId = `details-${b.id}`;
  const ig = instagramUrl(b.socials?.instagram);
  const tt = tiktokUrl(b.socials?.tiktok);

  const hairTypes = (b.hairTypes ?? [])
    .map((id) => hairTypeMap[id]?.label)
    .filter(Boolean);

  li.innerHTML = `
    <div class="card__band">
      <span>${cat ? `${cat.emoji} ${escapeHTML(cat.label)}` : ""}</span>
      <span class="card__distance">${escapeHTML(formatDistance(b.distanceMiles))}</span>
    </div>

    <div class="card__body">
      <h3 class="card__name">${escapeHTML(b.name)}</h3>

      <div class="card__meta">
        <span class="tag" title="${escapeHTML(PRICE_RANGES[b.priceRange] ?? "")}">
          ${escapeHTML(b.priceRange)} · from $${b.startingPrice}
        </span>
        <span class="tag">${escapeHTML(formatYears(b.yearsExperience))}</span>
        <span class="tag">${escapeHTML(SERVICE_MODE_LABELS[b.serviceMode] ?? "")}</span>
        ${b.studentDeal ? `<span class="tag tag--deal">🎓 Student deal</span>` : ""}
      </div>

      <p class="card__desc">${escapeHTML(b.description)}</p>

      <div class="card__details" id="${detailsId}" hidden>
        <div>
          <h4>Services</h4>
          <ul>${b.specialties.map((s) => `<li>${escapeHTML(s)}</li>`).join("")}</ul>
        </div>
        ${hairTypes.length ? `
          <div>
            <h4>Hair types</h4>
            <p>${hairTypes.map(escapeHTML).join(", ")}</p>
          </div>` : ""}
        ${b.studentDeal ? `
          <div>
            <h4>Student deal</h4>
            <p>${escapeHTML(b.studentDeal)}</p>
          </div>` : ""}
        <p><strong>Area:</strong> ${escapeHTML(b.neighborhood)} · <strong>Owner:</strong> ${escapeHTML(b.owner)}</p>
      </div>

      <div class="card__actions">
        <button type="button" class="btn btn--ghost" data-action="toggle-details"
                aria-expanded="false" aria-controls="${detailsId}">
          Show details
        </button>
        <a class="btn btn--primary" href="${escapeHTML(b.bookingUrl)}" data-action="book">Book</a>
        ${ig ? `<a class="btn btn--ghost" href="${ig}" target="_blank" rel="noopener" aria-label="${escapeHTML(b.name)} on Instagram">IG</a>` : ""}
        ${tt ? `<a class="btn btn--ghost" href="${tt}" target="_blank" rel="noopener" aria-label="${escapeHTML(b.name)} on TikTok">TikTok</a>` : ""}
      </div>
    </div>
  `;

  return li;
}
