import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule , FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

user : User =
  {
    userName : '',
    email : '',
    password : ''
  }

register()
{
  alert("success");
  console.log(this.user);
  this.user.userName = '';
  this.user.password  = '' ; 
  this.user.email = '' ; 
}

}
