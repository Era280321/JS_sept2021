// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// const rectangle = (a, b) => {
//     return a * b;
// }
// console.log(rectangle(2, 4));


// - створити функцію яка обчислює та повертає площу кола з радіусом r


// const circle = (r) =>{return 3.14*r**2}
//
// console.log(circle(3));



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const cylinder = (h,r) => {
//     return 2*3.14*h*r
// }
//
// console.log(cylinder(3,4));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr1=["food", '9am', 3, true];
//
// const splitArray = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
//
// splitArray(arr1);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// const paragraph = (text) =>{
//     document.write(`<p>${text}</p>`)
// }
// paragraph("something");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// const create_ul = (li_text) =>{
//     document.write(`<ul>`)
//     document.write(`<li>${li_text}</li>`)
//     document.write(`<li>${li_text}</li>`)
//     document.write(`<li>${li_text}</li>`)
//     document.write(`</ul>`)
// }
//
// create_ul("text");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const create_ul = (li_text, quantity) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${li_text}</li>`)
//     }
//     document.write(`/<ul>`)
// }
//
// create_ul('text', 4);


        
<!-- - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список-->

// const create_ul = (li_text) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i < li_text.length; i++) {
//         document.write(`<li>${li_text[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// let arr1=["food", '9am', 3, true,false];
//
// create_ul(arr1);


<!-- - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.-->


let profile=[{id:234,name: "A.A",age: 15},{id:235,name: "A.B",age: 16},{id:236,name: "A.V",age: 25}]

const post_profiles = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>${arr[i].id} - ${arr[i].name} - ${arr[i].age}</div>`)
    }
}

post_profiles(profile)