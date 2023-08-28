import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';
  constructor(private authServices: AuthService) { }

  logout(event:any){
    this.authServices.logout(event);
    }
}
