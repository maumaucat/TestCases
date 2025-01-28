// A Data Clump should be detected in the following code snippet between the classes Furniture and Table.
// The classes Furniture and Table have the same fields: material, color, hasStorage.
// It is unnecessary to have the same fields in both classes. The class Table should inherit the fields from the class Furniture.

class Furniture{
    private material: string;
    private color: string;
    private hasStorage: boolean;

    constructor(material: string, color: string, hasStorage: boolean){
        this.material = material;
        this.color = color;
        this.hasStorage = hasStorage;
    }
}

class Table extends Furniture{
    private numberOfLegs: number;
    private material: string;
    private color: string;
    private hasStorage: boolean;

    constructor(material: string, color: string, hasStorage: boolean, numberOfLegs: number){
        super(material, color, hasStorage);
        this.numberOfLegs = numberOfLegs;
    }
}

