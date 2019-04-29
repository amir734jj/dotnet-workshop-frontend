import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api';
import {TokenService} from './abstracts/token.service';
import {AuthenticationUtility} from '../utilities/authentication.utility';

@Injectable()
export class VoteService extends TokenService {

  host: string = API_ADDRESS + '/vote';

  constructor(private http: HttpClient, private authenticationUtility: AuthenticationUtility) {
    super();
  }

  getToken(): string {
    return this.authenticationUtility.getToken();
  }

  upVote(id: string) {
    const uri = `${this.host}/upVote/${id}`;
    return this
      .http
      .post(uri, { }, { responseType: 'text', headers: this.resolveHeader() });
  }

  downVote(id: string) {
    const uri = `${this.host}/downVote/${id}`;
    return this
      .http
      .post(uri, { }, { responseType: 'text', headers: this.resolveHeader() });
  }
}
