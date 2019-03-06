function rightClick(){
  var rightArrow = $(".arrow-right");

  rightArrow.click(function(){
    var imgActive = $(".image-container > img.active");
    imgActive.removeClass("active");
    var nextImg;
    if(imgActive.hasClass("last")){
      nextImg = $(".image-container > img.first");
    }else {
      nextImg = imgActive.next("img");
    }
    nextImg.addClass("active");
    updateDots();
  });
};

function leftClick(){
  var leftArrow = $(".arrow-left");

  leftArrow.click(function(){
    var imgActive = $(".image-container > img.active");
    imgActive.removeClass("active");
    var prevImg;
    if(imgActive.hasClass("first")){
      prevImg = $(".image-container > img.last");
    }else {
      prevImg = imgActive.prev("img");
    }
    prevImg.addClass("active");
    updateDots();
  });
};

function updateDots() {
  var imgs = $("img");
  var activeIndex;

  for (var i = 0; i < imgs.length; i++) {
    if(imgs.eq(i).hasClass("active")){
      activeIndex = i
    }
  }

  var oldDot = $(".icon-wrapper > i.fas")
  oldDot.removeClass("fas").addClass("far");

  var dot = $(".icon-wrapper > i")
  var nextDot = dot.eq(activeIndex);

  nextDot.removeClass("far").addClass("fas")
  return activeIndex;
};



function chooseIMG() {
  var dots = $(".icon-wrapper > i")

  dots.click(function(){
    var me = $(this);
    var selectedDotIndex = me.index()
    var imgActive = $(".image-container > img.active");
    imgActive.removeClass("active");
    var imgs = $(".image-container > img")
    var dottedIMG = imgs.eq(selectedDotIndex)
    dottedIMG.addClass("active")
    updateDots();
  });
};






function init() {
  leftClick()
  rightClick()
  chooseIMG()
}

$(document).ready(init)
