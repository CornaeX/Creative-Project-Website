document.addEventListener("DOMContentLoaded", function() {
  var imageToggle = document.getElementById("toggleCheckbox");
  var imageElement = document.getElementById("image");

  imageToggle.addEventListener("change", function () {
      if (this.checked) {
          imageElement.src = "resource/ESP8266/ESP82661LED_ON.png";
      } else {
          imageElement.src = "resource/ESP8266/ESP82661LED_OFF.png";
      }
  });
});