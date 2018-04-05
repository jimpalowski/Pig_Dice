// var Dice = [];
// var Dicetwo = [];
// var numberone = 1 + Math.floor(Math.random()*6);
// var numbertwo = 1 + Math.floor(Math.random()*6);
// Dice.push(numberone);
// Dicetwo.push(numbertwo);


function Player() {
  this.score = 0;
}

function Dice(inputNumber){
  this.number = inputNumber;
}

// score.prototype.roundScore = function () {
//   return this.diceOne + this.diceTwo;
// };

// Player.prototype.playerScores = function () {
//   return this.player;
// };
//
// Dice.prototype.newDiceOne = function(num) {
//   return this.player;
// }

// var add = function(rollOne, rollTwo){
//   return rollOne += rollTwo;
//
// }
// if(Dice[0] == 1){
//    Dice.push("Oh you lost");
// }
//
// if(Dicetwo[0] == 1){
//    Dicetwo.push("Oh you lost");
// }



var playerOne = new Player();
var playerTwo = new Player();




// user interface logic
$(document).ready(function() {
  $(".flashcard").on('click', function(event) {
    $(this).toggleClass('flipped');
    event.preventDefault();
    var rollOne = 1 + Math.floor(Math.random()*6);
    var rollTwo = 1 + Math.floor(Math.random()*6);
    var newDice = new Dice(rollOne);
    var newDice2 = new Dice(rollTwo);
    $(".diceResult").text(newDice.number);
    $(".diceResult2").text(newDice2.number);
    playerOne.score += newDice.number;
    playerTwo.score += newDice2.number;
    $(".playerOne").text(playerOne.score);
    $(".playerTwo").text(playerTwo.score);
    setTimeout(function() {
      $(".flashcard").toggleClass('flipped');
    }, 1000);
  });

});
