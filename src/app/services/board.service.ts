import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ADDRESS} from '../constants/api';
import {Question} from '../models/Question';
import {TokenService} from './abstracts/token.service';
import {AuthenticationUtility} from '../utilities/authentication.utility';
import {SortKeyEnum} from '../models/enums/SortKeyEnum';
import {EnumValues} from 'enum-values';

@Injectable()
export class QuestionService extends TokenService {

  host: string = API_ADDRESS + '/question';

  constructor(private http: HttpClient, private authenticationUtility: AuthenticationUtility) {
    super();
  }

  getToken(): string {
    return this.authenticationUtility.getToken();
  }

  search(keyword: string) {
    const uri = `${this.host}/search`;
    return this
      .http
      .get<Question[]>(uri, {headers: this.resolveHeader(), params: {keyword: keyword}});
  }

  saveQuestion(question: Question) {
    const uri = `${this.host}`;
    return this
      .http
      .post<Question>(uri, question, {headers: this.resolveHeader()});
  }

  getQuestion(id: string) {
    const uri = `${this.host}/${id}`;
    return this
      .http
      .get<Question>(uri, {headers: this.resolveHeader()});
  }

  getQuestions(sortKey: SortKeyEnum) {
    const uri = `${this.host}`;
    return this
      .http
      .get<Question[]>(uri, {headers: this.resolveHeader(), params: {sortKey: sortKey.toString()}});
  }

  deleteQuestion(id: string) {
    const uri = `${this.host}/${id}`;
    return this
      .http
      .delete<boolean>(uri, {headers: this.resolveHeader()});
  }

  updateQuestion(question: Question) {
    const uri = `${this.host}/${question.id}`;
    return this
      .http
      .put<boolean>(uri, question, {headers: this.resolveHeader()});
  }
}
