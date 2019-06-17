import { TestBed } from '@angular/core/testing';

import { BoardMasterService } from './boardmaster.service';

describe('BooardmasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardMasterService = TestBed.get(BoardMasterService);
    expect(service).toBeTruthy();
  });
});
