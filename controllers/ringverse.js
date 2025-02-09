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
  const mainContainer = document.querySelector(".main-container");

  let isOpen = false;

  boxBase.addEventListener("click", function () {
    isOpen = !isOpen;
    mainContainer.classList.toggle("open", isOpen);
  });
});
