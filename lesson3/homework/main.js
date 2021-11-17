// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number=[1,4,5,8,3];
// let text=["see","do","fly","grow","search"];
// let combo=["small",3,true,"big",false]
//
// console.log(number);
// console.log(text);
// console.log(combo);



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr=[];
// arr[0]="text";
// arr[1]="2";
// arr[2]=4;
// arr[4]=true;
//
// console.log(arr)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// for (let i=0;i < 10;i++){
//     document.write("<div>item</div>")
// }

// for (let i=0;i < 10;i++){
//     document.write(`<div>text${i}</div>`)
// }
//
// let i=0;
// while (i < 20){
//     i++
//     document.write(`<header>header</header>`)
// }
//
// let i=0;
// while (i < 20){
//     i++
//     document.write(`<header>header${i}</header>`)
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let num=[2,5,6,3,7,4,5,8,9,11];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }

// let items=["apple","raspberry","blueberry","pear","orange","mandarin","lychee","banana","grape","persimmon"];
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i])
//
// }
//
// let combo=[2,5,"raspberry","blueberry",7,4,5,true,9,11];
// for (let i = 0; i < combo.length; i++) {
//     console.log(combo[i])
// }
//
// let combo=[2,5,"raspberry","blueberry",7,[],5,true,9,11];
// for (let i = 0; i < combo.length; i++) {
//     if(typeof combo[i]==="boolean"){
//         console.log(combo[i]);
//     }
// }


// let combo=[2,5,"raspberry","blueberry",7,[],5,true,9,11];
// for (let i = 0; i < combo.length; i++) {
//     if(typeof combo[i]==="number"){
//         console.log(combo[i]);
//     }
// }

// let combo=[2,5,"raspberry","blueberry",7,[],5,true,9,11];
// for (let i = 0; i < combo.length; i++) {
//     if(typeof combo[i]==="string"){
//         console.log(combo[i]);
//     }
// }



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


// let arr=[];
// arr[0]=1;
// arr[1]="rainbow";
// arr[2]="snow";
// arr[3]={};
// arr[4]=[];
// arr[5]=true;
// arr[6]=false;
// arr[7]="two";
// arr[8]="melt";
// arr[9]=9;
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let  i=0; i<10;i++){
//     console.log(`counter ${i}`)
//    document.write(`<div> counter ${i} </div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for( let i=0; i<100;i++){
//     console.log(`counter ${i}`)
//     document.write(`<div> counter ${i} </div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i=0; i<100;i=i+2){
//     console.log(`counter ${i}`)
//     document.write(`<div> counter ${i} </div>`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for(let i=0; i<100;i++){
//     if(i % 2 == 0){
//         console.log(`counter ${i}`)
//         document.write(`<div> counter ${i} </div>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for(let i=0; i<100;i++){
    if(i % 2 !== 0){
        console.log(`counter ${i}`)
        document.write(`<div> counter ${i} </div>`)
    }
}