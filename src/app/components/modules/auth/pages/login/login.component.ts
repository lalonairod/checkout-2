import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import StorageHelper from 'src/app/libs/helpers/storage.helper';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  error : string = '';
  username : string = '';
  password : string = '';

  constructor(public authService : AuthService, private formBuilder : FormBuilder, private route : Router) {
    this.authService.setSession();
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  submit(){
    this.authService.loginForm(this.username, this.password).subscribe(
      {
        next : (res) => {
          StorageHelper.setItem('session', res);
          this.route.navigate(['home']);
        }
      });
  }

  logout(){
    this.authService.logout();
  }


}
