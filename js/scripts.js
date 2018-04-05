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
function score(diceOne, diceTwo, score){
  this.diceOne = diceOne;
  this.diceTwo = diceTwo;

}

score.prototype.roundScore = function () {
  return this.diceOne + this.diceTwo;
};

players.prototype.playerScores = function () {
  return this.playerOne + this.playerTwo;

};
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
    var userDiceOne = 1 + Math.floor(Math.random()*6);
    var userDiceTwo = 1 + Math.floor(Math.random()*6);
    var newDice = new score(userDiceOne, userDiceTwo);
     $(".diceResult").text(newDice);
     $(".diceResult2").text(newDice);
console.log("The dice is here:", newDice);
  });
  $(".players").on('click', function(event) {
  $(this).toggleClass('flipped');
    event.preventDefault();

  });

});
