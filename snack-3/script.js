const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


// ciclo for normale

// const numbersPlus = [];

// for (let z = 0; z < numbers.length; z++) {
//     const element = numbers[z] + 1;
//     numbersPlus.push(element);
// }

// console.log(numbersPlus);

const numbersPlus = numbers.map(function (number) {
    return number +1;
});

console.log(numbersPlus);