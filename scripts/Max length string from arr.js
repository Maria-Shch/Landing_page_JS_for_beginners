//Функция принимает массив строк, выводит самую длинную/ длинные

let divMLRes = document.getElementById('fieldest__d-2-resMaxLength');
let divML = document.getElementById('fieldest__d-2-strings');

buttonAddString.addEventListener("click", buttonAddStringClick);
buttonDeleteString.addEventListener("click", buttonDeleteStringClick);
buttonMaxLength.addEventListener("click", buttonMaxLengthClick);

let arr=[];

function buttonAddStringClick() {
    if(document.getElementById("inputStringArray").value.trim() != "")
    {
        arr.push(document.getElementById("inputStringArray").value.trim());
        stringOutput();
    }
    
    //Очищаю поле ввода
    document.getElementById("inputStringArray").value = '';
}

function buttonDeleteStringClick() {
    arr.pop();
    divML.removeChild(divML.lastChild);
}

function stringOutput() {
    let pML = document.createElement('p');
    pML.setAttribute("class", "res");

    pML.textContent = arr[arr.length-1];
    divML.appendChild(pML); 

    //Перед добавлением строки, следующим после вывода результата, очищаю блок, хранящий результат
    while (divMLRes.firstChild) {
        divMLRes.removeChild(divMLRes.firstChild);
    }
}

function buttonMaxLengthClick() {
    //Удаляю предыдущую запись о рез-те
    while (divMLRes.firstChild) {
        divMLRes.removeChild(divMLRes.firstChild);
    }

    //Очищаю блок, хранящий введённые строки
    while (divML.firstChild) {
        divML.removeChild(divML.firstChild);
    }

    //нахожу длину самой длинной строки
    let maxLength = arr.map(x => x.length).reduce((x, y) => x > y ? x : y, 0); 

    //Массив со строками максимальной длины
    //Добавляю в массив все строки с максимальной длиной
    let arrRes = arr.filter(x => x.length == maxLength); 

    arrRes.forEach(item => {
        let pMLRes = document.createElement('p');
        pMLRes.setAttribute("class", "res");
        pMLRes.textContent = item ;
        divMLRes.appendChild(pMLRes); 
    });
    
    //Очищаю массив значений после вывода результата
    arr = [];
}