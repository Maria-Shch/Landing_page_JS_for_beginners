//Пользователь вводит имя, имя сохраняется в LocalStorage и отображается на странице

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

// Всплывающее окно с объяснением решения----------
buttonNameSolution.addEventListener("click", buttonNameSolutionClick);
buttonNameClose.addEventListener("click", buttonNameCloseClick);
let dialogName = document.getElementById('dialog-name');

//Ф-я открывает окно с объяснением
function buttonNameSolutionClick(){
  dialogName.showModal();
}

//Ф-я закрывает окно с объяснением
function buttonNameCloseClick(){
  dialogName.close();
}
