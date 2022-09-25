// Menyaring data

// Saringlah data berikut agar outputnya menjadi hanya orang-orang di bawah 21 tahun.

const people = [
  { id: 1, name: 'Udin', age: 12 },
  { id: 2, name: 'Wati', age: 51 },
  { id: 3, name: 'Budi', age: 34 },
  { id: 4, name: 'Agus', age: 16 },
  { id: 5, name: 'Sari', age: 19 },
  { id: 6, name: 'Ririn', age: 21 },
]


// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
  
//}

// function checkAdult(people) {
//   return people < 21;
// }

const result = people.filter((people) => people.age < 21);

console.log(result);

  
}

// Contoh output

// [x
//   { id: 1, name: 'Udin', age: 12 },
//   { id: 4, name: 'Agus', age: 16 },
//   { id: 5, name: 'Sari', age: 19 },
// ]

