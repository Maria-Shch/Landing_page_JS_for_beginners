//Вывести на экран самый частовстречающийся символ в строке

let divMCSRes = document.getElementById('fieldest__d-2-resStringRep');
let divMCS = document.getElementById('fieldest__d-2-stringRep');

buttonRepeatRes.addEventListener("click", buttonRepeatResClick);


function buttonRepeatResClick() {
    //Удаляю предыдущую запись о рез-те
    while (divMCSRes.firstChild) {
        divMCSRes.removeChild(divMCSRes.firstChild);
    }

    //Очищаю блок, хранящий введённые строки
    while (divMCS.firstChild) {
        divMCS.removeChild(divMCS.firstChild);
    }

    if(document.getElementById("inputString").value.trim() != "")
    {
        let inputString = document.getElementById("inputString").value.trim();

        let pMCS = document.createElement('p');
        pMCS.setAttribute("class", "res");
        pMCS.textContent = inputString;
        divMCS.appendChild(pMCS);

        let set = searchChars(inputString); 

        for(let char of set){
            let pMCS = document.createElement('p');
            pMCS.setAttribute("class", "res");
            pMCS.textContent = char;
            divMCSRes.appendChild(pMCS);
        }
    }
    else
    {
        let pMCS = document.createElement('p');
        pMCS.setAttribute("class", "res-error");
        pMCS.textContent = "Вы не ввели строку";
        divMCS.appendChild(pMCS);
    }
    
    //Очищаю поле ввода
    document.getElementById("inputString").value = '';
}

//Ф-я принимает строку, возвращает Set с самым частовстречающемся символом/символами
function searchChars(string) {
    let charMap = new Map();
    let max = 0;
    let setMax = new Set();
 
    for (let char of string) { //Формирую Map (символ : частота символа в строке)
        if (charMap.has(char)) 
        {
            let x = charMap.get(char);
            x++;
            charMap.set(char, x);
        } 
        
        else charMap.set(char, 1);
    }

    
    for (let char of string) { //в max записываю самую высокую частоту
        if (charMap.get(char) > max) max = charMap.get(char);
    }

    for (let char of string) { //если значение совпадает с максимальной частотой, то добавляю ключ (символ) в Set
        if (charMap.get(char) == max) setMax.add(char);
    }
    
    return setMax;
}