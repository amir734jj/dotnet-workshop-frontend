import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api';

@Injectable()
export class VoteService {

  host: string = API_ADDRESS + '/vote';

  constructor(private http: HttpClient) {
  }

  upVote(id: string) {
    const uri = `${this.host}/upVote/${id}`;
    return this
      .http
      .post(uri, { }, { responseType: 'text' });
  }

  downVote(id: string) {
    const uri = `${this.host}/downVote/${id}`;
    return this
      .http
      .post(uri, { }, { responseType: 'text' });
  }
}
