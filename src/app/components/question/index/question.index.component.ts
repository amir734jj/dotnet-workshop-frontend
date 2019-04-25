import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../../../services/board.service';
import {Question} from '../../../models/Question';

@Component({
  selector: 'app-question-index',
  templateUrl: './question.index.component.html',
  styleUrls: ['./question.index.component.sass']
})
export class QuestionIndexComponent implements OnInit {
  private question: Question;

  constructor(private route: ActivatedRoute, private router: Router, private questionService: QuestionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getQuestion(params.id);
    });
  }

  getQuestion(id: string) {
    this.questionService.getQuestion(id).subscribe(res => {
      this.question = res;
    });
  }

  deleteQuestion(id: string) {
    this.questionService.deleteQuestion(id).subscribe(() => {
      this.router.navigate(['./']);
    });
  }

  gotoEditQuestion(id: string) {
    this.router.navigate([`./question/${id}/edit`]);
  }
}
