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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'


// CLASSICO CICLO FOR
// const classeMarco = [];
// for (let z = 0; z < students.length; z++) {
//   const element = students[z];
  
//   if (element.name === 'Marco Lanci') {
//     classeMarco.push(element.class)
//   }
// }
// console.log(classeMarco);

const classeMarco = students.find((student) => student === 'Marco Lanci');

// students.filter((student) => student.name === 'Marco Lanci'); // così restituisce tutto lo studente

console.log(classeMarco);