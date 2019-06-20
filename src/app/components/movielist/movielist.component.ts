import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movies, State} from '../../models/movies.model';
import {MatDialog} from '@angular/material/dialog';
import * as MovieActions from './../../actions/movie.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import {PreviewComponent} from './../preview/preview.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  @Input('movieList') movies: any;//movieList alias
  @Input() showSpinner: boolean;
  @Output() cookieChanged = new EventEmitter();
  obs:Observable<any>;
  msg:string = "";
  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.showSpinner = true;
   }

  ngOnInit() {
  }
  
  mouseOverMovie(i){
    let movies = document.querySelectorAll(".movie-item") as any as Array<HTMLElement>;
    movies.forEach((m, index) => {
      if(index === i){
        m.classList.add("focus");
      }
      else{
        m.classList.add("not-focus");
      }
    })
  }
  mouseOutMovie(i){
    let movies = document.querySelectorAll(".movie-item") as any as Array<HTMLElement>;
    movies.forEach((m, index) => {
      m.classList.remove("focus");
      m.classList.remove("not-focus");
    })
  }
  previewMovie(m){
    this.store.dispatch(new MovieActions.SetPreview(m));
    let dg = this.dialog.open(PreviewComponent, {
      data: m
    });
    dg.componentInstance.cookieChanged.subscribe(()=>{
      this.cookieChanged.emit();
    });

  }

}
