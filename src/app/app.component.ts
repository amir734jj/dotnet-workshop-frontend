import { Component } from '@angular/core';
import {AuthenticationUtility} from './utilities/authentication.utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dotnet-intermediate-workshop';

  constructor(private authenticationUtility: AuthenticationUtility) { }

  isAuthenticated() {
    return !!this.authenticationUtility.getAccount();
  }
}
