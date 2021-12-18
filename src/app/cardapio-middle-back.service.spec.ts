import { TestBed } from '@angular/core/testing';

import { CardapioMiddleBackService } from './cardapio-middle-back.service';

describe('CardapioMiddleBackService', () => {
  let service: CardapioMiddleBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardapioMiddleBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
