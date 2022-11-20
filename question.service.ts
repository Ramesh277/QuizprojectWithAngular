import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }


 //add into server
  public addQuestionsintoServer(question:any)
  {
    return this._http.post(`${baseUrl}/question/add`,question);
  }

  //get questionOfQuiz
  public getQuestionofQuiz(quizid:any){
    return this._http.get(`${baseUrl}/question/quiz/all/${quizid}`)
  }

  //get questionOfQuiz
  public getQuestionofQuizForTest(quizid:any){
    return this._http.get(`${baseUrl}/question/quiz/${quizid}`)
  }

  //get quizofQuestions
  public getQuizQuestion(qid:any){
    return this._http.get(`${baseUrl}/question/quiz/${qid}`);
  }

  //eval quiz
  public evalQuiz(questions:any)
  {
return this._http.post(`${baseUrl}/question/eval_quiz`,questions);
  }

}
