// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone


function User (id, name, surname, email, phone){
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users =[
    new User(1,"Lola","Berk","berkin2s@gmail.com","+380639366128"),
    new User(2,"Lola","Berkins","berekins@gmail.com","+380639366228"),
    new User(3,"Lola","Berk","berkeins@gmail.com","+380639366328"),
    new User(4,"Lola","Clar","berkins@gmail.com","+380639366428"),
    new User(5,"Lola","Kerkins","berekins@gmail.com","+380639366528"),
    new User(6,"Lola","Darkins","berkinfs@gmail.com","+380639366228"),
    new User(7,"Lola","yerkins","berkcins@gmail.com","+380639366228"),
    new User(8,"Lola","Gerkins","berkinas@gmail.com","+380639366628"),
    new User(9,"Lola","Ferkins","beeerkins@gmail.com","+380636366228"),
    new User(10,"Lola","Jerkins","berkiiins@gmail.com","+380638366228"),
]

console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(value => value.id%2===0))


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a,b)=>a.id-b.id))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


// створити пустий масив, наповнити його 10 об'єктами Client

let Clients =[
    new Client(1,"Lola","Berk","berkin2s@gmail.com","+380639366128",["bread","banana"]),
    new Client(2,"Lola","Berkins","berekins@gmail.com","+380639366228",["bread","banana"]),
    new Client(3,"Lola","Berk","berkeins@gmail.com","+380639366328",["bread","banana"]),
    new Client(4,"Lola","Clar","berkins@gmail.com","+380639366428",["bread","banana"]),
    new Client(5,"Lola","Kerkins","berekins@gmail.com","+380639366528",["bread","banana","pineapple"]),
    new Client(6,"Lola","Darkins","berkinfs@gmail.com","+380639366228",["bread","ginger","banana"]),
    new Client(7,"Lola","yerkins","berkcins@gmail.com","+380639366228",["bread","banana"]),
    new Client(8,"Lola","Gerkins","berkinas@gmail.com","+380639366628",["soap","banana"]),
    new Client(9,"Lola","Ferkins","beeerkins@gmail.com","+380636366228",["cheese","banana"]),
    new Client(10,"Lola","Jerkins","berkiiins@gmail.com","+380638366228",["chips","banana"]),
]


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(Clients.sort((a,b)=>a.order.length-b.order.length))