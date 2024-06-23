window.onload = function () {
    let minutes = 0, seconds = 0, tens = 0;
    const appendMinutes = document.querySelector('#minutes'),
          appendTens = document.querySelector('#tens'),
          appendSeconds = document.querySelector('#seconds'),
          startBtn = document.querySelector('#start'),
          stopBtn = document.querySelector('#stop'),
          resetBtn = document.querySelector('#reset');
    let Interval;

    const startTimer = () => {
        tens++;
        if (tens > 99) {
            tens = 0;
            seconds++;
        }
        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }
        appendTens.innerHTML = tens < 10 ? '0' + tens : tens;
        appendSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        appendMinutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    };

    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = () => clearInterval(Interval);

    resetBtn.onclick = () => {
        clearInterval(Interval);
        tens = seconds = minutes = 0;
        appendTens.innerHTML = '00';
        appendSeconds.innerHTML = '00';
        appendMinutes.innerHTML = '00';
    };
};