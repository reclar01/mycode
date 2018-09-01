/*
Write a function cloneMachine, that, given an animal (represented as an object), returns a clone of the original animal.

The name of the clone should be the name of its parent, concatenated with the word 'Clone'.

cloneMachine should also push the name of the clone to the parent's offspring array.
*/
let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
  }

function cloneMachine(obj){
    console.log(obj);
    let Clone = {};
    for(let key in obj){
        if(key === 'name'){
            Clone[key]= obj[key]+"Clone";
        }else if(key === 'offspring'){
            Clone[key]=[];
           obj[key].push(Clone.name);
        }else{
            Clone[key]=obj[key];
        }
        
    }
   console.log(obj);
    return Clone;
}


console.log(cloneMachine(dolly));