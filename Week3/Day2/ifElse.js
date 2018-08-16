let bought1 = 'shoes';
let bought2 = 'gum';
let bought3 = 'pizza';
let bought4 = 'tennis racket';
let bought5 = 'song';


function whatIBuy(a){

    if(bought1 === a){
        console.log('I bought ' + bought1);
    } else if (bought2 === a){
        console.log('I bought ' + bought2);
    } else if (bought3 === a){
        console.log('I bought ' + bought3);
    } else if (bought4 === a){
        console.log('I bought ' + bought4);
    } else {
        console.log('I bought a ' + bought5);
    }



}

whatIBuy('shoes');