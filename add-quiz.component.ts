import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddcategoryserviceService } from 'src/app/services/addcategoryservice.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {



  categories=[
    {
      cid:'',
      title:''
    }
  ]
  
  
 public quizData=
    {
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestins:'',
      active:true,
      category: {
        cid:'',
      }
    }
  

  constructor(private _CService:AddcategoryserviceService, 
    private _snack:MatSnackBar,private _addQuizservice:QuizService
    ) { }

  ngOnInit(): void {
    this._CService.getallcategory().subscribe(
      (data:any)=>{
        //success 
        this.categories = data
      },(error:any)=>{
        //error
        Swal.fire('error','Categories fetch error', 'error');
      }
    )
  }


  addQuiz()
  {
    if(this.quizData.title.trim() == '' || this.quizData.title == null)
    {
      this._snack.open('Required quiz title ?','',{
        duration:3000
      });
      return
    }
    if(this.quizData.description.trim() == '' || this.quizData.description == null)
    {
      this._snack.open('Required quiz Description ?','',{
        duration:3000
      });
      return
    }
    if(this.quizData.maxMarks.trim() == '' || this.quizData.maxMarks == null)
    {
      this._snack.open('Required quiz Maximum marks ?','',{
        duration:3000
      });
      return
    }
    if(this.quizData.numberOfQuestins.trim() == '' || this.quizData.numberOfQuestins == null)
    {
      this._snack.open('Required quiz Number Of Questions ?','',{
        duration:3000
      });
      return
    }

    //call to server 
    this._addQuizservice.addQuizzed(this.quizData).subscribe(
      (data:any)=>{
        //success
        Swal.fire('success','Quiz add successfuly ','success');
        this.quizData.title='',
        this.quizData.description='',
        this.quizData.maxMarks='',
        this.quizData.numberOfQuestins='',
        this.quizData.category.cid=''
      },(error:any)=>{
        //error
        Swal.fire('error','quiz add failed in sever ?','error');
        console.log(error);
      }
    );

  }


}
