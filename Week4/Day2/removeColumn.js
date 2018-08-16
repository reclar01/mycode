// YOUR CODE BELOW
function mySlice(arr, startIndex, endIndex){
    if(!startIndex){
        startIndex = 0;
    }
    if(!endIndex){
        endIndex = arr.length;
    }
    let newArr = []
    for(let i = startIndex; i<endIndex; i++){
      newArr.push(arr[i]);
      
    }
    return newArr;
    
  }

  console.log(mySlice([1, 2, 3]));
  console.log(mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 2));
  console.log(mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 0, 2));
  console.log(mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 1, 3));
  console.log(mySlice(['bagel', 'baguette', 'bialy', 'brioche'], -2));
  console.log(mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 0, -1));
  console.log(mySlice(['bagel', 'baguette', 'bialy', 'brioche']));
