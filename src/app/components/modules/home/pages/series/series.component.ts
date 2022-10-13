import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  title : string = 'Series';

  constructor(public authService : AuthService, private marvelService : MarvelService, private router : Router) { }
  
  series?:Observable<any>;

  ngOnInit(): void {
    this.getAllSeries();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['auth']);
  }

  getAllSeries(){
    this.series = this.marvelService.getSeries();
  }

  getSeries(id:string){
    this.router.navigate(['/serie/',id]);
  }

}
