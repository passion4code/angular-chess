import { Component, OnInit } from '@angular/core';
import { BoardMasterService } from './boardmaster/boardmaster.service';
import { BoardMaster } from './boardmaster/boardmaster';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  private boardMaster: BoardMaster;

  constructor(boardMasterService: BoardMasterService) {
    this.boardMaster = boardMasterService.getNewBoardMaster();
  }

  ngOnInit() {
  }

  public getBoardMaster() {
    return this.boardMaster;
  }

}
