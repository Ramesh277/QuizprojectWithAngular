import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
    
    cid:any;
    quizzes:any 

  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.cid = params['catid'];
      
      if(this.cid ==0){
        //load quiz
        this._quiz.getActiveQuizzes().subscribe(
          (data:any)=>{
            this.quizzes = data;
            console.log(this.quizzes);
          },(error:any)=>{
            Swal.fire('error','Quiz loading error','error');
          }
        )

      }else{
        this._quiz.getActiveQuizzesOfCategory(this.cid).subscribe(
          (data:any)=>{
            this.quizzes = data
            console.log("this is quiz of category",this.quizzes);
          },(error:any)=>{
            Swal.fire('error','Quiz of category data fetching error ?','error');
          }
        );
      }
    });
  }
}
