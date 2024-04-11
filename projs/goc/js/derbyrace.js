var nuggetCount=new Array(0,0,0,0,0,0);
var raceWon = false;
$(document).ready(function() {	
	$('#go').click(function(){
		var pick = Math.floor(Math.random() * 6) + 1;
		nuggetCount[pick-1]++; 
		var $h = ('#nugget0'+pick);	
    	$( $h ).animate({left:'+=50px'},500);
		for ( var i=0 ; i < nuggetCount.length ; i++ ) {
			if (raceWon === true) {
				break;
			}	else if ( nuggetCount[i] >= 6 ) {
				$('#msg').html("The Winner is Nugget #" + String(pick) + "  START OVER!");
				raceWon = true;
				$( "#go" ).unbind();
			}
		}
		
	});
	
	$('#reset').click(function(){
		location.reload();
	});
});