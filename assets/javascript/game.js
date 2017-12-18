$(document).ready(function() {
	var roundScoreGoal = 0; //use Math.random to pick a number between 19-120
	var roundScoreCounter = 0; //keep track of round score

	var winsCounter = 0; //keep track of wins and losses over multiple rounds
	var lossesCounter = 0;

	var redCrystalValue = 0; //use Math.random to pick a number between 1-12 for each crystalValue
	var blueCrystalValue = 0;
	var yellowCrystalValue = 0;
	var greenCrystalValue = 0;

	/* things needed?

	function to clear roundScoreCounter/$("#roundScoreCounterDisplay"). and start new round
		assign new the crystalValues and new roundScoreGoal/$("#roundScoreGoalDisplay").
			maybe just call other functions that deal with crystalValue assignment and roundScoreGoal assignment
				after clearing stuff
	*/
	//function roundStarter() {
	//	roundScoreGoal = 
	//}

	
	//function to use Math.random() to pick number between 19-120 for roundScoreGoal
	function getRandomScoreGoal(min, max) {
		min = Math.ceil(19);
		max = Math.floor(120);
		return Math.floor(Math.random() *  (max - min + 1)) + min; //max inclusive and min inclusive
	}
	console.log(getRandomScoreGoal());

	//functions to use Math.random() to pick numbers between 1-12 for red/blue/yellow/greenCrystalValue
	function getRandomRedCrystalValue(min, max) {
		min = Math.ceil(1);
		max = Math.floor(12);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	console.log(getRandomRedCrystalValue());

	function getRandomBlueCrystalValue(min, max) {
		min = Math.ceil(1);
		max = Math.floor(12);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	console.log(getRandomBlueCrystalValue());
	
	function getRandomYellowCrystalValue(min, max) {
		min = Math.ceil(1);
		max = Math.floor(12);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	console.log(getRandomYellowCrystalValue());

	function getRandomGreenCrystalValue(min, max) {
		min = Math.ceil(1);
		max = Math.floor(12);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	console.log(getRandomGreenCrystalValue());
	//function to 

	/*
	function to keep track of roundScoreCounter and check
		if (roundScoreCounter === roundScoreGoal) {
			winsCounter++;
			$("#winsCounterDisplay").text(winsCounter)
		}
		else if (roundScoreCounter > roundScoreGoal) {
			lossesCounter++;
			$("#lossesCounterDisplay").text(lossesCounter)
		}

	function to 

	*/

	//function() {
	//
	//}
});