// .......................
// Easy Going
// .......................

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// .......................
// Get Even
// .......................
// for (let i = 0; i <= 200; i +=2 ) {
//         console.log(i);
//     }

// .......................
// Fizz Buzz
// .......................
// for (let i = 1; i <= 100; i++) {
//     if (i % 3) {
//         console.log("Fizz");
//     }else if (i % 5) {
//         console.log("Buzz");
//     }else {
//         console.log("FizzBuzz");
//     }
// }

// ..................
// Wild Wild Life
// ..................

const wolfy = [
    name = "Wolfy", 
    species = "wolf", 
    age = 16, 
    hometown = "Yukon Territory"
];

const sharky = [
    name = "Sharky", 
    species = "shark", 
    age = 20, 
    hometown = "Left Coast"
];

const plantee = [
    name = "Plantee", 
    species = "plant",  
    age = 5000 , 
    hometown = "Mordor"
];

const porgee = [
    name = "Porgee", 
    species = "Porg", 
    age = 186, 
    hometown = "Ahch-To"
];

const dart = [
    name = "D'Art", 
    species = "Demogorgan Dog", 
    age = 2, 
    hometown = "Upside Down"
];

// Plantee's Array//
// Change Plantee's array to reflect her being a year older.
//  let age = 5000;
// plantee.age = ++age;
// console.log(plantee.age);

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
//console.log(wolfy[3] = "Gotham City");
//console.log(wolfy);

// Give D'Art a second hometown by adding "Hawkins"
//dart.push(`${"Hawkins"}`);
//console.log(dart);

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy);
