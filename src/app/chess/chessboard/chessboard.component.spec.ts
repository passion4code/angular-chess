import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessBoardComponent } from './chessboard.component';

describe('ChessboardComponent', () => {
  let component: ChessBoardComponent;
  let fixture: ComponentFixture<ChessBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
