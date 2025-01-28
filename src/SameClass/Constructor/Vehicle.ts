// A Data Clump should be detected in the following code snippet between the classes Vehicle and its Constructor.
// The classes Vehicle and its Constructor have the same fields: model, year, ownerName.

class Vehicle {
    private model: string;
    private year: number;
    private ownerName: string;

    constructor(model: string, year: number, ownerName: string) {
        this.model = model;
        this.year = year;
        this.ownerName = ownerName;
    }
}