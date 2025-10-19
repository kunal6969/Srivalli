# Image Mapping Verification Checklist

## Quick Reference Guide

### How to Verify Images Are Working

1. **Start the Development Server**
   ```powershell
   cd "c:\Users\Kunal\Downloads\Srivalli-main\Srivalli-main"
   npm run dev
   ```

2. **Check Each Category**
   - Navigate to the Menu section on the website
   - Verify images appear for each category
   - Click on items to see if larger images open in lightbox

### Image Path Examples

| Dish Name | Expected Path | Slot |
|-----------|---------------|------|
| Plain Dosa | `/images/menu/SLOT-1/PLAIN-DOSA (2).png` | 1 |
| Patta Dosa | `/images/menu/SLOT-2/patta-dosa.png` | 2 |
| Plain Uttapam | `/images/menu/slot-3/plain-uttapam.png` | 3 |
| Steam Idli | `/images/menu/slot-4/steam-idli.png` | 4 |
| Pani Puri | `/images/menu/slot-5/pani-puri.png` | 5 |
| Momos | `/images/menu/SLOT-6/momos.jpg` | 6 |
| Tea | `/images/menu/SLOT-7/tea.jpg` | 7 |
| Tarkari Anna Rice | `/images/menu/slot-8/tarkari-anna-rice.jpg` | 8 |
| Puri | `/images/menu/SLOT-9/puri.png` | 9 |
| Boondi Raita | `/images/menu/SLOT-10/boondi-raita.png` | 10 |
| Podi Masala | `/images/menu/SLOT-11/podi-masala.png` | 11 |

### Known Mappings

#### Items Sharing Images (Fallback)
These items use related images when specific images weren't available:

**SLOT-1:**
- Paper Masala Dosa → uses `masala-dosa.png`

**SLOT-6:**
- French Fries → uses `chilli-potato.jpg` (as placeholder)

**SLOT-9:**
- Missi Roti → uses `tawa-roti.png` (as placeholder)

**SLOT-10:**
- Oreo Shake → uses `vanilla-shake.png`
- Badam Shake → uses `vanilla-shake.png`
- Paan Shake → uses `vanilla-shake.png`
- Kitkat Shake → uses `chocolate-shake.png`
- Mineral Water → uses `cocunut-water.png`

**SLOT-11:**
- Packing Charge → uses `podi-masala.png` (placeholder)

### File Extension Notes

- **SLOT-1, SLOT-2:** `.png` files
- **slot-3, slot-4, slot-5:** `.png` files (lowercase slot names)
- **SLOT-6, SLOT-7:** `.jpg` files (uppercase SLOT names)
- **slot-8:** `.jpg` files (lowercase slot name)
- **SLOT-9, SLOT-10, SLOT-11:** `.png` files (uppercase SLOT names)

### Categories and Counts

| Category | Items | Slot |
|----------|-------|------|
| Dosa | 21 | 1 |
| Srivalli Special Dosa | 14 | 2 |
| Uttapam & Upma | 9 | 3 |
| Idli & Srivalli Special Dishes | 16 | 4 |
| Agra Chat & Pizza | 22 | 5 |
| Chinese | 20 | 6 |
| Breakfast (Tea, Sandwich, Soup, Burger) | 14 | 7 |
| Rice Bowl & Thali | 14 | 8 |
| Main Course & Breads | 16 | 9 |
| Desserts, Curd & Beverages | 29 | 10 |
| Extras & Party Menu | 9 | 11 |
| **TOTAL** | **184** | **11** |

### Testing Commands

```powershell
# Install dependencies (if not done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Troubleshooting

**If images don't load:**
1. Clear browser cache (Ctrl + Shift + Delete)
2. Check browser console for 404 errors
3. Verify file names match exactly (case-sensitive on some systems)
4. Restart development server

**If some images are missing:**
1. Check the slot folder has the image file
2. Verify the file extension matches (.png vs .jpg)
3. Check for spaces in filenames (some have spaces)

### Browser Console Check

Open browser DevTools (F12) and run:
```javascript
// Check if any images are missing
document.querySelectorAll('img').forEach(img => {
  if (!img.complete || img.naturalHeight === 0) {
    console.log('Missing image:', img.src);
  }
});
```

---
**Last Updated:** October 19, 2025
