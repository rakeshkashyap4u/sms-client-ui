import { TestBed } from '@angular/core/testing';

import { AddLangaugeService } from './add-langauge-service';

describe('AddLangaugeService', () => {
  let service: AddLangaugeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddLangaugeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
