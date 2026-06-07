
class javaoops{
    name: string;
    length: number;
    width: number;
    height: number;
    constructor(name: string,length: number, width: number, height: number){
        this.length = length;
        this.width = width;
        this.height = height;
        this.name = name;
    }
    volume(){
        return this.length*this.width*this.height;
    }
}

//const maruti = new car("Maruti Car");
//const tesla = new car("Tesla Car");
//const bmw = new car("BMW Car",10,15,20);
//console.log(bmw.volume());
export default javaoops;