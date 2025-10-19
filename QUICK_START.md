# Quick Start Guide - Adding Images to Srivalli Website

## Step-by-Step Process

### 1. Where to Get Images

Choose one of these options:

**Option A: Use AI-Generated Placeholders (Quick Test)**
- Visit: placeholder.com, picsum.photos, or loremflickr.com
- Good for testing, but replace with real images before launch

**Option B: Download from Free Stock Sites**
- [Unsplash](https://unsplash.com/s/photos/indian-food-dosa)
- [Pexels](https://www.pexels.com/search/indian%20food/)
- [Pixabay](https://pixabay.com/images/search/indian%20cuisine/)

**Option C: Use Your Own Photos**
- Best option for authenticity
- Take photos of your actual menu items
- Hire a food photographer for professional results

### 2. Quick Setup (For Testing)

If you want to test the site quickly with placeholder images:

1. **Create placeholder images using online tools:**
   ```
   For menu items (400x300):
   https://via.placeholder.com/400x300.jpg?text=Menu+Item
   
   For gallery (800x600):
   https://via.placeholder.com/800x600.jpg?text=Gallery
   
   For hero (1800x1200):
   https://via.placeholder.com/1800x1200.jpg?text=Hero
   
   For reviews (200x200):
   https://via.placeholder.com/200x200.jpg?text=Profile
   ```

2. **Download and rename:**
   - Right-click each placeholder → Save As
   - Rename according to pattern
   - Place in correct folder

### 3. Automated Setup (Python Script)

Save this as `download_placeholders.py` and run it:

```python
import urllib.request
import os

# Create directories if they don't exist
os.makedirs('public/images/menu', exist_ok=True)
os.makedirs('public/images/gallery', exist_ok=True)
os.makedirs('public/images/hero', exist_ok=True)
os.makedirs('public/images/reviews', exist_ok=True)

print("Downloading placeholder images...")

# Menu items (184)
for i in range(1, 185):
    url = f"https://via.placeholder.com/400x300.jpg?text=Item+{i}"
    filename = f"public/images/menu/item-{i}.jpg"
    urllib.request.urlretrieve(url, filename)
    if i % 20 == 0:
        print(f"  Downloaded {i}/184 menu items...")

print("  ✓ All menu items downloaded")

# Gallery (6)
for i in range(1, 7):
    url = f"https://via.placeholder.com/800x600.jpg?text=Gallery+{i}"
    filename = f"public/images/gallery/gallery-{i}.jpg"
    urllib.request.urlretrieve(url, filename)

print("  ✓ Gallery images downloaded")

# Hero images (2)
urllib.request.urlretrieve(
    "https://via.placeholder.com/1800x1200.jpg?text=Hero+Banner",
    "public/images/hero/hero-main.jpg"
)
urllib.request.urlretrieve(
    "https://via.placeholder.com/600x700.jpg?text=About+Us",
    "public/images/hero/about.jpg"
)

print("  ✓ Hero images downloaded")

# Reviewer images (3)
for i in range(1, 4):
    url = f"https://via.placeholder.com/200x200.jpg?text=Reviewer+{i}"
    filename = f"public/images/reviews/reviewer-{i}.jpg"
    urllib.request.urlretrieve(url, filename)

print("  ✓ Reviewer images downloaded")
print("\n✅ All placeholder images downloaded successfully!")
print("You can now run 'npm run dev' to test the website.")
```

Run with: `python download_placeholders.py`

### 4. Manual Setup (Recommended for Production)

**For Menu Items (184 images needed):**

1. Search for images by category:
   - "dosa food photography"
   - "idli food photography"
   - "indian street food"
   - "pizza"
   - "chinese food"
   - "indian thali"
   - etc.

2. Download and organize:
   ```
   Downloads/
   ├── dosa/       (items 1-35)
   ├── uttapam/    (items 36-44)
   ├── idli/       (items 45-60)
   └── ...
   ```

3. Batch rename and move to `public/images/menu/`

**For Gallery (6 images):**
- Restaurant interior
- Food presentation
- Kitchen shots
- Dining area
- Chef at work
- Happy customers

**For Hero (1 image):**
- Wide shot of restaurant or signature dish
- High quality, impressive

**For Profiles (3 images):**
- Stock photos of people
- Or use initials (already implemented as fallback)

### 5. Optimization Tips

**Before adding images:**

1. **Resize images** (use Photoshop, GIMP, or online tools):
   ```bash
   # Using ImageMagick (if installed)
   magick convert input.jpg -resize 400x300^ -quality 85 output.jpg
   ```

2. **Compress images**:
   - Use TinyPNG.com
   - Or Squoosh.app
   - Target: < 100KB per menu item

3. **Convert to WebP** (optional, better compression):
   ```bash
   # Using cwebp (if installed)
   cwebp -q 80 input.jpg -o output.webp
   ```

   If using WebP, update file extensions in `constants.ts`:
   ```typescript
   image: '/images/menu/item-1.webp'
   ```

### 6. Testing Checklist

After adding images, test these:

- [ ] Run `npm run dev`
- [ ] Open http://localhost:3000
- [ ] Check Hero section loads image
- [ ] Scroll to Menu - verify items show images
- [ ] Check Gallery section
- [ ] Look for any 404 errors in browser console (F12)
- [ ] Test on mobile view (responsive)
- [ ] Check About section image

### 7. Common Issues & Solutions

**Images not showing:**
```
Solution: 
1. Check exact file names (case-sensitive!)
2. Verify files are in correct folders
3. Clear browser cache (Ctrl+Shift+R)
4. Check console for errors (F12)
```

**Images too large:**
```
Solution:
1. Compress images more
2. Reduce dimensions
3. Convert to WebP format
```

**Some images work, others don't:**
```
Solution:
1. Check file naming is consistent
2. Ensure no special characters in names
3. Verify all images are in correct folders
```

## Menu Item Categories Reference

To help you source appropriate images:

| IDs | Category | Count | Search Terms |
|-----|----------|-------|--------------|
| 1-21 | Dosa | 21 | "dosa", "crispy dosa", "masala dosa" |
| 22-35 | Special Dosa | 14 | "fusion dosa", "cheese dosa", "pizza dosa" |
| 36-44 | Uttapam & Upma | 9 | "uttapam", "upma" |
| 45-60 | Idli & Specials | 16 | "idli", "vada", "south indian snacks" |
| 61-82 | Chat & Pizza | 22 | "indian street food", "chaat", "pizza" |
| 83-102 | Chinese | 20 | "indo chinese", "noodles", "fried rice" |
| 103-116 | Breakfast | 14 | "sandwich", "burger", "soup" |
| 117-130 | Rice & Thali | 14 | "rice dishes", "thali", "indian platter" |
| 131-146 | Main Course | 16 | "indian curry", "paneer", "dal", "roti" |
| 147-175 | Beverages | 29 | "indian drinks", "lassi", "chai", "shakes" |
| 176-184 | Extras | 9 | "condiments", "party food" |

## Need Help?

- See `IMAGE_MIGRATION_GUIDE.md` for detailed instructions
- See `public/images/README.md` for quick specifications
- See `MIGRATION_SUMMARY.md` for overview of changes made

---

**Quick Start**: Run the Python script above to get placeholder images immediately, then replace them with real photos over time.
