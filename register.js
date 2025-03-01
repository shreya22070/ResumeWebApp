document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form refresh

    let newUsername = document.getElementById("newUsername").value;
    let newPassword = document.getElementById("newPassword").value;

    if (newUsername && newPassword) {
        localStorage.setItem("username", newUsername);
        localStorage.setItem("password", newPassword);
        alert("Registration successful! Now login with your credentials.");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        alert("Please fill in both fields!");
    }
});