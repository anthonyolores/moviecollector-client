import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  State,Header} from '../../models/movies.model'
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  headerText:Observable<State>;
  @Output() public sidenavToggle = new EventEmitter();
 
  constructor(private store: Store<AppState>) { 
    this.headerText = store.select('movie');
  }
 
  ngOnInit() {
  }
 
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
 
}