$(document).ready(function () {
  $(window).scroll(function() {
		$(this).scrollTop() > 200 ? $('.backtop').addClass('show') : $('.backtop').removeClass('show')
	});
	$('.backtop').click(function() {
		return $("body,html").animate({
			scrollTop: 0
		}, 800), !1
	});
  $('a.btn-support').click(function(e){
    e.stopPropagation();
    $('.support-content').slideToggle();
  });
});