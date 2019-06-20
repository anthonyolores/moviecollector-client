import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import * as MovieActions from './../../actions/movie.actions';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
 
  constructor(private store: Store<AppState>) { }
 
  ngOnInit() {
  }

  setHeader(name) {
    this.store.dispatch(new MovieActions.SetHeader({name: name}));
    this.sidenavClose.emit();
  }
 
}