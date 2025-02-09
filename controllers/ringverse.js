var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get("username") || "Friend";

function displaytext() {
  const displayText = document.getElementById("displayUsername");
  displayText.textContent =
    "Hey " + username + " I have a special gift for you " + "💖 !";
}
displaytext();
