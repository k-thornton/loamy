document.addEventListener('DOMContentLoaded', () => {
    const surveyForm = document.getElementById('survey-form');
    if (!surveyForm) return;

    surveyForm.addEventListener('submit', (event) => {
        const questions = surveyForm.querySelectorAll('.question');
        let allAnswered = true;

        questions.forEach((question) => {
            if (!question.querySelector('input[type="radio"]:checked')) {
                allAnswered = false;
                // Highlight unanswered questions for the user
                question.style.border = '2px solid red';
            } else {
                // Reset the styling if the question is answered upon re-submit
                question.style.border = '';
            }
        });

        if (!allAnswered) {
            event.preventDefault(); // Prevent form from submitting
            alert('Please answer all the questions before submitting.');
        }
    });
});
