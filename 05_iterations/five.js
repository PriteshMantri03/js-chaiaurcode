const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    // console.log(val);
} )

// coding.forEach( (item)=> {
//     console.log(item);
// })
  

function printME(item){
    console.log(item);
}

// coding.forEach(printME)

coding.forEach( (item, index ,arr)=>{
    // console.log(item, index,arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "Js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach( (item)=>{
    console.log(`${item.languageName} shortcut is ${item.languageFileName}`);
})