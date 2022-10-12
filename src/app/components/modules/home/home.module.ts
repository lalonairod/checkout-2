import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ComicComponent } from './pages/comic/comic.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { SerieComponent } from './pages/serie/serie.component';
import { SeriesComponent } from './pages/series/series.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [
    CharacterComponent,
    CharactersComponent,
    ComicComponent,
    ComicsComponent,
    SerieComponent,
    SeriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
