var first_roll=true;
var sum, point;
var craps = function(){
	var die1 = Math.floor(Math.random()*6+1);
	var die2 = Math.floor(Math.random()*6+1);
	sum = die1 + die2;
	document.getElementById("msg").innerHTML = "You rolled a " +  die1 + " and a " + die2 + " totaling: " + sum;
	if (first_roll) {
		if(sum===7 || sum===11) {
			document.getElementById("result").innerHTML = "A Winner is You!";
			}else{
				if(sum===2 || sum===3 || sum===12){
				document.getElementById("result").innerHTML = "Loser! Are You feeling sorry for yourself?";
				}else{
					point = sum;
					document.getElementById("point").innerHTML = " Your point is: " + point;
					document.getElementById("result").innerHTML = "";
					first_roll = false;
				}
			}
		}else{
			if(sum===7){
				document.getElementById("result").innerHTML ="YOU LOSE!";
				first_roll=true;
			}else{
				if(point===sum){
					document.getElementById("result").innerHTML = "A Winner is You!";
					first_roll=true;
				}else{
					document.getElementById("result").innerHTML = "Check the side bets, Keep rolling";
				}
			}
		}
}
var resetIt = function() {
	location.reload();
};