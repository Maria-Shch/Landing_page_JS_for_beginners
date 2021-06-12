//Проверить, являются ли строки анаграммами

let divAnagram = document.getElementById('fieldest__d-2-stringAnagram');

buttonAnagram.addEventListener("click", buttonAnagramClick);

function buttonAnagramClick() {

    //Очищаю блок, хранящий введённые строки
    while (divAnagram.firstChild) {
        divAnagram.removeChild(divAnagram.firstChild);
    }

    if(document.getElementById("inputAnagram1").value.trim() != "" &&  document.getElementById("inputAnagram2").value.trim()!= "")
    {
        let inputAnagram1 = document.getElementById("inputAnagram1").value.trim();
        let inputAnagram2 = document.getElementById("inputAnagram2").value.trim();

        //Передаю в ф-ю isAnagram любую из двух проверяемых строк, а также карту каждой строки
        let res = isAnagram(inputAnagram1, getMapOfChars(inputAnagram1), getMapOfChars(inputAnagram2));


        let pString1 = document.createElement('p');
        pString1.setAttribute("class", "res");
        pString1.textContent = "Первая строка: " + inputAnagram1;
        divAnagram.appendChild(pString1);

        let pString2 = document.createElement('p');
        pString2.setAttribute("class", "res");
        pString2.textContent = "Вторая строка: " + inputAnagram2;
        divAnagram.appendChild(pString2);
        
        let pAnagram = document.createElement('p');
        pAnagram.setAttribute("class", "res");
        pAnagram.textContent = res;
        divAnagram.appendChild(pAnagram);
    }
    else
    {
        let pAnagramError = document.createElement('p');
        pAnagramError.setAttribute("class", "res-error");
        pAnagramError.textContent = "Вы не ввели строку";
        divAnagram.appendChild(pAnagramError);
    }
    
    //Очищаю поля ввода
    document.getElementById("inputAnagram1").value = '';
    document.getElementById("inputAnagram2").value = '';
}

//Ф-я формирует Map для переданной строки
//Map (символ : частота символа в строке)

function getMapOfChars(string) {
    let charMap = new Map();

    for (let char of string) { 
        if (charMap.has(char)) //Проверяю есть ли уже такой символ в мапе (есть ли такой ключ)
        {
            let x = charMap.get(char); //Если символ уже есть, значение увеличиваю на 1
            x++;
            charMap.set(char, x);
        } 
        
        else charMap.set(char, 1); //Если символа - ключа нет, то записываю в мапу с начальный значением 1 
    }
    
    return charMap;
}

function isAnagram(string, Map1, Map2){
    let res = true;

    for (let char of string) {  
        if (Map1.has(char) && Map2.has(char)) //Если символ есть в обеих мапах, то проверяю совпадают ли значения по этому ключу
        {
            if (Map1.get(char) != Map2.get(char)) {
                res = false;
                break;
            }
        } 
        else {
            res = false;
            break;
        }
    }
    return res;
}
