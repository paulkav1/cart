function formCheck(){
	item = $('#itemx').val();

	if (item == null || item == ""){
		$('#itemx').css("background-color", "yellow");
		$('#add').css("color", "grey");
		$('#items').html('<p>Fix the item!</p>');				
	}else{
		item = $('#itemx').val();
		items++;
		item_list[items] = item
		$('#itemx').val('');
		$('#ct').append('<div><input class="item" type="text" value="' + item + '" name="f1"><input class="chk" type="checkbox"></div>');
		$('#itemx').css("background-color", "white");
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

	$('.itemx').change(function(){
	});
})
