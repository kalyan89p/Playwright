import { car } from "./car";

 class   lorry extends car {
    loadCapacity: number;   
    constructor(model?: string, length?: number, width?: number, height?: number, loadCapacity?: number, brand?: string) {
        super(model, length, width, height,brand);
        this.loadCapacity = loadCapacity ?? 0; // Default to 0 if loadCapacity is undefined
        
    }   
        vehicleType(): void {
        console.log("This is a lorry");
    }
}

const volvoLorry = new lorry("Volvo FH16", 20, 8, 10, 25,"JBL");
volvoLorry.vehicleType();
console.log(`My lorry model is ${volvoLorry.model}, with dimensions: ${volvoLorry.length}m (L) x ${volvoLorry.width}m (W) x ${volvoLorry.height}m (H), and load capacity of ${volvoLorry.loadCapacity} tons.`); 
console.log(volvoLorry.brand); // Accessing the inherited audio system brand from the car class
const normalLorry = new lorry();
normalLorry.vehicleType();
console.log(`My lorry model is ${normalLorry.model}, with dimensions: ${normalLorry.length}m (L) x ${normalLorry.width}m (W) x ${normalLorry.height}m (H), and load capacity of ${normalLorry.loadCapacity} tons.`); 
console.log(normalLorry.brand); // Accessing the inherited audio system brand from the car class