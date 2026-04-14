const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']


// CLASSICO CICLO FOR
// const autori = [];

// for (let z = 0; z < posts.length; z++) {
//   const element = posts[z];
//   autori.push(element.author);
  
// }
// console.log(autori);

const autori = posts.map(function (post) {
  return post.author;
})

console.log(autori);