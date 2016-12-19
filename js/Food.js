function Food() {
	this.x = 0;											//X-coordinate of food
	this.y = 0;											//Y-coordinate of food

	this.spawnFood = function() {
	//Spawns food to random location
		var maxX = floor(width/gridScale);				//max x-coordinate is width/gridScale
		var maxY = floor(height/gridScale);				//max y-coordinate is height/gridScale
		this.x = floor(random(maxX));					//Random x integer bounded by maxX
		this.y = floor(random(maxY));					//Random y integer bounded by maxY
		this.x *= gridScale;							//Convert back to gridScale coordinate
		this.y *= gridScale;							//Convert back to gridScale coordinate

	}

	this.drawFood = function() {
	//Function draws food at its respective x-y coordinate.
		fill(255, 0, 100);								//Color of food
		rect(this.x, this.y, gridScale, gridScale);
	}


}