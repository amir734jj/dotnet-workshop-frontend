import {Tag} from './Tag';

export class Question {
  id: string;
  title: string;
  text: string;
  tags: Tag[];
  vote: number;
}
