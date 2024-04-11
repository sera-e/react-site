// JavaScript Document

var doIt = function() {
	
	var userChoice;
	
	// computer choice
	var computerChoice = Math.random();
	
	if (computerChoice <0.34){
		computerChoice = "rock";
	}else if(computerChoice <=0.67){
		computerChoice = "paper";
	}else{
		computerChoice = "scissors";
	}

	// present computer's choice
	document.getElementById("result1").value = computerChoice;
	
	// get user's choice based on which radio button is selected
	if(document.getElementById('rps_rock').checked) {
  		userChoice = "rock";
	}else if(document.getElementById('rps_paper').checked) {
  		userChoice = "paper";
	}else {
		userChoice = "scissors";
	}

	// call compare function to determine winner and present result
	document.getElementById("result2").value = compare (userChoice, computerChoice);
}

var resetIt = function() {
	document.getElementById('wins-player').value = 0;
	document.getElementById('wins-computer').value = 0;
	document.getElementById('draw').value = 0;
};

var winCounter = function(winner) {
	if (winner === 'comp') {
		var amount = parseInt(document.getElementById('wins-computer').value);
		document.getElementById('wins-computer').value = String(amount += 1);
	} else if (winner === 'player') {
		var amount = parseInt(document.getElementById('wins-player').value);
		document.getElementById('wins-player').value = String(amount += 1);
	}else if (winner === 'draw'){
		var amount = parseInt(document.getElementById('draw').value);
		document.getElementById('draw').value = String(amount += 1);
}
}
var compare = function (choice1 , choice2) {
	if (choice1 === choice2){
		winCounter('draw');
		return("It's a tragic stalemate.");
	} else if (choice1 === "rock"){
		if (choice2 === "paper") {
			winCounter('comp');
			return("Paper covers rock! Computer is winrar!");			
		} else {
			winCounter('player');
			return("Rock beats scissors! A Winrar is You!");
		}
	} else if (choice1 === "paper"){
		if (choice2 === "rock") {
			winCounter('player');
			return("Paper covers rock! A Winrar is You!");
		} else {
			winCounter('comp');
			return("Scissors cuts paper! Computer is winrar!");
		}
	} else if (choice1 === "scissors"){
		if (choice2 === "rock") {
			winCounter('comp');
			return("Rock beats scissors! Computer is winrar!");
		} else {
			winCounter('player');
			return("Scissors cuts paper! A Winrar is You!");
		}
	}
};
