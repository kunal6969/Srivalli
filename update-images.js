// Utility script to convert external image URLs to local paths
// Run this with: node update-images.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const constantsFilePath = path.join(__dirname, 'constants.ts');

// Read the file
let content = fs.readFileSync(constantsFilePath, 'utf8');

// Replace all image URLs with local paths for menu items
// Pattern matches: image: 'https://...' or image: "https://..."
content = content.replace(
  /(\{\s*id:\s*(\d+),.*?image:\s*['"])https?:\/\/[^'"]+(['"])/g,
  (match, prefix, id, suffix) => {
    return `${prefix}/images/menu/item-${id}.jpg${suffix}`;
  }
);

// Replace gallery images
const galleryPattern = /'https:\/\/images\.unsplash\.com\/[^']+'/g;
let galleryMatch;
let galleryIndex = 1;
const gallerySection = content.match(/export const GALLERY_IMAGES:[\s\S]*?\];/);

if (gallerySection) {
  let updatedGallerySection = gallerySection[0];
  updatedGallerySection = updatedGallerySection.replace(
    /'https:\/\/[^']+'/g,
    () => {
      return `'/images/gallery/gallery-${galleryIndex++}.jpg'`;
    }
  );
  content = content.replace(gallerySection[0], updatedGallerySection);
}

// Replace hero image
content = content.replace(
  /(export const HERO_IMAGE = )'https:\/\/[^']+'/,
  "$1'/images/hero/hero-main.jpg'"
);

// Replace about image
content = content.replace(
  /(export const ABOUT_IMAGE = )'https:\/\/[^']+'/,
  "$1'/images/hero/about.jpg'"
);

// Replace review images
const reviewsSection = content.match(/export const REVIEWS:[\s\S]*?\];/);
if (reviewsSection) {
  let updatedReviewsSection = reviewsSection[0];
  let reviewIndex = 1;
  updatedReviewsSection = updatedReviewsSection.replace(
    /(image:\s*)'https:\/\/[^']+'/g,
    () => {
      return `$1'/images/reviews/reviewer-${reviewIndex++}.jpg'`;
    }
  );
  content = content.replace(reviewsSection[0], updatedReviewsSection);
}

// Write the updated content back to the file
fs.writeFileSync(constantsFilePath, content, 'utf8');

console.log('✅ Successfully updated all image URLs to local paths!');
console.log('\nNext steps:');
console.log('1. Add your images to the public/images/ directories');
console.log('2. Follow the naming conventions in public/images/README.md');
console.log('3. Ensure images are optimized for web (compress/resize as needed)');
