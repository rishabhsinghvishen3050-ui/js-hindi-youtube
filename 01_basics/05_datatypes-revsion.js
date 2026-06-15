// PRIMITIVE DATATYPES
//7 types : String,Number,BigInt,Boolean,Symbol,Null,Undefined
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id!=anotherid); 
const number=477635342527282255627n // this is a bigInt
// REFRENCE DATATYPES
// Arrays,Objects,Functions
const arr=["Rishabh","Tarun", "VArun"]
let myobj={
    name: "Rishabh",
    age:19
}
const myFunction=function(){
    console.log("Risabh")
}
myFunction()