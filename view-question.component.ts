import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {


question=[
    {
      qid:'',
      content:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:''
    }
  ]


  quizid:any
  quiztitle:any


  constructor(private _route:ActivatedRoute, private _questionService:QuestionService) { }


  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.quizid = params['qid'];
    });
    
    this._route.params.subscribe(params=>{
      this.quiztitle = params['title']
    });
    //get data from the server 
    this._questionService.getQuestionofQuiz(this.quizid).subscribe(
      (data:any)=>{
        this.question = data;
      },(error:any)=>{
        Swal.fire('error','Question fetching is Error','error');

        console.log("this is quiz fetch error",error)
      }
    );
  }

}
