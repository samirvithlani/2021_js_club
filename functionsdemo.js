var veh = "car"
console.log(veh)

var colors = { name: "red", value: "00012", frag: "abcd" }

console.log(colors.name)
console.log(colors.value)
console.log(colors.frag)



var student = {

    name: "raj",
    rollno: 120,
    subjects: {
        sub1: "maths",
        sub2: "sci",

    }
}


console.log(student.subjects.sub2)


function sum() {

    var x = 10, y = 20;
    console.log(x + y)

    ///without return type without args

}

function sub(x, y) {

    return x - y;
}

function getName(user_name) {

    return user_name.toUpperCase();
}
function div(p, q) {

    var ans = p / q;
    console.log(ans)
}
sum()

var ans = sub(20, 10);
console.log(sub(100, 200))
console.log(ans)

console.log(getName("raj"));
div(10, 1)





