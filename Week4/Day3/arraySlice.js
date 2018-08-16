// YOUR CODE BELOW
function mySlice(arr, startIndex, endIndex){
    if(!startIndex){
        startIndex = 0;
    }
    if(!endIndex){
        endIndex = arr.length;
    }
  if(startIndex<0){
      startIndex= arr.length - (startIndex * -1);
  }
  if(endIndex<0){
      endIndex = arr.length - (endIndex * -1);

  }
    let newArr = []
    for(let i = startIndex; i<endIndex; i++){
      newArr.push(arr[i]);
      
    }
    return newArr;
    
  }
  console.log(mySlice(['bagel', 'baguette', 'bialy', 'brioche'], -2));