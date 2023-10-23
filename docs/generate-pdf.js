const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("file://" + __dirname + "/index.html", {
    waitUntil: "networkidle2",
  });

  const pdfOptions = {
    path: "resume.pdf",
    format: "A4",
    printBackground: true,
  };

  await page.pdf(pdfOptions);

  await browser.close();
})();
