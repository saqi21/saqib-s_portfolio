# Manual Deployment Steps

## Step-by-Step Deployment Guide

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Create Required Files
```bash
cp build/index.html build/404.html
touch build/.nojekyll
```

### Step 3: Checkout gh-pages Branch (or create it)
```bash
# Check if gh-pages branch exists
git checkout gh-pages 2>/dev/null || git checkout --orphan gh-pages

# If it exists, remove all files
git rm -rf . 2>/dev/null || true
```

### Step 4: Copy Build Files
```bash
# Copy all files from build folder to root
cp -r build/* .
```

### Step 5: Add and Commit
```bash
git add -A
git commit -m "Deploy portfolio - $(date +%Y-%m-%d)"
```

### Step 6: Push to GitHub
```bash
git push origin gh-pages --force
```

### Step 7: Return to Main Branch
```bash
git checkout main
```

### Step 8: Verify
- Wait 1-2 minutes
- Visit: https://saqi21.github.io/saqib-s_portfolio

