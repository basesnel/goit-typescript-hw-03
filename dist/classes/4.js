/*
Ключ(Key): Створіть клас Key.У нього має бути одна приватна властивість signature,
яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()).
Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key
і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey,
який повертає збережений ключ.

Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door,
яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key.
У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants,
якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor,
який приймає об'єкт класу Key.

Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House.
Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем,
збереженим як key, то двері відчиняються.

Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій,
в якому людина приходить додому.

Наприклад, ось так:
*/
class Key {
    constructor() {
        this.signature = Math.trunc(Math.random() * 1000000);
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
            console.log(this.tenants);
        }
    }
    openDoor(key) { }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is opened');
        }
        else {
            this.door = false;
            console.log('The door is closed');
        }
    }
}
export { Key, Person, MyHouse };
//# sourceMappingURL=4.js.map