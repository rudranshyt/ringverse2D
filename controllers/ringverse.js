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

document.getElementById("ring").addEventListener("click", () => {
  document.getElementById("pop-up").style.display = "block";
});

document.getElementById("yes").addEventListener("click", function () {
  alert("Yay! You said Yes!");
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0.5, y: 0.5 },
  });
  document.getElementById("pop-up").style.display = "none";
});

document.getElementById("blush").addEventListener("click", function () {
  alert("Aww! You are blushing!");
  document.getElementById("pop-up").style.display = "none";
});
