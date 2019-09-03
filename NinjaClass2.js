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

    Ninja.prototype.punch() = function(target){
        if(!(target instanceof Ninja)){
            console.log(target + " is not a Ninja!")
        }
        else{
            this.health = this.health -5;
            console.log(target.name+" was punched by"+this.name+" and lost 5 health!")

        }
    }

    Ninja.prototype.kick() = function(target){
        if(!(target instanceof Ninja)){
            console.log(target + " is not a Ninja!");
        }
        else{
            this.health = this.health - (15*strength);
            console.log(target.name+ "was kicked by"+this.name+" and lost" +15*strength+ "health!")
        }
    }

};