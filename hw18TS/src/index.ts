/*
Объединение и пересечение типов
Создайте два типа: `Admin` и `User`.

Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк), а тип `User` должен включать поля `name` (строка) и `email` (строка).

Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.
*/

type Admin = {
    name: string
    permissions: string[]
}

type User = {
    name: string
    emai: string
}

type AdminUser = Admin & User

/**
 Вложенные объекты и опциональные поля

Создайте объект `Car` с полями `make` (строка), `model` (строка), и вложенным объектом `engine`, который имеет поля `type` (строка) и `horsepower` (число).

Добавьте опциональное поле `year` (число) для года выпуска машины.

Напишите функцию, которая выводит информацию о машине.
 */

type Car = {
    make: string
    model: string
    engine: Engine
    year?: Year
}

type Engine = {
    type: string
    horsepower: number
}
type Year = {
    year: number
}

const displayCarInfo = (car: Car): void => {
    console.log(`Car make ${car.make}, Car year ${car.year?.year}`);
}

const BMW: Car = {
    make: "3 Series",
    model: "Xdrive",
    engine: {
        type: "B58",
        horsepower: 500
    },
    year: {
        year: 2020
    }
}

displayCarInfo(BMW)

/*
Интерфейс для функции с объектом

Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` с полями `name` (строка) и `price` (число), а также параметр `discount` (число).

Функция должна возвращать новую цену продукта с учетом скидки.
*/

interface IProduct {
    name: string
    price: number
    discount: number
}

const calculateDiscount = (product: IProduct): string => {
    return (`${product.name} costs ${product.price} , and with discount will be ${product.price - (product.price * product.discount) / 100}`)
}

const women: IProduct = {
    name: "skirt",
    price: 500,
    discount: 30
}

console.log(calculateDiscount(women));
/**
Массив объектов и функции

Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число).

Создайте массив объектов `Employee`, затем напишите функцию, которая принимает этот массив и возвращает массив зарплат всех сотрудников.
 */

interface Employee {
    name: string
    salary: number
}

const employeesArray: Employee[] = [{ name: "Dmitrii", salary: 3000 }, { name: "Aleksey", salary: 2500 }, { name: "Nicolas", salary: 4000 }]

const calculateAllSallary = (arr: Employee[]) => {
    const sallary = arr.map((person) => `${person.name} : ${person.salary}`)
    console.log(sallary);

}
calculateAllSallary(employeesArray)

/*
Наследование интерфейсов и работа с объектами

Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).

Создайте интерфейс `Student`, который наследует `Person` и добавляет поле `grade` (число).

Создайте объект `student` этого типа и напишите функцию, которая выводит полное имя студента и его оценку.
*/

interface Person {
    firstName: string
    lastName: string
}

interface Student extends Person {
    grade: number
}

const student: Student = {
    firstName: "Dmitrii",
    lastName: "Osadcii",
    grade: 10
}

const displayStudentInfo = (student: Student): void => {
    console.log(student.firstName, student.lastName, student.grade)
}

displayStudentInfo(student)
/*
Интерфейс для функции с несколькими параметрами

Создайте интерфейс для функции `concatStrings`, которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.

Реализуйте эту функцию и протестируйте её.
*/

interface IconcatStrings {
    (a: string, b: string): string
}

const concatStrings: IconcatStrings = (a, b) => {
    return (a + b);
}

console.log(concatStrings("Hello", "Dmitrii"));
