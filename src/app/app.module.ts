import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChessComponent } from './chess/chess.component';
import { Routes, RouterModule } from '@angular/router';
import { ChessBoardComponent } from './chess/chessboard/chessboard.component';
import { ChessSquareComponent } from './chess/chesssquare/chesssquare.component';

const routes: Routes = [
  { path: '', component: ChessComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChessComponent,
    ChessBoardComponent,
    ChessSquareComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
