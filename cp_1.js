// Identifying the form amd input elements from HTML
const form = document.getElementById("feedback-form");
const guestName = document.getElementById("guestName");
const guestEmail = document.getElementById("guestEmail");
const feedbackRating = document.getElementById("feedbackRating");
const comments = document.getElementById("comments");

// areas where messages will show
const charCount = document.getElementById("char-count");
const formResponse = document.getElementById("form-response");
const tooltip = document.getElementById("tooltip");
const feedbackDisplay = document.getElementById("feedback-display");

// Counts characters as the user types in the comments box
form.addEventListener("input", function(event) {
    if (event.target.id === "comments") {
        charCount.textContent = "Characters: " + comments.value.length;
    }
});


