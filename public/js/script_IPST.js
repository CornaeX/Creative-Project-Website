var buttonState1 = false;

document.getElementById("toggleButton1").addEventListener("click", function() {
  buttonState1 = !buttonState1;

  if (buttonState1) {
    loadImage1('resource/IPST/IPST1LED_ON.png');
  } else {
    loadImage1('resource/IPST/IPST1LED_OFF.png');
  }
});

function loadImage1(imageSource) {
  var imageElement = document.getElementById("image1");
  imageElement.src = imageSource;
}