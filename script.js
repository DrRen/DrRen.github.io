var images = new Array()
var imagesCount = 1164;
var unlocked=false;
var progress_circle = $(".my-progress-bar").gmpc({
  line_width: 6,
  color: "#1ABC9C",
  starting_position: 0,
  percent: 0,
  percentage: true,
  text: "Loading..."
});

async function preload(path, max) {
  var index = max + "";
  for (var i = 0; i < index; i++) {
    images[i] = new Image();
    var zeros = "";
    for (var j = 0; j < 6 - (i + "").length; j++) {
      zeros += "0";
    }
    images[i].src = path + zeros + i + ".jpeg";
    //await sleep(10);
  }

}

function getImageIndex() {
  var index = wrapper.scrollTop + "";
  var zeros = "";
  for (var i = 0; i < 6 - index.length; i++) {
    zeros += "0";
  }
  return zeros + index;
}

function unlockOnLoad() {
  if (images[imagesCount-1].complete && !unlocked) {
    wrapper.style.display = "block";
    mpb.style.display = "none";
    $("#wrapper").smoothWheel();
    unlocked=true;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setLoadIndicator() {
  var max=0;
  for (var i=0; i<images.length; i++){
    if (!images[imagesCount-1].complete){
      if (max<i){
        max=i;
      }
    }
  }
  progress_circle.gmpc('animate', max/imagesCount*100, 10);
}

setInterval(unlockOnLoad, 100);
setInterval(setLoadIndicator, 10);

preload("60_1080р/veryHigh_", imagesCount);

wrapper.onscroll = function() {
  container.style.background = 'url(' + images[wrapper.scrollTop].src + ') no-repeat';
  container.style.backgroundPositionY = wrapper.scrollTop + "px";
  container.style.backgroundSize = "100%";
}
