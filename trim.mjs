import sharp from 'sharp';
import fs from 'fs';

async function trimImage(inputPath, outputPath) {
  try {
    await sharp(inputPath).trim({ threshold: 25 }).toFile(outputPath);
    console.log(`Trimmed ${inputPath} to ${outputPath} successfully.`);
    // Overwrite the original with the trimmed version
    fs.copyFileSync(outputPath, inputPath);
  } catch (err) {
    console.error(`Error trimming ${inputPath}:`, err);
  }
}

async function run() {
  await trimImage('./public/images/logo.png', './public/images/logo_trimmed.png');
  await trimImage('./public/images/icon.png', './public/images/icon_trimmed.png');
}

run();
