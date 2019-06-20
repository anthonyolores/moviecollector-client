import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {
  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
  }); 

  serverURL:string = 'https://moviecollectorapp.herokuapp.com/';
  //serverURL:string = 'http://localhost:8085/';

  constructor(private http:HttpClient) { 
  }

  getPopularMovies(): Observable<any> {
    return this.http.post((this.serverURL + 'movies/popular'),this.httpHeaders);
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.post((this.serverURL + 'movies/top_rated'),this.httpHeaders);
  }

  getDetail(id:string): Observable<any> {
    return this.http.post((this.serverURL + 'movies/detail?id='+id),this.httpHeaders);
  }

  getKeywords(movie:any): Observable<any> {
    return this.http.post((this.serverURL + 'keywords?id='+movie.id),this.httpHeaders);
  }

  searchMovies(searchTxt:string): Observable<any> {
    return this.http.post((this.serverURL + 'movies/search?search='+searchTxt),this.httpHeaders);
  }

  discoverMovies(): Observable<any> {
    return this.http.post((this.serverURL + 'movies/discover'),this.httpHeaders);
  }
}
