#!/bin/bash

# Manual deployment script to fix E2BIG error
# This script manually pushes the build folder to gh-pages branch

echo "🚀 Starting manual deployment..."

# Step 1: Build the project
echo "📦 Building project..."
npm run build

# Step 2: Create/update 404.html and .nojekyll
echo "📝 Creating 404.html and .nojekyll..."
cp build/index.html build/404.html
touch build/.nojekyll

# Step 3: Checkout or create gh-pages branch
echo "🌿 Setting up gh-pages branch..."
git checkout --orphan gh-pages-temp || true
git reset --hard

# Step 4: Copy build contents to root
echo "📋 Copying build files..."
cp -r build/* .

# Step 5: Add and commit
echo "💾 Committing changes..."
git add -A
git commit -m "Deploy portfolio - $(date +%Y-%m-%d)"

# Step 6: Force push to gh-pages
echo "📤 Pushing to gh-pages branch..."
git branch -D gh-pages 2>/dev/null || true
git branch -m gh-pages
git push -f origin gh-pages

# Step 7: Cleanup and return to main
echo "🧹 Cleaning up..."
git checkout main
git branch -D gh-pages-temp 2>/dev/null || true

echo "✅ Deployment complete!"
echo "🌐 Your site should be live at: https://saqi21.github.io/saqib-s_portfolio"
echo "⏳ Wait 1-2 minutes for GitHub Pages to update"

