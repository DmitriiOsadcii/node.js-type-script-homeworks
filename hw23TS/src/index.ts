/*
Обработка цепочки промисов с `async/await`
Создайте несколько функций, которые возвращают промисы с разным временем выполнения.

Напишите функцию, которая вызывает эти промисы поочерёдно, используя `await`, и обрабатывает результаты каждой операции.

Убедитесь, что цепочка промисов выполняется последовательно.
*/

const getPromise = (delay: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise is fullfiled with delay ${delay}`);
        }, delay);
    });
};

const getAllPromisesAlternately = async (): Promise<void> => {
    const result1: string = await getPromise(2000)
    console.log(`Promise 1 : result: ${result1}`);

    const result2: string = await getPromise(2500)
    console.log(`Promise 2 : result: ${result2}`);

    const result3: string = await getPromise(3000)
    console.log(`Promise 3 : result: ${result3}`);

}
// getAllPromisesAlternately()

/*
Асинхронная обработка данных из массива
Напишите функцию, которая принимает массив строк.

Каждая строка будет асинхронно обрабатываться (например, преобразовываться в верхний регистр с задержкой).

Используйте `Promise.all` для выполнения всех операций параллельно и вывода всех результатов.
*/

const getPromiseUpperCase = async (str: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(str.toUpperCase())
        }, 2000)
    })
}

const getAllPromises = async (arr: string[]): Promise<void> => {
    const promise: Promise<string>[] = arr.map(getPromiseUpperCase)
    const result: string[] = await Promise.all<Promise<string>[]>(promise)
    console.log(result);
}
// getAllPromises(["hello", "My mom", "is very good"])

/*
Обработка ошибки в параллельных промисах

Напишите функцию, которая вызывает три промиса параллельно с помощью `Promise.all`.

Один из промисов должен намеренно завершиться с ошибкой через `reject`. 

Обработайте эту ошибку с использованием `try/catch` и выведите соответствующее сообщение.
*/

const firstPromise: Promise<string> = new Promise((resolve, reject) => {
    resolve(`The 1st promises is done`)
})

const secondPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`The 2nd promise is done with 1 sec delay`)
    }, 1000)
})

const thirdPromise: Promise<string> = new Promise((resolve, reject) => {
    reject(`The 3rd promise is done`)
})

const getPromisesAlternately = async (a: Promise<string>, b: Promise<string>, c: Promise<string>): Promise<void> => {
    try {
        const result: string[] = await Promise.all<Promise<string>[]>([a, b, c])
        console.log(`All promises: ${result}`);
    } catch (error) {
        console.log(`An error occured ${error}`);
    }
}
getPromisesAlternately(firstPromise, secondPromise, thirdPromise)

/*
Асинхронная функция с динамическим временем выполнения
Напишите асинхронную функцию, которая принимает массив чисел.

Для каждого числа создайте промис, который будет завершаться через количество миллисекунд, равное значению числа.

Используйте `Promise.all` для ожидания завершения всех промисов и вывода результатов в консоль.
*/

const asyncFunctionPromises = async (arr: number[]): Promise<void> => {
    const promiseArr: Promise<string>[] = arr.map<Promise<string>>((num: number) => getPromise(num))

    const result: string[] = await Promise.all(promiseArr)
    console.log(result);

}
asyncFunctionPromises([1111,2222,3333,4444])