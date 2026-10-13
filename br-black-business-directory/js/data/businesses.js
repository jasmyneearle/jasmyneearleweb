/* =========================================================
   businesses.js — config + SAMPLE data
   ⚠️ All businesses, owners, and social handles below are FICTIONAL
   test data. Handles are prefixed "sample." so they won't resolve to
   real accounts. Replace with verified listings before launch.
   Neighborhoods and distances are real Baton Rouge-area places;
   distances are approximate driving miles from LSU's Memorial Tower.
   ========================================================= */

export const CATEGORIES = [
  { id: "hair",        label: "Hair",            emoji: "💇🏾♀️", color: "var(--cat-hair)" },
  { id: "nails",       label: "Nails",           emoji: "💅🏾",   color: "var(--cat-nails)" },
  { id: "lashes",      label: "Lashes & Brows",  emoji: "👁️",    color: "var(--cat-lashes)" },
  { id: "fashion",     label: "Fashion",         emoji: "🧥",    color: "var(--cat-fashion)" },
  { id: "photography", label: "Photography",     emoji: "📸",    color: "var(--cat-photography)" },
  { id: "food",        label: "Food & Drinks",   emoji: "🍽️",    color: "var(--cat-food)" },
];

/** Proximity zones, ordered nearest → farthest. maxMiles is inclusive. */
export const ZONES = [
  { id: "campus",  label: "Walk or bike from campus", maxMiles: 2,
    areas: ["Northgate", "Tigerland", "College Town", "Lakeshore"] },
  { id: "near",    label: "Quick drive (2–6 mi)",     maxMiles: 6,
    areas: ["Garden District", "Mid City", "Downtown", "Highland Rd", "Perkins/Acadian", "Port Allen"] },
  { id: "metro",   label: "Around BR (6–15 mi)",      maxMiles: 15,
    areas: ["Scotlandville / Southern U", "Siegen Ln", "Bluebonnet", "O'Neal Ln", "Baker", "Plaquemine"] },
  { id: "greater", label: "Worth the trip (15–25 mi)", maxMiles: 25,
    areas: ["Zachary", "Denham Springs", "Prairieville", "Gonzales", "Walker"] },
];

export const PRICE_RANGES = {
  "$":    "Under $40",
  "$$":   "$40–$100",
  "$$$":  "$100–$200",
  "$$$$": "$200+",
};

/** Used by stylists only. Keep ids stable; labels can change. */
export const HAIR_TYPES = [
  { id: "type-3", label: "Curly (3A–3C)" },
  { id: "type-4", label: "Coily (4A–4C)" },
  { id: "locs",   label: "Locs" },
  { id: "relaxed", label: "Relaxed / pressed" },
  { id: "wigs",   label: "Wigs & units" },
  { id: "mens",   label: "Men's cuts" },
];

/**
 * Business shape
 * @typedef {Object} Business
 * @property {string}   id               unique slug (used by Recently Viewed)
 * @property {string}   name
 * @property {string}   owner
 * @property {string}   category         CATEGORIES[].id
 * @property {string[]} specialties      short searchable services
 * @property {string}   description
 * @property {number}   yearsExperience
 * @property {"$"|"$$"|"$$$"|"$$$$"} priceRange
 * @property {number}   startingPrice    USD
 * @property {string}   zone             ZONES[].id
 * @property {string}   neighborhood
 * @property {number}   distanceMiles    from LSU
 * @property {"in-studio"|"mobile"|"both"|"storefront"|"online"} serviceMode
 * @property {string[]} [hairTypes]      HAIR_TYPES[].id (hair only)
 * @property {string|null} studentDeal
 * @property {{instagram?: string, tiktok?: string, website?: string}} socials
 * @property {string}   bookingUrl
 * @property {boolean}  acceptsWalkIns
 */

/** @type {Business[]} */
export const businesses = [
  // ---------- HAIR ----------
  {
    id: "crown-and-coil-studio",
    name: "Crown & Coil Studio",
    owner: "Janae Robertson",
    category: "hair",
    specialties: ["Knotless braids", "Silk press", "Trims", "Natural styling"],
    description: "Private suite studio known for clean parts and braids that last through finals week.",
    yearsExperience: 8,
    priceRange: "$$$",
    startingPrice: 120,
    zone: "near",
    neighborhood: "Perkins/Acadian",
    distanceMiles: 4.1,
    serviceMode: "in-studio",
    hairTypes: ["type-3", "type-4"],
    studentDeal: "15% off with LSU ID, Mon–Wed",
    socials: { instagram: "sample.crownandcoil", tiktok: "sample.crownandcoil" },
    bookingUrl: "#",
    acceptsWalkIns: false,
  },
  {
    id: "loc-lab-br",
    name: "The Loc Lab BR",
    owner: "Marcus Thibodeaux",
    category: "hair",
    specialties: ["Starter locs", "Retwist", "Loc repair", "Barrel twists"],
    description: "Loc-only studio. Starter locs to 10-year maintenance, with a calm, appointment-only setup.",
    yearsExperience: 12,
    priceRange: "$$",
    startingPrice: 75,
    zone: "metro",
    neighborhood: "Scotlandville / Southern U",
    distanceMiles: 9.4,
    serviceMode: "in-studio",
    hairTypes: ["type-4", "locs", "mens"],
    studentDeal: "$10 off retwists for college students",
    socials: { instagram: "sample.loclabbr", tiktok: "sample.loclabbr" },
    bookingUrl: "#",
    acceptsWalkIns: false,
  },
  {
    id: "fadez-on-highland",
    name: "Fadez on Highland",
    owner: "Darius Coleman",
    category: "hair",
    specialties: ["Fades", "Tapers", "Beard lineups", "Designs"],
    description: "Barbershop a few minutes from the north gates. Walk-ins welcome before 2 pm.",
    yearsExperience: 6,
    priceRange: "$",
    startingPrice: 30,
    zone: "campus",
    neighborhood: "Northgate",
    distanceMiles: 0.9,
    serviceMode: "storefront",
    hairTypes: ["type-4", "mens"],
    studentDeal: "$5 off Tue & Thu",
    socials: { instagram: "sample.fadezonhighland", tiktok: "sample.fadezbr" },
    bookingUrl: "#",
    acceptsWalkIns: true,
  },
  {
    id: "unit-by-kiara",
    name: "Units by Kiara",
    owner: "Kiara Batiste",
    category: "hair",
    specialties: ["Wig installs", "Custom units", "Frontal styling", "Color"],
    description: "Mobile wig installer. Comes to your apartment for game-day and formal installs.",
    yearsExperience: 4,
    priceRange: "$$$",
    startingPrice: 150,
    zone: "greater",
    neighborhood: "Denham Springs",
    distanceMiles: 16.5,
    serviceMode: "mobile",
    hairTypes: ["wigs", "relaxed"],
    studentDeal: null,
    socials: { instagram: "sample.unitsbykiara", tiktok: "sample.unitsbykiara" },
    bookingUrl: "#",
    acceptsWalkIns: false,
  },

  // ---------- NAILS ----------
  {
    id: "tiger-tips-nail-bar",
    name: "Tiger Tips Nail Bar",
    owner: "Aaliyah Washington",
    category: "nails",
    specialties: ["Gel-X", "Acrylic sets", "Nail art", "Pedicures"],
    description: "Bright nail bar with purple-and-gold game-day sets every fall Saturday.",
    yearsExperience: 5,
    priceRange: "$$",
    startingPrice: 55,
    zone: "near",
    neighborhood: "Highland Rd",
    distanceMiles: 3.2,
    serviceMode: "storefront",
    studentDeal: "Free nail art upgrade with LSU ID",
    socials: { instagram: "sample.tigertipsnails", tiktok: "sample.tigertipsnails" },
    bookingUrl: "#",
    acceptsWalkIns: true,
  },
  {
    id: "polished-by-dee",
    name: "Polished by Dee",
    owner: "Deja Simmons",
    category: "nails",
    specialties: ["Structured gel", "Natural nail care", "Minimal art"],
    description: "Home studio focused on natural nail health and clean, minimal sets.",
    yearsExperience: 3,
    priceRange: "$",
    startingPrice: 35,
    zone: "campus",
    neighborhood: "College Town",
    distanceMiles: 1.6,
    serviceMode: "in-studio",
    studentDeal: "Bring a friend, both get $5 off",
    socials: { instagram: "sample.polishedbydee", tiktok: "sample.polishedbydee" },
    bookingUrl: "#",
    acceptsWalkIns: false,
  },

  // ---------- LASHES ----------
  {
    id: "flutter-lash-lounge",
    name: "Flutter Lash Lounge",
    owner: "Brianna Joseph",
    category: "lashes",
    specialties: ["Classic sets", "Hybrid", "Volume", "Brow lamination"],
    description: "Certified lash artist offering fills on a two-week schedule that fits the semester.",
    yearsExperience: 7,
    priceRange: "$$$",
    startingPrice: 110,
    zone: "near",
    neighborhood: "Mid City",
    distanceMiles: 4.8,
    serviceMode: "in-studio",
    studentDeal: "$15 off first full set",
    socials: { instagram: "sample.flutterlashbr", tiktok: "sample.flutterlashbr" },
    bookingUrl: "#",
    acceptsWalkIns: false,
  },

  // ---------- FASHION ----------
  {
    id: "bayou-thread-co",
    name: "Bayou Thread Co.",
    owner: "Jordan & Simone Hebert",
    category: "fashion",
    specialties: ["Streetwear", "Custom embroidery", "Game-day fits", "Org merch"],
    description: "Small-batch streetwear and custom embroidery for student orgs and Greek life.",
    yearsExperience: 5,
    priceRange: "$$",
    startingPrice: 45,
    zone: "near",
    neighborhood: "Downtown",
    distanceMiles: 3.6,
    serviceMode: "online",
    studentDeal: "10% off student org orders of 20+",
    socials: { instagram: "sample.bayouthreadco", tiktok: "sample.bayouthreadco", website: "#" },
    bookingUrl: "#",
    acceptsWalkIns: false,
  },
  {
    id: "second-line-vintage",
    name: "Second Line Vintage",
    owner: "Renée Augustine",
    category: "fashion",
    specialties: ["Vintage", "Thrift", "Styling sessions", "Formal rentals"],
    description: "Curated vintage racks plus formal dress rentals for galas and grad photos.",
    yearsExperience: 10,
    priceRange: "$",
    startingPrice: 15,
    zone: "near",
    neighborhood: "Garden District",
    distanceMiles: 2.9,
    serviceMode: "storefront",
    studentDeal: null,
    socials: { instagram: "sample.secondlinevintage", tiktok: "sample.secondlinevtg" },
    bookingUrl: "#",
    acceptsWalkIns: true,
  },

  // ---------- PHOTOGRAPHY ----------
  {
    id: "golden-hour-by-tae",
    name: "Golden Hour by Tae",
    owner: "Taelor Jenkins",
    category: "photography",
    specialties: ["Grad photos", "Headshots", "Couples", "Events"],
    description: "Grad sessions at the Quad, Memorial Tower and the lakes. Books out by March.",
    yearsExperience: 6,
    priceRange: "$$$",
    startingPrice: 175,
    zone: "campus",
    neighborhood: "Lakeshore",
    distanceMiles: 1.2,
    serviceMode: "mobile",
    studentDeal: "Group grad sessions from $90 per person",
    socials: { instagram: "sample.goldenhourbytae", tiktok: "sample.goldenhourbytae", website: "#" },
    bookingUrl: "#",
    acceptsWalkIns: false,
  },
  {
    id: "flashpoint-visuals",
    name: "Flashpoint Visuals",
    owner: "Andre Pierre",
    category: "photography",
    specialties: ["Event coverage", "Brand content", "Short-form video"],
    description: "Photo and video for parties, step shows and small-business launches.",
    yearsExperience: 9,
    priceRange: "$$$$",
    startingPrice: 250,
    zone: "greater",
    neighborhood: "Zachary",
    distanceMiles: 17.8,
    serviceMode: "mobile",
    studentDeal: null,
    socials: { instagram: "sample.flashpointvisuals", tiktok: "sample.flashpointvis" },
    bookingUrl: "#",
    acceptsWalkIns: false,
  },

  // ---------- FOOD & DRINKS ----------
  {
    id: "mamas-plate-kitchen",
    name: "Mama's Plate Kitchen",
    owner: "Gloria Landry",
    category: "food",
    specialties: ["Soul food", "Plate lunches", "Red beans Monday", "Catering"],
    description: "Plate lunches and Sunday dinners. Red beans and rice every Monday, as it should be.",
    yearsExperience: 15,
    priceRange: "$",
    startingPrice: 12,
    zone: "near",
    neighborhood: "Mid City",
    distanceMiles: 5.1,
    serviceMode: "storefront",
    studentDeal: "Free drink with LSU ID",
    socials: { instagram: "sample.mamasplatebr", tiktok: "sample.mamasplatebr" },
    bookingUrl: "#",
    acceptsWalkIns: true,
  },
  {
    id: "sip-and-sweeten",
    name: "Sip & Sweeten",
    owner: "Courtney Mitchell",
    category: "food",
    specialties: ["Smoothies", "Loaded teas", "Brunch boxes", "Pop-ups"],
    description: "Smoothie and brunch pop-up that parks near Tigerland most Friday nights.",
    yearsExperience: 2,
    priceRange: "$",
    startingPrice: 8,
    zone: "campus",
    neighborhood: "Tigerland",
    distanceMiles: 1.8,
    serviceMode: "mobile",
    studentDeal: "Punch card: 10th drink free",
    socials: { instagram: "sample.sipandsweeten", tiktok: "sample.sipandsweeten" },
    bookingUrl: "#",
    acceptsWalkIns: true,
  },
  {
    id: "smoke-and-roux",
    name: "Smoke & Roux",
    owner: "Terrence Bourgeois",
    category: "food",
    specialties: ["BBQ", "Gumbo", "Boudin", "Tailgate catering"],
    description: "Smoked meats and gumbo with a tailgate catering menu for home games.",
    yearsExperience: 11,
    priceRange: "$$",
    startingPrice: 16,
    zone: "greater",
    neighborhood: "Prairieville",
    distanceMiles: 18.2,
    serviceMode: "storefront",
    studentDeal: null,
    socials: { instagram: "sample.smokeandroux", tiktok: "sample.smokeandroux" },
    bookingUrl: "#",
    acceptsWalkIns: true,
  },
];
