
function keyupDemo() {

    var val = document.getElementById("name").value;
    document.getElementById("txt").innerHTML = val.toUpperCase();

    console.log(val)
}

function change(value) {

    alert("new value =" + value)
}
function dropdown() {

    var x = document.getElementById("choose").value;
    document.getElementById("country").innerHTML = "you have selected" + x;

}