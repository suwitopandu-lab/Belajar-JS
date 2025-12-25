// array_methods_test.js

console.log("--- LATIHAN ARRAY METHODS CANGGIH ---");

const daftarSiswa = [
    { nama: "Alisa", nilai: 85, hadir: true },
    { nama: "Bima", nilai: 60, hadir: true },
    { nama: "Cintya", nilai: 95, hadir: false },
    { nama: "Dion", nilai: 75, hadir: true }
];

// SOAL A: Filter (Menyaring Data)
// Saring siswa yang LULUS (nilai >= 70 DAN hadir = true)
const siswaLulus = daftarSiswa.filter(siswa => 
    siswa.nilai >= 70 && siswa.hadir === true
);

console.log("1A. Jumlah siswa yang benar-benar lulus (Filter):", siswaLulus.length); // Prediksi: 1A. Jumlah siswa yang benar-benar lulus (Filter): Alisa, Dion
// Hint: Siapa saja yang memenuhi kriteria?

// SOAL B: Map (Transformasi Data)
// Buat array baru yang hanya berisi NAMA siswa
const namaSiswa = daftarSiswa.map(siswa => siswa.nama);

console.log("\n1B. Daftar nama siswa (Map):", namaSiswa); // Prediksi: Alisa, Bima, Cintya, Dion

// SOAL C: Reduce (Agregasi Data)
// Hitung rata-rata nilai dari SEMUA siswa
const totalNilai = daftarSiswa.reduce((total, siswa) => {
    return total + siswa.nilai;
}, 0); // Nilai awal total adalah 0

const rataRata = totalNilai / daftarSiswa.length;

console.log("\n1C. Rata-rata nilai kelas (Reduce):", rataRata); // Prediksi: 78
// Hint: (85 + 60 + 95 + 75) / 4 = ?