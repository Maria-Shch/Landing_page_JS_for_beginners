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
let dialogInvisible = document.getElementById('dialog-invisible');

//Ф-я открывает окно с объяснением
function buttonInvisibleSolutionClick(){
  dialogInvisible.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonInvisibleCloseClick(){
  dialogInvisible.close();
}