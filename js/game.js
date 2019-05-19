// Boolean values for updating the score.
var up = false;
var collide = false;
var buttonSound;
var succesSound;

// Sets the edges of the snacks and enemy ghosts.
function Edges() {
    this.halfBoxHeight = 37;
    this.halfBoxWidth = 50;
    this.boxUp = this.y - this.halfBoxHeight;
    this.boxDown = this.y + this.halfBoxHeight;
    this.boxLeft = this.x - this.halfBoxWidth;
    this.boxRight = this.x + this.halfBoxWidth;
}

// This will be multiplied with a random number between 1 and 10 to set the speed of the enemy.
// Change this number to increase or lower difficulty.
var speedMultiply = 80;
// Enemies our player must avoid
var Enemy = function(enemyX, enemyY, speed) {
    this.x = enemyX;
    this.y = enemyY;
    this.speed = speed;
    // To randomly choose a number
    var ghost = Math.floor((Math.random() * 3) + 1);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// The player character
var Player = function() {
    // Edges of the game screen.
    // Modify these values if another row or column is to be added to the game.
    this.gameTopEdge = 70;
    this.gameLeftEdge = 19;
    this.gameRightEdge = 419;

    // The starting position of our character.
    this.startingX = 780;
    this.startingY = 535;
    this.x = this.startingX;
    this.y = this.startingY;

    // The movement in pixels.
    this.moveVertical = 65;
    this.moveHorizontal = 53;
    this.sprite = 'images/car.png';
};

// Draw the player on the screen.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.fillStyle = 'White';
    ctx.strokeStyle = 'black';
    ctx.font = "24px Impact";
    ctx.fill();
    ctx.stroke();
};

// Moves the player character.
Player.prototype.handleInput = function(allowedKeys) {
    switch (allowedKeys) {
        case "left":
            // Check for wall, otherwise move left
            if (this.x > 50) {
                this.x -= 65;
            }
            // Change the machine button and play button.wav

            buttonSound.play();
            break;
        case "right":
            // Check for wall, otherwise move right
            if (this.x < 790) {
                this.x += 65;
            }
            // Change the machine button and play button.wav

            buttonSound.play();
            break;
        case "up":
            // Check if van reached the top of dirt, if so play succes.wav and call succes function
            // otherwise move up
            if (this.y < 50) {
                this.success();
                succesSound.play();
            } else {
                this.y -= 53;
            }
            // Change the machine button and play button.wav
            buttonSound.play();
            break;
        case "down":
            // Check for bottom, otherwise move down
            if (this.y < 520) {
                this.y += 53;
            }
            // Change the machine button and play button.wav
            buttonSound.play();
            break;
    }
};

// Increase score and reset the snacks position when van reaches top of dirt
Player.prototype.success = function() {
    this.vanReset();
};

// Updates the score.
Player.prototype.updateScore = function() {
    ctx.clearRect(0, 0, 500, 500);
    // If the van reaches the top, update score accordingly.
    if (up === true) {
        up = false;
        this.vanReset();
        ctx.clearRect(0, 600, 500, 500);
    }
};

// From https://www.w3schools.com/graphics/game_sound.asp
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}

// When called, resets player character to original position.
Player.prototype.vanReset = function() {
    this.startingX = 780;
    this.startingY = 535;
    this.x = this.startingX;
    this.y = this.startingY;
};

// Empty allEnemies array
var allEnemies = [];

// Sets maximum number of ghosts on screen to 3 (number of rows of road).
// Be sure to change this if another row of road and ghosts is to be added.
for (var i = 0; i < 3; i++) {
    var initialSpeed = speedMultiply * (Math.floor(Math.random() * 10) + 1);
    allEnemies.push(new Enemy(-105, 80 + 85 * i, initialSpeed));
}

// Creates the van
var player = new Player();

// This listens for key presses and sends the keys to the Player.handleInput() method.
var input = function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
};
document.addEventListener('keyup', input);

// Prevents the window from scrolling up and down when the arrow keys are pressed.
window.addEventListener("keydown", function(e) {
    if ([38, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}