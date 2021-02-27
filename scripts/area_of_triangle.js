//Посчитать площадь треугольника, получив от пользователя основание и высоту

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
let dialogCalc = document.getElementById('dialog-calc');

//Ф-я открывает окно с объяснением
function buttonCalcSolutionClick(){
    dialogCalc.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonCalcCloseClick(){
  dialogCalc.close();
}
/*---------------------------------------------------------*/