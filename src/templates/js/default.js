$(document).ready(function () {
  $(window).scroll(function() {
		$(this).scrollTop() > 200 ? $('.backtop').addClass('show') : $('.backtop').removeClass('show')
	});
	/*** back to top ***/
	$('.backtop').click(function() {
		return $("body,html").animate({
			scrollTop: 0
		}, 800), !1
	});
	/*** btn support left ***/
  $('a.btn-support').click(function(e){
    e.stopPropagation();
    $('.support-content').slideToggle();
	});
	
		/*** Footer mobile ***/
		var ww = $(window).width();
		if (ww < 768 ){
			$('.foo-title').on('click', function(){
				$(this).next('.foo-content').slideToggle('fast');
			});
		} else {
			$('.foo-content').show();
		}
	
});