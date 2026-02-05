let score="33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score)

let score_=Number("33abc");


console.log(typeof valueInNumber);
console.log(typeof score_);  // this will print output=> "number"
console.log(score_)          //this will print output=> NaN

//"33" => 33
//"33abc" => NaN
// true=>1;false=>0;

let isLoggedIn="Rishabh"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0=> false;
// ""=> false
//"Rish" => true
let someNumber = 33
let stringNumber=String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)