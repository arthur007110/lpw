import { TestBed, inject } from '@angular/core/testing';

import { DadosService } from './dados.service';
import { Usuario } from './models/Usuario';

describe('DadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosService]
    });
  });

  it('should be created', inject([DadosService], (service: DadosService) => {
    expect(service).toBeTruthy();
  }));
});
