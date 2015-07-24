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
		$('header').slideDown(500);
		$('.summary').slideDown(500);
		$('.certification').slideDown(500);
		$('.projects').slideDown(500);
		$('.experience').slideDown(500, function() {
			$('.exptabs-content .active').css('visibility', 'visible');
		})
	})
}

$(document).ready(main)