import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import StorageHelper from '../libs/helpers/storage.helper';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth : boolean = false;
  public username! : string;
  public password! : string;
  public token : string = '';

  constructor(private router : Router, private http : HttpClient){}

  loginForm( username : string, password : string ): Observable<any>{
    this.auth = true;
    console.log('Iniciando sesión...');
    return this.http.post(environment.login+'login', 
    { username, password });
  }

  refreshToken(){
    return this.http.post(environment.login+'refresh', {
      session: StorageHelper.getItem('session')
    })
  }

  flag() : boolean {
    return !this.auth
  }

  logout() {
    this.auth = false;
    localStorage.clear();
  }

  showSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
    return this.auth;
  }

  setSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
  }

}
