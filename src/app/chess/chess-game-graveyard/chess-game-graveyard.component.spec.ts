import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessGameGraveyardComponent } from './chess-game-graveyard.component';

describe('ChessGameGraveyardComponent', () => {
  let component: ChessGameGraveyardComponent;
  let fixture: ComponentFixture<ChessGameGraveyardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessGameGraveyardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessGameGraveyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
