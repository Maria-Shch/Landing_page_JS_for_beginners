//Min & max--------------------------------------------- 

let divSort = document.getElementById('fieldest__d-2-resSort');
buttonSort.addEventListener("click", buttonClickSort);

function buttonClickSort() {
  /*Удаляю из div  все дочерние параграфы перед установкой значения, чтобы строка имени была только одна */
  while (divSort.firstChild) {
    divSort.removeChild(divSort.firstChild);
  }

  let str = document.getElementById("inputArray").value;

  //Преобразую строку, которую считала, в массив чисел
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
let dialogSort = document.getElementById('dialog-sort');

//Ф-я открывает окно с объяснением
function buttonSortSolutionClick(){
    dialogSort.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonSortCloseClick(){
  dialogSort.close();
}