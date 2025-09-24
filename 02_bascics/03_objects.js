// singleton

// object literals

const JsUser={
    name: "Pritesh",
    "full name": "Pritesh Mantri",
    age:20,
    location:"Pune",
    email: "pritesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);