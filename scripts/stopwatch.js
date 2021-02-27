/*Секундомер---------------------------------------------*/
let timer = document.getElementById("timer");
let startStop = document.getElementById("startStop");
let resetStopwatch = document.getElementById("resetStopwatch");

//в ф-ю Stopwatch() передаётся переменная, содержащая параграф, отображающий время секундомера
let stopwatch = new Stopwatch(timer);

startStop.addEventListener("click", function() {
  stopwatch.isOn ? stopwatch.stop() : stopwatch.start();
});

resetStopwatch.addEventListener("click", function() {
  stopwatch.reset();
});

function Stopwatch(elem) {
  let timeStopwatch = 0;
  let offset;
  let interval;
  this.isOn = false;

  function update() {
    //Date.now() возвращает количество миллисекунд, прошедших с 1 января 1970 
    let timePassed = Date.now() - offset;
    offset = Date.now();
    if (this.isOn) {
      timeStopwatch += timePassed;
    } 
    //Запись в параграф  прошедшего времени после его обработки в timeHandler
    elem.textContent = timeHandler(timeStopwatch); 
  }

  function timeHandler(timeStopwatch) {
    timeStopwatch = new Date(timeStopwatch);

    let minutes = timeStopwatch.getMinutes().toString();
    let seconds = timeStopwatch.getSeconds().toString();
    let milliseconds = timeStopwatch.getMilliseconds().toString().slice(0,-1);// slice(0,-1) - отбрасывает последнее значение от милисекунд 

    if (minutes.length < 2) minutes = "0" + minutes;
    if (seconds.length < 2) seconds = "0" + seconds;
    while (milliseconds.length < 2) milliseconds = "0" + milliseconds;

    return minutes + " : " + seconds + " : " + milliseconds;
  }

  this.start = function() {
    //bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. 
    interval = setInterval(update.bind(this), 10);
    offset = Date.now();
    this.isOn = true;
    startStop.value = "Пауза";
  };

  this.stop = function() {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
    startStop.value = "Продолжить";
  };

  this.reset = function() {
    timeStopwatch = 0;
    startStop.value = "Старт";
    stopwatch.stop();
    elem.textContent = timeHandler(0);
  };
}


// Всплывающее окно с объяснением решения----------
buttonStopwatchSolution.addEventListener("click", buttonStopwatchSolutionClick);
buttonStopwatchClose.addEventListener("click", buttonStopwatchCloseClick);
let dialogStopwatch = document.getElementById('dialog-stopwatch');

//Ф-я открывает окно с объяснением
function buttonStopwatchSolutionClick(){
  dialogStopwatch.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonStopwatchCloseClick(){
  dialogStopwatch.close();
}