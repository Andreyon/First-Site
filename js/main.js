$(document).ready(function(){
	$('.header-navbar__humburger').click(function(){
		$(this).toggleClass('active');
		$(".header-navbar__list").toggleClass('active');
		

	});
});