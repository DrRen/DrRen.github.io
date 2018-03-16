var images = new Array();
var imagesHigh = new Array()
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
async function preloadHigh(path, max) {
  var index = max + "";
  for (var i = 0; i < index; i++) {
    imagesHigh[i] = new Image();
    var zeros = "";
    for (var j = 0; j < 6 - (i + "").length; j++) {
      zeros += "0";
    }
    imagesHigh[i].src = path + zeros + i + ".jpeg";
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
  if (!unlocked) {
    wrapper.style.display = "block";
    mpb.style.display = "none";
    $("#wrapper").smoothWheel();
    unlocked=true;
    preloadHigh("60_1080р/veryHigh_", imagesCount);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setLoadIndicator() {
  var complited=0;
  for (var i=0; i<images.length; i++){
    if (images[i].complete){
      complited++;
    }
  }
  if (complited>=imagesCount*0.3){
    unlockOnLoad();
  }
  progress_circle.gmpc('animate', complited/(imagesCount*0.3)*100, 10);
}

function applyHigh() {
  for (var i=0; i<images.length; i++){
    if (images[i].complete){
      images[i]=imagesHigh[i];
    }
  }
}

//setInterval(unlockOnLoad, 100);
setInterval(setLoadIndicator, 10);
setInterval(applyHigh,100);
preload("60_428x240/ultraLow_", imagesCount);


wrapper.onscroll = function() {
  container.style.background = 'url(' + images[wrapper.scrollTop].src + ') no-repeat';
  container.style.backgroundPositionY = wrapper.scrollTop + "px";
  container.style.backgroundSize = "100%";
}
