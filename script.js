document.addEventListener('DOMContentLoaded', (event) => {
    // Check if there is a score in localStorage and set it
    if (localStorage.getItem('score')) {
        document.getElementById('score').innerText = 'Score: ' + localStorage.getItem('score');
    }
});

let score = parseInt(localStorage.getItem('score')) || 0;

function checkAnswer(element, answer, nextPage) {
    // Check if the answer is correct based on the current question's correct answer
    if ((document.title === 'Q1' && answer === 'C') || 
        (document.title === 'Q2' && answer === 'A') || 
        (document.title === 'Q3' && answer === 'B')|| 
        (document.title === 'Q4' && answer === 'B')|| 
        (document.title === 'Q5' && answer === 'A')) {
        score++;
    }
    else {
        score=score;
    }
    localStorage.setItem('score', score);
    document.getElementById('score').innerText = 'Score: ' + score;
    
    // Navigate to the next question page
    window.location.href = nextPage;
}
