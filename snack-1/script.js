const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'


// ciclo for normale
// for (let z = 0; z < names.length; z++) {
//     const name = names[z];
//     console.log(name);
// }

function forEachCallback (name) {
    console.log(name);
}

const nomi = names.forEach(forEachCallback);

console.log(nomi);