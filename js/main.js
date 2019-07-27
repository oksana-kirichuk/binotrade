$('.tab-container .tab').click(function () {

	var target = $(this).attr('data-tab');

	$('.tab-container .tab').removeClass('active');
	$(this).addClass('active');

	$('.tab-container .content').removeClass('active');
	$('.tab-container .content' + target).addClass('active');

});

$('.header-dropdown > .drop-btn').click(function () {
	$(this).parent().toggleClass('active');
});


$(body).click(function () {
	$('.header-dropdown > .drop-btn').parent().removeClass('active');
});
