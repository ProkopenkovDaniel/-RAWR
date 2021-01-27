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
                else MakeHeaderBlack();
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
            else MakeHeaderBlack();
            SetBackgroundColor("none");
            isAddedMenuOpen = false;
        })
    }); 
    $(".addedMenu").each(function(){
        $(this).hover(function(){
            $(this).siblings("a.menuItem").focus();
            // MakeHeaderBlack();
            // SetBackgroundColor("#fff", "flex");
        },function(){
            $(this).siblings("a.menuItem").blur();; 
        })
    })
});
function MakeHeaderBlack(){
    $header = $("header");
    $header.find("#saved").attr('id', 'saved_b');
    $header.find("#search").attr('id', 'search_b');
    $header.find("#searchLineMain").attr('id', 'searchLineMain_b');
    $header.find("#account").attr('id', 'account_b');
    $header.find("#basket").attr('id', 'basket_b');
    $header.find("#humburger").attr('id', 'humburger_b');
    $header.find(".leftMenu a.underlining").css({'color':'#1B1B1B'});
    $header.find(".rightMenu a.menuItemLink > span").css({'color':'#fff'});
    $header.find(".leftMenu a.underlining").addClass("b");
    $header.find(".leftMenu a.red").css({'color':'#DA1E28'});
    $header.find(".logo").find("img").attr('src', 'IMG/Logo/Black.png');
    $header.find(".menuItem .img").addClass("b");

}
function SetBackgroundColor(color){
    $header = $("header");
    $header.css({'background':color});

}
function MakeHeaderWhite(){
    $header = $("header");
    $header.find("#saved_b").attr('id', 'saved');
    $header.find("#search_b").attr('id', 'search');
    $header.find("#searchLineMain_b").attr('id', 'searchLineMain');
    $header.find("#account_b").attr('id', 'account');
    $header.find("#basket_b").attr('id', 'basket');
    $header.find("#humburger_b").attr('id', 'humburger');
    $header.find(".leftMenu a.underlining").css({'color':'#fff'});
    $header.find(".rightMenu a.menuItemLink > span").css({'color':'#777575'});
    $header.find(".leftMenu a.underlining").removeClass("b");
    $header.find(".leftMenu a.red").css({'color':'#DA1E28'});
    $header.find(".logo").find("img").attr('src', 'IMG/Logo/White.png');
    $header.find(".menuItem .img").removeClass("b");
}
function MakeAddedMenuVisible(id){
    $("#"+id).css({'display' : 'block'});
}
function MakeAddedMenuUnvisible(id){
    $("#"+id).css({'display' : 'none'});
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