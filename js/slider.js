$(document).ready(function(){
  $('.section3-slider-window').slick({
  
  });
 
$('.straps-cards-block').slick({
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  accessibility: true,
  centerMode: true
  });
// ----------CARD-SLIDER--------------

 $('.watch-block-slider-window').slick({
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  accessibility: true,
  centerMode: true,
  
  appendArrows: true
 }); 

 

// -----CARD---FOOTER-SLIDER--------

// footer-slider-card
$('.footer-slider-block .container').slick({
 slidesToShow: 3

 
  });
 });