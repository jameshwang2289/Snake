function Food() {
	this.x = 0;
	this.y = 0;

	this.spawnFood = function() {
		var maxX = floor(width/gridScale);
		var maxY = floor(height/gridScale);
		this.x = floor(random(maxX));
		this.y = floor(random(maxY));
		this.x *= gridScale;
		this.y *= gridScale;

	}

	this.drawFood = function() {
		fill(255, 0, 100);
		rect(this.x, this.y, gridScale, gridScale);
	}


}