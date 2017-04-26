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


	$("#carousel-next").click(function() {
	  var currentmargin = (parseInt($('#carousel').css('margin-left').replace("px", "")));
	  if (currentmargin == -1120) {
	    return false;
	  }
	  else {
	    $("#carousel").css('margin-left', (currentmargin - 560));
	  }
	});

	
	$("#carousel-prev").click(function() {
	  var currentmargin = (parseInt($('#carousel').css('margin-left').replace("px", "")));
	  if (currentmargin == 0 ){
	    return false;
	  }
	  else {
	    $("#carousel").css('margin-left', (currentmargin + 560));
	  }
	});
});

