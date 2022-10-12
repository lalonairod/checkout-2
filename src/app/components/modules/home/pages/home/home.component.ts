import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  character$!: Observable<any>
  title : string = 'Name';
  idCharacter : string = '1009146';
  character : any = {};
  characterDesc = '';

  constructor(public marvelService: MarvelService, private activatedRoute: ActivatedRoute, private router : Router) { 
    
  }

  ngOnInit(): void { 
    this.getIdCharacter();
  }

  logout(){
    this.router.navigate(['auth']);
  }

  getIdCharacter(){
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
