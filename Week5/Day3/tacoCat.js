/* Given an object that represents the inventory of your company, add a method 'currentInventory' to your object that returns the current value of your company's inventory.

Then, add a sale method that takes an order object, returns the price of the order, updates the inventory of the purchased items, and adds the price of the order to the company's cash property.

Heads up: This problem is a bit more involved than anything you'd see on an admissions assessment or interview. Besides being a fun challenge, it's intended to show how you can use objects and their methods to store and change state.
*/

let tacoCatInc = {
    gourmetShell: {
      'hard treat shell': {cost: 2, quantity: 100},
      'soft treat shell': {cost: 1.5, quantity: 100}
    },
  
    gourmetFishFilling: {
      'salmon': {cost: 5, quantity: 100},
      'tuna': {cost: 5.5, quantity: 100},
      'sardines': {cost: 1.5, quantity: 100}
    },
  
    gourmetVeggie: {
      'cat grass': {cost: 1, quantity: 100}
    },
  
    gourmetSeasoning: {
      'cat nip': {cost: 0.5, quantity: 9},
      'treat dust': {cost: 0.1, quantity: 21}
    },
    
    currentInventory: function(){
        let currentValue = 0;
        for(k1 in tacoCatInc){
            console.log(k1);
            for(k2 in tacoCatInc[k1]){
                //currentValue += k2.cost*k2.quantity;
                console.log(tacoCatInc[k1][k2]["cost"]);
                //console.log(k2);
                for(k3 in tacoCatInc[k1][k2]){
                //    console.log([k3]);
                //}
                //console.log(tacoCatInc[k1][k2][k3]);
                }
            }
        }
        return currentValue;
    },
  
    cash: 0
  };

console.log(tacoCatInc.currentInventory());