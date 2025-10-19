# 🚀 Guide: Push Your Srivalli Website Updates to GitHub

## Step 1: Initialize Git Repository (if not already done)

Open PowerShell in your project folder and run:

```powershell
cd "c:\Users\Kunal\Downloads\Srivalli-main\Srivalli-main"
git init
```

## Step 2: Add Your GitHub Remote

If you haven't already connected to your GitHub repository:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/Srivalli.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

If you're not sure of your repository URL, go to your GitHub repository and copy the URL.

## Step 3: Create .gitignore File

Before committing, let's make sure we don't upload unnecessary files:

```powershell
# Create .gitignore file
@"
# Dependencies
node_modules/
.npm/

# Build output
dist/
build/
.vite/

# Environment variables
.env
.env.local
.env.production

# Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db
desktop.ini

# Logs
*.log
npm-debug.log*
logs/

# Temporary files
*.tmp
.cache/
"@ | Out-File -FilePath .gitignore -Encoding UTF8
```

## Step 4: Stage Your Changes

Add all the modified and new files:

```powershell
git add .
```

## Step 5: Commit Your Changes

Create a commit with a descriptive message:

```powershell
git commit -m "Migrate from external image URLs to local image hosting

- Created organized folder structure for images (slot-1 to slot-11)
- Updated constants.ts to use descriptive filenames
- Added image error handling in components (MenuItemCard, Hero, Gallery, ReviewCard)
- Uploaded Slot 1 (Dosa - 21 items) and Slot 2 (Srivalli Special Dosa - 14 items)
- Added verification and helper scripts
- Created comprehensive documentation (IMAGE_UPLOAD_STATUS.md, QUICK_START.md, MIGRATION_SUMMARY.md)"
```

## Step 6: Push to GitHub

### If this is your first push to a new repository:

```powershell
git branch -M main
git push -u origin main
```

### If you're updating an existing repository:

```powershell
git push origin main
```

Or if your default branch is `master`:

```powershell
git push origin master
```

## Step 7: Handle Authentication

When prompted for credentials, you have two options:

### Option A: Personal Access Token (Recommended)
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with `repo` permissions
3. Use this token as your password when prompted

### Option B: GitHub Desktop (Easier)
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Add the repository folder
4. Commit and push from the GUI

## 🔍 Verify Your Push

After pushing, visit your GitHub repository:
```
https://github.com/YOUR_USERNAME/Srivalli
```

You should see:
- All your updated files
- The new commit message
- Updated "last updated" timestamp

## ⚠️ Important Notes

### Large Files Warning
- The image files in `public/images/menu/slot-1/` and `slot-2/` will be uploaded
- If any single image is > 100MB, you'll need Git LFS (Large File Storage)
- To check file sizes:
  ```powershell
  Get-ChildItem -Path "public\images\menu\slot-1" -Recurse | Select-Object Name, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB,2)}}
  ```

### If Push Fails

If you get an error about unrelated histories:
```powershell
git pull origin main --allow-unrelated-histories
git push origin main
```

### If Repository Already Has Files

If your GitHub repo already has files, first pull them:
```powershell
git pull origin main
# Resolve any conflicts if they appear
git push origin main
```

## 📦 Quick Script (All-in-One)

If your repository is already set up, you can use this quick script:

```powershell
# Navigate to project
cd "c:\Users\Kunal\Downloads\Srivalli-main\Srivalli-main"

# Stage all changes
git add .

# Commit with message
git commit -m "Update: Migrate to local image hosting and add Slots 1-2"

# Push to GitHub
git push origin main
```

## 🆘 Troubleshooting

### Problem: "fatal: not a git repository"
**Solution:** Run `git init` first

### Problem: "failed to push some refs"
**Solution:** Pull first with `git pull origin main`, then push

### Problem: "Permission denied"
**Solution:** Set up authentication (use Personal Access Token)

### Problem: "Large files detected"
**Solution:** Use Git LFS or compress images more

## ✅ After Successful Push

Once pushed successfully:

1. ✨ Your code is backed up on GitHub
2. 🌐 You can enable GitHub Pages for free hosting
3. 🔄 Set up GitHub Actions for automatic deployment
4. 👥 Others can contribute to your project

## 🎯 Next Steps

After pushing:
1. Consider setting up GitHub Pages: Settings → Pages → Deploy from main branch
2. Add a LICENSE file if you want to specify usage terms
3. Update your README.md with setup instructions
4. Add remaining image slots (3-11) and push updates

---

**Need Help?** If you encounter any issues, let me know and I can help troubleshoot!
