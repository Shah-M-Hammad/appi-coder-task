# Appicoders Website

A modern, responsive website built with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

#### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

#### `npm run preview`

Locally preview the production build.

## Project Structure

```
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   └── ui/            # Reusable UI components (shadcn/ui)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.js             # Main application component
│   ├── App.css            # Application styles
│   ├── index.js           # Entry point
│   └── index.css          # Global styles with Tailwind
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## Features

- Modern React 19 with functional components and hooks
- Vite for fast development and optimized builds
- Tailwind CSS for utility-first styling
- shadcn/ui components for a consistent UI
- Fully responsive design
- Smooth scroll navigation
- Mobile-friendly navigation menu
- Interactive carousels and animations

## Technologies Used

- **React 19** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful & consistent icons
- **React Router DOM** - Client-side routing

## Configuration

### Path Aliases

The project uses `@` as an alias for the `src` directory. This is configured in `vite.config.js`:

```javascript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

You can import files like:
```javascript
import Component from '@/components/Component';
```

### Tailwind CSS

Tailwind is configured in `tailwind.config.js` with custom theme extensions and animations.

## Troubleshooting

If you encounter any issues:

1. **Clear node_modules and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
```

2. **Check Node.js version:**
```bash
node --version
```
Ensure you're using Node.js v16 or higher.

3. **Clear Vite cache:**
```bash
rm -rf node_modules/.vite
npm run dev
```

## Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
