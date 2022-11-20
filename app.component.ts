import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{
  title = 'spacecoding';
  isLoggedIn =false;
  user = null;
  constructor(private service:LoginService){}

  ngOnInit(): void {
   this.isLoggedIn = this.service.isLoggedIn();
   this.user = this.service.getUser();
   this.service.loginStatusSubject.asObservable().subscribe(
    (data)=>{
      this.user = this.service.getUser();
      this.isLoggedIn = this.service.isLoggedIn();
    }
   )
  }

}
