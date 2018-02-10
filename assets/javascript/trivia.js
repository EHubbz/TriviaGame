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

function startGame() {
	number = 45;
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
		$("#score").text("You lost!");
		console.log("work");

	}else {
		$("#score").text("You lost!");
		console.log("works");
	};

  });


$("#playAgain").on("click", function(){
		stop();
		startGame();
		$('.answer').find('input:radio, input:checkbox').prop('checked', false);
		console.log("button clicked");

		
});

};


	