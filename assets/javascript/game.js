//Cyrstal Collector Game
//Four gem buttons with randomly generated numbers
//randomly generated scoreGoal
//update player score after gem click
//



var randomResult;
var lost = 0;
var win = 0;
var firstNumber = 0;

var gemImages = [
    "http://pm1.narvii.com/6550/75057a2e15d9a02874a8c96691ce62a5c8846007_00.jpg",
    "http://pixelartmaker.com/art/0918c614af7f5de.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5Uou7XEM0k--WIbO7OHLQMoHZLhA1AaZGpisfLl-tuY0EPBbwQ",
    "http://pm1.narvii.com/6534/bdfbc138ef5276a861d60ea05813b1bbf6df73ab_00.jpg",
]

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
            "randomValue":random,
            });
            crystal.css({
                "background-image":"url('" + gemImages[i] + "')",
                "background-size":"cover",
            });

    $(".crystals").append(crystal);
    }
}

startGame();

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
    $("#currentScore").html("Current Score: " + firstNumber);
    console.log(firstNumber);
});


// $(document).ready(function(){
//     $('#yellowGem').click( function() {
//         var counter = $('#currentScore').val();
//         counter++ ;
//         $('#currentScore').val(counter);
    // });


