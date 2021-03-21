var info = ["abcd", 50, "xyz"]

var info_str = info.join(",")
info.push("node")
var count1 = info.push("python")

var names = ["abc","xyz",100,20]

info.push(names);

console.log("count1 -->", count1)
console.log(info)
console.log(info_str)

//var poped = info.pop();
//console.log("poped...",poped)