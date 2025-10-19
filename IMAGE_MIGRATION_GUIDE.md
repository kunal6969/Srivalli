# Image Migration Guide - Srivalli Website

## ✅ What Has Been Done

The website has been successfully migrated from using external image URLs (Unsplash, Wikimedia) to local image paths. Here's what was changed:

### 1. Directory Structure Created
```
public/images/
├── menu/           # 184 menu item images (item-1.jpg to item-184.jpg)
├── gallery/        # 6 gallery images (gallery-1.jpg to gallery-6.jpg)
├── hero/           # 2 hero images (hero-main.jpg, about.jpg)
└── reviews/        # 3 reviewer profile images (reviewer-1.jpg to reviewer-3.jpg)
```

### 2. Code Updates
- ✅ `constants.ts` - All 184 menu items updated to use local paths
- ✅ `constants.ts` - Gallery images (6) updated to local paths
- ✅ `constants.ts` - Hero and About images updated to local paths
- ✅ `constants.ts` - Review profile images (3) updated to local paths
- ✅ `MenuItemCard.tsx` - Added error handling with fallback UI
- ✅ `Hero.tsx` - Added error handling with gradient fallback
- ✅ `Gallery.tsx` - Added error handling with fallback UI
- ✅ `ReviewCard.tsx` - Added error handling with initials fallback
- ✅ `vite.config.ts` - Already configured correctly (no changes needed)

### 3. Error Handling Added
All image components now gracefully handle missing images with appropriate fallbacks:
- Menu items: Show placeholder icon
- Hero: Display gradient background
- Gallery: Show placeholder icon
- Reviews: Display user's initials

## 📋 What You Need to Do

### Step 1: Obtain Images

You need to add 195 total images to the website. You have several options:

#### Option A: Download from Original URLs (Temporary Solution)
You can use a script or browser extension to download images from the URLs that were previously used. The old URLs are available in the git history if needed.

#### Option B: Use Your Own Photos (Recommended)
1. Take professional photos of your restaurant dishes
2. Use high-quality food photography
3. Ensure proper lighting and presentation

#### Option C: Purchase Stock Photos
1. Buy from stock photo websites (Shutterstock, Adobe Stock, etc.)
2. Ensure you have proper licenses
3. Look for "South Indian food", "dosa", "restaurant interior", etc.

#### Option D: Use Free Stock Photos
1. Unsplash (unsplash.com) - Free high-quality images
2. Pexels (pexels.com) - Free stock photos
3. Pixabay (pixabay.com) - Free images
4. **Important**: Check licenses and attributions

### Step 2: Prepare Images

Before adding images to your website:

1. **Resize Images:**
   - Menu items: 400x300px (4:3 ratio)
   - Gallery: 800x600px (4:3 ratio)
   - Hero: 1800x1200px (3:2 ratio)
   - Reviews: 200x200px (square)

2. **Optimize Images:**
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target file sizes:
     - Menu items: < 100KB each
     - Gallery: < 200KB each
     - Hero: < 500KB
     - Reviews: < 50KB each
   - Convert to WebP format for better performance (optional)

3. **Rename Images:**
   Follow the exact naming convention:
   - Menu: `item-1.jpg`, `item-2.jpg`, ..., `item-184.jpg`
   - Gallery: `gallery-1.jpg`, `gallery-2.jpg`, ..., `gallery-6.jpg`
   - Hero: `hero-main.jpg`, `about.jpg`
   - Reviews: `reviewer-1.jpg`, `reviewer-2.jpg`, `reviewer-3.jpg`

### Step 3: Add Images to Folders

Copy/move images to the appropriate directories:

```
public/images/menu/
  ├── item-1.jpg
  ├── item-2.jpg
  ├── ...
  └── item-184.jpg

public/images/gallery/
  ├── gallery-1.jpg
  ├── gallery-2.jpg
  ├── ...
  └── gallery-6.jpg

public/images/hero/
  ├── hero-main.jpg
  └── about.jpg

public/images/reviews/
  ├── reviewer-1.jpg
  ├── reviewer-2.jpg
  └── reviewer-3.jpg
```

### Step 4: Test the Website

1. **Start the development server:**
   ```powershell
   npm run dev
   ```

2. **Check each section:**
   - ✅ Hero section displays properly
   - ✅ Menu items show images
   - ✅ Gallery displays images
   - ✅ Review sections show profile pictures
   - ✅ About section displays image

3. **Test error handling:**
   - If any image is missing, you should see a fallback UI
   - No broken image icons should appear

### Step 5: Optimize for Production

Before deploying:

1. **Run a production build:**
   ```powershell
   npm run build
   ```

2. **Check build size:**
   - Total image size should be reasonable (< 50MB for all)
   - Consider lazy loading for better performance

3. **Test production build:**
   ```powershell
   npm run preview
   ```

## 🛠️ Tools & Resources

### Image Optimization Tools
- **TinyPNG** (tinypng.com) - Online PNG/JPEG optimizer
- **Squoosh** (squoosh.app) - Google's image optimizer
- **ImageOptim** - Mac app for image compression
- **Sharp** - Node.js image processing library

### Batch Image Processing
If you need to resize/optimize many images at once:

**Using ImageMagick (command line):**
```bash
# Install ImageMagick
# Then resize all images in a folder:
magick mogrify -resize 400x300^ -gravity center -extent 400x300 -quality 85 *.jpg
```

**Using Node.js script:**
```javascript
// Install: npm install sharp
const sharp = require('sharp');
const fs = require('fs');

// Batch resize images
const files = fs.readdirSync('./input');
files.forEach(file => {
  sharp(`./input/${file}`)
    .resize(400, 300, { fit: 'cover' })
    .jpeg({ quality: 85 })
    .toFile(`./output/${file}`);
});
```

### Image Sources
- **Unsplash** (unsplash.com) - Free high-res photos
- **Pexels** (pexels.com) - Free stock photos & videos
- **Pixabay** (pixabay.com) - Free images & videos
- **Foodiesfeed** (foodiesfeed.com) - Free food photography

## 📊 Image Checklist

Use this checklist to track your progress:

### Menu Images (184 total)
- [ ] Items 1-21: Dosa category (21 images)
- [ ] Items 22-35: Srivalli Special Dosa (14 images)
- [ ] Items 36-44: Uttapam & Upma (9 images)
- [ ] Items 45-60: Idli & Srivalli Special Dishes (16 images)
- [ ] Items 61-82: Agra Chat & Pizza (22 images)
- [ ] Items 83-102: Chinese (20 images)
- [ ] Items 103-116: Breakfast (14 images)
- [ ] Items 117-130: Rice Bowl & Thali (14 images)
- [ ] Items 131-146: Main Course & Breads (16 images)
- [ ] Items 147-175: Desserts, Curd & Beverages (29 images)
- [ ] Items 176-184: Extras & Party Menu (9 images)

### Other Images (11 total)
- [ ] hero-main.jpg (Hero section background)
- [ ] about.jpg (About section image)
- [ ] gallery-1.jpg through gallery-6.jpg (6 gallery images)
- [ ] reviewer-1.jpg through reviewer-3.jpg (3 reviewer photos)

## 🚨 Troubleshooting

### Images Not Showing
1. Check file names match exactly (case-sensitive)
2. Ensure files are in correct directories
3. Clear browser cache (Ctrl+Shift+R)
4. Check browser console for 404 errors

### Large Bundle Size
1. Compress images further
2. Convert to WebP format
3. Use image CDN (optional)

### Slow Loading
1. Implement lazy loading (already done for gallery)
2. Use progressive JPEGs
3. Consider image CDN

## 📝 Notes

- All image paths use forward slashes (`/`)
- Images are served from the `public` folder
- File extensions can be `.jpg`, `.jpeg`, `.png`, or `.webp`
- If you change to `.webp`, update paths in `constants.ts`
- Fallback UI is displayed for missing images
- You can test with a few images first before adding all 195

## ✨ Optional Enhancements

After adding images, consider:
1. **WebP conversion** for better performance
2. **Responsive images** with `srcset`
3. **Image CDN** for faster delivery
4. **Progressive loading** for better UX
5. **Image sitemap** for better SEO

---

**Need Help?** Check the README.md in the `public/images/` folder for quick reference.
