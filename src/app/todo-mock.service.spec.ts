import { TestBed, inject } from '@angular/core/testing';

import { TodoMockService } from './todo-mock.service';

describe('TodoMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoMockService]
    });
  });

  it('should be created', inject([TodoMockService], (service: TodoMockService) => {
    expect(service).toBeTruthy();
  }));
});
