#!/bin/bash

echo "🚀 Setting up LwaziDevPortfolio..."

# Install global dependencies
echo "📦 Installing global dependencies..."
npm install -g tsx drizzle-kit

# Install root project dependencies
echo "📦 Installing root project dependencies..."
npm install

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client && npm install
cd ..

# Install server dependencies (if they exist separately)
if [ -d "server" ] && [ -f "server/package.json" ]; then
    echo "📦 Installing server dependencies..."
    cd server && npm install
    cd ..
fi

# Setup database (if needed)
if [ -f "drizzle.config.ts" ]; then
    echo "🗄️ Setting up database..."
    npx drizzle-kit push
fi

# Initialize Tailwind if not already initialized
if [ ! -f "client/tailwind.config.ts" ]; then
    echo "🎨 Setting up Tailwind CSS..."
    cd client
    npx tailwindcss init -p
    cd ..
fi

echo "✨ Setup complete! You can now run:"
echo "- 'npm run dev' in the client directory for frontend"
echo "- 'npm run dev' in the root directory for backend"