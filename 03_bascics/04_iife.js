//  Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){ //named iife
    console.log(`DB CONNECTED`);
}) ();


// global scope ke pollution se problem hoti hai kai bar to uus global scope jo variable hai ya jo bhi declarations hai  uus ke pollution ko hatane ke leye hum ne iife ka use kiya 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Pritesh')