import { Component, OnInit } from '@angular/core';
import { AddquestionanswerService } from 'src/app/services/addquestionanswer.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listofquestionanswer',
  templateUrl: './listofquestionanswer.component.html',
  styleUrls: ['./listofquestionanswer.component.css']
})


export class ListofquestionanswerComponent implements OnInit{
 
  AnswerQuestioness = [
    {
      qaid:'',
      qatitle:'',
      content:'',
      publishdate:'',
      category:'',
      writername:''
    }
  ]
 

  constructor(private QAService:AddquestionanswerService) { }

  ngOnInit(): void {
    this.QAService.getLists().subscribe(
      (data:any)=>{
        //succes data come here 
        this.AnswerQuestioness =data
      },(error:any)=>{
        //error data come here 
        console.log(error);
        Swal.fire("error","Data fetching error ","error");

      }
    );
    
  }

 
  //delete AQ
  deleteQA(qaid:any){
    Swal.fire({
      icon:'info',
      title :'Are you sure ?',
      confirmButtonText :'Delete',
      showCancelButton : true,
      }).then((result)=>{
        if(result.isConfirmed){
          //delete QA 
          this.QAService.deleteQA(qaid).subscribe(
            (data:any)=>{
              this.AnswerQuestioness = this.AnswerQuestioness.filter((QAService)=> QAService.qaid != qaid);
              Swal.fire('Success','Question Answer is Deleted ','success');
            },(error:any)=>{
              Swal.fire('Error','QA deleting error','error');
            }
          );
        }
      });
     }
    

}
