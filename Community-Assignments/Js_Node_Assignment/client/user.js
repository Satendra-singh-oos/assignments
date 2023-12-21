document.addEventListener("DOMContentLoaded", function () {
  const usernameForm = document.getElementById("username-form");

  usernameForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;

    localStorage.setItem("username", username);

    window.location.href = "index.html";
  });
});
