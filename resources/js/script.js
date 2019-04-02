$(document).ready(function() {
   
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
           $('nav').addClass('sticky'); 
        } else {
           $('nav').removeClass('sticky'); 
        }
    }, {
            offset: '60px;'
    });
    
    
    $(".js--scroll-to-plans").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1000);
    });
    
    $(".js--scroll-to-start").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000);
    });
    
    $('.js--wp1').waypoint(function(direction){
        $('.js-wp1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
})
                
                
                