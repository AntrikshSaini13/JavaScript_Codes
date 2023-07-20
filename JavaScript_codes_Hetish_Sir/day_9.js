// data type in summary

// #1 primitive data type is 7
// 1 String 
// 2 Number 
// 3 Boolean
// 4 null
// 5 undefine
// 6 Symbol
// 7 BigInt


const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null 
let userEmail ;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(anotherId)

const bigNumber = 26665495664646898n;

// #2 Non-primitive data type is 3
// 1 Arrays
// 2 Objects
// 3 Functions object


const heros = ["shaktiman","naagraj","Doga"]; 

let myObj = {
    name : "Aman",
    age : 22,
}

const myfunction = function(){
    console.log("Hello World")
}

// HOw to find DataType 
console.log("***************")
console.log(typeof(score))
console.log(typeof(scoreValue))
console.log(typeof(isLoggedIn))
console.log(typeof(outsideTemp))
console.log(typeof(userEmail))
console.log(typeof(id))
console.log(typeof(anotherId))
console.log(typeof(bigNumber))
console.log(typeof(heros))
console.log(typeof(myObj))
console.log(typeof(myfunction))

// ***************
//  Output of all datdtype
// number
// number
// boolean
// object
// undefined
// symbol
// symbol
// bigint
// object
// object
// function

