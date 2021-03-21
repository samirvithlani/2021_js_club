
var usersage = [1, 25, 12, 78, 85, 2, 96, 3]

function isEven(elm) {


    return elm % 2 == 0;
}

firstOdd = usersage.find((elm) => elm % 2 == 1);
console.log("firstodd", firstOdd)

firsteven = usersage.find(isEven)
console.log(firsteven)


function isAdult(mem){

    return mem.age >=18;
}




const team = [

    { name: "samir", age: 2 },
    { name: "harsh", age: 25 },
    { name: "sahdev", age: 15 },
    { name: "jay", age: 22 }
]

var adultmem2 = team.find(({age})=>age >=18)
console.log(adultmem2)

var adultMem = team.find(isAdult)
console.log(adultMem)






