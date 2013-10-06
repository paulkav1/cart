function formCheck(){
	item = $('#item1').val();

	if (item == null || item == ""){
		$('#item1').css("background-color", "yellow");
		$('#add').css("color", "grey");
		$('#items').html('<p>Fix the item!</p>');				
	}else{
		item = $('#item1').val();
		items++;
		item_list[items] = item
		$('#item1').val('');
		$('#ct').append('<div><input class="item" type="text" value="' + item + '" name="f1"><input class="chk" type="checkbox"></div>');
		$('#item1').css("background-color", "white");
		$('#add').css("color", "black");
		$('#items').html('<p>' + items + ' items</p>');							
	}
	return false;
};

$(document).ready(function(){
	items = 0;
	item_list = [];

	$('#add').click(function(){
	});

	$('.item').change(function(){
	});
})
