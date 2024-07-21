// Define the checkAnswer function
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    
    // Get the feedback element
    const feedback = document.getElementById("feedback");
    
    // Compare userAnswer with correctAnswer and update feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
