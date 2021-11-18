class Ninja{
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
        return this
    }

    showStats(){
        console.log('------------------------');
        console.log(`${this.name}'s Stats:`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
        console.log('------------------------');
        return this
    }

    drinkSake(){
        console.log('Gulp')
        this.health+=10;
        return this
    }
}

const ninja1 = new Ninja("Greg",100);
ninja1.sayName().showStats().drinkSake().showStats();