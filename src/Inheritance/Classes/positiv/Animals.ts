// A Data Clump should be detected in the following code snippet between the functions Dog.runTo and Bird.flyTo.
// The functions Dog.runTo and Bird.flyTo have the same parameters: posX, posY, speed.
// The functions are not inherited from a common parent class.

class Animal {
    private age: number;
    private breed: string;

    constructor(age: number, breed: string) {
        this.age = age;
        this.breed = breed;
    }
}

class Dog extends Animal {
    private owner: string;

    constructor(age: number, breed: string, owner: string) {
        super(age, breed);
        this.owner = owner;
    }

    runTo(posX: number, posY : number, speed : number) {
        console.log(`Dog is running to ${posX}, ${posY} with speed ${speed}`);
    }
}

class Bird extends Animal {
    private wingspan: number;

    constructor(age: number, breed: string, wingspan: number) {
        super(age, breed);
        this.wingspan = wingspan;
    }

    flyTo(posX : number, posY : number, speed : number) {
        console.log(`Bird is flying to ${posX}, ${posY} with speed ${speed}`);
    }
}