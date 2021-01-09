$(window).on("load", function(){
  $pageSlider = $("#Page").slick({
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    draggable: true,
    dots: false,
    placeholders:false,
    easing: 'easeOutQuad',
    speed: 1000,
    mobileFirst: true
  });
    var $hard = $(".hard");
    $hard.css({height: $(window).height()});
    $hard.css({width: $(window).width()});
    var $sliders = $(".slider");
    $(".slider").each(function(){
      var $fullSlide = $(this);
      AddSlider($fullSlide);
    });
});
// $(window).resize(function(){
//   var $sections = $fullSlide.children(".item");
//   var $sectionImgs = $fullSlide.find(".sectionImg");
//   $sections.css({height: $(window).height()});
//   $sections.css({width: $(window).width()});
//   var height = $(window).height() - 40;
//   var width = $(window).width();
//   $sectionImgs.css({height: height});
//   $sectionImgs.css({width: width});
// });


function AddSlider($fullSlide){
  var $sections = $fullSlide.children(".item");
  var $sectionImgs = $fullSlide.find(".sectionImg");
  // $sections.css({height: $(window).height()});
  // $sections.css({width: $(window).width()});
  // var height = $(window).height() - ($(window).height()*0.037);
  // var width = $(window).width();
  // $sectionImgs.css({height: height});
  // $sectionImgs.css({width: width});
  var slickIsChanging = false;
  var slideIndex = 0;
  var slideCount = $sections.length;

  function mouseWheel($slider){
    $fullSlide.on("mousewheel DDOMMouseScroll wheel MozMousePixelScroll",
    {
      $slider: $slider
    },
    mouseWheelHandler
    );
    downButtonEvent($slider);
  }

  function mouseWheelHandler(event){
    event.preventDefault();
    event.stopPropagation();

    var $slideContainer = $(this);
    var $slider = event.data.$slider;
    if (!$slideContainer.hasClass("animating") && slickIsChanging == false){
      $slideContainer.addClass("animating");
      var delta = event.originalEvent.deltaY;
      if (delta > 0){
        $slider.slick("slickNext");
      } else {
        $slider.slick("slickPrev");
      }

      setTimeout(function (){
        $slideContainer.removeClass("animating");
      }, 1000);
    }
  }

  function downButtonEvent($slider){
    $sections.each(function(){
      var $sectionImg = $(this).children(".sectionImg");
      var $downDiv = $sectionImg.children(".down");
      $downDiv.children(".downButton").on("click", function(){
        $slider.slick("slickNext");
      });
    });
  }

  function rightButtonEvent($Page){
    $sections.each(function(){
      var $sectionImg = $(this).children(".sectionImg"); 
      $sectionImg.children(".rightArrow").on("click", function(){
        $Page.slick("slickNext");
      });
    });
  }
  function leftButtonEvent($Page){
    $sections.each(function(){
      var $sectionImg = $(this).children(".sectionImg"); 
      $sectionImg.children(".leftArrow").on("click", function(){
        $Page.slick("slickPrev");
      });
    });
  }
  $("#Page").on("init", function(){
    rightButtonEvent($pageSlider);
    leftButtonEvent($pageSlider);
  });
  $fullSlide
    .on("init", function(){
      mouseWheel($fullSlide);
      downButtonEvent($fullSlide);
    })
    .on("beforeChange", function(event, slick, currentSlide, nextSlide){
      slickIsChanging = true;
      ChangeActiveDot($fullSlide, currentSlide, nextSlide);
      if (slick.slideCount-1 != nextSlide){
        MakeHeaderWhite();
        MakeDodsWhite($fullSlide.siblings(".dots").attr('id'))
      } 
    })
    .on("afterChange", function(event, slick, currentSlide){
      slickIsChanging = false;
      if (slick.slideCount-1 == currentSlide){
        MakeHeaderBlack();
        MakeDodsBlack($fullSlide.siblings(".dots").attr('id'))
      } else{
        MakeHeaderWhite();
        MakeDodsWhite($fullSlide.siblings(".dots").attr('id'))
      }
    })
    .slick({
      prevArrow: false,
      nextArrow: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      vertical: true,
      verticalSwiping: true,
      draggable: true,
      dots: false,
      placeholders:false,
      rows:0,
      easing: 'easeOutQuad',
      speed: 1000,
      mobileFirst: true
    });
}