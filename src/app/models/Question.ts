import {Tag} from './Tag';
import {Guid} from 'guid-typescript';

export class Question {
  id: string;
  title: string;
  text: string;
  tags: Tag[];
  vote: number;

  constructor() {
    this.id = Guid.create().toString();
  }
}
