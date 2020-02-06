// main javascript class
console.log("connected to main"); //prints to the console

// array of all the die
var myDie = [];

// defines main method
function main(){
	
	createButtons();
}
main() //runs main method

// rolls all the dice
function roll(){
	myDie.forEach(dice => {
		dice.roll();
	});
}

// calculates the total sum of all the values on the die
function calculate(){
	var total = 0;
	myDie.forEach(dice => {
		total += dice.face();
	});
	return total;
}

// animates all the dice
function animate(){

}

// adds a dice to the die array
function addDice( type){
	var dice = new type();
	myDie.push(dice);
	// can also be writen as
	// arr[arr.length] = dice
	var die = document.getElementById("die");
	var diceSprite = document.createElement("span");
	diceSprite.innerHTML = " " + dice.numberOfSides() + " ";
	die.append(diceSprite);
}

function createButtons(){
	var add4Btn = document.getElementById("add4");
	add4Btn.addEventListener("click", function(e){ 
		rollBtn.disabled = false;
		addDice(caltrop);
	})
	var add6Btn = document.getElementById("add6");
	add6Btn.addEventListener("click", function(e){ 
		rollBtn.disabled = false;
		addDice(cube);
	})
	var add8Btn = document.getElementById("add8");
	add8Btn.addEventListener("click", function(e){ 
		rollBtn.disabled = false;
		addDice(octahedron);
	})
	var rollBtn = document.getElementById("roll");
	rollBtn.disabled = true;
	rollBtn.addEventListener("click", function(e){ 
		roll();
		var total = document.getElementById("total");
		total.innerHTML = " " + calculate() + " "
	})
}