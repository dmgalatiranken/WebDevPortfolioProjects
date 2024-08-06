"use strict";

document.addEventListener("DOMContentLoaded", () => {

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let successMessage = document.getElementById("successMessage");
    let errorMessage = document.getElementById("errorMessage");
    let loginButton = document.getElementById("btnLogin");

    function performLogin() {
        if (email.value == "" || password.value == "") {
            errorMessage.textContent = "You seem to have forgotten your username or password.";
            successMessage.textContent = "";
        }
        else if (email.value === "admin@example.com" && password.value === "password") {
            successMessage.textContent = "Welcome back Admin!";
            errorMessage.textContent = "";
        }
        else {
            errorMessage.textContent = "That email and password doesn't seem to be right. Try again.";
            successMessage.textContent = "";
        }
    };

    loginButton.addEventListener("click", performLogin);

});