## DELVI Marketing Pages – Lovable Rebuild Spec

This document describes the behavior, structure, and design intent of the following React pages so Lovable can recreate them with a modern, consistent design:

- `AboutUs.tsx`
- `Careers.tsx`
- `FAQ.tsx`
- `Features.tsx`
- `Founders.tsx`
- `News.tsx`
- `NotFound.tsx`
- `RideBooking.tsx`
- `Statistics.tsx`
- `WhyUs.tsx`

Lovable is free to improve the visuals, layout, and component structure, but **must keep the same behavior, routes, and translation keys** so the rest of the app continues to work.

---

## Global Conventions (All Pages)

- **Tech & Libraries**
  - React 18 + TypeScript.
  - UI layout: `react-bootstrap` (`Container`, `Row`, `Col`, `Card`, etc.).
  - Custom UI: `Button` and `Badge` from `@/components/ui`.
  - Icons: `lucide-react`.
  - Routing: `react-router-dom` with `Link`.
  - Translations: custom `useTranslation` hook returning `{ t, locale }`.
  - Language toggle: `LanguageSwitcher` component in the header.

- **Internationalization**
  - All user-facing text should come from the `t` object, e.g. `t.aboutUs.hero.title`, `t.careers.hero.subtitle`, etc.
  - Arabic RTL support:
    - Each page’s outer wrapper sets:
      ```tsx
      <div dir={locale === "ar" ? "rtl" : "ltr"}>
      ```
  - Some content (e.g. some job descriptions, founder bios, news titles) is currently **hard‑coded Arabic text**. You can keep those as inline text or migrate them into translations, but behavior should not break.

- **Dark Mode**
  - **Persistent theme** stored in `localStorage` under key `delvi-theme` (`"dark"` or `"light"`).
  - On initial state:
    - Read `localStorage.getItem("delvi-theme")`.
    - If `"dark"`, add `document.documentElement.classList.add("dark")`, otherwise remove it.
  - `useEffect` on `isDarkMode` keeps:
    - `document.documentElement.classList` in sync.
    - `localStorage.setItem("delvi-theme", isDarkMode ? "dark" : "light")`.
  - Each page has a dark‑mode toggle button in the header:
    - Uses `Sun` icon for dark mode, `Moon` icon for light mode.
    - Tooltip / `title` and `aria-label` from `t.common.switchToLight` / `t.common.switchToDark`.

- **Header Pattern (Most Pages)**
  - `sticky-top` header (or `fixed` for main home page) with:
    - Left:
      - Back button: `Link` to `/` with `ArrowLeft` icon and label `t.common.backToHome`, **or**
      - DELVI logo alone (FAQ page).
    - Center/Left: DELVI logo (`img` from a CDN URL).
    - Right (`Col xs="auto"`):
      - `LanguageSwitcher`.
      - Dark mode toggle button.
  - Background and border colors depend on `isDarkMode`:
    - Dark: `bg-brand-navy-light border-secondary`.
    - Light: `bg-white border-light`.

- **Footer Pattern (Most Pages)**
  - Centered footer with:
    - DELVI logo (except on FAQ / NotFound where logo may be omitted).
    - Text: `&copy; 2024 DELVI. {t.footer.copyright}`.
  - Background:
    - Dark: `bg-brand-navy-dark border-secondary`.
    - Light: `bg-white border-light`.

- **Design Freedom for Lovable**
  - You may:
    - Split large pages into smaller components.
    - Create shared layout components (common header, footer, hero, CTA, etc.).
    - Upgrade spacing, typography, animations, and responsiveness.
  - You must NOT:
    - Break the translation keys (keep calls like `t.aboutUs.story.title` etc.).
    - Remove the dark‑mode persistence or RTL behavior.
    - Change routing destinations (e.g. `/careers`, `/book-ride`) without updating router config.

---

## `AboutUs.tsx` – About the Company

- **Route & Purpose**
  - Route: `/about`.
  - Goal: present company mission, vision, values, journey timeline, team values, and a join‑us call‑to‑action.

- **State & Behavior**
  - `const { t, locale } = useTranslation();`
  - `const [isDarkMode, setIsDarkMode] = useState(() => { ... })` with localStorage + `document.documentElement.classList`.
  - `useEffect` syncs `delvi-theme` and `document.documentElement.classList`.
  - `storyTimeline` array:
    - 4 items (`2019`, `2020`, `2021`, `2024`).
    - Each item:
      - `year`: `t.aboutUs.story.year2019` / `year2020` / `year2021` / `year2024`.
      - `icon`: one of `Clock`, `Building`, `Award`, `Users`.
      - `description`: `t.aboutUs.story.year2019Desc`, etc.

- **Layout Structure**
  1. **Root Wrapper**
     - `<div className="min-h-screen ..." dir={locale === "ar" ? "rtl" : "ltr"}>`
     - Background: dark mode → `bg-brand-navy`, light mode → `bg-light`.

  2. **Header**
     - Sticky header with:
       - Back button to `/`:
         - `ArrowLeft` icon + `t.common.backToHome`.
       - DELVI logo image.
       - `LanguageSwitcher`.
       - Dark mode toggle button.

  3. **Hero Section**
     - Full‑width navy gradient background (`#1e3a8a` → `#1e293b`).
     - `Badge`:
       - `Users` icon.
       - Text: `t.general.aboutUs`.
     - Title: `t.aboutUs.hero.title`.
     - Subtitle: `t.aboutUs.hero.subtitle`.

  4. **Mission / Vision / Values**
     - 3 cards laid out in grid (1 / 2 / 3 columns depending on screen).
     - Cards:
       - Mission: `Target` icon, `t.aboutUs.mission.title` + `t.aboutUs.mission.description`.
       - Vision: `Globe` icon, `t.aboutUs.vision.title` + `t.aboutUs.vision.description`.
       - Values: `Heart` icon, `t.aboutUs.values.title` + `t.aboutUs.values.description`.
     - Cards adjust background for dark mode (`bg-brand-navy-light` vs `bg-white`).

  5. **Our Story Section**
     - Title: `t.aboutUs.story.title`.
     - Subtitle: `t.aboutUs.story.subtitle`.
     - Two columns:
       - **Left**: mapping over `storyTimeline`:
         - Each item: orange circular icon + year heading + description paragraph.
       - **Right**: orange stats card:
         - Title: `t.aboutUs.story.achievements`.
         - Rows:
           - `t.aboutUs.story.completedTrips` → value `+10M`.
           - `t.aboutUs.story.appRating` → value `4.8/5`.
           - `t.aboutUs.story.provinces` → value `15`.
           - `t.aboutUs.story.satisfaction` → value `96%`.

  6. **Team Values Section**
     - Title: `t.aboutUs.teamValues.title`.
     - Subtitle: `t.aboutUs.teamValues.subtitle`.
     - 4 items (grid of icons with text):
       - `Shield` → `t.aboutUs.teamValues.safety` / `safetyDesc`.
       - `Users` → `customerService` / `customerServiceDesc`.
       - `Target` → `quality` / `qualityDesc`.
       - `Globe` → `innovation` / `innovationDesc`.

  7. **CTA Section**
     - Orange gradient background.
     - Title: `t.aboutUs.cta.title`.
     - Subtitle: `t.aboutUs.cta.subtitle`.
     - Buttons:
       - Primary: `Link` to `/careers`, text `t.aboutUs.cta.joinTeam`.
       - Secondary: `Link` to `/book-ride`, text `t.aboutUs.cta.startJourney`.

  8. **Footer**
     - Logo + `&copy; 2024 DELVI. {t.footer.copyright}`.

---

## `Careers.tsx` – Careers & Jobs

- **Route & Purpose**
  - Route: `/careers`.
  - Goal: explain why DELVI is a good workplace, show open positions, benefits, hiring process, and a strong CTA.

- **State & Behavior**
  - `const { t, locale } = useTranslation();`
  - Dark mode (same pattern as `AboutUs`).
  - `jobs` array (static, currently Arabic content, not from translations):
    - Fields: `title`, `department`, `location`, `type`, `salary`, `icon`, `description`, `requirements: string[]`.
  - `whyWorkWithUs`:
    - Items with `icon`, `bgColor`, `title`, `desc` from `t.careers.why.growth | environment | salary | flexibility`.
  - `benefits`:
    - 6 items with `icon`, `bgColor`, `title`, `desc` from `t.careers.benefits.*`.
  - `processSteps`:
    - 4 steps from `t.careers.process.step1..step4`.

- **Layout Structure**
  1. **Header**
     - Same as `AboutUs` (back to `/`, logo, language & theme toggles).

  2. **Hero Section**
     - Navy gradient.
     - Badge with `Briefcase` icon + `t.careers.hero.badge`.
     - Title: `t.careers.hero.title` with highlight `t.careers.hero.titleHighlight`.
     - Subtitle: `t.careers.hero.subtitle`.

  3. **Why Work With Us**
     - Title: `t.careers.why.title`.
     - Subtitle: `t.careers.why.subtitle`.
     - 4 cards from `whyWorkWithUs`:
       - Colored icon circle.
       - Title `item.title`.
       - Description `item.desc`.

  4. **Open Positions**
     - Title: `t.careers.positions.title`.
     - Subtitle: `t.careers.positions.subtitle`.
     - For each job:
       - Card layout with:
         - Icon (`Code`, `Megaphone`, `Users`, `TrendingUp`, `Zap`, `Heart`).
         - Title (Arabic string).
         - Department badge.
         - Info row: location (`MapPin`), job type (`Clock`), salary (`DollarSign`).
         - Description and bullet list of `requirements`.
         - `Apply` button with text `t.careers.positions.applyNow`.

  5. **Benefits**
     - Title: `t.careers.benefits.title`.
     - Subtitle: `t.careers.benefits.subtitle`.
     - 6 benefits with icon circles and text from `t.careers.benefits.*`.

  6. **Application Process**
     - Title: `t.careers.process.title`.
     - Subtitle: `t.careers.process.subtitle`.
     - 4 numbered steps (1–4) with `step.title` and `step.desc`.

  7. **CTA Section**
     - Orange gradient.
     - Title: `t.careers.cta.title`.
     - Subtitle: `t.careers.cta.subtitle`.
     - Buttons (no routing change right now):
       - Browse jobs: `t.careers.cta.browseJobs`.
       - Submit CV: `t.careers.cta.submitCV`.

  8. **Footer**
     - Logo + copyright.

---

## `FAQ.tsx` – Frequently Asked Questions

- **Route & Purpose**
  - Route: `/FAQ`.
  - Goal: show an interactive FAQ list with expand/collapse behavior and provide contact/help CTAs.

- **State & Behavior**
  - `const { t, locale } = useTranslation();`
  - `const [openItems, setOpenItems] = useState<number[]>([]);`
  - Toggle logic:
    - `toggleItem(index)` adds or removes `index` from `openItems`.
  - Dark mode behavior as usual.

- **Data**
  - `faqData` array:
    - `question`: `t.faq.questions.q1`…`q8`.
    - `answer`: `t.faq.questions.a1`…`a8`.

- **Layout Structure**
  1. **Header**
     - Logo on the left (links to `/`).
     - On the right:
       - `LanguageSwitcher`.
       - Dark mode toggle.
       - Outlined “Back to Home” button:
         - `ArrowLeft` icon + `t.common.backToHome`.

  2. **Hero**
     - Navy gradient.
     - Centered circular orange icon with `HelpCircle`.
     - Title: `t.faq.hero.title`.
     - Subtitle: `t.faq.hero.subtitle`.

  3. **FAQ List**
     - Vertical list of `Card`s.
     - Each card:
       - Header button:
         - Click toggles `openItems`.
         - Shows `ChevronDown` or `ChevronUp`.
         - Question: `item.question`.
       - If open:
         - Answer area with `item.answer`.

  4. **Contact Card**
     - Orange background.
     - Title: `t.faq.contact.title`.
     - Text: `t.faq.contact.description`.
     - Buttons:
       - Primary: `MessageCircle` + `t.faq.contact.contactUs`.
       - Secondary outline: `Headphones` + `t.faq.contact.helpCenter`.

  5. **Footer**
     - `&copy; 2024 DELVI. {t.footer.copyright}`.

---

## `Features.tsx` – Features Overview

- **Route & Purpose**
  - Route: `/features`.
  - Goal: present all main features for riders, advanced app capabilities, and a section focused on drivers, with CTA.

- **State & Behavior**
  - `const { t, locale } = useTranslation();`
  - Dark mode as usual.
  - `mainFeatures` array:
    - Each item has:
      - `icon` (e.g. `Clock`, `Shield`, `DollarSign`, `Navigation`, `CreditCard`, `HeadphonesIcon`).
      - `title`, `description` from `t.features.main.*`.
      - `points: string[]` from `t.features.main.[xxx].point1..point3`.
  - `advancedFeatures` array:
    - Items from `t.features.advanced.*` (smart app, rating system, direct communication, visual verification).
  - `driverFeatures` array:
    - Items from `t.features.drivers.*` (fair income, advanced app, community, flexibility).

- **Layout Structure**
  1. **Header**
     - Same pattern: back to `/`, logo, language toggle, dark mode toggle.

  2. **Hero Section**
     - Navy gradient.
     - Badge: `Zap` icon + `t.navigation.features`.
     - Title: `t.features.hero.title`.
     - Subtitle: `t.features.hero.subtitle`.

  3. **Main Features Grid**
     - Title: `t.features.main.title`.
     - Subtitle: `t.features.main.subtitle`.
     - Grid of feature cards:
       - Icon circle.
       - Title and description.
       - Bullet list of `points`:
         - Each line with `CheckCircle` icon.
         - Text uses `point.replace("• ", "")` to remove bullet character from translations.

  4. **Advanced Features**
     - Two columns:
       - Left: vertical list of 4 advanced features:
         - Icon + title + description.
       - Right: orange stats card with 4 metrics:
         - Labels from `t.features.advanced.stats.*` and hardcoded percentages:
           - Satisfaction `98%`.
           - Accuracy `95%`.
           - Safety `99%`.
           - Responsiveness `92%`.

  5. **For Drivers Section**
     - Title: `t.features.drivers.title`.
     - Subtitle: `t.features.drivers.subtitle`.
     - 4 cards:
       - Icon circle (e.g. `DollarSign`, `Wifi`, `Users`, `CheckCircle`).
       - Title and description from `t.features.drivers.*`.

  6. **CTA Section**
     - Orange gradient.
     - Title: `t.features.cta.title`.
     - Subtitle: `t.features.cta.subtitle`.
     - Buttons:
       - `/book-ride` with `t.features.cta.bookRide`.
       - `/careers` with `t.features.cta.joinDriver`.

  7. **Footer**
     - Logo + copyright.

---

## `Founders.tsx` – Founders & Leadership

- **Route & Purpose**
  - Route: `/founders`.
  - Goal: present the founders and co‑founders, their backgrounds and achievements, plus the company vision and milestones.

- **State & Behavior**
  - `const { t, locale } = useTranslation();`
  - Dark mode as usual.
  - `founders` array (2 main founders):
    - Static Arabic `name`, `role`, `description`.
    - `bgGradient` to hint whether the header is orange or navy.
    - `achievements: string[]` (static Arabic bullet points).
  - `coFounders` array (3 people):
    - Static Arabic `name`, `role`, `description`, and `badge` text.

- **Layout Structure**
  1. **Header**
     - Back to `/`, logo, language & theme toggles.

  2. **Hero Section**
     - Navy gradient.
     - Badge: `Users` icon + `t.navigation.founders`.
     - Title: `t.home.founders.title`.
     - Subtitle: `t.home.founders.subtitle`.

  3. **Main Founders**
     - For each founder:
       - Card with:
         - Top gradient band (orange or navy).
         - Centered round white icon (`Users` or `Lightbulb`).
         - Name (Arabic), role, description (static).
         - Achievements list:
           - Each row with `GraduationCap` icon and text from `achievements[]`.
         - Social buttons:
           - `LinkedIn`, `Twitter`, `Mail` button.
           - Email label is `locale === "ar" ? "البريد" : "Email"`.

  4. **Co‑Founders Section**
     - Title: `t.founders.coFounders.title`.
     - Subtitle: `t.founders.coFounders.subtitle`.
     - 3 cards:
       - Colored circle icon per index (`Building`, `Award`, `Users`).
       - Name, role, description (static Arabic).
       - Badge with education text from `coFounder.badge`.

  5. **Vision & Journey**
     - Title: `t.founders.vision.title`.
     - Subtitle: `t.founders.vision.subtitle`.
     - Main card:
       - Left:
         - Heading `t.founders.vision.fromIdea`.
         - Paragraphs `t.founders.vision.p1` and `p2`.
       - Right:
         - Orange sub‑card listing milestones:
           - `milestone1` … `milestone6`.

  6. **CTA Section**
     - Orange gradient.
     - Title: `t.founders.cta.title`.
     - Subtitle: `t.founders.cta.subtitle`.
     - Buttons:
       - `/careers` with `t.founders.cta.joinTeam`.
       - `/book-ride` with `t.founders.cta.bePartOfSuccess`.

  7. **Footer**
     - Logo + copyright.

---

## `News.tsx` – News & Updates

- **Route & Purpose**
  - Route: `/news`.
  - Goal: show featured announcements, smaller updates, and a newsletter subscription form.

- **State & Behavior**
  - `const { t, locale } = useTranslation();`
  - Dark mode as usual.
  - `featuredNews` array:
    - Mixed static Arabic titles/descriptions with translation‑based time strings.
    - `type` is one of `"urgent" | "awards" | "updates" | "partnerships"`.
  - `allNews` array:
    - 6 static Arabic news items (`date`, `title`, `excerpt`, `category`).

- **Helper**
  - `getCategoryBadge(type)` returns a `Badge`:
    - `urgent` → `t.news.featured.urgent`.
    - `awards` → `t.news.categories.awards`.
    - `updates` → `t.news.categories.updates`.
    - `partnerships` → `t.news.categories.partnerships`.

- **Layout Structure**
  1. **Header**
     - Back to `/`, logo, `LanguageSwitcher`, dark mode toggle.

  2. **Hero Section**
     - Navy gradient.
     - Badge: `Calendar` icon + `t.navigation.news`.
     - Title: `t.news.hero.title`.
     - Subtitle: `t.news.hero.subtitle`.

  3. **Featured News**
     - Left large card (`featuredNews[0]`):
       - Top gradient header area with `TrendingUp` icon.
       - Body: category badge, title, description.
       - Footer row: author label (`t.news.featured.team`) and time `featuredNews[0].time`.
     - Right column list of the other 3 featured items:
       - Each card: orange icon block + category badge + title + description + time.

  4. **All News Grid**
     - Title: `t.news.allNews.title`.
     - Cards for each `allNews` item:
       - Date (with `Calendar` icon).
       - Category badge (`news.category`).
       - Title and excerpt.

  5. **Newsletter Section**
     - Orange gradient.
     - Title: `t.news.newsletter.title`.
     - Subtitle: `t.news.newsletter.subtitle`.
     - Email input:
       - Placeholder: `t.news.newsletter.emailPlaceholder`.
     - Subscribe button text: `t.buttons.subscribe`.

  6. **Footer**
     - Logo + copyright.

---

## `NotFound.tsx` – 404 Page

- **Route & Purpose**
  - Catch‑all route (`*`).
  - Simple 404 page with CTA back to home.

- **State & Behavior**
  - `const { t } = useTranslation();`
  - No dark‑mode or language toggles here; just a minimal layout.

- **Layout Structure**
  - Centered layout with:
    - Large `404` number in brand orange.
    - Subtitle: `t.notFound.subtitle`.
    - Description: `t.general.notFound`.
    - Button back to `/`:
      - `Home` icon + `t.notFound.backHome`.

---

## `RideBooking.tsx` – Ride Booking Placeholder

- **Route & Purpose**
  - Route: `/book-ride`.
  - Goal: placeholder page describing upcoming booking features, plus CTA back home and subscription prompt.

- **State & Behavior**
  - `const { t, locale } = useTranslation();`
  - Dark mode as usual.
  - `features` array:
    - `[t.rideBooking.feature1, ..., t.rideBooking.feature5]`.

- **Layout Structure**
  1. **Header**
     - Back to `/`, logo, `LanguageSwitcher`, dark mode toggle.

  2. **Main Card**
     - Centered card:
       - Header:
         - Orange circle with `MapPin` icon.
         - Title: `t.rideBooking.title`.
       - Body:
         - Subtitle: `t.rideBooking.subtitle`.
         - Info box:
           - `Clock` icon + `t.rideBooking.comingFeatures`.
           - List of features (each with `CheckCircle` icon and the feature text).
         - Buttons:
           - Primary: `Link` to `/` with `Home` icon + `t.common.backToHome`.
           - Secondary outline: text `t.rideBooking.subscribe`.
         - Small footer text: `t.rideBooking.followDev`.

---

## `Statistics.tsx` – App Statistics & Performance

- **Route & Purpose**
  - Route: `/statistics`.
  - Goal: show aggregated user/captain counts, geographic coverage, and performance metrics like response times and satisfaction.

- **State & Behavior**
  - `const { t, locale } = useTranslation();`
  - Dark mode as usual.
  - Static arrays:
    - `provinces`:
      - 15 Saudi provinces, each `{ name, users, drivers, growth }`.
      - Names in Arabic (e.g. "الرياض", "جدة", "الدمام"...).
      - `users` and `drivers` formatted as strings with commas, e.g. `"542,345"`.
      - `growth` as string like `"+15%"`.
    - `mainStats` (4 items):
      - `value`, `label`, `change`, `changeLabel`, `gradient`, `icon`.
      - `label` and `changeLabel` from `t.statistics.main.*`.
    - `clientStats`:
      - Items like daily active clients, weekly active, avg monthly, each with `label`, `value`, `unit?`, `percentage`.
    - `captainStats`:
      - Items like daily active captains, avg rating, avg daily trips.
    - `performanceMetrics`:
      - 3 categories (`response`, `satisfaction`, `efficiency`).
      - Each has `icon`, `title`, and `metrics: { label, value }[]`.

- **Layout Structure**
  1. **Header**
     - Back to `/`, logo, `LanguageSwitcher`, dark mode toggle.

  2. **Hero Section**
     - Navy gradient.
     - Badge: `BarChart3` icon + `t.navigation.statistics`.
     - Title: `t.statistics.hero.title`.
     - Subtitle: `t.statistics.hero.subtitle`.

  3. **Main Statistics Cards**
     - 4 colored cards from `mainStats`:
       - Icon (e.g. `Users`, `Car`, `MapPin`, `TrendingUp`).
       - `value` (e.g. `"2,147,823"`, `"52,841"`, `"15"`, `"12.4M"`).
       - `label` from `t.statistics.main.*`.
       - Change text:
         - If `change` exists, show e.g. `+12% {t.statistics.main.thisMonth}`.
         - Otherwise show just `changeLabel`.

  4. **Detailed Client & Captain Stats**
     - Two side‑by‑side cards:
       - Client stats:
         - Title: `t.statistics.detailed.clients.title`.
         - For each `clientStats` item:
           - Label + value (with optional unit).
           - Background bar + filled bar width `{percentage}%`.
       - Captain stats:
         - Title: `t.statistics.detailed.captains.title`.
         - Same visual pattern.

  5. **Provinces Statistics**
     - Title: `t.statistics.geographic.title`.
     - Subtitle: `t.statistics.geographic.subtitle`.
     - Grid of small cards, one per province:
       - `MapPin` icon.
       - Province `name`.
       - Lines:
         - `{users} {t.statistics.geographic.clients}`.
         - `{drivers} {t.statistics.geographic.captains}`.
       - Growth badge with `province.growth`.

  6. **Performance Metrics**
     - Title: `t.statistics.performance.title`.
     - Subtitle: `t.statistics.performance.subtitle`.
     - 3 cards from `performanceMetrics`:
       - Icons: `Clock`, `Star`, `Activity`.
       - Title from `t.statistics.performance.[response|satisfaction|efficiency].title`.
       - 3 rows each: metric label + value.

  7. **CTA Section**
     - Orange gradient.
     - Title: `t.statistics.cta.title`.
     - Subtitle: `t.statistics.cta.subtitle`.
     - Buttons:
       - `/book-ride` with `t.statistics.cta.startJourney`.
       - `/careers` with `t.statistics.cta.joinDriver`.

  8. **Footer**
     - Logo + copyright.

---

## `WhyUs.tsx` – Why Choose DELVI

- **Route & Purpose**
  - Likely route: `/why-us` (exact path depends on router).
  - Goal: explain DELVI’s advantages vs competitors, share testimonials and awards, and drive booking / feature exploration.

- **State & Behavior**
  - `const { t, locale } = useTranslation();`
  - Dark mode as usual.
  - `reasons` array:
    - 4 reasons (`fastest`, `security`, `quality`, `service`) using `t.whyUs.reasons.*`.
  - `testimonials` array:
    - 3 testimonials from `t.whyUs.testimonials.testimonialX`, `nameX`, `locationX`.
  - `awards` array:
    - 4 awards from `t.whyUs.awards.*`.

- **Layout Structure**
  1. **Header**
     - Back to `/`, logo, language & theme toggles.

  2. **Hero Section**
     - Navy gradient.
     - Badge: `Target` icon + `t.whyUs.hero.titleHighlight`.
     - Title: `t.whyUs.hero.title`.
     - Subtitle: `t.whyUs.hero.subtitle`.

  3. **Main Reasons**
     - Left column:
       - Title: `t.whyUs.reasons.title`.
       - Stat tiles:
         - `2M+` → `t.whyUs.reasons.satisfiedUsers`.
         - `50K+` → `t.whyUs.reasons.certifiedDrivers`.
         - `15` → `t.whyUs.reasons.provinces`.
         - `4.8★` → `t.whyUs.reasons.appRating`.
     - Right column:
       - Card listing `reasons`:
         - Colored icon circle (success/info/warning/danger) with icon (`CheckCircle`, `Shield`, `Star`, `Heart`).
         - Title `reason.title`.
         - Description `reason.desc`.

  4. **Comparison Table**
     - Title: `t.whyUs.comparison.title`.
     - Subtitle: `t.whyUs.comparison.subtitle`.
     - Table columns:
       - (no label), `DELVI`, `t.whyUs.comparison.competitorA`, `t.whyUs.comparison.competitorB`.
     - Rows:
       - Wait time:
         - Label: `t.whyUs.comparison.waitTime`.
         - DELVI cell uses `t.whyUs.comparison.waitTimeValue`.
         - Competitor cells: `waitTimeCompA` / `waitTimeCompB`.
       - Prices:
         - Label: `t.whyUs.comparison.prices`.
         - DELVI cell: `t.whyUs.comparison.lowest`.
         - Competitors: `priceHigher20` / `priceHigher35`.
       - Customer service:
         - Label: `t.whyUs.comparison.customerService`.
         - DELVI cell: `"24/7"`.
         - Competitors: `limitedHours`.
       - Rating:
         - Label: `t.whyUs.comparison.rating`.
         - DELVI: `4.8★`.
         - Competitors: `4.2★`, `3.9★`.
       - Coverage:
         - Label: `t.whyUs.comparison.coverage`.
         - DELVI: `t.whyUs.comparison.provinces15`.
         - Competitors: `provinces8`, `provinces5`.

  5. **Testimonials**
     - Title: `t.whyUs.testimonials.title`.
     - Subtitle: `t.whyUs.testimonials.subtitle`.
     - 3 cards:
       - 5 gold `Star` icons with rating `5.0`.
       - Quoted testimonial text.
       - Name and location.

  6. **Awards**
     - Title: `t.whyUs.awards.title`.
     - Subtitle: `t.whyUs.awards.subtitle`.
     - 4 award items with icon (`Award`, `Shield`, `TrendingUp`, `Users`), title `award.title`, desc `award.desc`.

  7. **CTA Section**
     - Orange gradient.
     - Title: `t.whyUs.cta.title`.
     - Subtitle: `t.whyUs.cta.subtitle`.
     - Buttons:
       - `/book-ride` with `t.whyUs.cta.bookFirst`.
       - `/features` with `t.whyUs.cta.learnMore`.

  8. **Footer**
     - Logo + copyright.

---

## Notes for Lovable

- **Keep all translation key paths** intact so the existing `translations` files continue to work.
- **Preserve dark‑mode behavior**:
  - Shared hook is fine, but must still use `localStorage("delvi-theme")` and the `document.documentElement.classList` pattern.
- **Preserve RTL support**:
  - Top‑level wrappers must set `dir` based on `locale`.
- **Navigation**:
  - Back buttons and CTAs must still point to the same routes as in this spec.

You are free to significantly modernize the look and feel, reduce duplication via shared components, or re‑organize code into subcomponents, as long as the above behaviors and data relationships remain the same.


