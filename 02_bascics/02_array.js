const marvel_heros =["Ironman", "Spiderman", "Thor"];
const dc_heros =["Batman", "Superman", "Flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros =[...marvel_heros,... dc_heros]
// console.log(all_new_heros);

const another_array =[1,2,3, [4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(3);
console.log(real_another_array);


console.log(Array.isArray("Pritesh"));
console.log(Array.from("Pritesh"));
console.log(Array.from({name: "Pritesh"})); //interesting

// console.log(Array.from({name: "Pritesh", age:21, channel:"PriteshMantriVlogs"}));

// // fill method
// const myArray = new Array(10).fill(-1);
// console.log(myArray);

// // splice method    
// const splicedArray = myArray.splice(2, 5, 100);
// console.log(splicedArray);
// console.log(myArray);


let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));
