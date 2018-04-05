// var Dice = [];
// var Dicetwo = [];
// var numberone = 1 + Math.floor(Math.random()*6);
// var numbertwo = 1 + Math.floor(Math.random()*6);
// Dice.push(numberone);
// Dicetwo.push(numbertwo);

function players(selectedplayer){
this.player = selectedplayer;
}
function Dice(inputNumber){
  this.number = inputNumber;


}

// score.prototype.roundScore = function () {
//   return this.diceOne + this.diceTwo;
// };

players.prototype.playerScores = function () {
  return this.player;

};

Dice.prototype.newDiceOne = function() {
  return
}

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
    event.preventDefault();
  var result = (newDice.number += newDice.number);
  var result2 = (newDice2.number += newDice2.number);
  var playerOne = new players(this.player);
  var playerTwo = new players(this.player);
  $(".playerOne").text(result);
  $(".playerTwo").text(result2);
  });

});
