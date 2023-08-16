import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  pwd:string = "";
  private router = inject(Router);
  errormsg: string ="";

  ngOnInit() {
  }

  signin(event:any){
    console.log("at signin");
    console.log(this.email,this.pwd);
    let users = [{'email':'john@com.au','password':'123'},
    {'email':'john@com.au','password':'123'},
    {'email':'john@com.au','password':'123'}]
    event.preventDefault();
    for (let i=0; i<users.length; i++){
      if (this.email == users[i].email && this.pwd == users[i].password){
          this.router.navigate(['/account']);
          console.log("login success");
      }else{
        console.log(this.errormsg);
        this.errormsg="User credentials do not match";
      }   
    }
  }

}
