import {Injectable} from '@angular/core';
import {AuthenticationUtility} from '../utilities/authentication.utility';
import {HttpTransportType, HubConnection} from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import {BASE_ADDRESS} from '../constants/api';

@Injectable()
export class ChatService {
  private _connection: HubConnection;

  constructor(private authenticationUtility: AuthenticationUtility) {

  }

  send<T>(method: string, arg: T) {
    this._connection.invoke(method, arg).then();

    return this;
  }

  registerHandler<T>(method: string, handler: (T) => void) {
    this._connection.on(method, handler);

    return this;
  }

  build() {
    if (this.authenticationUtility.getToken()) {
      this._connection = new signalR.HubConnectionBuilder()
        .withUrl(`${BASE_ADDRESS}/chat`, {
          accessTokenFactory: () => this.authenticationUtility.getToken(),
          transport: HttpTransportType.LongPolling
        })
        .configureLogging(signalR.LogLevel.Information)
        .build();
    }

    return this;
  }

  start() {
    this._connection.start().then(() => {
      console.log("connected");
    });
  }
}
