var tosses = heads = hPct = tails = tPct = 0;
var resetIt = function() {
	document.getElementById("tosses").value="0";
	document.getElementById("heads").value="0";
	document.getElementById("hPct").value="0";
	document.getElementById("tails").value="0";
	document.getElementById("tPct").value="0";
	tosses = heads = hPct = tails = tPct = 0;
	$('#coins').children().remove();
};
var flipIt = function() {
	tosses++;
	if (Math.random() < 0.5){
		heads++;
		$('#coins').append('<div class="heads"></div>')	
	} else {
		tails++;	
		$('#coins').append('<div class="tails"></div>')			
	}
	hPct= heads/tosses;
	tPct= tails/tosses;
	document.getElementById("tosses").value=String(tosses);
	document.getElementById("heads").value=String(heads);
	document.getElementById("hPct").value=String(hPct);
	document.getElementById("tails").value=String(tails);
	document.getElementById("tPct").value=String(tPct);
};
var autoFlipIt = function(numTosses) {
	numTosses = document.getElementById("numTosses").value;
	for (i=0; numTosses>0; numTosses-=1){
		flipIt();
	}
}