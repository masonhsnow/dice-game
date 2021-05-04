
// DICE ARRAY + RANDOM NUMBER CALL VARIABLE
var dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var randomNumber1 = dice[Math.floor(Math.random() * dice.length)];
var randomNumber2 = dice[Math.floor(Math.random() * dice.length)];
// console.log(randomNumber1); IT WORKS HERE

document.querySelector("img.img1").setAttribute("src", randomNumber1);
document.querySelector("img.img2").setAttribute("src", randomNumber2);



// h1 QUERY SELECT ---- document.querySelector("h1").textContent = "Put Content Here";

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}

else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent = "Draw!";
}
