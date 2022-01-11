const Ninja = require('./ninja');

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log(`${this.name} said something wise, I bet.`)
    }
}

const kya = new Sensei("Kya");

kya.speakWisdom();
kya.showStats();
console.log(kya);