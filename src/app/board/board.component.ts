import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {

  

  turnOfPlayerOne = false;
  playerOne = "Ran";
  playerTwo = "Liron";

  readonly numberOfColumns: number = 9;
  board: any[] = new Array(this.numberOfColumns);
  playerOneWins: number = 0;
  playerTwoWins: number = 0;

  constructor() {}

  // Function to check if a string contains only alphabetic characters
  isAlpha(str: string): boolean {
    return /^[a-zA-Z]+$/.test(str);
  }

  onToggleStarter(){
    this.turnOfPlayerOne = !this.turnOfPlayerOne;
  }
  onResetBoard(){
    this.board = new Array(this.numberOfColumns);
    

  }
  onButtonClick(event: Event): void {
    if (
      event.target instanceof HTMLButtonElement &&
      !this.isAlpha(event.target.innerText)
    ) {
      if (this.turnOfPlayerOne) {
        event.target.innerText = 'X';
      } else event.target.innerText = 'O';
      this.turnOfPlayerOne = !this.turnOfPlayerOne;
    }
  }
}
