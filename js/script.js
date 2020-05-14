$(document).ready(function() {
    $('.big_slider_items').slick({
        nextArrow: '.arrow_next_big',
        prevArrow: '.arrow_prev_big',
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
      
    });
});

$(document).ready(function() {
    $('.slide_articles').slick({
        nextArrow: '.arrow_next_articles',
        prevArrow: '.arrow_prev_articles',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
      
    });
});


