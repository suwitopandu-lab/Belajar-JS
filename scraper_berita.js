const { chromium } = require('playwright');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

(async () => {
  // 1. Setting lokasi file hasil (CSV)
  const csvWriter = createCsvWriter({
    path: 'hasil_berita.csv',
    header: [
      {id: 'judul', title: 'JUDUL_BERITA'},
      {id: 'link', title: 'URL_LINK'}
    ]
  });

  console.log("🚀 Robot mulai bekerja...");
  const browser = await chromium.launch({ headless: false }); // Biar kita bisa lihat prosesnya
  const page = await browser.newPage();

  // 2. Kunjungi situs berita
  console.log("⏳ Sedang memuat halaman (Sabar, website ini agak berat)...");
  
  await page.goto('https://www.kompas.com/', { 
    waitUntil: 'domcontentloaded', // Lebih cepat, tidak menunggu iklan/gambar selesai
    timeout: 60000                 // Tambah batas sabar jadi 60 detik
  });

  // PINDAHKAN KE SINI: Tunggu sampai judul berita muncul di layar
  await page.waitForSelector('.article__link', { timeout: 10000 });

  // 3. Ambil 10 judul berita terbaru
  const dataBerita = await page.$$eval('.article__link', elements => {
    return elements.slice(0, 10).map(el => ({
      judul: el.innerText.trim(),
      link: el.href
    }));
  });

  // 4. Tulis ke file CSV
  await csvWriter.writeRecords(dataBerita);

  console.log("✅ Sukses!");
  console.log(`📊 Berhasil mengambil ${dataBerita.length} data.`);
  console.log("📁 Cek file: hasil_berita.csv di folder Anda.");

  await browser.close();
})();