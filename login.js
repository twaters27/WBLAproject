const accountContainer = document.getElementById("create-account-container");
const loginContainer = document.getElementById("login-container");
const goToMake = document.getElementById("goToMake");
const goToLogin = document.getElementById("goToLogin");
const loginNav = document.getElementById("loginNav");

function login() {
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");

  var username = usernameInput.value;
  var password = passwordInput.value;

  // Check if the provided username and password match
  if (checkCredentials(username, password)) {
    window.location.href = "index.html";
    localStorage.setItem("username", username)
  } else {
    alert("Incorrect Password or Username, Please try again.");
  }
}

function createAccount() {
  var newUsernameInput = document.getElementById("new-username");
  var newPasswordInput = document.getElementById("new-password");

  var newUsername = newUsernameInput.value;
  var newPassword = newPasswordInput.value;

  // Check if the username already exists
  if (localStorage.getItem(newUsername)) {
    alert("Username already exists. Please choose a different one.");
  } else {
    // Save the new account in localStorage
    localStorage.setItem(newUsername, newPassword);
    localStorage.setItem("username", newUsername);
    alert("Account created successfully! You can now log in.");
  }
}

function checkCredentials(username, password) {
  // Check if the provided username and password match any in localStorage
  return localStorage.getItem(username) === password;
}

goToMake.addEventListener("click", function () {
  loginContainer.style.display = "none";
  accountContainer.style.display = "block";
});
goToLogin.addEventListener("click", function () {
  accountContainer.style.display = "none";
  loginContainer.style.display = "block";
});
