let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];


function leetTranslator(str){
    let newArr = [];
    let strArr = str.toLowerCase().split('');
    for(let i =0; i<strArr.length; i++){
        for(let j =0; j<letters.length; j++){
            if(strArr[i] === letters[j]){
                newArr.push(leetChars[j]);
            }
        }
    }
    return newArr.join('');
  }
console.log(leetTranslator('fullstack'));