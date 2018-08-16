let animalNoises = [
    { 'dog': {
      'America' : 'Woof! Woof!',
      'Germany' : 'Wau Wau!',
      'England' : 'Bow wow!',
      'Uruguay' : 'Jua jua!',
      'Afrikaans' : 'Blaf!',
      'Korea' : 'Mong mong!',
      'Iceland' : 'Voff voff!',
      'Albania' : 'Ham!',
      'Algeria' : 'Ouaf ouaf!'
      }
    },
    { 'cat': {
      'America' : 'Meow',
      'Germany' : 'Miauw!',
      'England' : 'mew mew',
      'Uruguay' : 'Miau Miau!',
      'Afrikaans' : 'Purr',
      'Korea' : 'Nyaong!',
      'Iceland' : 'Kurnau!',
      'Albania' : 'Miau',
      'Algeria' : 'Miaou!'
      }
    },
    { 'chicken': {
      'America' : 'Cluck cluck',
      'Germany' : 'tock tock tock',
      'England' : 'Cluck Cluck',
      'Uruguay' : 'gut gut gdak',
      'Afrikaans' : 'kukeleku',
      'Korea' : 'ko-ko-ko',
      'Iceland' : 'Chuck-chuck!',
      'Albania' : 'Kotkot',
      'Algeria' : 'Cotcotcodet'
      }
    }
  ];
  
  // YOUR CODE BELOW
  function petSounds(name,country){
      let str = '';
    for(let i = 0; i<animalNoises.length; i++){
        for(let key in animalNoises[i]){
            if(key === name){
                key = name.charAt(0).toUpperCase() + name.slice(1,name.length);
                str = key + 's in ' + country + ' say ' + animalNoises[i][name][country];
                
            }
        }
    }
    return str;

  }

  console.log(petSounds('cat', 'Korea'));