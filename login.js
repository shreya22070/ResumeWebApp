document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form reload

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Correct credentials
    let correctUsername = "admin";
    let correctPassword = "12345";

    if (username === correctUsername && password === correctPassword) {
        alert("Login Successful!");
        localStorage.setItem("isLoggedIn", "true"); // Store login status
        window.location.href = "./index.html"; // Redirect to resume page
    } else {
        alert("Login Unsuccessful. Please try again.");
    }
});