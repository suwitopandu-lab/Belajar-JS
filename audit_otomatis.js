const { chromium } = require('playwright');

(async () => {
  // headless: false artinya kita ingin melihat jendela browsernya terbuka
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  console.log("Robot sedang bekerja, mohon tunggu...");
  
  // Pergi ke Wikipedia Indonesia
  await page.goto('https://id.wikipedia.org');

  // Ambil teks dari judul utama (h1)
  const judul = await page.innerText('h1');
  console.log("Audit Selesai! Judul yang ditemukan robot: " + judul);

  // Biarkan browser terbuka selama 5 detik agar Anda bisa melihatnya
  await new Promise(r => setTimeout(r, 5000));
  
  await browser.close();
  console.log("Browser ditutup otomatis oleh robot.");
})();