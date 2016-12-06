$('.delete').on('click', function(event) {
	event.preventDefault();
	let $currentElem = $(this).parent(".panel-title");
	const id = $currentElem.attr('data-id')

	$.ajax({
		url: '/delete/' + id,
		type: 'DELETE'
	})
	.done(function() {
		$currentElem.remove();
		location.reload();
	})
});

