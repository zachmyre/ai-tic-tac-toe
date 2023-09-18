import Player from "./Player";

class Board {
    player: Player;
    bot: any;
    currentPlayer: Player;


    isPlaying: boolean = false;
    rounds: number = 0;

    board: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    boardElem: HTMLElement | null = document.getElementById("board");
    currentPlayerElem: HTMLElement | null = document.getElementById("currentPlayer");
    winnerElem: HTMLElement | null = document.getElementById("winnerContainer");
    messageElem: HTMLElement | null = document.getElementById("messageContainer");
    constructor(player: Player, bot: Player) {
        this.player = player;
        this.bot = bot;
        this.currentPlayer = this.player;
        this.isPlaying = true;
        if (this.currentPlayerElem) {
            this.currentPlayerElem.innerHTML = `${this.currentPlayerName} - ${this.currentPlayerSymbol}`;
        }
        if (this.winnerElem) {
            this.winnerElem.style.display = "none";
        }
    }

    get currentPlayerSymbol() {
        return this.currentPlayer.symbol;
    }

    get currentPlayerName() {
        return this.currentPlayer.name;
    }

    switchPlayer() {
        this.rounds++;
        if (this.currentPlayer == this.player) {
            this.currentPlayer = this.bot;
        } else {
            this.currentPlayer = this.player;
        }

        if (this.currentPlayerElem) {
            this.currentPlayerElem.innerHTML = `${this.currentPlayerName} - ${this.currentPlayerSymbol}`;
        }

    }

    placePiece(id: string) {
        this.board[parseInt(id) - 1] = this.currentPlayer.symbol;
        const doc = document.getElementById(id);
        if (doc) {
            doc.innerHTML = this.currentPlayer.symbol;
            doc.style.color = this.currentPlayer.color;
            this.checkWinner();
            this.switchPlayer();
        }
    }

    checkWinner() {
        if (
            (this.board[0] === this.board[1] && this.board[1] === this.board[2]) ||
            (this.board[0] === this.board[3] && this.board[3] === this.board[6]) ||
            (this.board[0] === this.board[4] && this.board[4] === this.board[8]) ||
            (this.board[2] === this.board[5] && this.board[5] === this.board[8]) ||
            (this.board[2] === this.board[4] && this.board[4] === this.board[6]) ||
            (this.board[6] === this.board[7] && this.board[7] === this.board[8])
        ) {
            this.isPlaying = false;
            if (this.winnerElem) {
                this.winnerElem.innerHTML = `Winner is: ${this.currentPlayerName} - ${this.currentPlayerSymbol}`;
                this.winnerElem.style.display = "flex";
            }
            if (this.boardElem) {
                this.boardElem.style.display = "none";
            }
            if (this.messageElem) {
                this.messageElem.style.display = "none";
            }
        }
    }

    resetBoard() {
        this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.currentPlayer = this.player;
        this.isPlaying = true;
        this.rounds = 0;
        if (this.winnerElem) {
            this.winnerElem.innerHTML = "";
            this.winnerElem.style.display = "none";
        }
        if (this.boardElem) {
            this.boardElem.style.display = "flex";
        }

        if (this.messageElem) {
            this.messageElem.style.display = "inline-block";
        }

        for (let i = 0; i < this.board.length; i++) {
            const doc = document.getElementById((i + 1).toString());
            if (doc) {
                doc.innerHTML = "";
            }
        }
    }
}

export default Board;