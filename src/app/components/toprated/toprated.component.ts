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
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.scss']
})
export class TopratedComponent implements OnInit {

  topratedMovies: Movies;

  constructor(private movieapiService:MovieapiService, public dialog: MatDialog) { 
  }
  ngOnInit() {
    this.movieapiService.getTopRatedMovies().subscribe(response => {
      this.topratedMovies = response;
      console.log("This is from the api call");
      console.log(response);
    });
  }

  
}
