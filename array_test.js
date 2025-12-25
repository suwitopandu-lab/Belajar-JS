// array_test.js

console.log("--- LATIHAN ARRAY ---");

const namaSiswa = ["Ani", "Budi", "Candra", "Dedi"];
let nilaiTotal = 0;

// SOAL A: Mengakses dan Mengubah Data
console.log("1A. Siapa nama siswa pada indeks ke-1?");
console.log(namaSiswa[1]); // Prediksi: "Budi"

namaSiswa[3] = "Dinda";
console.log("1B. Siapa siswa pada indeks ke-3 setelah diubah?");
console.log(namaSiswa[3]); // Prediksi: "Dinda"


// SOAL B: Menghitung Panjang Array
console.log("\n1C. Berapa jumlah siswa saat ini?");
console.log(namaSiswa.length); // Prediksi: 5


// SOAL C: Menambah dan Memproses Array (Menggabungkan Array dan Loop)
namaSiswa.push("Eka"); // Tambahkan Eka ke akhir array

// Gunakan Loop untuk memproses Array
for (let i = 0; i < namaSiswa.length; i++) {
    // Jika indeks adalah bilangan ganjil (1, 3, 5, dst.)
    if (i % 2 !== 0) {
        // Kita hitung jumlah karakter pada nama tersebut
        nilaiTotal = nilaiTotal + namaSiswa[i].length;
    }
}

console.log("\n1D. Berapa nilai Total saat ini?");
console.log(nilaiTotal); // Prediksi: 12
// Hint: Jumlah karakter Budi (4) + Dinda (5) + Eka (3) = 12

// Akhir Latihan Array