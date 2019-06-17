import { Component, OnInit, Input } from '@angular/core';
import { ChessPiece, ChessColumn, ChessRow, ChessSquare } from '../types';
import { BoardMaster } from '../boardmaster/boardmaster';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css'],
})
export class ChessBoardComponent implements OnInit {

  // the board master is aware of piece positioning and move availability
  @Input() private boardMaster: BoardMaster;

  // Used for rendering
  public chessboardColumns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  // Gives me a nice array of 1-8
  public chessboardRows = Array(8).fill('0').map((x, i) => i + 1 );

  private selectedPiece: ChessPiece;

  constructor() { }

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
    if (piece !== undefined) {
      if (piece.color === this.boardMaster.getActivePlayer()) {
        this.setSelectedPiece(piece);
      }
    }
  }

  handleSquareClick(square: ChessSquare) {
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
    this.selectedPiece = undefined;
  }

  isSquareSelected(row: ChessRow, column: ChessColumn): boolean {
    if (!this.selectedPiece) {
      return false;
    }
    return this.selectedPiece.square.row === row && this.selectedPiece.square.column === column;
  }

}
