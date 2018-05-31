/*function search()
{
	var a=document.getElementById("search").value;	
alert(a+" is not available right now");
}

$(document).ready(function(){
	$("address").mouseenter(function(){
        $("address").hide("slow");
       });
    $("address").mouseleave(function(){
    	$("address").show("slow");
    });	
    
});
*/
$(document).ready(function(){


$('.scroll-footer').click(function(){
   $('html,body').animate({scrollTop: $('#footer').offset().top},1000);
});

$('.rb1').waypoint(function(direction){
	$('.rb1').addClass('animated rubberBand');
},{
offset:'50%'
});


$('.rb2').waypoint(function(direction){
	$('.rb2').addClass('animated rubberBand');
},{
offset:'50%'
});


});