// # Primitive
// :- 7 types: String, Number, Boolearn ,null , undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn= false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId =Symbol('123');

// console.log(id === anotherId);

// const bigNumber =46846546854646868n; //bigInt

// Reference type(non Primitive):=
// Array, Objects, Functions

const heros =["shaktiman", "naagraj","doga"];
let myObj = {
    name: "Pritesh",
    age:21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non- Primitive)


let myYoutubename ="PriteshMantriVlogs"

let anothername = myYoutubename;
anothername ="MantrinVlogs";

console.log(myYoutubename);
console.log(anothername);

let user ={
    email: "user@google.com",
    upi: "user@upi",
}

let userTwo = user;

userTwo.email = "pritesh@google.com";
console.log(user.email);
console.log(userTwo.email);