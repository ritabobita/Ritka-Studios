# Ritka Studios - Claude Development Guide

## Project Overview
Ritka Studios is a pottery website built with Next.js, featuring a dynamic events gallery system and static work showcase. The site automatically manages event visibility based on real-time scheduling.

## Key Features Implemented

### 🎯 Dynamic Events Gallery
The crown jewel of the project - an intelligent events system that automatically manages event visibility.

**Location:** `src/app/components/Events Gallery/`

**Key Features:**
- **Smart Time-Based Filtering**: Events automatically disappear after their end time passes
- **Timezone Support**: Proper EST/EDT handling using date-fns-tz library
- **Sliding Gallery**: Smooth horizontal scrolling with navigation buttons
- **Real Event Data**: Displays actual event flyers and links to external event pages
- **Responsive Design**: Works seamlessly across all device sizes

**Technical Implementation:**
- Uses `date-fns-tz` for reliable timezone conversion
- Events expire exactly 1 minute after their end time
- Automatic navigation button visibility based on content overflow
- Optimized with `useMemo` for performance

### 📝 Events Data Management
**File:** `src/app/components/Events Gallery/eventsData.js`

Events are stored in a clean, maintainable format:
```javascript
{
  id: 1,
  title: 'Event Name',
  date: '2025-09-13',
  startTime: '12:00',
  endTime: '17:00',
  timezone: 'America/New_York',
  location: 'Event Location',
  img: '/images/event-flyer.jpg',
  url: 'https://event-website.com'
}
```

**To Add New Events:**
1. Open `eventsData.js`
2. Add event object to the array
3. Place flyer image in `public/images/`
4. Event will automatically appear and disappear based on timing

### 🖼️ Static Work Gallery
**Location:** `src/app/components/Static Work Gallery/`

Features a 2x2 grid layout showcasing pottery work with:
- Hover animations
- Direct link to Etsy shop
- Responsive design for all devices
- Clean decorative line elements

### 📧 Contact Form
**Location:** `src/app/contact/`

Features a functional contact form with:
- Email validation using HTML5 `type="email"`
- Form submission to `/api/contact` endpoint
- Success message display after submission
- Responsive design with Tailwind utilities
- Mobile-optimized: Form fields stack vertically on small screens (flex-col on mobile, flex-row on sm+)

### 🎨 Video Hero Section
**Location:** `src/app/components/Video Hero/`

Hero section featuring:
- Autoplay looping video background with placeholder image fallback
- "Shop Now" CTA button linking to Etsy shop
- Transparent button with white border and hover effect (inverts to white background with black text)
- Consistent button styling across site (matches contact form submit button)
- Responsive sizing for different screen sizes

### 🔗 Footer with Social Links
**Location:** `src/app/components/Footer/`

Footer includes:
- Instagram and Etsy logo icons with hover effects
- Instagram icon: Changes to #dd2a7b on hover
- Etsy icon: Custom inline SVG component (`EtsyIcon.js`) that changes to #F56400 on hover
- Smooth 0.2s color transitions
- Both icons use simple `color` property for clean, maintainable code

## Core Technical Decisions

### ⏰ Event Timing Logic
**Critical Feature:** Events automatically expire based on real-time comparison

**How it works:**
1. `isEventActive()` function compares current time to event end time
2. Uses `zonedTimeToUtc()` for accurate timezone conversion
3. Events disappear exactly when their end time passes (plus 1 minute grace period)
4. Filtering happens on component render - no manual refresh needed

**Code Location:** `src/app/components/Events Gallery/EventsGallery.js:10-19`

### 🎨 Styling Architecture
- **SCSS Modules**: Component-scoped styling
- **Nested selectors**: Clean, maintainable CSS structure
- **Tailwind CSS**: Used alongside SCSS for utility classes and responsive design
- **Mobile-first approach**: Responsive breakpoints (Tailwind: sm=640px, md=768px, lg=1024px; Custom SCSS: 768px, 480px, 425px, 320px)
- **Consistent naming**: BEM-style class naming convention
- **Form inputs**: Styled using attribute selectors (`input[type=text]`, `input[type=email]`)

### 🚀 Performance Optimizations
1. **Data Extraction**: Events data moved to separate file
2. **Memoization**: `useMemo` for event filtering
3. **Function Hoisting**: Utility functions moved outside components
4. **Consolidated Logic**: Combined slide functions and state management

## Important Commands

### Development
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
```

### Event Management
- **Add events**: Edit `src/app/components/Events Gallery/eventsData.js`
- **Add images**: Place in `public/images/` directory
- **Test timing**: Change `endTime` to past time, event disappears automatically

## File Structure
```
src/app/
├── components/
│   ├── Events Gallery/
│   │   ├── EventsGallery.js           # Main component with timing logic
│   │   ├── EventsGallery.module.scss  # Responsive styling
│   │   └── eventsData.js              # Event data and configuration
│   ├── Static Work Gallery/
│   │   ├── StaticWorkGallery.js        # Pottery showcase component
│   │   └── StaticWorkGallery.module.scss # Grid layout and animations
│   ├── Video Hero/
│   │   ├── VideoHero.js               # Hero section with video background
│   │   └── VideoHero.module.scss      # Hero styling with CTA button
│   ├── Footer/
│   │   ├── Footer.js                  # Footer with social links
│   │   ├── Footer.module.scss         # Footer styling with hover effects
│   │   └── EtsyIcon.js                # Custom inline SVG component
│   └── About Preview/
│       ├── AboutPreview.js            # About section preview
│       └── AboutPreview.module.scss
├── contact/
│   ├── page.js                        # Contact form page
│   └── contact.module.scss            # Contact form styling
└── api/
    └── contact/
        └── route.js                   # Contact form submission endpoint
```

## Dependencies
- **date-fns**: Core date manipulation
- **date-fns-tz**: Timezone conversion for event timing
- **lucide-react**: Icon components (Instagram icon)
- **Next.js**: React framework with Image optimization

## Key Implementation Notes

### Event Timing System
- Events use 24-hour format (`"17:00"` = 5:00 PM)
- All times are in `America/New_York` timezone
- Grace period: Events remain visible until 1 minute after end time
- Comparison uses UTC for accuracy across timezones

### Image Handling
- Event flyers: Use full Next.js image paths (`"/images/filename.jpg"`)
- All images stored in `public/images/` directory
- Automatic optimization via Next.js Image component

### Navigation Logic
- Slide buttons appear only when content overflows container
- Smooth scrolling with 320px increment
- State management tracks left/right scroll capabilities
- Responsive button sizing for mobile devices

### Form Validation
- HTML5 email validation on contact form (`type="email"`)
- Browser displays native validation tooltip for invalid emails
- Required fields marked with asterisk (*)
- Form prevents submission until all validations pass

### Icon Components
- **Instagram**: Uses lucide-react icon library
- **Etsy**: Custom inline SVG component for cleaner code and easier color changes
- Both use `fill="currentColor"` or inherit color for CSS-based color control
- Avoids complex CSS filters for maintainability

## Common Issues & Solutions

### Build Errors
- **Apostrophes in JSX**: Always escape apostrophes as `&apos;` to avoid React linting errors
- **API Routes**: Comment out unused API routes (like `/api/prices`) to prevent build-time errors when environment variables aren't set
- **ESLint warnings vs errors**: Warnings (like `<img>` tags or useEffect dependencies) won't block builds, but errors (like unescaped entities) will

## Future Enhancements
- Event filtering by location or type
- Calendar integration
- Email notifications for upcoming events
- Admin panel for event management
- Analytics tracking for event engagement

---

**Last Updated:** October 2025
**Primary Features:** Dynamic event timing, responsive gallery, contact form, video hero CTA, footer social links with Etsy integration
**Critical Logic:** Real-time event expiration based on EST/EDT timezone