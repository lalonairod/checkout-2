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
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CharacterComponent,
    CharactersComponent,
    ComicComponent,
    ComicsComponent,
    SerieComponent,
    SeriesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
