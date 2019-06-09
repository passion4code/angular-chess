import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessSquareComponent } from './chesssquare.component';

describe('ChessSquareComponent', () => {
  let component: ChessSquareComponent;
  let fixture: ComponentFixture<ChessSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
