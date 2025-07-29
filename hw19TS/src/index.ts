/*
Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.
*/

const sumEvenNumbers = (arr: number[]): number => {
    return arr.reduce((acc, num) => {
        if (num % 2 === 0) return acc + num
        return acc
    }, 0)
}
console.log(sumEvenNumbers([1, 4, 5, 6, 8, 3, 9]));
/**
 Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку и возвращает `boolean` (например, проверяет, является ли строка пустой). Реализуйте такую функцию.
 */

interface StringToBooleanFunction {
    (str: string): boolean
}

const isStringEmpty: StringToBooleanFunction = (str) => {
    return str.length === 0
}
console.log(isStringEmpty(""));
/*
Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean` (например, для проверки равенства строк). Напишите функцию, соответствующую этому типу.
*/

type CompareStrings = {
    (str1: string, str2: string): boolean
}

const areTheStringsSimilar: CompareStrings = (str1, str2) => {
    return str1.length === str2.length
}
console.log(areTheStringsSimilar("Hello", "heloo"));

/*
Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.
*/

const getLastElement = (arr: unknown[]): unknown => {
    return arr.pop()
}
console.log(getLastElement([1, 2, 'hello', false, undefined, {}]));

/*
Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.
*/

const makeTriple = <T>(first: T, second: T, third: T): T[] => {
    return [first,second,third]
}
console.log(makeTriple<number>(1,2,3));
