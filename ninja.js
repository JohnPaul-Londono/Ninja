class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName(){
        console.log(`This Ninja's name is ${this.name}`);
    }
    showStats(){
        console.log(`${this.name}, ${this.health}, ${this.speed}, ${this.strength}`)
    }

    drinkSake(){
        this.health += 10;
    }
}

const Bumi = new Ninja("Bumi", 5);
console.log(Bumi)
Bumi.drinkSake();
console.log(Bumi)
Bumi.sayName();
Bumi.showStats();

module.exports = Ninja;