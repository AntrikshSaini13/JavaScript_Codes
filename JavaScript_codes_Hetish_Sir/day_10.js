//  Stack ANd Heap Memory in javaScript
//stack use in (primitive datatype) and heap is use (Non-Premitive datatype)

let myUtubeName = "Antriksh Saini13"
let anotherName = myUtubeName

anotherName = "chaiaurcode"

console.log(myUtubeName)
console.log(anotherName)

let UserOne = {
    email : "Aman12@gmail",
    upi : "user@ybl"
}

let UserTwo = UserOne

UserTwo.email = "Antrikshsaini13@gmail.com"

console.log(UserOne.email)
console.log(UserTwo.email)