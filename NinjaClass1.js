function Ninja(name)
{
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3

    Ninja.prototype.sayName() = function(){
        console.log("Hi my name is "+ name +"!");
    }

    Ninja.prototype.showStats() = function(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength);
    }

    Ninja.prototype.drinkShake() = function(){
        this.health = this.health +10;
    }

};