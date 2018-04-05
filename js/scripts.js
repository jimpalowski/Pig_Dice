//business logic

function Player() {
  this.score = 0;
}

function Dice(inputNumber){
  this.number = inputNumber;
  }

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
  // if(playerOne.score ===1){
  //    alert("THis doesnt work")
  // }
  // if(playerTwo.score ===1){
  //    alert("THis doesnt work")
  // }
});
