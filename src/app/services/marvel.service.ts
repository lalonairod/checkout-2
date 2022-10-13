import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const URL_API = environment.apiMarvel
const PUBLIC_KEY = environment.public_key;
const HASH = environment.hash;

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http : HttpClient) { }

  getCharacters() : Observable<any>{

    return this.http.get<any>(`${URL_API}/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`).
    pipe(map((data:any) => 
      data.data.results
    ));

  }

  getCharacter( id : string) : Observable<any> {

    return this.http.get<any>(`${URL_API}/characters/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`).
    pipe(map((data:any) => 
      data.data.results
    ));

  }

  getAllCharacterNameStart(nameStart: string): Observable<Object> {
    return this.http.get<any>(`${URL_API}/characters?nameStartsWith=${nameStart}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`).pipe(
      map((response: any) => response.data.results));
  }

  getComics():Observable<any>{
    return this.http.get<any>(`${URL_API}/comics?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`).pipe(map((data:any)=>data.data.results));
  }

  getComic(id: string):Observable<any>{
    return this.http.get(`${URL_API}/comics/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`).pipe(map((data:any)=>data.data.results));
  }

  getSeries():Observable<any>{
    return this.http.get<any>(`${URL_API}/series?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`).pipe(map((data:any)=>data.data.results));
  }

  getSerie(id: string):Observable<any>{
    return this.http.get(`${URL_API}/series/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`).pipe(map((data:any)=>data.data.results));
  }
}
