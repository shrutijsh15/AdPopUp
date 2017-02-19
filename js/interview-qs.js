
function showPopUp(){
	$(".ad-popup").show('slide', {direction: 'right'}, 1000);
}
function hidePopUp(){
	$(".ad-popup").hide('slide', {direction: 'right'}, 1000);
}
$(window).on('load', function() { 
	showPopUp();
	$(".close-ad").click(function(){
		hidePopUp();
	});
});

