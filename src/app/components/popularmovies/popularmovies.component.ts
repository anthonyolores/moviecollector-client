import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movies, State} from '../../models/movies.model';
import { AppState } from './../../app.state';
import {MovieapiService} from './../../services/movieapi.service';
import {SetMoviesPopular} from './../../actions/movie.actions';
import * as MovieActions from './../../actions/movie.actions';
import {PreviewComponent} from './../preview/preview.component';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.scss']
})
export class PopularmoviesComponent implements OnInit {

  stateData: Observable<State>;
  popularMovies: Movies;

  constructor(private store: Store<AppState>, private movieapiService:MovieapiService, public dialog: MatDialog) { 
    this.stateData = this.store.select('movie');
    this.popularMovies = null;
  }

  ngOnInit() {
    this.movieapiService.getPopularMovies().subscribe(response => {
      console.log("This is from the api call");
      console.log(response);
      this.store.dispatch(new SetMoviesPopular(response) );
      this.stateData.subscribe(value => {
        this.popularMovies = value.popularMovies;
      });
    });
  }

  
}
