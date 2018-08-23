let fname = document.getElementById("firstName");
let lname = document.getElementById("lastName");
let eaddr = document.getElementById("email");
let simpleform = document.getElementById("submit-button");
let fingerCount = document.getElementsByName("fingers");
let favBook = document.getElementsByName("sel")

function showData(){
    //console.log('fingercount is ' +fingerCount);
    let fingernum = 0;
    let book = '';
    alert("Hello. My name is " + fname.value +' '+ lname.value+'. I can be reached at ' + eaddr.value + '.');
    console.log(fingerCount.length);
    for(let i=0; i<fingerCount.length; i++){
        if(fingerCount[i].checked){
            fingernum = fingerCount[i].value;
            break;
        }
    }
    alert('Also, I have ' + fingernum + ' fingers.');
    
    alert('My favorite Neal Stephenson novel is ' + favBook.value + '.');
}

function checkData(){
    console.log(this.value);
}

simpleform.addEventListener('click', showData);
fname.addEventListener('blur',checkData);
lname.addEventListener('blur',checkData);
eaddr.addEventListener('blur',checkData);
simpleform.addEventListener('blur',checkData);
//fingerCount.addEventListener('blur',checkData);
//favBook.addEventListener('blur',checkData);
