enum Symbol{
    X = "x",
    O = "o"
}

enum Color{
    red = "red",
    white = "white"
}

class Player{
    symbol: Symbol;
    name: string;
    color: string;
    constructor(symbol, name, color = "red"){
        this.symbol = symbol;
        this.name = name;
        this.color = color;
    }
}

export default Player;