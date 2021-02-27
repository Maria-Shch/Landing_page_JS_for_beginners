//Сравнение длины строк--------------------------------------------- 

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
let dialogCompare = document.getElementById('dialog-compare');

//Ф-я открывает окно с объяснением
function buttonCompareSolutionClick(){
  dialogCompare.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonCompareCloseClick(){
  dialogCompare.close();
}