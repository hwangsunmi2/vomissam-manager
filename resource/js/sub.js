

$(function(){

    $(".ui-button__check").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });

    $(".ui-button__check--multi").click(function(){
        $(this).toggleClass("is-active");
    });

    $(".ui-button__click").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });

    $(".hospital-list__item").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });


    //sub footer
    //$(".subContent-wrap").parents().find(".wrap").children("footer").addClass("sub-footer");


    $(".board-table__inner").on('mouseover focusin touchstart',  function(){
        $(this).addClass("removeBefore");
    });

    //부서안내 클릭
    $(".org-item").click(function(){
        $(this).addClass("is-active");
        $(this).siblings().removeClass("is-active");
    });

    

    //tab
    var $history = $('.history-tab__title');
    var $historyTab = $history.find('h3');
    var $historyCont = $('.history-tab__content>.tab_cont');

    $historyTab.on('click focusin', function(e) {  
        e.preventDefault();
        var tabID = this.id.split("_")[1];
        console.log('tabID',tabID);
        var $nListID = $('#list_' + tabID);
        if ($nListID.css("display") == "none") {
            $historyTab.removeClass('on');
            $historyCont.css('display','none');
        }
        $(this).addClass("on");
        $nListID.css('display','block');
    });

    $('.history-tab__present .year-tab__ul li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.history-tab__present .year-tab__ul li').removeClass('on');
        $('.history-swiper__present .tab_cont').removeClass('on');

        $(this).addClass('on');
        $("#"+tab_id).addClass('on');
    });

    $('.history-tab__past .year-tab__ul li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.history-tab__past .year-tab__ul li').removeClass('on');
        $('.history-swiper__past .tab_cont').removeClass('on');

        $(this).addClass('on');
        $("#"+tab_id).addClass('on');
    });

    

    //subTabMobile
    var depSeleted = $(".depth-selected");
    

    // $(".depth-selected").click(function(){
    //     console.log("a");
    // })

    $(depSeleted).on('click', function(){
        //console.log("a");
        $(this).next().slideToggle();
    })
    

});




