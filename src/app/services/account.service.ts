import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api';
import {Account} from '../models/Account';
import {Injectable} from '@angular/core';
import {AuthenticationUtility} from '../utilities/authentication.utility';
import {tap} from 'rxjs/internal/operators';
import {TokenService} from './abstracts/token.service';

@Injectable()
export class AccountService extends TokenService {

  host: string = API_ADDRESS + '/account';

  constructor(private httpClient: HttpClient, private authenticationUtility: AuthenticationUtility) {
    super();
  }

  getToken(): string {
    return this.authenticationUtility.getToken();
  }

  refreshAccountInfo() {
    const uri = `${this.host}`;

    return this.httpClient.get<Account>(uri, { headers: this.resolveHeader()})
      .subscribe((x) => {
        this.authenticationUtility.setAccount(Object.keys(x).length ? x : null);
      });
  }

  logIn(username: string, password: string) {
    const uri = `${this.host}/login`;

    const result = this.httpClient.post(uri, {
      username,
      password
    }, {responseType: 'text', headers: this.resolveHeader()}).pipe(tap(res => {
      this.authenticationUtility.setToken(res);
      this.refreshAccountInfo();
    }));

    return result;
  }

  logOut() {
    const uri = `${this.host}/logout`;

    return this.httpClient.get(uri, {responseType: 'text', headers: this.resolveHeader()})
      .pipe(tap(_ => {
        this.authenticationUtility.setToken('');
        this.refreshAccountInfo();
      }));
  }

  register(fullname: string, email: string, username: string, password: string) {
    const uri = `${this.host}/register`;

    return this.httpClient.post(uri, {
      fullname,
      email,
      username,
      password
    }, {responseType: 'text', headers: this.resolveHeader()});
  }
}
