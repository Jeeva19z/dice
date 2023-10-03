
var randomNumberGen1 = Math.floor(Math.random() * 6 ) + 1;
var randomImage = "images/dice" + randomNumberGen1 +".png";
var setrandomTOAttribute = document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var randomNumber2  = Math.floor(Math.random() * 6 ) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var setattributimg2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumberGen1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Won the game";
}
else if (randomNumber2>randomNumberGen1 ){
    document.querySelector("h1").textContent="Player 2 Won the game"

}
else
{
    document.querySelector("h1").textContent="Draw";
}