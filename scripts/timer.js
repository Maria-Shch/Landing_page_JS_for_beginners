/*Таймер-------------------------------------------------- */
let isWorking = 0; //Если 0, то таймер не работает, переменная нужна для того, чтоб несколько раз подряд кнопку страт не тыкать и не ломать таймер
let startTime; //Начально заданное время для таймера
let time;

startTimer.addEventListener('click', start);
stopTimer.addEventListener('click', stop);
resetTimer.addEventListener('click', reset);
timePassedTimer.addEventListener('click', timePassed); 

let count = document.getElementById("timerRes");

function start(){

  if(isWorking == 0) //Изначально таймер не работает, поэтому проходим условия и включаем таймер
  {
    isWorking = 1; //Отмечаем, что таймер работает
                   //Теперь при нажатии кнопки старт во время работы таймера он не ломается,
                   //тк просто не реагирует на нажатие

    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;
    
    startTime = hours*3600 + minutes*60 + seconds*1; //Переменная хранит изначально заданное время
    time = hours*3600 + minutes*60 + seconds*1;

    if(isNaN(time)){ //Валидация
      count.innerHTML = "Проверьте ввод";
    }
    else if(time < 0){ //Валидация
      count.innerHTML = "Проверьте ввод";
    }
    else{
      function updateCountDown(){

        let h = Math.floor(time/3600);
        h = h < 10 ? "0" + h : h;
  
        
        let m = Math.floor(time/60);
        while(m >= 60){ //добавила цикл, тк минуты неправильно считались
          m-=60;
        }
        m = m < 10 ? "0" + m : m;
  
        let s = time % 60;
        s = s < 10 ? "0" + s : s;
  
        count.innerHTML = h + ' : ' + m + ' : ' + s; 
        time--;
  
        if (time<0) {
          clearInterval(intervalID);
        }
      }
      intervalID = setInterval(updateCountDown, 1000);
    }
  }
}

function timePassed(){
  if(isWorking == 1){ //Посмотреть сколько времени прошло можно только после того, как таймер был запущен
    let timePassed = startTime - time -1; //timeParred - разница между стартовым временем и текущим

    let h = Math.floor(timePassed/3600);
    h = h < 10 ? "0" + h : h;

    let m = Math.floor(timePassed/60);
    while(m >= 60){ 
      m-=60;
    }
    m = m < 10 ? "0" + m : m;

    let s = timePassed % 60;
    s = s < 10 ? "0" + s : s;

    let count2 = document.getElementById("timePassed");
    count2.innerHTML = h + ' : ' + m + ' : ' + s;

    document.getElementById("divTimePassed").style.display = "block"; //Отображается блок с выводом прошедшего времени
  }
}

function stop(){
  clearInterval(intervalID);
}

function reset(){
  isWorking = 0;

  h=0;
  m=0;
  s=0;
  count.innerHTML = `00 : 00 : 00`;
  clearInterval(intervalID);

  //добавила очищение полей
  hours.value = "";
  minutes.value = "";
  seconds.value = "";
}

// Всплывающее окно с объяснением решения ----------
buttonTimerSolution.addEventListener("click", buttonTimerSolutionClick);
buttonTimerClose.addEventListener("click", buttonTimerCloseClick);
let dialogTimer = document.getElementById('dialog-timer');

//Ф-я открывает окно с объяснением
function buttonTimerSolutionClick(){
  dialogTimer.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonTimerCloseClick(){
  dialogTimer.close();
}