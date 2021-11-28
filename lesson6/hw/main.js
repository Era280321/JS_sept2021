// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

//
// let valueOne = 'hello world';
// console.log(valueOne.length);
// console.log(valueOne.toUpperCase());
//
// let valueTwo = 'lorem ipsum';
// console.log(valueTwo.length);
// console.log(valueTwo.toUpperCase());
//
// let valueThree = 'javascript is cool';
// console.log(valueThree.length);
// console.log(valueThree.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


// let bigValueOne = 'HELLO WORLD';
// console.log(bigValueOne.toLowerCase());
//
// let bigValueTwo = 'LOREM IPSUM';
// console.log(bigValueTwo.toLowerCase());
//
// let bigValueThree = 'JAVASCRIPT IS COOL';
// console.log(bigValueThree.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

// let text=' dirty string   '
// console.log(text.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//

// let str = 'Каждый охотник желает знать';
//
// let stringToarray = (str) =>{
//     return str.split(' ');
// }
//
// let arr = stringToarray(str);
// document.writeln(arr);



//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// };
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 10));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) =>{
//     return str.split(' ').join("-");
// }
//
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str))


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let proper_case = (str) =>{
//     return str[0].toUpperCase() + str.slice(1);
// }
//
// let str = "something good"
// console.log(proper_case(str))
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let proper_case = (str) =>{
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// }
//
// let str = "something good"
// console.log(proper_case(str))