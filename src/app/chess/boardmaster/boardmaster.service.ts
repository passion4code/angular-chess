import { Injectable } from '@angular/core';
import {BoardMaster} from './boardmaster';

@Injectable({
  providedIn: 'root'
})
export class BoardMasterService {

  constructor() { }

  // New games will inject this into their instance
  public getNewBoardMaster() {
      return new BoardMaster();
  }
}
