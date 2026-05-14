# Component-Based Architecture - JS Practice

## Project Structure

```
src/
├── components/
│   ├── Navigation/
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   └── CodeCard/
│       ├── CodeCard.jsx
│       └── CodeCard.css
├── App.jsx
├── App.css
├── index.jsx
└── index.css

Root:
├── updated-index.html (new entry point)
├── package.json
├── vite.config.js
└── Original files:
    ├── index.html (old)
    ├── r.jsx (old)
    └── index.css (old)
```

## Architecture Overview

### Components

1. **Navigation Component** (`Navigation.jsx`)
   - Displays the navigation bar with logo and menu items
   - Encapsulated styling in `Navigation.css`
   - Reusable and independent

2. **Hero Component** (`Hero.jsx`)
   - Displays the main heading
   - Separate styling in `Hero.css`
   - Single responsibility principle

3. **CodeCard Component** (`CodeCard.jsx`)
   - Reusable component for each practice question
   - Props: `id`, `question`, `code`, `bgColor`
   - Uses React hooks (`useState`) for managing code visibility
   - Animated toggle functionality with smooth transitions
   - Component-level styling in `CodeCard.css`

4. **App Component** (`App.jsx`)
   - Main container component
   - Manages question data array
   - Maps over questions to render CodeCard components
   - Integrates Navigation and Hero components

## Key Improvements

✅ **Modular Structure** - Each component is independent and reusable
✅ **Single Responsibility** - Each component has one purpose
✅ **Scalable** - Easy to add new questions or components
✅ **Maintainable** - Clear file organization and naming conventions
✅ **Separated Concerns** - CSS is scoped to components
✅ **State Management** - React hooks for managing component state
✅ **Better Performance** - Only show/hide code, not recreate DOM
✅ **Animations** - Smooth transitions for better UX

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   This will start Vite at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Migration Notes

- **Old Files**: `index.html`, `r.jsx`, `index.css` are legacy
- **New Entry Point**: Use `updated-index.html` with React
- **Component Pattern**: Shows how to convert procedural code to component-based React architecture
- **State Management**: Replaced DOM manipulation with React's `useState` hook
