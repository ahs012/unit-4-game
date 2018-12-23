//Cyrstal Collector Game
//Four gem buttons with randomly generated numbers
//randomly generated scoreGoal
//update player score after gem click
//



var randomResult;
var lost = 0;
var win = 0;
var firstNumber = 0;

var startGame = function(){
    //clears value of crystals for new game
    $(".crystals").empty();

    randomResult = Math.floor(Math.random() * 70) + 40;
    console.log(randomResult);

    $("#numberGoal").html("Score to Match: " + randomResult);

// Create 4 crystals with random number value
    for(var i=0; i<4; i++){
        var random = Math.floor(Math.random() * 15) + 1;
        // console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "randomValue":random
        });

    $(".crystals").append(crystal);
    }
}

startGame();
//event delegation???
//about line 41- Not sure what this does exactly, but I orginaly had $(".crystal).on("click",function() and it wasnt letting the game restart.. saw this online and idk why but it works.
$(document).on("click", ".crystal", function(){
    var value = parseInt($(this).attr("randomValue"));
    firstNumber+= value;

    if (firstNumber > randomResult){
        alert("You Lost...Loser...")
        lost++;
        $("#loss").html("Losses: " + lost);
        firstNumber = 0;
        startGame();
        
    }
    else if (firstNumber === randomResult){
        alert("You win!!! We got a winner!!")
        win++;
        $("#win").html("Wins: " + win);
        firstNumber = 0;
        startGame();
        
    }
    console.log(firstNumber);
});


// $(document).ready(function(){
//     $('#yellowGem').click( function() {
//         var counter = $('#currentScore').val();
//         counter++ ;
//         $('#currentScore').val(counter);
    // });


