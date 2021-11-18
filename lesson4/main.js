// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangle(a,b){
//     let result=a*b;
//     return result;
// }
//
//let rectangle_area=rectangle(2,4)
// console.log(rectangle_area)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle(r){
//     let result=3.14*r**2
//     return result
// }
// let circle_area=circle(3)
// console.log(circle_area)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function s(h,r){
//     const p=3.14
//     let result=2*p*h*r
//     return result
// }
//
// let cylinder_area= s(4,2);
// console.log(cylinder_area)




// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr1=["food", '9am', 3, true];
//
// function arr_el(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
//
// }
// arr_el(arr1)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text){
//     document.write(`<p>${text}</p>`)
// }
//
// paragraph("something")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ul(li) {
//     document.write(`<ul>`)
//     document.write(`<li>${li}</li>`)
//     document.write(`<li>${li}</li>`)
//     document.write(`<li>${li}</li>`)
//     document.write(`</ul>`)
//
// }
//
// ul("home")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function create_ul(li_text, quantity){
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${li_text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// create_ul('text', 4);

        
<!-- - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список-->

// function create_ul(li_text){
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

function post_profiles(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>${arr[i].id} - ${arr[i].name} - ${arr[i].age}</div>`)
    }
}

post_profiles(profile)