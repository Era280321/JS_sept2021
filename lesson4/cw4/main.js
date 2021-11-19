// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// function min(a,b,c) {
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

// function max(a,b,c) {
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

// function max_arr(arr) {
//     let max=arr[0];
//     for (const arrElement of arr) {
//         if(arrElement>max){
//             max=arrElement
//         }
//     }
//
//     console.log(max)
//     return max;
// }
//
// let array_test=[1,4,-10,20,0,45]
// max_arr(array_test)


// - створити функцію яка повертає найменьше число з масиву

// function min_arr(arr) {
//     let min=arr[0];
//     for (const arrElement of arr) {
//         if(arrElement<min){
//             min=arrElement
//         }
//     }
//
//     console.log(min)
//     return min;
// }
//
// let array_test=[1,4,-10,20,0,45]
// min_arr(array_test)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sum(arr) {
//     let counter=0;
//     for (const arrElement of arr) {
// counter=counter+arrElement
//     }
//
//     console.log(counter)
//     return counter;
// }
//
// let array_test=[1,4,-10,20,0,45]
// sum(array_test)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function average(arr) {
//     let counter=0;
//     for (const arrElement of arr) {
// counter=counter+arrElement
//     }
//
//     let result=counter/arr.length
//     console.log(result)
//     return result;
// }
//
// let array_test=[1,4,-10,20,0,45]
// average(array_test)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function maxmin_array(arr) {
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
//     console.log(max)
//     return min
// }
//
//
// let array_test=[1,4,-10,20,0,45]
// maxmin_array(array_test)

// - створити функцію яка заповнює масив рандомними числами

// function random(emptyArray) {
//     for (let i = 0; i < 5; i++) {
//         emptyArray[i]=Math.round(Math.random()*100)
//     }
//
//     console.log(emptyArray);
//     return emptyArray;
// }
//
// random([])


// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function random(emptyArray, limit) {
//     for (let i = 0; i < limit; i++) {
//         emptyArray[i]=Math.round(Math.random()*100)
//     }
//
//     console.log(emptyArray);
//     return emptyArray;
// }
//
// random([],10)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
function reverse(arr) {
    let arr_new=[];
    for (let i = arr.length - 1, ri=0; i >= 0; i--,ri++) {
       arr_new[ri]=arr[i]
    }

    console.log(arr_new)
    return arr_new

}
let array_test=[1,4,-10,20,0,45]
reverse(array_test)

