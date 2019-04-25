import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../../services/board.service';
import {Question} from '../../../models/Question';

@Component({
  selector: 'app-board',
  templateUrl: './board.index.component.html',
  styleUrls: ['./board.index.component.sass']
})
export class BoardIndexComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  questions: Array<Question>;

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getQuestions().subscribe(res => {
      this.questions = res;
    });
  }
}
