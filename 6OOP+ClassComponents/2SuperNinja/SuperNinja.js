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

class Sensei extends Ninja{
    constructor(name){
        super(name,200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }
}

// const ninja1 = new Ninja("Greg",100);
// ninja1.sayName().showStats().drinkSake().showStats();

const sensei1 = new Sensei("Master Splinter")
sensei1.sayName().showStats().drinkSake().showStats().speakWisdom().showStats();