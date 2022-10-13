import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  title : string = 'Name';
  idCharacter : string = '';
  character : any = {};
  characterDesc = '';

  constructor( public authService : AuthService, private marvelService : MarvelService, private activatedRoute: ActivatedRoute, private router :Router) { 

    this.activatedRoute.params.subscribe( params => {
      this.idCharacter = params['id'];
    });
  }

  ngOnInit() {
    this.getIdCharacter();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['auth']);
  }

  getIdCharacter(){
    console.log('ID: ',this.idCharacter);
    this.marvelService.getCharacter(this.idCharacter).subscribe({
      next : (res) => {
        let dataCharacter = {
          name : res[0].name,
          description : res[0].description,
          thumbnailPath : res[0].thumbnail.path,
          thumbnailExtension : res[0].thumbnail.extension,
          modified : res[0].modified,
          urls : res[0].urls[0].url
        }
        this.character = dataCharacter;
        console.log(this.character);

        if(this.character.description === ''){

          this.characterDesc = 'No Description';

        } else{
          this.characterDesc = this.character.description;
        }
      },
      error : (err) => {
        console.log(err);
      }
    })
  }

}
