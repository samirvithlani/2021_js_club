var date = new Date()
date.setFullYear(1947)
date.setMonth(7)
date.setHours(12)
date.setMinutes(12)
date.setSeconds(25)
date.setDate(15)
console.log(date)


var today,yesterday,tomorrow
today = new Date()
yesterday = new Date()
tomorrow = new Date()
tomorrow = tomorrow.setDate(18)
console.log(today)
console.log(tomorrow)

if(today>tomorrow){

    console.log("today is aftr tomorrow")
}
else{

    console.log("today is bfr tomorrow")
}


