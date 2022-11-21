import { Component, OnInit } from '@angular/core';
import { AddcategoryserviceService } from 'src/app/services/addcategoryservice.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-left-page',
  templateUrl: './left-page.component.html',
  styleUrls: ['./left-page.component.css']
})
export class LeftPageComponent implements OnInit {

  category=[
  {
    cid:'',
    title:''
  }
  ]
  cid:any
  catid:any

  constructor(private service:LoginService,private Catservice:AddcategoryserviceService) { }

  ngOnInit(): void {
    this.Catservice.getallcategory().subscribe(
      (data:any)=>{
        this.category = data
      },(error:any)=>{
        Swal.fire('error','category fetching error ','error');
      }
    );
  }

    //logout
    public logout(){
      this.service.logout();
      window.location.reload();
    }

}
