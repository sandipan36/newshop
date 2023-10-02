document.getElementById("msg").innerHTML="passionCode";

function searched(){
    var sear=document.getElementById("sear-txt").value;
    console.log("searched:"+sear);
}

let currentGrid = 1;
const totalGrids = 4;

function toggleGridMenu() {
    currentGrid = (currentGrid % totalGrids) + 1;
    showCurrentGrid();
}

function showCurrentGrid() {
    const gridMenus = document.querySelectorAll('.grid-menu');
    gridMenus.forEach((grid) => {
        grid.style.display = 'none';
    });

    const currentGridClass = `.grid${currentGrid}`;
    const currentGridElement = document.querySelector(currentGridClass);
    currentGridElement.style.display = 'grid';

    const toggleButton = document.querySelector('.toggle-button');
    toggleButton.textContent = ` Menu: ${currentGrid}`;
}

// Show the first grid by default
showCurrentGrid();

//
// 
// 
// 
document.addEventListener("DOMContentLoaded", function() {
    // Display the glossy prompt based on login status and form submission
    showGlossyPrompt();
});

function showGlossyPrompt() {
    const userDetailsForm = document.getElementById("user-details-form");
    const notification = document.getElementById("notification");

    // Check if the user is logged in (you can customize this logic based on your authentication)
    const isLoggedIn = checkUserLogin();

    if (isLoggedIn) {
        notification.textContent = "Welcome! You are logged in. Here's the latest news for logged-in users.";
        document.getElementById("notification").innerHTML="welcome"+ "How are you."
    } else {
        notification.textContent = "You are not logged in. Please log in to see personalized news.";
    }

    // Display the glossy prompt
    notification.style.display = "block";

    // Hide the glossy prompt after 5 seconds (adjust the time as needed)
    setTimeout(function() {
        notification.style.display = "none";
    }, 5000);
}

// Sample function to check user login status (modify this based on your authentication logic)
function checkUserLogin() {
    // In this example, we check if the name input is filled to simulate login
    const nameInput = document.getElementById("name");
    return nameInput.value.trim().length > 0;
}

function increment(){
    var a=document.getElementById("name").value;
    var add = document.getElementById("Addres").value;
    var ph=document.getElementById("number").value;
    document.getElementById("msg").innerHTML="welcome to our site ";
    document.getElementById("user-name").innerHTML="WELCOME "+a;
    if(a.length<3){
        // alert("name must be more than 3 letter");
        document.getElementById('ale').innerHTML="Enter A valid Name";
    }
    else{
        console.log("Name:"+a);
        // document.getElementById('ale').innerHTML="Enter A valid Name";
    }
    if(ph.length<10){
        // alert("more than 10");
        document.getElementById("ale").innerHTML="enter A Valid Number";
    }
    else{
        console.log("Phone Number:"+ph);
    }
   if(add.length<3){
    document.getElementById("ale").innerHTML="Enter A Valid Address";
   }
   else{
    console.log("Address:"+add);
   }
   showGlossyPrompt();
}

function changeCardContent(card) {
    // Get the card elements inside the current card
    const cardImage = card.querySelector("img");
    const cardTitle = card.querySelector("h3");
    const cardText = card.querySelector("p");

    // Define new content for the card
    const newImageSrc = "https://th.bing.com/th/id/OIP.C4yEUq2tPmLDROuTo9XkcQHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7"; // Replace with the URL of the new image
    const newTitle = "New Title"; // Replace with the new title
    const newText = "New Text"; // Replace with the new text

    // Store the original content in data attributes
    card.setAttribute("data-original-image", cardImage.src);
    card.setAttribute("data-original-title", cardTitle.textContent);
    card.setAttribute("data-original-text", cardText.textContent);

    // Set the new content to the card elements
    cardImage.src = newImageSrc;
    cardTitle.textContent = newTitle;
    cardText.textContent = newText;

    // Apply transform to maintain original size of the card
    card.style.transform = "scale(1)";
}

function resetCardContent(card) {
    // Get the card elements inside the current card
    const cardImage = card.querySelector("img");
    const cardTitle = card.querySelector("h3");
    const cardText = card.querySelector("p");

    // Get the original content from data attributes
    const originalImageSrc = card.getAttribute("data-original-image");
    const originalTitle = card.getAttribute("data-original-title");
    const originalText = card.getAttribute("data-original-text");

    // Set the original content back to the card elements
    cardImage.src = originalImageSrc;
    cardTitle.textContent = originalTitle;
    cardText.textContent = originalText;

    // Reset transform to maintain original size of the card
    card.style.transform = "";
}


const videoInput = document.getElementById("videoInput");
const uploadButton = document.getElementById("uploadButton");
const videoContainer = document.getElementById("videoContainer");

const uploadedVideos = [];

uploadButton.addEventListener("click", () => {
    if (videoInput.files.length > 0) {
        const videoFile = videoInput.files[0];
        const videoURL = URL.createObjectURL(videoFile);

        // Store the video URL in the uploadedVideos array
        uploadedVideos.unshift(videoURL);

        // Limit the array to the last three uploaded videos
        if (uploadedVideos.length > 3) {
            uploadedVideos.pop();
        }

        // Update the video container
        updateVideoContainer();
    } else {
        alert("Please select a video file to upload.");
    }
});

function updateVideoContainer() {
    videoContainer.innerHTML = "";
    uploadedVideos.forEach((videoURL, index) => {
        const videoItem = document.createElement("div");
        videoItem.className = "video-item";

        const video = document.createElement("video");
        video.controls = false; // Disable user controls
        video.src = videoURL;

        videoItem.appendChild(video);
        videoContainer.appendChild(videoItem);
    });

    // Automatically play the videos
    playVideos();
}

function playVideos() {
    const videoItems = videoContainer.querySelectorAll(".video-item video");

    videoItems.forEach((video, index) => {
        video.addEventListener("ended", () => {
            // Play the next video when the current one ends
            if (index < videoItems.length - 1) {
                videoItems[index + 1].play();
            }
        });

        if (index === 0) {
            video.play(); // Start playing the first video
        }
    });
}

// Initialize the video container with any previously uploaded videos (if any)
updateVideoContainer();
