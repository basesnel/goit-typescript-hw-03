import { Manager } from './classes/2';
import { Wizard } from './classes/3';
const manager1 = new Manager('Alfred', 'Client-Service', 500);
console.log(manager1.getEmployeeDetails());
const wizard = new Wizard('Merlin', 15);
wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
//# sourceMappingURL=index.js.map