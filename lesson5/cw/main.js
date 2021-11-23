// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// const min = (a,b,c) => {
//     if(a<b&&a<c){
//         console.log(a)
//     }else if(b<a&&b<c){
//         console.log(b)
//     }else {
//         console.log(c)
//     }
// }
//
// min(1,4,6)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const max = (a,b,c) => {
//     if(a>b&&a>c){
//         console.log(a)
//     }else if(b>a&&b>c){
//         console.log(b)
//     }else {
//         console.log(c)
//     }
// }
//
// max(1,4,6)

// - створити функцію яка повертає найбільше число з масиву

// const max_arr = (arr) => {
//     let max=arr[0];
//     for (const arrElement of arr) {
//         if(arrElement>max){
//             max=arrElement
//         }
//     }
//
//     return max;
// }
//
// let array_test=[1,4,-10,20,0,45]
// console.log(max_arr(array_test))


// - створити функцію яка повертає найменьше число з масиву

// const min_arr = (arr) => {
//     let min=arr[0];
//     for (const arrElement of arr) {
//         if(arrElement<min){
//             min=arrElement
//         }
//     }
//
//     return min;
// }
//
// let array_test=[1,4,-10,20,0,45]
// console.log (min_arr(array_test));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const sum = (arr) => {
//     let counter=0;
//     for (const arrElement of arr) {
// counter=counter+arrElement
//     }
//
//     return counter;
// }
//
// let array_test=[1,4,-10,20,0,45]
// console.log(sum(array_test))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const average = (arr) => {
//     let counter=0;
//     for (const arrElement of arr) {
// counter=counter+arrElement
//     }
//
//     let result=counter/arr.length
//     return result;
// }
//
// let array_test=[1,4,-10,20,0,45]
// console.log(average(array_test));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const maxmin_array = (arr) => {
//     let min=arr[0];
//     let max=arr[0];
//
//     for (const arrElement of arr) {
//         if(arrElement<min){
//             min=arrElement
//         }
//         if(arrElement>max){
//             max=arrElement
//         }
//
//     }
//
//     return min
// }
//
//
// let array_test=[1,4,-10,20,0,45]
// console.log(maxmin_array(array_test));

// - створити функцію яка заповнює масив рандомними числами

// const random = (emptyArray) => {
//     for (let i = 0; i < 5; i++) {
//         emptyArray[i]=Math.round(Math.random()*100)
//     }
//
//     return emptyArray;
// }
//
// console.log(random([]))


// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// const random = (emptyArray, limit) => {
//     for (let i = 0; i < limit; i++) {
//         emptyArray[i]=Math.round(Math.random()*100)
//     }
//
//     return emptyArray;
// }
//
// console.log(random([],10);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

const reverse = (arr) => {
    let arr_new=[];
    for (let i = arr.length - 1, ri=0; i >= 0; i--,ri++) {
       arr_new[ri]=arr[i]
    }

    return arr_new

}
let array_test=[1,4,-10,20,0,45]
console.log(reverse(array_test));

