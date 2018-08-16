let strArr = ["People","Things","MiksMus"];
let numArr= [];
let mixArr = [3, "Three","Five",5];

for (let i=0; i < 10; i++){
    numArr[i] = (Math.random(i)*100)%10;
}


console.log(numArr)

console.log(numArr.sort());


//console.log(numArr.sort().reverse());
