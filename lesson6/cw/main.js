//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let name = (string, symbol) => {
//     let newArr = [];
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         return newArr.join(' ')
// }
//
// console.log(name(n1,"."))



//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


function random(length) {
    let emptyArray=[];
    for (let i = 0; i < length; i++) {
        emptyArray[i]=Math.round(Math.random()*100)
    }

    console.log(emptyArray);
    return emptyArray;
}

let arr = random(10)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа


console.log(arr.sort((a,b)=>a-b))
console.log(arr.sort((a,b)=>b-a))

console.log((arr.filter(value => value%2===0&&value!==0)))


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


console.log(arr.map(value => value.toString()))



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//

let sortNums = (arr, direction) =>{
if(direction="ascending"){
    arr.sort((a,b)=>a-b)
}
if(direction="descending"){
    arr.sort((a,b)=>b-a)
}
}

sortNums(arr,"descending")


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a,b) =>b.monthDuration-a.monthDuration));

console.log(coursesAndDurationArray.filter((value) =>{
    return value.monthDuration >5;
} ))
