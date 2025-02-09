function getUserInput() {
  var username = document.getElementById("userInputField").value;
  console.log("username ----->", username);
  redirectPage(username);
}

function redirectPage(username) {
  window.location.href =
    "templates/ringverse.html?username=" + encodeURIComponent(username);
}
