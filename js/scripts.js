// var Dice = [];
// var Dicetwo = [];
// var numberone = 1 + Math.floor(Math.random()*6);
// var numbertwo = 1 + Math.floor(Math.random()*6);
// Dice.push(numberone);
// Dicetwo.push(numbertwo);

function players(playerOne, playTwo){
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}
function Dice(inputNumber){
  this.number = inputNumber;
}
// score.prototype.roundScore = function () {
//   return this.diceOne + this.diceTwo;
// };

players.prototype.playerScores = function () {
  return this.playerOne + this.playerTwo;

};

Dice.prototype.newDiceOne = function() {
  return this.diceOne;
}
// if(Dice[0] == 1){
//    Dice.push("Oh you lost");
// }
//
// if(Dicetwo[0] == 1){
//    Dicetwo.push("Oh you lost");
// }







// user interface logic
$(document).ready(function() {
  $(".flashcard").on('click', function(event) {
  $(this).toggleClass('flipped');
    event.preventDefault();
    var rollOne = 1 + Math.floor(Math.random()*6);
    var rollTwo = 1 + Math.floor(Math.random()*6);
    var newDice = new Dice(rollOne);
console.log(newDice);
    var newDice2 = new Dice(rollTwo);
     $(".diceResult").text(newDice.number);
     $(".diceResult2").text(newDice2.number);
console.log("The dice is here:", newDice, newDice2);
  });
  $(".players").on('click', function(event) {
  $(this).toggleClass('flipped');
    event.preventDefault();

  });

});
