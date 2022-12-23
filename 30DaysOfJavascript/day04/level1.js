let age = prompt('Enter your age')
if(age>=18){
    console.log('You\'re old enough to drive') //if age is 18 or older
}

else{
    console.log(`Wait for ${18-age} years to drive`) //if age is less than 18
}


let myAge = prompt('Enter my age')
let yourAge = prompt('Enter your age')
if(myAge>yourAge){
    console.log(`I am ${myAge-yourAge} years older than you`)
}
else{
console.log(`You\'re ${yourAge-myAge} years older than me`)
}


let a = 4
let b = 3
if(a>b){
    console.log('a is greater than b')
}
else{
    console.log('b is greater than a')
}

let c = a>b
c = true
c
? console.log('a is greater than b')
: console.log('b is greater than a')


//to check if a number is even or odd
let num = prompt('Enter a number')
if(num%2==0){
    console.log(`${num} is an even number`)
}
else{
    console.log(`${num} is an odd number`)
}




