declare class Key {
    private signature;
    getSignature(): number;
}
declare class Person {
    private key;
    constructor(key: Key);
    getKey(): Key;
}
declare abstract class House {
    protected key: Key;
    protected door: boolean;
    private tenants;
    constructor(key: Key);
    comeIn(person: Person): void;
    openDoor(key: Key): void;
}
declare class MyHouse extends House {
    openDoor(key: Key): void;
}
export { Key, Person, MyHouse };
//# sourceMappingURL=4.d.ts.map