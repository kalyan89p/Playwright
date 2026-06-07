// this is a keyword for  refering the current instance of the class.
// It is used to access properties and methods of the class within its own code. It helps to avoid naming conflicts and provides a way to refer to the current object when there are multiple objects or variables with similar names.
class Cheranjeevi {        
    cashInSwiss: number=100;
    propertyONE(): void {
        console.log(`Kokapeta Farm house`);
    }    
}
 
 
class Ramcharan extends Cheranjeevi {    
//overlaoding
    add(a: number, b: number): number
    add(a: number, b: number, c: number): number;
    add(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c;
        } else {
            return a + b;
        }
    }      
    
}
 
 
let rcobjt=new Ramcharan();
rcobjt.propertyONE();//Appollo Hospital " here parent class method is overridden by child class method and it is called as method overriding"