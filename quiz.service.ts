import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  //add quiz into server
  public addQuizzed(quizData:any)
  {
    return this._http.post(`${baseUrl}/quiz/ad`,quizData);
  }

  //get the single quiz
  public getquiz(qid:any){
    return this._http.get(`${baseUrl}/quiz/${qid}`);
  }


  //quiz fetch from server
  public getAllQuiz()
  {
    return this._http.get(`${baseUrl}/quiz/all`);
  }

  //get quizzes of category 
  public getQuzzesOfCategory(id:any){
    return this._http.get(`${baseUrl}/quiz/catquiz/${id}`);
  }

  //get active quizzes
  public getActiveQuizzes(){
    return this._http.get(`${baseUrl}/quiz/active`);
  }

  //get active quizzes of category 
  public getActiveQuizzesOfCategory(cid:any){
    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }


}
