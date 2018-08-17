// YOUR CODE BELOW
function veryOdd(arr){
    let newArr = [];
    for(let i =0;i<arr.length;i++){
        console.log(arr[i] + ' is ' + arr[i]%2);
      if(arr[i]%2 != 0){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }


  console.log(veryOdd([5, 10, 15, 20]));