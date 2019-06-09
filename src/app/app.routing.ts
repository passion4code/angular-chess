import { ChessComponent } from './chess/chess.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', component: ChessComponent }
];

const routing: ModuleWithProviders = RouterModule.forRoot(routes);

export default routing;
