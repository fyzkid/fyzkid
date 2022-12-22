let firstName = typeof'John'
let lastName = typeof 'Doe'
let country = typeof 'Nigeria'
let city = typeof 'Lagos'
let age = typeof '25'
let isMaried = typeof false
let year = typeof '2022'
console.log(firstName,lastName,country,city,age,isMaried,year) // checking different datatypes

console.log(10==='10') // checking if 10 is equal to '10'

console.log(parseInt('9.8')===10) // checking if parseint 9.8 is equal to 10

console.log(4>3) //true
console.log(4>=3) //true
console.log(4<3) // false
console.log(4<=3) // false
console.log(4==4) // true
console.log(4===4) // true
console.log(4!=4) // false
console.log(4!==4) //false
console.log(4!='4') //false
console.log(4=='4') // true
console.log(4==='4') //false

let python = 'python'
let jargon = 'jargon'
console.log(python.length === jargon.length)//returns true


console.log(4>3&&10<12) //true
console.log(4>3&&10>12) //false
console.log(4>3||10>12) //true
console.log(4>3||10>12) //true
console.log(!(4>3)) //false
console.log(!(4<3)) // true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4==='4'))

console.log(!(jargon.includes('on'))) // false
console.log(!('dragon'.includes('on'))) // false

console.log(`Year: ${new Date().getFullYear()}`)
console.log(`Month: ${new Date().getMonth()+1}`)
console.log(`Date: ${new Date().getDate()}`)
console.log(`Day: ${new Date().getDay() + 1}`)
console.log(`Hour: ${new Date().getHours()}`)
console.log(`Minutes: ${new Date().getMinutes()}`)
console.log(`Seconds: ${new Date().getSeconds()}`)




