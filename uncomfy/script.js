/*(function() {
  
  var slideContainer = $('.slide-container');
  
  slideContainer.slick();
  
  $('.clash-card__image img').hide();
  $('.slick-active').find('.clash-card img').fadeIn(200);
  
  // On before slide change
  slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-active').find('.clash-card img').fadeOut(1000);
  });
  
  // On after slide change
  slideContainer.on('afterChange', function(event, slick, currentSlide) {
    $('.slick-active').find('.clash-card img').fadeIn(200);
  });
  
})();*/
(function() {$(document).ready(function(){

  var slideContainer = $('.cards');
  
  function buildSlide(slide){
    var card=$("<article class='card'>");
    var header=$("<header>");
    var h2=$("<h2>");
    h2.text(slide.quote);
    header.append(h2);
    card.append(header);
    var footer=$("<footer>");
    footer.text(slide.desc);
    card.append(footer);
    slideContainer.append(card);
  }

  for(var i in slides){
    buildSlide(slides[i]);
  }


  slideContainer.slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  });



  slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    console.log(currentSlide,nextSlide);
    $("body").removeClass("bg"+(1+currentSlide%6));
    $("body").addClass("bg"+(1+nextSlide%6));
    $('.slick-active').find('.card').fadeOut(1000);
  });

  slideContainer.on('afterChange', function(event, slick, currentSlide) {
    $('.slick-active').find('.card').fadeIn(1000);
  });

 

});})();


