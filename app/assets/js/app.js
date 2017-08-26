
$(document).ready(function(){
    
    new WOW().init();
    
    //animate iphone on the hero page
    var waypoint = new Waypoint({
      element: $('.hero-animate'),
      handler: function(direction) {
        $('.hero-animate').animate({opacity: 1}, 1000).addClass('animated slideInUp');
      }, offset: 200
    });

    
    $('.iphone-btn').delay(1200).animate({
        bottom: '+=-3px',
    },100);
    $('.iphone-btn').delay(200).animate({
        top: '+=-3px',
    },300);
    $('.iphone-on').delay(2000).animate({opacity:1},500);
 
    
});