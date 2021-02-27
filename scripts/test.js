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
let dialogTest = document.getElementById('dialog-test');

//Ф-я открывает окно с объяснением
function buttonTestSolutionClick(){
  dialogTest.showModal();
}

//Ф-я скрывает окно с объяснением
function buttonTestCloseClick(){
  dialogTest.close();
}
