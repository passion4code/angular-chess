import { Component, OnInit, Input } from '@angular/core';
import { ChessPiece } from '../types';

@Component({
  selector: 'app-chess-square',
  templateUrl: './chesssquare.component.html',
  styleUrls: ['./chesssquare.component.css']
})
export class ChessSquareComponent implements OnInit {

  @Input() chessPiece?: ChessPiece;

  constructor() { }

  ngOnInit() {
  }

}
