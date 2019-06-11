import { Component, OnInit } from '@angular/core';
import { ChessPiece, ChessColumn, ChessRow, ChessSquare } from '../types';
import {BoardMaster} from './board-master';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css'],
})
export class ChessBoardComponent implements OnInit {

  // the board master is aware of piece positioning and move availability
  private boardMaster: BoardMaster = new BoardMaster();

  // Used for rendering
  public chessboardColumns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  // Gives me a nice array of 1-8
  public chessboardRows = Array(8).fill('0').map((x, i) => i + 1 );

  private selectedPiece: ChessPiece;

  constructor() {}

  ngOnInit() {
    // initialize first placement of chess pieces
    this.boardMaster.startNewGame();
  }

  getChessPiece(row: ChessRow, index: ChessColumn) {
    return this.boardMaster.getPieceBySquare(row, index);
  }

  generateSquare(row: ChessRow, column: ChessColumn): ChessSquare {
    return {
      row,
      column
    };
  }

  handlePieceClick(piece: ChessPiece | undefined) {
    console.log('Piece click called');
    console.log(arguments);
    if (piece !== undefined) {
      // @TODO check if it's already the selected piece, or if you're allowed to select this piece
      this.setSelectedPiece(piece);
    }
  }

  handleSquareClick(square: ChessSquare) {
    console.log('Square clicked', square);
    if (this.selectedPiece) {
      this.moveSelectedPiece(square);
    }
  }


  setSelectedPiece(piece: ChessPiece) {
    this.selectedPiece = piece;
  }

  moveSelectedPiece(square: ChessSquare) {
    this.boardMaster.movePiece(
      this.selectedPiece,
      square
    );
  }

}
