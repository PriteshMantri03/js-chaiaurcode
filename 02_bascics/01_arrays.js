// array

const myArr = [0,1,2,3,4,5,6]
const myHeors =["Shaktiman", "spiderman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// Array methids 

myArr.push(7) // add at end
myArr.unshift(-1) // add at start
myArr.pop() // remove from end
myArr.shift() // remove from start
myArr.unshift(90);
// console.log(myArr);

const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

// console.log("A",myArr);

const myn1 = myArr.slice(1,4)

// console.log(myn1);
// console.log("B", myArr);

console.log("B",myn1);
// console.log("C",myArr);

const myn2 = myArr.splice(1,4)
console.log("D",myArr);
console.log("E",myn2);



