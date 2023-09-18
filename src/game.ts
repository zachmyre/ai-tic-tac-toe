import { Board, Player } from "./classes";

const player = new Player("X", "Zach", "red");
const enemy = new Player("O", "AI", "blue");
const controller: Board = new Board(player, enemy);

const gridElem: HTMLElement | null = document.getElementById("grid");
const resetBtnElem: HTMLElement | null = document.getElementById("reset");

gridElem?.addEventListener("click", (event: MouseEvent) => {
    const docId = (event.target as HTMLElement)?.id;
    if (controller.isPlaying) {
        controller.placePiece(docId);
    }
});

resetBtnElem?.addEventListener("click", () => controller.resetBoard());
