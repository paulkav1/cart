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

	$('#hint').click(function(){
		$('#target').val(target);		
	});

	$('#play').click(function(){
		target = Math.floor(100 * Math.random());
		guesses = '';
	});

	$('#guess').change(function(){
		guess = $('#guess').val();

	});
})
