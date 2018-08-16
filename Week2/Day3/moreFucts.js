let sample = 'Things and stuff';

function firstFunc(x){
    var y = x + ' ' + 'with strings';
    return y

}

function secondFunc(y){
    var z = y.split(" ");
    return z;

}
function thirdFunc(a){
    var b = a.slice(1,5);
    return b;
    
}
function fourthFunc(a){
    var b = a.replace("stuff","more things");
    return b;
    
}
function fifthFunc(a ){
    var c = a.split("").reverse().join("");
    return c;
    
}

console.log(firstFunc(sample));
console.log(secondFunc(sample));
console.log(thirdFunc(sample));
console.log(fourthFunc(sample));
console.log(fifthFunc(sample));