function myFunction() {
    let str = "HELLO WORLD";
    console.log('length is ' + str.length);
    for(var i=0; i<str.length; i++){
    res = str.charAt(i);
    console.log(res);
    }
}

myFunction();