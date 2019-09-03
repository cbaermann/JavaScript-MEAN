var example;
example = "I'm the example!";
console.log(example);

or 

let example = "I'm the example!"
console.log(example);


// 1 
let hello = "world";
console.log(hello);

// 2

let needle = "haystack";
function test()
{
    var needle = "magnet";
    console.log(needle);
}
test();
// just prints magnent, no calling of the needle variable

// 3

let brendan = "super cool";
function print()
{
    brendan = "only ok";
    console.log(brendan);
}

console.log(brendan);
// only logs super cool, funtion not invoked

// 4

var food = "chicken";
console.log(food);
eat();
function eat()
{
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}

// logs first food as chicken, then enters the funtion and logs half-eaten, the var food = gone is never called

// 5

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// this results in an error. move the mean() below the funtion call in this case

// 6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// first console.log(genre) returns as undefined due to no genre being declared. the rewind function runs returning rock and r&b, then it logs disco

// 7


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// order of output: san jose, seattle, burbank, san jose. no other dojo variable was declared outside of the function other than san jose, so this causes it to be logged twice in each call outside the funciton







