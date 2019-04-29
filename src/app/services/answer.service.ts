import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api';
import {Question} from '../models/Question';
import {Answer} from '../models/Answer';
import {TokenService} from './abstracts/token.service';
import {AuthenticationUtility} from '../utilities/authentication.utility';

@Injectable()
export class AnswerService extends TokenService  {

  host: string = API_ADDRESS + '/answer';

  constructor(private http: HttpClient, private authenticationUtility: AuthenticationUtility) {
    super();
  }

  getToken(): string {
    return this.authenticationUtility.getToken();
  }

  submitAnswer(id: string, answer: Answer) {
    const uri = `${this.host}/${id}`;
    return this
      .http
      .post(uri, answer, { responseType: 'text', headers: this.resolveHeader() });
  }
}
