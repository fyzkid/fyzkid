let score = prompt('Enter a score between 0 and 100 inclusive')
if(score>=80 && score<=100){
    console.log('Your grade is A')
}
else if (score >= 70 && score<=89) {
    console.log('Your grade is B')
}

else if (score >= 60 && score <= 69) {
    console.log('Your grade is C')
}

else if (score >= 50 && score <= 59) {
    console.log('Your grade is D')
}

else if (score >= 0 && score <= 49) {
    console.log('Your grade is F')
}

else{
    console.log('Enter a valid score')
}


//To check for season
let month = prompt('Enter a month').toLowerCase()
if (month == 'september' ||month=='october'||month=='november'){
    console.log('The season is autum')
}

else if (month == 'december' || month == 'january' || month == 'february') {
    console.log('The season is winter')
}

else if (month == 'march' || month == 'april' || month == 'may') {
    console.log('The season is spring')
}

else if (month == 'june' || month == 'july' || month == 'august') {
    console.log('The season is summer')
}

else{
    'Enter a valid month'
}


let day = prompt('Enter day').toLowerCase()
if(day=='saturday'||day=='sunday'){
    console.log(`${day} is weekened`)
}

else if (day == 'monday' || day == 'tuesday'|| day=='wednesday' || day=='thursday' || day=='friday') {
    console.log(`${day} is a weekday`)
}

else {
    console.log('Enter a valid day')
}




