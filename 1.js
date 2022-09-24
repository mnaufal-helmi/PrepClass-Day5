// Loop with Range

// Buatlah script untuk mencetak dengan rentang angka tertentu.
// Contoh

// Input pertama: 4
// Input kedua: 8
// Output di browser: , 64 7, 8

const hitungan = (angkaPertama, angkaTerakhir) => {
let range = [];
for (let i = angkaPertama; i < angkaTerakhir + 1; i++) {
    range.push(i)
  
}
return range;
}

console.log(hitungan(4,8));