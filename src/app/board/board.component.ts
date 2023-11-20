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

  nubmerOfClick = 0;
  readonly numberOfColumns: number = 3;
  readonly numberOfRows: number = 3;
  board: any[] = Array.from({ length: this.numberOfColumns *this.numberOfRows}, () => '');
  playerOneWins: number = 0;
  playerTwoWins: number = 0;
  isGameStarted: boolean = false;

  constructor() { }

  // Function to check if a string contains only alphabetic characters
  isAlpha(str: string): boolean {
    return /^[a-zA-Z]+$/.test(str);
  }

  onToggleStarter() {
    this.turnOfPlayerOne = !this.turnOfPlayerOne;
  }
  onResetBoard() {
    this.isGameStarted = false;
    this.board.fill(" ");
    this.nubmerOfClick = 0;
  }
  onButtonClick(event: Event): void {
    this.isGameStarted = true;
    if (event.target instanceof HTMLButtonElement && !this.isAlpha(this.board[Number(event.target.id)])) {
      if (this.turnOfPlayerOne) {
        this.board[Number(event.target.id)] = 'X'
      } else this.board[Number(event.target.id)] = 'O';
      this.turnOfPlayerOne = !this.turnOfPlayerOne;
      this.nubmerOfClick++;
    }
    if(this.isWinner())
      console.log('sssssssssssssssss');
    if(this.nubmerOfClick == this.numberOfColumns * this.numberOfRows)
      console.log("nobody won");
      
  }

  isWinner(): boolean {
    return  this.leftSlant() || this.checkRows() || this.bottomSlant() || this.checkColumns();
  }

  checkRows() {

    // Iterate over each row
  for (let i = 0; i < this.numberOfRows; i++) {
    const firstCell = this.board[i * this.numberOfRows];

    // If the first cell is empty or not 'X' or 'O', move on to the next row
    if (!this.isAlpha(firstCell)) {
      continue;
    }

    // Check if all cells in the current row are the same as the first cell
    if (this.board.slice(i * this.numberOfRows, (i + 1) * this.numberOfRows).every(cell => cell === firstCell)) {
      return true; // Found a winning row
    }
  }

  // No winning rows found
  return false;
  }

  checkColumns() {
    for (let i = 0; i < this.numberOfColumns; i++) {
      let isExist = true;
      if (!this.isAlpha(this.board[i])) {
        continue; // If the first cell is empty or not 'X' or 'O', move on to the next column
      }
      for (let j = 1; j < this.numberOfRows; j++) {
        if (this.board[i] !== this.board[i + j * this.numberOfColumns]) {
          isExist = false;
          break; // No need to continue checking if one element is different
        }
      }
      if (isExist) {
        return true;
      }
    }
    return false;
  }
  
  leftSlant() {

    if(!this.isAlpha(this.board[0])){
      return false;
    }
    
    for (let i = 0; i < this.numberOfRows - 1; i++) 
      if (this.board[i * this.numberOfRows + i] !== this.board[(i + 1) * this.numberOfRows + i + 1])   
        return false;
    
    return true;
  }
  


  bottomSlant(){

    console.log(this.board);
    
    if(!this.isAlpha(this.board[(this.numberOfColumns-1) * this.numberOfRows])){
      return false;
    }

    // from bottom
    for (let i = this.numberOfRows - 1; i > 0; i--) 
      if (this.board[i * this.numberOfRows + (this.numberOfRows - 1 - i)] 
            !== this.board[(i - 1) * this.numberOfRows + (this.numberOfRows - i)]) {
        return false;
      }
    
      
    return true;
  }

}
