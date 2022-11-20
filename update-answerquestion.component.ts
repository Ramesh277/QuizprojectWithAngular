import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddquestionanswerService } from 'src/app/services/addquestionanswer.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-answerquestion',
  templateUrl: './update-answerquestion.component.html',
  styleUrls: ['./update-answerquestion.component.css']
})
export class UpdateAnswerquestionComponent implements OnInit {

  
  qaId:any;
  QAnswer:any;
  subid:any;

  constructor(
    private QAservice:AddquestionanswerService,
    private rout:Router,
    private _route:ActivatedRoute
    ) { }



  ngOnInit(): void {
   this.qaId = this._route.params.subscribe(params=>{
      this.subid = params['qaid'];
    });
   this.QAservice.getSingle(this.subid).subscribe(
   (data:any)=>{
    this.QAnswer =data
   
   },(error:any)=>{
    Swal.fire('error','Data fetching error ??','error');
    console.log("this is data tetching error",error);
   }
   );
  }

  updateForm(){
    //update QA 
    this.QAservice.updateQA(this.QAnswer).subscribe(
      (data:any)=>{
        //success to upadate 
        Swal.fire('success','Data update successfuly .','success');

        this.rout.navigate(['/admin/listofQueAns'])
      },(error:any)=>{
        //error 
        Swal.fire('error','Data update failed ','error');
      }
    )
    
  }

}
