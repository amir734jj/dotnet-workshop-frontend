import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {appRoutes} from './RouterConfig';
import {RouterModule} from '@angular/router';
import {BoardModule} from './modules/board.module';
import {HttpClientModule} from '@angular/common/http';
import {QuestionModule} from './modules/question.module';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {AccountModule} from './modules/account.module';
import {CommonComponentModule} from './modules/common.module';
import {ChatModule} from './modules/chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ButtonsModule.forRoot(),
    HttpClientModule,
    CommonComponentModule,
    AccountModule,
    BoardModule,
    QuestionModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
