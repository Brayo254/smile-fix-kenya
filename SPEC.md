# SmileFix Kenya - Dental Clinic Website Specification

## 1. Project Overview

**Project Name:** SmileFix Kenya
**Project Type:** Professional Dental Services Website
**Core Functionality:** Multi-page responsive website for a dental clinic in Mombasa, Kenya offering services for men, women, and children with booking functionality
**Target Users:** Residents of Mombasa seeking dental care (men, women, children)

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Pages:**
- Homepage (landing with FAQ)
- About page
- Contact page
- Booking page
- 4 Service pages:
  - Dental Check-up
  - Dental Veneers
  - Root Canal Treatment
  - Tooth Extraction

**Page Sections:**
- **Header:** Fixed navigation bar (transparent on hero, solid on scroll)
- **Hero:** Full-width with headline (Swahili) + subtext (English)
- **Services Grid:** 4-column grid on desktop, 2 on tablet, 1 on mobile
- **Testimonials:** Carousel/slider
- **FAQ Section:** Accordion style
- **Footer:** Contact info, quick links, social media, operating hours

**Responsive Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 2.2 Visual Design

**Color Palette:**
- Primary (Carbon Black): `#1c1c1c`
- Secondary (Warm White): `#FFFDF9`
- Accent (Swahili Teal): `#2A7F7F`
- Accent Secondary (Sunny Yellow): `#F5C842`
- Neutral Gray: `#6B7280`
- Light Gray: `#F3F4F6`

**Typography:**
- Headings: `DM Serif Display` (elegant, professional)
- Body: `Inter` (clean, readable)
- Swahili/Accent: `DM Serif Display` for headlines
- Font sizes:
  - H1: 48px (desktop), 32px (mobile)
  - H2: 36px (desktop), 28px (mobile)
  - H3: 24px (desktop), 20px (mobile)
  - Body: 16px
  - Small: 14px

**Spacing System:**
- Section padding: 80px vertical (desktop), 48px (mobile)
- Component padding: 24px
- Grid gap: 24px (desktop), 16px (mobile)
- Container max-width: 1280px

**Visual Effects:**
- Subtle shadows: `0 4px 20px rgba(0,0,0,0.08)`
- Hover transitions: 300ms ease
- Card hover: slight lift with shadow increase
- Button hover: background shift + scale(1.02)

### 2.3 Components

**Button:**
- Primary variant: Teal background (#2A7F7F), white text
- Secondary variant: Transparent with teal border, teal text
- Hover: Slight scale + shadow
- States: default, hover, active, disabled

**Navigation:**
- Logo (left), Nav links (center), CTA button (right)
- Mobile: Hamburger menu with slide-out drawer
- Links: Home, About, Services, Contact, Book Now

**Service Card:**
- Icon (React Icons)
- Title
- Short description
- Price range
- "Learn More" link

**FAQ Accordion:**
- Question with expand icon
- Animated expand/collapse
- Multiple can be open

**Form Elements:**
- Input fields with floating labels
- Validation states (error: red, success: green)
- Loading states on submit

---

## 3. Functionality Specification

### 3.1 Core Features

**Navigation:**
- Smooth scroll to sections on homepage
- Active page highlighting
- Mobile responsive hamburger menu

**Homepage:**
- Hero section with Swahili headline
- Services overview grid
- Why Choose Us section
- FAQ accordion
- CTA sections

**About Page:**
- Clinic story/history
- Team section (with placeholder images)
- Values/mission
- Equipment/technology

**Contact Page:**
- Contact form (name, email, phone, message)
- Location map (embedded)
- Contact details (phone, email, address)
- Operating hours

**Booking Page:**
- Multi-step form:
  1. Select service
  2. Select date/time
  3. Patient details
  4. Confirmation
- Form validation with Zod
- Email confirmation via Resend

**Service Pages (x4):**
- Service hero with image/icon
- Detailed description
- Benefits
- Process/steps
- Pricing table
- FAQ specific to service
- CTA to book

### 3.2 User Interactions

- Hover effects on all interactive elements
- Smooth scroll navigation
- Form field validation on blur + submit
- Accordion expand/collapse animation
- Page load animations (fade in, slide up)
- Scroll-triggered animations

### 3.3 Data Handling

- Form data validated with Zod schema
- Booking form submits to API route
- Email sent via Resend API
- Client-side validation feedback

### 3.4 Edge Cases

- Form submission while loading (disable button)
- Empty required fields validation
- Invalid email/phone format
- Network error handling
- Mobile menu state management

---

## 4. Acceptance Criteria

### Visual Checkpoints:
- [ ] Colors match exact hex codes specified
- [ ] Fonts load correctly (DM Serif Display, Inter)
- [ ] Responsive on mobile/tablet/desktop
- [ ] Animations smooth and not overdone
- [ ] All CTA buttons clearly visible

### Functionality Checkpoints:
- [ ] Navigation works on all pages
- [ ] Mobile menu opens/closes properly
- [ ] All forms validate correctly
- [ ] Booking form multi-step works
- [ ] FAQ accordions expand/collapse
- [ ] Page transitions smooth
- [ ] All service pages accessible

### SEO Checkpoints:
- [ ] Meta titles and descriptions
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy
- [ ] Alt text on images
- [ ] Open Graph tags

---

## 5. Page-Specific Content

### Homepage Hero
- **Swahili Headline:** "Fika Kwa Simu Thabiti - MGONJWA MWASI" (Wait, this should be professional) → "MGONJWA MWASI - Daktari wa Mino"
- **Better Swahili Headline:** "MGONJWA MWASI - Daktari wa Mino" (Your Trusted Dental Care)
- **English Subtext:** "Your trusted dental clinic in Mombasa. Professional care for the whole family - men, women, and children."

### Services & Pricing:
1. **Dental Check-up** - KES 2,000 - 3,500
2. **Dental Veneers** - KES 15,000 - 45,000 per tooth
3. **Root Canal** - KES 8,000 - 15,000
4. **Tooth Extraction** - KES 3,000 - 8,000

### Contact Info:
- **Phone:** +254 700 123 456
- **Email:** info@smilefix.co.ke
- **Address:** Mama Ngina Drive, Mombasa, Kenya
- **Hours:** Mon-Fri 8AM-6PM, Sat 9AM-4PM

---

## 6. Technical Structure

```
/app
  /layout.tsx
  /page.tsx (Homepage)
  /about/page.tsx
  /contact/page.tsx
  /booking/page.tsx
  /services/
    /checkup/page.tsx
    /veneers/page.tsx
    /root-canal/page.tsx
    /extraction/page.tsx
  /api/
    /booking/route.ts
/components
  /ui/ (shadcn components)
  /Button.tsx
  /Navbar.tsx
  /Footer.tsx
  /ServiceCard.tsx
  /FAQ.tsx
  /BookingForm.tsx
/lib
  /utils.ts
  /validations.ts
```