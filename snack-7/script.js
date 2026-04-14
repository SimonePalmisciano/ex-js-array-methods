const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }


// SOLITO CICLO FOR
// const studenteId2 = [];
// for (let z = 0; z < students.length; z++) {
//   const element = students[z];
  
//   if (element.id === 2) {
//     studenteId2.push(element)
//   }
  
// }

// console.log(studenteId2);


const studente2 = students.filter((student) => student.id === 2);

console.log(studente2);
