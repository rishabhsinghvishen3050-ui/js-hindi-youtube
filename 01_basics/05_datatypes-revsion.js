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

//++++++++++++++++++++++++++++++++++++++++++++++++++

// STACK (PRIMITIVE)  HEAP (REFRENCE)

myNAme="Risahbh"
secondName=myNAme
secondName="Aryan"
console.log(myNAme==secondName)

let obj1={
    email:"rishabh@gmail.com",
    pass:12345
}
obj2=obj1
obj2.email="aryan@gmail.com"
console.log(obj1==obj2)