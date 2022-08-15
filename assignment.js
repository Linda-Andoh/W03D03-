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
//wolfy.pop();
//wolfy.push("Gotham City");
//console.log(wolfy);

// Give D'Art a second hometown by adding "Hawkins"
//dart.push(`${"Hawkins"}`);
//console.log(dart);

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// wolfy.shift();
// wolfy.unshift("Gameboy");
// console.log(wolfy);


//..........................//
// Yell at the Ninja Turtles//
//..........................//
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
// const ninjaTurtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for (let member of ninjaTurtle) {
//     console.log(member.toUpperCase());
// }


//..................//
//Methods, revisited//
//..................//
//const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//Console log: the index of Titanic
//console.log(favMovies.indexOf("Titanic"));

//use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
//favMovies.sort();

// Use the method pop
//favMovies.pop();

// push"Guardians of the Galaxy"
//favMovies.push("Guardians of the Galaxy");

// Reverse the array
//favMovies.reverse();

// Use the shiftmethod
//favMovies.shift();

// unshift- what does it return?
//console.log(favMovies.unshift());

// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
//let index = favMovies.indexOf("Django Unchained");
//favMovies.splice(index, 1, "Avatar");

// slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?

// store the value of your slicein a variable, console.log it - Thought question: what is going on here?

// console.log your final results
// console.log(favMovies);
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
//console.log(favMovies.indexOf("Fast and Furious")); // the value i got was 18.

// Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?

//..............//
//Where is Waldo//
//..............//
//With the following multi-dimensional array
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
//Remove Eggbert (hint look at the slice/splice method(s))
//let index = whereIsWaldo.indexOf("Eggbert");
//whereIsWaldo.splice(index);
//console.log(whereIsWaldo);

//Change "Neff" to "No One"
// let index = whereIsWaldo.indexOf(index);
// whereIsWaldo.pop(index);
// whereIsWaldo.push("No One");
// console.log(whereIsWaldo);

//Access and console.log "Waldo"
console.log(whereIsWaldo[3][-1, 1][1]);

//Excited Kitten//


//Find the Median//