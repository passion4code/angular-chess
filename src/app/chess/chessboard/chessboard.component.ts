import { Component, OnInit } from '@angular/core';
import { ChessPiece, ChessColumn, ChessRow } from '../types';
import {BoardMaster} from './board-master';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessBoardComponent implements OnInit {

  // the board master is aware of piece positioning and move availability
  private boardMaster: BoardMaster = new BoardMaster();

  // Used for rendering
  public chessboardColumns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  // Gives me a nice array of 1-8
  public chessboardRows = Array(8).fill('0').map((x, i) => i + 1 );

  constructor() {}

  ngOnInit() {
    // initialize first placement of chess pieces
    this.boardMaster.startNewGame();
  }

  getChessPiece(row: ChessRow, index: ChessColumn) {
    return this.boardMaster.getPieceBySquare(row, index);
  }

}
