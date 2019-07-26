$('.tab-container .tab').click(function () {

	var target = $(this).attr('data-tab');

	$('.tab-container .tab').removeClass('active');
	$(this).addClass('active');

	$('.tab-container .content').removeClass('active');
	$('.tab-container .content' + target).addClass('active');

});