# AI Agent Instructions for f8-zoom-day37

## Project Overview

This is a React application built with Vite, focusing on creating a learning platform interface with features like course management, notifications, and user profiles. The project uses modern React patterns and SCSS modules for styling.

## Architecture

### Component Structure

-   `src/assets/layouts/DefaultLayout`: Contains the main layout components
    -   Core components like Header, SearchForm, UserMenu are modularized in `components/`
-   `src/assets/components`: Reusable components across the application
    -   `AppRoutes`: Central routing configuration using React Router (HashRouter)
    -   `Modal`: Reusable modal component with SCSS modules
    -   `GoToTop`: Scroll-to-top functionality component

### Routing

-   Uses HashRouter for GitHub Pages compatibility
-   Routes are centralized in `src/assets/components/AppRoutes/index.jsx`
-   Main routes: /, /profile, /modal-demo, /scroll-demo

### Styling

-   SCSS modules are used for component-scoped styling
-   Each component has its own `.module.scss` file
-   Global styles in `src/assets/styles/reset.scss`

## Development Workflow

### Setup and Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Key Dependencies

-   React 19.1.1 with modern hooks patterns
-   React Router 7.9.3 for routing
-   SASS for modular styling
-   Vite (rolldown-vite) for build tooling

### Project Conventions

1. Component Organization:

    - Each component has its own directory with `index.jsx` and `ComponentName.module.scss`
    - Layout components are separated from feature components

2. File Naming:

    - React components use PascalCase
    - SCSS modules follow the pattern: `ComponentName.module.scss`

3. Routing:
    - All routes are defined in `AppRoutes/index.jsx`
    - Uses HashRouter for GitHub Pages compatibility

## Common Tasks

1. Adding a new page:

    - Create component in `src/assets/pages/`
    - Add route in `AppRoutes/index.jsx`
    - Create matching SCSS module

2. Styling components:

    - Create `ComponentName.module.scss`
    - Import and use as CSS modules
    - Follow existing SCSS patterns

3. Modifying layout:
    - Edit components in `DefaultLayout/components/`
    - Global layout changes in `DefaultLayout/index.jsx`
