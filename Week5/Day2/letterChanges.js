function LetterChanges(str) { 
    let newStr = '';
    for(let i =0; i<str.length; i++){
       //console.log();
       if(str.charCodeAt(i)>64 && str.charCodeAt(i)<91 || str.charCodeAt(i)>96 && str.charCodeAt(i)<123){
        switch(String.fromCharCode(str.charCodeAt(i)+1)){
            case "i": newStr +="I";
            break;
            case "a": newStr+= "A";
            break;
            case "e": newStr+= "E";
            break;
            case "o": newStr+= "O";
            break;
            case "u": newStr += "U"
            break;
            default:
            newStr += String.fromCharCode(str.charCodeAt(i)+1);
        } 
       }
       else {
        newStr +=String.fromCharCode(str.charCodeAt(i));
    }
    }
  // code goes here  
  return newStr; 
         
}

  console.log(LetterChanges("this long cake@&"));