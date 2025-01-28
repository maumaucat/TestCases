// A Data Clump should be detected in the following code snippet between the classes Item and the anonymous class.
// The classes Item and the anonymous class have the same fields: pixelSize, color, price.
// It is unnecessary to have the same fields in both classes. The anonymous class should inherit the fields from the class Item.
// No Data Clump should be detected between the functions changeColor since the anonymous class is overriding the inherited class.

class Item{

    private pixelSize: number;
    private color: string;
    private price: number;

    public changeColor(r : number, g : number, b : number) {
        this.color = `rgb(${r}, ${g}, ${b})`;
    }

}

let myItem = new class extends Item{

    private pixelSize: number;
    private color: string;
    private price: number;

    constructor(pixelSize: number, color: string, price: number){
        super();
        this.pixelSize = pixelSize;
        this.color = color;
        this.price = price;
    }

    public changeColor(r : number, g : number, b : number) {
        this.color = `redGreenBlue(${r}, ${g}, ${b})`;
    }
}