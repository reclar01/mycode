function getThemAll(obj,val){
    let newArr = [];
   for(key in obj){
       console.log([key(obj[val])]);
   }
    

    return newArr
}

let addsNums = {
    addTen: function(num) {
      return num + 10;
    },
  
    addTwenty: function(num) {
      return num + 20;
    },
  
    someProperty: 'value'
  };

  console.log(getThemAll(addsNums,10));