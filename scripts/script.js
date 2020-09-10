$(document).ready(function (){
	$('.paralax__list>li').addClass('layer');
	$('.paralax__list').parallax();
	$('.wrapper').addClass('active');


	$('.paralax>.button').mouseenter(function(){
		$('.column').css({
			'transform':'translateY(100px)',
			'transition' :'all 1s ease'
		});
		$('.dot').css({
			'transform':'translateY(100px)',
			'transition' :'all 1s ease'
		});
		$('.arrows').css({
			'top': '50%',
			'transition' :'all 1s ease'
		});
	});
	$('.paralax>.button').mouseleave(function(){
		$('.column').css({
			'top':'55%',
			'transform':'translate(-50%,-50%)',
			'transition' :'all 1s ease'
		});
		$('.dot').css({
			'top':'25%;',
			'transform':'translate(-50%,-50%)',
			'transition' :'all 1s ease'
		});
		$('.arrows').css({
			'top': '-60%',
			'left':'50%',
			'transition' :'top 1s ease'
		});
	});
	$('.paralax>.button').on('click', function(){
		$('.page').css({
			'transform':'translateY(-100%)',
			'transition' :'all 2s ease 1s'
		});



		$('.bat_1>._bat_part').css({
			'transition' :'all 1s ease 5.7s',
			'top': '10%',
			'left': '10%'
		});
		$('.bat_2>._bat_part').css({
			'transition' :'all 1s ease 5.5s',
			'top': '13%',
			'left': '73%'
		});
		$('.bat_3>._bat_part').css({
			'transition' :'all 1s ease 5s',
			'top': '63%',
			'left': '53%'
		});
		$('.content').css({
			'transition' :'all 1s ease 4s',
			'opacity': '1'
		});
		
	});

		//$('.content_box>.bat_cont').addClass('layer');
		//$('.content_box').parallax();

		var width = $('.content_box').width();
		var height = $('.content_box').height();
	
		var x_1_0 = 0.07 * width;
		var y_1_0 = 0.15 * height;		


		var x_2_0 = 0.7 * width -  1200;
		var y_2_0 = 0.13 * height;	

		var x_3_0 = 0.53 * width - 800;
		var y_3_0 = 0.63 * height -600;		
	

	$('.content_box').on('mousemove', function pos(e){
		var speed_bat_1 = $('.bat_1').attr('__speed');
		var speed_bat_2 = $('.bat_2').attr('__speed');
		var speed_bat_3 = $('.bat_3').attr('__speed');



	
		
		var coor_x = e.clientX;
		var coor_y = e.clientY;

		
		var new_bat_1_y = y_1_0 + speed_bat_1 * ($('.bat_1').children().offset().top - coor_y)/10;
		var new_bat_1_x = x_1_0 +  speed_bat_1 * ($('.bat_1').children().offset().left - coor_x)/10;


		var new_bat_2_y = y_2_0 - speed_bat_2 * ($('.bat_2').children().offset().top - coor_y)/10;
		var new_bat_2_x = x_2_0 + speed_bat_2 * ($('.bat_2').children().offset().left - coor_x)/10;

		

		var new_bat_3_y = y_3_0  - speed_bat_3 * ($('.bat_3').children().offset().top - coor_y)/10;
		var new_bat_3_x = x_3_0 -  speed_bat_3 * ($('.bat_3').children().offset().left - coor_x)/10;


		$('.bat_1').css({
			'transform' : `translate(${new_bat_1_x}px, ${new_bat_1_y}px)`,
			'transition' :'all .2s linear'
		});
		$('.bat_2').children().css({
			'transform' : `translate(${new_bat_2_x}px, ${new_bat_2_y}px)`,
			'transition' :'all .2s linear'
		});
		$('.bat_3').children().css({
			'transform' : `translate(${new_bat_3_x}px, ${new_bat_3_y}px)`,
			'transition' :'all .2s linear'
		});	
	});
	var i = 0;
	var k = 0;
	var z = 0;
	$('.bat_1').on('click',function(){
	
		if(i%3 === 0){
				x_1_0 += 150;
				y_1_0 += 150;
		} else if (i%3 === 1) {
				x_1_0 -= 300;
				y_1_0 += 150;
		} else if(i%3 === 2) {
				x_1_0 += 150;
				y_1_0 -= 300;
		}
		i++;

	});
	$('.bat_2').on('click',function(){
	
		if(k%3 === 0){
				x_2_0 -= 450;
				y_2_0 += 150;
		} else if (k%3 === 1) {
				x_2_0 += 150;
				y_2_0 += 150;
		} else if(k%3 === 2) {
				x_2_0 += 300;
				y_2_0 -= 300;
		}
		k++;

	});
	$('.bat_3').on('click',function(){
	
		if(z%3 === 0){
				x_3_0 -= 150;
				y_3_0 -= 300;
		} else if (z%3 === 1) {
				x_3_0 += 300;
				y_3_0 -= 150;
		} else if(z%3 === 2) {
				x_3_0 -= 150;
				y_3_0 += 450;
		}
		z++;

	});
	$('.content>.button').mouseenter(function(){
		$('.column').css({
			'transform':'translateY(100px)',
			'transition' :'all 1s ease'
		});
		$('.dot').css({
			'transform':'translateY(100px)',
			'transition' :'all 1s ease'
		});
		$('.arrows').css({
			'top': '50%',
			'transition' :'all 1s ease'
		});
	});
	$('.content>.button').mouseleave(function(){
		$('.column').css({
			'top':'55%',
			'transform':'translate(-50%,-50%)',
			'transition' :'all 1s ease'
		});
		$('.dot').css({
			'top':'25%;',
			'transform':'translate(-50%,-50%)',
			'transition' :'all 1s ease'
		});
		$('.arrows').css({
			'top': '-60%',
			'left':'50%',
			'transition' :'top 1s ease'
		});
	});
	$('.content>.button').on('click', function(){
		$('.content').css({
			'transform-origin': '30% 60%',
			'transform':'scale(10,10)',
			'transition' :'all 2s ease .5s',
			'opacity' : '0'
		});
		$('.page').css({
			'display':'none'
		});
		setTimeout(function(){ 
			$('.wrapper').empty();
			$('.wrapper').append(`
				<div class="loc_3">
				
				</div>`);
			}, 2500);

	});
	
	$('.wrapper').on('mousemove', function(){
		console.log('asdfas');

		$('.loc_3').css({
			'opacity' : '1',
			'transition' :'all 2s ease'
		});
	});
});