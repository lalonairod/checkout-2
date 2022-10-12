import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './pages/series/series.component';
import { SerieComponent } from './pages/serie/serie.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { ComicComponent } from './pages/comic/comic.component';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    children : [
      {
        path : 'home',
        component : HomeComponent
      },
      {
        path : 'characters',
        component : CharactersComponent
      },
      {
        path : 'character/:id',
        component : CharacterComponent
      },
      {
        path : 'comic/:id',
        component : ComicComponent
      },
      {
        path : 'comics',
        component : ComicsComponent
      },
      {
        path : 'serie/:id',
        component : SerieComponent
      },
      {
        path : 'series',
        component : SeriesComponent
      },
      {
        path : '**',
        redirectTo : 'characters'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports :
  [RouterModule]
})
export class HomeRoutingModule { }