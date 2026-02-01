const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../src/app/favicon.svg');
const outputDir = path.join(__dirname, '../public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'maskable-icon.png', size: 512 }
];

async function generateFavicons() {
  console.log('🎨 Generating favicon assets...\n');

  const svgBuffer = fs.readFileSync(svgPath);

  for (const { name, size } of sizes) {
    const outputPath = path.join(outputDir, name);
    
    await sharp(svgBuffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Generated: ${name} (${size}x${size})`);
  }

  console.log('\n🎉 All favicon assets generated successfully!');
}

generateFavicons().catch(console.error);
