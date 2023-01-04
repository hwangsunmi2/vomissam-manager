$(document).ready(function () {
  introSlide();
  videoArea();
  lookServiceSwiper();
  carerList();
  todayList();
  mainTab();
  check();
  choiceStar();
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
  $(".tab ul li.item").click(function(){ 
    $(".tab ul li.item").removeClass('on');
    $(".tab .conBox").removeClass('on');
    $(this).addClass('on');
    $("#"+$(this).data('id')).addClass('on');
});
}

function check() {
  $(".ui-button__check--purple").click(function(){
    $(this).addClass("is-active");
    $(this).siblings().removeClass("is-active");
  });

  $(".ui-button__check--multi--purple").click(function(){
    $(this).toggleClass("is-active");
  });
}

//2023.01.04 : add : 찜한 일감 
function choiceStar(){
  $(".choice.star").click(function(){
    $(this).toggleClass("is-active");
  })
}