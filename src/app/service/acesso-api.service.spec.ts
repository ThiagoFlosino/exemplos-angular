import { TestBed } from '@angular/core/testing';

import { AcessoApiService } from './acesso-api.service';

describe('AcessoApiService', () => {
  let service: AcessoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcessoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
