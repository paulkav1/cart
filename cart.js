/*
 list of items
 can add (and delete)
 can check off
*/
function formcheck(){
	alert('formcheck');
	return false;
};

$(document).ready(function(){
	var guess;

	$('#add').click(function(){
		alert('add button')	
		$'.cart'.append('<div><input class="item" type="text" name="item"></div>')	
	});

	$('#guess').change(function(){
		guess = $('#guess').val();

	});
})
