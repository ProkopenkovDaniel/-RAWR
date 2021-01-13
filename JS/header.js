var isAddedMenuOpen=false;
$(window).on("load", function(){
    var $items = $(".menuItem");
    $items.each(function(){
        $(this).hover(function(){
            isAddedMenuOpen = true;
            var $li = $(this).parent("li");
            var $sibLi = $li.siblings(".liMenuItem");
            var $sibItem = $sibLi.children(".menuItem");
            if($sibItem.is(":focus")){
                $sibItem.blur();
            }
            var $item = $(this);
            var id = $item.attr('id');
            (id == "menItem")? MakeAddedMenuVisible("men"):MakeAddedMenuVisible("women");
            MakeHeaderBlack();
            SetBackgroundColor("#fff");
        }, function(){
            if (!$(this).is(":focus")){
                var id = $(this).attr('id');
                (id == "menItem")? MakeAddedMenuUnvisible("men"):MakeAddedMenuUnvisible("women");
                if (!IsSlideBlack(GetActiveSlider())) MakeHeaderWhite();
                SetBackgroundColor("none");
                isAddedMenuOpen = false;
            }
        });
        $(this).focus(function(){
            isAddedMenuOpen = true;
            var $item = $(this);
            var id = $item.attr('id');
            (id == "menItem")? MakeAddedMenuVisible("men"):MakeAddedMenuVisible("women");
            MakeHeaderBlack();
            SetBackgroundColor("#fff");
        });
        $(this).blur(function(){
            var id = $(this).attr('id');
            (id == "menItem")? MakeAddedMenuUnvisible("men"):MakeAddedMenuUnvisible("women");
            if (!IsSlideBlack(GetActiveSlider())) MakeHeaderWhite(); 
            SetBackgroundColor("none");
            isAddedMenuOpen = false;
        })
    }); 
});
$("#humburger").hover(MakeAddedMenuPortraitVisible(), MakeAddedMenuPortraitUnvisible());
function MakeHeaderBlack(){
    $header = $("header");
    $header.find("#saved").attr('id', 'saved_b');
    $header.find("#search").attr('id', 'search_b');
    $header.find("#searchLine").attr('id', 'searchLine_b');
    $header.find("#account").attr('id', 'account_b');
    $header.find("#basket").attr('id', 'basket_b');
    $header.find("#humburger").attr('id', 'humburger_b');
    $header.find(".leftMenu a").css({'color':'#000'});
    $header.find(".rightMenu a").css({'color':'#000'});
    $header.find(".leftMenu a").addClass("b");
    $header.find(".leftMenu a.red").css({'color':'#DA1E28'});
    $header.find(".logo").find("img").attr('src', 'IMG/Logo/Black.png');
    $header.find(".menuItem .img").addClass("b");

}
function SetBackgroundColor(color){
    $header = $("header");
    $header.css({'background':color})
}
function MakeHeaderWhite(){
    $header = $("header");
    $header.find("#saved_b").attr('id', 'saved');
    $header.find("#search_b").attr('id', 'search');
    $header.find("#searchLine_b").attr('id', 'searchLine');
    $header.find("#account_b").attr('id', 'account');
    $header.find("#basket_b").attr('id', 'basket');
    $header.find("#humburger_b").attr('id', 'humburger');
    $header.find(".leftMenu a").css({'color':'#fff'});
    $header.find(".rightMenu a").css({'color':'#fff'});
    $header.find(".leftMenu a").removeClass("b");
    $header.find(".leftMenu a.red").css({'color':'#DA1E28'});
    $header.find(".logo").find("img").attr('src', 'IMG/Logo/White.png');
    $header.find(".menuItem .img").removeClass("b");
}
function MakeAddedMenuVisible(id){
    $("#"+id).removeClass("hide");
}
function MakeAddedMenuUnvisible(id){
    $("#"+id).addClass("hide");
}

function MakeAddedMenuPortraitVisible(){
    $(".addedMenuPortrait").removeClass("hide");
}
function MakeAddedMenuPortraitUnvisible(){
    $(".addedMenuPortrait").addClass("hide");
}

function IsSlideBlack($slider){
    var index = $slider.slick("slickCurrentSlide");
    $activeSlide = $('[data-slick-index="'+index+'"]');
    if ($activeSlide.hasClass("blackSlide")){
        return true;
    } else {
        return false;
    }
}