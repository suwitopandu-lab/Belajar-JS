// kondisional_test.js

console.log("--- Pengecekan Kelulusan Siswa ---");

// --- Variabel Uji Coba ---
let nilaiUjian = 85; // Coba ubah nilai ini: 85, 60, 50
let hadir = false;   // Coba ubah nilai ini: false
const batasLulus = 70;


// --- KODE KONDISIONAL ---
if (hadir === false) {
    // Kondisi 1: Cek kehadiran
    console.log("Status: Gagal. Kehadiran tidak terpenuhi.");

} else if (nilaiUjian >= batasLulus) {
    // Kondisi 2: Cek apakah nilai memenuhi batas lulus (Hanya jika hadir=true)
    console.log("Status: LULUS!");
    console.log("Selamat, Anda mendapatkan nilai A.");

} else if (nilaiUjian >= 65) {
    // Kondisi 3: Cek apakah nilai mendekati, tetapi masih di bawah batas lulus 70
    console.log("Status: Mengulang.");
    console.log("Nilai Anda kurang sedikit. Silakan ulangi remedial.");

} else {
    // Kondisi 4: Jika semua di atas salah
    console.log("Status: Gagal Total.");
    console.log("Perlu belajar lebih keras.");
}

console.log("\n-------------------------------------");

// Coba ganti nilaiUjian menjadi 50, lalu jalankan lagi di console browser Anda.
// Coba ganti hadir menjadi false, lalu jalankan lagi.