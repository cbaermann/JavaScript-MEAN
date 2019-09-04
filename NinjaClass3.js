class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;   
    }
    sayName(){
        console.log(`Hi my name is ${this.name}!`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength} `);
    }
    drinkShake(){
        this.health = this.health +10;
    }

}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health=200;
        this.speed = 10; 
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkShake(){
            console.log("Many rocks make a wall, but a wall is a walls ")
        }
    }
}