import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api';
import {Question} from '../models/Question';

@Injectable()
export class QuestionService {

  host: string = API_ADDRESS + '/question';

  constructor(private http: HttpClient) {
  }

  saveQuestion(question: Question) {
    const uri = `${this.host}`;
    return this
      .http
      .post<Question>(uri, question);
  }

  getQuestion(id: string) {
    const uri = `${this.host}/${id}`;
    return this
      .http
      .get<Question>(uri);
  }

  getQuestions() {
    const uri = `${this.host}`;
    return this
      .http
      .get<Array<Question>>(uri);
  }

  deleteQuestion(id: string) {
    const uri = `${this.host}/${id}`;
    return this
      .http
      .delete<boolean>(uri);
  }

  updateQuestion(question: Question) {
    const uri = `${this.host}/${question.id}`;
    return this
      .http
      .put<boolean>(uri, question);
  }
}
