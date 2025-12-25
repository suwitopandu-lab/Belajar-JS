// tes_pemahaman.js

// SOAL 1: OPERATOR
console.log("--- SOAL 1: OPERATOR ---");

let x = 15;
let y = "5";

// A. Berapa nilai z setelah operasi ini?
let z = x % 4; // 15 dibagi 4, sisanya berapa?
console.log("1A. Nilai z:", z); // Prediksi: 3,75

// B. Manakah yang akan menghasilkan TRUE?
let cekOperator = (x * 2) !== 30; // Apakah (15*2) TIDAK SAMA DENGAN 30?
console.log("1B. Hasil cekOperator:", cekOperator); // Prediksi: false

// C. Berapa nilai x setelah operasi ini?
x -= 5; // x = x - 5
console.log("1C. Nilai x baru:", x); // Prediksi: 10

console.log("\n------------------------------------");

// SOAL 2: KONDISIONAL (IF/ELSE)
console.log("--- SOAL 2: KONDISIONAL ---");

const skor = 92;
const umur = 18;

// Apa output akhir dari rantai kondisional ini?
if (skor >= 90) {
    console.log("2A. Hasil: Sangat Baik");
} else if (skor >= 70 || umur > 17) {
    console.log("2B. Hasil: Cukup Baik");
} else {
    console.log("2C. Hasil: Perlu ditingkatkan");
}
// Prediksi Output Soal 2: "2A. Hasil: Sangat Baik"

console.log("\n------------------------------------");

// SOAL 3: PERULANGAN (LOOP)
console.log("--- SOAL 3: PERULANGAN ---");

let total = 0;

// Perulangan ini berjalan dari i=1 hingga i=3
for (let i = 1; i <= 3; i++) {
    // Di dalam loop:
    if (i % 2 === 0) { // Jika 'i' adalah bilangan genap
        total = total + (i * 10);
    } else { // Jika 'i' adalah bilangan ganjil
        total = total + i;
    }
}

console.log("3. Nilai total akhir setelah loop:", total); // Prediksi: 24
// Hitungan:
// i=1 (ganjil): total = 0 + 1 = 1
// i=2 (genap): total = 1 + (2*10) = 21
// i=3 (ganjil): total = 21 + 3 = 24

console.log("\n------------------------------------");