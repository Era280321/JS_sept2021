//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// class Person{
//     constructor(name,username,email,addressStreet,suite,city, zipcode,lat,lng,phone,website,companyName,companyCatchPhrase,companybs) {
//         this.name=name;
//         this.username=username;
//         this.email=email;
//         this.address= {Street:addressStreet, suite:suite, city:city, zipcode:zipcode,geo:{
//                 lat:lat,lng:lng
//             }}
//         this.phone=phone;
//         this.website=website;
//         this.company={name:companyName,catchPhrase:companyCatchPhrase,bs:companybs
//
//         }
//     }
// }
//
// let person1 =new Person("Ira","Peris","iparis@gmail.com",'Kulas Light','Apt. 556',"Lviv",'92998-3874','-37.3159',"81.1496","1-770-736-8031 x56442","hildegard.org","Romaguera-Crona","Multi-layered client-server neural-net","harness real-time e-markets")
//
// console.log(person1)
//

function Record(name,username,email,address,phone,website,company) {
        this.name=name;
        this.username=username;
        this.email=email;
        this.address=address;
        this.phone=phone;
        this.website=website;
        this.company=company;
}

function Address(street,suite,city, zipcode,geo){
  this.street=street;
  this.suite=suite;
  this.city=city;
  this.zipcode=zipcode;
  this.geo=geo;
}

function Company(name,CatchPhrase,bs) {
    this.name=name;
    this.CatchPhrase=CatchPhrase;
    this.bs=bs
}

function geo(lat,lng) {
    this.lat=lat;
    this.lng=lng;
}

let record_one = new Record('Leanne Graham', 'Bret', 'Sincere@april.biz',new Address('Kulas Light','Apt. 556',"Lviv",'92998-3874',new geo('-37.3159',"81.1496")),'1-770-736-8031 x56442', 'hildegard.org', new Company("Romaguera-Crona","Multi-layered client-server neural-net","harness real-time e-markets"))

console.log(record_one)


// -  Створити функцію конструктор / клас  який описує об'єкт тегу

// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
function Tag (titleOfTag,action,attrs) {
    this.titleOfTag=titleOfTag;
    this.action=action;
    this.attrs=attrs;
}


function Attr (titleOfAttr,actionOfAttr){
    this.titleOfAttr=titleOfAttr;
    this.actionOfAttr=actionOfAttr;
}

let a=new Tag("a",
    "предназначен для создания ссылок",
    [new Attr("accesskey","Активация ссылки с помощью комбинации клавиш"),
          new Attr("coords", "Устанавливает координаты активной области"),
          new Attr("download", "Предлагает скачать указанный по ссылке файл")])
console.log(a)


let div=new Tag("div",
    "предназначен для выделения фрагмента документа с целью изменения вида содержимого",
    [new Attr("align","Задает выравнивание содержимого тега "),
        new Attr("title", "Добавляет всплывающую подсказку к содержимому")])
console.log(div)

let h1=new Tag("h1",
    "наиболее важный заголовок первого уровня",
    [new Attr("align","Определяет выравнивание заголовка ")])
console.log(h1)

let span=new Tag("span",
    "предназначен для определения строчных элементов документа",
    [new Attr("accesskey","Позволяет получить доступ к элементу с помощью заданного сочетания клавиш"),
        new Attr("class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением")])
console.log(span)

let input=new Tag("input",
    "создания текстовых полей, различных кнопок, переключателей и флажкова",
    [new Attr("accesskey","Позволяет получить доступ к элементу с помощью заданного сочетания клавиш"),
        new Attr("class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением")])
console.log(input)


let form=new Tag("form",
    " устанавливает форму на веб-странице",
    [new Attr("accesskey","Позволяет получить доступ к элементу с помощью заданного сочетания клавиш"),
        new Attr("class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением")])
console.log(form)

let option=new Tag("option",
    "определяет отдельные пункты списка",
    [new Attr("accesskey","Позволяет получить доступ к элементу с помощью заданного сочетания клавиш"),
        new Attr("class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением")])
console.log(option)

let select=new Tag("select",
    "позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором",
    [new Attr("accesskey","Позволяет получить доступ к элементу с помощью заданного сочетания клавиш"),
        new Attr("class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением")])
console.log(select)