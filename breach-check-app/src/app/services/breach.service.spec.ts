import { TestBed } from '@angular/core/testing';

import { BreachService } from './breach.service';

describe('BreachService', () => {
  let service: BreachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
