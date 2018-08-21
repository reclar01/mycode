//alert("JavaScript File Connected!");

let basicH1 = document.getElementById("basicH1");

let button01 = document.getElementById("button01");
let img01 = document.getElementById("img01");
let blueButton = document.getElementById("blueButton");

function changeBasicH1(){
    basicH1.innerHTML = ("This is a different value");
    img01.src = "marvin02.jpg";
}

function changeBack(){
    basicH1.innerHTML = ("This is a heading");
    //img01.innerHTML = = ("marvin01.jpg");
    img01.src = "marvin01.jpg";
}

function changeButton(){
    if(blueButton.classList.contains("blue")){
        blueButton.classList.remove("blue");
        basicH1.classList.remove("blue");
    }else {
        blueButton.classList.add("blue");
        basicH1.classList.add("blue");
    }
    
}


button01.addEventListener('mouseover',changeBasicH1);
button01.addEventListener("mouseout",changeBack);
//img01.addEventListener("mouseover",changeImage);
//img01.addEventListener("mouseout",changeImageBack);
blueButton.addEventListener('click',changeButton);

//button01.