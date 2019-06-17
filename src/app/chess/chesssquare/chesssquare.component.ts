import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ChessPiece, ChessSquare, } from '../types';

@Component({
  selector: 'app-chess-square',
  templateUrl: './chesssquare.component.html',
  styleUrls: ['./chesssquare.component.css']
})
export class ChessSquareComponent {

  @Output() handleSelectPiece: EventEmitter<ChessPiece> = new EventEmitter<ChessPiece>();
  @Output() handleClickEmptySquare: EventEmitter<ChessSquare> = new EventEmitter<ChessSquare>();
  @Input() chessPiece?: ChessPiece;
  @Input() square: ChessSquare;
  @Input() isSelected: boolean;
  constructor() { }

  public handleClick() {
    if (this.chessPiece) {
      this.handleSelectPiece.emit(this.chessPiece);
    } else {
      this.handleClickEmptySquare.emit(this.square);
    }
  }

}
