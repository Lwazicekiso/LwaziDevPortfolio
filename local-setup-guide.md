# Setting Up the Portfolio Project Locally

## Downloading the Project

The simplest way to get all the code from Replit to your local computer:

1. Click on the **three dots (...)** in the top-left sidebar menu
2. Select **"Download as zip"** 
3. Save and extract the ZIP file to your preferred location

## Installation Process

### Step 1: Prerequisites
- Install [Node.js](https://nodejs.org/) (v18 or newer)
- Make sure npm is properly installed (comes with Node.js)

### Step 2: Install Dependencies
Open a terminal in the extracted project folder and run:
```bash
npm install
```

This will install all dependencies listed in package.json, including:
- React and React DOM
- Tailwind CSS
- Framer Motion (for animations)
- React Type Animation (for typewriter effect)
- React Multi Carousel
- Express (for server)
- And all other UI components and utilities

### Step 3: Start Development Server
Run the following command to start the development server:
```bash
npm run dev
```

The app will be available at: `http://localhost:5000`

## Project Structure Overview

- **client/** - Frontend React application
  - **src/components/** - Individual components (Hero, About, Skills, etc.)
  - **src/pages/** - Page components
- **server/** - Express server setup
- **shared/** - Shared schemas and types
- **package.json** - Dependencies and scripts
- **theme.json** - Design theme configuration

## Customizing the Portfolio

To personalize this portfolio:
1. Update personal information in the component files (under client/src/components/)
2. Replace project details in Projects.tsx
3. Update skills in Skills.tsx
4. Modify the theme colors in theme.json

## Building for Production

When you're ready to deploy:
```bash
npm run build
```

This will create optimized production files in the dist/ directory.

## Common Issues & Solutions

- If you face any errors during installation, try deleting node_modules folder and package-lock.json, then run npm install again
- Make sure you're using the recommended Node.js version (v18+)
- If port 5000 is in use, you may need to modify the port in server/index.ts