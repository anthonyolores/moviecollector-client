import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movies, State} from '../../models/movies.model';
import { AppState } from './../../app.state';
import {MovieapiService} from './../../services/movieapi.service';
import * as MovieActions from './../../actions/movie.actions';
import {PreviewComponent} from './../preview/preview.component';
import {MatDialog} from '@angular/material/dialog';

@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchedMovies:Movies;
  stateData: Observable<State>;
  startSearch:boolean;
  searchTimeout:any;

  constructor(private store: Store<AppState>, private movieapiService:MovieapiService, public dialog: MatDialog) { 
    this.stateData = this.store.select('movie');
    this.startSearch = false;
    this.searchTimeout = null;
  }
  ngOnInit() {
    this.searchedMovies = 0;
    this.movieapiService.discoverMovies().subscribe(response => {
      this.searchedMovies = response;
    });
  }
  onKeyUp(txt:string){
    if(this.searchTimeout != null){
      clearTimeout(this.searchTimeout);
    }
    if(txt.length > 0){
      this.searchedMovies = 0;
      this.searchTimeout = setTimeout(() => {
        this.movieapiService.searchMovies(txt).subscribe(response => {
          this.searchedMovies = response;
        });
      }, 800);
    }
    else{
      this.searchedMovies = null;
    }
  }

}
