$(document).ready(function() {
	$("#inspired-drop").click(function() {
		if($(".inspired-container").is(':visible')) {
			$(".inspired-container").slideUp();
			$(".inspired-mood").css("height", "100");
		}
		else {
			$(".inspired-container").slideDown();
			$(".inspired-mood").css("height", "620");
		}
	});
	$("#curious-drop").click(function() {
		if($(".curious-container").is(':visible')) {
			$(".curious-container").slideUp();
			$(".curious-mood").css("height", "100");
		}
		else {
			$(".curious-container").slideDown();
			$(".curious-mood").css("height", "620");
		}
	});
	$("#sad-drop").click(function() {
		if($(".sad-container").is(':visible')) {
			$(".sad-container").slideUp();
			$(".sad-mood").css("height", "100");
		}
		else {
			$(".sad-container").slideDown();
			$(".sad-mood").css("height", "620");
		}
	});

	$(".surprise-item").hover(function() {
			$(this).css("opacity", "0.7");
		},
		function() {
			$(this).css("opacity", "1");
		}
	);


	var topbarposition = $(".topbar-container").offset().top;
	$(window).scroll(function() {
		var currentposition = $(window).scrollTop();
		if (currentposition < topbarposition) {
			$(".topbar-container").removeClass('topbar-fixed');
		}
		else {
			$(".topbar-container").addClass('topbar-fixed');
		}
	});


	$("#carousel-next1").click(function() {
	  var currentmargin1 = (parseInt($('#carousel1').css('margin-left').replace("px", "")));
	  if (currentmargin1 == -1120) {
	    return false;
	  }
	  else {
	    $("#carousel1").css('margin-left', (currentmargin1 - 560));
	  }
	});

	
	$("#carousel-prev1").click(function() {
	  var currentmargin1 = (parseInt($('#carousel1').css('margin-left').replace("px", "")));
	  if (currentmargin1 == 0 ){
	    return false;
	  }
	  else {
	    $("#carousel1").css('margin-left', (currentmargin1 + 560));
	  }
	});

	$("#carousel-next2").click(function() {
	  var currentmargin2 = (parseInt($('#carousel2').css('margin-left').replace("px", "")));
	  if (currentmargin2 == -1120) {
	    return false;
	  }
	  else {
	    $("#carousel2").css('margin-left', (currentmargin2 - 560));
	  }
	});

	
	$("#carousel-prev2").click(function() {
	  var currentmargin2 = (parseInt($('#carousel2').css('margin-left').replace("px", "")));
	  if (currentmargin2 == 0 ){
	    return false;
	  }
	  else {
	    $("#carousel2").css('margin-left', (currentmargin2 + 560));
	  }
	});


	$("#carousel-next3").click(function() {
	  var currentmargin3 = (parseInt($('#carousel3').css('margin-left').replace("px", "")));
	  if (currentmargin3 == -1120) {
	    return false;
	  }
	  else {
	    $("#carousel3").css('margin-left', (currentmargin3 - 560));
	  }
	});

	
	$("#carousel-prev3").click(function() {
	  var currentmargin = (parseInt($('#carousel3').css('margin-left').replace("px", "")));
	  if (currentmargin == 0 ){
	    return false;
	  }
	  else {
	    $("#carousel3").css('margin-left', (currentmargin + 560));
	  }
	});
});

