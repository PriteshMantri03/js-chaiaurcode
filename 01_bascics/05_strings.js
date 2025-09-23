const name ="pritesh"
const repoCOunt =50

// console.log(`Hello my name is ${name} and my repoCount is ${repoCOunt}`);

const gameName = new String(`Pritesh-pm-com`)

// console.log(gameName[0])
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t'));

const newString =gameName.substring(-8 ,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne ="   pritesh   "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20mantri"

console.log(url.replace('%20' ,'-'))

console.log(url.includes('sundar'))


console.log(gameName.split('-'));