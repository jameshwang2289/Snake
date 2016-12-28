function Snake() {
	this.x = 0;																//X-coordinate of Snake
	this.y = 0;																//Y-coordinate of Snake
	this.xSpeed = 1;														//Speed of Snake on x-axis
	this.ySpeed = 0;														//Speed of Snake on y-axis
	this.size = 0;															//Size of Snake
	this.tail = [];															//Holds all tail positions of Snake

	this.eat = function(food) {
	//Returns true if the Snake is on top of the food, false otherwise.
		var d = dist(this.x, this.y, food.x, food.y);						//Check distance of food to current position of Snake

		if (d < 1) {														
			this.size++;
			return true;
		}
		return false;
	}

	this.direction = function(x, y) {
	//Chooses the direction of the Snake
		this.xSpeed = x;
		this.ySpeed = y;
	}

	this.updatePos = function() {
		if (this.x + this.xSpeed*gridScale > width-gridScale) {				//If the Snake is out of bounds then the game is over
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

		if (!endGame) {														//If the game is not over update the positions
			if (this.tail.length === this.size) {							//Ensures array does not go out of bounds
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
                updatePos = true;
	}

	this.drawSnake = function() {
		fill(0, 255, 0);
		for (var i = 0; i < this.size; ++i) {							  //Draw all tail positions of the Snake
			rect(this.tail[i].x, this.tail[i].y, gridScale, gridScale); 
		}
		rect(this.x, this.y, gridScale, gridScale);						  //Draw current position of the Snake
	}
}
