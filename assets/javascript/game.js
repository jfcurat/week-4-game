$(document).ready(function() {
	var roundScoreGoal = 0; //use Math.random to pick a number between 19-120
	var roundScoreCounter = 0; //keep track of round score

	var winsCounter = 0; //keep track of wins and losses over multiple rounds
	var lossesCounter = 0;

	var redCrystalValue = 0; //use Math.random to pick a number between 1-12 for each crystalValue
	var blueCrystalValue = 0;
	var yellowCrystalValue = 0;
	var greenCrystalValue = 0;

	//var roundOver = false;

	/* things needed?

	function to clear roundScoreCounter/$("#roundScoreCounterDisplay"). and start new round
		assign new the crystalValues and new roundScoreGoal/$("#roundScoreGoalDisplay").
			maybe just call other functions that deal with crystalValue assignment and roundScoreGoal assignment
				after clearing stuff
	*/

	
	/*function to reset state @ beginning of round
	function initializeRound() {
		roundScoreGoal = 0;
		roundScoreCounter = 0;
		roundOver = false;
	}
	*/
	//function to use Math.random() to pick number between 19-120 for roundScoreGoal
	function getRandomScoreGoal(min, max) {
		min = Math.ceil(19);
		max = Math.floor(120);
		roundScoreGoal = Math.floor(Math.random() *  (max - min + 1)) + min; //max inclusive and min inclusive
		return roundScoreGoal;
	}
	console.log(getRandomScoreGoal());
	$("#roundScoreGoalDisplay").text("Target Score: " + roundScoreGoal);

	//functions to use Math.random() to pick numbers between 1-12 for red/blue/yellow/greenCrystalValue
	function getRandomRedCrystalValue(min, max) {
		min = Math.ceil(1);
		max = Math.floor(12);
		redCrystalValue = Math.floor(Math.random() * (max - min + 1)) + min;
		return redCrystalValue;
	}
	console.log(getRandomRedCrystalValue());
	$("#redCrystalImage").attr("crystalPointsValue", redCrystalValue);

	function getRandomBlueCrystalValue(min, max) {
		min = Math.ceil(1);
		max = Math.floor(12);
		blueCrystalValue = Math.floor(Math.random() * (max - min + 1)) + min;
		return blueCrystalValue;
	}
	console.log(getRandomBlueCrystalValue());
	$("#blueCrystalImage").attr("crystalPointsValue", blueCrystalValue);

	function getRandomYellowCrystalValue(min, max) {
		min = Math.ceil(1);
		max = Math.floor(12);
		yellowCrystalValue = Math.floor(Math.random() * (max - min + 1)) + min;
		return yellowCrystalValue;
	}
	console.log(getRandomYellowCrystalValue());
	$("#yellowCrystalImage").attr("crystalPointsValue", yellowCrystalValue);

	function getRandomGreenCrystalValue(min, max) {
		min = Math.ceil(1);
		max = Math.floor(12);
		greenCrystalValue = Math.floor(Math.random() * (max - min + 1)) + min;
		return greenCrystalValue;
	}
	console.log(getRandomGreenCrystalValue());
	$("#greenCrystalImage").attr("crystalPointsValue", greenCrystalValue);
	
	/*
	function to keep track of crystal clicks,
	increment roundScoreCounter,
	and check roundScoreCounter against roundScoreGoal to see if round won
	*/

	$(".crystalImage").on("click", function crystalClickActions() {
		var crystalPoints = ($(this).attr("crystalPointsValue"));
		console.log(crystalPoints);

		crystalPoints = parseInt(crystalPoints);

		roundScoreCounter += crystalPoints;
		console.log(roundScoreCounter);
		$("#roundScoreCounterDisplay").text(roundScoreCounter);

		if(roundScoreCounter === roundScoreGoal) {
			winsCounter++;
			$("#winsCounterDisplay").text("Wins: " + winsCounter);
		//	roundOver = true;
		}
		else if(roundScoreCounter > roundScoreGoal) {
			lossesCounter++;
			$("#lossesCounterDisplay").text("Losses: " + lossesCounter);
		//	roundOver= true;
		}
		/*
		if(roundOver = true) {
			roundScoreCounter = 0;
			getRandomScoreGoal();
			getRandomRedCrystalValue();
			getRandomBlueCrystalValue();
			getRandomYellowCrystalValue();
			getRandomGreenCrystalValue();
		}
		*/
	});
	
});