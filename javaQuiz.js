var timerEl = document.getElementById('countdown');
var clockEl = documenet.getElementById('clock');

var message = "Time's Up."

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' time remaining';
        timeLeft--;
    } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' time remaining';
        timeLeft--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
    }
    }, 60000);
}

