function maxOfThree(num1,num2,num3){
    //return the largest of three numbers
    let x = [num1,num2,num3];
    console.log(x.sort(function(a,b){return b-a}));
  }



  maxOfThree(7,11,2);