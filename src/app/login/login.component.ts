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

  ngOnInit() {
    throw new Error('Method not implemented.');
  }
  signin(event:any){
    this.router.navigate(['/account']);
  }

}
