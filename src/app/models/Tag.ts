import {randomNumber} from '../utilities/random';

export class Tag {
  id: number;
  text: string;

  constructor() {
    this.id = randomNumber();
  }
}
