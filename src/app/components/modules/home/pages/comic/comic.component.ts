import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  constructor(public authService : AuthService, private marvelService : MarvelService, private activatedRoute : ActivatedRoute, private router : Router) { 
    this.activatedRoute.params.subscribe(params => {
      
      this.idComic = params['id'];
    })
  }

  title='Comic';
  idComic='';
  comic:any={};
  comicDesc='';

  ngOnInit(){
    this.getIdComic();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['auth']);
  }

  getIdComic(){

    this.marvelService.getComic(this.idComic).subscribe({

      next:(res)=>{
        
        let dataComic={
          title:res[0].title,
          description:res[0].description,
          thumbnailPath:res[0].thumbnail.path,
          thumbnailExtension:res[0].thumbnail.extension,
          format:res[0].format,
          urls:res[0].urls[0].url,  

        };
        this.comic = dataComic;
        
        if (this.comic.description === '') {

          this.comicDesc = 'No description'
          
        }else{
          this.comicDesc = this.comic.description
        }

        },
      error:(err)=>{
        console.log(err);
      }
    })

  }

}
