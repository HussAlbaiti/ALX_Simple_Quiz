// Function to check the user's selected answer
function checkAnswer() {
    const correctAnswer = "4";  // correct answer

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Access feedback display element
    const feedback = document.getElementById("feedback");

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare the selected answer with the correct one
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // No option selected
        feedback.textContent = "Please select an answer.";
    }
}

// Attach event listener to the Submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
