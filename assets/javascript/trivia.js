//timer to countdown to start while they read directions
//interval timer starts to start game
//log button click
//determine if correct
//stop timer and disply results on click of submit
$(document).ready(function() {

var number = 45;
var intervalId;
var correct = 0;
var incorrect = 0;

function startGame() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	number--;
	$("#timer").html("Time Left: " + number);
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