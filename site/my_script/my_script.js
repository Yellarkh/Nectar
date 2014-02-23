$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	//active status
	$(function(){
	    $('.nav_link').click(function () {
	        $('.nav_link').removeClass('active');
	        $(this).addClass('active');
	     });
	 });

	//click button show hide
	$('#smart_button').click(function() {
        $('#smart_nav_container').slideToggle(250);
    });

});
