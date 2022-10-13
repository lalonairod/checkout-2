import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  flag !: boolean

  constructor(public authService : AuthService) { 
    
  }

  ngOnInit(): void {
    
  }

  search(){
    
  }

}
