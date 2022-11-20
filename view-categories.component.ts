import { Component, OnInit } from '@angular/core';
import { AddcategoryserviceService } from 'src/app/services/addcategoryservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {


 public  Category=[
  {
    title:'',
    description:''
  }
]

  constructor(private _catService:AddcategoryserviceService) { }

  ngOnInit(): void {
    this._catService.getallcategory().subscribe(
      (data:any)=>{
        this.Category = data;
      },(error:any)=>{
        Swal.fire('error','error category fetch From the server ','error');
      }
    )
  }

}
