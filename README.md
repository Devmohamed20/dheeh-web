# DHEEH | Health & Wellness Website

A modern, responsive static website for **DHEEH**, built faithfully from the official Google Stitch designs.

## Brand Identity & Colors
- **Primary:** `#445A4B` (Deep Botanical Green)
- **Secondary:** `#B59154` (Warm Gold Accent)
- **White:** `#FFFFFF`
- **Surface / Background:** `#F8FAF8`

## Pages Included
- **Home (`index.html`):** Brand introduction, guiding principles, core focus areas (Vitamins & Minerals, Nutritional Supplements, General Wellness, Healthy Lifestyle Support), commitment highlights, and full footer.
- **About Us (`about.html`):** Genesis narrative, mission & vision statements, four core values (Quality, Integrity, Customer Care, Continuous Improvement), and formulative philosophy.
- **FAQs (`faqs.html`):** Interactive search bar, topic filters (All, General, Products, Ordering, Support), smooth accordions with questions and answers, and concierge contact card.

## Key Features
- **Faithful Design Implementation:** Strict alignment with original Google Stitch screens and design systems.
- **Responsive Navigation:**
  - Desktop navigation bar with active indicators.
  - Responsive mobile drawer menu triggered by the header hamburger button.
  - App-style mobile bottom tab bar matching the Stitch mobile prototype.
- **Fully Functional FAQ Accordion:** Interactive open/close states, real-time search filtering, category filtering, and empty search state.
- **Self-Contained Design Assets:** DHEEH logo and high-resolution imagery stored locally in `assets/` with fallback support.
- **No Heavy Dependencies:** Pure HTML, CSS, JavaScript, and Tailwind CSS.
- **Cloudflare Pages Ready:** Includes `_headers` and `_redirects` configuration files.

## Running Locally
To preview the website locally:
```bash
node serve.js
```
Then open your browser at [http://localhost:3000](http://localhost:3000).

## Deploying to Cloudflare Pages
1. Push this folder to your GitHub or GitLab repository.
2. In the Cloudflare dashboard, go to **Workers & Pages** > **Create application** > **Pages**.
3. Connect your repository.
4. Set **Build command** to empty (none required) and **Build output directory** to `/` (or root).
5. Click **Save and Deploy**.
