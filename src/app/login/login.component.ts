import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginUser } from '../user';


@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

user : LoginUser =
  {
    userName : '',
    password : ''
  }

login()
{
  alert("success");
  console.log(this.user);
  this.user.userName = '';
  this.user.password  = '' ;  
}

}
