
class dice{
	nam; //"name" is a reserve word
	nos; //stands for number of sides
	cur; //the current side facing up

	//constructor to set default values. classes should override these
	constructor(){
		this.nam = "dice";
		this.nos = 1; 
		this.cur = 0;  
	}
	// returns number of sides
	numberOfSides(){
		return this.nos;
	}
	// returns a random number from 1 to nos
	roll(){ 
		this.cur = Math.floor(Math.random()*this.nos) + 1;
		return this.cur;
	}
	// returns the current side facing up
	face(){
		return this.cur;
	}
	// prints the data of the dice as a string
	print(){
		return "a " + this.nam + " has " + this.nos + " sides."
	}

}