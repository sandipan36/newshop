document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginStatus = document.getElementById("login-status");

    // Check if user data exists in LocalStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Function to check if a user with the given username exists
    function findUser(username) {
        return users.find((user) => user.username === username);
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const phone= document.getElementById("phone").value;
        const email=document.getElementById("email").value;
        // Check if the user exists based on the entered username
        const existingUser = findUser(username);

        if (existingUser) {
            // User already exists
            if (existingUser.passwordSet) {
                // Check the password
                if (existingUser.password === password) {
                    loginStatus.textContent = "Welcome back, " + username + "!";
                } else {
                    loginStatus.textContent = "Incorrect password. Please try again.";
                }
            } else {
                // Password not set yet
                loginStatus.textContent = "You haven't set your password yet. Please create a new one.";
            }
        } else {
            // User doesn't exist, create a new user
            const newUser = { username, password,phone,email, passwordSet: true };
            users.push(newUser);

            // Save updated user data to LocalStorage
            localStorage.setItem("users", JSON.stringify(users));
            loginStatus.textContent = "Welcome, " + username + "!";
        }

        loginForm.reset();
    });
});
function searched(){
    var sear=document.getElementById("sear-txt").value;
    console.log("searched:"+sear);
}
function toggleMenu() {
    const menuContent = document.getElementById("menuContent");
    menuContent.classList.toggle("show");
  }