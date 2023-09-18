

class Player{
    symbol: "x" | "o";
    name: string;
    color: string;
    constructor(symbol: "x" | "o", name: string, color: string = "red"){
        this.symbol = symbol;
        this.name = name;
        this.color = color;
    }

    placePiece(id: string){
        const elem: HTMLElement | null  = document.getElementById(id);
        if(!elem){
            console.error(`Element not found when placing piece for ${this.symbol} at id: ${id}`);
        }
        const para: HTMLElement = document.createElement("p");
        para.innerText = this.symbol;
        elem?.appendChild(para);
    }
}

export default Player;