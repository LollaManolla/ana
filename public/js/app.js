// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//$(document).foundation();

//show search on mobile
/*
$( ".header__mob-content .main-nav__search" ).click(function() {
  $( "#search-mobile" ).toggle( "slow", function() {
    // Animation complete.
  });
});*/


//rtl owl carousel
$(document).ready(function() {
 var $b3thumbsSlider = $('.b-scroll-3thumbs__list');
 if ($b3thumbsSlider.length > 0) {
   if ($('html').attr("dir") === "rtl") {
     $('.item', $b3thumbsSlider).each(function(i, o) {
       var $o = $(o);
       $($o.parent()).prepend($o);
     });
     var owlAfterInit = function(sld) {
       var owlB3thumbInterval0 = setInterval(function() {
         if ($(sld).data('owlCarousel') !== 'undefined') {
           $('.owl-wrapper-outer', $b3thumbsSlider).css("direction", "ltr");
           $('.owl-wrapper-outer .owl-wrapper', $b3thumbsSlider).css("direction", "rtl");
           $(sld).data('owlCarousel').jumpTo(1000);
           clearInterval(owlB3thumbInterval0);
         }
       }, 100);
     };
   }
   else {
     owlAfterInit = function(sld) {
     };
   }
   $b3thumbsSlider.owlCarousel({
     items: 3,
     navigation: true,
					navigationText: ["&nbsp;","&nbsp;"],
     pagination: false,
     itemsDesktop: false,
     itemsDesktopSmall: false,
     itemsTablet: [600, 2],
     itemsTabletSmall: false,
     itemsMobile: [479, 1],
     itemsCustom: false,
     addClassActive: true,
     afterInit: owlAfterInit,
     afterMove: function(s) {
     }
   });
 }
});

