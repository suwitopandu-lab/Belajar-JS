// array_object_test.js

console.log("--- LATIHAN ARRAY OF OBJECTS ---");

const dataKaryawan = [
    { nama: "Sari", jabatan: "Staf", gaji: 5000000 }, // Indeks 0
    { nama: "Rudi", jabatan: "Manager", gaji: 12000000 }, // Indeks 1
    { nama: "Lina", jabatan: "Staf", gaji: 4500000 }, // Indeks 2
    { nama: "Joko", jabatan: "Manager", gaji: 10000000 }  // Indeks 3
];

let totalGajiStaf = 0;

// SOAL A: Akses dan Cetak Nama Karyawan dengan jabatan "Manager"
console.log("1A. Manager di perusahaan ini adalah:");
// Akses Object Rudi (Indeks 1), lalu ambil properti .nama
console.log(dataKaryawan[1].nama); 
// Akses Object Joko (Indeks 3), lalu ambil properti .nama
console.log(dataKaryawan[3].nama); 

// SOAL B: Hitung Total Gaji untuk semua karyawan dengan jabatan "Staf"
// Gunakan Loop FOR untuk memeriksa setiap Object di Array
for (let i = 0; i < dataKaryawan.length; i++) {
    const karyawan = dataKaryawan[i]; // Menyimpan Object saat ini

    // Gunakan Kondisional (If) untuk memeriksa jabatan
    if (karyawan.jabatan === "Staf") {
        totalGajiStaf = totalGajiStaf + karyawan.gaji;
    }
}

console.log("\n1B. Total Gaji yang dibayarkan untuk seluruh Staf adalah:");
console.log(totalGajiStaf); // Prediksi: 9500000
// Hint: Hitung (Gaji Sari) + (Gaji Lina)