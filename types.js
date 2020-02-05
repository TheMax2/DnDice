//these are all sub classes of dice
class caltrop extends dice {
	constructor(){
		super();
		this.nam = "d4";
		this.nos = 4;
	}
}

class cube extends dice {
	constructor(){
		super();
		this.nam = "d6";
		this.nos = 6;
	}
}

class octagon extends dice {
	constructor(){
		super();
		this.nam = "d8";
		this.nos = 8;
	}
}

class tenGon extends dice {
	constructor(){
		super();
		this.nam = "d10";
		this.nos = 10;
	}
}

class octahedron extends dice {
	constructor(){
		super();
		this.nam = "d12";
		this.nos = 12;
	}
}

class icosagon extends dice {
	constructor(){
		super();
		this.nam = "d20";
		this.nos = 20;
	}
}

class percentageDie extends dice {
	constructor(){
		super();
		this.nam = "d100";
		this.nos = 100;
	}
}