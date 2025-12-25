// fungsi_test.js

console.log("--- LATIHAN FUNGSI ---");

// FUNGSI 1: Tanpa Parameter, Tanpa Return
function tampilkanTanggal() {
    // Fungsi ini hanya mencetak tanggal saat ini, tidak mengembalikan nilai.
    const today = new Date().toLocaleDateString();
    console.log("Tanggal Hari Ini:", today);
}

// FUNGSI 2: Dengan Parameter dan Return
function hitungLuasPersegi(panjang, lebar) {
    // Fungsi ini menerima 2 nilai (parameter)
    const luas = panjang * lebar;
    // Mengirimkan hasil perhitungan kembali
    return luas;
}

// Panggil Fungsi 1
console.log("Memanggil Fungsi 1:");
tampilkanTanggal(); // Ini akan mencetak sesuatu ke konsol


// Panggil Fungsi 2
console.log("\nMemanggil Fungsi 2:");

// Kasus A: Hasil return disimpan ke variabel
let luasTanah = hitungLuasPersegi(5, 10);
console.log("Luas Tanah (5x10):", luasTanah); 

// Kasus B: Hasil return langsung digunakan dalam perhitungan lain
// (Luas = 12 x 6 = 72) * 2 = 144
let biayaTotal = hitungLuasPersegi(12, 6) * 2;
console.log("Biaya Total (Luas 12x6 * 2) :", biayaTotal);