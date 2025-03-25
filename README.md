# Lwazi Cekiso Portfolio

A modern, interactive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Project Overview

This portfolio showcases Lwazi Cekiso's skills and projects as a Full Stack Developer with animated sections, project showcases, and a technology stack carousel.

## Local Development Setup

Follow these steps to set up the project on your local machine:

### Prerequisites

- Node.js (v18 or later)
- npm (v8 or later)

### Installation Steps

1. **Clone or download the project to your local machine**

2. **Navigate to the project directory**
   ```bash
   cd path/to/lwazi-portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   The application will be running at `http://localhost:5000`

## Project Structure

- `client/` - Frontend React application
  - `src/components/` - React components (Hero, About, Skills, etc.)
  - `src/pages/` - Page components
  - `src/lib/` - Utility functions and client setup
- `server/` - Express server
- `shared/` - Shared schemas and types

## Technologies Used

- React
- Tailwind CSS
- Framer Motion
- TypeScript
- Express
- Shadcn UI Components
- React Type Animation
- React Multi Carousel

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be available in the `dist/` directory.

## Customization

To customize this portfolio for your own use:
1. Update personal information in the component files
2. Modify the color scheme in `theme.json`
3. Update project details in `Projects.tsx`
4. Replace the image URLs with your own images