declare class Employee {
    name: string;
    department: string;
    salary: number;
    constructor(name: string, department: string, salary: number);
    getEmployeeDetails(): string;
}
declare class Manager extends Employee {
    constructor(name: string, department: string, salary: number);
}
export { Manager };
//# sourceMappingURL=2.d.ts.map