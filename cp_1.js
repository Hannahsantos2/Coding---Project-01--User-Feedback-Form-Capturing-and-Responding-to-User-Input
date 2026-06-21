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
// Shows when the background is clicked
document.body.addEventListener("click", function() {
    console.log("Background clicked");
});

// Stops clicks inside the form from reaching the body
form.addEventListener("click", function(event) {
    event.stopPropagation();
});

// Runs when the guest submits the form
form.addEventListener("submit", function(event) {
    event.preventDefault();
    event.stopPropagation();

    // Checks if any field is blank
    if (
        guestName.value === "" ||
        guestEmail.value === "" ||
        feedbackRating.value === "" ||
        comments.value === ""
    ) {
        formResponse.textContent = "Please fill out all fields before submitting.";
    } else {
        formResponse.textContent = "Thank you for your feedback!";

        // Creates a new feedback entry
        const newFeedback = document.createElement("div");
        newFeedback.classList.add("feedback-entry");

        // Adds the guest's feedback into the new div
        newFeedback.innerHTML =
            "<strong>" + guestName.value + "</strong><br>" +
            "Email: " + guestEmail.value + "<br>" +
            "Rating: " + feedbackRating.value + "/5<br>" +
            "Comments: " + comments.value;

        // Adds the feedback entry to the page
        feedbackDisplay.appendChild(newFeedback);

        // Clears the form after submission
        form.reset();
        charCount.textContent = "Characters: 0";
        tooltip.textContent = "Hover over a field for help.";
    }
});
// Shows which key is pressed in the comments box
comments.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});
