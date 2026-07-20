const hero = [
    "Layla",
    "Ling",
    "Franco",
    "Fanny",
    "Miya",
    "Eudora",
];

for (let i = 0; i < hero.length; i++) {
    let namaHero = hero[i];
    if (namaHero.charAt(0).toUpperCase() === "F") {
        console.log(namaHero + " Hero Asasin/Tank Favorit");
    } else {
        console.log (namaHero + " Hero Biasa");
    }
}