const [ startButton, stopButton, resetButton ] = document.querySelectorAll('div input[type=button]');
const h1 = document.querySelector('h1');

let count = 0;
let intervalID;

function start() {
    intervalID = setInterval(() => {
        count++;
        h1.textContent = count;
    }, 1000);
}
startButton.onclick = start;

function stop() {
    clearInterval(intervalID);
}
stopButton.onclick = stop;

function reset() {
    stop();
    count = 0;
    h1.textContent = count;
}
resetButton.onclick = reset;