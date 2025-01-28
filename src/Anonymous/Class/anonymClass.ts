// A Data Clump should be detected in the following code snippet between the classes Vehicle and its Constructor.
// The classes Vehicle and its Constructor have the same fields: model, year, ownerName.
// A Data Clump should be detected in the following code snippet between the functions doSth and doSthSecret.
// The functions doSth and doSthSecret have the same parameters: param1, param2, param3.

let myClass = class {
    private age: number;
    private words: string[];
    public secretID: number;

    constructor() {
        console.log('This is an anonymous class');
    }

    public doSth(param1: string, param2: number, param3: boolean): void {
        console.log('Doing something');
    }
};

let mySecretClass = class {
    private age: number;
    private words: string[];
    public secretID: number;

    constructor() {
        console.log('This is a secret anonymous class');
    }

    public doSthSecret(param1: string, param2: number, param3: boolean): void {
        console.log('Doing something secret');
    }
};