import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  title : string = 'Characters';

  constructor( public authService : AuthService, private marvelService : MarvelService, private router : Router) { }

  characters ?: Observable<any>;

  ngOnInit(): void {
    this.getAllCharacters();
  }

  logout(){
    
    this.router.navigate(['auth']);
  }

  getAllCharacters(){
    this.characters = this.marvelService.getCharacters();
  }

  getCharacter(id : string){
    this.router.navigate(['/character/', id]);
  }

}
