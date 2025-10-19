// Image Verification and Helper Script
// Run with: node verify-images.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define expected images for each slot
const slotExpectations = {
  'slot-1': {
    name: 'Dosa',
    items: [
      'PLAIN-DOSA.png',
      'MASALA-DOSA.png',
      'BEETROOT-DOSA.png',
      'MYSORE-PLAIN-DOSA.png',
      'ONION-MASALA-DOSA.png',
      'MYSORE-MASALA-DOSA.png',
      'BUTTER-MASALA-DOSA.png',
      'GHEE-ROAST-PLAIN-DOSA.png',
      'PODI-MASALA-DOSA.png',
      'RAWA-MYSORE-PLAIN-DOSA.png',
      'RAWA-GHEE-ROAST-PLAIN-DOSA.png',
      'RAWA-MASALA-DOSA.png',
      'CHEESE-MASALA-DOSA.png',
      'GHEE-ROAST-MASALA-DOSA.png',
      'RAWA-MYSORE-MASALA-DOSA.png',
      'RAWA-ONION-MASALA-DOSA.png',
      'RAWA-PANEER-MASALA-DOSA.png',
      'RAWA-GHEE-ROAST-MASALA-DOSA.png',
      'PANEER-MASALA-DOSA.png',
      'PAPER-MASALA-DOSA.png',
      'MINI-DOSA-PLATTER.png'
    ]
  },
  'slot-2': {
    name: 'Srivalli Special Dosa',
    items: [
      'PATTA-DOSA.png',
      'PALAK-PANEER-DOSA.png',
      'PERI-PERI-CHEESE-DOSA.png',
      'PANEER-CHEESE-SURMA.png',
      'PANEER-TIKKA-DOSA.png',
      'CHEESE-BURST-DOSA.png',
      'CHEESE-CORN-DOSA.png',
      'PIZZA-DOSA.png',
      'JINNI-DOSA.png',
      'DILKHOOSH-DOSA.png',
      'PASTA-DOSA.png',
      'MANCHURIAN-DOSA.png',
      'NOODLES-DOSA.png',
      'SRIVALLI-FAMILY-DOSA.png'
    ]
  }
};

console.log('🔍 Verifying uploaded images...\n');

let totalExpected = 0;
let totalFound = 0;
let totalMissing = 0;

for (const [slotName, slotData] of Object.entries(slotExpectations)) {
  const slotPath = path.join(__dirname, 'public', 'images', 'menu', slotName);
  
  console.log(`\n📁 ${slotName.toUpperCase()} - ${slotData.name}`);
  console.log('─'.repeat(60));
  
  if (!fs.existsSync(slotPath)) {
    console.log(`❌ Folder not found: ${slotPath}`);
    continue;
  }
  
  const actualFiles = fs.readdirSync(slotPath);
  const expectedFiles = slotData.items;
  
  totalExpected += expectedFiles.length;
  
  // Check for expected files
  const found = [];
  const missing = [];
  
  expectedFiles.forEach(expectedFile => {
    // Normalize comparison (case-insensitive, handle variations)
    const normalizedExpected = expectedFile.toLowerCase().replace(/\s+/g, '-');
    const match = actualFiles.find(actual => {
      const normalizedActual = actual.toLowerCase().replace(/\s+/g, '-');
      return normalizedActual.includes(normalizedExpected.replace('.png', '')) ||
             normalizedExpected.includes(normalizedActual.replace(/\.(png|jpg|jpeg)$/i, ''));
    });
    
    if (match) {
      found.push({ expected: expectedFile, actual: match });
    } else {
      missing.push(expectedFile);
    }
  });
  
  totalFound += found.length;
  totalMissing += missing.length;
  
  // Report found files
  if (found.length > 0) {
    console.log(`\n✅ Found (${found.length}/${expectedFiles.length}):`);
    found.forEach(({ expected, actual }) => {
      if (expected.toLowerCase() === actual.toLowerCase()) {
        console.log(`   ✓ ${actual}`);
      } else {
        console.log(`   ⚠️  ${actual} (expected: ${expected})`);
      }
    });
  }
  
  // Report missing files
  if (missing.length > 0) {
    console.log(`\n❌ Missing (${missing.length}):`);
    missing.forEach(file => {
      console.log(`   ✗ ${file}`);
    });
  }
  
  // Report unexpected files
  const unexpected = actualFiles.filter(actual => {
    const normalizedActual = actual.toLowerCase().replace(/\s+/g, '-');
    return !expectedFiles.some(expected => {
      const normalizedExpected = expected.toLowerCase().replace(/\s+/g, '-');
      return normalizedActual.includes(normalizedExpected.replace('.png', '')) ||
             normalizedExpected.includes(normalizedActual.replace(/\.(png|jpg|jpeg)$/i, ''));
    });
  });
  
  if (unexpected.length > 0) {
    console.log(`\n⚠️  Unexpected files (${unexpected.length}):`);
    unexpected.forEach(file => {
      console.log(`   ? ${file}`);
    });
  }
}

// Summary
console.log('\n\n' + '='.repeat(60));
console.log('📊 SUMMARY');
console.log('='.repeat(60));
console.log(`Total Expected: ${totalExpected}`);
console.log(`Total Found: ${totalFound} (${((totalFound/totalExpected)*100).toFixed(1)}%)`);
console.log(`Total Missing: ${totalMissing}`);

if (totalMissing === 0) {
  console.log('\n🎉 All images uploaded successfully!');
} else {
  console.log(`\n⚠️  Please add ${totalMissing} missing image(s).`);
  console.log('See IMAGE_UPLOAD_STATUS.md for details.');
}

console.log('\n✨ Next steps:');
console.log('1. Review the missing/unexpected files above');
console.log('2. Rename or add missing images as needed');
console.log('3. Run this script again to verify');
console.log('4. Run `npm run dev` to test the website\n');
