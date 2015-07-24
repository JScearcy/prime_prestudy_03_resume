var main = function() {
	$('header').hide();
	$('.summary').hide();
	$('.certification').hide();
	$('.projects').hide();
	$('.experience').hide();
	$('button').show();
	$('.exptabs-content .active').css('visibility', 'hidden');
	$('button').click(function() {
		$(this).remove();
		$('header').slideDown(200);
		$('.summary').slideDown(300);
		$('.certification').slideDown(400);
		$('.projects').slideDown(500);
		$('.experience').slideDown(600, function() {
			$('.exptabs-content .active').css('visibility', 'visible');
		})
	})
}

$(document).ready(main)
