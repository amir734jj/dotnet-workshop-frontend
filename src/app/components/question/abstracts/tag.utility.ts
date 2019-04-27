import {Tag} from '../../../models/Tag';
import {Guid} from 'guid-typescript';

export class TagUtility {

  private originalTags: Tag[];
  public tags: { value: number; display: string }[];

  constructor() {
    this.originalTags = [];
    this.tags = [];
  }

  resolveRawTags(): Tag[] {
    return this.tags.map((x) => {
      const id = Guid.create().toString();

      return {id, text: x.display};
    });
  }

  setTags(tags: Tag[]) {
    this.originalTags = tags;
    this.tags = tags.map((x, index) => {
      return {
        value: index,
        display: x.text
      };
    });
  }
}
