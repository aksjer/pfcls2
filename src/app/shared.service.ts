import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor() { }

  enumToArray(o: any): string[] {
    const keys = Object.keys(o);
    return keys.slice(keys.length / 2);
  }

}
