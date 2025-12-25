interface ICharacter {
    name: string;
    level: number;
    introduce?(phrase: string): void;
    castSpell?(): void;
}
interface ISpellCaster {
    levelUp(): void;
}
declare class Wizard implements ICharacter, ISpellCaster {
    name: string;
    level: number;
    constructor(name: string, level: number);
    introduce(phrase: string): void;
    castSpell(): void;
    levelUp(): void;
}
export { Wizard };
//# sourceMappingURL=3.d.ts.map