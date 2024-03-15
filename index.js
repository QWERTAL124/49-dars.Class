'use strict'

// klass nomi har doim katta harfdan boshlab yoziladi
class Car{
    constructor(name,color,speed){
        this.name = name,
        this.color = color,
        this.speed = speed
    }

    calcSpeed(){
        return this.speed*100
    }
}

const forsche = new Car('Forsche','blue',200);
const merc = new Car('Merc','black',200);
console.log(forsche);
console.log(forsche.calcSpeed());
console.log(merc);

// Vorislash
//Spark nomli klass ochilyapti va u Car klassidan vorislanyapti.Carning har bir xususiyatini Spark klasi oladi
class Spark extends Car{
    constructor(name,color,speed,isAirbag,extraBallon){
        super(name,color,speed) // super metodi Cardagi metodlarni voris qilib olib kelish uchun
        this.isAirbag = isAirbag,
        this.extraBallon = extraBallon
    }
    logger(){
        console.log(`Name of car ${this.name} , color is ${this.color}. Is air bag ${this.isAirbag},ecxtra balloon ${this.extraBallon}`);
    }
}

const aboutcar = new Spark('Spark','White',true,5);
aboutcar.logger();
console.log(aboutcar.calcSpeed());
console.log(aboutcar);