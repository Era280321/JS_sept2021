//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//
let main_header = document.getElementById('main_header');
main_header.classList.add('sep-2021')

// b) робить шириниу елементу ul 400px

let ul=document.getElementsByTagName('ul');
console.log(ul)
ul[0].style.width ='400px';
ul[0].style.border='1px solid red'

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList=document.getElementsByClassName('linkList');

for (const linkListElement of linkList) {
    linkListElement.style.width='50%';
    linkListElement.style.border='1px solid red'
}

// d) отримує текст який зберігається в елементі з класом listElement2

let listElement2 = document.getElementsByClassName('listElement2')
console.log(listElement2)
console.log(listElement2[0].innerHTML)

// e) отримує всі елементи li та змінює ім колір фону на сірий

let allLi=document.getElementsByTagName('li')
for (const allLiElement of allLi) {
    allLiElement.style.backgroundColor='gray'
}
// f) отримує всі елементи 'a' та додає їм клас anchor

let alla=document.getElementsByTagName('a')
for (const allaElement of alla) {
   allaElement.classList.add('anchor')
}
console.log(alla)

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let aAllElement of alla) {
    console.log(aAllElement);
    if (aAllElement.innerText === 'link3') {
        aAllElement.style.fontSize = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (let aAllElement of alla) {
    console.log(aAllElement);
    aAllElement.classList.add(`element_${aAllElement.innerText}`)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let allSubHeader = document.getElementsByClassName('sub-header');
// for (const allSubHeaderElement of allSubHeader) {
//     allSubHeaderElement.style.backgroundColor=prompt('Enter color')
// }

// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// for (const allSubHeaderElement of allSubHeader) {
//     if(allSubHeaderElement.innerText==='content 2 segment'){
//         allSubHeaderElement.style.color=prompt('Enter color');
//     }
// }



// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let content_1=document.getElementsByClassName('content_1')
// content_1[0].innerText=prompt('Enter text')

// l) отримати елементи p та змінити їм padding на 20px

let allp=document.getElementsByTagName('p')
for (const allpElement of allp) {
    allpElement.style.padding='20px'
    allpElement.style.border='1px solid blue'
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
let text2 = document.getElementsByClassName('text2 ')

text2[0].innerText='sep-2021'