function LetterCapitalize(str) { 
    let newStr = '';
    let newArr=[];
    let arr = str.split(' ')
      for(let i=0;i<arr.length; i++){
          //for(let j =0; j<arr[i].length;j++ ){
              newStr='';
              newStr += arr[i][0].toUpperCase();
              newStr+= arr[i].substring(1,arr[i].length);
              newArr.push(newStr);
          //}
          console.log(newStr);
      }
      return newArr.join(' '); 
             
    }

console.log(LetterCapitalize("hello world!"));