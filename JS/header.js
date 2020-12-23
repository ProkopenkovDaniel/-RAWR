$(window).on("load", function(){
    var $items = $(".menuItem");
    $items.each(function(){
        $(this).hover(function(){
            var $item = $(this);
            var id = $item.attr('id');
            (id == "menItem")? MakeAddedMenuVisible("men"):MakeAddedMenuVisible("women");
            MakeHeaderBlack();
            var $li = $(this).parent("li");
            var $sibLi = $li.siblings(".liMenuItem");
            var $sibItem = $sibLi.children(".menuItem");
            if($sibItem.is(":focus")){
                $sibItem.blur();
            }
        }, function(){
            if (!$(this).is(":focus")){
                var id = $(this).attr('id');
                (id == "menItem")? MakeAddedMenuUnvisible("men"):MakeAddedMenuUnvisible("women");
                MakeHeaderWhite();
            }
        });
        $(this).focus(function(){
            var $item = $(this);
            var id = $item.attr('id');
            (id == "menItem")? MakeAddedMenuVisible("men"):MakeAddedMenuVisible("women");
            MakeHeaderBlack();
        });
        $(this).blur(function(){
            var id = $(this).attr('id');
            (id == "menItem")? MakeAddedMenuUnvisible("men"):MakeAddedMenuUnvisible("women");
            MakeHeaderWhite(); 
        })
    });
});
function MakeHeaderBlack(){
    $header = $("header");
    $header.css({'background':'#fff'})
    $header.find("#saved").attr('id', 'saved_b');
    $header.find("#search").attr('id', 'search_b');
    $header.find("#account").attr('id', 'account_b');
    $header.find("#basket").attr('id', 'basket_b');
    $header.find("#searchLine").attr('id', 'searchLine_b');
    $header.find(".leftMenu a").css({'color':'#000'});
    $header.find(".leftMenu a").addClass("b");
    $header.find(".leftMenu a.red").css({'color':'#DA1E28'});
    $header.find(".logo").find("img").attr('src', 'IMG/Logo/Black.png');
    $header.find(".menuItem .img").addClass("b");

}

function MakeHeaderWhite(){
    $header = $("header");
    $header.css({'background':'none'})
    $header.find("#saved_b").attr('id', 'saved');
    $header.find("#search_b").attr('id', 'search');
    $header.find("#account_b").attr('id', 'account');
    $header.find("#basket_b").attr('id', 'basket');
    $header.find("#searchLine_b").attr('id', 'searchLine');
    $header.find(".leftMenu a").css({'color':'#fff'});
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