import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api';
import {Account} from '../models/Account';
import {Injectable} from '@angular/core';
import {AuthenticationUtility} from '../utilities/authentication.utility';

@Injectable()
export class AccountService {

  host: string = API_ADDRESS + '/account';

  constructor(private httpClient: HttpClient, private authenticationUtility: AuthenticationUtility) {
  }

  refreshAccountInfo() {
    const uri = `${this.host}`;

    return this.httpClient.get<Account>(uri)
      .subscribe((x) => {
        this.authenticationUtility.set(Object.keys(x).length ? x : null);
      });
  }

  logIn(username: string, password: string) {
    const uri = `${this.host}/login`;

    const result = this.httpClient.post(uri, {
      username,
      password
    }, { responseType: 'text'});

    return result;
  }

  logOut() {
    const uri = `${this.host}/logout`;

    const result = this.httpClient.get(uri, { responseType: 'text'});

    return result;
  }

  register(fullname: string, email: string, username: string, password: string) {
    const uri = `${this.host}/register`;

    const result = this.httpClient.post(uri, {
      fullname,
      email,
      username,
      password
    }, { responseType: 'text'});

    return result;
  }
}
