document.addEventListener('DOMContentLoaded', () => {
    const surveyForm = document.getElementById('survey-form');
    if (surveyForm) {
        surveyForm.addEventListener('submit', (e) => {
            const allQuestionsAnswered = Array.from(document.querySelectorAll('.question')).every(question => {
                return question.querySelector('input[type="radio"]:checked');
            });

            if (!allQuestionsAnswered) {
                e.preventDefault(); // Prevent form submission
                alert('Please answer all questions before submitting.');
            }
        });
    }
    // Assuming you have a <div id="resultsChart"></div> in your results page
    const resultsData = document.getElementById('resultsData');
    if (resultsData) {
        const score = JSON.parse(resultsData.innerText);
        // Use a charting library like Chart.js to render the score
        new Chart(document.getElementById('resultsChart'), {
            type: 'bar', // Example chart type
            data: {
                labels: ['Your Score'],
                datasets: [{
                    label: 'Survey Score',
                    data: [score],
                    backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgba(54, 162, 235, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
