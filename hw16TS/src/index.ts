/* Функция приветствия
Напишите функцию `greetUser`, которая принимает имя пользователя (строка) и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.
 */

const greetUser = (name: string): void => {
    console.log(`Hello ${name}`);
}

/*
Типизация функции с объектом в качестве параметра

Создайте интерфейс `Person`, который описывает человека с полями `name`, `age`, и `city`.

Напишите функцию `printPersonInfo`, которая принимает объект типа `Person` и выводит информацию о человеке в формате: `"Имя: <name>, Возраст: <age>, Город: <city>"`.

*/

interface Person {
    name: string;
    age: number;
    city: string
}

const printPersonInfo = (person: Person): void => {
    console.log(`Name - ${person.name} , Age - ${person.age}, City - ${person.city}`);
}

const Dmitrii: Person = {
    name: "Dmitrii",
    age: 24,
    city: "Nice"
}

/*
Простая типизация для числового параметра

Напишите функцию `squareNumber`, которая принимает число и возвращает его квадрат. Используйте строгую типизацию.
*/

const squareNumber = (number: number): number => {
    return number * number
}

/*
Типизация функции с boolean

Напишите функцию `isEven`, которая принимает число и возвращает `true`, если число четное, и `false`, если нечетное. Используйте строгую типизацию.
*/
const isEven = (numb: number): boolean => {
    return numb % 2 === 0
}

/*
Создание интерфейса для объекта

Создайте интерфейс `Student`, который описывает студента с полями `name` (строка) и `grade` (число).

Напишите функцию `printStudentInfo`, которая принимает объект типа `Student` и выводит информацию о студенте в формате: `"Студент: <name>, Оценка: <grade>"`.
*/

interface Student {
    name: string;
    grade: number
}

const printStudentInfo = (student: Student): void => {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

const dmitrii: Student = {
    name: "Dmitrii",
    grade: 10
}

/*
Функция с типом `void`

Напишите функцию `logMessage`, которая принимает строку и выводит её в консоль без возвращаемого значения. Используйте тип `void`.
 */

const logMessage = (text: string): void => {
    console.log(text);
}