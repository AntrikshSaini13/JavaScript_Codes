/********************* Date And Time in depth *************************/

let myDate = new Date()// date is object
console.log(myDate.toString())//[Function: toString] -->Sat Jul 22 2023 16:37:33 GMT+0530 (India Standard Time)

console.log(myDate.toDateString())//Sat Jul 22 2023

console.log(myDate.toISOString())//2023-07-22T11:10:19.542Z

console.log(myDate.toLocaleDateString())//22/7/2023

console.log(myDate.toLocaleString())//22/7/2023, 4:40:19 pm

console.log(myDate.toLocaleTimeString())//4:42:56 pm

console.log(myDate.toUTCString())//Sat, 22 Jul 2023 11:12:56 GMT

console.log(typeof myDate) // object

let mycreateDate = new Date (2023, 0, 23)
console.log(mycreateDate) //2023-01-22T18:30:00.000Z

console.log(mycreateDate.toDateString())//Mon Jan 23 2023

let mycreateDate2 = new Date (2023, 0, 23, 5, 6)

console.log(mycreateDate2.toLocaleString())//23/1/2023, 5:06:00 am

let mycreateDate3 = new Date ("01-14-2023")

console.log(mycreateDate3.toLocaleString())//14/1/2023, 12:00:00 am

//important thing

let myTimeStamp = Date.now()

console.log(myTimeStamp)// output --> 1690025267994is mile second

console.log(mycreateDate.getTime()) // output --> 1674412200000 is mile second 

console.log(Math.floor(Date.now()/1000))  // 1690025458 in second

let newDate = new Date()

console.log(newDate) // 2023-07-22T11:34:18.520Z

console.log(newDate.getMonth() ) // gives mounth

console.log(newDate.getDay()+1) //gives day

// important thongs

newDate.toLocaleString('default',{
    weekday : "long",
})










