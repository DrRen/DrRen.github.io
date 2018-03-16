var images = new Array()

function preload(path, max) {
  var index = max+"";
  for (var i = 0; i < index; i++) {
    images[i] = new Image();
    var zeros = "";
    for (var j = 0; j < 6 - (i+"").length; j++) {
      zeros += "0";
    }
    images[i].src = path + zeros + i+".jpeg";
  }

}
preload("60_ 854x480/Low_", 1164)

wrapper.onscroll = function() {
  container.style.background = 'url('+images[wrapper.scrollTop].src+') no-repeat';
  container.style.backgroundPositionY = wrapper.scrollTop + "px";
  container.style.backgroundSize = "100%";
}

function getImageIndex() {
  var index = wrapper.scrollTop + "";
  var zeros = "";
  for (var i = 0; i < 6 - index.length; i++) {
    zeros += "0";
  }
  return zeros + index;
}
