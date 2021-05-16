const name1 = "jay"
const name2 = 'raj'
const no = 101
//Backticks
const name3 = `hi ${name1} and hello ${name2} ,${no}`


console.log(name3)
console.log("--->0",name3[0])
console.log("--->1",name3.charAt(1))


var a = "hello"
a[0] = 'H'
console.log(a)


const x ='a'
const y ='A'

console.log(x===y)
console.log(x.length)

var str ="please check some news"
var pos = str.lastIndexOf("s")
console.log(pos)
console.log(str.search("check"))

var hobbies = "reading,painting,dancing,travleing";


//var res = hobbies.slice(-20,-5)
var res = hobbies.slice(-10)

console.log(res)


str1 = "store pls visit store"

var n = str1.replace("store",'school')

console.log(n)

//toUpperCase
//toLowerCase
//concat
//trim

var text1 = "abc"
var text2 = "xyz"

var text3 = text1.concat(text2)

console.log(text1)
console.log(text2)
console.log(text3)


//split

var hobbies1 = "reading,painting,dancing,travleing";
var hobb = hobbies1.split(",")
console.log(hobb)
