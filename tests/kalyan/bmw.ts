import { javaoops } from "./javaoops";
class bmw extends javaoops {
    
    constructor(name: string,length: number, width: number, height: number){
        super(name,length, width, height);
    }
}

const bmwCar = new bmw("BMW Car",10,15,20);
