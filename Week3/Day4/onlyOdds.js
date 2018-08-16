let result = [];
for(let i = 0; i<=1000; i++){
    if(i%2 !== 0){
        result.push(i);
    }
}
console.log(result);
console.log(result.length);
let newArr = [];
for(let x = 0;x <= 70; x++ ){
    if( result[x]>=30 && result[x]<=70){
        newArr.push(result[x]);
    }
}
console.log(newArr);


let lastTen = result.splice(result.length - 10,10);
console.log(lastTen);