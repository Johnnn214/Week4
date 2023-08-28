import { Component } from '@angular/core';
import { User } from 'src/user';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  standalone: true,
  imports:[ LoginComponent, CommonModule],
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private authService: AuthService){}
  currentuser:User = new User();
  loggedin:boolean = false;
  ngOnInit(){
    this.currentuser = JSON.parse(this.authService.getCurrentuser() || '{}');
    console.log(this.currentuser);
    if (sessionStorage.getItem('currentUser')){
      this.loggedin = true;
    }else{
      this.loggedin = false;
    }
  }
}
