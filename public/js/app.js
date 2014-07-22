// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

//show search on mobile
$( ".header__mob-content .main-nav__search" ).click(function() {
  $( "#search-mobile" ).toggle( "slow", function() {
    // Animation complete.
  });
});


//start owl carousel
$(document).ready(function() {
	$(".b-scroll-3thumbs__list").owlCarousel({
		items : 3,
		itemsDesktop: [1199,3],
		itemsMobile : [479,1],		
		navigation: true,
		navigationText: ["&nbsp;","&nbsp;"],
		pagination: false

	});
});

$(document).ready(function() {
	$(".b-teaser__products-bottom--h .products-bottom__list").owlCarousel({
		items : 3,
		itemsDesktop: [1199,3],
		itemsMobile : [479,1],
		navigation: true,
		navigationText: ["&nbsp;","&nbsp;"],
		pagination: false

	});
});
