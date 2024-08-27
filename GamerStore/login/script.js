inputsCorretos = {
  username: false,
  password: false,
};

inputUsername = document.getElementById("username");
usernameHelper = document.getElementById("username-helper");

inputPassword = document.getElementById("password");
passwordHelper = document.getElementById("password-helper");

btnEntrar = document.getElementById("btn-entrar");

inputUsername.addEventListener("change", function () {
  if (inputUsername.value.length < 6) {
    inputsCorretos.username = false;
    usernameHelper.classList.add("visible");
    inputUsername.classList.add("input-style-error");
  } else {
    inputsCorretos.username = true;
    usernameHelper.classList.remove("visible");
    inputUsername.classList.add("input-style-correct");
  }
});

inputPassword.addEventListener("change", function () {
  if (inputPassword.value.length < 6) {
    inputsCorretos.password = false;
    passwordHelper.classList.add("visible");
    inputPassword.classList.add("input-style-error");
  } else {
    inputsCorretos.password = true;
    passwordHelper.classList.remove("visible");
    inputPassword.classList.add("input-style-correct");
  }
});

btnEntrar.addEventListener("click", function (e) {
  if (inputsCorretos.username && inputsCorretos.password) {
  } else {
    e.preventDefault();
    alert("Preencha os campos corretamente!");
  }
});
