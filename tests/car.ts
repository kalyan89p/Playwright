abstract class audioSystem{
    brand: string;
    constructor(brand: string){
        this.brand = brand;
    }   
        abstract audioSystemType(): void;
}
export abstract class car extends audioSystem {
    model: string;
    length: number;
    width: number;
    height: number;

    // Single constructor handling both no-arg and parameterized construction
    constructor(model?: string, length?: number, width?: number, height?: number,brand?: string) {
        // If no model provided, use default brand and default dimensions
        if (model === undefined) {
            super("TUMRI");
            this.model = "LorryDokku";
            this.length = 0;
            this.width = 0;
            this.height = 0;
            return;
        }

        // Parameterized construction
        super(brand ?? "TUMRI"); // Use provided brand or default to "TUMRI"    
        this.model = model;
        // Provide numeric defaults if undefined
        const L = length ?? 0;
        const W = width ?? 0;
        const H = height ?? 0;

        if (model.includes("Zxi")) {
            console.log("This is a Zxi variant of Maruti Ertiga");
            this.length = L + 10; // Adding 10 to the length for Zxi variant
            this.width = W + 20; // Adding 20 to the width for Zxi variant
            this.height = H + 30; // Adding 30 to the height for Zxi variant
            this.brand = "Bose"; // Changing the audio system brand for Zxi variant
        } else if (model.includes("Lxi")) {
            console.log("This is a Lxi variant of Maruti Ertiga");
            this.length = L - 5; // Subtracting 5 from the length for Lxi variant
            this.width = W - 10; // Subtracting 10 from the width for Lxi variant
            this.height = H - 15; // Subtracting 15 from the height for Lxi variant
            this.brand = "TUMRI"; // Keeping the default audio system brand for Lxi variant
        } else {
            this.length = L;
            this.width = W;
            this.height = H;
        }
    }

        abstract vehicleType(): void;
            audioSystemType(): void {
        console.log("tumri audio");
    }


}


// const teslaCar = new car("Tesla Model S", 40, 10, 10);
// console.log(`My car model is ${teslaCar.model}, with dimensions: ${teslaCar.length}m (L) x ${teslaCar.width}m (W) x ${teslaCar.height}m (H).`);
// const marutiCar = new car("Maruti Ertiga", 3, 10, 10);
// console.log(`My car model is ${marutiCar.model}, with dimensions: ${marutiCar.length}m (L) x ${marutiCar.width}m (W) x ${marutiCar.height}m (H).`);
// const marutiZxi = new car("Maruti Zxi", 30, 10, 10);
// console.log(`My car model is ${marutiZxi.model}, with dimensions: ${marutiZxi.length}m (L) x ${marutiZxi.width}m (W) x ${marutiZxi.height}m (H).`);
// const marutiLxi = new car("Maruti Lxi", 25, 10, 10);
// console.log(`My car model is ${marutiLxi.model}, with dimensions: ${marutiLxi.length}m (L) x ${marutiLxi.width}m (W) x ${marutiLxi.height}m (H).`); 
// console.log(`The audio system brand in my Tesla car is ${teslaCar.brand}.`);
// console.log(`The audio system brand in my Maruti Ertiga car is ${marutiCar.brand}.`);
// console.log(`The audio system brand in my Maruti Ertiga Zxi car is ${marutiZxi.brand}.`); 
// console.log(`The audio system brand in my Maruti Ertiga Lxi car is ${marutiLxi.brand}.`);