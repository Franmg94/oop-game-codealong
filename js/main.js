class Player {
    constructor() {
// initialize properties
        this.positionX = 50;
        this.positionY = 0;
        this.height = 10;
        this.width = 20;
// om manipulation to reflect initial values (size, position)
// create the element
        this.playerElm = document.getElementById("player");
// size
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
// position
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
    }
    moveLeft() {
        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
    }
}


// display the class on the browser
const player = new Player();




// Detects if we pressed a key
document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
       }
});

