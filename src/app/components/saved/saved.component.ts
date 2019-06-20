import { Component, OnInit} from '@angular/core';
import {MovieapiService} from './../../services/movieapi.service';
import {MoviecookieService} from './../../services/moviecookie.service';
import { Movies} from '../../models/movies.model';
import {forkJoin, Observable} from 'rxjs';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  savedMovies: Movies;

  constructor(private movieapiService:MovieapiService, private cookieService:MoviecookieService) {
    this.savedMovies = null;
   }

  ngOnInit() {
    this.setMovieList();
  }

  setMovieList(){
    let ids = this.cookieService.getIds() as any as [];
    if(ids.length > 0){
      let savedMovies$ = new Array(0);
      ids.forEach((id, i) => {
        savedMovies$.push(
          this.movieapiService.getDetail(id)
        );
      });
  
      forkJoin(savedMovies$).subscribe(movies=> {
        let tempMovies:any = {resuls:null};
        tempMovies.results = movies;
        this.savedMovies = tempMovies;
     });
    }
    else{
      this.savedMovies = {results:[]};
    }
  }

  cookieChanged(){
    this.setMovieList();
  }

}
