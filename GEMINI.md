# Diseño de Portafolio One Page

## Project Overview
This is a modern, one-page portfolio application built with React, TypeScript, and Tailwind CSS. It uses Vite as the build tool and leverages Radix UI primitives (likely via a library like shadcn/ui) for accessible UI components. The project follows a component-based architecture with a clean separation between domain-specific components and reusable UI elements.

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm

### Installation & Run
1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start development server:**
    ```bash
    npm run dev
    ```
3.  **Build for production:**
    ```bash
    npm run build
    ```

## Architecture & File Structure

### Key Directories
-   **`src/app/App.tsx`**: The main application entry point. It orchestrates the one-page layout, stacking sections like `Navbar`, `Hero`, `About`, `Projects`, etc.
-   **`src/app/components/portfolio/`**: Contains the main sections of the portfolio page (e.g., `Hero.tsx`, `Projects.tsx`, `Contact.tsx`).
-   **`src/app/components/ui/`**: Contains reusable, atomic UI components (e.g., `button.tsx`, `card.tsx`), built on top of Radix UI primitives.
-   **`src/data/`**: Holds static data files. `portfolio.ts` currently defines the `projects` data and interfaces.
-   **`src/styles/`**: Global styles and Tailwind configuration.

### Data Management
-   Project data is currently static and defined in `src/data/portfolio.ts`. This file exports interfaces (like `Project`) and arrays of data used by the components.

## Development Conventions

-   **Styling:** Use Tailwind CSS for all styling. Global styles are in `src/styles`.
-   **Imports:** Use the `@` alias to refer to the `src` directory (e.g., `import { Button } from '@/app/components/ui/button'`).
-   **Components:**
    -   Keep section-specific logic in `src/app/components/portfolio`.
    -   Keep generic UI components in `src/app/components/ui`.
-   **TypeScript:** Ensure all data and props are typed. Interfaces are used for data models (e.g., `Project` interface).

## Key Configuration Files
-   **`vite.config.ts`**: Vite configuration, including the `@` alias setup and plugins (React, Tailwind).
-   **`package.json`**: Dependencies and scripts. Note the usage of `@radix-ui/*` packages and `framer-motion`.
-   **`tailwind.css` / `index.css`**: CSS entry points.
