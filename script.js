// var randomNumber1 = Math.floor(Math.random()*6 +1);
// var randomNumber2 = Math.floor(Math.random()*6 +1);
// const img1 = document.querySelector(".img1");
// const img2 = document.querySelector(".img2");
// const h1 = document.querySelector("h1");

// if (randomNumber1 === 1){    
//     img1.setAttribute("src", "./images/dice1.png");
// } else if (randomNumber1 === 2){
//     img1.setAttribute("src", "./images/dice2.png");
// } else if (randomNumber1 === 3){
//     img1.setAttribute("src", "./images/dice3.png");
// } else if (randomNumber1 === 4){
//     img1.setAttribute("src", "./images/dice4.png");
// } else if (randomNumber1 === 5){
//     img1.setAttribute("src", "./images/dice5.png");
// } else if (randomNumber1 === 6){
//     img1.setAttribute("src", "./images/dice6.png");
// }

// if (randomNumber2 === 1){    
//     img2.setAttribute("src", "./images/dice1.png");
// } else if (randomNumber2 === 2){
//     img2.setAttribute("src", "./images/dice2.png");
// } else if (randomNumber2 === 3){
//     img2.setAttribute("src", "./images/dice3.png");
// } else if (randomNumber2 === 4){
//     img2.setAttribute("src", "./images/dice4.png");
// } else if (randomNumber2 === 5){
//     img2.setAttribute("src", "./images/dice5.png");
// } else if (randomNumber2 === 6){
//     img2.setAttribute("src", "./images/dice6.png");
// }

// if (randomNumber1 > randomNumber2){
//     h1.innerHTML = "Player1 WIN!!";
// } 
// else if ( randomNumber1 < randomNumber2){
//     h1.innerHTML = "Player2 WIN!!";
// } 
// else {
//     h1.innerHTML = "DRAW!!";
// }
// It's not a wrong code, but it's too long, make it shorter than this.

var randomNumber1 = Math.floor(Math.random()*6 +1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomDiceSource = "./images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSource);


var randomNumber2 = Math.floor(Math.random()*6 +1);

var randomDiceSource2 = "./images/dice" + randomNumber2 + ".png" ;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 WIN!!";
} 
else if ( randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 WIN!!";
} 
else {
    document.querySelector("h1").innerHTML = "DRAW!!";
}