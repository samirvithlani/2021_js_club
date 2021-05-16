const languages = ["Gujarati","Marathi","Hindi","English","Punjabi"]

function search(arr,query){

    function condition(elem){

        return elem.toLowerCase().indexOf(query.toLowerCase())!== -1;
    }
    return arr.filter(condition)
}


var newarr = search(languages,"hi")


console.log(newarr)