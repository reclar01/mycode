// YOUR CODE BELOW
function dogBreeder(str, num){
    let dogBreeder = {};
    if(!str && !num){
        dogBreeder["name"] = "Steve";
        dogBreeder["age"] = 0;
    } else if(Number.isInteger(str) ){
    dogBreeder["name"] = "Steve";
    dogBreeder["age"] = str;
} else{
    dogBreeder["name"] = str;
    if(!num){
        dogBreeder["age"]=0;
    } else{
        dogBreeder["age"]=num;
    }
}
    return dogBreeder;
  }


  console.log(dogBreeder(6));