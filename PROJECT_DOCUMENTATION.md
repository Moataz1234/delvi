# DELVI Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Key Features](#key-features)
5. [Installation & Setup](#installation--setup)
6. [Development Workflow](#development-workflow)
7. [Architecture Details](#architecture-details)
8. [Internationalization (i18n)](#internationalization-i18n)
9. [Styling System](#styling-system)
10. [Routing System](#routing-system)
11. [API Structure](#api-structure)
12. [Component Library](#component-library)
13. [Pages & Routes](#pages--routes)
14. [Configuration Files](#configuration-files)
15. [Deployment](#deployment)
16. [Testing](#testing)

---

## Project Overview

**DELVI** is a full-stack React application for a ride-sharing/transportation platform. It's built as a Single Page Application (SPA) with a focus on providing a fair, transparent transportation service where passengers and drivers can negotiate prices directly.

### Key Highlights
- **Bilingual Support**: Arabic (primary) and English
- **Dual User Mode**: Passenger and Driver interfaces
- **Modern UI/UX**: Dark mode support, responsive design, smooth animations
- **Full-Stack Architecture**: React frontend with Express backend
- **Production Ready**: Built with TypeScript, testing setup, deployment configuration

---

## Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.9.2** - Type safety
- **React Router 6.30.1** - Client-side routing (SPA mode)
- **Vite 7.1.2** - Build tool and dev server
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Headless UI component primitives
- **Framer Motion 12.23.12** - Animation library
- **Lucide React 0.539.0** - Icon library
- **TanStack Query 5.84.2** - Data fetching and state management

### Backend
- **Express 5.1.0** - Web server framework
- **Node.js** - Runtime environment
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 17.2.1** - Environment variable management

### Development Tools
- **Vitest 3.2.4** - Testing framework
- **Prettier 3.6.2** - Code formatting
- **SWC** - Fast TypeScript/JavaScript compiler
- **TypeScript** - Static type checking

### UI Component Libraries
- **Radix UI Components** - Accessible, unstyled components:
  - Accordion, Alert Dialog, Avatar, Badge, Button
  - Card, Checkbox, Dialog, Dropdown Menu
  - Form, Input, Label, Popover, Select
  - Tabs, Toast, Tooltip, and many more

---

## Project Structure

```
pulse-field (2)/
├── client/                      # Frontend React application
│   ├── components/             # React components
│   │   ├── ui/                # Reusable UI components (Radix UI based)
│   │   └── LanguageSwitcher.tsx
│   ├── pages/                 # Route pages/components
│   │   ├── Index.tsx         # Home page
│   │   ├── AboutUs.tsx
│   │   ├── Careers.tsx
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── Founders.tsx
│   │   ├── News.tsx
│   │   ├── NotFound.tsx
│   │   ├── RideBooking.tsx
│   │   ├── Statistics.tsx
│   │   └── WhyUs.tsx
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── use-translation.tsx
│   ├── lib/                   # Utility functions
│   │   └── utils.ts          # cn() utility for class merging
│   ├── translations/          # i18n translation files
│   │   ├── ar.ts            # Arabic translations
│   │   ├── en.ts            # English translations
│   │   └── index.ts         # Translation utilities
│   ├── App.tsx               # Root component with routing
│   └── global.css            # Global styles and TailwindCSS setup
├── server/                    # Express backend
│   ├── routes/               # API route handlers
│   │   └── demo.ts
│   ├── index.ts              # Express server setup
│   └── node-build.ts         # Production server entry
├── shared/                    # Shared code between client and server
│   └── api.ts                # Shared TypeScript interfaces
├── netlify/                   # Netlify Functions for serverless deployment
│   └── functions/
│       └── api.ts
├── public/                    # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── dist/                      # Build output
│   ├── spa/                  # Client build
│   └── server/               # Server build
├── vite.config.ts            # Vite client configuration
├── vite.config.server.ts     # Vite server build configuration
├── tailwind.config.ts        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
├── netlify.toml              # Netlify deployment configuration
└── package.json              # Dependencies and scripts
```

---

## Key Features

### 1. **Bilingual Support (Arabic & English)**
- Complete internationalization system
- Context-based translation management
- Language switcher component
- RTL (Right-to-Left) support for Arabic
- Default language: Arabic

### 2. **Dual User Mode**
- **Passenger Mode**: View passenger-specific content and features
- **Driver Mode**: View driver-specific statistics and information
- Toggle between modes in navigation

### 3. **Dark Mode Support**
- Complete dark mode implementation
- Theme persistence (via context/state)
- Smooth transitions between themes
- Custom dark mode color palette

### 4. **Responsive Design**
- Mobile-first approach
- Responsive utilities and breakpoints
- Mobile menu navigation
- Adaptive layouts for all screen sizes

### 5. **Modern Animations**
- Loading screen with animated wheel
- Smooth scroll animations
- Interactive hover effects
- Animated counters and statistics
- Framer Motion integration

### 6. **Performance Features**
- Code splitting
- Lazy loading ready
- Optimized builds with Vite
- Fast refresh in development

---

## Installation & Setup

### Prerequisites
- **Node.js** 18+ or 22+ (recommended)
- **PNPM** 10.14.0+ (package manager)
- **Git** (for version control)

### Installation Steps

1. **Install dependencies:**
```bash
pnpm install
```

2. **Set up environment variables:**
   - Create a `.env` file in the root directory
   - Add required environment variables:
   ```env
   PING_MESSAGE=ping
   ```

3. **Start development server:**
```bash
pnpm dev
```
This starts both the frontend (Vite dev server) and backend (Express) on port 8080.

4. **Access the application:**
   - Open `http://localhost:8080` in your browser

---

## Development Workflow

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server (client + server on port 8080)

# Building
pnpm build            # Build both client and server for production
pnpm build:client     # Build only the client (SPA)
pnpm build:server     # Build only the server

# Production
pnpm start            # Start production server (Node.js)

# Code Quality
pnpm typecheck        # Run TypeScript type checking
pnpm test             # Run Vitest tests
pnpm format.fix       # Format code with Prettier
```

### Development Server Architecture

The development server uses Vite with a custom Express plugin:
- **Single Port**: Both frontend and backend run on port 8080
- **Hot Module Replacement (HMR)**: Instant updates for both client and server
- **API Proxy**: `/api/*` routes are handled by Express server
- **Static Assets**: Served by Vite dev server

---

## Architecture Details

### Frontend Architecture

#### Component Structure
- **Pages**: Route-level components in `client/pages/`
- **Components**: Reusable UI components in `client/components/`
- **Hooks**: Custom React hooks in `client/hooks/`
- **Utilities**: Helper functions in `client/lib/`

#### State Management
- **React Context**: For global state (translations, theme)
- **React Query (TanStack Query)**: For server state and data fetching
- **Local State**: React hooks (`useState`, `useEffect`) for component state

#### Routing
- **React Router 6**: Client-side routing
- **SPA Mode**: All routes handled client-side
- **Catch-all Route**: 404 handler for unmatched routes

### Backend Architecture

#### Express Server Setup
- **Middleware**: CORS, JSON parsing, URL encoding
- **API Routes**: Prefixed with `/api/`
- **Route Handlers**: Organized in `server/routes/`
- **Type Safety**: Shared types from `shared/api.ts`

#### Production Build
- **SSR Ready**: Server build configuration included
- **External Dependencies**: Properly externalized for Node.js
- **Environment Variables**: Managed via `dotenv`

---

## Internationalization (i18n)

### Translation System

The project uses a custom i18n solution built with React Context.

#### Translation Files Structure
```typescript
// client/translations/ar.ts
export const ar = {
  common: { ... },
  navigation: { ... },
  home: { ... },
  // ... more sections
};

// client/translations/en.ts
export const en = { ... };
```

#### Using Translations

```typescript
import { useTranslation } from '@/hooks/use-translation';

function MyComponent() {
  const { t, locale, setLocale } = useTranslation();
  
  return (
    <div>
      <h1>{t.home.hero.title}</h1>
      <p>Current locale: {locale}</p>
      <button onClick={() => setLocale('en')}>Switch to English</button>
    </div>
  );
}
```

#### Translation Provider

The `TranslationProvider` must wrap the app:
```typescript
<TranslationProvider>
  <App />
</TranslationProvider>
```

#### Supported Languages
- **Arabic (ar)**: Default language, RTL layout
- **English (en)**: Secondary language, LTR layout

---

## Styling System

### TailwindCSS Configuration

The project uses TailwindCSS 3 with custom configuration:

#### Brand Colors
```css
--brand-orange: 25 100% 55%
--brand-orange-light: 25 100% 65%
--brand-orange-dark: 25 100% 45%
--brand-navy: 220 100% 20%
--brand-navy-light: 220 100% 30%
--brand-navy-dark: 220 100% 10%
```

#### Usage in Components
```tsx
<div className="bg-brand-orange text-white">
  Orange button
</div>
```

#### Dark Mode Colors
Dark mode colors are defined in `global.css` and automatically applied when `.dark` class is present on the document root.

### Utility Functions

#### `cn()` Utility
Combines `clsx` and `tailwind-merge` for conditional class names:

```typescript
import { cn } from '@/lib/utils';

<div className={cn(
  "base-class",
  { "conditional-class": condition },
  props.className
)} />
```

### Responsive Utilities

Custom responsive classes defined in `global.css`:
- `.text-responsive-xl` - Responsive text sizing
- `.py-responsive` - Responsive vertical padding
- `.gap-responsive` - Responsive grid gaps

---

## Routing System

### Route Configuration

Routes are defined in `client/App.tsx`:

```typescript
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/book-ride" element={<RideBooking />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/features" element={<Features />} />
  <Route path="/why-us" element={<WhyUs />} />
  <Route path="/news" element={<News />} />
  <Route path="/statistics" element={<Statistics />} />
  <Route path="/founders" element={<Founders />} />
  <Route path="/careers" element={<Careers />} />
  <Route path="/FAQ" element={<FAQ />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Navigation

Use React Router's `Link` component:
```typescript
import { Link } from 'react-router-dom';

<Link to="/about">About Us</Link>
```

### Programmatic Navigation

```typescript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/about');
```

---

## API Structure

### API Endpoints

Currently implemented endpoints:

#### 1. GET `/api/ping`
Simple health check endpoint.

**Response:**
```json
{
  "message": "ping"
}
```

#### 2. GET `/api/demo`
Demo endpoint with typed response.

**Response:**
```typescript
interface DemoResponse {
  message: string;
}
```

### Adding New API Routes

1. **Create shared type** (optional):
```typescript
// shared/api.ts
export interface MyRouteResponse {
  data: string;
}
```

2. **Create route handler**:
```typescript
// server/routes/my-route.ts
import { RequestHandler } from "express";
import { MyRouteResponse } from "@shared/api";

export const handleMyRoute: RequestHandler = (req, res) => {
  const response: MyRouteResponse = {
    data: "Hello"
  };
  res.json(response);
};
```

3. **Register route**:
```typescript
// server/index.ts
import { handleMyRoute } from "./routes/my-route";

app.get("/api/my-route", handleMyRoute);
```

4. **Use in React**:
```typescript
const response = await fetch('/api/my-route');
const data: MyRouteResponse = await response.json();
```

---

## Component Library

### UI Components Location
All UI components are in `client/components/ui/` and are based on Radix UI primitives.

### Available Components

- **Form Components**: Button, Input, Textarea, Select, Checkbox, Radio, Switch
- **Layout Components**: Card, Separator, Container, Grid
- **Feedback Components**: Alert, Toast, Dialog, Tooltip
- **Navigation Components**: Tabs, Accordion, Dropdown Menu, Breadcrumb
- **Data Display**: Badge, Avatar, Table, Chart
- **Overlay Components**: Dialog, Sheet, Popover, Alert Dialog

### Using Components

```typescript
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

<Button variant="default" size="lg">
  Click me
</Button>

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

---

## Pages & Routes

### Home Page (`/`)
**File**: `client/pages/Index.tsx`

Features:
- Hero section with animated background carousel
- User type toggle (Passenger/Driver)
- Dark mode toggle
- Language switcher
- Statistics section with animated counters
- Features showcase
- About section
- Founders section
- Download section
- Footer

### Book Ride (`/book-ride`)
**File**: `client/pages/RideBooking.tsx`

Ride booking interface for passengers.

### About Us (`/about`)
**File**: `client/pages/AboutUs.tsx`

Company information and mission.

### Features (`/features`)
**File**: `client/pages/Features.tsx`

Detailed feature descriptions.

### Why Us (`/why-us`)
**File**: `client/pages/WhyUs.tsx`

Competitive advantages and benefits.

### News (`/news`)
**File**: `client/pages/News.tsx`

Latest news and updates.

### Statistics (`/statistics`)
**File**: `client/pages/Statistics.tsx`

Platform statistics and metrics.

### Founders (`/founders`)
**File**: `client/pages/Founders.tsx`

Founder profiles and team information.

### Careers (`/careers`)
**File**: `client/pages/Careers.tsx`

Job listings and career opportunities.

### FAQ (`/FAQ`)
**File**: `client/pages/FAQ.tsx`

Frequently asked questions.

### 404 Not Found (`*`)
**File**: `client/pages/NotFound.tsx`

Catch-all route for unmatched paths.

---

## Configuration Files

### TypeScript (`tsconfig.json`)
- Target: ES2020
- Module: ESNext
- JSX: react-jsx
- Path aliases: `@/*` and `@shared/*`
- Strict mode: Disabled (can be enabled)

### Vite (`vite.config.ts`)
- Port: 8080
- Plugin: React with SWC
- Path aliases configured
- Express plugin for dev server integration
- File system access restricted to client and shared

### TailwindCSS (`tailwind.config.ts`)
- Dark mode: Class-based
- Content: All files in `client/**/*.{ts,tsx}`
- Custom brand colors
- Custom animations
- Responsive breakpoints

### Netlify (`netlify.toml`)
- Build command: `npm run build:client`
- Publish directory: `dist/spa`
- Functions directory: `netlify/functions`
- API redirects configured

---

## Deployment

### Production Build

1. **Build the application:**
```bash
pnpm build
```

This creates:
- `dist/spa/` - Client build (static files)
- `dist/server/` - Server build (Node.js)

2. **Start production server:**
```bash
pnpm start
```

### Deployment Options

#### 1. Netlify (Serverless)
- Configured via `netlify.toml`
- Uses Netlify Functions for API routes
- Static SPA deployment
- File: `netlify/functions/api.ts`

#### 2. Vercel
- Similar to Netlify
- Supports serverless functions
- Automatic deployments from Git

#### 3. Traditional Node.js Server
- Use the server build from `dist/server/`
- Serve static files from `dist/spa/`
- Run with Node.js

#### 4. Static Hosting (SPA Only)
- Deploy `dist/spa/` to any static host
- Configure redirects for client-side routing
- API would need to be hosted separately

### Environment Variables

Set these in your deployment platform:
- `PING_MESSAGE` - Optional, defaults to "ping"
- Any other API keys or secrets needed

---

## Testing

### Testing Framework
- **Vitest**: Fast test runner
- **Testing Library**: For React component testing (if added)

### Running Tests
```bash
pnpm test
```

### Test Configuration
Tests can be placed alongside components or in a dedicated `__tests__` directory.

---

## Path Aliases

### Available Aliases

```typescript
// Client code
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';

// Shared code
import { DemoResponse } from '@shared/api';
```

### Configuration
- `@/*` → `./client/*` (TypeScript and Vite)
- `@shared/*` → `./shared/*` (TypeScript and Vite)

---

## Custom Hooks

### `useTranslation()`
Provides translation functionality.

```typescript
const { t, locale, setLocale } = useTranslation();
```

### `useMobile()`
Detects mobile devices (if implemented).

```typescript
const isMobile = useMobile();
```

### `useToast()`
Manages toast notifications.

```typescript
const { toast } = useToast();
toast({
  title: "Success",
  description: "Operation completed"
});
```

---

## Best Practices

### Code Organization
- Keep components small and focused
- Use TypeScript for type safety
- Follow the existing file structure
- Use path aliases for imports

### Styling
- Prefer TailwindCSS utility classes
- Use `cn()` for conditional classes
- Keep custom CSS minimal
- Use CSS variables for theming

### State Management
- Use React Query for server state
- Use Context for global UI state
- Use local state for component-specific state

### Performance
- Lazy load heavy components
- Optimize images
- Use React.memo for expensive components
- Profile with React DevTools

---

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Change port in `vite.config.ts` or kill process using port 8080

2. **TypeScript errors**
   - Run `pnpm typecheck` to see all errors
   - Ensure all dependencies are installed

3. **Build failures**
   - Clear `dist/` and `node_modules/`
   - Reinstall dependencies
   - Check Node.js version compatibility

4. **Translation not working**
   - Ensure `TranslationProvider` wraps your app
   - Check translation keys exist in both `ar.ts` and `en.ts`

---

## Contributing

### Development Workflow
1. Create a feature branch
2. Make your changes
3. Test locally
4. Ensure TypeScript checks pass
5. Submit a pull request

### Code Style
- Use Prettier for formatting
- Follow existing code patterns
- Add TypeScript types
- Write meaningful commit messages

---

## License

[Add your license information here]

---

## Contact & Support

For questions or support, please contact the development team.

---

**Last Updated**: [Current Date]
**Version**: 1.0.0

