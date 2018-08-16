// YOUR CODE BELOW
function compareObjects(obj1, obj2){
    let val = false;
    for(key in obj1){
        //console.log(' obj1 is ' + obj1[key])
      if(obj2.hasOwnProperty([key])){
          //console.log('obj2 is ' + obj2.hasOwnProperty([key]));
          if(obj1[key] === obj2[key]){
              val = true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    for(key in obj2){
        if(obj1.hasOwnProperty([key])){
            if(obj2[key] === obj1[key]){
                val = true;
            } else{
                return false;
            }
        } else {
            return false;
        }
    }
    return val;
  }




console.log(compareObjects({a: 1, b: 2}, {a: 1}));