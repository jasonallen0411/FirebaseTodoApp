import { TestBed } from '@angular/core/testing';

import { GetTodosServiceService } from './get-todos-service.service';

describe('GetTodosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTodosServiceService = TestBed.get(GetTodosServiceService);
    expect(service).toBeTruthy();
  });
});
