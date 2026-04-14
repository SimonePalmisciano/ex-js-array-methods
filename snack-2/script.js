const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'


// normale ciclo for
// for (let z = 0; z < people.length; z++) {
//   const name = people[z];
//   console.log(name.name);
// }

const namePeople = people.map(function (person) {
  return person.name;
});

console.log(namePeople);