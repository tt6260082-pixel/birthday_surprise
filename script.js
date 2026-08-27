function checkPassword() {

  let password = document.getElementById("password").value;

  if (password === "sahiltanvi1229") {

    document.getElementById("passwordScreen").style.display = "none";

    document.getElementById("welcome").style.display = "flex";

  } else {

    document.getElementById("wrongPassword").innerHTML =
      "❌ Wrong password ❤️";

  }

}


function showSurprise() {

  document.getElementById("welcome").style.display = "none";

  document.getElementById("surprise").style.display = "block";

}