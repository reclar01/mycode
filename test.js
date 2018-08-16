function callThemAll(obj,val){

    let newArr = [];
    for(key in obj){
        console.log(addsNums[key]);
        newArr.push(key.val);
    }

    return newArr;
}



let addsNums = {
    addTen: function(num) {
        if(!num){
            num=0;
        }
      return num + 10;
    },
  
    addTwenty: function(num) {
      return num + 20;
    },
  
    someProperty: 'value'
  };

  //console.log(addsNums.addTen(5)); 
  console.log(callThemAll(addsNums,5));