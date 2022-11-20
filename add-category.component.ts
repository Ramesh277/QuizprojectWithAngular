import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddcategoryserviceService } from 'src/app/services/addcategoryservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

 public category= {
  title:'',
  description:''
 }

  constructor(private catService:AddcategoryserviceService,
    private _snack:MatSnackBar
    ) { }

  ngOnInit(): void {
  
  }
  addCategory()
  {
   if(this.category.title.trim() == '' || this.category.title == null)
   {
    this._snack.open('Category title is required ??','',{
      duration:3000
    });
    return;
   }
   if(this.category.description.trim() == '' || this.category.description == null)
   {
    this._snack.open('Category description is required ??','',{
      duration:3000
    });
    return;
   }

   //server call
   this.catService.addCategory(this.category).subscribe(
    (data:any)=>{
      //success
      Swal.fire('success','Category add successfuly ','success');
      this.category.title='',
      this.category.description=''
    },(error:any)=>{
      //failed 
      Swal.fire('error','failed to add category ?','error');
    }
   );
  }


}
