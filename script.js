var images = new Array()
var imagesCount = 1164;
var progress_circle = $(".my-progress-bar").gmpc({
  line_width: 6,
  color: "#1ABC9C",
  starting_position: 0,
  percent: 0,
  percentage: true,
  text: "Loading..."
});

function preload(path, max) {
  var index = max + "";
  for (var i = 0; i < index; i++) {
    document.clear;
    //console.log("загрузка "+(i+1)+" из "+ index)

    progress_circle.gmpc('animate', i / index * 100, 3000);


    //
    images[i] = new Image();
    var zeros = "";
    for (var j = 0; j < 6 - (i + "").length; j++) {
      zeros += "0";
    }
    images[i].src = path + zeros + i + ".jpeg";
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
  if (images.length>=imagesCount-1) {
    wrapper.style.display = "block";
    mpb.style.display = "none";
    $("#wrapper").smoothWheel();
  }

}

preload("60_428x240/ultraLow_", imagesCount);

wrapper.onscroll = function() {
  container.style.background = 'url(' + images[wrapper.scrollTop].src + ') no-repeat';
  container.style.backgroundPositionY = wrapper.scrollTop + "px";
  container.style.backgroundSize = "100%";
}
