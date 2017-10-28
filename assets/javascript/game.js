
var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function(){

	$(".crystals").empty();

	var images =[
			'http://www.crystalinks.com/flameaura350.jpg', 
			'http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg', 
			'http://crystalhealingshop.com/wp-content/uploads/2016/05/citrine.jpg', 
			'http://www.healingwithcrystals.net.au/uploads/1/5/5/7/15572098/667588195.jpg?263',
			]

random_result = Math.floor(Math.random()* 69) + 30;

$("#result").html("Random Result: " + random_result);

for(var i = 0; i < 4; i++){
	
	var random = Math.floor(Math.random() * 11) + 1;

	var crystal = $("<div>");
		crystal.attr({
			"class": "crystal",
			"data-random": random
		});
		crystal.css({
			"background-image":"url('" + images[i] + "')",
			"baclground-size":"cover"
		});
	
	$(".crystals").append(crystal);  

 	}

 	$("#previous").html("Total Score: " + previous);
}

resetAndStart();

var reset = function(){

}


$(document).on("click", ".crystal", function(){

	var num = parseInt($(this).attr("data-random"));

	previous += num; 

	$("#previous").html("Total Score: " + previous);

	console.log(previous);

	if(previous > random_result){
		lost++;

		$("#lost").html("You Lost: " + lost);

		previous = 0;

		resetAndStart();
	}
	else if (previous === random_result){
		win++;

		$("#win").html("You Win: " + win);

		previous = 0;

		resetAndStart();
	}

});

