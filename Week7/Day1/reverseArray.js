// YOUR CODE BELOW
function reverseArray(arr){
    let newArr = [];
    for(let i=arr.length-1;i>=0;i--){
      newArr.push(arr.pop());
    }

    for(let j=0;j<newArr.length;j++){
        arr.push(newArr[j]);
    }
    return arr;
  }

  let originalArray = ['here', 'we', 'go'];
  console.log(reverseArray(originalArray))