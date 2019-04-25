import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionService} from '../services/board.service';
import {BoardIndexComponent} from '../components/board/index/board.index.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [QuestionService],
  declarations: [BoardIndexComponent],
  exports: [BoardIndexComponent]
})
export class BoardModule {

}
