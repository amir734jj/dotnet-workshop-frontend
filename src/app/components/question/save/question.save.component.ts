import {Component, OnInit} from '@angular/core';
import {Question} from '../../../models/Question';
import {QuestionService} from '../../../services/board.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question-save',
  templateUrl: './question.save.component.html',
  styleUrls: ['./question.save.component.sass']
})
export class QuestionSaveComponent implements OnInit {

  question: Question;

  constructor(private router: Router, private questionService: QuestionService) {
    this.question = null;
  }

  ngOnInit() {
    this.question = new Question();
  }

  handleSaveQuestion() {
    this.questionService.saveQuestion(this.question)
      .subscribe(res => {
        this.router.navigate(['./']);
      });
  }
}
