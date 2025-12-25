// es6_test.js

console.log("--- LATIHAN ARROW FUNCTIONS & TEMPLATE LITERALS ---");

// SOAL A: Arrow Function Sederhana (Implicit Return)
// Fungsi ini menghitung PPN 11% dari harga
const hitungPajak = harga => harga * 0.11;

console.log("1A. PPN dari Rp 10.000 adalah:", hitungPajak(10000)); // Prediksi: 1100


// SOAL B: Arrow Function dengan Multiple Parameters
// Fungsi ini mengembalikan string laporan gaji
const buatLaporanGaji = (nama, gaji) => {
    const totalBersih = gaji - hitungPajak(gaji); // Memanggil fungsi dari Soal A
    
    // Gunakan Template Literal untuk membuat string laporan
    return `${nama} menerima gaji pokok sebesar Rp${gaji} dan total bersih (setelah pajak) adalah Rp${totalBersih}.`;
};

console.log("\n1B. Laporan gaji Bima (Rp 5.000.000):");
console.log(buatLaporanGaji("Bima", 5000000)); // Prediksi: Bima, 4450000


// SOAL C: Arrow Function dan Logic (No Parameters)
let suhu = 35; 
const cekPanas = () => {
    if (suhu > 30) {
        return "Sangat panas!";
    } else {
        return "Suhu normal.";
    }
};

console.log("\n1C. Cek kondisi suhu 35 derajat:");
console.log(cekPanas()); // Prediksi: Sangat panas!