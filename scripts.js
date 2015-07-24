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
		$('header').slideDown(600);
		$('.summary').slideDown(400);
		$('.certification').slideDown(300);
		$('.projects').slideDown(200);
		$('.experience').slideDown(100, function() {
			$('.exptabs-content .active').css('visibility', 'visible');
		})
	})
}

$(document).ready(main)
