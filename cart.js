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
	});

	$('#guess').change(function(){
		guess = $('#guess').val();

	});
})
