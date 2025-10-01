const user = {
    username:"pritesh",
    price :666,

    welcomemessage:function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);

// function chai(){
//     let username = "Pritesh"
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let username = "Pritesh"
//     console.log(this.username);
// }
// // chai()


// const chai = () => {
//     let username = "Pritesh"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2      //basic arrow funciton  which is explicit return
// }


// const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2) //inplicit return 

const addTwo = (num1 , num2) =>  ({username: "pritesh"})
console.log(addTwo(3,4))


const myArr =[2,5,6,3,4]

myArr.forEach(() =>{})
