slotitem = new Array('0','1','2','3','4','5','6','7','8','9');
document.slots.bet.focus();
startgold=100;
document.slots.gold.value=startgold;
function stopplay () {
	if (document.slots.gold.value < startgold) {
		alert("You lost "+ (startgold-document.slots.gold.value) +" credits   ");
	} else {
		alert("You won "+ (document.slots.gold.value-startgold) +" credits   ");
	}
}
function rollem () {
	if ( isNaN(document.slots.bet.value)  ) {
		alert("Check your input!");
		return;
	}
	if (document.slots.bet.value<1 || document.slots.bet.value == ""   ) {
		alert("Make a bet!");
		return;
	}
	if (Math.floor(document.slots.gold.value) < Math.floor(document.slots.bet.value)) {
		alert("Your bet "+document.slots.bet.value+" is larger than your remaining credits "+document.slots.gold.value+".  ");
		return;
	}
	if (document.slots.bet.value>1) {
		document.slots.banner.value="You bet "+document.slots.bet.value+" credits";
	} else {
		document.slots.banner.value="You bet "+document.slots.bet.value+" credits";
	}
	counter=0;
	spinem();
}
function spinem() {
	turns1=10+Math.floor((Math.random() * 10))
	for (a=0;a<turns1;a++){
		document.slots.slot1.src=""+slotitem[a % 9]+".jpg"; 
	}
	turns2=10+Math.floor((Math.random() * 10))
	for (b=0;b<turns2;b++) {
		document.slots.slot2.src=""+slotitem[b % 9]+".jpg"; 
	}
	turns3=10+Math.floor((Math.random() * 10))
	for (c=0;c<turns3;c++) {
		document.slots.slot3.src=""+slotitem[c % 9]+".jpg";
	}
	counter++;
	if (counter<25) {
		setTimeout("spinem(counter);",50);
	} else {
		checkmatch();
	}
}
function checkmatch()	{ 
if ((document.slots.slot1.src == document.slots.slot2.src) && (document.slots.slot1.src == document.slots.slot3.src)) 
	{document.slots.banner.value="3 Of A Kind!     +"+Math.floor(document.slots.bet.value*10)+" credits";
	 document.slots.gold.value=Math.floor(document.slots.gold.value)+Math.floor(document.slots.bet.value*10); 
} else if ((document.slots.slot1.src == document.slots.slot2.src) ||
	(document.slots.slot1.src == document.slots.slot3.src) ||
	(document.slots.slot2.src == document.slots.slot3.src))
		{document.slots.banner.value="A PAIR!     +"+Math.floor(document.slots.bet.value*2)+" credits";
		 document.slots.gold.value = Math.floor(document.slots.bet.value*2) + Math.floor(document.slots.gold.value);
} else {document.slots.gold.value=document.slots.gold.value-document.slots.bet.value; 
		document.slots.banner.value="No Match!     -"+document.slots.bet.value+" credits";}
}