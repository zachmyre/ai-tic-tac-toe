import Player from "./Player";

class Controller{
    player: Player;
    bot: any;
    currentPlayer: Player;
    constructor(player: any, bot: any){
        this.player = player;
        this.bot = bot;
        this.currentPlayer = this.player;
    }

    get currentPlayerSymbol(){
        return this.currentPlayer.symbol;
    }

    get currentPlayerName(){
        console.log(this.currentPlayer);
        return this.currentPlayer.name;
    }
    
    switchPlayer(){
        if(this.currentPlayer == this.player){
            this.currentPlayer = this.bot;
            return;
        }
        this.currentPlayer = this.player;
    }

}

export default Controller;