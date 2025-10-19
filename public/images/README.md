# Image Assets for Srivalli Website

This directory contains all local image assets for the website. Previously, the website used external URLs (Unsplash, Wikimedia). Now it uses local images.

## Directory Structure

```
public/images/
├── menu/           # Menu item images (184 items)
├── gallery/        # Gallery section images (6 images)
├── hero/           # Hero/banner images (1 image)
└── reviews/        # Customer review profile images (3 images)
```

## Naming Conventions

### Menu Items
- Format: `item-{id}.jpg` or `item-{id}.webp`
- Examples: `item-1.jpg`, `item-2.jpg`, etc.
- Total: 184 menu item images needed (IDs 1-184)

### Gallery Images
- Format: `gallery-{number}.jpg` or `gallery-{number}.webp`
- Examples: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- Total: 6 gallery images needed

### Hero Image
- Filename: `hero-main.jpg` or `hero-main.webp`
- Total: 1 hero banner image needed

### Review Profile Images
- Format: `reviewer-{number}.jpg` or `reviewer-{number}.webp`
- Examples: `reviewer-1.jpg`, `reviewer-2.jpg`, `reviewer-3.jpg`
- Total: 3 reviewer profile images needed

## Image Specifications

### Recommended Sizes & Formats

**Menu Items:**
- Dimensions: 400x300px (or proportional)
- Format: JPEG or WebP
- Quality: Medium-High (60-80% compression)

**Gallery Images:**
- Dimensions: 800x600px (or proportional)
- Format: JPEG or WebP
- Quality: High (75-85% compression)

**Hero Image:**
- Dimensions: 1800x1200px minimum
- Format: JPEG or WebP
- Quality: High (75-90% compression)

**Reviewer Images:**
- Dimensions: 100x100px (square)
- Format: JPEG or WebP
- Quality: Medium (60-75% compression)

## How to Add Images

1. **Download/Collect Your Images:**
   - Use your own restaurant photos
   - Purchase stock photos from sites like Shutterstock, Adobe Stock
   - Use free stock photos (ensure proper licensing)

2. **Rename Images According to Convention:**
   - Menu items: `item-1.jpg` through `item-184.jpg`
   - Gallery: `gallery-1.jpg` through `gallery-6.jpg`
   - Hero: `hero-main.jpg`
   - Reviews: `reviewer-1.jpg` through `reviewer-3.jpg`

3. **Place in Correct Directories:**
   - Copy renamed images to their respective folders
   - `menu/` folder for menu items
   - `gallery/` folder for gallery images
   - `hero/` folder for hero banner
   - `reviews/` folder for reviewer profiles

4. **Optimize Images (Optional but Recommended):**
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Convert to WebP format for better performance
   - Ensure reasonable file sizes (menu: <100KB, gallery: <200KB, hero: <500KB)

## Placeholder Images

If you don't have images ready, you can:
1. Use placeholder image services temporarily
2. Download sample images from the old Unsplash URLs
3. Use generic food/restaurant stock photos

## Menu Item Categories

To help you organize, here's the breakdown of menu items by category:

- **Dosa** (Items 1-21): South Indian crepes
- **Srivalli Special Dosa** (Items 22-35): Specialty variations
- **Uttapam & Upma** (Items 36-44): Thick pancakes and porridge
- **Idli & Srivalli Special Dishes** (Items 45-60): Rice cakes and specials
- **Agra Chat & Pizza** (Items 61-82): Street food and pizza
- **Chinese** (Items 83-102): Indo-Chinese dishes
- **Breakfast** (Items 103-116): Tea, sandwiches, soups, burgers
- **Rice Bowl & Thali** (Items 117-130): Rice dishes and platters
- **Main Course & Breads** (Items 131-146): Curries and breads
- **Desserts, Curd & Beverages** (Items 147-175): Drinks and sweets
- **Extras & Party Menu** (Items 176-184): Additional items

## Testing

After adding images, the website should automatically display them. If images don't appear:
1. Check that filenames match exactly (case-sensitive)
2. Verify images are in the correct folders
3. Clear browser cache and refresh
4. Check browser console for 404 errors

## Migration Note

The website has been updated from using external URLs to local paths. The constants.ts file now references local images in this directory structure.
