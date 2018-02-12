import { TestBed, inject } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform enum into string array', () => {
    enum Test {
      abc, def
    }
    const r1 = service.enumToArray(Test);
    expect(r1.length).toBe(2);
    expect(r1[0]).toEqual('abc');
    expect(r1[1]).toEqual('def');
    expect(() => service.enumToArray('abc').toThrow());
  });

});
