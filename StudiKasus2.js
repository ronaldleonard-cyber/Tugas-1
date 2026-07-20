const nilai = [90, 75, 60, 45, 88];
let lulusCount = 0;
let tidakLulusCount = 0;
for (let i = 0; i < nilai.length; i++) {
    let status = "";    
    if (nilai[i] >= 75) {
        status = "Lulus";
        lulusCount++;
    } else {
        status = "Tidak Lulus";
        tidakLulusCount++;
    }
    console.log("Nilai: " + nilai[i] + " - Status: " + status);
}
console.log("Jumlah Lulus: " + lulusCount);
console.log("Jumlah Tidak Lulus: " + tidakLulusCount);