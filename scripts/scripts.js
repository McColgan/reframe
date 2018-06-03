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
  
  
  //Parallax 
  function parallax(){
    var wScroll = $(window).scrollTop();
    $('.showcase-outer').css('top',(wScroll * 0.04)+'em');
    $('.frame').css('top',(wScroll * 0.02)+'em');
    $('.hand').css('top',(wScroll * 0.03)+'em');
  
    // Our-approach fade-ins
    if(wScroll > $('.our-approach').offset().top - ($(window).height() / 1.3)){
      $('.our-approach-header').addClass('is-showing');
      $('.our-approach-h1').addClass('is-showing');
      $('.our-approach-p').addClass('is-showing');
    };
     // About-us fade-ins
    if(wScroll > $('.about-us').offset().top - ($(window).height() / 1.3)){
      $('.about-us-h1').addClass('is-showing');
      $('.box-item').addClass('is-showing');
    };
     // Leadership fade-ins
    if(wScroll > $('.leadership').offset().top - ($(window).height() / 1.3)){
      $('.section-h1').addClass('is-showing');
      $('.leadership-container').addClass('is-showing');
    };
     // Disc fade-ins
    if(wScroll > $('.disc').offset().top - ($(window).height() / 1.3)){
      $('.disc-header').addClass('is-showing');
      $('.disc-p1').addClass('is-showing');
      $('.disc-flexbox').addClass('is-showing');
      $('.disc-flexbox-2').addClass('is-showing');
    };
     // Sales-management fade-ins
    if(wScroll > $('.sales-management').offset().top - ($(window).height() / 1.3)){
      $('.sales-h1').addClass('is-showing');
      $('.sales-p1').addClass('is-showing');
    };
    if(wScroll > $('.sales-flexbox').offset().top - ($(window).height() / 1.2)){
      $('.sales-h1').addClass('is-showing');
      $('.sales-p1').addClass('is-showing');
      $('.sales-box').each(function(i){
        setTimeout(function(){
            $('.sales-box').eq(i).addClass('is-showing');
        }, 250 * (i+1));
        });
    };
     // mentoring fade-ins
    if(wScroll > $('.mentoring').offset().top - ($(window).height() / 1.1)){
      $('.mentoring-h1').addClass('is-showing');
      $('.mentoring-p1').addClass('is-showing');
      $('.mentoring-box').each(function(i){
        setTimeout(function(){
            $('.mentoring-box').eq(i).addClass('is-showing');
        }, 250 * (i+1));
        });
    };
     // Estate-agency fade-ins
    if(wScroll > $('.estate-agency').offset().top - ($(window).height() / 1.3)){
      $('.estate-outer1 h1').addClass('is-showing');
      $('.estate-h1').addClass('is-showing');
      $('.estate-img').addClass('is-showing');
    };
    if(wScroll > $('.estate-section2').offset().top - ($(window).height() / 1.3)){
      $('.estate-section2 video').addClass('is-showing');
      $('.estate2-h1').addClass('is-showing');
      $('.estate-outer2 p').addClass('is-showing');
    };

    if(wScroll > $('.estate-section1').offset().top - $(window).height()){
      $('.estate-section1-bg').css('top',(wScroll * 0.2 )+'px');
    };
    if(wScroll > $('.estate-section2').offset().top - $(window).height()){
      $('.estate-section2-bg').css('top',(wScroll * 0.2 )+'px');
    }
  }
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
    
    $(".frame").css("opacity", 1 - $(window).scrollTop() / 400);
  }
  // Scroll Functions
  $(window).scroll(function(){
      parallax();
      linkSwitching();
      fadeOut();
  });
  // Modal Variables
  var modal1 = document.getElementById('kingsley-modal');
  var modal2 = document.getElementById('nicholas-modal');
  var btn1 = document.getElementById('kingsleyBio');
  var btn2 = document.getElementById('nicholasBio');
  var close1 = document.getElementsByClassName("close1")[0];
  var close2 = document.getElementsByClassName("close2")[0];
  // Modal Functions
  btn1.onclick = function(){
    modal1.style.display = "block";
  };
  btn2.onclick = function(){
    modal2.style.display = "block";
  };
  close1.onclick = function(){
    modal1.style.display = "none";
  };
  close2.onclick = function(){
    modal2.style.display = "none";
  };
  window.onclick =  function(event){
    if (event.target == modal1){
      modal1.style.display = "none";

    } else if (event.target == modal2){
      modal2.style.display = "none";
    }
  };
});