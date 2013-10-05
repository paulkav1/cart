function formCheck(){
	var item = $('.item').val();
	if (item == null || item == ""){
		//alert('item has no value');
		$('.item').css("background-color", "yellow");
		return false;		
	}else{
		$('.item').css("background-color", "white");		
		return false;
	}
};

$(document).ready(function(){
	var items = 0;

	$('#add').click(function(){
		$('#ct').append('<div><input class="item" type="text" name="f1" placeholder="enter value"><input class="chk" type="checkbox"></div>');
		items++;
		$('#items').html('<p>' + items + ' items</p>');
	});

	$('.item').change(function(){
		item = $('.item').val();
	});
})

//document.forms["cart"]["f1"].value;