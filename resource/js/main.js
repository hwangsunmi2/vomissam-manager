$(document).ready(function () {
  introSlide();
  videoArea();
  lookServiceSwiper();
  carerList();
  todayList();
  mainTab();

});

function introSlide() {
  var introSlide = new Swiper(".intro-slide.swiper-container", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

function videoArea() {
  var mainswiper = new Swiper(".video-area__inner.swiper-container", {});
}

function lookServiceSwiper() {
  var mainswiper = new Swiper(".look-service__inner.swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
}

//보미쌤 지원 현황
function carerList() {
  $(".carer-button__detail").click(function(){
    $(this).hide();
    $(this).parent(".carer-buttons").children(".carer-button__wish, .carer-button__choice").show();
    $(this).closest(".carer-list").toggleClass("is-show");
  })
}


//오늘 할 일
function todayList() {
	var todayOn = $(".todayList > div");
	todayOn.click(function () {
		todayOn.removeClass("is-active");
		$(this).addClass("is-active");
	});
}

//메인 Tab
function mainTab() {
  var $notice = $('.tab_wrap');
  var $noticeTab = $notice.find('h3');
  var $noticeCont = $notice.find('.tab_cont');

  $noticeTab.on('click focusin', function(e) {  
      e.preventDefault();
      var tabID = this.id.split("_")[1];
      console.log('tabID',tabID);
      var $nListID = $('#list_' + tabID);
      if ($nListID.css("display") == "none") {
          $noticeTab.removeClass('on');
          $noticeCont.css('display','none');
      }
      $(this).addClass("on");
      $nListID.css('display','block');
  });
}