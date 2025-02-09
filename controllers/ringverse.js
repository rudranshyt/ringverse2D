var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get("username") || "Friend";

function displaytext() {
  const displayText = document.getElementById("displayUsername");
  displayText.textContent =
    "Hey " + username + " I have a special gift for you " + "💖 !";
}
displaytext();

document.addEventListener("DOMContentLoaded", function () {
  const boxBase = document.querySelector(".box-base");
  const boxLid = document.querySelector(".box-lid");

  let isOpen = false;

  boxBase.addEventListener("click", function () {
    if (isOpen) {
      boxLid.style.transform = "rotateX(20deg)";
    } else {
      boxLid.style.transform = "rotateX(120deg)";
    }
    isOpen = !isOpen;
  });
});
