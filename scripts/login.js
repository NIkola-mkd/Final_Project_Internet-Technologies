"use strict";

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "userID" && password === "seeu") {
        alert("logged in");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 0.8;
    }
})
