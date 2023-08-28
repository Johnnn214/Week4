import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'src/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private authService: AuthService){}
  currentuser:User = new User();
  selectedfile:any = null;

  ngOnInit(){
    this.currentuser = JSON.parse(this.authService.getCurrentuser() || '{}');
    console.log(this.currentuser);
  }
  onFileSelected(event:any){
    this.selectedfile = event.target.files[0];
  }

}
