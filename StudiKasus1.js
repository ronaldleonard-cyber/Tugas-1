const nama = "Budi";
const umur = 20;
const hargaBarang = [12000, 15000, 8000, 5000];

let totalBarang = 0;
for (let i = 0; i < hargaBarang.length; i++) {
    totalBarang += hargaBarang[i];
}

let statusDiskon = "";
if (totalBarang > 30000) {
    statusDiskon = "Selamat Anda mendapatkan diskon";
} else {
    statusDiskon = "Belanja lagi untuk mendapatkan diskon";
}

console.log("Hasil Akhir:");
console.log("Nama: " + nama);
console.log("Umur: " + umur);
console.log("Total Belanja: " + totalBarang);
console.log("Status: " + statusDiskon);