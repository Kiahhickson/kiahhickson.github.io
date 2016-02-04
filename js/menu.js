	$(document).ready(function() {
	$(".burger, .menu").click(function(){
    $(window).scrollTop(0); // Move to the top of the document
		$(this).parent().find(".hide").slideToggle();
	});
});