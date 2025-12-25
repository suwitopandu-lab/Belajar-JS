// object_test.js

console.log("--- LATIHAN OBJECT ---");

const pengguna = {
    username: "Alex_dev",
    email: "alex@mail.com",
    usia: 25,
    aktif: true
};

// SOAL A: Mengakses Nilai
console.log("1A. Email pengguna adalah:");
console.log(pengguna.email); // Prediksi: "alex@mail.com"

// SOAL B: Mengubah Nilai
pengguna.usia = 26; // Tambah usia 1 tahun
console.log("1B. Usia pengguna sekarang:");
console.log(pengguna["usia"]); // Prediksi: 26

// SOAL C: Membuat Loop untuk Kunci Object (Loop FOR...IN)
let daftarKunci = "";

// Loop FOR...IN digunakan untuk mengiterasi kunci-kunci dalam Object
for (let kunci in pengguna) {
    daftarKunci = daftarKunci + kunci + ", ";
}

console.log("\n1C. Daftar semua kunci dalam Object:");
console.log(daftarKunci); // Prediksi: username, email,usia, aktif