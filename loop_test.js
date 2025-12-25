// loop_test.js

console.log("--- LATIHAN PERULANGAN ---");

// --- Latihan 1: Perulangan FOR ---
let totalFor = 0;

// Perulangan ini akan berjalan dari i=2 sampai i=5 (total 4 kali)
for (let i = 2; i < 10; i++) {
    totalFor = totalFor + i;
    // Pada setiap putaran, totalFor akan dijumlahkan dengan nilai 'i' saat itu.
}

console.log("Prediksi totalFor (setelah loop selesai) = ?");
console.log("Hasil totalFor:", totalFor); // Verifikasi Hasil

console.log("\n-------------------------------------");

// --- Latihan 2: Perulangan WHILE ---
let totalWhile = 1;
let counter = 1;

// Perulangan ini akan berjalan selama 'counter' masih kurang dari 4
while (counter < 4) {
    totalWhile = totalWhile * counter; // totalWhile dikali dengan nilai 'counter'
    counter++;                         // Jangan lupakan increment!
}

console.log("Prediksi totalWhile (setelah loop selesai) = ?");
console.log("Hasil totalWhile:", totalWhile); // Verifikasi Hasil

// Coba ubah batas kondisi di perulangan 'for' (misal: i < 10) atau kondisi di 'while' (misal: counter <= 5), lalu jalankan lagi!