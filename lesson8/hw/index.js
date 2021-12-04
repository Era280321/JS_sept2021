// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"


let contentById = document.getElementById('content');
console.log(contentById);

// -- отримує текст з блоку з id "rules"

let contentById2 = document.getElementById('rules');
console.log(contentById2);

// -- замініть текст параграфа з id 'content' на будь-який інший

contentById.innerHTML = '<b>some text1</b>';

// -- замініть текст параграфа з id 'rules' на будь-який інший

contentById2.innerHTML = '<b>some text2</b>';

// -- змініть кожному елементу колір фону на червоний

let background =  document.body.children;
for (const el of background) {
    el.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій

let background2 =  document.body.children;
for (const el of background2) {
    el.style.backgroundColor = 'navy';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesId = document.getElementById('rules');
console.log(rulesId.classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let classRules = document.getElementsByClassName('fc_rules');
for (const el of classRules) {
    el.style.color = 'red'
}

