# DOT Compliance Demo - Design Guidelines

## Design Approach

**Professional Trust-Building Framework**  
This B2B compliance services site requires a balance of credibility, clarity, and approachability. Drawing inspiration from professional service leaders like Stripe (for clean layouts), HubSpot (for B2B engagement), and Deel (for compliance/regulatory presentation), we'll create a design that establishes authority while remaining accessible.

Core Principles:
- **Credibility First**: Professional polish that builds trust with regulated industry clients
- **Clarity Over Complexity**: Information hierarchy that guides users to compliance solutions
- **Accessibility as Standard**: WCAG AA compliance throughout for broad audience reach

---

## Typography System

**Font Selection**  
Primary: Inter (via Google Fonts CDN) - modern, professional, excellent readability  
Secondary: Space Grotesk (for headings/emphasis) - distinctive yet corporate

**Type Scale**
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold, Space Grotesk
- Page Titles (H1): text-4xl md:text-5xl, font-bold, Space Grotesk
- Section Headers (H2): text-3xl md:text-4xl, font-semibold, Space Grotesk
- Subsections (H3): text-2xl md:text-3xl, font-semibold, Inter
- Body Large: text-lg md:text-xl, font-normal, leading-relaxed
- Body Regular: text-base, font-normal, leading-relaxed
- Small/Meta: text-sm, font-medium

**Reading Experience**
- Max content width: max-w-3xl for long-form content (optimal readability)
- Line height: leading-relaxed (1.625) for body text
- Paragraph spacing: space-y-4 for comfortable reading rhythm

---

## Layout System

**Spacing Primitives**  
Core units: 2, 4, 6, 8, 12, 16, 20, 24 (Tailwind units)
- Micro spacing (component internals): p-2, p-4, gap-2
- Standard spacing (between elements): p-6, p-8, gap-6
- Section spacing (vertical rhythm): py-12, py-16, py-20, py-24
- Major breaks: py-32 (desktop hero/major sections)

**Responsive Breakpoints**
- Mobile base: Full-width, single column, py-12
- Tablet (md:768px): Two-column where appropriate, py-16
- Desktop (lg:1024px): Multi-column layouts, py-20 to py-24
- Wide (xl:1280px): Max container constraints, generous spacing

**Grid Strategy**
- Container: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Service cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8
- Blog grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Two-column content: grid-cols-1 lg:grid-cols-2 gap-12

---

## Component Library

### Navigation
**Header**: Sticky top navigation with logo left, main nav center/right, CTA button right  
- Height: h-20 on desktop, h-16 on mobile
- Logo: max-h-10, appropriate spacing
- Nav links: text-base, font-medium, px-4 spacing
- Mobile: Hamburger menu with full-height slide-in drawer
- CTA button: "Get Started" or "Contact Us" - primary button treatment

**Footer**: Comprehensive multi-column footer
- Four columns on desktop (Company, Services, Resources, Contact)
- Stack to single column on mobile
- Newsletter signup section with inline form
- Trust indicators: "Licensed & Insured", "FMCSA Certified"
- Social links with icon-only buttons
- Legal links (Privacy, Terms) in subfooter
- Padding: py-16 md:py-20

### Service Pages Components

**Service Hero** (per service page)
- Not full-height: h-auto with py-20 md:py-32 padding
- Two-column layout (lg:grid-cols-2)
- Left: H1 title, subtitle (text-xl), 2-3 key benefits as bullet list, primary CTA
- Right: Professional image (compliance officer, truck fleet, documentation)
- Background: Subtle gradient or pattern overlay

**Service Cards** (homepage grid)
- Vertical card layout with icon top
- Icon: w-12 h-12, rounded-lg container with p-3
- Title: text-xl font-semibold, mb-2
- Description: text-base, 2-3 lines
- "Learn More" link with arrow icon
- Hover: subtle lift (shadow-lg transition)
- Padding: p-6 md:p-8

**FAQ Section** (each service page)
- Accordion-style expandable items
- Minimum 3 Q&A pairs per page
- Question: text-lg font-semibold with chevron icon
- Answer: text-base, revealed with smooth expansion
- Structured spacing: divide-y pattern

### Content Components

**Blog Cards**
- Featured image (16:9 aspect ratio, rounded-lg)
- Category badge (small pill shape, absolute top-left on image)
- Title: text-2xl font-bold, line-clamp-2
- Excerpt: text-base, line-clamp-3
- Meta info: Author, date, read time (text-sm)
- Card padding: p-0 (image full-bleed), content p-6

**Statistics/Trust Section**
- Four-column grid (stats display): grid-cols-2 lg:grid-cols-4
- Each stat: Large number (text-4xl font-bold), Label below (text-sm)
- Centered alignment
- Dividers between stats on desktop

**Contact Form**
- Single column, max-w-2xl centered
- Form fields: Full-width inputs with consistent height (h-12)
- Labels: text-sm font-medium, mb-2
- Textarea: min-h-32
- Submit button: Full-width on mobile, auto on desktop
- Noscript fallback message displayed prominently
- Surrounding context: Office hours, phone, email as supplementary info in sidebar

### Interactive Elements

**Buttons**
- Primary: px-8 py-3, text-base font-semibold, rounded-lg
- Secondary: px-6 py-2.5, text-sm font-medium, rounded-md, outline variant
- Text links: Underline on hover, font-medium
- Icon buttons: w-10 h-10, rounded-full, icon centered

**Call-to-Action Sections**
- Full-width section with centered content
- Max-width: max-w-4xl
- Heading + supporting text + button group
- Padding: py-16 md:py-24
- Background treatment (if over image): backdrop-blur-sm with semi-transparent background

---

## Images Strategy

**Hero Images**: Yes - use professional, trust-building imagery
- Homepage hero: Fleet of commercial trucks on highway (modern, well-maintained)
- Service pages: Relevant contextual images (compliance officers, documentation, safety equipment)
- Aspect ratios: 16:9 for most content, 1:1 for profile/team photos
- Format: WebP with PNG fallback, lazy loading for below-fold
- Sizes: Include width/height attributes, use responsive srcset

**Image Placements**:
1. Homepage hero (large, full-width section with text overlay)
2. Each service page hero (two-column with image right)
3. Blog post featured images (16:9 cards)
4. About/Team section (if included): Team photos or office imagery
5. Trust indicators: Partner logos, certification badges (small, monochrome)

**Image Treatment**:
- Subtle overlays on hero images for text contrast
- Rounded corners: rounded-lg for content images, rounded-xl for large hero images
- Consistent aspect ratios within component types
- Alt text: Descriptive, keyword-inclusive where natural

---

## Content Sections Architecture

**Homepage Structure** (7-8 sections):
1. Hero with primary value proposition + CTA
2. Trust indicators bar (certifications, years in business)
3. Services grid (5 services as cards)
4. Why Choose Us (3-4 differentiators with icons)
5. Statistics/Numbers section
6. Testimonials (2-3 customer quotes)
7. Latest blog posts preview (3 cards)
8. Final CTA section
9. Comprehensive footer

**Service Pages** (consistent template):
1. Service-specific hero (h-auto, not full-height)
2. Overview section (what it is, why it matters)
3. Benefits list (checkmark icons, clear points)
4. Process/Steps (numbered timeline or cards)
5. FAQ accordion (minimum 3 Q&A)
6. Related services sidebar or section
7. CTA to contact/get started

**Blog Posts**:
- Featured image at top
- Article metadata (author, date, category)
- Table of contents for long posts
- Content with proper H2/H3 hierarchy
- Related posts at bottom (3 cards)

---

## Accessibility & Performance

**Semantic Structure**:
- Proper heading hierarchy (only one H1 per page)
- Semantic HTML5: `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- ARIA labels for icon-only buttons
- Skip-to-content link for keyboard navigation

**Form Accessibility**:
- Labels properly associated with inputs
- Required fields clearly marked
- Error states with descriptive messaging
- Focus states clearly visible (ring-2 ring-offset-2)

**Performance Considerations**:
- Critical CSS inline for above-fold content
- Defer non-critical JavaScript
- Lazy load images with `loading="lazy"`
- Preconnect to Google Fonts CDN
- Maintain consistent spacing to prevent CLS

---

**Layout Philosophy**: This design prioritizes professional credibility through generous whitespace, clear hierarchy, and trust-building elements. Each page should feel complete and authoritative while remaining approachable for business owners seeking compliance solutions.