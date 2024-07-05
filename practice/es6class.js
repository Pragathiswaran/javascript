class Car {
    constructor(brand){
        this.carname = brand;
    }

    present(){
        return 'I have a ' + this.carname;
    }
}

class car1 extends Car{
    constructor(brand,mod){
        super(brand)
        this.model = mod
    }

    show(){
        return this.present() + " " + this.model
    }
}

const cars = new car1("audi","r8")
console.log(cars.show())