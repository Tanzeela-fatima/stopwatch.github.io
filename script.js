let timer;
let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function start() {
    if (!running) {
        timer = setInterval(updateTime, 1000);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
}

function reset() {
    clearInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('display').textContent = '00:00:00';
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById('display').textContent = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
}
