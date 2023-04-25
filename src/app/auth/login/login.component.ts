import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/auth/auth.model';
import { AuthAccessHeader } from 'src/app/module/auth-access/auth-access.module';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new LoginModel()
  header = new AuthAccessHeader()

  constructor(private authService:AuthService) { }

  ngOnInit(){
    
  }

  loginUser(){
    let formData = new FormData()
    let formValue = Object.assign({},this.loginForm)
    this.authService.loginUser(formValue).subscribe(response => {
      if (response.access){
        this.header.storeAccessToken(response.access)
      }
      console.log(response)
    }, err => console.log(err))
  }
}
