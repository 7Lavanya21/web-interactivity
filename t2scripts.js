function validateAndSubmitForm() {
    // Validate email format
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Perform form submission logic
    // For demonstration, just display a confirmation message
    var resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = 'Form submitted successfully!';
}

function generateRandomNumber() {
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Display the random number in the results container
    var resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = 'Random Number: ' + randomNumber;
}

function changeBackgroundColor() {
    // Change the background color of the entire page to a random color
    var randomColor = getRandomColor();
    document.body.style.background = randomColor;
}

function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

function getRandomColor() {
    // Generate a random hex color code
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
