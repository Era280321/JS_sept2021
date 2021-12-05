//
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

//
// let btn=document.getElementsByTagName('button')[0]
// let input=document.getElementsByTagName('input')
//
//
// btn.onclick = function () {
//     for (const argument of input) {
//         console.log(argument.value)
//     }
//
// }

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Create table';
// document.body.append(inputOne, inputTwo, inputThree, button);
//
//
// button.addEventListener('click', function () {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let enterText = inputThree.value;
//
//     function generationTable(tr, td, inner) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '1px solid red';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid blue';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green';
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     generationTable(tr, td, enterText);
// })
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// let words = ['куріпка', 'свиня', 'свиня'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Check';
// document.body.appendChild(input);
// document.body.appendChild(button);
//
// button.addEventListener('click', function () {
//     let valueInput = input.value;
//
//     for (let word of words) {
//         if (word === valueInput) {
//             alert('Bad word');
//             input.value = '';
//             return;
//         }
//     }
//
//     if (valueInput) {
//         alert('Good');
//         input.value = '';
//     }
// })
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//

let words = ['курва', 'дупа', 'мудак'];
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Checking';
document.body.append(input, button);

button.addEventListener('click', function () {
    let valueInput = input.value;
    for (let word of words) {
        if (valueInput.indexOf(word)>= 0) {
            alert('Bad word');
            input.value = '';
            return;
        }
    }

    if (valueInput) {
        alert('Good');
        input.value = '';
    }
})

