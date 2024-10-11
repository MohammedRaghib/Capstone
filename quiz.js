const level1_btn = document.querySelector('.level-button1');
const level2_btn = document.querySelector('.level-button2');
const level3_btn = document.querySelector('.level-button3');

const correctAnswers = {
    level1: ['Boolean', 'print', 'String', '==', 'split()'],
    level2: ['data type', 'True', 'shift()', 'for', 'const'],
    level3: ['new Object()', 'True', 'asynchronous', 'onclick', 'Object']
};

let score = 0;
let intervalid;


document.querySelector('.submit1').addEventListener('click', () => submitQuiz(1));
document.querySelector('.submit2').addEventListener('click', () => submitQuiz(2));
document.querySelector('.submit3').addEventListener('click', () => submitQuiz(3));

function reveal(level) {
    document.querySelectorAll('.level1, .level2, .level3').forEach(article => {
        article.style.display = 'none';
    });

    document.querySelector(`.level${level}`).style.display = 'block';
    document.querySelector('.essentials').style.display = 'block';

    resetTimer();
    startTimer();
}

function startTimer() {
    const timerElement = document.querySelector('.timer_num');
    let seconds = 120;

    intervalid = setInterval(() => {
        seconds--;

        if (seconds <= 0) {
            clearInterval(intervalid);
            timerElement.textContent = 'Time is up!';
            alert('Time is up!');
        } else {
            timerElement.textContent = 'Time: ' + seconds;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(intervalid);  
    document.querySelector('.timer_num').textContent = 'Time: 120';
}