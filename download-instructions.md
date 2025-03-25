# How to Download and Set Up Locally

To download this project and run it on your local machine, follow these instructions:

## 1. Download the Project Files

### Option 1: Use Replit's Download Feature
- Click on the three dots (...) in the top left sidebar of your Replit project
- Select "Download as zip" from the dropdown menu
- Save the ZIP file to your computer and extract it

### Option 2: Clone from GitHub (If you've connected Replit to GitHub)
If you've already pushed this to GitHub, you can clone it with:
```bash
git clone [your-github-repo-url]
```

## 2. Install Dependencies and Run Locally

1. **Make sure you have Node.js installed**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/)
   - This project requires Node.js v18 or later

2. **Open a terminal and navigate to the project folder**
   ```bash
   cd path/to/extracted/project
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser and go to**
   ```
   http://localhost:5000
   ```

## Project Dependencies

This project uses the following main dependencies:

- React & React DOM
- Tailwind CSS
- Framer Motion for animations
- React Type Animation for the typewriter effect
- React Multi Carousel for the technology carousel
- Shadcn UI Components for UI elements
- Express for the server

All dependencies are listed in the `package.json` file and will be installed when you run `npm install`.

## Customizing the Portfolio

Once you have the project running locally:

1. Update personal information in the component files (in `client/src/components/`)
2. Modify the color scheme in `theme.json` 
3. Replace the project images and details in `client/src/components/Projects.tsx`
4. Update your skills in `client/src/components/Skills.tsx`

## Building for Production

To create a production build, run:
```bash
npm run build
```

The production-ready files will be in the `dist/` directory.