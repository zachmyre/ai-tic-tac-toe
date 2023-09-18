

class Player {
    symbol: "X" | "O";
    name: string;
    color: string;
    constructor(symbol: "X" | "O", name: string, color: string = "red") {
        this.symbol = symbol;
        this.name = name;
        this.color = color;
    }
}

export default Player;