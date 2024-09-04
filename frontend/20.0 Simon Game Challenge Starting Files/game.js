
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false
var level = 0

$('.btn').click( function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
    playSound(userChosenColour);
    animatePress(userChosenColour);
});


$(document).on('keypress', function(e) {
    // console.log(e);
    if (!started ){
        
        $("#level-title").text("Level " + level);
        nextSequence();
        started=true
        

    }
});
// $('.btn').click( function () {
//     var userChosenColour = $(this).attr("id");
  
//     //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
//     animatePress(userChosenColour);
// });




function nextSequence() {

    level++
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //1. Use jQuery to select the button with the same id as the randomChosenColour
    //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
    
function animatePress(currentColour){
    $('#'+currentColour).toggleClass("pressed");
    setTimeout(function() {
        //your code to be executed after 1 second
        $('#'+currentColour).toggleClass("pressed");
      }, 100);
}




// 


// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// //You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
// var started = false;

// //2. Create a new variable called level and start at level 0.
// var level = 0;

// //1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
// $(document).keypress(function() {
//   if (!started) {

//     //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);
// });

// function nextSequence() {

//   //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
//   level++;

//   //5. Inside nextSequence(), update the h1 with this change in the value of level.
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }