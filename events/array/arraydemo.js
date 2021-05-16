var lang = ["c", "c++", "java", "python", "a"]

var names = ["jay", "parth", "sahdev", "malayalam", "Ad", "a", "abcd"]

var price = [100, 5, 1000, 14, 26, 2500]

console.log("---===>", price.sort())
/* 
price.sort(function (a, b) {

    return a - b;
}) */

//lambda function

price.sort((a,b)=>a - b)
console.log(price)
console.log(lang)
lang = lang.reverse();



function len_compare(a, b) {

    //
    return a.length - b.length;

}

///a == b   ===>0
///a >b   --> +
///a<b -1

console.log("-->", names.sort())
console.log("###", names.sort(len_compare))

for (i = 0; i < lang.length; i++) {

    console.log("-->", lang[i])
}
