//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


function Cars(model, zavod, year, maxspeed, volume) {
    this.model = model;
    this.zavod = zavod;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.newMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let addCar = new Cars('Mazda', 'Japan', 2019, 230, 2.0);
console.log(addCar);
addCar.drive();
addCar.info();
addCar.newMaxSpeed(20);
addCar.drive();
addCar.changeYear(2011)
addCar.info();
addCar.addDriver('Era')
console.log(addCar)

// - (Те саме, тільки через клас)


class Cars_cl {
    constructor(model, producer, year, maxspeed, engineVal) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engineVal = engineVal;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    }
    newMaxSpeed (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}

let addCar2 = new Cars_cl('Mazda', 'Japan', 2019, 230, 2.0);
console.log(Cars_cl);
addCar.drive();
addCar.info();
addCar.newMaxSpeed(20);
addCar.drive();
addCar.changeYear(2011)
addCar.info();
addCar.addDriver('Era')
console.log(addCar2)


//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella{
    constructor(name,age,feet_size) {
        this.name=name;
        this.age=age;
        this.feet_size=feet_size;
    }
}

let Cinderella_array = [
    new Cinderella('lena',25,36),
    new Cinderella('nina',23,37),
    new Cinderella('ira',29,39),
    new Cinderella('lord',23,36),
    new Cinderella('ron',33,38),
    new Cinderella('harry',23,46),
    new Cinderella('ihor',44,39),
    new Cinderella('diana',27,26),
    new Cinderella('gain',53,36),
    new Cinderella('lena',23,33),
    new Cinderella('peter',28,36),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name,age,founded_size) {
        this.name=name;
        this.age=age;
        this.founded_size=founded_size;
    }
}

let prince1=new Prince('Vlad',28,33)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let couple =(Cinderella_array,prince1)=>{
    for (const girl of Cinderella_array) {
        if(girl.feet_size===prince1.founded_size){
            return girl.name
        }
    }
}


console.log("Your girl is "+couple(Cinderella_array,prince1))
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


let secondCheck = Cinderella_array.find((item) => item.feet_size === prince1.founded_size);
console.log(secondCheck.name);