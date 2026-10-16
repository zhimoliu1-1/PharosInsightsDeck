const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function run() {
  console.log('Launching headless Chrome...');
  const browser = await puppeteer.launch({
    executablePath: '/chrome-bin/chrome/linux-155.0.8059.79/chrome-linux64/chrome',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--font-render-hinting=none',
    ],
    headless: 'new',
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

  console.log('Waiting for fonts and assets...');
  await page.evaluateHandle('document.fonts.ready');
  await new Promise((r) => setTimeout(r, 1500));

  const pdfPath = '/Pharos_Web3_AI_Deck.pdf';
  const publicPdfPath = '/public/Pharos_Web3_AI_Deck.pdf';

  console.log('Generating PDF...');
  await page.pdf({
    path: pdfPath,
    preferCSSPageSize: true,
    printBackground: true,
  });

  fs.copyFileSync(pdfPath, publicPdfPath);
  const size = fs.statSync(pdfPath).size;
  console.log(`✅ Success! Generated PDF (${(size / 1024 / 1024).toFixed(2)} MB):`);
  console.log('1.', pdfPath);
  console.log('2.', publicPdfPath);

  await browser.close();
}

run().catch((err) => {
  console.error('PDF Generation failed:', err);
  process.exit(1);
});
