function Snake() {
	this.x = 0;
	this.y = 0;
	this.xSpeed = 1;
	this.ySpeed = 0;
	this.size = 0;
	this.tail = [];

	this.eat = function(food) {
		var d = dist(this.x, this.y, food.x, food.y);
		if (d < 1) {
			this.size++;
			return true;
		}
		return false;
	}

	this.direction = function(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}

	this.updatePos = function() {
		if (this.x + this.xSpeed*gridScale > width-gridScale) {
			endGame = true;
		}
		if (this.x + this.xSpeed*gridScale < 0) {
			endGame = true;
		}
		if (this.y + this.ySpeed*gridScale > height-gridScale) {
			endGame = true;
		}
		if (this.y + this.ySpeed*gridScale < 0) {
			endGame = true;
		}

		if (!endGame) {
			if (this.tail.length === this.size) {
				for (var i = 0; i < this.size-1; ++i) {
					this.tail[i] = this.tail[i+1];
				}
			}
			this.tail[this.size-1] = createVector(this.x, this.y);

			this.x = this.x + this.xSpeed*gridScale;
			this.y = this.y + this.ySpeed*gridScale;

			for (var i = 0; i < this.size-1; ++i) {
				if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
					endGame = true;
				}
			}

		}
	}

	this.drawSnake = function() {
		fill(0, 255, 0);
		for (var i = 0; i < this.size; ++i) {
			rect(this.tail[i].x, this.tail[i].y, gridScale, gridScale); 
		}
		rect(this.x, this.y, gridScale, gridScale);	
	}
}