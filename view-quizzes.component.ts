import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  public quiz=[
    {
      qid:'',
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestins:'',
      category:{
        title:''
      }
    }
    
  ]
 

  constructor(private _Qservice:QuizService) { }

  ngOnInit(): void {
    this._Qservice.getAllQuiz().subscribe(
      (data:any)=>{
        //success
        this.quiz = data;
      },(error)=>{
        //error
        Swal.fire('error','quiz fetching error ??','error');
      }
    );
 }

}
