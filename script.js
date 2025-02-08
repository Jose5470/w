// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'CLICK') {
        // Flash rainbow colors
        flashROSE(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayROSE(); // Display the cat-heart.gif
        });
    }
}

// Function to display the cat.gif initially
function displayROSE() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var ROSEImage = new Image();
    // Set the source (file path) for the cat image
    ROSEImage.src = 'ROSE2.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    ROSEImage.alt = 'ROSE';
    // When the cat image is fully loaded, add it to the image container
    ROSEImage.onload = function() {
        imageContainer.appendChild(ROSEImage);
    };
}

// Function to display the cat-heart.gif
function displayROSE() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var ROSEImage = new Image();
    // Set the source (file path) for the cat-heart image
    ROSEImage.src = 'ROSE2.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    ROSEImage.alt = 'ROSE 2';
    // When the cat-heart image is fully loaded, add it to the image container
    ROSEImage.onload = function() {
        imageContainer.appendChild(ROSEImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayROSE();
