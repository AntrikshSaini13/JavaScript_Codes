const name = "Antriksh"
const repoCount = 50

console.log(name + repoCount + "Value" ) // old way of concetnation

// output
// Antriksh50Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount} value`) //new way of write string

// output
// Hello my name is Antriksh and my repo count is 50 value

const gameName = new String('hitesh-hc')

/* console 
String {'Antriksh'}
0
: 
"A"
1
: 
"n"
2
: 
"t"
3
: 
"r"
4
: 
"i"
5
: 
"k"
6
: 
"s"
7
: 
"h"
length
: 
8
[[Prototype]]
: 
String
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
length
: 
1
name
: 
"padEnd"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"Antriksh"
*/

console.log(gameName[0])

console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2)) //the charAt pass number
console.log(gameName.indexOf('t'))//the index pass character


const newString =gameName.substring(0,4)

console.log(newString)

const anotherString = gameName.slice(-8, 4)

console.log(anotherString)

const newStringOne = "  Antriksh "

console.log(newStringOne)

console.log(newStringOne.trim()) // remove the starting and ending space in string with 

const url = "https://hitest.com/hitesh%20choudary"

console.log(url.replace('%20', '-')) //replace the url any value in this method

console.log(url.includes('hitesh')) // check here these keyword is here or not

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


const strCopy1 = str.split(' ');
console.log(strCopy1);

console.log(gameName.split('-'));

const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
console.log(a)
console.log(b)
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"