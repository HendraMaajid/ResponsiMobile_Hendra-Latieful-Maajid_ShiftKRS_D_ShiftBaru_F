import { TestBed } from '@angular/core/testing';

import { PahlawanService } from './pahlawan.service';

describe('PahlawanService', () => {
  let service: PahlawanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PahlawanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
