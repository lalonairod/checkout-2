import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  title='Comics';

  constructor(public authService : AuthService, private marvelService : MarvelService, private router : Router) { }
  comics?:Observable<any>;

  ngOnInit() {
    this.getAllComics();
  }

  logout(){
    
    this.router.navigate(['auth']);
  }

  getAllComics(){
    this.comics = this.marvelService.getComics();
  }

  getComics(id:string){
    this.router.navigate(['/comic/',id]);
  }

}
