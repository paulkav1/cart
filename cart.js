function formcheck(){
	alert('formcheck');
	return false;
};

$(document).ready(function(){
	var item;

	$('#add').click(function(){
		alert('add button');
		$'.cart'.append('<div><input class="item" type="text" name="item"></div>');	
	});

	$('#item').change(function(){
		alert('change button');
		item = $('#item').val();

	});
})
