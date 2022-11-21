import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  qid:any;
  questionData:any;

  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;
 
  isSubmit = false;
  timer:any;

  

  constructor(private _Loction:LocationStrategy,
    private _route:ActivatedRoute,
    private _question:QuestionService    
    ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this._route.params.subscribe((params)=>{
      this.qid = params['qid'];
    });  
    
    this.loadQuestions();
  }

  //load questions
 loadQuestions(){
  this._question.getQuestionofQuizForTest(this.qid).subscribe(
    (data:any)=>{
      this.questionData = data;

      //timer load 
      this.timer = this.questionData.length * 1 * 60;

      //don't required if you have write code into server 
      // this.questionData.forEach((q:any)=>{
      //   q['givenAnswer'] = '';

      //   console.log(this.questionData)
      // });
      this.startTimer();

    },(error:any)=>{
      Swal.fire('error','Question fetching Error','error');
    }
  )

 }


  //that don't allow to go back 
  preventBackButton()
  {
    history.pushState(null,  location.href);
    this._Loction.onPopState(()=>{
      history.pushState(null, location.href);
    })

  }

  //
  submitQuiz()
  {
    Swal.fire({
      title: 'Do you want to Submit the Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: `Cancel`,
      icon:'info',
    }).then((e)=>{
     if(e.isConfirmed){
      //calculation
      this.evalQuiz();
      
     }
    });
  }

  //start timer 
  startTimer()
  {
    let t = window.setInterval(()=>{
      //code 
      if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000
    );
  }
  //

  getFormatedTime()
  {
    let mm = Math.floor(this.timer/60);
    let ss = this.timer-mm*60;
    return `${mm} min : ${ss} sec`;
  }

  //evaluate quiz time 
  evalQuiz()
  {

    //called to server for check questions
    this._question.evalQuiz(this.questionData).subscribe(
      (data:any)=>{
        //success
        this.marksGot = data.marksGot;
        this.correctAnswers = data.correctAnswers;
        this.attempted = data.attempted;
        this.isSubmit = true
      },(error:any)=>{
        //error
        Swal.fire('error','Data Sending error','error');
      }
    )

    // frontend 
    // this.isSubmit = true
    // this.questionData.forEach((q:any)=>{
    //   if(q.givenAnswer == q.answer)
    //   {
    //     this.correctAnswers++;
    //     let marksSingle = this.questionData[0].quiz.maxMarks/this.questionData.length
    //     this.marksGot += marksSingle;
    //   }
    //   if(q.givenAnswer.trim() != '')  {
    //     this.attempted++;
    //   }     
    // });
    // console.log("currect answer = ",this.correctAnswers);
    // console.log("got marks ",this.marksGot);

    // console.log("attempted = ",this.attempted);
  }

  // print fucntion
  printPage(){
    window.print();
  }

}
