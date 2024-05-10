document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggle-btn");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const formTitle = document.getElementById("form-title");

    toggleBtn.addEventListener("click", function() {
        if (toggleBtn.textContent === "Sign Up") {
            toggleBtn.textContent = "Login";
            formTitle.textContent = "Sign Up";
            loginForm.classList.add("hidden");
            signupForm.classList.remove("hidden");
        } else {
            toggleBtn.textContent = "Sign Up";
            formTitle.textContent = "Login";
            signupForm.classList.add("hidden");
            loginForm.classList.remove("hidden");
        }
    });
});

