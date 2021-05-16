var sal = [1500, 1200, 2500, null, "hundered", 1700, 10, 1550]
function checkSal(elem) {


    return elem > 1500 && !Number.isNaN(elem)
}


var filteredSal = sal.filter(checkSal)
console.log(filteredSal)

