const menu =[10000, 25000, 18000, 12000, 50000];
menu.forEach((harga, index) => {
    const kategori = harga >= 20000 ? "Menu Premium" : "Menu Regular";
    console.log(`Rp${harga.toLocaleString('id-ID')}: ${kategori}`);
});