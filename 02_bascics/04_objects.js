// const tinderUser = new Object()
const tinderUser={}

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname: {
        Userfullname: {
            firstname :"pritesh",
            lastname:"mantri"
        }
    }
}

// console.log(regularUser.fullname.Userfullname.firstname);

const obj1 ={1: "a",2: "b"}
const obj2 ={3: "c",4: "d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({} , obj1,obj2)

// const obj3 ={...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email:"p@gmail.com"
    },
    {
        id: 1,
        email:"p@gmail.com"
    },
    {
        id: 1,
        email:"p@gmail.com"
    },
    
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); 
// console.log(tinderUser.hasOwnProperty(`isLoggedIn`));


const course = {
    courseanme: "js in hindi",
    price :"666",
    cousesrInstructor :"hitesh"
}
// course.cousesrInstructor

// const {cousesrInstructor: instructor} =course
// console.log(cousesrInstructor);
// console.log(instructor);

const { cousesrInstructor } = course   // normal destructuring
console.log(cousesrInstructor);        // works

const { cousesrInstructor: instructor } = course // aliasing
console.log(instructor);                           // works

