import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  email:string;
  password:string;
  message;

  constructor(public authguard:AuthGuard) { }

  login(){
    this.authguard.login(this.email, this.password);
    this.message = this.authguard.message;
  }
  register(){
    this.authguard.signup(this.email, this.password);
    this.message = this.authguard.message;
  }
  logout(){
    this.authguard.logout();
  }
  ngOnInit() {
  }

}
