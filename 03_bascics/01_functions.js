
function sayMyName(){
    console.log("P");
console.log("R");
console.log("I");
console.log("T");
console.log("e");
console.log("S");
console.log("h");
}
// sayMyName()

// function addtwoNo(number1,number2 ){
//     console.log(number1 + number2);
// }

function addtwoNo(number1,number2 ){
    
    // let result =number1+number2
    // return result
    return number1+number2
    // if we code any thing after "return" then it will not work !!
}

const result = addtwoNo(3,5)

// console.log("Result: ",result);


function loginUserMessage(username ="sam"){
    if(username === undefined){ //!username
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("Pritesh"))
// console.log(loginUserMessage())

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500))


function calculateCartPrice(val1,val2 ,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "Pritesh",
    prices :199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username:"sam",
//     price:399
// })

const myNewArray =[200,400,100,600]

function returnSecondvale(getArray){
    return getArray[1]
}

// console.log(returnSecondvale(myNewArray));
console.log(returnSecondvale([200,400,100,600]));
