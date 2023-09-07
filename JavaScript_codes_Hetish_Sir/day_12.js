//  number and Math in javaScript

const score = 400
const balance = new Number(100) // --> agar hum ko only number chahiye to usko as number define krte hai 

console.log(score)
console.log(balance)

console.log(typeof balance)
console.log(typeof score)

console.log(typeof balance.toString())
console.log(balance.toString().length)
console.log(balance.toString().charAt(1))
/*
=> Output 
400
[Number: 100]
object
number
String
3
0
*/
console.log(balance.toFixed(3)) //  ye point ke baad mai ketne zero  chahiye
// output => 100.000
const otherNumber = 230.89866
console.log(otherNumber.toPrecision(3))//ye vale ko presize krta hai 
// output => 231


const hundreds = 1000000
console.log(hundreds.toLocaleString())
// output => 10,00,000

/************************ Math *************************/
console.log(Math.PI)
// output =>3.141592653589793


console.log(`abs ${Math.abs(-4)}`) //ads(absloute value) ye humko kewal negative vali=ue ko positive krata hai nake positive ko negative
// output =>4

console.log(Math.round(4.6));
// output =>5

console.log(Math.ceil(4.2)) //ye agaR KISE BHI NUMBER SE EK BHE VALUE AAGE CHALA GYA TO NEXT NUMBER BAN JAYE GA
// output =>5

console.log(Math.floor(4.9));
// output =>4

console.log(Math.min(6, 5, 9, 4, 1))
// output =>1

console.log(Math.max(6, 5, 9, 4, 1))
// output =>9


console.log(typeof((Math.random()*10) + 1))

// important rule

const min = 10;

const max = 20; 

console.log(Math.floor(Math.random() * (max - min +1)) + min)

