import {Injectable} from '@angular/core';
import {Account} from '../models/Account';

@Injectable()
export class AuthenticationUtility {
  private static ACCOUNT_INFO = null;

  public set(info: Account) {
    AuthenticationUtility.ACCOUNT_INFO = info;
  }

  public get() {
    return AuthenticationUtility.ACCOUNT_INFO;
  }
}
