/*
Типизация функции с несколькими параметрами
Напишите функцию `calculateTotal`, которая принимает три параметра:  

`price` (число)  
`quantity` (число)  
`discount` (число, по умолчанию равен 0)

Функция должна возвращать общую стоимость товаров с учетом скидки. Если скидка не указана, она считается равной нулю.
*/

const calculateTotal = (price: number, quantity: number, discount: number = 0): number => {
    return (price - (price * discount) / 100) * quantity
}

/*
Использование Union типов

Создайте переменную `id`, которая может быть либо строкой, либо числом.  

Напишите функцию `displayId`, которая принимает эту переменную и выводит сообщение, содержащее значение ID. Если `id` — строка, выведите её в верхнем регистре. Если `id` — число, умножьте его на 10 перед выводом.
*/

const id: string | number = 5

const displayId = (id: string | number): void => {
    typeof id === "string" ? console.log(id.toUpperCase()) : console.log(id * 10);
}
/*
Объявление и типизация массивов объектов

Создайте массив объектов `orders`, где каждый объект описывает заказ и содержит следующие свойства:  

`orderId` (строка)  
`amount` (число)  
`status` (строка, может принимать значения "pending", "shipped" или "delivered")

Напишите функцию `filterOrdersByStatus`, которая принимает этот массив и строку `status`, и возвращает массив заказов, соответствующих указанному статусу.
*/

type Status = "pending" | "shipped" | "delivered"
type Order = {
    orderId: string;
    amount: number;
    status: Status
}

const filterOrdersByStatus = (arr: Order[], status: Status): Order[] => {
    return arr.filter((item) => item.status === status)
}

const firstOrder: Order[] = [{ orderId: "Dmitrii", amount: 45, status: "pending" }, { orderId: "Nikolai", amount: 33, status: "shipped" }, { orderId: "Elena", amount: 43, status: "shipped" }]

console.log(filterOrdersByStatus(firstOrder, "shipped"));

/*
Работа с кортежами и объектами
Создайте кортеж `productInfo`, который содержит:  

название товара (строка)  
его цену (число)  
количество на складе (число)

Напишите функцию `updateStock`, которая принимает объект `inventory` (где ключ — это название товара, а значение — количество на складе) и кортеж `productInfo`, обновляет количество товара в объекте `inventory` и возвращает обновленный объект.
*/

type productInfo = [
    item: string,
    price: number,
    amountAtStore: number
]
interface Iinventory {
    [key: string]: number
}

const updateStock = (inventory: Iinventory, productInfo: productInfo): Iinventory => {
    const [item, price, amountAtStore] = productInfo;
    if (inventory[item]) {
        inventory[item] = amountAtStore
    }
    return inventory;
}

console.log(updateStock({ "t-shirt": 10 }, ["t-shirt", 5, 15]));
