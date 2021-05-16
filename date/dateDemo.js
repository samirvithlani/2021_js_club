var date = new Date();
//yyyy,MM,DD,HH,mm,ss,ms
var date1 = new Date(2015,05,16,15,09,25,15)
//ms
var date2 = new Date(1)
var date3 = new Date("Feb 30,1950 15:03:05")
var isodate =new Date("2015-05-15GMT+0530:19:00Z")

console.log(date)
console.log(date1)
console.log(date2)
console.log(date3)
console.log(isodate)


var sec = Date.parse("May 16,2021,20:20:20")
console.log(sec)

var date6 = new Date(sec)

console.log(date6)

