// routerConfig.ts

import {Routes} from '@angular/router';
import {BoardIndexComponent} from './components/board/index/board.index.component';
import {QuestionIndexComponent} from './components/question/index/question.index.component';
import {QuestionSaveComponent} from './components/question/save/question.save.component';
import {QuestionUpdateComponent} from './components/question/update/question.update.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: BoardIndexComponent
  },
  {
    path: 'home',
    component: BoardIndexComponent
  },
  {
    path: 'board',
    component: BoardIndexComponent
  },
  {
    path: 'question/new',
    component: QuestionSaveComponent
  },
  {
    path: 'question/:id/edit',
    component: QuestionUpdateComponent
  },
  {
    path: 'question/:id',
    component: QuestionIndexComponent
  }
];
