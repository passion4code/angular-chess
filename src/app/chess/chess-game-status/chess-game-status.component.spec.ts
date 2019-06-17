import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessGameStatusComponent } from './chess-game-status.component';

describe('ChessGameStatusComponent', () => {
  let component: ChessGameStatusComponent;
  let fixture: ComponentFixture<ChessGameStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessGameStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessGameStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
