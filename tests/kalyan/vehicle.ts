class audioSystem{
    brand: string;
    constructor(brand: string){
        this.brand = brand;
    }
}
class vehicle {
    audio: audioSystem;
    name: string;
    length: number;
    width: number; 
    height: number;
    constructor(name: string, audio: audioSystem){
        this.audio = audio;
        this.name = name;
        this.length = 0;
        this.width = 0;
        this.height = 0;
        if(name === "Car"){         
            this.length = 5;
            this.width = 5;
            this.height = 5;
        }   
            else if(name === "Bike"){
            this.length = 2;
            this.width = 2;
            this.height = 2;
       }
       console.log("This is a method in constructor.");
    }
    methodinParentClass(): void {
    console.log("This is a method in the parent class.");
    }
}
const sony = new audioSystem("Sony");
const vehicle1 = new vehicle("Car", sony);
vehicle1.methodinParentClass();
console.log(`Vehicle Name: ${vehicle1.name}, Length: ${vehicle1.length}, Width: ${vehicle1.width}, Height: ${vehicle1.height}`);
const jbl = new audioSystem("JBL");
const vehicle2 = new vehicle("Bike", jbl);
console.log(`Vehicle Name: ${vehicle2.name}, Length: ${vehicle2.length}, Width: ${vehicle2.width}, Height: ${vehicle2.height}`);