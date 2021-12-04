// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//

// let click = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     click.style.display = 'none';
// }


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let button = document.getElementById('button');
// button.onclick = function () {
//     button.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

document.getElementById('button1').onclick = function () {
  let age =   document.getElementById('age').value;
    if (!age) {
        alert('Wrong input');
    } else if (+age < 18) {
        alert('Too young');
    } else {
        alert('You are in!');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
//
let menuElement = document.getElementsByTagName(`ul`)[0];
let titleElement = document.getElementsByClassName('title')[0];

titleElement.onclick = function () {

        if (menuElement.style.display === "none") {
            menuElement.style.display = "block";
        } else {
            menuElement.style.display = "none";
        }

};
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//

let comments = [
    {title: 'Health', body: 'lorem ipsum dolo sit ameti'},
    {title: 'Friends', body: 'lorem ipsum dolo sit'},
    {title: 'Sleep', body: 'lorem ipsum '},
];

let divFather = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');

    h3.innerText = item.title;
    p.innerHTML = item.body;
    btn.innerHTML = 'Закрий мене'

    btn.onclick = function () {
        console.log(45)

        if (h3.style.display === "none") {
            h3.style.display = "block";
            p.style.display = "block";
        } else {
            h3.style.display = "none";
            p.style.display = "none";
        }

    };


    div.append(h3, p, btn);
    divFather.append(div);
}
document.body.appendChild(divFather)


