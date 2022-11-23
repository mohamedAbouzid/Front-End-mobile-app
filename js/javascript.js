// start smooth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')&& 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
//end smooth scroll
//customize scroll navbar
/*$(document).scroll('.navbar', function(){
    $('.navbar').css({
        backgroundColor:'#535353',
        padding: '0px',
        transition: "all .5s ease-in-out",
        opacity: 0.9
    });
});*/
//scroll reveal
window.sr = ScrollReveal();
/*sr.reveal(, {
    distance: "200px",
    origin: "bottom",
    duration: 1000
});
sr.reveal('.navbar', {
    
    origin: "bottom",
    duration: 1000
});*/
 $(window).scroll(function(){
    if ( $(window).scrollTop() > 50){
        $('.navbar').css({
        backgroundColor:'#535353',
        padding: '0px',
        transition: "all .5s ease-in-out",
        opacity: 0.9
    });
        
    }
    else {
        $('.navbar').css({
        backgroundColor:'transparent',
        padding: '10px',
        transition: "all .5s ease-in-out",
        opacity: 1
    });
        
    }
});