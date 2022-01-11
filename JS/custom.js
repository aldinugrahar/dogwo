$(document).ready(function () {
    $(".faqus1").click(function () {
        $(".faans1").slideToggle();
        $(".faq-angle1").toggleClass('rotate');
    });
      $(".faqus2").click(function () {
        $(".faans2").slideToggle();
        $(".faq-angle2").toggleClass('rotate');
    });
      $(".faqus3").click(function () {
        $(".faans3").slideToggle();
        $(".faq-angle3").toggleClass('rotate');
    });
      $(".faqus4").click(function () {
        $(".faans4").slideToggle();
        $(".faq-angle4").toggleClass('rotate');
    });
      $(".faqus5").click(function () {
        $(".faans5").slideToggle();
        $(".faq-angle5").toggleClass('rotate');
    });
      $(".faqus6").click(function () {
        $(".faans6").slideToggle();
        $(".faq-angle6").toggleClass('rotate');
    });
    
    
    
    
    
    $('.main-slider').slick({
        dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
        arrows: true,
        
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
           arrows: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});
    
    
    
    $(".navbar-toggler").on("click",function(){
         $(".mobilemenu").toggleClass("open"); 
    });
    
     $(".cross-icon").on("click",function(){
         $(".mobilemenu").toggleClass("open"); 
    });
    
    
    
    
    
});
