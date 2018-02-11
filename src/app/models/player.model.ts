import { Gesture } from './gesture.model';

export class Player {

  constructor(
    public name: string,
    public score: number = 0,
    public gesture: string = null
  ) { }

}
