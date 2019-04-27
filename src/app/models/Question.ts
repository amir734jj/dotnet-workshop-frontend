import {Tag} from './Tag';
import {randomNumber} from '../utilities/random';

export class Question {
  id: number;
  title: string;
  text: string;
  tags: Tag[];
  vote: number;

  constructor() {
    this.id = randomNumber();
  }
}
