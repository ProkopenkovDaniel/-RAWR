$(window).on("load", function(){
  $pageSlider = $("#Page").on("beforeChange", function(event, slick, currentSlide, nextSlide){
    slickIsChanging = true;
    
    if (!IsSlideBlack(GetActiveSlider())){
      if (!isAddedMenuOpen) MakeHeaderWhite();
    }
  })
  .on("afterChange", function(event, slick, currentSlide){
    if (IsSlideBlack(GetActiveSlider())){
      MakeHeaderBlack();
      } else{
        if (!isAddedMenuOpen) MakeHeaderWhite();
    }
    slickIsChanging = false;
  })
  .slick({
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

function AddSlider($fullSlide){
  var $sections = $fullSlide.children(".item");
  var $sectionImgs = $fullSlide.find(".sectionImg");
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
        if (slickIsChanging == false){
          ChangeActiveDot($fullSlide, currentSlide, nextSlide);
        }
      slickIsChanging = true;
      if (slick.slideCount-1 != nextSlide){
        if (!isAddedMenuOpen) MakeHeaderWhite();
        MakeDodsWhite($fullSlide.siblings(".dots").attr('id'))
      } 
    })
    .on("afterChange", function(event, slick, currentSlide){
      SetActiveDot($fullSlide, currentSlide);
      if (slick.slideCount-1 == currentSlide){
        MakeHeaderBlack();
        MakeDodsBlack($fullSlide.siblings(".dots").attr('id'))
      } else{
        if (!isAddedMenuOpen) MakeHeaderWhite();
        MakeDodsWhite($fullSlide.siblings(".dots").attr('id'));
      }

      slickIsChanging = false;
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
      speed: 1000
      // mobileFirst: true
    });
}

function GetActiveSlider(){
  $activePageTrack = $("#Page").children(".slick-list").children(".slick-track");
  $activePageSlide = $activePageTrack.children(".slick-active");
  $activeSlider = $activePageSlide.find(".slider");
  return $activeSlider;
}