const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.co.uk', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'new_pdf.pdf', format: 'A4'});

  await browser.close();
})();