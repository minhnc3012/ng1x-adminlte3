import { TestBed } from '@angular/core/testing';

import { Ng1xAdminlte3Service } from './ng1x-adminlte3.service';

describe('Ng1xAdminlte3Service', () => {
  let service: Ng1xAdminlte3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng1xAdminlte3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
