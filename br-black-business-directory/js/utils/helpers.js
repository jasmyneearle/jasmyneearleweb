/* Small, pure helpers. No DOM side effects here. */

/** Escape text before inserting into innerHTML templates. */
export function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function formatDistance(miles) {
  return miles < 1 ? "< 1 mi from LSU" : `${miles.toFixed(1)} mi from LSU`;
}

export function formatYears(years) {
  return years === 1 ? "1 yr experience" : `${years} yrs experience`;
}

export const SERVICE_MODE_LABELS = {
  "in-studio": "In studio",
  "mobile": "Comes to you",
  "both": "Studio or mobile",
  "storefront": "Storefront",
  "online": "Online shop",
};

export function instagramUrl(handle) {
  return handle ? `https://www.instagram.com/${encodeURIComponent(handle)}/` : null;
}

export function tiktokUrl(handle) {
  return handle ? `https://www.tiktok.com/@${encodeURIComponent(handle)}` : null;
}

/** Build a lookup map from an array of {id,...} objects. */
export function byId(list) {
  return Object.fromEntries(list.map((item) => [item.id, item]));
}
