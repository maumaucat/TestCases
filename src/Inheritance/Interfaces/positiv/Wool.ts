// A Data Clump should be detected in the following code snippet between the classes Cotton and Woolen.
// The classes Cotton and Woolen have the same fields: fleece, fiberLength, hasSeeds that are not used in the class Wool.
// (No DataClump for the fields color, thickness, origin since they are used in the interface Wool)
// A Data Clump should be detected in the following code snippet between the functions wash of the classes Cotton and Woolen.
// The functions wash of the classes Cotton and Woolen have the same parameter: litersOfWater, chemicals, duration.
// The functions are not inherited from the interface Wool.

interface Wool {
    color: string;
    thickness: number;
    origin: string;

    getWoolInfo(): string;
}

class Cotton implements Wool {
    color: string;
    thickness: number;
    origin: string;

    fleece: string;
    fiberLength: number;
    hasSeeds: boolean;

    getWoolInfo(): string {
        return `Color: ${this.color}, Thickness: ${this.thickness}, Origin: ${this.origin}`;
    }

    wash(litersOfWater: number, chemicals: string[], duration: number): void {
        console.log(`Washing cotton with ${litersOfWater} liters of water, ${chemicals} and for ${duration} minutes`);
    }
}

class Woolen implements Wool {
    color: string;
    thickness: number;
    origin: string;
    
    fleece: string;
    fiberLength: number;
    hasSeeds: boolean;

    getWoolInfo(): string {
        return `Color: ${this.color}, Thickness: ${this.thickness}, Origin: ${this.origin}`;
    }

    wash(litersOfWater: number, chemicals: string[], duration: number): void {
        console.log(`Washing wool with ${litersOfWater} liters of water, ${chemicals} and for ${duration} minutes`);
    }
}