// Redirect to login page if not logged in 
if (localStorage.getItem("isLoggedIn")!=="true"){
    window.location.href="login.html";
}
// Selecting the image element
let dogImage = document.getElementById("dogImage");

// Function to fetch a random dog image
async function fetchDogImage() {
    try {
        console.log("Fetching dog image...");  // Debugging log
        let response = await fetch("https://dog.ceo/api/breeds/image/random");
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        let data = await response.json();
        console.log("API Response:", data);  // Debugging log

        // Check if the API returned an image
        if (data && data.message) {
            console.log("Image URL:", data.message);  // Debugging log
            dogImage.src = data.message;
            dogImage.alt = "Random Dog Image";
            dogImage.style.width = "300px";  // Adjust the size if needed
        } else {
            console.error("Invalid API response:", data);
        }
    } catch (error) {
        console.error("Error fetching the dog image:", error);
    }
}

// Call the function when the script loads
fetchDogImage();

document.addEventListener("DOMContentLoaded", function() {
    let logoutButton = document.getElementById("logoutBtn");

    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            localStorage.removeItem("isLoggedIn"); // Clear login status
            window.location.href = "login.html"; // Redirect to login page
        });
    }
});