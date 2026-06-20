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

// Starting message for the tooltip area
tooltip.textContent = "Hover over a field for help.";

// Shows a helpful message when the mouse moves over a field
form.addEventListener("mouseover", function(event) {
    if (event.target.id === "guestName") {
        tooltip.textContent = "Please enter your name.";
    }

    if (event.target.id === "guestEmail") {
        tooltip.textContent = "Please enter your email.";
    }

    if (event.target.id === "feedbackRating") {
        tooltip.textContent = "Rate your stay from 1 to 5.";
    }

    if (event.target.id === "comments") {
        tooltip.textContent = "Please write your feedback.";
    }
});

// Resets the tooltip when the mouse leaves a field
form.addEventListener("mouseout", function(event) {
    if (event.target.id === "guestName") {
        tooltip.textContent = "Hover over a field for help.";
    }

    if (event.target.id === "guestEmail") {
        tooltip.textContent = "Hover over a field for help.";
    }

    if (event.target.id === "feedbackRating") {
        tooltip.textContent = "Hover over a field for help.";
    }

    if (event.target.id === "comments") {
        tooltip.textContent = "Hover over a field for help.";
    }
});
