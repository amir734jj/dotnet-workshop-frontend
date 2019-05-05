import {Injectable} from '@angular/core';
import {AuthenticationUtility} from '../utilities/authentication.utility';
import {HttpTransportType, HubConnection} from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import {BASE_ADDRESS} from '../constants/api';

@Injectable({
 providedIn: 'root'
})
export class ChatService {
  private static CONNECTION: HubConnection;
  private _connected: boolean;

  constructor(private authenticationUtility: AuthenticationUtility) { }

  send<T>(method: string, arg: T) {
    if (this._connected && ((ChatService.CONNECTION) as any).connectionState) {
      ChatService.CONNECTION.invoke(method, arg).then();
    }

    return this;
  }

  registerHandler<T>(method: string, handler: (T) => void) {
    ChatService.CONNECTION.on(method, handler);

    return this;
  }

  build() {
    if (!ChatService.CONNECTION && this.authenticationUtility.getToken()) {
      ChatService.CONNECTION = new signalR.HubConnectionBuilder()
        .withUrl(`${BASE_ADDRESS}/chat`, {
          accessTokenFactory: () => this.authenticationUtility.getToken(),
          transport: HttpTransportType.LongPolling
        })
        .build();
    }

    return this;
  }

  start() {
    ChatService.CONNECTION.start().then(() => {
      this._connected = true;
    });
  }
}
