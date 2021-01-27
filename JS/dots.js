$(window).on("load", function(){
    $(".slider").each(function(){
        var $slider = $(this);
        InitSliderDots($slider);
    });
});

function InitSliderDots($slider){
    var $ul = $slider.siblings(".dots");
    var $dots = $ul.children(".dot");
    $dots.each(function(){
        $(this).children("a")
        .on("click", function (){
            if (slickIsChanging == false){
            var id = parseInt($(this).parent().attr('id'));
            var currentIndex = ($slider.slick("slickCurrentSlide"));
            $slider.siblings().children("#"+currentIndex).removeClass("active");
            $slider.slick("slickGoTo", id, false);
            $(this).parent().addClass("active");
            ChangeActiveDot($slider, currentIndex, id);}
        });
    });
}

function ChangeActiveDot($slider, currentDot, nextDot){
    $slider.siblings().children("#"+currentDot).removeClass("active");
    $slider.siblings().children(".dot").each(function(){
        $(this).removeClass("active");
    })
    $slider.siblings().children("#"+nextDot).addClass("active");
}

function SetActiveDot($slider, currentDot){
    $slider.siblings().children(".dot").each(function(){
        $(this).removeClass("active");
    })
    $slider.siblings().children("#"+currentDot).addClass("active");
}

function MakeDodsBlack(id){
    var $dots = $("#"+id);
    $dots.children(".dot").addClass("b");
}
function MakeDodsWhite(id){
    var $dots = $("#"+id);
    $dots.children(".dot").removeClass("b");
}