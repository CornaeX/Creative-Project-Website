var buttonState2 = false;

document.getElementById("toggleButton2").addEventListener("click", function() {
  buttonState2 = !buttonState2;

  if (buttonState2) {
    loadImage2('resource/OpenKB/OpenKB1LED_ON.png');
  } else {
    loadImage2('resource/OpenKB/OpenKB1LED_OFF.png');
  }
});

function loadImage2(imageSource) {
  var imageElement = document.getElementById("image2");
  imageElement.src = imageSource;
}