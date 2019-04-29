import {Injectable} from '@angular/core';
import {Account} from '../models/Account';

@Injectable()
export class AuthenticationUtility {
  private static BEARER_TOKEN = 'BEARER_TOKEN';
  private static ACCOUNT_INFO: Account = null;

  public setAccount(info: Account) {
    AuthenticationUtility.ACCOUNT_INFO = info;
  }

  public getAccount() {
    return AuthenticationUtility.ACCOUNT_INFO;
  }

  public setToken(token: string) {
    localStorage.setItem(AuthenticationUtility.BEARER_TOKEN, token);
  }

  public getToken() {
    return localStorage.getItem(AuthenticationUtility.BEARER_TOKEN);
  }
}
