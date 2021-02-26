/*Блок вывода user name с сохранением в LS ----------------*/
let div = document.getElementById('user-name');
buttonReady.addEventListener("click", buttonClick);


let setName = function () {
  //Установка имени в верхний правый угол
  let p = document.createElement('p');
  p.textContent = localStorage.getItem('name');
  p.setAttribute("class", "p-name-user");
  div.appendChild(p); 
}

function buttonClick() {
    if (document.getElementById("inputName").value == ''){
      localStorage.setItem('name', "Привет, Незакомец!");
    } 
    else{ 
      let name = document.getElementById("inputName").value;
      localStorage.setItem('name', "Привет, " + name + "!");
    }

    //Очищая поле ввода
    inputName.value = '';

    //Удаляю из div user-name все дочерние параграфы перед установкой имени, чтобы строка имени была только одна 
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }

    setName();   
}

/*По умолчанию при каждом обновлении страницы устанавливается имя, сохранившееся в LocalStorage */
setName();

/* Всплывающее окно с объяснением решения----------*/
buttonNameSolution.addEventListener("click", buttonNameSolutionClick);
buttonNameClose.addEventListener("click", buttonNameCloseClick);
let dialog7 = document.getElementById('dialog-name');

//Ф-я открывает окно с объяснением
function buttonNameSolutionClick(){
  dialog7.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonNameCloseClick(){
  dialog7.close();
}
/*---------------------------------------------------------*/




/*Калькулятор--------------------------------------------- */
let divCalc = document.getElementById('fieldest__d-2-resCalc');
buttonCalc.addEventListener("click", buttonClickCalc);

function buttonClickCalc() {
  //Удаляю из div  все дочерние параграфы перед установкой значения, чтобы строка имени была только одна 
  while (divCalc.firstChild) {
    divCalc.removeChild(divCalc.firstChild);
  }

  //Считываю значения полей ввода и заношу в переменные
  let h = document.getElementById("inputHight").value;
  let b = document.getElementById("inputBottom").value;
  
  //Очищаю поля ввода 
  inputHight.value = ''; 
  inputBottom.value = '';

  let pCalc = document.createElement('p');
  
  //Проверяю строки на пустоту
  if(h == '' || b == ''){
    pCalc.textContent = "Вы не ввели строки";
    pCalc.setAttribute("class", "res-error");
    divCalc.appendChild(pCalc); 
  }

  //Проверяю не получился ли тип NaN в рез-те операции, обрабатываю ошибку
  else if(isNaN(h*b*0.5)){
    pCalc.textContent = "Проверьте правильность ввода данных";
    pCalc.setAttribute("class", "res-error");
    divCalc.appendChild(pCalc);
  }
  
  //Проверка на отрицательные значения площади
  else if(h <= 0 || b <= 0){
    pCalc.textContent = "Недопустимы отрицательные значения";
    pCalc.setAttribute("class", "res-error");
    divCalc.appendChild(pCalc); 
  }

  else{
    pCalc.textContent = h*b*0.5;
    pCalc.setAttribute("class", "res");
    divCalc.appendChild(pCalc);
  }
}

/* Всплывающее окно с объяснением решения----------*/
buttonCalcSolution.addEventListener("click", buttonCalcSolutionClick);
buttonCalcClose.addEventListener("click", buttonCalcCloseClick);
let dialog = document.getElementById('dialog-calc');

//Ф-я открывает окно с объяснением
function buttonCalcSolutionClick(){
    dialog.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonCalcCloseClick(){
  dialog.close();
}
/*---------------------------------------------------------*/



/*Сравнение строк--------------------------------------------- */
let divCompare = document.getElementById('fieldest__d-2-resCompare');
buttonCompare.addEventListener("click", buttonClickCompare);

function buttonClickCompare() {
  /*Удаляю из div  все дочерние параграфы перед установкой значения, чтобы строка имени была только одна */
  while (divCompare.firstChild) {
    divCompare.removeChild(divCompare.firstChild);
  }

  //Считываю значения полей ввода и заношу в переменные
  let str1 = document.getElementById("inputString1").value;
  let str2 = document.getElementById("inputString2").value;
  
  /*Очищаю поля ввода */
  inputString1.value = ''; 
  inputString2.value = '';

  let pCompare = document.createElement('p');

  if(str1 == '' || str2 == ''){
    pCompare.textContent = "Вы не ввели строки";
    pCompare.setAttribute("class", "res-error");
    divCompare.appendChild(pCompare); 
  }
  
  else if(str1.length === str2.length){
    pCompare.textContent = "True";
    pCompare.setAttribute("class", "res");
    divCompare.appendChild(pCompare);
  }
  else{
    pCompare.textContent = "False";
    pCompare.setAttribute("class", "res");
    divCompare.appendChild(pCompare);
  }
}

/* Всплывающее окно с объяснением решения----------*/
buttonCompareSolution.addEventListener("click", buttonCompareSolutionClick);
buttonCompareClose.addEventListener("click", buttonCompareCloseClick);
let dialog2 = document.getElementById('dialog-compare');

//Ф-я открывает окно с объяснением
function buttonCompareSolutionClick(){
  dialog2.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonCompareCloseClick(){
  dialog2.close();
}
/*---------------------------------------------------------*/



/*Min & max--------------------------------------------- */
let divSort = document.getElementById('fieldest__d-2-resSort');
buttonSort.addEventListener("click", buttonClickSort);

function buttonClickSort() {
  /*Удаляю из div  все дочерние параграфы перед установкой значения, чтобы строка имени была только одна */
  while (divSort.firstChild) {
    divSort.removeChild(divSort.firstChild);
  }

  let str = document.getElementById("inputArray").value;

  //Преобразую строку, которую считала в массив чисел
  let arr = str.split(' ').map(Number);
  
  //Очищаю поля ввода
  inputArray.value = ''; 

  let pError = document.createElement('p');
  let pMin = document.createElement('p');
  let pMax = document.createElement('p');
  
  //some() позволяет проверить соответствует ли по крайней мере один элемент в массиве условию, заданному в передаваемой функции 
  function checkArray( elem ) {
    return isNaN(elem); // проверяю есть ли в массиве хоть один эл-т не Number
  } 

  if(str  == ''){
    pError.textContent = "Вы не ввели строку";
    pError.setAttribute("class", "res-error");
    divSort.appendChild(pError);
  }
  // Проверяю соответствует ли по крайней мере один элемент в массиве условию, заданному в передаваемой функции 
  // Проверяю нет ли в массиве НЕ чисел
  else if (arr.some(checkArray)) {
    pError.textContent = "Проверьте правильность ввода";
    pError.setAttribute("class", "res-error");
    divSort.appendChild(pError);
  }
  else if (arr.length < 5) {
    pError.textContent = "Вы ввели меньше 5 значений";
    pError.setAttribute("class", "res-error");
    divSort.appendChild(pError);
  }
  else if (arr.length > 5) {
    pError.textContent = "Вы ввели больше 5 значений";
    pError.setAttribute("class", "res-error");
    divSort.appendChild(pError);
  }
  else{
    pMin.textContent = "Min: " + Math.min.apply(null, arr);
    pMax.textContent = "Max: " + Math.max.apply(null, arr);
    pMin.setAttribute("class", "res");
    pMax.setAttribute("class", "res");
    divSort.appendChild(pMin);
    divSort.appendChild(pMax);
  }
}

/* Всплывающее окно с объяснением решения----------*/
buttonSortSolution.addEventListener("click", buttonSortSolutionClick);
buttonSortClose.addEventListener("click", buttonSortCloseClick);
let dialog3 = document.getElementById('dialog-sort');

//Ф-я открывает окно с объяснением
function buttonSortSolutionClick(){
    dialog3.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonSortCloseClick(){
  dialog3.close();
}
/*---------------------------------------------------------*/



/*Секундомер--------------------------------------------- 
let timer2 = document.getElementById("timer");
let startStop = document.getElementById("startStop");
let reset = document.getElementById("resetStopwatch");

//в ф-ю Stopwatch() передаётся переменная, содержащая параграф, отображающий время секундомера
let stopwatch = new Stopwatch(timer2);

startStop.addEventListener("click", function() {
  /*stopwatch.isOn - флаг для проверки работает ли секундомер в данный момент
  По умолчанию возвращает false
  Если isOn вернёт true, в момент нажатия кнопки startStop, то вызовется ф-я stop, 
  тк true означало, что секундомер работал и его требуется остановить.
  Аналогично, если isOn вернёт false, то по нажатию кнопки секундомер запустится.
  
  stopwatch.isOn ? stop() : start();
});

function start() {
  startStop.value = "Пауза";
  stopwatch.start();
}
function stop() {
  startStop.value = "Продолжить";
  stopwatch.stop();
}

reset.addEventListener("click", function() {
  stopwatch.reset();
});

function Stopwatch(elem) {
  let time = 0;
  let offset;
  let interval;
  this.isOn = false;

  function update() {
    /*Date.now() возвращает количество миллисекунд, прошедших с 1 января 1970 
    let timePassed = Date.now() - offset;
    offset = Date.now();
    if (this.isOn) {
      time += timePassed;
    } 
    //Запись в параграф  прошедшего времени после его обработки в timeHandler
    elem.textContent = timeHandler(time); 
  }

  function timeHandler(time) {
    time = new Date(time);

    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let milliseconds = time.getMilliseconds().toString().slice(0,-1);// slice(0,-1) - отбрасывает последнее значение от милисекунд 

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
  };

  this.stop = function() {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
  };

  this.reset = function() {
    time = 0;
    startStop.value = "Старт";
    stopwatch.stop();
    elem.textContent = timeHandler(0);
  };
}
// Всплывающее окно с объяснением решения----------
buttonStopwatchSolution.addEventListener("click", buttonStopwatchSolutionClick);
buttonStopwatchClose.addEventListener("click", buttonStopwatchCloseClick);
let dialog4 = document.getElementById('dialog-stopwatch');

//Ф-я открывает окно с объяснением
function buttonStopwatchSolutionClick(){
  dialog4.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonStopwatchCloseClick(){
  dialog4.close();
}
/*---------------------------------------------------------*/




/*Тест--------------------------------------------- */
buttonTestReady.addEventListener("click", buttonTestReadyClick);

function buttonTestReadyClick(){
  //Переменная для подсчета првильных ответов
  let res = 0;
  /*1 вопрос----------- */
  if(document.getElementById('v1-1w').checked) {
    document.getElementById('label-v1-1w').style.color = "#fd3939f2";
    document.getElementById('label-v1-2w').style.color = '#ffffff';
    document.getElementById('label-v1-r').style.color = '#ffffff';
  }
  if(document.getElementById('v1-2w').checked) {
    document.getElementById('label-v1-1w').style.color = "#ffffff";
    document.getElementById('label-v1-2w').style.color = '#fd3939f2';
    document.getElementById('label-v1-r').style.color = '#ffffff';
  }
  if(document.getElementById('v1-r').checked) {
    res++;
    document.getElementById('label-v1-1w').style.color = "#ffffff";
    document.getElementById('label-v1-2w').style.color = '#ffffff';
    document.getElementById('label-v1-r').style.color = '#12e990';
  }
   /*2 вопрос----------- */

   if(document.getElementById('v2-1w').checked) {
    document.getElementById('label-v2-1w').style.color = "#fd3939f2";
    document.getElementById('label-v2-2w').style.color = '#ffffff';
    document.getElementById('label-v2-r').style.color = '#ffffff';
  }
  if(document.getElementById('v2-2w').checked) {
    document.getElementById('label-v2-1w').style.color = "#ffffff";
    document.getElementById('label-v2-2w').style.color = '#fd3939f2';
    document.getElementById('label-v2-r').style.color = '#ffffff';
  }
  if(document.getElementById('v2-r').checked) {
    res++;
    document.getElementById('label-v2-1w').style.color = "#ffffff";
    document.getElementById('label-v2-2w').style.color = '#ffffff';
    document.getElementById('label-v2-r').style.color = '#12e990';
  }

  /*3 вопрос----------- */

  if(document.getElementById('v3-1w').checked) {
    document.getElementById('label-v3-1w').style.color = "#fd3939f2";
    document.getElementById('label-v3-2w').style.color = '#ffffff';
    document.getElementById('label-v3-r').style.color = '#ffffff';
  }
  if(document.getElementById('v3-2w').checked) {
    document.getElementById('label-v3-1w').style.color = "#ffffff";
    document.getElementById('label-v3-2w').style.color = '#fd3939f2';
    document.getElementById('label-v3-r').style.color = '#ffffff';
  }
  if(document.getElementById('v3-r').checked) {
    res++;
    document.getElementById('label-v3-1w').style.color = "#ffffff";
    document.getElementById('label-v3-2w').style.color = '#ffffff';
    document.getElementById('label-v3-r').style.color = '#12e990';
  }

  /*4 вопрос----------- */

  if(document.getElementById('v4-1w').checked) {
    document.getElementById('label-v4-1w').style.color = "#fd3939f2";
    document.getElementById('label-v4-2w').style.color = '#ffffff';
    document.getElementById('label-v4-r').style.color = '#ffffff';
  }
  if(document.getElementById('v4-2w').checked) {
    document.getElementById('label-v4-1w').style.color = "#ffffff";
    document.getElementById('label-v4-2w').style.color = '#fd3939f2';
    document.getElementById('label-v4-r').style.color = '#ffffff';
  }
  if(document.getElementById('v4-r').checked) {
    res++;
    document.getElementById('label-v4-1w').style.color = "#ffffff";
    document.getElementById('label-v4-2w').style.color = '#ffffff';
    document.getElementById('label-v4-r').style.color = '#12e990';
  }

   /*5 вопрос----------- */

   if(document.getElementById('v5-w').checked) {
    document.getElementById('label-v5-w').style.color = '#fd3939f2';
    document.getElementById('label-v5-r').style.color = '#ffffff';
  }
  if(document.getElementById('v5-r').checked) {
    res++;
    document.getElementById('label-v5-w').style.color = "#ffffff";
    document.getElementById('label-v5-r').style.color = '#12e990';
  }

  /*6 вопрос----------- */

  if(document.getElementById('v6-1w').checked) {
    document.getElementById('label-v6-1w').style.color = "#fd3939f2";
    document.getElementById('label-v6-2w').style.color = '#ffffff';
    document.getElementById('label-v6-r').style.color = '#ffffff';
  }
  if(document.getElementById('v6-2w').checked) {
    document.getElementById('label-v6-1w').style.color = "#ffffff";
    document.getElementById('label-v6-2w').style.color = '#fd3939f2';
    document.getElementById('label-v6-r').style.color = '#ffffff';
  }
  if(document.getElementById('v6-r').checked) {
    res++;
    document.getElementById('label-v6-1w').style.color = "#ffffff";
    document.getElementById('label-v6-2w').style.color = '#ffffff';
    document.getElementById('label-v6-r').style.color = '#12e990';
  }

  /*7 вопрос----------- */

  if(document.getElementById('v7-1w').checked) {
    document.getElementById('label-v7-1w').style.color = "#fd3939f2";
    document.getElementById('label-v7-2w').style.color = '#ffffff';
    document.getElementById('label-v7-r').style.color = '#ffffff';
  }
  if(document.getElementById('v7-2w').checked) {
    document.getElementById('label-v7-1w').style.color = "#ffffff";
    document.getElementById('label-v7-2w').style.color = '#fd3939f2';
    document.getElementById('label-v7-r').style.color = '#ffffff';
  }
  if(document.getElementById('v7-r').checked) {
    res++;
    document.getElementById('label-v7-1w').style.color = "#ffffff";
    document.getElementById('label-v7-2w').style.color = '#ffffff';
    document.getElementById('label-v7-r').style.color = '#12e990';
  }

  /*8 вопрос----------- */

  if(document.getElementById('v8-1w').checked) {
    document.getElementById('label-v8-1w').style.color = "#fd3939f2";
    document.getElementById('label-v8-2w').style.color = '#ffffff';
    document.getElementById('label-v8-r').style.color = '#ffffff';
  }
  if(document.getElementById('v8-2w').checked) {
    document.getElementById('label-v8-1w').style.color = "#ffffff";
    document.getElementById('label-v8-2w').style.color = '#fd3939f2';
    document.getElementById('label-v8-r').style.color = '#ffffff';
  }
  if(document.getElementById('v8-r').checked) {
    res++;
    document.getElementById('label-v8-1w').style.color = "#ffffff";
    document.getElementById('label-v8-2w').style.color = '#ffffff';
    document.getElementById('label-v8-r').style.color = '#12e990';
  }

  /*9 вопрос----------- */

  if(document.getElementById('v9-1w').checked) {
    document.getElementById('label-v9-1w').style.color = "#fd3939f2";
    document.getElementById('label-v9-2w').style.color = '#ffffff';
    document.getElementById('label-v9-r').style.color = '#ffffff';
  }
  if(document.getElementById('v9-2w').checked) {
    document.getElementById('label-v9-1w').style.color = "#ffffff";
    document.getElementById('label-v9-2w').style.color = '#fd3939f2';
    document.getElementById('label-v9-r').style.color = '#ffffff';
  }
  if(document.getElementById('v9-r').checked) {
    res++;
    document.getElementById('label-v9-1w').style.color = "#ffffff";
    document.getElementById('label-v9-2w').style.color = '#ffffff';
    document.getElementById('label-v9-r').style.color = '#12e990';
  }

  /*10 вопрос----------- */

  if(document.getElementById('v10-1w').checked) {
    document.getElementById('label-v10-1w').style.color = "#fd3939f2";
    document.getElementById('label-v10-2w').style.color = '#ffffff';
    document.getElementById('label-v10-r').style.color = '#ffffff';
  }
  if(document.getElementById('v10-2w').checked) {
    document.getElementById('label-v10-1w').style.color = "#ffffff";
    document.getElementById('label-v10-2w').style.color = '#fd3939f2';
    document.getElementById('label-v10-r').style.color = '#ffffff';
  }
  if(document.getElementById('v10-r').checked) {
    res++;
    document.getElementById('label-v10-1w').style.color = "#ffffff";
    document.getElementById('label-v10-2w').style.color = '#ffffff';
    document.getElementById('label-v10-r').style.color = '#12e990';
  }
  

  let dTestRes = document.getElementById('test-res');
  let pTestRes = document.createElement('p');


  //Очищаю блок от предыдущих записей
  while (dTestRes.firstChild) {
    dTestRes.removeChild(dTestRes.firstChild);
  }

  pTestRes.textContent = "Ваш результат: " + res +"/10";

  pTestRes.setAttribute("class", "p-res-test");
  dTestRes.appendChild(pTestRes);
}

/* Всплывающее окно с объяснением решения----------*/
buttonTestSolution.addEventListener("click", buttonTestSolutionClick);
buttonTestClose.addEventListener("click", buttonTestCloseClick);
let dialog5 = document.getElementById('dialog-test');

//Ф-я открывает окно с объяснением
function buttonTestSolutionClick(){
  dialog5.showModal();
}

//Ф-я скрывает окно с объяснением
function buttonTestCloseClick(){
  dialog5.close();
}
/*---------------------------------------------------------*/




/*блок на весь экран--------------------------------------------- */

buttonInvisible.addEventListener("click", buttonInvisibleClick);

function buttonInvisibleClick(){
  let divInvisibleBlock = document.getElementById('super-div');

  //Удаляю предыдущие записи об имени и дате в блоке
  while ( divInvisibleBlock.firstChild) {
    divInvisibleBlock.removeChild( divInvisibleBlock.firstChild);
  }

  //Делает блок видимым 
  document.getElementById("super-div").style.display = "flex";
  
  //Запрет скроллинга
  disableScrolling();

  //Установка имени из LocalStorage в появляющийся на весь экран блок
  let pName = document.createElement('p');
  pName.textContent = localStorage.getItem('name');
  pName.setAttribute("class", "p-name-user-invisible-block");
  divInvisibleBlock.appendChild(pName); 

  //Установка даты в в появляющийся на весь экран блок
  let d = new Date(); 
  let pDate = document.createElement('p');
  pDate.textContent = "Сегодня " + formatDate(d);
  pDate.setAttribute("class", "p-name-user-invisible-block");
  divInvisibleBlock.appendChild(pDate); 
}

//Ф-я скрытого блока, которая по нажатию на блок скрывает его и разблокирует скроллинг
function visibilityFunction() {
  document.getElementById("super-div").style.display = "none";
  enableScrolling();
}

//Ф-я восстанавливает скроллинг экран
function enableScrolling(){
  window.onscroll=function(){};
}

//Ф-я останавливает скроллинг экрана
function disableScrolling(){
  let x=window.scrollX;
  let y=window.scrollY;
  window.onscroll=function(){
    window.scrollTo(x, y);
  };
}

//Ф-я форматирует дату в формат dd.mm.yy
function formatDate(date) {

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

/* Всплывающее окно с объяснением решения----------*/
buttonInvisibleSolution.addEventListener("click", buttonInvisibleSolutionClick);
buttonInvisibleClose.addEventListener("click", buttonInvisibleCloseClick);
let dialog6 = document.getElementById('dialog-invisible');

//Ф-я открывает окно с объяснением
function buttonInvisibleSolutionClick(){
  dialog6.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonInvisibleCloseClick(){
  dialog6.close();
}
/*---------------------------------------------------------*/








/*Таймер-------------------------------------------------- */
let isWorking = 0; //Если 0, то таймер не работает, переменная нужна для того, чтоб несколько раз подряд кнопку страт не тыкать и не ломать таймер
let startTime; //Начально заданное время для таймера
let time;

start1.addEventListener('click', start);
stop1.addEventListener('click', stop);
reset1.addEventListener('click', reset);
timePassed1.addEventListener('click', timePassed); 

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

/* Всплывающее окно с объяснением решения----------*/
buttonTimerSolution.addEventListener("click", buttonTimerSolutionClick);
buttonTimerClose.addEventListener("click", buttonTimerCloseClick);
let dialog8 = document.getElementById('dialog-timer');

//Ф-я открывает окно с объяснением
function buttonTimerSolutionClick(){
  dialog8.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonTimerCloseClick(){
  dialog8.close();
}
/*---------------------------------------------------------*/












