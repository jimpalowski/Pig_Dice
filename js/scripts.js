//business logic

var RollDice = function(num){
var Dice = [];
var Dicetwo = [];
var numberone = 1 + Math.floor(Math.random()*6);
var numbertwo = 1 + Math.floor(Math.random()*6);
Dice.push(numberone);
Dicetwo.push(numbertwo);
 console.log("Dice one is:", Dice);
 console.log("Dice two is:", Dicetwo);
   $(".diceResult").text(Dice);
   $(".diceResult2").text(Dicetwo);

}



// user interface logic
$(document).ready(function() {
  $(".flashcard").on('click', function(event) {
  $(this).toggleClass('flipped');
    event.preventDefault();
  var userDice = RollDice('click');


  });
  $(".flashcard2").on('click', function(event) {
  $(this).toggleClass('flipped');
    event.preventDefault();
  var userDicetwo = RollDice('click');
  });
});
