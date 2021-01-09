var $ = jQuery;
function svgConvert(){
	jQuery('.imgsvg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function(data) {
			var $svg = jQuery(data).find('svg');
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			$img.replaceWith($svg);
		}, 'xml');
	});
}
function menuToggle() {
	$( ".menutoggle" ).click(function() {
		$( ".mainmenu" ).slideToggle( "slow");
		$(this).toggleClass("show");
		$('.header-profile').toggleClass('invisibled');
	});
}

function slickView() {
	jQuery('.home-testimonial .swiper-wrapper').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		nextArrow: '.home-testimonial .swiper-button-next',
		prevArrow: '.home-testimonial .swiper-button-prev'
	});
}

$(document).ready(function() {
	svgConvert();
	menuToggle();
	slickView();
});


$(window).on('scroll', function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop > 0) {
		$('.header').addClass('sticky');
	}
	else{
		$('.header').removeClass('sticky');
	}
});

$(window).on("load",function(){
    var pageURL = $(location).attr("href");
	var parts = pageURL.split("/");
	var last_part = parts[parts.length-2];

	if(last_part == 'your-foundation'){
		$(".dashboard-link").addClass("active");
	}

});

let num_total1 = Number($('.d-block .d3 input').val())+Number($('.d-block .d4 input').val())+Number($('.d-block .d5 input').val())+Number($('.d-block .d6 input').val())+Number($('.d-block .d7 input').val())+Number($('.d-block .d8 input').val())+Number($('.d-block .d9 input').val())+Number($('.d-block .d10 input').val())+Number($('.d-block .d11 input').val());
$('.d-block .aspend_invitations input').val(Math.floor(num_total1));

 $('.d-block .d3 input').keyup(function(){
    let num = (Number($(this).val())+Number($('.d-block .d4 input').val())+Number($('.d-block .d5 input').val())+Number($('.d-block .d6 input').val())+Number($('.d-block .d7 input').val())+Number($('.d-block .d8 input').val())+Number($('.d-block .d9 input').val())+Number($('.d-block .d10 input').val())+Number($('.d-block .d11 input').val()));
    $('.d-block .aspend_invitations input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) +Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
	} else{
		$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	$('.b2 select').change(function(){
		if($('.b2 select').val() == 'no'){
		 	$('.c2').html("$" +'0');	 	
				$('.e2').html("($" + Number( num ) + ")");
			
		}else{
			$('.c2').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
				$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
			} else{
				$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
			}
		}
	})


})
 $('.d-block .d4 input').keyup(function(){
    let num = (Number($(this).val())+Number($('.d-block .d3 input').val())+Number($('.d-block .d5 input').val())+Number($('.d-block .d6 input').val())+Number($('.d-block .d7 input').val())+Number($('.d-block .d8 input').val())+Number($('.d-block .d9 input').val())+Number($('.d-block .d10 input').val())+Number($('.d-block .d11 input').val()));
    $('.d-block .aspend_invitations input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
	} else{
		$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	$('.b2 select').change(function(){
		if($('.b2 select').val() == 'no'){
		 	$('.c2').html("$" +'0');	 	
				$('.e2').html("($" + Number( num ) + ")");
			
		}else{
			$('.c2').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
				$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
			} else{
				$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
			}
		}
	})

})
 $('.d-block .d5 input').keyup(function(){
    let num = (Number($(this).val())+Number($('.d-block .d4 input').val())+Number($('.d-block .d3 input').val())+Number($('.d-block .d6 input').val())+Number($('.d-block .d7 input').val())+Number($('.d-block .d8 input').val())+Number($('.d-block .d9 input').val())+Number($('.d-block .d10 input').val())+Number($('.d-block .d11 input').val()));
    $('.d-block .aspend_invitations input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
	} else{
		$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	$('.b2 select').change(function(){
		if($('.b2 select').val() == 'no'){
		 	$('.c2').html("$" +'0');	 	
				$('.e2').html("($" + Number( num ) + ")");
			
		}else{
			$('.c2').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
				$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
			} else{
				$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
			}
		}
	})

})

 $('.d-block .d6 input').keyup(function(){
    let num = (Number($(this).val())+Number($('.d-block .d4 input').val())+Number($('.d-block .d3 input').val())+Number($('.d-block .d5 input').val())+Number($('.d-block .d7 input').val())+Number($('.d-block .d8 input').val())+Number($('.d-block .d9 input').val())+Number($('.d-block .d10 input').val())+Number($('.d-block .d11 input').val()));
    $('.d-block .aspend_invitations input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val())+ Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
	} else{
		$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	$('.b2 select').change(function(){
		if($('.b2 select').val() == 'no'){
		 	$('.c2').html("$" +'0');	 	
				$('.e2').html("($" + Number( num ) + ")");
			
		}else{
			$('.c2').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
				$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
			} else{
				$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
			}
		}
	})

})
 $('.d-block .d7 input').keyup(function(){
    let num = (Number($(this).val())+Number($('.d-block .d4 input').val())+Number($('.d-block .d3 input').val())+Number($('.d-block .d5 input').val())+Number($('.d-block .d6 input').val())+Number($('.d-block .d8 input').val())+Number($('.d-block .d9 input').val())+Number($('.d-block .d10 input').val())+Number($('.d-block .d11 input').val()));
    $('.d-block .aspend_invitations input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val())+ Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
	} else{
		$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	$('.b2 select').change(function(){
		if($('.b2 select').val() == 'no'){
		 	$('.c2').html("$" +'0');	 	
				$('.e2').html("($" + Number( num ) + ")");
			
		}else{
			$('.c2').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
				$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
			} else{
				$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
			}
		}
	})

})
 $('.d-block .d8 input').keyup(function(){
    let num = (Number($(this).val())+Number($('.d-block .d4 input').val())+Number($('.d-block .d3 input').val())+Number($('.d-block .d5 input').val())+Number($('.d-block .d6 input').val())+Number($('.d-block .d7 input').val())+Number($('.d-block .d9 input').val())+Number($('.d-block .d10 input').val())+Number($('.d-block .d11 input').val()));
    $('.d-block .aspend_invitations input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
	} else{
		$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	$('.b2 select').change(function(){
		if($('.b2 select').val() == 'no'){
		 	$('.c2').html("$" +'0');	 	
				$('.e2').html("($" + Number( num ) + ")");
			
		}else{
			$('.c2').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
				$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
			} else{
				$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
			}
		}
	})

})
 $('.d-block .d9 input').keyup(function(){
    let num = (Number($(this).val())+Number($('.d-block .d4 input').val())+Number($('.d-block .d3 input').val())+Number($('.d-block .d5 input').val())+Number($('.d-block .d6 input').val())+Number($('.d-block .d7 input').val())+Number($('.d-block .d8 input').val())+Number($('.d-block .d10 input').val())+Number($('.d-block .d11 input').val()));
    $('.d-block .aspend_invitations input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
	} else{
		$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	$('.b2 select').change(function(){
		if($('.b2 select').val() == 'no'){
		 	$('.c2').html("$" +'0');	 	
				$('.e2').html("($" + Number( num ) + ")");
			
		}else{
			$('.c2').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
				$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
			} else{
				$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
			}
		}
	})

})
 $('.d-block .d10 input').keyup(function(){
    let num = (Number($(this).val())+Number($('.d-block .d4 input').val())+Number($('.d-block .d3 input').val())+Number($('.d-block .d5 input').val())+Number($('.d-block .d6 input').val())+Number($('.d-block .d7 input').val())+Number($('.d-block .d9 input').val())+Number($('.d-block .d8 input').val())+Number($('.d-block .d11 input').val()));
    $('.d-block .aspend_invitations input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
	} else{
		$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	$('.b2 select').change(function(){
		if($('.b2 select').val() == 'no'){
		 	$('.c2').html("$" +'0');	 	
				$('.e2').html("($" + Number( num ) + ")");
			
		}else{
			$('.c2').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
				$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
			} else{
				$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
			}
		}
	})

})
 $('.d-block .d11 input').keyup(function(){
    let num = (Number($(this).val())+Number($('.d-block .d4 input').val())+Number($('.d-block .d3 input').val())+Number($('.d-block .d5 input').val())+Number($('.d-block .d6 input').val())+Number($('.d-block .d7 input').val())+Number($('.d-block .d9 input').val())+Number($('.d-block .d10 input').val())+Number($('.d-block .d8 input').val()));
    $('.d-block .aspend_invitations input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
	} else{
		$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	$('.b2 select').change(function(){
		if($('.b2 select').val() == 'no'){
		 	$('.c2').html("$" +'0');	 	
				$('.e2').html("($" + Number( num ) + ")");
			
		}else{
			$('.c2').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num) > 0){
				$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num));
			} else{
				$('.e2').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
			}
		}
	})

})

let num_total2 = Number($('.d-block .d13 input').val())+Number($('.d-block .d14 input').val());
$('.d-block .d12 input').val(Math.floor(num_total2));

 $('.d-block .d13 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d14 input').val());
    $('.d-block .d12 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num) > 0){
		$('.e12').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num));
	} else{
		$('.e12').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6) + ")");
	}
	$('.b12 select').change(function(){
		if($('.b12 select').val() == 'no'){
		 	$('.c12').html("$" +'0');	 	
				$('.e12').html("($" + Number( num ) + ")");
			
		}else{
			$('.c12').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num) > 0){
				$('.e12').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num));
			} else{
				$('.e12').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6) + ")");
			}
		}
	})

})
 $('.d-block .d14 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d13 input').val());
    $('.d-block .d12 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num) > 0){
		$('.e12').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num));
	} else{
		$('.e12').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6) + ")");
	}
	$('.b12 select').change(function(){
		if($('.b12 select').val() == 'no'){
		 	$('.c12').html("$" +'0');	 	
				$('.e12').html("($" + Number( num ) + ")");
			
		}else{
			$('.c12').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num) > 0){
				$('.e12').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num));
			} else{
				$('.e12').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6) + ")");
			}
		}
	})

})

let num_total3 = Number($('.d-block .d19 input').val())+Number($('.d-block .d16 input').val())+Number($('.d-block .d17 input').val())+Number($('.d-block .d18 input').val());
$('.d-block .d15 input').val(Math.floor(num_total3));

 $('.d-block .d16 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d17 input').val())+Number($('.d-block .d18 input').val())+Number($('.d-block .d19 input').val());
    $('.d-block .d15 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
		$('.e15').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
	} else{
		$('.e15').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
	}
	$('.b15 select').change(function(){
		if($('.b15 select').val() == 'no'){
		 	$('.c15').html("$" +'0');	 	
				$('.e15').html("($" + Number( num ) + ")");
			
		}else{
			$('.c15').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
				$('.e15').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
			} else{
				$('.e15').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
			}
		}
	})
})
 $('.d-block .d17 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d16 input').val())+Number($('.d-block .d18 input').val())+Number($('.d-block .d19 input').val());
    $('.d-block .d15 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
        if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
		$('.e15').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
	} else{
		$('.e15').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
	}
	$('.b15 select').change(function(){
		if($('.b15 select').val() == 'no'){
		 	$('.c15').html("$" +'0');	 	
				$('.e15').html("($" + Number( num ) + ")");
			
		}else{
			$('.c15').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
				$('.e15').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
			} else{
				$('.e15').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
			}
		}
	})
})

 $('.d-block .d18 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d17 input').val())+Number($('.d-block .d16 input').val())+Number($('.d-block .d19 input').val());
    $('.d-block .d15 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
        if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
		$('.e15').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
	} else{
		$('.e15').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
	}
	$('.b15 select').change(function(){
		if($('.b15 select').val() == 'no'){
		 	$('.c15').html("$" +'0');	 	
				$('.e15').html("($" + Number( num ) + ")");
			
		}else{
			$('.c15').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
				$('.e15').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
			} else{
				$('.e15').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
			}
		}
	})
})
 $('.b44 select').change(function(){
		if($('.b44 select').val() == 'no'){
		 	$('.c44').html("$" +'0');	 	
			$('.e44').html("$" +'0');
			
		}else{
			$('.c44').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			// if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - Number( $(this).val() )) > 0){
			// 	$('.e44').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - Number( $(this).val() )));
			// } else{
			// 	$('.e44').html("($" + Number( Number( $(this).val() )- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			// }
			$('.e44').html($('.c44').html());
		}
	})
 $('.d-block .d44 input').keyup(function(){
 	let num = $(this).val();
 	$('.e44').html(Number($('.budget_input_amount').val()*0.9/100*2)-Number(num));
 	$('.b44 select').change(function(){
		if($('.b44 select').val() == 'no'){
		 	$('.c44').html("$" +'0');	 	
			$('.e44').html("($" + Number( num ) + ")");
			
		}else{
			$('.c44').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
				$('.e44').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				$('.e44').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})
 })
 
 $('.b91 select').change(function(){
		if($('.b91 select').val() == 'no'){
		 	$('.c91').html("$" +'0');	 	
			$('.e91').html("($" + Number( $('.d91 input').val()) + ")");
			
		}else{
			$('.c91').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1);
			// if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1 - Number( $(this).val() )) > 0){
			// 	$('.e91').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1 - Number( $(this).val() )));
			// } else{
			// 	$('.e91').html("($" + Number( Number( $(this).val() )- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1) + ")");
			// }
			$('.e91').html($('.c91').html());
		}
	})
 $('.d-block .d91 input').keyup(function(){
 	let num = $(this).val();
 	$('.e91').html(Number($('.budget_input_amount').val()*0.9/100*1)-Number(num));
 	$('.b91 select').change(function(){
		if($('.b91 select').val() == 'no'){
		 	$('.c91').html("$" +'0');	 	
			$('.e91').html("($" + Number( num ) + ")");
			
		}else{
			$('.c91').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1 - num) > 0){
				$('.e91').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1 - num));
			} else{
				$('.e91').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1) + ")");
			}
		}
	})
 })

 $('.b92 select').change(function(){
		if($('.b92 select').val() == 'no'){
		 	$('.c92').html("$" +'0');	 	
			$('.e92').html("($" + Number( $('.d92 input').val()) + ")");
			
		}else{
			$('.c92').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*0);
			// if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*0 - Number( $(this).val() )) > 0){
			// 	$('.e92').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*0 - Number( $(this).val() )));
			// } else{
			// 	$('.e92').html("($" + Number( Number( $(this).val() )- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*0) + ")");
			// }
			$('.e92').html($('.c92').html());
		}
	})
 $('.d-block .d92 input').keyup(function(){
 	let num = $(this).val();
 	$('.e92').html(Number($('.budget_input_amount').val()*0.9/100*0)-Number(num));
 	$('.b92 select').change(function(){
		if($('.b92 select').val() == 'no'){
		 	$('.c92').html("$" +'0');	 	
			$('.e92').html("($" + Number( num ) + ")");
			
		}else{
			$('.c92').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*0);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*0 - num) > 0){
				$('.e92').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*0 - num));
			} else{
				$('.e92').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*0) + ")");
			}
		}
	})
 })
 $('.d-block .d19 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d17 input').val())+Number($('.d-block .d18 input').val())+Number($('.d-block .d16 input').val());
    $('.d-block .d15 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
        if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
		$('.e15').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
	} else{
		$('.e15').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
	}
	$('.b15 select').change(function(){
		if($('.b15 select').val() == 'no'){
		 	$('.c15').html("$" +'0');	 	
				$('.e15').html("($" + Number( num ) + ")");
			
		}else{
			$('.c15').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
				$('.e15').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
			} else{
				$('.e15').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
			}
		}
	})
})

let num_total4 = Number($('.d-block .d21 input').val())+Number($('.d-block .d22 input').val());
$('.d-block .d20 input').val(Math.floor(num_total4));

 $('.d-block .d21 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d22 input').val());
    $('.d-block .d20 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
		$('.e20').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
	} else{
		$('.e20').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
	$('.b20 select').change(function(){
		if($('.b20 select').val() == 'no'){
		 	$('.c20').html("$" +'0');	 	
				$('.e20').html("($" + Number( num ) + ")");
			
		}else{
			$('.c20').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
				$('.e20').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				$('.e20').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})
})
 $('.d-block .d22 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d21 input').val());
    $('.d-block .d20 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
		$('.e20').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
	} else{
		$('.e20').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
	$('.b20 select').change(function(){
		if($('.b20 select').val() == 'no'){
		 	$('.c20').html("$" +'0');	 	
				$('.e20').html("($" + Number( num ) + ")");
			
		}else{
			$('.c20').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
				$('.e20').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				$('.e20').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})
})

let num_total5 = Number($('.d-block .d24 input').val())+Number($('.d-block .d25 input').val())+Number($('.d-block .d26 input').val())+Number($('.d-block .d27 input').val());
$('.d-block .d23 input').val(Math.floor(num_total5));

 $('.d-block .d24 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d25 input').val())+Number($('.d-block .d26 input').val())+Number($('.d-block .d27 input').val());
    $('.d-block .d23 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
		$('.e23').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
	} else{
		$('.e23').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
	$('.b23 select').change(function(){
		if($('.b23 select').val() == 'no'){
		 	$('.c23').html("$" +'0');	 	
				$('.e23').html("($" + Number( num ) + ")");
			
		}else{
			$('.c23').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
				$('.e23').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				$('.e23').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})
})
 $('.d-block .d25 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d24 input').val())+Number($('.d-block .d26 input').val())+Number($('.d-block .d27 input').val());
    $('.d-block .d23 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
        if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
		$('.e23').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
	} else{
		$('.e23').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
	$('.b23 select').change(function(){
		if($('.b23 select').val() == 'no'){
		 	$('.c23').html("$" +'0');	 	
				$('.e23').html("($" + Number( num ) + ")");
			
		}else{
			$('.c23').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
				$('.e23').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				$('.e23').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})
})
 $('.d-block .d26 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d25 input').val())+Number($('.d-block .d24 input').val())+Number($('.d-block .d27 input').val());
    $('.d-block .d23 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
        if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
		$('.e23').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
	} else{
		$('.e23').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
	$('.b23 select').change(function(){
		if($('.b23 select').val() == 'no'){
		 	$('.c23').html("$" +'0');	 	
				$('.e23').html("($" + Number( num ) + ")");
			
		}else{
			$('.c23').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
				$('.e23').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				$('.e23').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})
})
 $('.d-block .d27 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d25 input').val())+Number($('.d-block .d26 input').val())+Number($('.d-block .d24 input').val());
    $('.d-block .d23 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
        if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
		$('.e23').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
	} else{
		$('.e23').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
	$('.b23 select').change(function(){
		if($('.b23 select').val() == 'no'){
		 	$('.c23').html("$" +'0');	 	
				$('.e23').html("($" + Number( num ) + ")");
			
		}else{
			$('.c23').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
				$('.e23').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				$('.e23').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})
})

let num_total6 = Number($('.d-block .d29 input').val())+Number($('.d-block .d30 input').val())+Number($('.d-block .d31 input').val())+Number($('.d-block .d32 input').val());
$('.d-block .d28 input').val(Math.floor(num_total6));

 $('.d-block .d29 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d30 input').val())+Number($('.d-block .d31 input').val())+Number($('.d-block .d32 input').val());
    $('.d-block .d28 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    

	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
			$('.e28').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
		} else{
			$('.e28').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
		}
	$('.b28 select').change(function(){
		if($('.b28 select').val() == 'no'){
		 	$('.c28').html("$" +'0');	 	
				$('.e28').html("($" + Number( num ) + ")");
			
		}else{
			$('.c28').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
				$('.e28').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
			} else{
				$('.e28').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
			}
		}
	})

})
 $('.d-block .d30 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d29 input').val())+Number($('.d-block .d31 input').val())+Number($('.d-block .d32 input').val());
    $('.d-block .d28 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
			$('.e28').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
		} else{
			$('.e28').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
		}
	$('.b28 select').change(function(){
		if($('.b28 select').val() == 'no'){
		 	$('.c28').html("$" +'0');	 	
				$('.e28').html("($" + Number( num ) + ")");
			
		}else{
			$('.c28').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
				$('.e28').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
			} else{
				$('.e28').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
			}
		}
	})

})
 $('.d-block .d31 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d30 input').val())+Number($('.d-block .d29 input').val())+Number($('.d-block .d32 input').val());
    $('.d-block .d28 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
			$('.e28').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
		} else{
			$('.e28').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
		}
	$('.b28 select').change(function(){
		if($('.b28 select').val() == 'no'){
		 	$('.c28').html("$" +'0');	 	
				$('.e28').html("($" + Number( num ) + ")");
			
		}else{
			$('.c28').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
				$('.e28').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
			} else{
				$('.e28').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
			}
		}
	})

})
 $('.d-block .d32 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d30 input').val())+Number($('.d-block .d31 input').val())+Number($('.d-block .d29 input').val());
    $('.d-block .d28 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
			$('.e28').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
		} else{
			$('.e28').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
		}
	$('.b28 select').change(function(){
		if($('.b28 select').val() == 'no'){
		 	$('.c28').html("$" +'0');	 	
				$('.e28').html("($" + Number( num ) + ")");
			
		}else{
			$('.c28').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
				$('.e28').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
			} else{
				$('.e28').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
			}
		}
	})

})
let num_total7 = Number($('.d-block .d34 input').val())+Number($('.d-block .d35 input').val())+Number($('.d-block .d36 input').val());
$('.d-block .d33 input').val(Math.floor(num_total7));

$('.d-block .d36 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d34 input').val())+Number($('.d-block .d35 input').val());
    $('.d-block .d33 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    

    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num) > 0){
		$('.e33').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num));
	} else{
		$('.e33').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7) + ")");
	}
	$('.b33 select').change(function(){
		if($('.b33 select').val() == 'no'){
		 	$('.c33').html("$" +'0');	 	
				$('.e33').html("($" + Number( num ) + ")");
			
		}else{
			$('.c33').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num) > 0){
				$('.e33').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num));
			} else{
				$('.e33').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7) + ")");
			}
		}
	})
})
 $('.d-block .d34 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d36 input').val())+Number($('.d-block .d35 input').val());
    $('.d-block .d33 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    

    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num) > 0){
		$('.e33').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num));
	} else{
		$('.e33').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7) + ")");
	}
	$('.b33 select').change(function(){
		if($('.b33 select').val() == 'no'){
		 	$('.c33').html("$" +'0');	 	
				$('.e33').html("($" + Number( num ) + ")");
			
		}else{
			$('.c33').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num) > 0){
				$('.e33').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num));
			} else{
				$('.e33').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7) + ")");
			}
		}
	})
})
 $('.d-block .d35 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d34 input').val())+Number($('.d-block .d36 input').val());
    $('.d-block .d33 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num) > 0){
		$('.e33').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num));
	} else{
		$('.e33').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7) + ")");
	}
	$('.b33 select').change(function(){
		if($('.b33 select').val() == 'no'){
		 	$('.c33').html("$" +'0');	 	
				$('.e33').html("($" + Number( num ) + ")");
			
		}else{
			$('.c33').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num) > 0){
				$('.e33').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num));
			} else{
				$('.e33').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7) + ")");
			}
		}
	})
})

let num_total8 = Number($('.d-block .d38 input').val())+Number($('.d-block .d39 input').val())+Number($('.d-block .d40 input').val());
$('.d-block .d37 input').val(Math.floor(num_total8));

$('.d-block .d38 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d39 input').val())+Number($('.d-block .d40 input').val());
    $('.d-block .d37 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
		$('.e37').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
	} else{
		$('.e37').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
	}
	$('.b37 select').change(function(){
		if($('.b37 select').val() == 'no'){
		 	$('.c37').html("$" +'0');	 	
				$('.e37').html("($" + Number( num ) + ")");
			
		}else{
			$('.c37').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
				$('.e37').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
			} else{
				$('.e37').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
			}
		}
	})
})
$('.d-block .d39 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d38 input').val())+Number($('.d-block .d40 input').val());
    $('.d-block .d37 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
		$('.e37').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
	} else{
		$('.e37').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
	}
	$('.b37 select').change(function(){
		if($('.b37 select').val() == 'no'){
		 	$('.c37').html("$" +'0');	 	
				$('.e37').html("($" + Number( num ) + ")");
			
		}else{
			$('.c37').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
				$('.e37').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
			} else{
				$('.e37').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
			}
		}
	})
})
$('.d-block .d40 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d39 input').val())+Number($('.d-block .d38 input').val());
    $('.d-block .d37 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    

    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
		$('.e37').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
	} else{
		$('.e37').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
	}
	$('.b37 select').change(function(){
		if($('.b37 select').val() == 'no'){
		 	$('.c37').html("$" +'0');	 	
				$('.e37').html("($" + Number( num ) + ")");
			
		}else{
			$('.c37').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num) > 0){
				$('.e37').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num));
			} else{
				$('.e37').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
			}
		}
	})
})

let num_total9 = Number($('.d-block .d43 input').val())+Number($('.d-block .d42 input').val());
$('.d-block .d41 input').val(Math.floor(num_total9));

$('.d-block .d42 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d43 input').val());
    $('.d-block .d41 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    

    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
		$('.e41').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
	} else{
		$('.e41').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
	$('.b41 select').change(function(){
		if($('.b41 select').val() == 'no'){
		 	$('.c41').html("$" +'0');	 	
				$('.e41').html("($" + Number( num ) + ")");
			
		}else{
			$('.c41').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
				$('.e41').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				$('.e41').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})

})
$('.d-block .d43 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d42 input').val());
    $('.d-block .d41 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    

    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
		$('.e41').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
	} else{
		$('.e41').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
	$('.b41 select').change(function(){
		if($('.b41 select').val() == 'no'){
		 	$('.c41').html("$" +'0');	 	
				$('.e41').html("($" + Number( num ) + ")");
			
		}else{
			$('.c41').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
				$('.e41').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				$('.e41').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})

})

let num_total10 = Number($('.d-block .d46 input').val())+Number($('.d-block .d47 input').val())+Number($('.d-block .d48 input').val());
$('.d-block .d45 input').val(Math.floor(num_total10));

$('.d-block .d46 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d47 input').val())+Number($('.d-block .d48 input').val());
    $('.d-block .d45 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    


	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
			$('.e45').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
		} else{
			$('.e45').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
		}
	$('.b45 select').change(function(){
		if($('.b45 select').val() == 'no'){
		 	$('.c45').html("$" +'0');	 	
				$('.e45').html("($" + Number( num ) + ")");
			
		}else{
			$('.c45').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
				$('.e45').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
			} else{
				$('.e45').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
			}
		}
	})

})
$('.d-block .d47 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d46 input').val())+Number($('.d-block .d48 input').val());
    $('.d-block .d45 input').val(Math.floor(num));

    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
			$('.e45').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
		} else{
			$('.e45').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
		}
	$('.b45 select').change(function(){
		if($('.b45 select').val() == 'no'){
		 	$('.c45').html("$" +'0');	 	
				$('.e45').html("($" + Number( num ) + ")");
			
		}else{
			$('.c45').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
				$('.e45').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
			} else{
				$('.e45').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
			}
		}
	})

})
$('.d-block .d48 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d47 input').val())+Number($('.d-block .d46 input').val());
    $('.d-block .d45 input').val(Math.floor(num));

    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
			$('.e45').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
		} else{
			$('.e45').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
		}
	$('.b45 select').change(function(){
		if($('.b45 select').val() == 'no'){
		 	$('.c45').html("$" +'0');	 	
				$('.e45').html("($" + Number( num ) + ")");
			
		}else{
			$('.c45').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num) > 0){
				$('.e45').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num));
			} else{
				$('.e45').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
			}
		}
	})

})

let num_total11 = Number($('.d-block .d50 input').val())+Number($('.d-block .d51 input').val());
$('.d-block .d49 input').val(Math.floor(num_total11));

$('.d-block .d50 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d51 input').val());
    $('.d-block .d49 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    

	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
			$('.e49').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
		} else{
			$('.e49').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
		}
	$('.b49 select').change(function(){
		if($('.b49 select').val() == 'no'){
		 	$('.c49').html("$" +'0');	 	
				$('.e49').html("($" + Number( num ) + ")");
			
		}else{
			$('.c49').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
				$('.e49').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				$('.e49').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})

})
$('.d-block .d51 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d50 input').val());
    $('.d-block .d49 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
			$('.e49').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
		} else{
			$('.e49').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
		}
	$('.b49 select').change(function(){
		if($('.b49 select').val() == 'no'){
		 	$('.c49').html("$" +'0');	 	
				$('.e49').html("($" + Number( num ) + ")");
			
		}else{
			$('.c49').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num) > 0){
				$('.e49').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num));
			} else{
				$('.e49').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
			}
		}
	})

})

let num_total12 = Number($('.d-block .d53 input').val())+Number($('.d-block .d54 input').val())+Number($('.d-block .d55 input').val())+Number($('.d-block .d56 input').val())+Number($('.d-block .d57 input').val())+Number($('.d-block .d58 input').val())+Number($('.d-block .d59 input').val())+Number($('.d-block .d60 input').val());
$('.d-block .d52 input').val(Math.floor(num_total12));

$('.d-block .d53 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d54 input').val())+Number($('.d-block .d55 input').val())+Number($('.d-block .d56 input').val())+Number($('.d-block .d57 input').val())+Number($('.d-block .d58 input').val())+Number($('.d-block .d59 input').val())+Number($('.d-block .d60 input').val());
    $('.d-block .d52 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
			$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
		} else{
			$('.e52').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
		}
	$('.b52 select').change(function(){
		if($('.b52 select').val() == 'no'){
		 	$('.c52').html("$" +'0');	 	
				$('.e52').html("($" + Number( num ) + ")");
			
		}else{
			$('.c52').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
				$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
			} else{
				$('.e52').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
			}
		}
	})

})
$('.d-block .d54 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d53 input').val())+Number($('.d-block .d55 input').val())+Number($('.d-block .d56 input').val())+Number($('.d-block .d57 input').val())+Number($('.d-block .d58 input').val())+Number($('.d-block .d59 input').val())+Number($('.d-block .d60 input').val());
    $('.d-block .d52 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
			$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
		} else{
			$('.e52').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
		}
	$('.b52 select').change(function(){
		if($('.b52 select').val() == 'no'){
		 	$('.c52').html("$" +'0');	 	
				$('.e52').html("($" + Number( num ) + ")");
			
		}else{
			$('.c52').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
				$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
			} else{
				$('.e52').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
			}
		}
	})

})
$('.d-block .d55 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d54 input').val())+Number($('.d-block .d53 input').val())+Number($('.d-block .d56 input').val())+Number($('.d-block .d57 input').val())+Number($('.d-block .d58 input').val())+Number($('.d-block .d59 input').val())+Number($('.d-block .d60 input').val());
    $('.d-block .d52 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
			$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
		} else{
			$('.e52').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
		}
	$('.b52 select').change(function(){
		if($('.b52 select').val() == 'no'){
		 	$('.c52').html("$" +'0');	 	
				$('.e52').html("($" + Number( num ) + ")");
			
		}else{
			$('.c52').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
				$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
			} else{
				$('.e52').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
			}
		}
	})

})
$('.d-block .d56 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d54 input').val())+Number($('.d-block .d55 input').val())+Number($('.d-block .d53 input').val())+Number($('.d-block .d57 input').val())+Number($('.d-block .d58 input').val())+Number($('.d-block .d59 input').val())+Number($('.d-block .d60 input').val());
    $('.d-block .d52 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
			$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
		} else{
			$('.e52').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
		}
	$('.b52 select').change(function(){
		if($('.b52 select').val() == 'no'){
		 	$('.c52').html("$" +'0');	 	
				$('.e52').html("($" + Number( num ) + ")");
			
		}else{
			$('.c52').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
				$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
			} else{
				$('.e52').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
			}
		}
	})

})
$('.d-block .d57 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d54 input').val())+Number($('.d-block .d55 input').val())+Number($('.d-block .d56 input').val())+Number($('.d-block .d53 input').val())+Number($('.d-block .d58 input').val())+Number($('.d-block .d59 input').val())+Number($('.d-block .d60 input').val());
    $('.d-block .d52 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
			$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
		} else{
			$('.e52').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
		}
	$('.b52 select').change(function(){
		if($('.b52 select').val() == 'no'){
		 	$('.c52').html("$" +'0');	 	
				$('.e52').html("($" + Number( num ) + ")");
			
		}else{
			$('.c52').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
				$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
			} else{
				$('.e52').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
			}
		}
	})

})
$('.d-block .d58 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d54 input').val())+Number($('.d-block .d55 input').val())+Number($('.d-block .d56 input').val())+Number($('.d-block .d57 input').val())+Number($('.d-block .d53 input').val())+Number($('.d-block .d59 input').val())+Number($('.d-block .d60 input').val());
    $('.d-block .d52 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
			$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
		} else{
			$('.e52').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
		}
	$('.b52 select').change(function(){
		if($('.b52 select').val() == 'no'){
		 	$('.c52').html("$" +'0');	 	
				$('.e52').html("($" + Number( num ) + ")");
			
		}else{
			$('.c52').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
				$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
			} else{
				$('.e52').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
			}
		}
	})

})
$('.d-block .d59 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d54 input').val())+Number($('.d-block .d55 input').val())+Number($('.d-block .d56 input').val())+Number($('.d-block .d57 input').val())+Number($('.d-block .d58 input').val())+Number($('.d-block .d53 input').val())+Number($('.d-block .d60 input').val());
    $('.d-block .d52 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
			$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
		} else{
			$('.e52').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
		}
	$('.b52 select').change(function(){
		if($('.b52 select').val() == 'no'){
		 	$('.c52').html("$" +'0');	 	
				$('.e52').html("($" + Number( num ) + ")");
			
		}else{
			$('.c52').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
				$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
			} else{
				$('.e52').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
			}
		}
	})

})
$('.d-block .d60 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d54 input').val())+Number($('.d-block .d55 input').val())+Number($('.d-block .d56 input').val())+Number($('.d-block .d57 input').val())+Number($('.d-block .d58 input').val())+Number($('.d-block .d59 input').val())+Number($('.d-block .d53 input').val());
    $('.d-block .d52 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
			$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
		} else{
			$('.e52').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
		}
	$('.b52 select').change(function(){
		if($('.b52 select').val() == 'no'){
		 	$('.c52').html("$" +'0');	 	
				$('.e52').html("($" + Number( num ) + ")");
			
		}else{
			$('.c52').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num) > 0){
				$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num));
			} else{
				$('.e52').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
			}
		}
	})

})

let num_total13 = Number($('.d-block .d62 input').val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
$('.d-block .d61 input').val(Math.floor(num_total13));

$('.d-block .d62 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    

    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d63 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));

    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d64 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    

    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d65 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d66 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d67 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d68 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d69 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d70 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d71 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d72 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d73 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d74 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d75 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d76 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d77 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d78 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d79 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d80 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d81 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d82 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d83 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d84 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d85 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d86 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d87 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d88 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d62 input').val())+Number($('.d-block .d89 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})
$('.d-block .d44 input').keyup(function(){
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($(this).val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

	//$('.total_allocated_budget').html("$" + Number(Number(total) + Number($(this).val())));
	$('.total_allocated_budget').html("$" + total);
	$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
	$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
	if(Number($('.budget_input_amount').val()- total) > 0){
		$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
	}else{
		$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
	}

	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
	} else{
		$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	
})

$('.d-block .d90 input').keyup(function(){
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($(this).val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

	//$('.total_allocated_budget').html("$" + Number(Number(total) + Number($(this).val())));
	$('.total_allocated_budget').html("$" + total);
	$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
	$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
	if(Number($('.budget_input_amount').val()- total) > 0){
		$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
	}else{
		$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
	}

	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
	} else{
		$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	
})

$('.d-block .d91 input').keyup(function(){
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($(this).val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d92 input').val());

	//$('.total_allocated_budget').html("$" + Number(Number(total) + Number($(this).val())));
	$('.total_allocated_budget').html("$" + total);
	$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
	$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
	if(Number($('.budget_input_amount').val()- total) > 0){
		$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
	}else{
		$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
	}

	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
	} else{
		$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	
})

$('.d-block .d92 input').keyup(function(){
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($(this).val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val());

	//$('.total_allocated_budget').html("$" + Number(Number(total) + Number($(this).val())));
	$('.total_allocated_budget').html("$" + total);
	$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
	$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
	if(Number($('.budget_input_amount').val()- total) > 0){
		$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
	}else{
		$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
	}

	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
	} else{
		$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	
})

$('.d-block .d89 input').keyup(function(){
    let num = Number($(this).val())+Number($('.d-block .d63 input').val())+Number($('.d-block .d64 input').val())+Number($('.d-block .d65 input').val())+Number($('.d-block .d66 input').val())+Number($('.d-block .d67 input').val())+Number($('.d-block .d68 input').val())+Number($('.d-block .d69 input').val())+Number($('.d-block .d70 input').val())+Number($('.d-block .d71 input').val())+Number($('.d-block .d72 input').val())+Number($('.d-block .d73 input').val())+Number($('.d-block .d74 input').val())+Number($('.d-block .d75 input').val())+Number($('.d-block .d76 input').val())+Number($('.d-block .d77 input').val())+Number($('.d-block .d78 input').val())+Number($('.d-block .d79 input').val())+Number($('.d-block .d80 input').val())+Number($('.d-block .d81 input').val())+Number($('.d-block .d82 input').val())+Number($('.d-block .d83 input').val())+Number($('.d-block .d84 input').val())+Number($('.d-block .d85 input').val())+Number($('.d-block .d86 input').val())+Number($('.d-block .d87 input').val())+Number($('.d-block .d88 input').val())+Number($('.d-block .d62 input').val());
    $('.d-block .d61 input').val(Math.floor(num));
    
    
	let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val()) + Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

		$('.total_allocated_budget').html("$" + total);
		$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
		$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
		if(Number($('.budget_input_amount').val()- total) > 0){
			$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
		}else{
			$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
		}

		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	
    
    if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
	} else{
		$('.e61').html("($" + Number( num - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
	$('.b61 select').change(function(){
		if($('.b61 select').val() == 'no'){
		 	$('.c61').html("$" +'0');	 	
				$('.e61').html("($" + Number( num ) + ")");
			
		}else{
			$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
			if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num) > 0){
				$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num));
			} else{
				$('.e61').html("($" + Number( num- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
			}
		}
	})

})



let total = Number($('.d-block .d2 input').val()) + Number($('.d-block .d12 input').val()) + Number($('.d-block .d15 input').val()) + Number($('.d-block .d20 input').val()) + Number($('.d-block .d23 input').val()) + Number($('.d-block .d28 input').val()) + Number($('.d-block .d33 input').val()) + Number($('.d-block .d37 input').val()) + Number($('.d-block .d41 input').val())+ Number($('.d-block .d44 input').val()) + Number($('.d-block .d45 input').val()) + Number($('.d-block .d49 input').val()) + Number($('.d-block .d52 input').val()) + Number($('.d-block .d61 input').val()) + Number($('.d-block .d90 input').val()) + Number($('.d-block .d91 input').val()) + Number($('.d-block .d92 input').val());

	$('.total_allocated_budget').html("$" + total);
	$('.10_overage_for_a_splurge').html("$" + $('.budget_input_amount').val()/10);
	$('.available_budget_spend').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10));
	if(Number($('.budget_input_amount').val()- total) > 0){
		$('.available_actual_spend').html("$" + Number($('.budget_input_amount').val()- total));
	}else{
		$('.available_actual_spend').html("($" + Number(total - $('.budget_input_amount').val()) + ")");
	}

	if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
		$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
	} else{
		$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
	}
	
$('.b2 select').change(function(){
	if($('.b2 select').val() == 'no'){
	 	$('.c2').html("$" +'0');	 	
			$('.e2').html("($" + Number( num_total1 ) + ")");
		
	}else{
		$('.c2').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1) > 0){
			$('.e2').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50 - num_total1));
		} else{
			$('.e2').html("($" + Number( num_total1 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50) + ")");
		}
	}
})
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num_total2) > 0){
		$('.e12').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num_total2));
	} else{
		$('.e12').html("($" + Number( num_total2 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6) + ")");
	}
$('.b12 select').change(function(){
	if($('.b12 select').val() == 'no'){
	 	$('.c12').html("$" +'0');	 	
			$('.e12').html("($" + Number( num_total2 ) + ")");
		
	}else{
		$('.c12').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num_total2) > 0){
			$('.e12').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num_total2));
		} else{
			$('.e12').html("($" + Number( num_total2- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6) + ")");
		}
	}
})
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total3) > 0){
		$('.e15').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total3));
	} else{
		$('.e15').html("($" + Number( num_total3 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
	}
$('.b15 select').change(function(){
	if($('.b15 select').val() == 'no'){
	 	$('.c15').html("$" +'0');	 	
			$('.e15').html("($" + Number( num_total3 ) + ")");
		
	}else{
		$('.c15').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total3) > 0){
			$('.e15').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total3));
		} else{
			$('.e15').html("($" + Number( num_total3- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
		}
	}
})

if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total4) > 0){
		$('.e20').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total4));
	} else{
		$('.e20').html("($" + Number( num_total4 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
$('.b20 select').change(function(){
	if($('.b20 select').val() == 'no'){
	 	$('.c20').html("$" +'0');	 	
			$('.e20').html("($" + Number( num_total4 ) + ")");
		
	}else{
		$('.c20').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total4) > 0){
			$('.e20').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total4));
		} else{
			$('.e20').html("($" + Number( num_total4- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
		}
	}
})

if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total5) > 0){
		$('.e23').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total5));
	} else{
		$('.e23').html("($" + Number( num_total5 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
$('.b23 select').change(function(){
	if($('.b23 select').val() == 'no'){
	 	$('.c23').html("$" +'0');	 	
			$('.e23').html("($" + Number( num_total5 ) + ")");
		
	}else{
		$('.c23').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total5) > 0){
			$('.e23').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total5));
		} else{
			$('.e23').html("($" + Number( num_total5- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
		}
	}
})

if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total6) > 0){
		$('.e28').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total6));
	} else{
		$('.e28').html("($" + Number( num_total6 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
	}
$('.b28 select').change(function(){
	if($('.b28 select').val() == 'no'){
	 	$('.c28').html("$" +'0');	 	
			$('.e28').html("($" + Number( num_total6 ) + ")");
		
	}else{
		$('.c28').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total6) > 0){
			$('.e28').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total6));
		} else{
			$('.e28').html("($" + Number( num_total6- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
		}
	}
})

if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num_total7) > 0){
		$('.e33').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num_total7));
	} else{
		$('.e33').html("($" + Number( num_total7 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7) + ")");
	}
$('.b33 select').change(function(){
	if($('.b33 select').val() == 'no'){
	 	$('.c33').html("$" +'0');	 	
			$('.e33').html("($" + Number( num_total7 ) + ")");
		
	}else{
		$('.c33').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num_total7) > 0){
			$('.e33').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num_total7));
		} else{
			$('.e33').html("($" + Number( num_total7- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7) + ")");
		}
	}
})
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total8) > 0){
		$('.e37').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total8));
	} else{
		$('.e37').html("($" + Number( num_total8 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
	}
$('.b37 select').change(function(){
	if($('.b37 select').val() == 'no'){
	 	$('.c37').html("$" +'0');	 	
			$('.e37').html("($" + Number( num_total8 ) + ")");
		
	}else{
		$('.c37').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total8) > 0){
			$('.e37').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total8));
		} else{
			$('.e37').html("($" + Number( num_total8- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
		}
	}
})
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total9) > 0){
		$('.e41').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total9));
	} else{
		$('.e41').html("($" + Number( num_total9 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
$('.b41 select').change(function(){
	if($('.b41 select').val() == 'no'){
	 	$('.c41').html("$" +'0');	 	
			$('.e41').html("($" + Number( num_total9 ) + ")");
		
	}else{
		$('.c41').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total9) > 0){
			$('.e41').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total9));
		} else{
			$('.e41').html("($" + Number( num_total9- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
		}
	}
})

if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total10) > 0){
		$('.e45').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total10));
	} else{
		$('.e45').html("($" + Number( num_total10 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
	}
$('.b45 select').change(function(){
	if($('.b45 select').val() == 'no'){
	 	$('.c45').html("$" +'0');	 	
			$('.e45').html("($" + Number( num_total10 ) + ")");
		
	}else{
		$('.c45').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total10) > 0){
			$('.e45').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total10));
		} else{
			$('.e45').html("($" + Number( num_total10- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
		}
	}
})

if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total11) > 0){
		$('.e49').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total11));
	} else{
		$('.e49').html("($" + Number( num_total11 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
	}
$('.b49 select').change(function(){
	if($('.b49 select').val() == 'no'){
	 	$('.c49').html("$" +'0');	 	
			$('.e49').html("($" + Number( num_total11 ) + ")");
		
	}else{
		$('.c49').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total11) > 0){
			$('.e49').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total11));
		} else{
			$('.e49').html("($" + Number( num_total11- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
		}
	}
})

if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num_total12) > 0){
		$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num_total12));
	} else{
		$('.e52').html("($" + Number( num_total12 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
	}
$('.b52 select').change(function(){
	if($('.b52 select').val() == 'no'){
	 	$('.c52').html("$" +'0');	 	
			$('.e52').html("($" + Number( num_total12 ) + ")");
		
	}else{
		$('.c52').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num_total12) > 0){
			$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num_total12));
		} else{
			$('.e52').html("($" + Number( num_total12- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
		}
	}
})

if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num_total13) > 0){
		$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num_total13));
	} else{
		$('.e61').html("($" + Number( num_total13 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
	}
$('.b61 select').change(function(){
	if($('.b61 select').val() == 'no'){
	 	$('.c61').html("$" +'0');	 	
			$('.e61').html("($" + Number( num_total13 ) + ")");
		
	}else{
		$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
		if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num_total13) > 0){
			$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num_total13));
		} else{
			$('.e61').html("($" + Number( num_total13- Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
		}
	}
})


$('.c2').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/50);
$('.c12').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6);
$('.c15').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4);
$('.c20').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
$('.c23').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
$('.c28').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5);
$('.c33').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7);
$('.c37').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5);
$('.c41').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
$('.c44').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
$('.c45').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4);
$('.c49').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
$('.c52').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42);
$('.c61').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12);
$('.c90').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2);
$('.c91').html("$" + Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1);





if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num_total2) > 0){
	$('.e12').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6 - num_total2));
} else{
	$('.e12').html("($" + Number( num_total2 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*6) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total3) > 0){
	$('.e15').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total3));
} else{
	$('.e15').html("($" + Number( num_total3 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total4) > 0){
	$('.e20').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total4));
} else{
	$('.e20').html("($" + Number( num_total4 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total5) > 0){
	$('.e23').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total5));
} else{
	$('.e23').html("($" + Number( num_total5 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total6) > 0){
	$('.e28').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total6));
} else{
	$('.e28').html("($" + Number( num_total6 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num_total7) > 0){
	$('.e33').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7 - num_total7));
} else{
	$('.e33').html("($" + Number( num_total7 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*7) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total8) > 0){
	$('.e37').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5 - num_total8));
} else{
	$('.e37').html("($" + Number( num_total8 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*5) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total9) > 0){
	$('.e41').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total9));
} else{
	$('.e41').html("($" + Number( num_total9 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - $('.d44 input').val()) > 0){
	$('.e44').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - $('.d44 input').val()));
} else{
	$('.e44').html("($" + Number( $('.d44 input').val() - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total10) > 0){
	$('.e45').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4 - num_total10));
} else{
	$('.e45').html("($" + Number( num_total10 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*4) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - num_total11) > 0){
	$('.e49').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) - num_total11);
} else{
	$('.e49').html("($" + Number( num_total11 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42 - num_total12) > 0){
	$('.e52').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) - num_total12);
} else{
	$('.e52').html("($" + Number( num_total12 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*42) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num_total13) > 0){
	$('.e61').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12 - num_total13));
} else{
	$('.e61').html("($" + Number( num_total13 - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*12) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - $('.d90 input').val()) > 0){
	$('.e90').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2 - $('.d90 input').val()));
} else{
	$('.e90').html("($" + Number( $('.d90 input').val() - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*2) + ")");
}
if (Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1 - $('.d91 input').val()) > 0){
	$('.e91').html("$" + Number(Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1 - $('.d91 input').val()));
} else{
	$('.e91').html("($" + Number( $('.d91 input').val() - Number($('.budget_input_amount').val()-$('.budget_input_amount').val()/10)/100*1) + ")");
}
window.setTimeout(()=>{
		$('.gue5').html(Number($('.even .column-invitedrehearsaldinner').html()));
		$('.gue6').html('0');  
		$('.gue7').html('0');  
		$('#table_1 tbody tr .column-ranking').html('<select><option value="A">A</option><option value="B">B</option><option value="C">C</option></select>');

		var sum_1 = 0;
		$('#table_1 tbody tr .column-invitedwedding').each(function(){
				sum_1 += Number($(this).html());
			
		})
		var sum_2 = 0;
		$('#table_1 tbody tr .column-invitedrehearsaldinner').each(function(){
				sum_2 += Number($(this).html());
			
		})
		var sum_3 = 0;
		$('#table_1 tbody tr .column-invitedbrunch').each(function(){
				sum_3 += Number($(this).html());
			
		})

		var sum_4 = 0;
		var sum_5 = 0;
		var sum_6 = 0;

		$('.column-ranking select').each(function(){
			if($(this).val() == 'A'){
				sum_4 += Number($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
				//console.log($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
			}
		})
		$('.column-ranking select').each(function(){
			if($(this).val() == 'B'){
				sum_5 += Number($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
				//console.log($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
			}
		})
		$('.column-ranking select').each(function(){
			if($(this).val() == 'C'){
				sum_6 += Number($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
				//console.log($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
			}
		})

			$('.gue4').html(sum_4);
			$('.gue5').html(sum_5);
			$('.gue6').html(sum_6);
		// $('#table_1 tbody tr .column-ranking select').change(function(){
		// })

		// function calculate()
		// {
		// 	var data = {}
		// 	$('#table_1 tbody tr .column-ranking select').each(function(){
		// 		if(data[$(this).val()] == undefined)
		// 		{
		// 			data[$(this).val()] = 0
		//  		}

		//  		data[$(this).val()] += Number($(this).parent().parent().find('.column-invitedwedding').eq(0).html())
		// 	})


		// }

		var total_f = 0;
		$('#table_1 tbody tr .column-invitedwedding').each(function(){
			total_f += Number($(this).html());
			console.log(Number($(this).html()));
		})

		$('.gue7').html(total_f);

		$('#table_1 tbody tr .column-ranking select').change(function(){
			var data = {}
			$('#table_1 tbody tr .column-ranking select').each(function(){
				if(data[$(this).val()] == undefined)
				{
					data[$(this).val()] = 0
		 		}
		 		data[$(this).val()] += Number($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
			})
			if(!data.A){
				$('.gue4').html('0');
			}else{
				$('.gue4').html(data.A);
			}
			if(!data.B){
				$('.gue5').html('0');
			}else{
				$('.gue5').html(data.B);
			}
			if(!data.C){
				$('.gue6').html('0');
			}else{
				$('.gue6').html(data.C);
			}
			
		})

		$('.gue1').html(sum_1);
		$('.gue2').html(sum_2);
		$('.gue3').html(sum_3);

		$('.column-ranking select').change(function(){
			$.ajax({
				url:'/madaboutweddings.com/wp-admin/admin-ajax.php',
				data:{action:'rank', data1: $(this).val(), data2: $(this).parent().parent().find('.column-lastname').eq(0).html()},
				type: 'post',
				success:function(res){
				}
			})
		})


		function get_data(){
			var send = [];
			$('#table_1').find('tbody tr .column-lastname').each(function(){
				
				send.push($(this).html())
				
			})

			console.log(send);
			$.ajax({
				url:'/madaboutweddings.com/wp-admin/admin-ajax.php',
				data:{action:'get_data', data: send},
				type: 'post',
				success:function(res){
					res = JSON.parse(res);
					$('#table_1').find('tbody tr .column-lastname').each(function(){
						if(res[$(this).html()])
						{
							$(this).parents('tr').find('.column-ranking select').eq(0).val(res[$(this).html()]);
						}
					
					})
					var sum_4 = 0;
					var sum_5 = 0;
					var sum_6 = 0;

					$('.column-ranking select').each(function(){
						if($(this).val() == 'A'){
							sum_4 += Number($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
							//console.log($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
						}
					})
					$('.column-ranking select').each(function(){
						if($(this).val() == 'B'){
							sum_5 += Number($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
							//console.log($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
						}
					})
					$('.column-ranking select').each(function(){
						if($(this).val() == 'C'){
							sum_6 += Number($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
							//console.log($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
						}
					})

						$('.gue4').html(sum_4);
						$('.gue5').html(sum_5);
						$('.gue6').html(sum_6);

							}
						})
					}

		get_data();


		var sum_4 = 0;
		var sum_5 = 0;
		var sum_6 = 0;

		$('.column-ranking select').each(function(){
			if($(this).val() == 'A'){
				sum_4 += Number($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
				//console.log($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
			}
		})
		$('.column-ranking select').each(function(){
			if($(this).val() == 'B'){
				sum_5 += Number($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
				//console.log($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
			}
		})
		$('.column-ranking select').each(function(){
			if($(this).val() == 'C'){
				sum_6 += Number($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
				//console.log($(this).parent().parent().find('.column-invitedwedding').eq(0).html());
			}
		})

			$('.gue4').html(sum_4);
			$('.gue5').html(sum_5);
			$('.gue6').html(sum_6);
},2111)

function loadlocalstorage()
{
	var str = window.localStorage.getItem('data');

	var data = {}
	if(str)
	{
		data = JSON.parse(str)
	}
	$('.d-block input').each(function(){
		for(item in data)
		{
			$('.' + item + ' input').val(data[item])
		}
	})
}

loadlocalstorage();

function savelocalstorage()
{
	var data = {}
	$('.d-block input').each(function(){
		// if(!$(this).attr('disabled'))
		// {
			data[$(this).parent().attr('class').split(' ')[0]] = $(this).val();
		//}
	})

	console.log(data)

	window.localStorage.setItem("data",JSON.stringify(data));
}
$('.btn-save').click(function(){
	savelocalstorage();
})


$(function() {
jQuery("#edit-profile").validate({
  errorElement:"span",
  rules:{
	fname: "required",
	lname: "required",
	phone: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages:{
	fname:{
      required: "Please enter your first name."
    },
	lname:{
      required: "Please enter your last name."
    },
	phone:{
      required: "Please enter your phone number."
    },
    email:{
      required: "Please enter your email address.",
      email: "Please enter a valid email address.",
    }
  },
  submitHandler: function(form) {
      form.submit();
  }
});

});