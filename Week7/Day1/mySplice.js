/*
Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice() array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.
mySplice only needs to take one element to add to the array (the .splice method can actually take any number of values to add).
Do not use .splice in your function.
The splice() method adds/removes items to/from an array, and returns the removed item(s).
array.splice(index, howmany, item1, ....., itemX)
*/
let ourStuff = ['food', 'trash', 'clothes'];




function mySplice(arr, removepoint, num2remove, item){
    //store all values after the value to remove in a temp array

    let tmp =[];
    for(let i=removepoint+1;i<arr.length;i++){
        
        tmp.push(arr[i]);
        
    }

    for(let j=0;j<=arr.removepoint;j++){
        arr.push(arr[j]);
    }
    for(let k=0;k<tmp.length;k++){
        arr.push(tmp[k]);
    }

    return arr;

}


console.log(mySplice(ourStuff, 1, 1));