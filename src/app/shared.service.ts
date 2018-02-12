import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  enumToArray(o: Object): string[] {
    if (typeof o !== 'object') {
      throw new Error(`param isn't an object`);
    }
    const k = Object.keys(o);
    return k.slice(k.length / 2);
  }

}
