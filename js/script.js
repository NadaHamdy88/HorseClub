$(document).ready(function(){
    // Show Navbar when Click on icon
$('i.icon').click(function(){
    $('.nav-list').slideToggle()
});

//dropdown
$('.drop').click(function(){
    $('.dropdown').slideToggle()
});

//popup video in about-video section
$('.pop').magnificPopup({
    type: 'iframe'
});
 
//owl carousel >> booking section
$('.booking-owl-carousel').owlCarousel({
    items:1,
    autoplay:true,
    loop:true,
    dots: true
});

//owl carousel >> gallery section
$('.gallery-owl-carousel').owlCarousel({
    items:6,
    loop:true,
    dots: true,
    autoplay:true,    
        responsive: {
        0: {
            items: 1
        },
        480: {
             items: 1,
         },
         768: {
            items: 2,
         },
         900: {
           items: 6,
       }

    }
});

});