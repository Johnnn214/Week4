import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'src/user';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports:[ LoginComponent, CommonModule, FormsModule],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  loggedin:boolean = false;
  show:boolean = false;
  
  ngOnInit(){
    this.currentuser = JSON.parse(this.authService.getCurrentuser() || '{}');
    console.log(this.currentuser);
    if (sessionStorage.getItem('currentUser')){
      this.loggedin = true;
    }else{
      this.loggedin = false;
    }
    console.log(this.show)
  }
  
  constructor(private authService: AuthService){}
  currentuser:User = new User();
  username:string = this.currentuser.username;
  birthdate:string = this.currentuser.birthdate;
  age:number = this.currentuser.age;

 
  edit(event:any){
    this.show =true;
    console.log(this.show)
  }
  cancel(event:any){
    this.show =false;
    console.log(this.show)
  }
  submitform(event:any){
    this.currentuser = new User(this.username, this.birthdate, this.age, this.currentuser.email);
    console.log(this.currentuser);
    this.authService.setCurrentuser(this.currentuser);
  }

}
