// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

//show search on mobile
$( ".header__mob-content .main-nav__search" ).click(function() {
  $( "#search-mobile" ).toggle( "slow", function() {
    // Animation complete.
  });
});
