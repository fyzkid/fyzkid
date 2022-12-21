console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let num1 = '10' //declaring a string datatype
let num2 = 10 //declaraing an int datatype

console.log(typeof(num1)==typeof(num2)) //checking if num1 and num2 are of the same datatype
num1 = parseInt(num1) // changing the datatype of num1 to int
console.log(typeof (num1) == typeof (num2))  //checking if num1 and num2 are of the same datatype


let a = parseFloat('9.8') // changing a string datatype to float 
console.log(a == 10) // returns false
let b = Math.round(a) // rounding 9.8 up 
console.log(b == 10) //returns true

let choice1 = 'python'
let choice2 = 'jargon'
console.log(choice1.match('on')) // search for 'on' in 'python' and returns its info
console.log(choice2.match('on')) //search for 'on' in 'jargon' and retrun it info

let statement = 'I hope this course is not full of jargon'
console.log(statement.search('jargon')) //serach for 'jargon' in the string and returns its index number

let number1 = 101
let number2 = 256
console.log(Math.round(Math.random() * number1)) // to generate random whole numbers between 0 and 100
console.log(Math.round(Math.random()*(number1-50)+1) + 50) // to generate random whole numbers between 50 and 100
console.log(Math.round(Math.random() * number2)) // to generate random whole numbers between 0 and 255

let language = 'Javascript'
console.log(language[Math.round(Math.random()*(language.length-1))]) //printing out random characters from the string 'Javascript'

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125') 

let fullString = 'You cannot end a sentence with because because because is a conjunction'
console.log(fullString.search('because'))
console.log(fullString.substr(31,24))


let loveString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let love = /love/gi
console.log(loveString.match(love))



let newString = 'You cannot end a sentence with because because because is a conjunction'
let because = /because/gi
console.log(newString.match(because)) //display the number of the word 'because' in the newString variable


let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx = /\d+/g
let income = incomeText.match(regEx)
console.log(income)
 
//storing the content of each array index in a variable 
let x = parseInt(income[0]) 
let y = parseInt(income[1])
let z = parseInt(income[2])

console.log(`The sum is ${x+y+z}`)




