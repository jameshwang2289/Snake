var snake;											//Snake Object
var food;											//Food Object
var gridScale = 20;									//Scale of rectangles in Canvas Grid
var endGame;										//True if game is over, false otherwise


function setup() {
    createCanvas(600, 600);							//Canvas is 600x600
    snake = new Snake();							//Create new Snake object
    food = new Food();								//Create new Food object
    food.spawnFood();								//spawn food on grid
    endGame = false;								//initialize endGame to false
    font = loadFont("font/helvetica.ttf");			//Font for text
    textFont(font);									//load Helvetica Nueue font
    frameRate(10);									//Framerate limit
}

function draw() {
    background(45);									//Canvas Background color
    if (!endGame) {									//When game is not over
	    snake.updatePos();
	    snake.drawSnake();
	    if (snake.eat(food)) {
	    	food.spawnFood();
	    }
	    food.drawFood();
	}
	else {											//When game is over draw snake and food
		snake.drawSnake();
		food.drawFood();
		drawEndText();								//Display end game text
	}
}

function drawEndText() {
	fill(255);
	textSize(40);
	text("Game Over", width/3-16, height/4);
	textSize(20);
	text("Press r to restart the game", width/4+19, height/4+22);
}

function keyPressed() {
//Event Listener
	if (keyCode === UP_ARROW && snake.ySpeed != 1) {
		snake.direction(0, -1);
	} 
	else if (keyCode === RIGHT_ARROW && snake.xSpeed != -1) {
		snake.direction(1, 0);
	}
	else if (keyCode === DOWN_ARROW && snake.ySpeed != -1) {
		snake.direction(0, 1);
	}
	else if (keyCode === LEFT_ARROW && snake.xSpeed != 1) {
		snake.direction(-1, 0);
	}
	
	if ((key == 'r' || key == 'R') && endGame) {
		endGame = false;
		snake = new Snake();
		food = new Food();
		food.spawnFood();
	}
}



