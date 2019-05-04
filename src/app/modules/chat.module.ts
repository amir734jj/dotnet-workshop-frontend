import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationUtility} from '../utilities/authentication.utility';
import {ChatService} from '../services/chat.service';
import {ChatComponent} from '../components/chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ChatService, AuthenticationUtility],
  declarations: [ChatComponent],
  exports: [ChatComponent]
})
export class ChatModule {

}
