/*
Абстрактный класс Animal
Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal` и реализуют метод `makeSound()` по-своему (`Dog` должен возвращать "Bark", а `Cat` — "Meow").

Создайте массив типа `Animal[]`, включающий объекты `Dog` и `Cat`, и вызовите метод `makeSound()` для каждого элемента массива.
*/

abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("The dog is barking");

    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('The cat is meowing');
    }
}

const animals: Animal[] = [new Dog(), new Cat]
// animals.forEach(animal => animal.makeSound())

/*
Абстрактный класс Shape с цветом
Создайте абстрактный класс `ColoredShape`, который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.

Реализуйте классы `ColoredCircle` и `ColoredRectangle`, которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.

Выведите площадь и цвет для каждого объекта.
*/

abstract class Shape {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

abstract class ColoredShape extends Shape {
    abstract color: string
}
class ColoredCircle extends ColoredShape {
    radius: number
    color: string;

    constructor(radius: number, color: string) {
        super("Circle")
        this.color = color
        this.radius = radius
    }
    calculateArea(): number {
        return Math.floor(Math.PI * this.radius ** 2)
    }
}
class ColoredRectangle extends ColoredShape {
    width: number
    height: number
    color: string

    constructor(width: number, height: number, color: string) {
        super("Rectangle")
        this.height = height
        this.width = width
        this.color = color

    }
    calculateArea(): number {
        return this.width * this.height
    }
}

const circle = new ColoredCircle(15, "black")
// console.log(circle.calculateArea());
const rectangle = new ColoredRectangle(15, 20, "white")
// console.log(rectangle.calculateArea());

/*
Абстрактный класс Appliance
Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.

Затем создайте классы `WashingMachine` и `Refrigerator`, которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`, выводя соответствующие сообщения.

Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`, и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.
*/

abstract class Appliance {
    abstract turnOn(): void
    abstract turnOff(): void
}

class WashingMachine extends Appliance {
    turnOff(): void {
        console.log("The Washing Machine is turned off");

    }
    turnOn(): void {
        console.log("The Washing Machine is turned on");
    }
}
class Refrigerator extends Appliance {
    turnOff(): void {
        console.log("The Refrigerator is turned off");

    }
    turnOn(): void {
        console.log("The Refrigerator is turned on");
    }
}

const appliance: Appliance[] = [new Refrigerator(), new WashingMachine()]
// const element = appliance.forEach((appliance) => { appliance.turnOff(); appliance.turnOn() })

/*
Абстрактный класс Account
Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)` и `withdraw(amount: number)`.

Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.

В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.

В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии. 

Проверьте работу методов на объектах обоих классов.
*/

abstract class Account {
    protected balance: number = 0

    constructor(balance: number) {
        this.balance = balance
    }

    abstract deposit(amount: number): number
    abstract withdraw(amount: number): number

    showBalance() {
        return this.balance
    }
}

class SavingsAccount extends Account {
    percent: number
    constructor(balance: number, percent: number) {
        super(balance)
        this.percent = percent
    }
    deposit(amount: number): number {
        this.balance += amount
        console.log(`deposit succesfully ${amount} to the card . Current balance: ${this.showBalance()}`);
        return this.showBalance()
    }
    withdraw(amount: number): number {
        if (amount > this.balance) {
            console.log(`insuficient withdraw amoint. Current balance: ${this.balance}`);
        }
        this.balance -= amount
        console.log(`Successfully withdraw completed . Current balance: ${this.balance}`);
        return this.showBalance()
    }
    showPercent(): number {
        const additionalPercent = (this.balance * this.percent / 100)
        this.balance += additionalPercent
        console.log(`Percent of this amount is ${additionalPercent}. Current balance ${this.showBalance()}`);

        return this.showBalance()
    }
}
class CheckingAccount extends Account {
    private comission: number;

    constructor(balance: number, comission: number) {
        super(balance)
        this.comission = comission
    }

    deposit(amount: number): number {
        this.balance += amount
        console.log(`deposit succesfully ${amount} to the card . Current balance: ${this.showBalance()}`);
        return this.showBalance()
    }

    withdraw(amount: number): number {
        const withwdrawWithComission = amount + (amount * this.comission) / 100
        if (withwdrawWithComission > this.balance) {
            console.log(`Insuficient funds to withdraw `);
            return this.showBalance()
        }
        this.balance -= withwdrawWithComission
        console.log(`Commision - ${amount * this.comission / 100}. Withdraw is ${amount}. Current balance: ${this.showBalance()}`);

        return this.showBalance()
    }
}

const mySavingsAccount = new SavingsAccount(2000, 12);
mySavingsAccount.deposit(1000);
mySavingsAccount.withdraw(100);
mySavingsAccount.showPercent();

const myCheckingAccount = new CheckingAccount(1500, 1);
myCheckingAccount.deposit(200);
myCheckingAccount.withdraw(150);

/*
Абстрактный класс Media
Создайте абстрактный класс `Media` с абстрактным методом `play()`.

Затем создайте классы `Audio` и `Video`, которые наследуют `Media` и реализуют метод `play()` по-своему (например, `Audio` выводит "Playing audio", а `Video` — "Playing video").

Создайте массив типа `Media[]`, включающий объекты `Audio` и `Video`, и вызовите метод `play()` для каждого элемента массива.
*/

abstract class Media {
    abstract play(): void;
}

class myAudio extends Media {
    play(): void {
        console.log("Playing audio");
    }
}
class myVideo extends Media {
    play(): void {
        console.log("Playing video");

    }
}

const media: Media[] = [new myAudio(), new myVideo()]

const element = media.forEach((element) => element.play())