import { Manager } from './classes/2';
import { Wizard } from './classes/3';
import { Key, Person, MyHouse } from './classes/4';

const manager1 = new Manager('Alfred', 'Client-Service', 500);
console.log(manager1.getEmployeeDetails());

const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16

const key = new Key();
const person1 = new Person(key);
const person2 = new Person(key);
console.log(key.getSignature());
console.log(person2.getKey());

const house = new MyHouse(key);

house.openDoor(person1.getKey());
house.openDoor(person2.getKey());

house.comeIn(person1);
house.comeIn(person2);
