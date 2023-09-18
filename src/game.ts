// add webpack to compile all ts files

import { Controller, Board, Player } from "./classes";

const player = new Player("x", "Zach", "red");

const enemy = new Player("o", "AI", "blue");

const controller = new Controller(player, enemy);

player.placePiece("1");

enemy.placePiece("2");

const currentPlayer: HTMLElement | null = document.getElementById("currentPlayer");
if(currentPlayer){
    currentPlayer.innerHTML = `${controller.currentPlayerName} - ${controller.currentPlayerSymbol}`;
}    


document.addEventListener("click", (event: MouseEvent) => {
    
    gameLoop(event);
    
})

function gameLoop(event: any){
    const docId = (event.target as HTMLElement)?.id;
    controller.currentPlayer.placePiece(docId);
    controller.switchPlayer();
    if(currentPlayer){
        currentPlayer.innerHTML = `${controller.currentPlayerName} - ${controller.currentPlayerSymbol}`;
    }
}

