import {HttpHeaders} from '@angular/common/http';

export abstract class TokenService {

  abstract getToken(): string;

  resolveHeader() {
    let token = this.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
}
