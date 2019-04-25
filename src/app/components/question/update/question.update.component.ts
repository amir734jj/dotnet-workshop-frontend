import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../../services/board.service';
import {Question} from '../../../models/Question';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-question-update',
  templateUrl: './question.update.component.html',
  styleUrls: ['./question.update.component.sass']
})
export class QuestionUpdateComponent implements OnInit {

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

  handleUpdateQuestion() {
    this.questionService.updateQuestion(this.question)
      .subscribe(res => {
        this.router.navigate(['./']);
      });
  }

}
