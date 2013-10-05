function formCheck(){
	item = $('#item1').val();

	if (item == null || item == ""){
		$('#item1').css("background-color", "yellow");
		$('#add').css("color", "grey");
		$('#items').html('<p>Fix the item!</p>');		
		edit_fail = true;	
	}else{
		$('#item1').css("background-color", "white");
		$('#add').css("color", "black");
		$('#items').html('<p>' + items + ' items</p>');		
		edit_fail = false;				
	}
	return false;
};

$(document).ready(function(){
	edit_fail = false;
	items = 0;
	item_list = [];

	$('#add').click(function(){
		if (!edit_fail){
			if (items != 0){
				item = $('#item1').val();
				$('#item1').val('');
			}else{
				item = '';
			}			
			$('#ct').append('<div><input class="item" type="text" value="' + item + '" name="f1" placeholder="enter value"><input class="chk" type="checkbox"></div>');
			items++;
			item_list[items] = item
		}
	});

	$('.item').change(function(){
		item = $('#item1').val();
	});
})
