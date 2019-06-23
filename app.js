var condition_number=0;
var selected_number;
var selected_box_row=['cabinet_box_row1','cabinet_box_row2','cabinet_box_row3','cabinet_box_row4']
var selected_box_column=['cabinet_box_column1','cabinet_box_column2','cabinet_box_column3','cabinet_box_column4']
var row_number=0;
var column_number=0;
var final_number=0;

$(document).ready(function(){
	$('body').on('click', function () {
  	$('.first_welcome').fadeOut(1000); 

  	$('.cabinet_numbers').on('click', function() {
    	if (condition_number==0){
        	$(this).addClass('selected');
        	$(this).removeClass('cabinet_numbers');
        	condition_number=1;
        	temperate_selection=this;
					$('#cabinet_ok').fadeTo("100",1);
    	}

    	if (condition_number==1){
        	$(temperate_selection).removeClass('selected');
        	$(temperate_selection).addClass('cabinet_numbers');
        	$(this).addClass('selected'); 
        	$(this).removeClass('cabinet_numbers');
        	temperate_selection=this;
  	}
  
  	});

  	$('#cabinet_ok').on('click', function() {
		   temperate_selection=(($(temperate_selection).attr('id')));

			 if (condition_number==1){ 
				for(var i = 0, j = selected_box_row.length; i < j; i++) {
						console.log("hihihi");
    				if($(temperate_selection).hasClass(selected_box_row[i])) {
        				var row_number=i+1;
								break;
    				}
				}
				
				for(var i = selected_box_column.length, j = 0; i > j; i--) {
    				if($(temperate_selection).hasClass(selected_box_colimn[i])) {
        				var column_number=i-1;
								break;
    				}
				}
				
				final_number=(row_number)*(selected_box_column.length)-column_number;
				console.log(final_number);

    	}
  	})
	})
})
