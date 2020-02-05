//these are all sub classes of dice
class caltrop extends dice {
	constructor(){
		super();
		this.nam = "caltrop";
		this.nos = 4;
	}
}

class cube extends dice {
	constructor(){
		super();
		this.nam = "cube";
		this.nos = 6;
	}
}

class octahedron extends dice {
	constructor(){
		super();
		this.nam = "octtahedron";
		this.nos = 8;
	}
}

class dodecahedron extends dice {
	constructor(){
		super();
		this.nam = "dodecahedron";
		this.nos = 12;
	}
}

class ummWhatOtherTypesOfDiceAreThereAgain{

}