#!/bin/bash

echo "🚀 Building your iOS Resume website..."

# Build the project
npm run build

echo "✅ Build completed!"

echo "🌐 Choose your deployment method:"
echo "1. Vercel (Recommended)"
echo "2. Netlify"
echo "3. GitHub Pages"
echo "4. Firebase Hosting"
echo "5. Just build (no deploy)"

read -p "Enter your choice (1-5): " choice

case $choice in
  1)
    echo "🚀 Deploying to Vercel..."
    npx vercel --prod
    ;;
  2)
    echo "🚀 Deploying to Netlify..."
    npx netlify deploy --prod
    ;;
  3)
    echo "🚀 Setting up GitHub Pages..."
    echo "Please push your code to GitHub and enable GitHub Pages in repository settings."
    ;;
  4)
    echo "🚀 Deploying to Firebase..."
    npx firebase deploy
    ;;
  5)
    echo "✅ Build completed! Your files are in the 'dist' folder."
    echo "You can manually upload the 'dist' folder to any hosting service."
    ;;
  *)
    echo "❌ Invalid choice. Please run the script again."
    ;;
esac
