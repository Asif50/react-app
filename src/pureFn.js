
var c = 15;         // this code is side effecter (side effect) // external code

function fnAdd(x,y){    
    var a = x;
    var b = y;

    var result = a + b + c;
    return result;
}

console.log(fnAdd(5,6));     // inputs of function