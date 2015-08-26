/* Loudon's version, if the watched screen is clicked again, switch to trip view */

$(document).ready(function(){
    $( "[id*=vid0]").click(function(){
    
    		if ($( this ).hasClass('watchthis')){
    			$( "[id*=vid0]" ).removeClass("watchthis aside").addClass("tripview");
    		
    		}else {
    
          		$( "[id*=vid0]:not(this)" ).removeClass("tripview watchthis").addClass("aside");
				$( this ).removeClass("tripview aside").addClass("watchthis");
          };
          	

    });
});


/* Dennis original version, a separate button for "restore"*/

/*$(document).ready(function(){
    $( "[id*=vid0]").click(function(){
    		
          	$( "[id*=vid0]:not(this)" ).removeClass("tripview").addClass("aside");
			$( this ).removeClass("tripview aside").addClass("watchthis");
          
          	

    });
});



$(document).ready(function(){
    $( "#restore").click(function(){
          	$( "[id*=vid0]" ).removeClass("watchthis aside").addClass("tripview");

    });
});
*/



