import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from 'src/user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private router = inject(Router);
  
  private AuthService = inject (AuthService);
  email:string = "";
  pwd:string = "";
  errormsg: string ="";
  newuser:User = new User();
  loggedin:boolean = false;
  ngOnInit() {
    if (sessionStorage.getItem('currentUser')){
      this.loggedin = true;
    }else{
      this.loggedin = false;
    }
  }

  signin(event:any){
    console.log("at signin");
    event.preventDefault();
    this.AuthService.login(this.email,this.pwd).subscribe({
      next:
        (data)=>{
          if (data.valid == true){
            this.newuser = new User(data.username, data.birthdate, data.age, data.email, data.password, data.valid)
            this.AuthService.setCurrentuser(this.newuser);
            this.router.navigate(['/']);
          }else{
           
            this.errormsg = "There is a problem with the credentials";
          }
      
      error:
        this.errormsg = "There is a problem with the credentials";
      
    }
      
   
  })
  }

}
