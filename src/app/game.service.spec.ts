import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';
import { MaterialModule } from './material/material.module';

describe('GameService', () => {

  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      providers: [GameService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(GameService);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init game', () => {
    expect(service.p1).toBeUndefined();
    expect(service.p2).toBeUndefined();
    expect(service.counter).toBe(0);

  });

});
