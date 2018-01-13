//timer to countdown to start while they read directions
//interval timer starts to start game
//log button click
//determine if correct
//stop timer and disply results on click of submit
window.onload = function() {

var number = 45;
var intervalId;
var correct = 0;
var incorrect = 0;
var timerRunning = false;
var score;

//var modal = $("#myModal");
//var button = $("#button");
//var span = $(".close")


function startGame() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	number--;
	$("#timer").html("Time Left: " + number + " seconds");
	console.log("start");

	if (number === 0) {
		stop();
		alert("Times up!");
	}
}

function stop() {
	clearInterval(intervalId);
}

startGame();

$(".correct").on("click",function() {
	correct++;
	console.log("clicked right");
});

$(".incorrect").on("click",function() {
	incorrect++;
	console.log("clicked wrong");
});

$("#button").on("click",function() {
	stop();
	console.log("button works");

	if (incorrect <= 2 && correct >= 3) {
		$("#game").html("You won!");

	}else {
		$("#game").html("You lost!");

	};

  });

};

/*$("#playAgain").on("click", function(){
		startGame();
		console.log("button clicked");
});
*/
	//$("#modalContent").modal();


//$("#myModal").html("Correct: " + correct);
//$("#myModal").html("Incorrect: " + incorrect);