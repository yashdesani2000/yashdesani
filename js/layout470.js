/*
JS/jQUERY FOR LAYOUT 470
Steve @ Build Your Firm
4/23/2019
*/


// I. PARALLAX BACKGROUND SCROLL
$(function() {
  function setParallax() {
    var scroll = $(window).scrollTop(); // top of the viewport
    $('.parallax-bg').each(function() {
      var theElement = $(this);
      var elementTop = theElement.offset().top;
      var elementBottom = theElement.offset().top + theElement.outerHeight();
      var viewportBottom = scroll + $(window).innerHeight();
      if ((viewportBottom > elementTop) && (scroll < elementBottom)){
        var yScroll = .2*(scroll - elementTop) + "px";
        theElement.css({'background-position':'50% ' + yScroll});
      }
    });
  }

  $(window).on('scroll', function () {
    setParallax();
  }).scroll();
});


// II. FIXED NAVBAR ON SCROLL
$(function() {
  var navpos = $('#header-logo').offset();
  // 1. function to set fixed nav
  function fixNav() {
    if ($(window).scrollTop() > navpos.top) {
      $('#header-logo').addClass('fixed-top');
      var $headerHeight = $('#header-logo').outerHeight() + "px";
      $('header').css({'paddingBottom': $headerHeight});
    } else {
      $('#header-logo').removeClass('fixed-top');
      $('header').css({'paddingBottom': 0});
    }
  }
  // 2. set fixed nav on page load
  fixNav();
  // 3. set fixed nav on page scroll
  $(window).bind('scroll', function() {
    fixNav();
  });
});


// III. CAROUSEL SLIDER SPEED
$(function() {
  $("#myCarousel, #myTestimonials").carousel({
    interval: 4000
  });
});


// IV. SCROLL TO TOP
$(window).scroll(function() {
  if ($(this).scrollTop() > 500 ) {
    $("#scroll-icon").css({opacity: "1", visibility: "visible"});
  } else {
    $("#scroll-icon").css({opacity: "0", visibility: "hidden"});
  }
});

$("#scroll-icon").click(function() {
  $("html,body").animate({scrollTop: 0 }, "1000");
  return false;
});


// V. NORMALIZE TESTIMONIALS SLIDER HEIGHTS
$(window).on('load', function() {
  normalizeHeights();
});

$(window).on('resize orientationchange', function () {
  var items = $('#myTestimonials .carousel-item');
  items.each(function() {
    $(this).css('height', 'auto');
  });
  normalizeHeights();
});

function normalizeHeights() {
  var items = $('#myTestimonials .carousel-item'),	heights = [],	tallest;
  items.each(function() {
    heights.push($(this).height());
  });
  tallest = Math.max.apply(null, heights);
  items.each(function() {
    $(this).css('height',tallest + 'px');
  });
}


// VI. HEADLINER
$(function() {
  var $pagePath = window.location.pathname.split('/');
  var $thisPage = $pagePath.pop();

  if($thisPage == "index.htm" || ($thisPage == "" && $pagePath[1] != "articles")) {
    var $isIndex = true;
  }

  if(!$isIndex) {
    var $innerHeading = $("h1:first-of-type").text();
    if ($innerHeading) {
      var $parentDiv = $("h1:first-of-type").closest(".container");
      $("h1:first-of-type").remove();
      $("<div id = 'headline'><div class = 'container'><h1>" + $innerHeading + "</h1></div></div>").insertBefore($parentDiv);
    }
  }
});
