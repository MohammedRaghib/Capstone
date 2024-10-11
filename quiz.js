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

function submitQuiz(level) {
    const userAnswers = [];
    const levelKey = `level${level}`;

    clearInterval(intervalid);

    if (level === 1) {
        userAnswers.push(document.getElementById('q1').value.trim());
        userAnswers.push(document.getElementById('q2').value.trim());
        userAnswers.push(document.querySelector('input[name="q3"]:checked')?.value || '');
        userAnswers.push(document.querySelector('input[name="q4"]:checked')?.value || '');
        userAnswers.push(document.querySelector('input[name="q5"]:checked')?.value || '');
    } else if (level === 2) {
        userAnswers.push(document.getElementById('q6').value.trim());
        userAnswers.push(document.querySelector('input[name="q7"]:checked')?.value || '');
        userAnswers.push(document.getElementById('q8').value.trim());
        userAnswers.push(document.querySelector('input[name="q9"]:checked')?.value || '');
        userAnswers.push(document.querySelector('input[name="q10"]:checked')?.value || '');
    } else if (level === 3) {
        userAnswers.push(document.querySelector('input[name="q11"]:checked')?.value || '');
        userAnswers.push(document.querySelector('input[name="q12"]:checked')?.value || '');
        userAnswers.push(document.getElementById('q13').value.trim());
        userAnswers.push(document.querySelector('input[name="q14"]:checked')?.value || '');
        userAnswers.push(document.querySelector('input[name="q15"]:checked')?.value || '');
    }

    let correctCount = 0;
    const answers = correctAnswers[levelKey];
    userAnswers.forEach((answer, index) => {
        if (answer === answers[index]) {
            correctCount++;
        }
    });

    score += correctCount;
    document.querySelector('.score_num').textContent = `Score: ${score}`;

    document.querySelector(`.submit${level}`).disabled = true;

    alert(`You got ${correctCount} out of 5 correct for Level ${level}.`);

    if (level < 3) {
        reveal(level + 1);
    }
}

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
            submitQuiz(level);
        } else {
            timerElement.textContent = 'Time: ' + seconds;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(intervalid);
    document.querySelector('.timer_num').textContent = 'Time: 120';
}