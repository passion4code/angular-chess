import { Component, OnInit, Input } from '@angular/core';
import { ChessPieceColor } from '../types';
import { BoardMaster } from '../boardmaster/boardmaster';

@Component({
  selector: 'app-chess-game-status',
  templateUrl: './chess-game-status.component.html',
  styleUrls: ['./chess-game-status.component.css']
})
export class ChessGameStatusComponent implements OnInit {

  @Input()  private boardMaster: BoardMaster;

  constructor() { }

  ngOnInit() {
  }

  public getCurrentPlayer(): ChessPieceColor {
    return this.boardMaster.getActivePlayer();
  }

}
