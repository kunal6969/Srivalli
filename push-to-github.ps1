# Quick Git Setup and Push Script
# Run this in PowerShell

Write-Host "🚀 Setting up Git and pushing to GitHub..." -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git is not installed. Please install Git from: https://git-scm.com/" -ForegroundColor Red
    exit 1
}

# Initialize git if not already initialized
if (!(Test-Path ".git")) {
    Write-Host "📦 Initializing git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already initialized" -ForegroundColor Green
}

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if (!$remoteExists) {
    Write-Host ""
    Write-Host "❓ Enter your GitHub repository URL:" -ForegroundColor Yellow
    Write-Host "   (e.g., https://github.com/YourUsername/Srivalli.git)" -ForegroundColor Gray
    $repoUrl = Read-Host "Repository URL"
    
    if ($repoUrl) {
        git remote add origin $repoUrl
        Write-Host "✅ Remote added: $repoUrl" -ForegroundColor Green
    } else {
        Write-Host "❌ No repository URL provided" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✅ Remote already configured: $remoteExists" -ForegroundColor Green
}

# Check current branch
$currentBranch = git branch --show-current
if (!$currentBranch) {
    Write-Host "📝 Creating main branch..." -ForegroundColor Yellow
    git checkout -b main
    $currentBranch = "main"
}

Write-Host ""
Write-Host "📊 Current status:" -ForegroundColor Cyan
git status --short

Write-Host ""
Write-Host "📦 Staging all changes..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "💬 Creating commit..." -ForegroundColor Yellow
$commitMessage = @"
Migrate from external image URLs to local image hosting

- Created organized folder structure for images (slot-1 to slot-11)
- Updated constants.ts to use descriptive filenames instead of item-1, item-2, etc.
- Added image error handling in components (MenuItemCard, Hero, Gallery, ReviewCard)
- Uploaded Slot 1 (Dosa - 21 items) and Slot 2 (Srivalli Special Dosa - 14 items)
- Added verification and helper scripts (verify-images.js, update-images.js)
- Created comprehensive documentation:
  * IMAGE_UPLOAD_STATUS.md - Status of image uploads
  * QUICK_START.md - Guide for adding images
  * MIGRATION_SUMMARY.md - Summary of migration
  * GITHUB_PUSH_GUIDE.md - Guide for pushing to GitHub
  
Benefits:
- Better performance (no external dependencies)
- More maintainable code (descriptive filenames)
- Graceful fallback UI for missing images
- Ready for remaining slots (3-11) to be uploaded
"@

git commit -m $commitMessage

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Commit created successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Commit failed or no changes to commit" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "   Branch: $currentBranch" -ForegroundColor Gray
Write-Host ""

# Try to push
git push -u origin $currentBranch

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub! 🎉" -ForegroundColor Green
    Write-Host ""
    Write-Host "📍 Next steps:" -ForegroundColor Cyan
    Write-Host "   1. Visit your GitHub repository to verify the changes"
    Write-Host "   2. Upload remaining image slots (3-11)"
    Write-Host "   3. Run 'npm run dev' to test locally"
    Write-Host "   4. Consider setting up GitHub Pages for free hosting"
} else {
    Write-Host ""
    Write-Host "❌ Push failed. Common solutions:" -ForegroundColor Red
    Write-Host "   1. If authentication failed:" -ForegroundColor Yellow
    Write-Host "      - Use a Personal Access Token instead of password"
    Write-Host "      - Or use GitHub Desktop for easier authentication"
    Write-Host ""
    Write-Host "   2. If 'unrelated histories' error:" -ForegroundColor Yellow
    Write-Host "      Run: git pull origin $currentBranch --allow-unrelated-histories"
    Write-Host "      Then: git push origin $currentBranch"
    Write-Host ""
    Write-Host "   3. Need help? Check GITHUB_PUSH_GUIDE.md" -ForegroundColor Yellow
}
