document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById("contactBtn");
    contactBtn.addEventListener("click", function() {
        // Redirect to login page
        window.location.href = "login.html";
    });
});
