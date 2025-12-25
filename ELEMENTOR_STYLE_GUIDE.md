# Elementor Style Guide - Prudent Juris Law Firm

Complete style specifications for recreating this website in WordPress with Elementor.

---

## 📋 TABLE OF CONTENTS

1. [Global Settings](#1-global-settings)
2. [Typography](#2-typography)
3. [Color Palette](#3-color-palette)
4. [Section-by-Section Guide](#4-section-by-section-guide)
5. [Custom CSS Snippets](#5-custom-css-snippets)
6. [Responsive Breakpoints](#6-responsive-breakpoints)

---

## 1. GLOBAL SETTINGS

### Site Settings (Elementor → Site Settings)

**Global Colors:**
```
Primary (Navy Blue): #1A2744
Secondary (Gold): #B8860B
Background (Cream): #FAF9F7
Text (Dark): #2A3441
Text Muted: #64748B
White: #FFFFFF
Card Background: #FFFFFF
```

**Global Fonts:**
- Headings: Playfair Display
- Body: Source Sans 3 (or Inter/Open Sans)

**Container Width:**
- Default: 1200px
- Wide: 1400px

---

## 2. TYPOGRAPHY

### Font Family Setup

Go to **Elementor → Site Settings → Typography** and set:

| Element | Font Family | Weight | Size (Desktop) | Size (Tablet) | Size (Mobile) |
|---------|-------------|--------|----------------|---------------|---------------|
| H1 | Playfair Display | 700 | 56px | 44px | 36px |
| H2 | Playfair Display | 600 | 42px | 36px | 30px |
| H3 | Playfair Display | 600 | 32px | 28px | 24px |
| H4 | Playfair Display | 600 | 24px | 22px | 20px |
| H5 | Playfair Display | 500 | 20px | 18px | 18px |
| Body | Source Sans 3 | 400 | 16px | 16px | 15px |
| Body Large | Source Sans 3 | 400 | 18px | 17px | 16px |
| Small Text | Source Sans 3 | 400 | 14px | 14px | 13px |
| Button | Source Sans 3 | 600 | 16px | 15px | 14px |

### Line Heights

| Element | Line Height |
|---------|-------------|
| Headings (H1-H3) | 1.2 |
| Headings (H4-H6) | 1.3 |
| Body Text | 1.7 |
| Paragraphs | 1.75 |

### Letter Spacing

| Element | Letter Spacing |
|---------|----------------|
| H1 | -0.02em |
| H2-H4 | -0.01em |
| Body | 0 |
| Uppercase Labels | 0.1em |
| Buttons | 0.05em |

---

## 3. COLOR PALETTE

### Primary Colors (HEX Values)

```css
/* Navy Blue - Primary Brand Color */
--navy-primary: #1A2744;
--navy-light: #2D3F5E;
--navy-dark: #0F1829;

/* Gold - Accent Color */
--gold-primary: #B8860B;
--gold-light: #D4A84B;
--gold-dark: #8B6914;

/* Background Colors */
--cream: #FAF9F7;
--cream-dark: #F0EDE8;
--white: #FFFFFF;

/* Text Colors */
--text-dark: #2A3441;
--text-muted: #64748B;
--text-light: #94A3B8;

/* Border Colors */
--border-light: #E2E8F0;
--border-medium: #CBD5E1;
```

### Color Usage Guide

| Use Case | Color |
|----------|-------|
| Page Background | #FAF9F7 (Cream) |
| Header/Footer Background | #1A2744 (Navy) |
| Card Background | #FFFFFF (White) |
| Primary Buttons | #B8860B (Gold) |
| Secondary Buttons | #1A2744 (Navy) |
| Heading Text | #1A2744 (Navy) |
| Body Text | #2A3441 (Dark) |
| Muted/Subtitle Text | #64748B |
| Links | #B8860B (Gold) |
| Link Hover | #8B6914 (Dark Gold) |
| Borders | #E2E8F0 |

---

## 4. SECTION-BY-SECTION GUIDE

---

### 4.1 HEADER / NAVIGATION

**Section Settings:**
- Background: Transparent (scrolls to #1A2744)
- Padding: 16px 0
- Position: Fixed, Full Width
- Z-Index: 1000

**Logo:**
- Size: 48px height
- Color: #FFFFFF

**Navigation Menu:**
- Font: Source Sans 3, 500 weight
- Size: 15px
- Color: #FFFFFF
- Hover Color: #B8860B
- Letter Spacing: 0.05em
- Gap Between Items: 32px

**CTA Button:**
- Background: #B8860B
- Text Color: #FFFFFF
- Padding: 12px 24px
- Border Radius: 6px
- Font Weight: 600
- Hover Background: #8B6914

**Elementor Widget:** Nav Menu + Button

---

### 4.2 HERO SECTION

**Section Settings:**
- Height: 100vh (min 600px)
- Background: Image with Dark Overlay
- Overlay: Linear Gradient
  - Start: rgba(26, 39, 68, 0.92)
  - End: rgba(26, 39, 68, 0.85)
- Padding: 0

**Content Container:**
- Max Width: 800px
- Text Align: Center
- Vertical Position: Center

**Badge/Tagline:**
- Font: Source Sans 3, 600
- Size: 14px
- Letter Spacing: 0.15em
- Text Transform: Uppercase
- Color: #B8860B
- Margin Bottom: 24px

**Main Heading (H1):**
- Font: Playfair Display, 700
- Size: 56px / 44px / 36px (D/T/M)
- Line Height: 1.1
- Color: #FFFFFF
- Margin Bottom: 24px

**Subheading:**
- Font: Source Sans 3, 400
- Size: 20px / 18px / 16px (D/T/M)
- Line Height: 1.6
- Color: rgba(255, 255, 255, 0.85)
- Max Width: 600px
- Margin Bottom: 40px

**Buttons Container:**
- Display: Flex
- Gap: 16px
- Justify: Center

**Primary Button:**
- Background: #B8860B
- Text: #FFFFFF
- Padding: 16px 32px
- Border Radius: 6px
- Font: Source Sans 3, 600, 16px

**Secondary Button:**
- Background: Transparent
- Border: 1px solid rgba(255, 255, 255, 0.3)
- Text: #FFFFFF
- Padding: 16px 32px
- Border Radius: 6px

**Scroll Indicator:**
- Position: Absolute Bottom, 40px from bottom
- Animation: Bounce

---

### 4.3 ABOUT SECTION

**Section Settings:**
- Background: #FFFFFF
- Padding: 100px 0 / 80px 0 / 60px 0 (D/T/M)

**Layout:**
- Two Columns: 50% / 50%
- Gap: 60px
- Align: Center

**Left Column - Image:**
- Border Radius: 12px
- Box Shadow: 0 25px 50px rgba(26, 39, 68, 0.15)

**Right Column - Content:**

**Section Label:**
- Font: Source Sans 3, 600
- Size: 14px
- Letter Spacing: 0.1em
- Text Transform: Uppercase
- Color: #B8860B
- Margin Bottom: 16px

**Section Title (H2):**
- Font: Playfair Display, 600
- Size: 42px / 36px / 30px (D/T/M)
- Color: #1A2744
- Line Height: 1.2
- Margin Bottom: 24px

**Description:**
- Font: Source Sans 3, 400
- Size: 18px
- Line Height: 1.75
- Color: #64748B
- Margin Bottom: 32px

**Stats Grid:**
- Columns: 3
- Gap: 24px

**Stat Item:**
- Number: Playfair Display, 700, 36px, #B8860B
- Label: Source Sans 3, 400, 14px, #64748B

---

### 4.4 PRACTICE AREAS SECTION

**Section Settings:**
- Background: #FAF9F7
- Padding: 100px 0

**Section Header:**
- Text Align: Center
- Max Width: 700px
- Margin: 0 auto 60px

**Grid Layout:**
- Columns: 3 / 2 / 1 (D/T/M)
- Gap: 32px

**Practice Card:**
- Background: #FFFFFF
- Padding: 40px 32px
- Border Radius: 12px
- Border: 1px solid #E2E8F0
- Text Align: Center
- Box Shadow: 0 4px 12px rgba(26, 39, 68, 0.08)
- Hover Box Shadow: 0 8px 30px rgba(26, 39, 68, 0.15)
- Transition: all 0.3s ease

**Card Icon:**
- Size: 56px
- Color: #B8860B
- Margin Bottom: 24px

**Card Title (H4):**
- Font: Playfair Display, 600
- Size: 22px
- Color: #1A2744
- Margin Bottom: 16px

**Card Description:**
- Font: Source Sans 3, 400
- Size: 15px
- Line Height: 1.7
- Color: #64748B

---

### 4.5 WHY CHOOSE US SECTION

**Section Settings:**
- Background: #1A2744
- Padding: 100px 0

**Layout:**
- Two Columns: 45% / 55%
- Gap: 80px

**Left Column - Content:**

**Section Label:**
- Color: #B8860B
- (Same specs as other section labels)

**Section Title:**
- Color: #FFFFFF

**Features List:**
- Gap: 24px between items

**Feature Item:**
- Icon: 24px, #B8860B
- Title: Source Sans 3, 600, 18px, #FFFFFF
- Description: Source Sans 3, 400, 15px, rgba(255, 255, 255, 0.7)

**Right Column - Stats Cards:**
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border Radius: 12px
- Padding: 32px
- Grid: 2x2

---

### 4.6 TEAM SECTION

**Section Settings:**
- Background: #FFFFFF
- Padding: 100px 0

**Grid Layout:**
- Columns: 4 / 2 / 1 (D/T/M)
- Gap: 32px

**Team Card:**
- Background: #FFFFFF
- Border Radius: 12px
- Overflow: Hidden
- Box Shadow: 0 4px 12px rgba(26, 39, 68, 0.08)
- Hover Transform: translateY(-8px)
- Transition: all 0.3s ease

**Photo:**
- Aspect Ratio: 4:5
- Object Fit: Cover

**Content Area:**
- Padding: 24px
- Text Align: Center

**Name (H4):**
- Font: Playfair Display, 600
- Size: 20px
- Color: #1A2744
- Margin Bottom: 4px

**Position:**
- Font: Source Sans 3, 500
- Size: 14px
- Color: #B8860B
- Margin Bottom: 8px

**Bio:**
- Font: Source Sans 3, 400
- Size: 14px
- Line Height: 1.6
- Color: #64748B

---

### 4.7 TESTIMONIALS SECTION

**Section Settings:**
- Background: #FAF9F7
- Padding: 100px 0

**Carousel/Slider Settings:**
- Slides to Show: 3 / 2 / 1 (D/T/M)
- Gap: 32px
- Navigation: Arrows + Dots
- Autoplay: Yes, 5000ms

**Testimonial Card:**
- Background: #FFFFFF
- Padding: 40px
- Border Radius: 12px
- Box Shadow: 0 4px 12px rgba(26, 39, 68, 0.08)

**Quote Icon:**
- Size: 32px
- Color: #B8860B
- Opacity: 0.3
- Margin Bottom: 20px

**Quote Text:**
- Font: Source Sans 3, 400
- Size: 16px
- Line Height: 1.8
- Color: #2A3441
- Font Style: Italic
- Margin Bottom: 24px

**Author Name:**
- Font: Playfair Display, 600
- Size: 18px
- Color: #1A2744

**Author Title:**
- Font: Source Sans 3, 400
- Size: 14px
- Color: #64748B

**Star Rating:**
- Color: #B8860B
- Size: 16px

---

### 4.8 ARTICLES/BLOG SECTION

**Section Settings:**
- Background: #FFFFFF
- Padding: 100px 0

**Grid Layout:**
- Columns: 3 / 2 / 1 (D/T/M)
- Gap: 32px

**Article Card:**
- Background: #FFFFFF
- Border Radius: 12px
- Overflow: Hidden
- Border: 1px solid #E2E8F0
- Hover Transform: translateY(-4px)

**Featured Image:**
- Aspect Ratio: 16:9
- Object Fit: Cover

**Content Area:**
- Padding: 24px

**Category Badge:**
- Background: rgba(184, 134, 11, 0.1)
- Color: #B8860B
- Padding: 4px 12px
- Border Radius: 4px
- Font: Source Sans 3, 600, 12px
- Text Transform: Uppercase

**Title (H4):**
- Font: Playfair Display, 600
- Size: 20px
- Color: #1A2744
- Margin: 16px 0 12px

**Excerpt:**
- Font: Source Sans 3, 400
- Size: 15px
- Line Height: 1.7
- Color: #64748B

**Read More Link:**
- Color: #B8860B
- Font Weight: 600
- With Arrow Icon →

---

### 4.9 CLIENTS SECTION

**Section Settings:**
- Background: #FAF9F7
- Padding: 60px 0

**Logo Carousel:**
- Display: Flex
- Gap: 60px
- Align: Center
- Justify: Space Between
- Animation: Infinite scroll (optional)

**Client Logo:**
- Max Height: 48px
- Filter: Grayscale (100%)
- Opacity: 0.6
- Hover Filter: Grayscale (0%)
- Hover Opacity: 1
- Transition: all 0.3s ease

---

### 4.10 CONTACT SECTION

**Section Settings:**
- Background: Linear Gradient
  - Start: #FAF9F7
  - End: #FFFFFF
- Padding: 100px 0

**Layout:**
- Two Columns: 40% / 60%
- Gap: 60px

**Left Column - Contact Info:**

**Section Title:**
- Font: Playfair Display, 600
- Size: 36px
- Color: #1A2744
- Margin Bottom: 16px

**Description:**
- Font: Source Sans 3, 400
- Size: 17px
- Color: #64748B
- Margin Bottom: 40px

**Contact Item:**
- Icon: 24px, #B8860B
- Label: Source Sans 3, 600, 14px, #64748B
- Value: Source Sans 3, 500, 16px, #1A2744
- Gap: 20px between items

**Right Column - Contact Form:**

**Form Container:**
- Background: #FFFFFF
- Padding: 48px
- Border Radius: 16px
- Box Shadow: 0 25px 50px rgba(26, 39, 68, 0.1)

**Form Fields:**
- Background: #FAF9F7
- Border: 1px solid #E2E8F0
- Border Radius: 8px
- Padding: 16px 20px
- Font: Source Sans 3, 400, 16px
- Focus Border Color: #B8860B
- Margin Bottom: 20px

**Field Label:**
- Font: Source Sans 3, 600
- Size: 14px
- Color: #1A2744
- Margin Bottom: 8px

**Submit Button:**
- Background: #B8860B
- Color: #FFFFFF
- Width: 100%
- Padding: 18px
- Border Radius: 8px
- Font: Source Sans 3, 600, 16px
- Hover Background: #8B6914

---

### 4.11 FOOTER

**Section Settings:**
- Background: #1A2744
- Padding: 80px 0 24px

**Layout:**
- Columns: 4 (Logo | Quick Links | Practice Areas | Contact)
- Gap: 40px

**Logo:**
- Max Width: 150px
- Margin Bottom: 20px

**Footer Description:**
- Font: Source Sans 3, 400
- Size: 15px
- Color: rgba(255, 255, 255, 0.7)
- Line Height: 1.7

**Column Title:**
- Font: Playfair Display, 600
- Size: 18px
- Color: #FFFFFF
- Margin Bottom: 24px

**Footer Links:**
- Font: Source Sans 3, 400
- Size: 15px
- Color: rgba(255, 255, 255, 0.7)
- Hover Color: #B8860B
- Line Height: 2.2

**Social Icons:**
- Size: 20px
- Color: rgba(255, 255, 255, 0.7)
- Hover Color: #B8860B
- Gap: 16px

**Copyright Bar:**
- Border Top: 1px solid rgba(255, 255, 255, 0.1)
- Padding Top: 24px
- Margin Top: 60px
- Text Align: Center
- Font: Source Sans 3, 400, 14px
- Color: rgba(255, 255, 255, 0.5)

---

## 5. CUSTOM CSS SNIPPETS

Add these to **Elementor → Custom CSS** or **Appearance → Customize → Additional CSS**

### 5.1 Global Styles

```css
/* Import Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Default Body Font */
body {
  font-family: 'Source Sans 3', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2A3441;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}
```

### 5.2 Button Styles

```css
/* Primary Button (Gold) */
.btn-primary {
  background-color: #B8860B !important;
  color: #FFFFFF !important;
  border: none !important;
  padding: 16px 32px !important;
  border-radius: 6px !important;
  font-family: 'Source Sans 3', sans-serif !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  letter-spacing: 0.05em !important;
  transition: all 0.3s ease !important;
}

.btn-primary:hover {
  background-color: #8B6914 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(184, 134, 11, 0.4) !important;
}

/* Secondary Button (Outline) */
.btn-secondary {
  background-color: transparent !important;
  color: #1A2744 !important;
  border: 2px solid #1A2744 !important;
  padding: 14px 30px !important;
  border-radius: 6px !important;
  font-family: 'Source Sans 3', sans-serif !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
}

.btn-secondary:hover {
  background-color: #1A2744 !important;
  color: #FFFFFF !important;
}

/* White Outline Button (for dark backgrounds) */
.btn-outline-white {
  background-color: transparent !important;
  color: #FFFFFF !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  padding: 14px 30px !important;
  border-radius: 6px !important;
}

.btn-outline-white:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
}
```

### 5.3 Card Hover Effects

```css
/* Lift on Hover */
.card-hover {
  transition: all 0.3s ease !important;
}

.card-hover:hover {
  transform: translateY(-8px) !important;
  box-shadow: 0 20px 40px rgba(26, 39, 68, 0.15) !important;
}

/* Scale on Hover */
.card-scale:hover {
  transform: scale(1.02);
}

/* Border Glow on Hover */
.card-glow:hover {
  box-shadow: 0 0 0 2px #B8860B, 0 10px 40px rgba(184, 134, 11, 0.2) !important;
}
```

### 5.4 Text Gradient (Gold)

```css
.text-gradient-gold {
  background: linear-gradient(135deg, #B8860B 0%, #D4A84B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 5.5 Animated Underline Links

```css
.link-underline {
  position: relative;
  display: inline-block;
}

.link-underline::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #B8860B;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.link-underline:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
```

### 5.6 Section Labels

```css
.section-label {
  font-family: 'Source Sans 3', sans-serif !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  color: #B8860B !important;
  margin-bottom: 16px !important;
}
```

### 5.7 Client Logo Grayscale

```css
.client-logo img {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.client-logo:hover img {
  filter: grayscale(0%);
  opacity: 1;
}
```

### 5.8 Form Field Styling

```css
/* Elementor Form Fields */
.elementor-field-textual {
  background-color: #FAF9F7 !important;
  border: 1px solid #E2E8F0 !important;
  border-radius: 8px !important;
  padding: 16px 20px !important;
  font-family: 'Source Sans 3', sans-serif !important;
  font-size: 16px !important;
  transition: border-color 0.3s ease !important;
}

.elementor-field-textual:focus {
  border-color: #B8860B !important;
  outline: none !important;
  box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.1) !important;
}

.elementor-field-label {
  font-family: 'Source Sans 3', sans-serif !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  color: #1A2744 !important;
  margin-bottom: 8px !important;
}
```

### 5.9 Box Shadows

```css
/* Soft Shadow */
.shadow-soft {
  box-shadow: 0 1px 3px rgba(26, 39, 68, 0.08) !important;
}

/* Card Shadow */
.shadow-card {
  box-shadow: 0 4px 12px rgba(26, 39, 68, 0.12) !important;
}

/* Elevated Shadow */
.shadow-elevated {
  box-shadow: 0 8px 30px rgba(26, 39, 68, 0.15) !important;
}

/* Gold Glow Shadow */
.shadow-gold {
  box-shadow: 0 4px 20px rgba(184, 134, 11, 0.3) !important;
}
```

### 5.10 Scroll Animation (AOS Alternative)

```css
/* Add to elements that should animate on scroll */
.animate-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* JavaScript to add 'visible' class on scroll */
/* 
<script>
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate-fade-in').forEach(el => observer.observe(el));
});
</script>
*/
```

### 5.11 Sticky Header

```css
/* Sticky Header that changes on scroll */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.site-header.scrolled {
  background-color: #1A2744 !important;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}
```

---

## 6. RESPONSIVE BREAKPOINTS

### Elementor Breakpoints

| Device | Breakpoint |
|--------|------------|
| Desktop | > 1024px |
| Tablet | 768px - 1024px |
| Mobile | < 768px |

### Responsive Adjustments

**Desktop (> 1024px):**
- Container: 1200px
- Section Padding: 100px 0
- Grid Columns: 3-4

**Tablet (768px - 1024px):**
- Container: 100% with 40px padding
- Section Padding: 80px 0
- Grid Columns: 2

**Mobile (< 768px):**
- Container: 100% with 20px padding
- Section Padding: 60px 0
- Grid Columns: 1
- Reduce all font sizes by ~15%
- Stack columns vertically
- Center-align text where appropriate

---

## 📌 QUICK REFERENCE CHEAT SHEET

### Colors (Copy-Paste Ready)
```
Navy Primary:     #1A2744
Gold Primary:     #B8860B
Background:       #FAF9F7
Card White:       #FFFFFF
Text Dark:        #2A3441
Text Muted:       #64748B
Border:           #E2E8F0
```

### Fonts
```
Headings: Playfair Display
Body: Source Sans 3
```

### Common Padding
```
Section (Desktop): 100px 0
Section (Tablet):  80px 0
Section (Mobile):  60px 0
Card:              32px - 40px
Button:            16px 32px
```

### Common Border Radius
```
Cards:     12px
Buttons:   6px
Inputs:    8px
Images:    12px
Pills:     9999px
```

---

## 🎨 PRO TIPS

1. **Consistency is Key**: Use the same spacing, colors, and typography throughout
2. **Use Global Colors**: Set up global colors in Elementor Site Settings so you can change them site-wide
3. **Mobile First**: Always check mobile view after building desktop layout
4. **Animations**: Add subtle hover effects to make the site feel premium
5. **Whitespace**: Don't be afraid of generous padding and margins
6. **Images**: Use high-quality images with consistent aspect ratios

---

*This style guide was generated to help recreate the Prudent Juris law firm website in WordPress with Elementor.*
