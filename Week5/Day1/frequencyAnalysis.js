// YOUR CODE BELOW
function frequencyAnalysis(str){
    str = str.toLowerCase();
    //console.log(str);
    let fa = {};
    for(let i=0; i<str.length; i++){
        //console.log('Letter ' + str[i]);
        if(!fa.hasOwnProperty(str[i])){
            fa[str[i]] =1;
           // console.log("adding " + fa[str[i]]);            
        } else {
            //console.log('in else');
            fa[str[i]] +=1; 
        }
    }
    return fa
}

console.log(frequencyAnalysis('i like pumpkins'));