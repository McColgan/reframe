$(document).ready(function(){
  // Smooth Scrolling
  var scrollLink = $('.scroll');
  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - $('.header-container').outerHeight()
    }, 1500);
  });
  // Nav-Icon Animation
  $('#nav-icon').click(function(){
    $('.site-nav').toggleClass('site-nav--open', 400);
    $(this).toggleClass('open');
  });
  
  
  // Parallax 
  function parallax(){
    var wScroll = $(window).scrollTop();
    $('.showcase-outer').css('top',(wScroll * 0.04)+'em');
    $('.reframe-logo').css('top',(wScroll * 0.02)+'em');
    $('.pointing-hand').css('top',(wScroll * 0.006)+'em');
  
    // Our-approach fade-ins
   // if(wScroll > $('.our-approach').offset().top - ($(window).height() / 1.3)){
   //   $('.our-approach-header').addClass('is-showing');
   //   $('.our-approach-h1').addClass('is-showing');
   //   $('.our-approach-p').addClass('is-showing');
   // };
     // About-us fade-ins
   // if(wScroll > $('.about-us').offset().top - ($(window).height() / 1.3)){
   //   $('.about-us-h1').addClass('is-showing');
   //   $('.box-item').addClass('is-showing');
   // };
     // Leadership fade-ins
    //if(wScroll > $('.leadership').offset().top - ($(window).height() / 1.3)){
      //$('.section-h1').addClass('is-showing');
      //$('.leadership-container').addClass('is-showing');
    //};
     // Disc fade-ins
    //if(wScroll > $('.disc').offset().top - ($(window).height() / 1.3)){
      //$('.disc-header').addClass('is-showing');
      //$('.disc-p1').addClass('is-showing');
      //$('.disc-flexbox').addClass('is-showing');
      //$('.disc-flexbox-2').addClass('is-showing');
    //};
     // Sales-management fade-ins
    //if(wScroll > $('.sales-management').offset().top - ($(window).height() / 1.3)){
      //$('.sales-h1').addClass('is-showing');
      //$('.sales-p1').addClass('is-showing');
    //};
    //if(wScroll > $('.sales-flexbox').offset().top - ($(window).height() / 1.2)){
      //$('.sales-h1').addClass('is-showing');
      //$('.sales-p1').addClass('is-showing');
      //$('.sales-box').each(function(i){
        //setTimeout(function(){
            //$('.sales-box').eq(i).addClass('is-showing');
        //}, 250 * (i+1));
        //});
    };
    
  // Link Switching
  function linkSwitching(){
    var scrollBarLocation = $(this).scrollTop();
    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top -140;
      if (sectionOffset <= scrollBarLocation){
        $(this).parent().addClass('activelink');
        $(this).parent().siblings().removeClass('activelink');
      }
    });
  }
  // Element Fade Outs
  function fadeOut(){
    
    $(".reframe-logo").css("opacity", 1 - $(window).scrollTop() / 400);
  }
  // Scroll Functions
  $(window).scroll(function(){
      parallax();
      linkSwitching();
      fadeOut();
  });
  
});