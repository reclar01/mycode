function multiArr(arr){

    
    for(let i=0; i<arr.length;i++){
        for(let j =0; j<arr[i].length;j++){
            arr[i][j]=null;
        }
    }
    return arr;
}

let initArr = [[1,1,1],[1,1,1],[1,1,1]];
console.log(initArr);
console.log(multiArr(initArr));