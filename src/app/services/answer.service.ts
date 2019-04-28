import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api';
import {Question} from '../models/Question';
import {Answer} from '../models/Answer';

@Injectable()
export class AnswerService {

  host: string = API_ADDRESS + '/answer';

  constructor(private http: HttpClient) {
  }

  submitAnswer(id: string, answer: Answer) {
    const uri = `${this.host}/${id}`;
    return this
      .http
      .post(uri, answer, { responseType: 'text' });
  }
}
