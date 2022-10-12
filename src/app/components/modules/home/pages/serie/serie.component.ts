import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  constructor(public authService : AuthService, private marvelService : MarvelService, private activatedRoute : ActivatedRoute, private router : Router) { 
    this.activatedRoute.params.subscribe(params => {
      
      this.idSerie = params['id'];
    })
  }

  title='Serie';
  idSerie='';
  serie:any={};
  serieDesc='';

  ngOnInit(){
    this.getIdSerie();
  }

  logout(){
    
    this.router.navigate(['auth']);
  }

  getIdSerie(){

    this.marvelService.getSerie(this.idSerie).subscribe({

      next:(res)=>{
        
        let dataSerie={
          title:res[0].title,
          description:res[0].description,
          thumbnailPath:res[0].thumbnail.path,
          thumbnailExtension:res[0].thumbnail.extension,
          format:res[0].format,
          urls:res[0].urls[0].url,  

        };
        this.serie = dataSerie;
        
        if (this.serie.description === '') {

          this.serieDesc = 'No description'
          
        }else{
          this.serieDesc = this.serie.description
        }

        },
      error:(err)=>{
        console.log(err);
      }
    })

  }

}
