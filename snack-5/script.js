const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]


// CICLO FOR STANDARD

// const pari = [];
// for (let z = 0; z < nums.length; z++) {
//     const element = nums[z];
    
//     if (element % 2 === 0) {
//         pari.push(element)
//     } 
// }
// console.log(pari);

const numPari = nums.map(function (num) {
    if (num % 2 === 0) {
        return num;
        
    }
    
});


const numePari = nums.filter((num) => num % 2 === 0);

console.log(numePari);