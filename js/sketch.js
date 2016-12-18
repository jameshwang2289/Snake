var snake;
var food;
var gridScale = 20;
var endGame;


function setup() {
    createCanvas(600, 600);
    snake = new Snake();
    food = new Food();
    food.spawnFood();
    endGame = false;
    font = loadFont("font/helvetica.ttf");
    textFont(font);
    frameRate(10);
}

function draw() {
    background(45);
    if (!endGame) {
	    snake.updatePos();
	    snake.drawSnake();
	    if (snake.eat(food)) {
	    	food.spawnFood();
	    }
	    food.drawFood();
	}
	else {
		snake.drawSnake();
		food.drawFood();
		drawEndText();
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
	if (keyCode === UP_ARROW) {
		snake.direction(0, -1);
	} 
	else if (keyCode === RIGHT_ARROW) {
		snake.direction(1, 0);
	}
	else if (keyCode === DOWN_ARROW) {
		snake.direction(0, 1);
	}
	else if (keyCode === LEFT_ARROW) {
		snake.direction(-1, 0);
	}
	
	if ((key == 'r' || key == 'R') && endGame) {
		endGame = false;
		snake = new Snake();
		food = new Food();
		food.spawnFood();
	}
}



