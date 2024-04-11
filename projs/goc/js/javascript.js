$(document).ready(function(){ 
  document.oncontextmenu = function() {return false;};
  $('h1').mousedown(function(e){ 
	if( e.button = 1 ) { 
	  $('body').toggleClass('active');
	  $('.content .wrapper').toggleClass('opacity'); 
	  return false; 
	} 
	return true; 
  }); 
});