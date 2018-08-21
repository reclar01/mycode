// YOUR CODE BELOW
function cloneMachine(obj){
    let newObj = {};
    newObj.name = obj.name+"Clone";
    newObj.species = obj.species;
    newObj.offspring = [];
    obj.offspring.push(newObj.name);

    return newObj;
  }

  let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
  }

  let DollyClone = cloneMachine(dolly);
  console.log(DollyClone);
  console.log(dolly);