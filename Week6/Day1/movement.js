let ball = document.getElementById("ball");
let b1 = document.getElementById("button01");



function moveBall(){
    //have the ball follow the mouse around
    ball.style.background = "yellow";
    ball.style.backgroundPositionX = "left";
   //alert("It's all fine!");

}

b1.addEventListener('click',moveBall);

