var ageData = [15,16,17,18,19,20,1,22,25]

function checkAge(age){

    return age >=1;
}
console.log(ageData.every(checkAge))

var ans = ageData.every(age => age >= 18)
if(!ans){
    console.log("false.........")
}

