# Black-Owned BR — LSU student directory

Static site: HTML + CSS + vanilla JS (ES modules). No build step.

## Structure
```
br-black-business-directory/
├── index.html
├── README.md
├── css/
│   └── styles.css            # design tokens in :root, mobile-first
├── js/
│   ├── main.js               # entry: state, render, events
│   ├── components/
│   │   └── businessCard.js   # data → card element
│   ├── data/
│   │   └── businesses.js     # CATEGORIES, ZONES, PRICE_RANGES, HAIR_TYPES, sample data
│   └── utils/
│       └── helpers.js        # escaping + formatting
└── assets/
    ├── images/
    └── icons/
```

## Run locally
ES modules don't load from `file://`, so serve the folder. In the IDE terminal:

```
npx serve .
# or
python3 -m http.server 5500
```
Then open the printed localhost URL.

## Planned modules
- `js/components/filters.js` — search, zone, price, hair type, student-deal toggle
- `js/utils/recentlyViewed.js` — listens for `business:viewed`, stores ids in localStorage

## Data note
All listings in `businesses.js` are fictional. Social handles start with `sample.`
